// math.js
// Contains reusable functions for calculating a student's study progress.

function calculateCompletedTasks(completed, total) {
    return completed / total * 100;
}

function calculateRemainingTasks(completed, total) {
    return total - completed;
}

module.exports = {
    calculateCompletedTasks,
    calculateRemainingTasks
};