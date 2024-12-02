import 'cypress-xpath';
class MainPage2 {
    
    static getStaticTableName(){
      return cy.get('#HTML1');
    }

    static getBookNameColumnHeader(){
        return cy.xpath('//div[@class="widget-content"]//table//th[text()="BookName"]');
      }

      static getAuthorColumnHeader(){
        return cy.xpath('//div[@class="widget-content"]//table//th[text()="Author"]');
      }

      static getSubjectColumnHeader(){
        return cy.xpath('//div[@class="widget-content"]//table//th[text()="Subject"]');
      }

      static getPriceColumnHeader(){
        return cy.xpath('//div[@class="widget-content"]//table[@name="BookTable"]//th[text()="Price"]');
      }

      static getFirstRowStaticTable(){
        return cy.xpath('//table[@name="BookTable"]//tr[2]');
      }

      static getSecondRowStaticTable(){
        return cy.xpath('//table[@name="BookTable"]//tr[3]');
      }
      
      static getThirdRowStaticTable(){
        return cy.xpath('//table[@name="BookTable"]//tr[4]');
      }

      static getForthRowStaticTable(){
        return cy.xpath('//table[@name="BookTable"]//tr[5]');
      }
  
      static getFifthRowStaticTable(){
        return cy.xpath('//table[@name="BookTable"]//tr[6]');
      }

      static getSixthRowStaticTable(){
        return cy.xpath('//table[@name="BookTable"]//tr[7]');
      }
  
    static getDynamicTableTitle(){
      return cy.get('#HTML12').contains("Dynamic Web Table");
    }
   
    static getNameColumnHeader() {
      return cy.get('//table[@id="taskTable"]//tr[1]//th[1]');
    }

    static getCPUColumnHeader() {
      return cy.get('//table[@id="taskTable"]//tr[1]//th[2]');
    }

    static getMemoryColumnHeader() {
      return cy.get('//table[@id="taskTable"]//tr[1]//th[3]');
    }

    static getDiskColumnHeader() {
      return cy.get('//table[@id="taskTable"]//tr[1]//th[4]');
    }
    
    static getNetworkColumnHeader() {
      return cy.get('//table[@id="taskTable"]//tr[1]//th[5]');
    }

    static getDatePickerFieldName2() {
      return cy.get('p').contains("Date Picker 2: ");
    }
  
      static getDatePickerField2() {
        return cy.get('#txtDate');
      }

      static getDatePickerCalender2() {
        return cy.get('#ui-datepicker-div');
      }

      static selectDate2() {
        return cy.get('[data-handler="selectDay"]');
      }

      static selectMonth2() {
        return cy.get('[class*="ui-datepicker-month"]');
      }
      
      static selectYear2() {
        return cy.get('.ui-datepicker-year');
      }    
      
     
      static getSingleFileSelected() {
        return cy.get('#singleFileStatus');
      }

      static getMultipleFileSelected() {
        return cy.get('#multipleFilesStatus');
      }

      static getMultipleFilesSelected() {
        return cy.get('#multipleFilesInput');
      }
       
      static getSingleFileUploadField() {
        return cy.get('#singleFileForm input[type="file"]');
      }

      static getMultipleFilesUploadField() {
        return cy.get('#multipleFilesInput');
      }

    static getUploadSingleFileButton() {
      return cy.get("button[type='submit']").contains("Upload Single File");
    }
    

    static getUploadMultipleFileButton() {
      return cy.get("button[type='submit']").contains("Upload Multiple Files");
    }
  }
  
  export default MainPage2;
  