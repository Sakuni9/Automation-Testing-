class CheckboxPage {
  get checkboxPath() {
    return cy.get("path");
  }

  get checkboxes() {
    return cy.get("input[type='checkbox']");
  }

  checkAllCheckboxes() {
    this.checkboxPath.click(); // Click on the checkbox path to select all checkboxes
    return this;
  }

  uncheckAllCheckboxes() {
    this.checkboxes.uncheck(); // Uncheck all checkboxes
    return this;
  }

  // Additional methods can be added as needed
}

export default new CheckboxPage();
