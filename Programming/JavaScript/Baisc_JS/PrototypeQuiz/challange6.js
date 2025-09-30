// You need to implement the BankAccount constructor function and its prototype methods

function BankAccount(balance) {
  // Initialize balance and transactions properties
  if (!(typeof balance === "number")) {
    throw new Error("Argument must be a Number");
  }
  this.balance = balance;
  this.transactions = [];
}

// Define deposit method on BankAccount's prototype
BankAccount.prototype.deposit = function (amount) {
  if (!(typeof amount === "number")) {
    throw new Error("Argument must be a Number");
  }
  this.balance += amount;
  this.transactions.push(`Deposited ${amount}`);
};

// Define withdraw method on BankAccount's prototype
BankAccount.prototype.withdraw = function (amount) {
  if (this.balance - amount < 0) {
    this.transactions.push("Insufficient balance");
  } else {
    this.balance -= amount;
    this.transactions.push(`Withdraw ${amount}`);
  }
};

// Define getTransactionHistory method on BankAccount's prototype
BankAccount.prototype.getTransactionHistory = function () {
  return this.transactions;
};

const account = new BankAccount(200);

// account.deposit(50)
account.withdraw(20);

console.log(account.getTransactionHistory());
