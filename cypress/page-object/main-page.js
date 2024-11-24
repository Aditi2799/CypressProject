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
      
  
      
    // static getBoeingLessonLogo() {
    //   return this.getLessonName(1).find('[data-testid="boeing-logo-icon"]');
    // }
  
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
        return cy.get(`.ui-datepicker-month`);
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

    

   
  
    // static getBoeingLessonLogoForFlightDetails() {
    //   return cy.get('[data-testid="filter-flight-detail-toggle"]');
    // }
    
    // static getBoeingLessonLogoForStudentExperience() {
    //   return cy.get('[data-testid="filter-modules-toggle"]');
    // }
    
    // static getToggleButtonLabel() {
    //   return cy.get('.css-1uk1gs8');
    // }
  
    // static getModuleCard() {
    //   return cy.get('.css-6v6t8t');
    // }
  
    // static getFirstModuleCard() {
    //   return cy.get('[data-testid="module-card-list-0"]').eq(0);
    // }
  
    // static getStudentExperienceModuleCard() {
    //   return cy.get('.css-g628d1');
    // }
  
    // static getModuleCardBoeingDescription() {
    //   return cy.get('.css-6v6t8t');
    // }
    
    // static getAllModules() {
    //   return cy.get('.css-nig7ok');
    // }
    
  }
  
  export default MainPage;
  