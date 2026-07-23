/**
 * 03-streams-demo.js
 * Week 4 reference implementation
 * Covers: Readable/Writable streams, .pipe(), a Transform stream
 *
 * Run:  node 03-streams-demo.js sample.log
 */

const fs = require('fs');
const path = require('path');
const { Transform } = require('stream');
const process = require('process');

const inputFile = process.argv[2];

if (!inputFile) {
  console.error('Usage: node 03-streams-demo.js <logfile>');
  process.exit(1);
}

// ---- 1. Function: build a Transform stream that uppercases text on the fly ----
function createUppercaseTransform() {
  return new Transform({
    transform(chunk, encoding, callback) {
      const upper = chunk.toString().toUpperCase();
      callback(null, upper); // pass the transformed chunk downstream
    },
  });
}

// ---- 2. Function: stream a file through the transform, into a new file ----
function streamUppercase(inputPath) {
  const outputPath = path.join(
    path.dirname(inputPath),
`${path.basename(inputPath, path.extname(inputPath))}-UPPER.log`
  );

  const readStream = fs.createReadStream(inputPath);   // Readable
  const writeStream = fs.createWriteStream(outputPath); // Writable
  const upperTransform = createUppercaseTransform();     // Transform

console.log(`Memory before: ${(process.memoryUsage().heapUsed / 1024).toFixed(2)} KB`);
  readStream
    .pipe(upperTransform)  // chunk goes in lowercase/mixed, comes out UPPERCASE
    .pipe(writeStream)     // then gets written to disk, chunk by chunk
    .on('finish', () => {
console.log(`Memory after: ${(process.memoryUsage().heapUsed / 1024).toFixed(2)} KB`);      console.log('✅ Done! Output written to:', outputPath);
    });

  readStream.on('error', (err) => {
    console.error('❌ Could not read file:', err.message);
    process.exit(1);
  });
}

streamUppercase(inputFile);

/**
 * NOTE ON MEMORY BEHAVIOR:
 * Even with a multi-GB log file, "Memory before" and "Memory after" stay roughly
 * the same — because streams process the file in small chunks instead of loading
 * the whole thing into RAM (which is what fs.readFile would do).
 */