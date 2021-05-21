package com.cg.service;

import com.cg.dao.BankingDao;
import com.cg.dao.BankingDaoImpl;
import com.cg.dao.BankingException;

public class BankingServiceImpl implements BankingService {
	private BankingDao bDao;
	
	public BankingServiceImpl() {
		bDao = new BankingDaoImpl();
	}

	@Override
	public boolean deposit(double amount) {		
		return bDao.deposit(amount);
	}

	@Override
	public double getBalance() {
		return bDao.getBalance();
	}

	@Override
	public double withdraw(double amount) throws BankingException {
		return bDao.withdraw(amount);
	}

}
