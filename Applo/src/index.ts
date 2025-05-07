// PROBLEM ----> 1

function formatString(input: string, toUpper?: boolean): string {
  if (!input) {
    return "Privide a string";
  }
  if (toUpper === false) {
    return input.toLowerCase();
  } else {
    return input.toUpperCase();
  }
}
// formatString("Hello"); // Output: "HELLO"
// formatString("Hello", true); // Output: "HELLO"
// formatString("Hello", false); // Output: "hello"

// PROBLEM ----> 2
