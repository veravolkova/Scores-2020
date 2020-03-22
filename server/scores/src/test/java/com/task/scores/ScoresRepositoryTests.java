package com.task.scores;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import com.task.scores.domain.User;

@RunWith(SpringRunner.class)
@DataJpaTest
public class ScoresRepositoryTests {
	@Autowired
	private TestEntityManager entityManager;
	
	User user = new User("Maria", 103);

	@Test
	public void saveUser() {
		entityManager.persistAndFlush(user);
		assertThat(user.getId()).isNotNull();
	}

}
