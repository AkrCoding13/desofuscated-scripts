/**
 * Monetary System - Bank Account Management
 * 
 * This module provides functionality for managing bank accounts including
 * deposits, withdrawals, transfers, and transaction history tracking.
 * 
 * Features:
 * - Account creation with initial balance
 * - Deposit funds
 * - Withdraw funds with balance validation
 * - Transfer between accounts
 * - Transaction history tracking
 * - Balance inquiry
 */

/**
 * BankAccount class represents a single bank account
 * with support for deposits, withdrawals, and transfers
 */
class BankAccount {
    /**
     * Creates a new bank account
     * @param {string} currency - The currency code (e.g., 'USD', 'EUR', 'GBP')
     * @param {number} initialBalance - The initial account balance (default: 0)
     */
    constructor(currency, initialBalance = 0) {
        this.currency = currency;
        this.balance = initialBalance;
        this.transactions = [];
        
        console.log('Account created with initial amount', initialBalance);
    }

    /**
     * Deposits money into the account
     * @param {number} amount - The amount to deposit
     * @returns {boolean} - True if deposit was successful, false otherwise
     */
    deposit(amount) {
        // Validate that amount is positive
        if (amount < 0) {
            console.error('Invalid Cannot negative amount');
            return false;
        }

        // Add amount to balance
        this.balance = this.balance + amount;
        
        // Record transaction
        this.transactions.push({
            type: 'deposit',
            amount: amount
        });

        console.log('Deposited', amount, 'to account');
        return true;
    }

    /**
     * Withdraws money from the account
     * @param {number} amount - The amount to withdraw
     * @returns {boolean} - True if withdrawal was successful, false otherwise
     */
    withdraw(amount) {
        // Validate that amount is positive
        if (amount < 0) {
            console.error('Invalid Cannot negative amount');
            return false;
        }

        // Check if sufficient funds are available
        if (!(this.balance > amount)) {
            console.error('Insufficient funds');
            return false;
        }

        // Subtract amount from balance
        this.balance = this.balance - amount;
        
        // Record transaction
        this.transactions.push({
            type: 'withdraw',
            amount: amount
        });

        console.log('Withdrawn', amount, 'from account');
        return true;
    }

    /**
     * Transfers money to another account
     * @param {BankAccount} targetAccount - The account to transfer to
     * @param {number} amount - The amount to transfer
     * @returns {boolean} - True if transfer was successful, false otherwise
     */
    transfer(targetAccount, amount) {
        // Validate that amount is positive
        if (amount < 0) {
            console.error('Invalid Cannot negative amount');
            return false;
        }

        // Check if sufficient funds are available for transfer
        if (!(this.balance > amount)) {
            console.error('Insufficient funds from transfer');
            return false;
        }

        // Withdraw from this account
        this.withdraw(amount);
        
        // Deposit to target account
        targetAccount.deposit(amount);

        console.log('Transfer successful');
        return true;
    }

    /**
     * Gets the current balance of the account
     * @returns {number} - The current balance
     */
    getBalance() {
        return this.balance;
    }

    /**
     * Gets the transaction history for the account
     * @returns {Array} - Array of transaction objects
     */
    getTransactionHistory() {
        return this.transactions;
    }

    /**
     * Returns a string representation of the account
     * @returns {string} - Account information as a string
     */
    toString() {
        return 'to ' + this.currency + ': Current balance ' + this.balance;
    }
}

// ========================================
// Example Usage / Demo
// ========================================

/**
 * Initialize the monetary system with example accounts
 */
function initializeMonetarySystem() {
    // Create two accounts with different currencies
    const usdAccount = new BankAccount('USD', 1000);  // $1000 initial balance
    const eurAccount = new BankAccount('EUR', 500);   // €500 initial balance
    
    // Perform some transactions
    usdAccount.deposit(200);           // Deposit $200
    usdAccount.withdraw(100);          // Withdraw $100
    usdAccount.transfer(eurAccount, 300);  // Transfer $300 to EUR account
    
    // Display account information
    console.log(usdAccount.toString());
    console.log(eurAccount.toString());
}

// Run the demo
initializeMonetarySystem();
