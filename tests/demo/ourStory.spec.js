import { test } from "@playwright/test";
import { HomePage } from '../../pages/homepage'
import { OurStoryPage } from "../../pages/ourstory";

test('test', async({ page }) => {
    const homepage = new HomePage(page)
    const ourstorypage = new OurStoryPage(page);
    await homepage.visitToHome();
    await homepage.navigaeToOurstory();
    await homepage.verifyOurStoryPage();
    await ourstorypage.tonnes();
    await ourstorypage.picture();
    await ourstorypage.popup();
    await ourstorypage.inValid();
});