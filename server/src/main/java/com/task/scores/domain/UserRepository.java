package com.task.scores.domain;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*", allowedHeaders = "*")
public interface UserRepository extends CrudRepository<User, Long> {

	List<User> findAllByOrderByScoreDesc();
}
