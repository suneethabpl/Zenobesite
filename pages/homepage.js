exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;
    }

    async visitToHome() {
        await this.page.goto('https://www.zenobe.com/');
    }

    async navigaeToOurstory() {
        this.page.click('a.elementor-icon');
        await this.page.waitForTimeout(4000);
        await this.page
            .click('a[id="about-us"]', { force: true });
        await this.page.waitForTimeout(6000);
        const aboutUsMenuItem = await this.page.$('li#menu-item-about-us');
        const ourStoryLink = await aboutUsMenuItem.$('ul li a:has-text("Our story")');
        await ourStoryLink.click();
    }

    async verifyOurStoryPage() {
        await this.page.goto('https://www.zenobe.com/' + "/our-story/");
        const url = await this.page.url();
    }
}