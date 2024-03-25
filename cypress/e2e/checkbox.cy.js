import CheckboxPage from "../PageObjectModel/checkbox.js";

describe("Checkbox functionality", () => {
  it("Launch the best application", () => {
    cy.visit("https://demoqa.com/checkbox");
    
    // Use CheckboxPage object to interact with checkboxes
    CheckboxPage.checkAllCheckboxes();

    // Optional: Verify checkboxes are checked
    CheckboxPage.checkboxes.each(($checkbox) => {
      expect($checkbox).to.be.checked;
    });

    // Uncheck all checkboxes using CheckboxPage object
    CheckboxPage.uncheckAllCheckboxes();

    // Optional: Verify checkboxes are unchecked
    CheckboxPage.checkboxes.each(($checkbox) => {
      expect($checkbox).not.to.be.checked;
    });

    // Check all checkboxes again using CheckboxPage object
    CheckboxPage.checkAllCheckboxes();
  });
});
