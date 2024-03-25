class TextBoxPage {
  get userNameInput() {
    return cy.get("input[id='userName']");
  }

  get userEmailInput() {
    return cy.get("input[id='userEmail']");
  }

  get currentAddressTextarea() {
    return cy.get("textarea[id='currentAddress']");
  }

  get permanentAddressTextarea() {
    return cy.get("textarea[id='permanentAddress']");
  }

  get submitButton() {
    return cy.get("button[id='submit']");
  }

  fillForm(userData) {
    if (userData.userName) {
      this.userNameInput.type(userData.userName);
    }

    if (userData.userEmail) {
      this.userEmailInput.type(userData.userEmail);
    }

    if (userData.currentAddress) {
      this.currentAddressTextarea.type(userData.currentAddress);
    }

    if (userData.permanentAddress) {
      this.permanentAddressTextarea.type(userData.permanentAddress);
    }

    return this;
  }

  submitForm() {
    this.submitButton.click();
    return this;
  }
}

export default new TextBoxPage();
