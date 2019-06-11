# Contributing

From opening a bug report to creating a pull request: every contribution is appreciated and welcome. If you're planning to implement a new feature or change the api - please create an issue first. This way we can ensure that your precious work is not in vain.

Thing that should not be change - 

1. package.json
2. ignore files like - gitignore, npmignore
3. travis config
4. license
5. webpack config
6. tsconfig
7. tslint 
8. do not commit anything in dist folder        

These are the files which contains some config & makes the jsstore bug free thats why we dont want user to change as thing may become messy. But we understand that sometimes you need to change these things, so in that case please give a description files name with reason of why you need to change in the pull request.

## Documentation

If you find some mistakes ( anything like spelling or design etc.) or want to improve the docs. Please feel free to send the PR. 

Our documentation is on another repo - https://github.com/ujjwalguptaofficial/fortjs.docs . So please have a look at contrubuting guidelines.

## Learning Contribution

Learning can be promoted by many ways like - 

* An article
* Examples
* Tutorial - text or video

If you have anything that helps users learn fortjs and you want them to list on our board. Feel free to link those in our get_started page.

## Setup

Setting up fortjs in your local is very easy - 

* Just fork and clone from your repo list or just clone from jsstore repos
* Run npm install - this will install all dependencies
* There are multiple commands that you can see in package.json.

#### Commands

* lint - Run linter for every codes
* build - build the codes & create a bundle
* deploy - This is used when some new version is to be deployed.   

## Submitting Changes

Push to your repo and submit a pull request. We
may suggest some changes or improvements or alternatives, but for small changes
your pull request should be accepted quickly.

Some things that will increase the chance that your pull request is accepted:

* Follow the existing coding style
* Write a [good commit message](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
* Do not add anything inside the dist folder

## Discussions

You can discuss on [Gitter](https://gitter.im/fortjs/Lobby).