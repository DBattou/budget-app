const add = (a, b) => {
  return a + b;
};
const generateGreetings = name => {
  return `hello ${name}`;
};

test("Should add two numbers", () => {
  const result = add(3, 4);
});

test("should say hello to baptiste", () => {
  const result = generateGreetings("Baptiste");
  expect(result).toBe("hello Baptiste");
});
