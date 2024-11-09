describe("Hello", () => {
  it("should say hello", () => {
    const name = "John";
    expect(`Hello ${name}`).toBe("Hello John");
  });
});
