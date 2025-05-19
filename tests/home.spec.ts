import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Home Page Tests', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigate('/');
        await homePage.waitForPageLoad();
    });

    test('should display correct name heading', async () => {
        const nameHeading = await homePage.getNameHeading();
        expect(nameHeading).toContain('Lee Jia Jun');
    });

    test('should have all navigation sections visible', async () => {
        expect(await homePage.isAboutMeVisible()).toBeTruthy();
        expect(await homePage.isExperiencesVisible()).toBeTruthy();
        expect(await homePage.isProjectsVisible()).toBeTruthy();
        expect(await homePage.isContactVisible()).toBeTruthy();
    });

    test('should navigate to About Me section', async () => {
        await homePage.clickAboutMe();
        // Add assertions for About Me section content
    });

    test('should navigate to Experiences section', async () => {
        await homePage.clickExperiences();
        // Add assertions for Experiences section content
    });

    test('should navigate to Projects section', async () => {
        await homePage.clickProjects();
        // Add assertions for Projects section content
    });

    test('should navigate to Contact section', async () => {
        await homePage.clickContact();
        // Add assertions for Contact section content
    });

    test('should have working Resume button', async () => {
        await homePage.clickResume();
        // Add assertions for Resume button functionality
    });

    test('should have working Learn More button', async () => {
        await homePage.clickLearnMore();
        // Add assertions for Learn More button functionality
    });
}); 