package com.example.dev.domain.dto;


import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
public class LoginRequest {
    private String userId;
    private String password;
}
