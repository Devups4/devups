package com.example.dev;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@EnableJpaAuditing
@SpringBootApplication
public class DevApplication {
	public static void main(String[] args) {
		SpringApplication.run(DevApplication.class, args);
	}
	@Bean
	public PasswordEncoder passwordEncoder(){ 
		return new BCryptPasswordEncoder(); 
	} 
	protected void configure(HttpSecurity httpSecurity)throws Exception{ 
		httpSecurity.csrf().disable(); 
	} 
	public void configure(WebSecurity webSecurity)throws Exception{ 
		webSecurity.ignoring().antMatchers("/css/**", "/fonts/**", "/images/**", "/js/**", "/plugins/**"); 
	} 
}
