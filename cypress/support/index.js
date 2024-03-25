Cypress.on("uncaught:exception", (err, runnable) => {
  // You can handle the uncaught exception here, for example:
  console.error("Caught unhandled exception:", err.message);
  // Return false to prevent Cypress from failing the test
  return false;
});
