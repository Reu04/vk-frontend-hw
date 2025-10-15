import correctSentence from './correctSentence.js';

test('returns correct sentence', () => {
  expect(correctSentence("greetings, friends")).toBe("Greetings, friends.");
  expect(correctSentence("Greetings, friends")).toBe("Greetings, friends.");
  expect(correctSentence("Greetings, friends.")).toBe("Greetings, friends.");
  expect(correctSentence("hey, friend")).toBe("Hey, friend.");
  expect(correctSentence(" Hello, world. ")).toBe("Hello, world.");
  expect(correctSentence(" hello, world ")).toBe("Hello, world.");
  expect(correctSentence("Greetings, friends..")).toBe("Greetings, friends..");
  expect(correctSentence("2Hello!")).toBe("2Hello!.");
});

test('returns undefined', () => {
  expect(correctSentence(123)).toBe(undefined);
  expect(correctSentence(true)).toBe(undefined);
  expect(correctSentence(false)).toBe(undefined);
  expect(correctSentence(null)).toBe(undefined);
  expect(correctSentence(undefined)).toBe(undefined);
});