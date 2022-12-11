import CommentForm from "components/CommentForm";

it("should take input", () => {
  cy.mount(<CommentForm />);
  cy.get('input[name="comment"]').type("Example comment.");
  //   cy.get("button").should("contains.text", "Submit");
});
