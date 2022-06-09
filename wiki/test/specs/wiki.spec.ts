describe('Wiki', () => {
    it('get cera wiki page', async () => {
        const imageViews = await $$("//android.widget.ImageView");
        imageViews[0].click();

        const LinearLayout = await $$("//android.widget.LinearLayout");
        LinearLayout[0].click();

        const editTexts = await $("//android.widget.EditText");
        const searchString = "Cera";
        await editTexts.waitForDisplayed({ timeout: 3000 });
        await editTexts.addValue(searchString);
        
        //await (await $("id:page_list_item_title")).click();
        
        const textViews = await $$("id:org.wikipedia.alpha:id/page_list_item_description");
        await textViews[0].waitForDisplayed({ timeout: 3000 });
        
        expect(await textViews[0].getText()).toContain("home care company");
    });
});
