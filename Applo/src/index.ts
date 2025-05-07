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

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const ratingFilter = items.filter((item) => item.rating >= 4);
  return ratingFilter;
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

// filterByRating(books);
// Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]

// PROBLEM ----> 3
