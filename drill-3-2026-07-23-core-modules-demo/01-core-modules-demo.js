/**
 * 01-core-modules-demo.js
 * Weeks 2-3 reference implementation
 * Covers: fs (promises), path, process, custom Error class, try/catch
 *
 * Run:  node 01-core-modules-demo.js sample.log
 */

const fs = require('fs').promises;
const path = require('path');

// ---- 1. Custom Error class (Week 3) ----
class InvalidLogFormatError extends Error {
  constructor(message) {
    super(message);
    this.name = 'InvalidLogFormatError';
  }
}

// ---- 2. Function: build a safe, cross-platform path ----
function buildOutputPath(inputFilePath) {
  const dir = path.dirname(inputFilePath);        // folder of the input file
  const base = path.basename(inputFilePath, path.extname(inputFilePath));
  return path.join(dir, `${base}-summary.txt`);    // e.g. sample-summary.txt
}

// ---- 3. Function: read file + count lines/ERROR/WARNING (Week 2) ----
async function analyzeLogFile(filePath) {
  const content = await fs.readFile(filePath, 'utf8'); // fs.promises = async/await style

  const lines = content.split('\n').filter(Boolean);
  if (lines.length === 0) {
throw new InvalidLogFormatError(`${filePath} looks empty or invalid.`);
}

  const errorCount = lines.filter(l => l.includes('ERROR')).length;
  const warningCount = lines.filter(l => l.includes('WARNING')).length;

  return { totalLines: lines.length, errorCount, warningCount };
}

// ---- 4. Function: write the summary to disk ----
async function writeSummary(outputPath, stats) {
  const report =
    `Total lines: ${stats.totalLines}\n` +
    `ERROR lines: ${stats.errorCount}\n` +
    `WARNING lines: ${stats.warningCount}\n`;

  await fs.writeFile(outputPath, report, 'utf8');
}

// ---- 5. Main — ties it together, uses process.argv + process.exit ----
async function main() {
  const inputFile = process.argv[2]; // e.g. node 01-core-modules-demo.js sample.log

  if (!inputFile) {
    console.error('Usage: node 01-core-modules-demo.js <logfile>');
    process.exit(1); // non-zero = failure
  }

  try {
    const stats = await analyzeLogFile(inputFile);
    const outputPath = buildOutputPath(inputFile);
    await writeSummary(outputPath, stats);

    console.log('✅ Analysis complete:', stats);
    console.log('📄 Summary written to:', outputPath);
    process.exit(0); // success
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error(`❌ File not found: ${inputFile}`);    
    } else if (err instanceof InvalidLogFormatError) {
      console.error(`❌ ${err.name}: ${err.message}`);
    } else {
      console.error('❌ Unexpected error:', err.message);
    }
    process.exit(1); // failure
  }
}

main();
