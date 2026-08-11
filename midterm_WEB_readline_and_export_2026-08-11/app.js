const { question } = require('./input');

const {
    findAccount,
    verifyPin,
    deposit,
    withdraw,
    getBalance
} = require('./model');

async function login() {
    console.log('\n========================================');
    console.log('          QZT BANK ATM SYSTEM');
    console.log('========================================');

    const accountNumber = (await question('Enter account number: ')).trim();
    const account = findAccount(accountNumber);

    if (!account) {
        console.log('\nAccount not found.');
        return null;
    }

    const pin = (await question('Enter your PIN: ')).trim();

    if (!verifyPin(account, pin)) {
        console.log('\nIncorrect PIN.');
        return null;
    }

    console.log(`\nWelcome, ${account.accountName}!`);
    return account;
}

async function showBalance(account) {
    console.log('\n----------------------------------------');
    console.log('             ACCOUNT BALANCE');
    console.log('----------------------------------------');
    console.log(`Available Balance: ₱${getBalance(account).toFixed(2)}`);
}

async function depositMoney(account) {
    const amount = Number(
        await question('\nEnter amount to deposit: ₱')
    );

    if (!Number.isFinite(amount) || amount <= 0) {
        console.log('Invalid deposit amount.');
        return;
    }

    deposit(account, amount);

    console.log('\nDeposit successful.');
    console.log(`Deposited: ₱${amount.toFixed(2)}`);
    console.log(`New Balance: ₱${getBalance(account).toFixed(2)}`);
}

async function withdrawMoney(account) {
    const amount = Number(
        await question('\nEnter amount to withdraw: ₱')
    );

    if (!Number.isFinite(amount) || amount <= 0) {
        console.log('Invalid withdrawal amount.');
        return;
    }

    if (amount > getBalance(account)) {
        console.log('\nTransaction declined.');
        console.log('Insufficient funds.');
        return;
    }

    withdraw(account, amount);

    console.log('\nWithdrawal successful.');
    console.log(`Withdrawn: ₱${amount.toFixed(2)}`);
    console.log(`Remaining Balance: ₱${getBalance(account).toFixed(2)}`);
}

async function atmMenu(account) {
    let running = true;

    while (running) {
        console.log('\n========================================');
        console.log('                 ATM MENU');
        console.log('========================================');
        console.log('1. Check Balance');
        console.log('2. Deposit Money');
        console.log('3. Withdraw Money');
        console.log('4. Exit');
        console.log('========================================');

        const choice = (await question('Select an option: ')).trim();

        switch (choice) {
            case '1':
                await showBalance(account);
                break;

            case '2':
                await depositMoney(account);
                break;

            case '3':
                await withdrawMoney(account);
                break;

            case '4':
                console.log('\nThank you for banking with QZT Bank.');
                console.log('Please take your card.');
                running = false;
                break;

            default:
                console.log('\nInvalid option. Please choose 1-4.');
        }
    }
}

async function startATM() {
    const account = await login();

    if (!account) {
        return;
    }

    await atmMenu(account);
}

module.exports = {
    startATM
};