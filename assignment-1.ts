// problem -1
function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLowerCase();
  } else {
    return input.toUpperCase();
  }
}

// problem -2
function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const highRatedItems = items.filter((item) => item.rating >= 4);
  return highRatedItems;
}

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

// problem 5
function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

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

// problem 8
async function squareAsync(n: number): Promise<number> {
  const squarePromise: Promise<number> = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject("Negative number not allowed");
      } else {
        resolve(n * n);
      }
    }, 1000);
  });
  return squarePromise;
}
