package com.task.scores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.task.scores.domain.User;
import com.task.scores.domain.UserRepository;

@SpringBootApplication
public class ScoresApplication {

	@Autowired
	private UserRepository urepository;

	public static void main(String[] args) {
		SpringApplication.run(ScoresApplication.class, args);
	}

	@Bean

	CommandLineRunner runner() {
		return args -> {

			User user1 = new User("John", 204);
			User user2 = new User("Mary", 155);
			User user3 = new User("Jack", 97);
			User user4 = new User("Liza", 296);
			User user5 = new User("Dan", 116);

			urepository.save(user1);
			urepository.save(user2);
			urepository.save(user3);
			urepository.save(user4);
			urepository.save(user5);

		};
	}
}
