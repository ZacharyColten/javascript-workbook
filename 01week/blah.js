class Account {
  constructor(iAccountNumber, iHolder, iType){
    this.accountNumber = iAccountNumber;
    this.balance = 0;
    this.holder = iHolder;
    this.type = iType;
  }
  bob(){
    let description = `${this.accountNumber} is a ${this.type} account with a balance of ${this.balance}`;
    return description;
  }
  // updateBalance(amount){
  //   let newTransaction = new Transaction(description, amount);
  //   this.transaction.push(newTransaction);
  //   this.balance = this.balance + amount;
  // }
}
let account1 = new Account("2309409324809324", "Maggie Smith", "Checking");
let account2 = new Account("23043534534543", "danny smith", "Savings");

console.log("Account1 info = ", account1.bob());

console.log ("Account1 info = ", account1.bob());
account1.updateBalance(10);
account1.updateBalance(50);
account1.updateBalance(-12);

class Transaction{
  constructor(iDescription, iAmount){
    this.description = iDescription;
    this.amount = iAmount;
  }
}

for(let i = 0; i < account1.transactions.length; i++){
console.log(`transaction # ${i}: ${account1.transactions[i].description}`)
}

account1.transactions.forEach()(function(transaction, index){
  console.log(`${index}: ${transaction.description} -> ${transaction.amount}`);
});





