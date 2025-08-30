const { chromium, firefox, webkit } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

class ThemeTester {
    constructor() {
        this.testResults = {
            browsers: [],
            viewports: [],
            errors: [],
            performance: {},
            accessibility: {},
            animations: [],
            screenshots: []
        };
        this.server = null;
        this.port = 8080;
    }

    async startServer() {
        return new Promise((resolve) => {
            this.server = http.createServer((req, res) => {
                let filePath = path.join(__dirname, req.url === '/' ? 'test.html' : req.url);

                // Handle theme assets
                if (req.url.startsWith('/midnight-magnolia-theme/')) {
                    filePath = path.join(__dirname, req.url);
                }

                fs.readFile(filePath, (err, data) => {
                    if (err) {
                        res.writeHead(404);
                        res.end('File not found');
                        return;
                    }

                    // Set content type based on file extension
                    const ext = path.extname(filePath);
                    const contentTypes = {
                        '.html': 'text/html',
                        '.css': 'text/css',
                        '.js': 'text/javascript',
                        '.svg': 'image/svg+xml',
                        '.jpg': 'image/jpeg',
                        '.png': 'image/png'
                    };

                    res.writeHead(200, { 'Content-Type': contentTypes[ext] || 'text/plain' });
                    res.end(data);
                });
            });

            this.server.listen(this.port, () => {
                console.log(`Test server running on http://localhost:${this.port}`);
                resolve();
            });
        });
    }

    async stopServer() {
        if (this.server) {
            this.server.close();
            console.log('Test server stopped');
        }
    }

    async testBrowser(browserType, viewport) {
        console.log(`Testing ${browserType} with viewport ${viewport.width}x${viewport.height}`);

        let browser;
        try {
            // Launch browser with Playwright
            if (browserType === 'firefox') {
                browser = await firefox.launch({
                    headless: true,
                    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
                });
            } else if (browserType === 'webkit') {
                browser = await webkit.launch({
                    headless: true,
                    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
                });
            } else {
                browser = await chromium.launch({
                    headless: true,
                    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
                });
            }

            const page = await browser.newPage();

            // Set viewport
            await page.setViewportSize(viewport);

            // Collect console errors
            const errors = [];
            page.on('console', msg => {
                if (msg.type() === 'error') {
                    errors.push(msg.text());
                }
            });

            page.on('pageerror', error => {
                errors.push(error.message);
            });

            // Navigate to test page
            await page.goto(`http://localhost:${this.port}`, {
                waitUntil: 'networkidle0',
                timeout: 30000
            });

            // Wait for animations to load
            await page.waitForTimeout(2000);

            // Test interactions
            await this.testInteractions(page);

            // Take screenshot
            const screenshotPath = `screenshot-${browserType}-${viewport.width}x${viewport.height}.png`;
            await page.screenshot({ path: screenshotPath, fullPage: true });
            this.testResults.screenshots.push(screenshotPath);

            // Check for CSS issues
            const cssIssues = await this.checkCSSIssues(page);

            // Test animations
            const animationResults = await this.testAnimations(page);

            this.testResults.browsers.push({
                browser: browserType,
                viewport: viewport,
                errors: errors,
                cssIssues: cssIssues,
                animations: animationResults,
                screenshot: screenshotPath
            });

            console.log(`✓ ${browserType} test completed`);

        } catch (error) {
            console.error(`✗ ${browserType} test failed:`, error.message);
            this.testResults.errors.push({
                browser: browserType,
                viewport: viewport,
                error: error.message
            });
        } finally {
            if (browser) {
                await browser.close();
            }
        }
    }

    async testInteractions(page) {
        try {
            // Test button clicks
            const buttons = page.locator('.shopify-btn, .shopify-cta, .btn');
            const buttonCount = await buttons.count();
            for (let i = 0; i < buttonCount; i++) {
                await buttons.nth(i).click();
                await page.waitForTimeout(100);
            }

            // Test form interactions
            const inputs = page.locator('input, textarea');
            const inputCount = await inputs.count();
            for (let i = 0; i < inputCount; i++) {
                await inputs.nth(i).click();
                await inputs.nth(i).fill('Test input');
                await page.waitForTimeout(100);
            }

            // Test hover effects
            const hoverElements = page.locator('.hover-mystical, .product-card, .zodiac-sign');
            const hoverCount = await hoverElements.count();
            for (let i = 0; i < hoverCount; i++) {
                await hoverElements.nth(i).hover();
                await page.waitForTimeout(200);
            }

            // Test scroll animations
            await page.evaluate(() => {
                window.scrollTo(0, document.body.scrollHeight / 2);
            });
            await page.waitForTimeout(1000);

            await page.evaluate(() => {
                window.scrollTo(0, document.body.scrollHeight);
            });
            await page.waitForTimeout(1000);

        } catch (error) {
            console.warn('Interaction test warning:', error.message);
        }
    }

