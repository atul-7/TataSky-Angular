package com.cg.dao;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

public class BankingTest {
	private BankingDaoImpl bDao = new BankingDaoImpl();
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
	}

	@AfterClass
	public static void tearDownAfterClass() throws Exception {
	}

	@Before
	public void setUp() throws Exception {
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void testDeposit() {
		boolean success=bDao.deposit(3000);
		assertTrue(success);	}

	@Test
	public void testGetBalance() {
		//fail("Not yet implemented");
		double balance=bDao.getBalance();
		assertEquals(1000, balance,0.1);
	}

	@Test
	public void testWithdraw() throws BankingException{
	//	fail("Not yet implemented");
		boolean success=bDao.deposit(3000);
		double balance=bDao.withdraw(500);
		assertEquals(3500,balance, 0.1);
	}

}
