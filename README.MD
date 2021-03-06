<p align="center">
 <img width="200px" src="logos/width_400.png"/>
</p>

Component based MVC web framework for [nodejs](https://nodejs.org/en/) targeting good code structures & modularity.

[![GitHub version](https://badge.fury.io/gh/ujjwalguptaofficial%2Ffortjs.svg)](https://badge.fury.io/gh/ujjwalguptaofficial%2Ffortjs)
[![Build Status](https://travis-ci.org/ujjwalguptaofficial/fortjs.svg?branch=master)](https://travis-ci.org/ujjwalguptaofficial/fortjs)
[![npm version](https://badge.fury.io/js/fortjs.svg)](https://badge.fury.io/js/fortjs)
[![Docs](https://img.shields.io/badge/docs-available-brightgreen.svg)](http://fortjs.info/)

# Why fortjs

* Based on [Fort](https://github.com/ujjwalguptaofficial/fort) architecture.
* MVC Framework and follows OOPS approach so everything is class and object.
* Provides components - Wall, Shield and Guard. Components help modularize the application.
* No callback, Uses ES6 async/await or promise for executing asychronous code.
* Everything is configurable - you can configure your session store, view engine, websocket etc.
* Dependency Injection.
* Everything can be unit tested, so you can use a [TDD](https://guide.freecodecamp.org/agile/test-driven-development/) approach.
* TypeScript Support - Fully supported for typescript users.

# How to use

## Controller

```
import {Controller, DefaultWorker, textResult } from "fortjs" 
export class UserController extends Controller{

    @DefaultWorker()
    async getUsers(){
        return textResult("Hey, I am get users method");
    }
}
```

## Bootstrap

```
import { Fort } from "fortjs";
import { UserController } from "./controllers";

// add routes
Fort.routes = [{
    controller: UserController,
    path: "/user"
}]

// initiate app
Fort.create().then(()=>{
    Fort.logger.info(`App is started at location : http://localhost:${Fort.port}`);
})
```

# Examples

Check out repo - https://github.com/ujjwalguptaofficial/fortjs-examples

# Website

http://fortjs.info/

## Contributors

You are very welcome to contribute, please see contributing guidelines - [[Contribute](CONTRIBUTING.MD)].

## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. For sponsoring, contact author of this project.


## TODO

* Absolute route
* Retrieve dependency injection value from anywhere like in service