import RadioButtonPage from "../pageObjects/radiobuttonPage";
const testData = require("../fixtures/radioButtonData.json");

describe("Radio Button Testing", () => {
  const radioButtonPage = new RadioButtonPage();

  beforeEach(() => {
    cy.visit("https://demoqa.com/radio-button");
  });

  it("should select a radio button by value", () => {
    const radioButtonValue = testData.radioButtonValue;
    radioButtonPage.selectRadioButtonByValue(radioButtonValue);

    radioButtonPage
      .getRadioButtonByValue(radioButtonValue)
      .should("be.checked");
  });
});
