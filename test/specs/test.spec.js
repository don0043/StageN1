describe('My Login application', () => {
    it('should add information to input and paste', async () => {
        await browser.maximizeWindow()
        await browser.url('https://pastebin.com/')
        await browser.pause(2000)
        await $('#postform-text').setValue('Hello from WebDriver')
        await browser.pause(2000)
        await browser.scroll(0, 400)
        await $('#select2-postform-expiration-container').click()
        await browser.pause(2000)
        await $(`//li[contains(text(), "10 Minutes")]`).click()
        await browser.pause(2000)
        await $('#postform-name').setValue('helloweb')
        await browser.pause(2000)
        await $(`//button[text()='Create New Paste']`).click()
        await browser.pause(3000)
    })
    it('should add git text', async () => {
        await browser.maximizeWindow()
        await browser.url('https://pastebin.com/')
        await browser.pause(2000)
        const myText = 'git config --global user.name "New Sheriff in Town"\n' +
            '\n' +
            'git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\n' +
            '\n' +
            'git push origin master --force'
        await $('#postform-text').setValue(myText)
        await browser.pause(2000)
        await browser.scroll(0, 400)
        await $('#select2-postform-expiration-container').click()
        await browser.pause(1000)
        await $(`//li[contains(text(), "10 Minutes")]`).click()
        await browser.pause(1000)
        await $('#select2-postform-format-container').click()
        await browser.pause(1000)
        await $('.select2-search__field').setValue('Bash')
        await browser.pause(1000)
        await $(`//li[contains(text(), "Bash")]`).click()
        await browser.pause(1000)
        const title = 'how to gain dominance among developers'
        await $('#postform-name').setValue(title)
        await browser.pause(1000)
        await $(`//button[text()='Create New Paste']`).click()
        await browser.pause(1000)
        const browserTitle = await browser.getTitle()
        if (browserTitle.includes(title)){
            console.log('Browser Title matches Paste Title')
        } else console.log('ERROR')
        const suspendedSyntax = await $(`//a[text()="Bash"]`).getText()
        if (suspendedSyntax === "Bash"){
            console.log('Syntax is suspended for bash')
        }else console.log('Syntax Error')
        const pasteText = await $('.de1').getText()
        if (myText.includes(pasteText)){
            console.log('Code matches the one entered in paragraph 2')
        }else console.log('Code error')
        await browser.pause(5000)
    })
})
