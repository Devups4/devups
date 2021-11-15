package com.example.dev.domain.dto;

import com.example.dev.domain.entity.userEntity;
import lombok.*;

import javax.persistence.Column;

@Getter @Setter
@ToString @NoArgsConstructor
public class userDto {

    private Long id;
    private String userId;
    private String password;
    private String email;
    private String user_name;
    private String giturl;

    public userEntity toEntity(){
        return userEntity.builder()
                .id(id)
                .userId(userId)
                .password(password)
                .email(email)
                .user_name(user_name)
                .giturl(giturl)
                .build();
    }
    @Builder
    public userDto(Long id,String userId,String password,String email, String user_name,String giturl) {
        this.id = id;
        this.userId = userId;
        this.password = password;
        this.email = email;
        this.user_name = user_name;
        this.giturl = giturl;
    }

}
