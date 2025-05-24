// require(): import the code from the javascript file
const helloWorld = require('./helloWorld');

// describe: body of the file where the test is run
describe('Hello World', function() {
  // test: describes what should be happening in plain english
  test('says "Hello, World!"', function() {
    // expect: compares the output with the expected value
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
