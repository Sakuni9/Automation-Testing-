describe("Task1 Automation Testing", () => {
  it("Launch the best application", () => {
    cy.visit("https://web.facebook.com/");
    cy.get("input[id='email']").type("ygsathsarani@gmail.com");
    cy.get("input[id='pass']").type("uuiijjknj");
  });
});
