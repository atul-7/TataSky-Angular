package com.cg.dao;

import org.apache.log4j.Logger;

import com.cg.util.BankingMessages;

public class BankingDaoImpl implements BankingDao {

	private static final double MIN_BALANCE = 1000;
	private double balance=MIN_BALANCE;
	private Logger logger = Logger.getLogger(BankingDaoImpl.class);
	@Override
	public boolean deposit(double amount) {
		logger.info("Amount : " + amount);
				balance += amount;
		//System.out.println("amount = " + amount);
		return true;
	}

	@Override
	public double getBalance() {
		logger.info("Balance : " + balance);
		return balance;
	}

	@Override
	public double withdraw(double amount) throws BankingException {
		logger.info("Amount : " + amount);
		double bal = balance-amount;
		if(bal<MIN_BALANCE) {
			logger.error("Insufficient balance : " + balance);
			throw new BankingException(BankingMessages.INSUFFICIENT_BALANCE);
		}
		balance = bal;
		return balance;
	}

}
