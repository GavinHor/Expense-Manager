package com.FDM.ExpenseManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DBViewer implements CommandLineRunner {
	
	private final TestRepo repo;

	@Autowired
	public DBViewer(TestRepo repo){
		this.repo=repo;
	}

	@Override
	public void run(String... strings) throws Exception{
		this.repo.save(new TestEmployee("John", "Doe", "test"));
	}
}
