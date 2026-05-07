# How do `Generics` allow you to build reusable components and functions that stay strictly typed.

# Introduction:
Generics are essentially type variables. It allow us to write code where the specific type of data is determined at the moment the code is used, rather than when it is written.

Generics types allow us to use the `extends` keyword to limit what types are allowed while staying flexible. if we want a function that logs the length of an object, then it must have a .length property.

for example: <T extends {length : number}>
function newFunction<T>(data: T): T {
  return data;
}
const result = newFunction("Hello");

Here, when typescript sees a `string` as the argument in the generic typed function it will assign T as `string`. So the return value is strictly typed as `string`.

# Conclusion:
Thats how generic type help us to work with any data structure or data type.