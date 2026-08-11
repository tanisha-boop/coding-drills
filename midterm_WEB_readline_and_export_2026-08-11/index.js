const { startATM } = require('./app');
const { close } = require('./input');

async function main() {
    try {
        await startATM();
    } catch (error) {
        console.error('\nATM system error:', error.message);
    } finally {
        close();
    }
}

main();