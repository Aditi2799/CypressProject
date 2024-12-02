class MainPage {
    static getHeaderTitle() {
      return cy.get('[class*="title"]');
    }
  
    static getFormHeading() {
      return cy.get('.entry-title');
    }
  
    static getNameField(){
      return cy.get('#name');
    }

    static getEmailField(){
        return cy.get('#email');
      }

      static getPhoneNumberField(){
        return cy.get('#phone');
      }
       
    static getForm(){
      return cy.get('[class*="form-group"]');
    }
   
    static getAddressField() {
      return cy.get('#textarea');
    }
    
    static getColorField() {
        return cy.get('#colors');
      }

      static getAnimalField() {
        return cy.get('#animals');
      }
  
      static getDatePickerField() {
        return cy.get('#datepicker');
      }

      static getDatePickerCalender() {
        return cy.get('#ui-datepicker-div');
      }

      static selectDate(index) {
        return cy.get('[data-handler="selectDay"]').eq(index);
      }

      static selectMonth() {
        return cy.get('[class*="ui-datepicker-month"]');
      }
      
      static selectYear() {
        return cy.get(`.ui-datepicker-year`);
      }    
      
      static getDatePickerFieldName() {
        return cy.get('p').contains("Date Picker 1: ");
      }

      static getYear() {
        return cy.get('.ui-datepicker-year');
      }
     
      
      static getNavigateCalendarIcon(index) {
        return cy.get('.ui-icon').eq(index);
      }
      
      static getCountryField() {
        return cy.get('#country');
      }

    static getRadioCheckboxButton() {
      return cy.get(".form-check-inline");
    }
    
  }
  
  export default MainPage;
  