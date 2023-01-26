describe("Test", () => {

    it('should demonstrate input', async () =>{
        await browser.url("https://www.google.com/")
        let input = $('.gLFyf')
        await input.addValue('test')
        await browser.pause(2000);
        await input.addValue('123')
        await browser.pause(5000)
    });
})
