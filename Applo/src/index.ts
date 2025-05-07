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

// PROBLEM ----> 3

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result = [];
  for (let i = 0; i < arrays.length; i++) {
    const item = arrays[i];
    for (let i = 0; i < item.length; i++) {
      const item2 = item[i];
      result.push(item2);
    }
  }
  return result;
}

// PROBLEM ----> 4

class Vehicle {
  private make: string;
  private year: number;
  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo() {
    return `Make: ${this.make} Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  getModel() {
    return `Model: ${this.model}`;
  }
}

// PROBLEM ----> 5

function processValue(value: string | number): number {
  if (typeof value === "number") {
    return value * 2;
  } else {
    let count = 0;
    const str = value.split("");
    for (let i = 0; i < str.length; i++) {
      count += 1;
    }
    return count;
  }
}

// PROBLEM ----> 6

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (!products || products.length === 0) {
    return null;
  }
  let expensive = 0;
  let obj = { name: "", price: 0 };
  for (let i = 0; i < products.length; i++) {
    const oldPrice = products[i];
    if (oldPrice.price > expensive) {
      obj = oldPrice;
    }
  }
  return obj;
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];

// PROBLEM ----> 7

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
  //   console.log(day, "1");
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}

// PROBLEM ----> 8
