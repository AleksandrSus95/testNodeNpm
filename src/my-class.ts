export class HelloClass {
  sayHello() {
    let type: string;
    try {
      // если удалось прочитать __dirname, значит мы в CommonJS. Если нет, то в ESModule
      // в ESModule нет привычных nodejs разработчикам констант __dirname, __filename, ...
      // https://nodejs.org/api/esm.html - раздел "Differences between ES modules and CommonJS"
      const dir = __dirname;
      type = "CommonJS";
    } catch (e) {
      type = "ESModule";
    }
    return "Hello! " + type;
  }
}

export function sayHello(){
        return "Hello this imported function"
}

export const testObject = {
        name:"testName",
        id: 1,
        description: "this test import object"
}

export default class HelloDefault {
  private name;
  constructor(name: string) {
    this.name = name;
  }
  sayHello() {
    return "Hello my name is " + this.name;
  }
}
