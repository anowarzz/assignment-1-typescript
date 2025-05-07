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
  { title: "Book C", rating: 5.0 },
];

console.log(filterByRating(books));
// Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]

// problem 3
// function concatenateArrays<T>(...arrays: T[][]): T[] {}

// concatenateArrays(["a", "b"], ["c"]); // Output: ["a", "b", "c"]
// concatenateArrays([1, 2], [3, 4], [5]); // Output: [1, 2, 3, 4, 5]

// problem 4
class Vehicle {
  private _make: string;
  private _year: number;

  constructor(make: string, year: number) {
    this._make = make;
    this._year = year;
  }

  public getInfo(): string {
    return `Make: ${this._make}, Year: ${this._year}`;
  }
}

class Car extends Vehicle {
  private _model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this._model = model;
  }

  public getModel(): string {
    return `Model: ${this._model}`;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo()); // Output: "Make: Toyota, Year: 2020"
console.log(myCar.getModel());
// Output: "Model: Corolla"

// problem 5
function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

console.log(processValue("anowar")); // Output: 5
console.log(processValue(434)); // Output: 20
// problem 6
interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }
  const expensiveProduct = products.reduce((mostExpensive, current) => {
    if (current.price > mostExpensive.price) {
      return current;
    } else {
      return mostExpensive;
    }
  }, products[0]);

  return expensiveProduct;
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];

console.log(getMostExpensiveProduct(products));
// Output: { name: "Bag", price: 50 }

// problem 7
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}

console.log(getDayType(Day.Monday)); // Output: "Weekday"
console.log(getDayType(Day.Sunday)); // Output: "Weekend"

// problem 8
async function squareAsync(n: number): Promise<number> {
  const squarePromise: Promise<number> = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject("Negative Number Not Allowed");
      } else {
        resolve(n * n);
      }
    }, 1000);
  });
  return squarePromise;
}

squareAsync(5).then(console.log); // Output after 1s: 16
squareAsync(-44).catch(console.error); // Output: Error: Negative number not allowed
