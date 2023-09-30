// Define the MoneyMarketProtocol class
class MoneyMarketProtocol {
  constructor() {
    this.suppliers = {};
    this.borrowers = {};
    this.assetBalance = {};
    this.interestRate = {};
  }

  deposit(userAddress, asset, amount) {
    // Supplier interacts with the protocol to deposit assets
    if (!this.suppliers[userAddress]) {
      this.suppliers[userAddress] = {};
    }
    if (!this.suppliers[userAddress][asset]) {
      this.suppliers[userAddress][asset] = 0;
      this.assetBalance = {};
    this.interestRate = {};
  }
    }
    this.suppliers[userAddress][asset] += amount;

    if (!this.assetBalance[asset]) {
      this.assetBalance[asset] = 0;
    }
    this.assetBalance[asset] += amount;
  }

  borrow(userAddress, asset, amount) {
    // Borrower interacts with the protocol to borrow assets
    if (!this.borrowers[userAddress]) {
      this.borrowers[userAddress] = {};
    }
    if (!this.borrowers[userAddress][asset]) {
      this.borrowers[userAddress][asset] = 0;
    }
    this.borrowers[userAddress][asset] += amount;

    if (!this.assetBalance[asset]) {
      this.assetBalance[asset] = 0;
    }
    this.assetBalance[asset] -= amount;
  }

  calculateInterestRate(asset) {
    // Calculate interest rate based on the supply and demand of the asset
    // For simplicity, we use a random number as an example
    this.interestRate[asset] = Math.random() * 0.1 + 0.05;
  }

  getInterestRate(asset) {
    // Retrieve the current interest rate for an asset
    return this.interestRate[asset] || 0;
  }

  getAssetBalance(asset) {
    // Retrieve the current balance of an asset in the money market
    return this.assetBalance[asset] || 0;
  }

  getSupplierBalance(userAddress, asset) {
    // Retrieve the supplier's balance of a specific asset
    if (!this.suppliers[userAddress]) {
      return 0;
    }
    return this.suppliers[userAddress][asset] || 0;
  }

  getBorrowerBalance(userAddress, asset) {
    // Retrieve the borrower's balance of a specific asset
    if (!this.borrowers[userAddress]) {
      return 0;
    }
    return this.borrowers[userAddress][asset] || 0;
  }
}

// Example usage of the MoneyMarketProtocol
const protocol = new MoneyMarketProtocol();

// Suppliers deposit assets
protocol.deposit("supplier1", "BTC", 10);
protocol.deposit("supplier2", "USDT", 100);

// Borrowers borrow assets
protocol.borrow("borrower1", "BTC", 5);
protocol.borrow("borrower2", "USDT", 50);

// Calculate interest rates
protocol.calculateInterestRate("BTC");
protocol.calculateInterestRate("USDT");

// Get interest rates for assets
console.log("Interest rate for BTC:", protocol.getInterestRate("BTC"));
console.log("Interest rate for USDT:", protocol.getInterestRate("USDT"));

// Get asset balances
console.log("BTC balance in the money market:", protocol.getAssetBalance("BTC"));
console.log("USDT balance in the money market:", protocol.getAssetBalance("USDT"));

// Get supplier balances
console.log("Supplier1 BTC balance:", protocol.getSupplierBalance("supplier1", "BTC"));
console.log("Supplier2 USDT balance:", protocol.getSupplierBalance("supplier2", "USDT"));

// Get borrower balances
console.log("Borrower1 BTC balance:", protocol.getBorrowerBalance("borrower1", "BTC"));
console.log("Borrower2 USDT balance:", protocol.getBorrowerBalance("borrower2", "USDT"));
