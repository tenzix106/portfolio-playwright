import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    // Selectors
    private readonly nameHeading = 'h1';
    private readonly aboutMeButton = this.page.getByRole('link', { name: 'About Me' });
    private readonly experiencesButton = this.page.getByRole('link', { name: 'Experiences' });
    private readonly projectsButton = this.page.getByRole('link', { name: 'Projects' });
    private readonly contactButton = this.page.getByRole('link', { name: 'Contact' });
    private readonly resumeButton = this.page.getByRole('link', { name: 'Resume' });
    private readonly learnMoreButton = this.page.getByRole('link', { name: 'Learn More' });

    constructor(page: Page) {
        super(page);
    }

    async getNameHeading() {
        return await this.page.textContent(this.nameHeading);
    }

    async clickAboutMe() {
        await this.aboutMeButton.click();
    }

    async clickExperiences() {
        await this.experiencesButton.click();
    }

    async clickProjects() {
        await this.projectsButton.click();
    }

    async clickContact() {
        await this.contactButton.click();
    }

    async clickResume() {
        await this.resumeButton.click();
    }

    async clickLearnMore() {
        await this.learnMoreButton.click();
    }

    async isAboutMeVisible() {
        return await this.aboutMeButton.isVisible();
    }

    async isExperiencesVisible() {
        return await this.experiencesButton.isVisible();
    }

    async isProjectsVisible() {
        return await this.projectsButton.isVisible();
    }

    async isContactVisible() {
        return await this.contactButton.isVisible();
    }
} 