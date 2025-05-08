### Keyof

In TypeScript, keyof is a type of all the key types of an object type. Which gives us the name of all the properties of an object type as a type.

Example:

type User = {
name: string;

age: number;
};

type UserKeys = keyof User;

Here keyof User means "name" or "age" Here all the keys of the User type should be given as UserKeys. This is how keyof works.

### Enum

Enum is a thing in TypeScript with which we can group a set of values ​​with a name. It is basically useful for capturing some values, whose values ​​we specify and keep fixed.

We use enum to keep the code clean and easy to understand and it is used to ensure type safety. If we use it, we can easily understand the wrong value.

enum Direction {
SUCCESS,
DONE,
COMPLETE,
ERROR,
NOTFOUND
}

We declare it like this. We can also use it while fetching data. Using enum allows us to keep specific values ​​in a group in the code and reduces the risk of misuse of values.

### Union

In TypeScript, Union and Intersection types are two powerful features that help us create different combinations of types. We use them together in our code. It makes our code clean and readable.

Union Types are used when you want to accept any one of the types and any of the types can be.

Intersection Types are used when you want to combine multiple types, so that that variable has the properties of all types. That is, it can hold values ​​of multiple types at once.

Multiple types are combined to create a new type, which will have all the features that we use.

### improving

TypeScript uses a type system, which helps us catch errors while writing code. When we specify a type, TypeScript detects the error and does not allow us to input a value of the wrong type.

let age: number = 25;

This way we set the type so that our code does not contain type errors.

TypeScript checks the code while writing code and helps us catch errors before runtime. As a result, we can catch them in advance before they suddenly occur when the code is run.

TypeScript's type system helps us understand the purpose of the code. This increases the clarity and transparency of the code, resulting in fewer errors during teamwork and making it easier to develop and maintain a large project.
