class RadioButtonPage {
  radioButtonGroup = '[name="exampleRadio"]';
  radioButtonOptions = this.radioButtonGroup + ' input[type="radio"]';

  getRadioButtonByValue(value) {
    return cy.get(`${this.radioButtonOptions}[value="${value}"]`);
  }

  selectRadioButtonByValue(value) {
    this.getRadioButtonByValue(value).check();
  }
}

export default RadioButtonPage;
