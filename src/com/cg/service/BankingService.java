package com.cg.service;

import com.cg.dao.BankingException;

public interface BankingService {

	boolean deposit(double amount);

	double getBalance();

	double withdraw(double amount) throws BankingException;

}
