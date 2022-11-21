export class MyClass {
    hello() {
            let type: string
            try {
                    // если удалось прочитать __dirname, значит мы в CommonJS. Если нет, то в ESModule
                    // в ESModule нет привычных nodejs разработчикам констант __dirname, __filename, ...
                    // https://nodejs.org/api/esm.html - раздел "Differences between ES modules and CommonJS"
                    const dir = __dirname;
                    type = 'CommonJS'
            } catch (e) {
                    type = 'ESModule'
            }
           return 'Hello!' + type;
    }
}
export default class MyClassTwo {
        private name;
        constructor(name:string){
                this.name = name;
        }
        getName(){
                return this.name;
        }
        sayHello(){
                return "Hello my name is " + this.name
        }
        squareNumber(value:number){
                return value * value; 
        }
}