package com.cg.ui;

import java.util.InputMismatchException;
import java.util.Scanner;

import com.cg.dao.BankingException;
import com.cg.service.BankingService;
import com.cg.service.BankingServiceImpl;

public class BankingMain {
	
	private BankingService bService;
	
	public BankingMain() {
		bService = new BankingServiceImpl();
	}
	private void execute() {
		Scanner scan = new Scanner(System.in);
		int choice = 0;
		while(true) {
			choice = getChoice(scan);
			switch (choice) {
			case 1:
				System.out.println("Deposit Amount");
				System.out.println("Enter Amount to deposit");
				// do-while till correct value is entered
				double amount = scan.nextDouble();
				boolean success = bService.deposit(amount);
				break;
			case 2:
				System.out.println("Withdraw Amount");
				System.out.println("Enter Amount to withdraw");
				amount = scan.nextDouble();
				double balance=0;
				try {
					balance = bService.withdraw(amount);
					System.out.println("Amount withdrawn, balance: " + balance);
				} catch (BankingException e) {
					System.out.println(e.getMessage());
				}
				break;
			case 3:
				System.out.println("Check Balance");
				 balance = bService.getBalance();
				System.out.println("Balance is " + balance);
				break;
			case 4:
				System.out.println("Exiting system, thank you");
				System.exit(0);
				break;

			default:
				System.out.println("Enter 1 to 4 only");
				break;
			}
		}
	}
	private int getChoice(Scanner scan) {
		int choice = 0;
		System.out.println("Banking System");
		System.out.println("1. Deposit Amount");
		System.out.println("2. Withdraw Amount");
		System.out.println("3. Check Balance");
		System.out.println("4. Exit System");
		System.out.println("Please enter your choice");
		try {
		  choice = scan.nextInt();
		}catch (InputMismatchException e) {
			System.out.println("Enter a number");
			scan.nextLine(); // consume the keyboard value
		}
		return choice;
	}
	public static void main(String[] args) {
		new BankingMain().execute();
	}
}
