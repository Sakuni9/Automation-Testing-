import TextBoxPage from "../PageObjectModel/textbox.js";
describe("Textbox Page", () => {
  const testData = require("../fixtures/testData.json"); // Assuming testData.json is in the fixtures folder

  it("Fill the form and submit it successfully", () => {
    cy.visit("https://demoqa.com/text-box");

    // Enter data from JSON file
    cy.get("input[id='userName']").type(testData.userName);
    cy.get("input[id='userEmail']").type(testData.userEmail);
    cy.get("textarea[id='currentAddress']").type(testData.currentAddress);
    cy.get("textarea[id='permanentAddress']").type(testData.permanentAddress);

    // Verify data is entered correctly (optional)
    cy.get("input[id='userName']").should("have.value", testData.userName);
    cy.get("input[id='userEmail']").should("have.value", testData.userEmail);
    // ... assertions for other fields (if needed)

    cy.get("button[id='submit']").click();

    // Verify successful form submission (adjust selector as needed)
    cy.get(".success-message").should("be.visible"); // Example assertion
  });
});
