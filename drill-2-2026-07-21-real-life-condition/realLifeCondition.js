// Real-life Example:
// If I finish my homework and clean my room,
// then I can play video games.
// Otherwise, I need to finish my responsibilities first.

function freeTime() {

    let homeworkFinished = true;
    let roomClean = true;

    if (homeworkFinished && roomClean) {
        console.log("Time to play video games! 🎮");
    } else {
        console.log("Finish your responsibilities first. 📚");
    }

}

freeTime();