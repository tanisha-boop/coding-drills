const accounts = [
    {
        accountNumber: '1002456789',
        accountName: 'Tanisha Jalaf',
        pin: '2005',
        balance: 25000.00
    },
    {
        accountNumber: '1009876543',
        accountName: 'Daniel Santos',
        pin: '1234',
        balance: 18500.00
    }
];

function findAccount(accountNumber) {
    return accounts.find(
        account => account.accountNumber === accountNumber
    );
}

function verifyPin(account, pin) {
    return account && account.pin === pin;
}

function deposit(account, amount) {
    account.balance += amount;
}

function withdraw(account, amount) {
    if (amount > account.balance) {
        return false;
    }

    account.balance -= amount;
    return true;
}

function getBalance(account) {
    return account.balance;
}

module.exports = {
    findAccount,
    verifyPin,
    deposit,
    withdraw,
    getBalance
};