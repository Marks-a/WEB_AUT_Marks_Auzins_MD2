
class homePage {
static get url() {
    return "/";
}
static get makeAppointment(){
    return cy.get("#btn-make-appointment");
}
static get userName() {
    return  cy.get('[id="txt-username"]');
}
static get userPassword() {
    return cy.get('[id="txt-password"]');
}
static get logginButton(){
    return cy.get("#btn-login");
}
static get comboBox() {
    return  cy.get("#combo_facility");
}
static get checkReadmission() {
    return cy.get('[id="chk_hospotal_readmission"]');
}
static get medicaid() {
    return  cy.get('[id="radio_program_medicaid"]');
}
static get dateWidget() {
    return  cy.get(".glyphicon-calendar");
}
static get dateWidgetDays(){
    return cy.get(".datepicker-days");
}
static get blankPage(){
    return  cy.get('[id="appointment"]');
}
static get comment(){
    return  cy.get("#txt_comment");
}
static get bookAnAppointment() {
    return cy.get("#btn-book-appointment");
}
static get validateFacility(){
    return cy.get('[id="facility"]')
}
static get  hospitalReadmission(){
    return cy.get('[id="hospital_readmission"]');
}
static get validateComment() {
    return cy.get('[id="comment"]');
}
static get validateDate() {
    return cy.get('[id="visit_date"]');
}
static get sideBars(){
    return  cy.get(".fa-bars");
}
static get history(){
    return cy.get('[href="history.php#history"]');
}
static get historyInfo(){
    return cy.get(".text-center");
}


}
export default homePage