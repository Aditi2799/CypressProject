// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import DateUtils from '../support/dateUtils/DateUtils';
import MainPage from '../page-object/main-page';

Cypress.Commands.add('selectYear', (yearName) => {
    const currentYear = new Date().getFullYear();
    
    // Access the current year displayed in the calendar
    MainPage.selectYear().then(($year) => {
      const displayedYear = parseInt($year.text().trim(), 10);  // Ensure it's an integer and properly trimmed
  
      // Check if the displayed year matches the required year
      if (displayedYear === yearName) {
        cy.log(yearName + ' year is already selected');
        return;  // If the required year is already displayed, return and do nothing
      }
  
      // If the desired year is earlier than the current displayed year, navigate backwards
      if (yearName < displayedYear) {
        MainPage.getNavigateCalendarIcon(0).click();  // Click the "Previous Year" button
      } 
      // If the desired year is later than the current displayed year, navigate forwards
      else if (yearName > displayedYear) {
        MainPage.getNavigateCalendarIcon(1).click();  // Click the "Next Year" button
      }
  
      // Wait for the calendar to update and select the year again if needed
      cy.wait(500);  // Adjust this wait time as needed for the calendar to update (you can use better waits like `cy.get()` with specific selectors instead of `wait`)
      cy.selectYear(yearName);  // Recursively call the function to check the year again
    });
  });
  


Cypress.Commands.add('selectMonth',(monthName) => {

    let dateUtils = new DateUtils();
    let currentMonth= new Date().getMonth() + 1;
    let givenMonth = dateUtils.getMonthIndexFromName(monthName);
    MainPage.selectMonth().then(($month) => {

        if($month.text().includes(monthName)){
            cy.log(monthName + 'month is selected')
            return
        }
        else{

            if(givenMonth > currentMonth){
                MainPage.getNavigateCalendarIcon(1).click();
                cy.log(givenMonth + 'month is selected');
            }
            else if(givenMonth < currentMonth){
                MainPage.getNavigateCalendarIcon(0).click();
                cy.log(givenMonth + 'month is selected')
            }
        }
        cy.selectYear(monthName);
    })

})

 Cypress.Commands.add('selectDates', (email, password) => {
     
    MainPage.selectDate().eq(dayName - 1).click();
 })