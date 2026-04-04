// ===================================
// Implicit and Explicit Types
// ===================================

let userAge: number = 20; // Explicit type (type is clearly defined as number)

let userName: string; // Explicit type (type is defined, value will be assigned later)

// userName = 34; // This will throw an error because userName must be a string
userName = 'Soumadip';

// userAge = "Max"; // This will throw an error because userAge must be a number
userAge = 23;

console.log(userName);
console.log(userAge);

// ===================================
// Basic Primitive Types
// ===================================

// number
const userCgpa: number = 3.5;

// string
const schoolName: string = 'ABC School';

// boolean
const isUserActive: boolean = true;

// ===================================
// Combining Types (Union Types)
// ===================================

// userId can be either a string like 'abc1' or a number like 123

let userId: string | number = 'abc1';
userId = 123;

// userId = true; // This will throw an error because userId must be either string or number

console.log(userId);

// ===================================
// Object Types
// ===================================

let userProfile: {
  name: string;
  age: number;
  isAdmin: boolean;
  userId: string | number;
};

userProfile = {
  name: 'Soumadip',
  age: 20,
  isAdmin: true,
  userId: 'abc1', // Can also be a number
};

// userProfile = {
//   name: 'Soumadip',
//   age: "20",
//   isAdmin: true,
//   userId: 123,
// }; // This will throw an error because age must be a number

// userProfile = {}; // This will throw an error because required properties (name, age, isAdmin, userId) are missing

console.log(userProfile);

// ===================================
// Array Types
// ===================================

let hobbies: Array<string>; // <> is called generic syntax used to define the array element type

hobbies = ['Sports', 'Cooking'];

// hobbies = [1, 2, 3]; // This will throw an error because hobbies must be an array of strings

// Another way of defining array type
let hobbiesList: string[] = ['Sports', 'Reading'];

// hobbiesList = [1, 2, 3]; // This will throw an error because hobbiesList must be an array of strings

console.log(hobbies);
console.log(hobbiesList);

// ===================================
// Types in Functions
// ===================================

function addNumbers(a: number, b: number): number {
  // If we are not returning anything then we can use void as return type
  const sum = a + b;
  return sum;
}

// Defining a function type as a parameter
function calculate(a: number, b: number, operation: (a: number, b: number) => number) {
  return operation(a, b);
}

console.log(calculate(2, 5, addNumbers));

// ===================================
// Custom Types
// ===================================

type AddFunction = (a: number, b: number) => number; // Custom function type

function calculate2(a: number, b: number, operation: AddFunction) {
  return operation(a, b);
}

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  userId: string | number;
};

let anotherUser: User = {
  name: 'Soumadip',
  age: 20,
  isAdmin: true,
  userId: 'abc1',
};

// ===================================
// Interfaces
// ===================================

// Used to define the structure (shape) of an object
interface UserCredentials {
  password: string;
  email: string;
}

let userCredentials: UserCredentials = {
  password: '1234',
  email: 'Xg0lI@example.com',
};

// ===================================
// Interfaces vs Types
// ===================================
// Interfaces are mainly used to define the structure of objects or classes.
// Types are used to define types for values, variables, functions, unions, etc.

// We can also use the implements keyword to enforce the structure of a class using interfaces

class AuthCredentials implements UserCredentials {
  password: string;
  email: string;

  constructor(password: string, email: string) {
    this.password = password;
    this.email = email;
  }
}

// Interfaces support declaration merging.
// If we create another interface with the same name,
// TypeScript will merge both definitions.
interface AuthCredentials {
  name: string;
}

// Now this has password, email and name
let authUser: AuthCredentials = {
  password: '1234',
  email: 'Xg0lI@example.com',
  name: 'Soumadip',
};

// ===================================
// Merging Types
// ===================================

type Admin = {
  permissions: string[];
};

type AppUser = {
  userName: string;
};

type CombinedUser = Admin & AppUser; // Intersection type (must have both Admin and AppUser properties)

type AppAdmin = Admin | AppUser; // Union type (can be either Admin or AppUser)

let combinedUser: CombinedUser = {
  permissions: ['read', 'write'],
  userName: 'Soumadip',
};

// ===================================
// Merging Interfaces
// ===================================
// We can extend interfaces using the extends keyword

interface AdminInterface {
  permissions: string[];
}

interface AppUserInterface {
  userName: string;
}

interface CombinedUserInterface extends AdminInterface, AppUserInterface {
  // CombinedUserInterface requires both AdminInterface and AppUserInterface properties
  // We can also add new properties
  password: string;
  // Now this interface has permissions, userName and password
}

let userDetails: CombinedUserInterface = {
  permissions: ['read', 'write'],
  userName: 'Soumadip',
  password: '1234',
};

// ===================================
// Literal Types (Specific Values)
// ===================================
let userRole: 'admin' | 'user' | 'guest' = 'admin';

// userRole = 'super-admin'; // This will throw an error because userRole can only be admin, user or guest
userRole = 'user';
console.log(userRole);

// ===================================
// Type Guards
// ===================================

type Role = 'admin' | 'user' | 'guest';

function performAction(action: string | number, role: Role) {
  // Type guard example
  if (role === 'admin') {
    if (typeof action === 'string') {
      // Perform admin specific string action
    }
  }
}

// ===================================
// Generic Types
// ===================================

// function getFirstElement(array: any[]) {
//   return array[0];
// }
// We could use any[] but the problem is we lose type information of the array element
// and the return type also becomes any

// To preserve the element type we use a generic type <T>
// T represents the type of the array element and we use T[]
function getFirstElement<ElementType>(array: ElementType[]) {
  return array[0];
}

const numbers = [1, 2, 3];
const firstNumber = getFirstElement(numbers);

const strings = ['abc', 'def', 'ghi'];
const firstString = getFirstElement(strings);

// Another example with object
type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

const numberStorage: DataStorage<number> = {
  storage: [1, 2, 3],
  add: function (data) {
    this.storage.push(data);
  },
};

const stringStorage: DataStorage<string> = {
  storage: ['abc', 'def', 'ghi'],
  add: function (data) {
    this.storage.push(data);
  },
};

function merge<FirstType, SecondType>(a: FirstType, b: SecondType) {
  return {
    ...a,
    ...b,
  };
}

const newUser = merge<{ name: string }, { age: number }>({ name: 'Soumadip' }, { age: 20 });

console.log(newUser.name);
console.log(newUser.age);
