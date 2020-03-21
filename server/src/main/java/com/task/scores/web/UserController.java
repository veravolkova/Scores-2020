package com.task.scores.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.task.scores.domain.User;
import com.task.scores.domain.UserRepository;

@RestController
public class UserController {
	@Autowired
	private UserRepository urepository;

	@RequestMapping("/users")
	public Iterable<User> getUsers() {
		return urepository.findAll();
	}
}
