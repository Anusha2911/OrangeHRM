describe('Registering Rediff account',()=>{

      it('Checking the functionality of creating new account',()=>{
        cy.visit('https://register.rediff.com/register/register.php')
        //Full Name
        cy.get('input[type="text"]').eq(0).type('Lalit Panigrahi')
        //Preferred Email_id
        cy.get('input[type="text"]').eq(1).type('lalit_panigrahi')
        //
        //cy.get('input[type="button"]').last().click({force: true})
        //Password
        cy.get('#newpasswd').type('LPanigrahi@123')
        //Retype-Password
        cy.get('#newpasswd1').type('LPanigrahi@123')
        //Click if you don't have an alternate ID Check box

        cy.get('input[class="nomargin"]').check()

        //Mobile
        cy.get('#mobno').type('9704310054')
        cy.wait(4000)
        //Date of Birth DD/MM/YYYY
        cy.xpath('//select[starts-with(@name,"DOB_Day")]').select('03').should('have.value','03')
        cy.xpath('//select[starts-with(@name,"DOB_Month")]').select('MAR').should('have.value','03')
        cy.xpath('//select[starts-with(@name,"DOB_Year")]').select('2011').should('have.value','2011')
        //Gender Male
        cy.get('input[value="m"]').check()
        //Live in Country Argentina
        cy.get('select[id="country"]').select('Argentina')
        //Create my account button
        cy.get('#Register').click()


      })
})