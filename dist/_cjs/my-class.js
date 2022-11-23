"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testObject = exports.sayHello = exports.HelloClass = void 0;
class HelloClass {
    sayHello() {
        let type;
        try {
            // если удалось прочитать __dirname, значит мы в CommonJS. Если нет, то в ESModule
            // в ESModule нет привычных nodejs разработчикам констант __dirname, __filename, ...
            // https://nodejs.org/api/esm.html - раздел "Differences between ES modules and CommonJS"
            const dir = __dirname;
            type = "CommonJS";
        }
        catch (e) {
            type = "ESModule";
        }
        return "Hello! " + type;
    }
}
exports.HelloClass = HelloClass;
function sayHello() {
    return "Hello this imported function";
}
exports.sayHello = sayHello;
exports.testObject = {
    name: "testName",
    id: 1,
    description: "this test import object"
};
class HelloDefault {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        return "Hello my name is " + this.name;
    }
}
exports.default = HelloDefault;
