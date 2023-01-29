//Create a New Paste with the following details:


describe("Creating a new Paste", () => {

    it('should paste Hello from WebDriver', async () =>{
        await browser.url("https://paste.bingner.com/")         //i used Ghostbin instead of pastebin
        await $("#code-editor").setValue("Hello from WebDriver") 
        await browser.pause(1000)
        await $("#expirationButton").click()
        await browser.pause(1000)
        await $('//button[text()="Ten Minutes"]').click()  //text expiration 10 mins
        await browser.pause(1000)
        await $('.select2-choice').click()
        await browser.pause(1000)
        await $('//div[text()="Bash"]').click()  //there is no giving name functionality(its giving random name) so i just did another check of choosing bash 
        await browser.pause(1000)
        await $('.btn-primary').click()
        await browser.pause(3000)
    });
    //2nd test
    it('should paste New Sheriff in Town', async () => {
        await browser.url("https://paste.bingner.com/")         
        await $("#code-editor").setValue(`
        git config --global user.name "New Sheriff in Town"

        git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")
        
        git push origin master --force
        `) 
        const checkArr = ['git', 'Sheriff', '(git', '{tree}']  // this arr is created for future test of code
        await browser.pause(1000)
        await $("#expirationButton").click()
        await browser.pause(1000)
        await $('//button[text()="Ten Minutes"]').click()  
        await browser.pause(1000)
        await $('.select2-choice').click()
        await browser.pause(1000)
        await $('//div[text()="Bash"]').click()  
        await browser.pause(1000)
        await $('.btn-primary').click()
        await browser.pause(3000)
        const pTitle = await browser.getTitle()
        await console.log(pTitle)
        const sPtitle = pTitle.split(" ")
        const pName = await $('.paste-title>strong').getText()
        const sPname = pName.split(" ")
        await console.log(pName)
        const bas = await $('.paste-subtitle').getText()
        await console.log(bas)
        const codeText = await $('#code').getText()
        const arrCode = await codeText.split(' ')
        await console.log(arrCode)
        await console.log("codetext starts" + codeText)
        if(sPname.includes(sPtitle[0])){
            console.log("Name of Paste and Page title are same")   // checking if Paste name and Page title are same
        }else console.log("Name of Paste and Page Title are different")
        if(bas === "Bash"){
            console.log("Syntax is suspended for bash")  // checking if its suspended for bash
        }else console.log("Syntax is not suspended for bash")
        if(codeText.includes(checkArr[0,1,2,3])){
            console.log("Code in paragraph 2 is fine") // checking if code is matching by using random words from our text
        }else console.log("Code in paragraph 2 is not fine")
    })


})
