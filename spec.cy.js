import homePage from "../pageObjects/Home.page";
describe("HealthService1",() => {
  context("Scenario", () => {
    beforeEach(()=> {
      cy.visit("/");
    })
    it.skip("Scen1",() => {
      //Logeed in
      homePage.makeAppointment.click();
      homePage.userName.type("John Doe");
      homePage.userPassword.type("ThisIsNotAPassword");
      homePage.logginButton.click();
      //Make appointment info
      homePage.comboBox.select("Seoul CURA Healthcare Center");
      homePage.checkReadmission.click();
      homePage.medicaid.click();
      homePage.dateWidget.click();
      homePage.dateWidgetDays.contains("6").click();
      homePage.blankPage.click({ force: true });
      homePage.comment.type("CURA Healthcare Service");
      homePage.bookAnAppointment.click();
      //Validate
      homePage.validateFacility.should("have.text","Seoul CURA Healthcare Center");
      homePage.hospitalReadmission.should("have.text","Yes");
      homePage.validateComment.should("have.text","CURA Healthcare Service")
      homePage.validateDate.contains("06");
  });
  it("Scen2",() => {
       //Logeed in
       homePage.makeAppointment.click();
       homePage.userName.type("John Doe");
       homePage.userPassword.type("ThisIsNotAPassword");
       homePage.logginButton.click();
     homePage.sideBars.click();
     homePage.sideBars.should("be.visible");
     homePage.history.click();
     homePage.historyInfo.should("be.visible","No appointment.");
     homePage.historyInfo.contains("No appointment.");
    
  })

 

  })

})

