describe("Login Functionality", () => {
  it("should log in successfully with valid credentials", () => {
    cy.visit("http://192.168.56.1:8080/");

    cy.get("#username").type("user");
    cy.get("#password").type("password");

    cy.get('button[type="submit"]').click();

    cy.url().should("include", "/dashboard");
    cy.get("h1").should("contain", "Welcome to Dashboard");
  });

  it("should show error for invalid credentials", () => {
    cy.visit("http://192.168.56.1:8080/");

    cy.get("#username").type("invalid-user");
    cy.get("#password").type("invalid-password");

    cy.get('button[type="submit"]').click();

    cy.get("#errorMessage").should("be.visible");
  });

  it("should disable the login button if fields are empty", () => {
    cy.visit("http://192.168.56.1:8080/");

    cy.get('button[type="submit"]').should("be.disabled"); 
  });
});
