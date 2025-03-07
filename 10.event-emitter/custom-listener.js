const EventEmitter = require('events');

class CustomEmitter extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello';
    }
    greet(name) {
        this.emit('greeting', `${this.greeting}, ${name}`);
    }
}

const myCustomEmitter = new CustomEmitter();

myCustomEmitter.on('greeting', (input) => {
    console.log(`Hello ${input}`);
});

myCustomEmitter.greet('ma5Codes');