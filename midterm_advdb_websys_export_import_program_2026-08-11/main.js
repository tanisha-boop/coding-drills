// main.js
// Real-life example: tracking study progress for a student.

const {
    calculateCompletedTasks,
    calculateRemainingTasks
} = require('./math');

const studentName = "Tanisha";
const totalTasks = 10;
const completedTasks = 7;

const progress = calculateCompletedTasks(completedTasks, totalTasks);
const remaining = calculateRemainingTasks(completedTasks, totalTasks);

console.log("===== STUDY PROGRESS =====");
console.log(`Student: ${studentName}`);
console.log(`Completed Tasks: ${completedTasks}`);
console.log(`Remaining Tasks: ${remaining}`);
console.log(`Progress: ${progress}%`);

if (progress >= 70) {
    console.log("Status: Good progress! Keep going.");
} else {
    console.log("Status: More work is needed.");
}