exports.OurStoryPage = class OurStoryPage {
    constructor(page) {
        this.page = page;
    }

    async tonnes() {
        const element = await this.page.$('div#tco2-count >> div h2');
        await element.scrollIntoViewIfNeeded();
        if (element !== null) {
            console.log('The element exists');
        } else {
            console.log('The element does not exist');
        }
        await Promise.all([
            this.page.click('text=Okay'),
        ]);
        await this.page.waitForTimeout(5000);
        const tco2CountDiv = await this.page.$('div#tco2-count');
        const h2Element = await tco2CountDiv.$('div h2');
        await h2Element.screenshot({ path: 'our-page.png' });
    }

    async picture() {
        const icons = await this.page.$$('.team_member_grid_icons > :nth-child(1)');
        const firstIcon = icons[0];
        await firstIcon.click();
        await this.page.waitForTimeout(3000);
    }

    async popup() {
        const section = await this.page.waitForSelector('section[data-id="559022b1"]');
        const textContent = await section.textContent();
        if (textContent.includes('James Basden')) {
            const isVisible = await section.isVisible();
            if (isVisible) {
                console.log('James Basden is visible on the page');
            } else {
                console.log('James Basden is not visible on the page');
            }
        }
    }

    async inValid() {
        const section = await this.page.waitForSelector('section[data-id="559022b1"]');
        const textContent = await section.innerText();
        if (textContent.includes('Tim Boothman')) {
            const isVisible = await section.isVisible();
            if (isVisible) {
                console.log('Tim Boothman is visible on the page');
            } else {
                console.log('Tim Boothman is not visible on the page');
            }
        }
        await this.page.screenshot({ path: 'failedtest.png' });
    }
}