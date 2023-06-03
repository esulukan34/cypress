/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('Login Test', () => {

    it('Login', () => {

        // 1) www.edvisorly.com sayfasina git
        cy.visit('https://discover.edvisorly.com/')
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })

        // 2) Tanimlanan email gir
        let email = 'esulukan34@gmail.com'
        cy.get('#login-email').type(email)

        // 3) Tanimlanan password gir
        let password = '2101emrE.'
        cy.get('#login-password').type(password)

        // 4) Login butonuna tikla
        cy.get('#btn-login').click()

        // 5) Sayfaya girildigini dogrula
        cy.get('.home_universityName__CVHHH').should('include.text', 'Universities')

        // 6) Avatara tikla
        cy.get('.Navbar_navItem__g_Z_i').eq(2).click()

        // 7) Profile tikla
        cy.get('.dropdown-menu > :nth-child(1)').click()

        // 8) Edit butonuna tikla
        cy.get('.ProfileDrawer_infoWrapper__veP2T > .text-decoration-none').click()

        // 9) Faker ile bilgileri değiştir
        let firstName = faker.name.firstName('male')
        cy.get('[name="firstName"]').clear().type(firstName) 

        let lastName = faker.name.lastName()
        cy.get('[name="lastName"]').clear().type(lastName) 

        //let dogumTarihi = faker.date.birthdate()
        cy.get('.react-datepicker__input-container > .form-control').clear().type('05/05/1990')
        cy.get('.react-datepicker__day--005').click()

        // Pronauns
        cy.get('.form-select').select(3)

        // State
        cy.get('.css-19bb58m').first().click()
        cy.wait(4000)
        cy.contains('Virginia').scrollIntoView({duration:5000})
        cy.contains('Virginia').click({force: true})
        
        // Save gorene kadar asagi in
        cy.get('.d-flex > .btn').scrollIntoView({duration:5000})
        // Collage
        cy.get('.css-19bb58m').eq(1).click()
        cy.wait(4000)
        //cy.contains('Union County College').scrollIntoView({duration:5000})
        cy.contains('Danville Community College').click({force: true})

        // Save butonuna bas
        cy.get('.d-flex > .btn').click()

        // Degisiklerin kayit edildigini dogrula
        cy.wait(2000)
        cy.on('window:alert', ()=>{
            cy.get('.Toastify__toast-body > :nth-child(2)').should('include.text', 'Profile updated successfully!')
        })

        cy.wait(4000)
        // 6) Avatara tikla
        cy.get('.Navbar_navItem__g_Z_i').eq(2).click()

        // 7) Profile tikla
        cy.get('.dropdown-menu > :nth-child(1)').click()

        // Bio ya tikla
        cy.get('div.ProfileDrawer_body__rN2sJ svg[stroke=currentColor]')
        .first().click()
        cy.get('.ProfileDrawer_editArea__ViYx3 > .form-control').clear({force: true}).type('Yazilim Test Muhendisiyim')
        cy.get('div.ProfileDrawer_body__rN2sJ svg[stroke=currentColor]')
        .first().click()
        // Yazinin degistigini dogrula
        cy.contains('Yazilim Test Muhendisiyim').should('have.text', 'Yazilim Test Muhendisiyim')
        cy.wait(2000)

        // Identifier a tikla
        cy.get('div.ProfileDrawer_body__rN2sJ svg[stroke=currentColor]')
        .eq(1).click()
        cy.wait(2000)

        cy.get('div.Dropdown_dropdown__B_WVz svg[aria-hidden="true"]')
        .eq(7).click()

        // Faith-Based e tikla
        //cy.get('div.Dropdown_dropdownMenuItem__4Bmq_ label[for=":r0:- Faith-Based"]').click()
        cy.get('.Dropdown_dropdownLabel__FEKRu.form-check-label>input')
        .eq(0).check()
        cy.wait(3000)

        // First Gen Tikla
        //cy.get('div.Dropdown_dropdownMenuItem__4Bmq_ label[for=":r1:- First-Gen"]').click()
        cy.get('.Dropdown_dropdownLabel__FEKRu.form-check-label>input')
        .eq(1).uncheck()


        // Veteran a tikla
        //cy.get('div.Dropdown_dropdownMenuItem__4Bmq_ label[for=":ra:- Veteran"]').click()
        if(cy.get('.Dropdown_dropdownLabel__FEKRu.form-check-label>input').eq(10).should('be.checked')){
        // Apply butonuna bas
            cy.get('div.Dropdown_dropdownMenuFooter__aeLrh button').eq(1).click()
            cy.wait(3000)
            
        }else{
            cy.get('.Dropdown_dropdownLabel__FEKRu.form-check-label>input')
        .eq(10).check()
        // Apply butonuna bas 
            cy.get('div.Dropdown_dropdownMenuFooter__aeLrh button').eq(1).click()
            cy.wait(3000)
           
        }
        
        // Faith-Based, Parent, Veteran degistigini dogrula
        cy.contains('Faith-Based, Parent, Veteran').should('have.text', "Faith-Based, Parent, Veteran")
        
        // Ethnicity a tikla
        cy.get('div.ProfileDrawer_body__rN2sJ svg[stroke=currentColor]')
        .eq(2).click()
        cy.wait(3000)
        cy.get('.Dropdown_dropdown__B_WVz.dropdown svg[aria-hidden="true"]')
        .eq(7).click()

        //White butonuna tikla
        cy.get('div>div.Dropdown_dropdownMenuItem__4Bmq_.form-check')
        .eq(5).click()

        // American'i tikla
        cy.get('div>div.Dropdown_dropdownMenuItem__4Bmq_.form-check')
        .eq(0).click()

        // Apply butonuna bas
        cy.get('div.Dropdown_dropdownMenuFooter__aeLrh>button')
        .eq(1).click()

        // American Indian or Alaska Native degistigini dogrula
        cy.contains('American Indian or Alaska Native').should('have.text', "American Indian or Alaska Native")

        // Work Status a tikla
        cy.get('div.ProfileDrawer_body__rN2sJ svg[stroke=currentColor]')
        .eq(4).click()
        cy.wait(2000)

        // Full Time sec
        cy.get('.form-select').select('Full Time')

        // Wrok Employer
        cy.get('.ProfileDrawer_editArea__ViYx3>input.form-control').clear().type('amazon')

        // Onay butonu tikla
        cy.get('div.ProfileDrawer_body__rN2sJ svg[stroke=currentColor]')
        .eq(4).click()

        // Yazinin degistigini dogrula
        cy.contains('Full Time at amazon').should('have.text', 'Full Time at amazon')










        
        

    })

    

})
