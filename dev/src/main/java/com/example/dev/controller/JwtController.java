package com.example.dev.controller;

import com.example.dev.domain.dto.LoginRequest;
import com.example.dev.domain.dto.TokenResponse;
import com.example.dev.service.userService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class JwtController {
    private final userService userService;

    @PostMapping("/user/login")
    public ResponseEntity<TokenResponse> login(LoginRequest loginRequest) {
        String token = userService.createToken(loginRequest);
        return ResponseEntity.ok().body(new TokenResponse(token, "bearer"));
    }
}
