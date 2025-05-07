// problem -1
function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLowerCase();
  } else {
    return input.toUpperCase();
  }
}

console.log(formatString("gunHfjdkjdfIdfdf")); // Output: "HELLO"
console.log(formatString("anoar hosen", true)); // Output: "HELLO"
console.log(formatString("aFNAODFJDKF", false)); // Output: "hello"

// problem -2
function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const highRatedItems = items.filter((item) => item.rating >= 4);
  return highRatedItems;
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 }
];

console.log(filterByRating(books));
; 
// Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]

