import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    // Selectors
    private readonly nameHeading = 'h1';
    private readonly aboutMeSection = 'text=About Me';
    private readonly experiencesSection = 'text=Experiences';
    private readonly projectsSection = 'text=Projects';
    private readonly contactSection = 'text=Contact';
    private readonly resumeButton = 'text=Resume';
    private readonly learnMoreButton = 'text=Learn More';

    constructor(page: Page) {
        super(page);
    }

    async getNameHeading() {
        return await this.page.textContent(this.nameHeading);
    }

    async clickAboutMe() {
        await this.page.click(this.aboutMeSection);
    }

    async clickExperiences() {
        await this.page.click(this.experiencesSection);
    }

    async clickProjects() {
        await this.page.click(this.projectsSection);
    }

    async clickContact() {
        await this.page.click(this.contactSection);
    }

    async clickResume() {
        await this.page.click(this.resumeButton);
    }

    async clickLearnMore() {
        await this.page.click(this.learnMoreButton);
    }

    async isAboutMeVisible() {
        return await this.page.isVisible(this.aboutMeSection);
    }

    async isExperiencesVisible() {
        return await this.page.isVisible(this.experiencesSection);
    }

    async isProjectsVisible() {
        return await this.page.isVisible(this.projectsSection);
    }

    async isContactVisible() {
        return await this.page.isVisible(this.contactSection);
    }
} 