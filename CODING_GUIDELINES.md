# Coding Guidelines

We adhere to a strict set of coding guidelines and utilize a linter to ensure code quality. Our coding guidelines are inherited from Google ES6 guidelines.

## Naming

- Class names must be in PascalCase.
- Public or protected class members should be in camelCase.
- Private class members should be in camelCase with '_' at the end.
- File names should be in snake_case.

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