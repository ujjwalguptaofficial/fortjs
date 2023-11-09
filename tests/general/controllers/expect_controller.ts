import { Controller, route, worker, validateQuery, validateBody, textResult, HTTP_METHOD } from "fortjs";
import { User } from "../models/user";
import { IsInt, IsString } from "class-validator";
import { Type } from 'class-transformer';


class QueryType1 {

    @Type(() => Number)
    @IsInt()
    id: Number;

    @IsString()
    name: string;
}

export class ExpectController extends Controller {

    @route('/convert')
    @validateQuery(QueryType1)
    @worker(HTTP_METHOD.Get)
    async normalExpectConvert() {
        const queryLength = Object.keys(this.query).length;
        const output = queryLength === 2 ? "ok" : "not_ok";
        if (this.query.id === 0 && this.option.isEmpty(this.query.name)) {
            return textResult(output);
        }
        return textResult("", 400);

    }

    @route('/convert')
    @validateBody(QueryType1)
    @worker(HTTP_METHOD.Post)
    async normalExpectConvertBody() {
        const queryLength = Object.keys(this.body).length;
        const output = queryLength === 2 ? "ok" : "not_ok";
        if (this.body.id === 0 && this.option.isNullOrEmpty(this.body.name)) {
            return textResult(output);
        }
        return textResult("", 400);
    }

    @route('/model')
    @validateBody(User)
    @worker(HTTP_METHOD.Post)
    async modelTest() {
        const queryLength = Object.keys(this.body).length;
        const expectedUser = {
            name: 'angela',
            address: 'newyork street 5 america',
            emailId: 'angela@mg.com',
            gender: 'female',
            password: 'hiangela',
            id: 0
        };
        if (queryLength === 6) {
            if (isEquivalent(expectedUser, this.body)) {
                return textResult('ok');
            }
        }
        return textResult("", 400);
    }

    @route('/model')
    @validateQuery(User)
    @worker(HTTP_METHOD.Get)
    async modelTestForQuery() {
        const queryLength = Object.keys(this.query).length;
        const expectedUser = {
            name: 'angela',
            address: 'newyork street 5 america',
            emailId: 'angela@mg.com',
            gender: 'female',
            password: 'hiangela',
            id: 0
        };
        if (queryLength === 6) {
            console.log('1st');
            if (isEquivalent(expectedUser, this.query)) {
                console.log('2nd')
                return textResult('ok');
            }
        }
        return textResult("", 400);
    }
}

function isEquivalent(a, b) {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
}