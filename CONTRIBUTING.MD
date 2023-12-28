# Contributing

From opening a bug report to creating a pull request: every contribution is appreciated and welcome. If you're planning to implement a new feature or change the api - please create an issue first. This way we can ensure that your precious work is not in vain.

Thing that should not be change - 

1. package.json
2. ignore files like - gitignore, npmignore
3. Github Action config
4. license
5. webpack config
6. tsconfig
7. eslint       

These are the files which contains some config & makes the fortjs bug free thats why we dont want user to change as thing may become messy. But we understand that sometimes you need to change these things, so in that case please give a description files name with reason of why you need to change in the pull request.

## Documentation

If you find some mistakes ( anything like spelling or design etc.) or want to improve the docs. Please feel free to send the PR. 

Our documentation is on another repo - https://github.com/ujjwalguptaofficial/fortjs-doc . So please have a look at contrubuting guidelines.

## Learning Contribution

Learning can be promoted by many ways like - 

* An article
* Examples
* Tutorial - text or video

If you have anything that helps users learn fortjs and you want them to list on our board. Feel free to link those in our get_started page.

## Setup

Setting up Fort.js locally is straightforward:

1. Fork and clone the repository from your list or directly clone the Fort.js repository.
2. Run `npm install` to install all dependencies.
3. Explore various commands available in the `package.json` file.

### Commands

- `lint`: Run the linter for all code.
- `build`: Build the code and create a bundle.
- `build:test`: Build the code and run tests.
- `test`: Run the tests.
- `deploy`: Use this command when deploying a new version.

## Submitting Changes

Push to your repo and submit a pull request. We
may suggest some changes or improvements or alternatives, but for small changes
your pull request should be accepted quickly.

Some things that will increase the chance that your pull request is accepted:

* Follow the existing coding style
* Write a [good commit message](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
* Do not add anything inside the dist folder

## Discussions

Use Github discussions for any communication - https://github.com/ujjwalguptaofficial/fortjs/discussions
