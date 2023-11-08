/*

TypeScript knows the JavaScript language and will generate types for you in many cases. For example in creating a variable and assigning it to a particular value, TypeScript will use the value as its type.

let helloWorld = "Hello World";

*/
function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
  }

//  greet("Alice");

 // greet(21);

  interface Person {
    firstName: string;
    lastName: string;
  }
   
  function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
  }
   
  let user = { firstName: "Jane", lastName: "User" };
   
  console.log(greeter(user));


//arrays
//1. Using square brackets. This method is similar to how you would declare arrays in JavaScript.

var fruits: string[] = ['Apple', 'Orange', 'Banana'];

//2. Using a generic array type, Array<elementType>.

var fruits: Array<string> = ['Apple', 'Orange', 'Banana'];

  //optional parameters


  function fullName(firstName: string, lastName?: string) {
    if (lastName) return firstName + " " + lastName;
    else return firstName;
  }
   
  let result1 = fullName("Bob"); // works correctly 
  let result2 = fullName("Bob", "Loblaw", "Sr."); // error, too many parameters
  let result3 = fullName("Bob", "Loblaw"); 

  //union - can be more than one type
  function printStatusCode(code: string ) {
    console.log(`My status code is ${code}.`)
  }
  //printStatusCode(404);
  printStatusCode('404');


  //non-null assertion - typescript should not infer

  //The non-null assertion operator is a concise way of avoiding unnecessary null and undefined checks 
  //in our code. We should only use this when we definitely know the variable or expression can't be null or undefined.
 
   //return text!.concat(text!);


//generics
function identity<Type>(arg: Type): Type {
    return arg;
  }
    