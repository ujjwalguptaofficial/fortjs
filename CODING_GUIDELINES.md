# Coding Guidelines

We follow strict set of coding guidelines and use linter to make sure no mistake is done. We have inherited our coding guidelines fom google es6 guidelines.

## Naming

* Class Name must be in PascalCase.
* Class public or protect member should be in camelCase.
* Class private member should be in camelCase having '_' in the end.
* A file name should be in snake case.

## TypeScript Guidelines

- Ensure static typing for every variable. If a variable can accept multiple types, explicitly list them. Avoid using `any` unless absolutely necessary. It's recommended to use specific types whenever possible.

## CodeThink Approach

- Ensure that class names clearly describe their behavior.
- Initialize and assign member variables in the constructor method.
- If multiple files are related, organize them in a single folder and create an ES6 module by exporting them in a common file (e.g., `index.ts`).
- Avoid creating global variables; instead, use a `FortGlobal` file.
- Remove unused code; avoid commenting out code for future reference.
- Prefer arrow functions.
- Utilize ES6 built-in functions such as `findIndex`, `find`, etc.