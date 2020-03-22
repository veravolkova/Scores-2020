package com.task.scores;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.task.scores.web.UserController;

@RunWith(SpringRunner.class)
@SpringBootTest
class ScoresApplicationTests {
	@Autowired
	private UserController controller;

	@Test
	public void contextLoads() {
		assertThat(controller).isNotNull();
	}
}
