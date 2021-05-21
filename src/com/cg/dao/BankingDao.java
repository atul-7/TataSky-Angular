package com.cg.dao;

public interface BankingDao {

	boolean deposit(double amount);

	double getBalance();

	double withdraw(double amount) throws BankingException;

}
