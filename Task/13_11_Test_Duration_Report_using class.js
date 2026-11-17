// For the case of Input from user, you can run this script in the terminal and provide input.
// In the terminal: node "./filepath.js"
// Type your input and press Enter
// Press Ctrl+Z and then Enter to signal the end of input (on Windows) or Ctrl+D (on Unix/Linux).

// print the total duration of all tests and the name of the slowest test.

console.log("Enter the number of tests followed by the test name and duration (in ms) for each test:");

const input = require('fs').readFileSync(0, 'utf8');
const lines = input.trim().split('\n');
const n = parseInt(lines[0], 10);

class Test {

    static totalDuration = 0;
    static maxDuration = -1;
    static slowestTest = '';

    constructor(name, duration) {
        this.name = name;
        this.duration = Number(duration);

        Test.totalDuration += this.duration;

        if (this.duration > Test.maxDuration) {
            Test.maxDuration = this.duration;
            Test.slowestTest = this.name;
        }
    }
}

for (let i = 1; i <= n; i++) {

    const [testName, duration] = lines[i].trim().split(/\s+/);

    const test = new Test(testName, duration);
}

console.log(`Total: ${Test.totalDuration} ms`);
console.log(`Slowest: ${Test.slowestTest}`);