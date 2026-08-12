const readline = require('node:readline');
const { getRoute } = require('./router');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('\n===== SIMPLE ROUTE SIMULATOR =====');
console.log('1. City Hall');
console.log('2. SM City');
console.log('3. Airport');
console.log('4. Exit');

input.question('\nChoose your destination: ', (choice) => {

    let destination;

    switch (choice.trim()) {
        case '1':
            destination = 'cityHall';
            break;

        case '2':
            destination = 'smCity';
            break;

        case '3':
            destination = 'airport';
            break;

        case '4':
            console.log('Route simulator closed.');
            input.close();
            return;

        default:
            console.log('Invalid destination.');
            input.close();
            return;
    }

    const route = getRoute(destination);

    console.log('\nYour route:');
    console.log(route);

    input.close();
});