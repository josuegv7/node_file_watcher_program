'use strict';
const rd = require('fs');

const spawn = require('child_process').spawn;

const filename = process.argv[2];

if(!filename) {
  throw Error('A file to watch must be specified!');
}

rd.watch (filename, () => {
  const ls = spawn('ls', ['-l', '-h', filename]);
  ls.stdout.pipe(process.stdout);
});

console.log(`Now watching ${filename} for changes....`);











// NOTES:

//  This program follows the EVENT-LOOP:
//To run the program, Node.js does the following Steps:

// 1. Loads the script from top to bottom
// 2. Sees there is more to do, because of the rd.watch()
// 3. Waits for something to happen, namely the rd module
// to change
// 4. Executes our callback function when the change is
// detected.
// 5.

// In Node.js the event loop spins until there’s nothing
// left to do, there’s nothing left to wait for, or the
// program exits by some other means.
