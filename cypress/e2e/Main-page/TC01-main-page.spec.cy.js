
import MainPage from '../../page-object/main-page.js';
import MainPage2 from '../../page-object/main-page2.js';
import 'cypress-file-upload';


describe('', () => {
 
  let data;
  before(() => {

    cy.visit('https://testautomationpractice.blogspot.com/');
    cy.fixture('main-page').then((fixtureData) => {
      data = fixtureData;
      // lessonName = `${
      //   lessonCreationData.testAutomationLessonName
      // } ${chance.string({
      //   numeric: true,
      //   length: 5,
      // })}`;
    });
  });


  it('Verify title of the page ', () => {
    MainPage.getHeaderTitle().should('be.visible').contains(data.title);
  });

  it('Verify Form name of the page ', () => {
    cy.visit('https://testautomationpractice.blogspot.com/')
    MainPage.getFormHeading().should('be.visible').contains(data.formheading);
  });

  it('Verify user can able to enter name, email and phone number in respective fields', () => {
    cy.visit('https://testautomationpractice.blogspot.com/');

    MainPage.getForm().should('be.visible').find('label').contains(data.name).should('exist');
    MainPage.getNameField().should('be.visible').type(data.fname);

    MainPage.getForm().should('be.visible').find('label').contains(data.email).should('exist');
    MainPage.getEmailField().should('be.visible').type(data.fmail);

    MainPage.getForm().should('be.visible').find('label').contains(data.phoneno).should('exist');
    MainPage.getPhoneNumberField().should('be.visible').type(data.pnumber);

    MainPage.getForm().should('be.visible').find('label').contains(data.address).should('exist');
    MainPage.getAddressField().should('be.visible').type(data.faddress);
    cy.wait(2000);
  });

  it('Verify radio buttons behavior - Female and Male', () => {

    cy.visit('https://testautomationpractice.blogspot.com/');
    MainPage.getForm().should('be.visible').find('label').contains(data.gender).should('exist');
      MainPage.getRadioCheckboxButton()
      .should('be.visible')
      .find('input[value="female"]')
      .should('exist')
      .click(); 

    MainPage.getRadioCheckboxButton()
      .find('input[value="female"]')
      .should('be.checked');

    MainPage.getRadioCheckboxButton()
      .find('input[value="male"]')
      .should('not.be.checked');

    MainPage.getRadioCheckboxButton()
      .find('input[value="male"]')
      .should('exist')
      .click(); 

    MainPage.getRadioCheckboxButton()
      .find('input[value="male"]')
      .should('be.checked'); 

    MainPage.getRadioCheckboxButton()
      .find('input[value="female"]')
      .should('not.be.checked');

    MainPage.getRadioCheckboxButton()
      .find('input[value="female"]')
      .should('exist')
      .click(); 

    MainPage.getRadioCheckboxButton()
      .find('input[value="female"]')
      .should('be.checked'); 

    MainPage.getRadioCheckboxButton()
      .find('input[value="male"]')
      .should('not.be.checked');  
  });

  it('Verify checkboxes buttons behavior for Days - where select Monday, Tuesday, Thursday, Friday and check others should be unselected', () => {
    MainPage.getForm().should('be.visible');
    MainPage.getForm().find('label').contains(data.days).should('exist');
    MainPage.getRadioCheckboxButton()
      .should('be.visible')
      .find('[value="monday"]')
      .should('exist')
      .click(); 
    MainPage.getRadioCheckboxButton()
      .find('input[value="tuesday"]')
      .should('exist')
      .click(); 
    MainPage.getRadioCheckboxButton()
      .find('input[value="thursday"]')
      .should('exist')
      .click(); 
    MainPage.getRadioCheckboxButton()
      .find('input[value="friday"]')
      .should('exist')
      .click(); 
    MainPage.getRadioCheckboxButton()
      .find('input[value="sunday"]')
      .should('not.be.checked'); 
    MainPage.getRadioCheckboxButton()
      .find('input[value="wednesday"]')
      .should('not.be.checked'); 
    MainPage.getRadioCheckboxButton()
      .find('input[value="saturday"]')
      .should('not.be.checked');  
    MainPage.getRadioCheckboxButton()
      .find('input[value="monday"]')
      .should('be.checked'); 
    MainPage.getRadioCheckboxButton()
      .find('input[value="tuesday"]')
      .should('be.checked'); 
    MainPage.getRadioCheckboxButton()
      .find('input[value="thursday"]')
      .should('be.checked'); 
    MainPage.getRadioCheckboxButton()
      .find('input[value="friday"]')
      .should('be.checked');  
  });

  it('Verify Country field and select country from dropdown - India', () => {
    MainPage.getForm().should('be.visible').contains(data.country);
    MainPage.getCountryField().select('india');
    MainPage.getCountryField().children('option:selected').invoke('text').should('contain', 'India');
  });

  it('Verify Country field and select country from dropdown - India', () => {
    MainPage.getForm().should('be.visible').contains(data.color);
    MainPage.getColorField().find('option[value="red"]').should('contain','Red');
    MainPage.getColorField().find('option[value="blue"]').should('contain','Blue');
    MainPage.getColorField().find('option[value="green"]').should('contain','Green');
    MainPage.getColorField().find('option[value="yellow"]').should('contain','Yellow');
    MainPage.getColorField().find('option[value="red"]').should('contain','Red');
    MainPage.getColorField().find('option[value="white"]').should('contain','White');
    MainPage.getColorField().find('option[value="green"]').should('contain','Green');
    
  });

  it('Verify Animal field and select animal from dropdown - sorted list', () => {
    MainPage.getForm().should('be.visible').contains(data.color);
    MainPage.getAnimalField().find('option[value="cat"]').should('contain','Cat');
    MainPage.getAnimalField().find('option[value="cheetah"]').should('contain','Cheetah');
    MainPage.getAnimalField().find('option[value="deer"]').should('contain','Deer');
    MainPage.getAnimalField().find('option[value="dog"]').should('contain','Dog');
    MainPage.getAnimalField().find('option[value="elephant"]').should('contain','Elephant');
    MainPage.getAnimalField().find('option[value="fox"]').should('contain','Fox');
    MainPage.getAnimalField().find('option[value="giraffe"]').should('contain','Giraffe');
    MainPage.getAnimalField().find('option[value="lion"]').should('contain','Lion');
    MainPage.getAnimalField().find('option[value="rabbit"]').should('contain','Rabbit');
    MainPage.getAnimalField().find('option[value="zebra"]').should('contain','Zebra');
    MainPage.getAnimalField().should('be.visible');
    const animals = [];
    MainPage.getAnimalField().find('option').each(($el) => {
      const animalText = $el.text().trim(); 
      animals.push(animalText); 
    }).then(() => {
      const sortedAnimals = [...animals].sort(); 
      
      expect(animals).to.deep.equal(sortedAnimals, 'The animal dropdown is sorted alphabetically');
    });
    
  });
  
  it('Verify Date Picker field and select date', () => {
    MainPage.getDatePickerFieldName().should('be.visible');
    MainPage.getDatePickerField().click();
    MainPage.getDatePickerCalender().should('be.visible');

    cy.selectYear(2024);
    cy.selectMonth('June');
    cy.selectDates(13);
  

  });

  it('Verify Date Picker field2 and select date2', () => {
    MainPage2.getDatePickerFieldName2().should('be.visible');
    MainPage2.getDatePickerField2().should('be.visible').click();
    MainPage2.getDatePickerCalender2().should('be.visible');
    MainPage2.selectMonth2().select("2");
    MainPage2.selectYear2().select("2022");
    MainPage2.selectDate2().contains(20).click();
  });

  it('Verify single file upload', () => {
   MainPage2.getSingleFileSelected().should('not.be.visible')
    MainPage2.getSingleFileUploadField().selectFile('C:\\Users\\uy461f\\Desktop\\Project\\CypressProject-main\\cypress\\fixtures\\files\\screenshot_1.png');
    MainPage2.getUploadSingleFileButton().click();
    MainPage2.getSingleFileSelected().should('be.visible');
   
  });

  it('Verify multiple files upload', () => {
    MainPage2.getMultipleFileSelected().should('not.be.visible')
    const files = [
      'cypress/fixtures/files/screenshot_1.png',
      'cypress/fixtures/files/screenshot_2.png'
    ];
    MainPage2.getMultipleFilesSelected().selectFile(files);
    MainPage2.getUploadMultipleFileButton().click();
    MainPage2.getMultipleFileSelected().should('be.visible');
    
   });


   it('Verify static table and there column headers', () => {
    MainPage2.getStaticTableName().should('be.visible').contains("Static Web Table");
    MainPage2.getBookNameColumnHeader().should('be.visible');
    MainPage2.getAuthorColumnHeader().should('be.visible');
    MainPage2.getSubjectColumnHeader().should('be.visible');
    MainPage2.getPriceColumnHeader().should('be.visible');
   });

   it('Verify all the rows data in static table', () => {
    MainPage2.getFirstRowStaticTable().should('be.visible');
    MainPage2.getSecondRowStaticTable().should('be.visible');
    MainPage2.getThirdRowStaticTable().should('be.visible');
    MainPage2.getForthRowStaticTable().should('be.visible');
    MainPage2.getFifthRowStaticTable().should('be.visible');
    MainPage2.getSixthRowStaticTable().should('be.visible');
   
   });

   it.only('Verify static table and there column headers', () => {
    MainPage2.getDynamicTableTitle().should('be.visible');
    MainPage2.getNameColumnHeader().should('contain','Name');
    MainPage2.getCPUColumnHeader().should('contain','CPU (%)');
    MainPage2.getNameColumnHeader().should('contain','Memory (MB)');
    MainPage2.getNameColumnHeader().should('contain','Disk (MB/s)');
    MainPage2.getNameColumnHeader().should('contain','Network (Mbps)');
   });
   

});