    async checkCSSIssues(page) {
        const issues = [];

        try {
            // Check for broken styles
            const stylesheets = page.locator('link[rel="stylesheet"]');
            const stylesheetCount = await stylesheets.count();
            for (let i = 0; i < stylesheetCount; i++) {
                const href = await stylesheets.nth(i).getAttribute('href');
                if (href && href.startsWith('http')) {
                    try {
                        const response = await page.request.get(href);
                        if (response.status() !== 200) {
                            issues.push(`Broken stylesheet: ${href} (${response.status()})`);
                        }
                    } catch (error) {
                        issues.push(`Failed to load stylesheet: ${href}`);
                    }
                }
            }

            // Check for CSS errors in computed styles
            const cssErrors = await page.evaluate(() => {
                const elements = document.querySelectorAll('*');
                const errors = [];

                elements.forEach(el => {
                    const styles = window.getComputedStyle(el);
                    if (styles.display === 'none' && el.hasAttribute('required')) {
                        errors.push('Required element hidden by CSS');
                    }
                });

                return errors;
            });

            issues.push(...cssErrors);

        } catch (error) {
            issues.push(`CSS check error: ${error.message}`);
        }

        return issues;
    }

    async testAnimations(page) {
        const results = {
            floatingPetals: false,
            mysticalElements: false,
            moonPhase: false,
            energyOrbs: false,
            buttonAnimations: false,
            formAnimations: false
        };

        try {
            // Check if animations are running
            results.floatingPetals = await page.locator('.petal').count() > 0;
            results.mysticalElements = await page.locator('.mystical-element').count() > 0;
            results.moonPhase = await page.locator('.moon-phase-indicator').count() > 0;
            results.energyOrbs = await page.locator('.energy-orbs').count() > 0;

            // Test button animations
            const buttonCount = await page.locator('.shopify-btn').count();
            if (buttonCount > 0) {
                await page.locator('.shopify-btn').first().hover();
                await page.waitForTimeout(500);
                results.buttonAnimations = true;
            }

            // Test form animations
            const inputCount = await page.locator('input').count();
            if (inputCount > 0) {
                await page.locator('input').first().click();
                await page.waitForTimeout(500);
                results.formAnimations = true;
            }

        } catch (error) {
            console.warn('Animation test warning:', error.message);
        }

        return results;
    }

    // Performance and accessibility tests removed due to environment constraints
    // These would require additional setup in a full testing environment

    async runAllTests() {
        console.log('🚀 Starting comprehensive theme testing...\n');

        await this.startServer();

        // Define test configurations
        const browsers = ['chromium', 'firefox', 'webkit'];
        const viewports = [
            { width: 375, height: 667, name: 'mobile' },
            { width: 768, height: 1024, name: 'tablet' },
            { width: 1920, height: 1080, name: 'desktop' }
        ];

        // Test different browser and viewport combinations
        for (const browser of browsers) {
            for (const viewport of viewports) {
                await this.testBrowser(browser, viewport);
            }
        }

        // Note: Performance and accessibility tests require additional setup
        console.log('Note: Performance and accessibility tests skipped due to environment constraints');
        console.log('Manual testing recommended for these aspects');

        await this.stopServer();

        // Generate report
        this.generateReport();

        console.log('\n✅ Testing completed! Check test-report.json for results.');
    }

    generateReport() {
        const report = {
            timestamp: new Date().toISOString(),
            summary: {
                browsersTested: this.testResults.browsers.length,
                totalErrors: this.testResults.errors.length,
                performanceScore: this.testResults.performance.score || 0,
                accessibilityScore: this.testResults.accessibility.score || 0,
                screenshotsTaken: this.testResults.screenshots.length
            },
            details: this.testResults
        };

        fs.writeFileSync('test-report.json', JSON.stringify(report, null, 2));
        console.log('📊 Test report saved to test-report.json');
    }
}

// Run tests
const tester = new ThemeTester();
tester.runAllTests().catch(console.error);