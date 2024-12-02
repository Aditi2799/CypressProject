
import DateUtils from '../support/dateUtils/DateUtils';
import MainPage from '../page-object/main-page';

Cypress.Commands.add('selectYear', (yearName) => {
    const currentYear = new Date().getFullYear();
    
    MainPage.selectYear().then(($year) => {
      const displayedYear = parseInt($year.text().trim(), 10); 
      if (displayedYear === yearName) {
        cy.log(yearName + ' year is already selected');
        return;  
      }
  
      if (yearName < displayedYear) {
        MainPage.getNavigateCalendarIcon(0).click();  
      } 
      else if (yearName > displayedYear) {
        MainPage.getNavigateCalendarIcon(1).click(); 
      }
  
      cy.wait(500);  
      cy.selectYear(yearName); 
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

 Cypress.Commands.add('selectDates', () => {
     
    MainPage.selectDate().eq(dayName - 1).click();
 })