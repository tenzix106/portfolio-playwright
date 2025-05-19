import { Page } from '@playwright/test';

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(path: string) {
        await this.page.goto(path);
    }

    async getTitle() {
        return await this.page.title();
    }

    async waitForPageLoad() {
        await this.page.waitForLoadState('networkidle');
    }
} 