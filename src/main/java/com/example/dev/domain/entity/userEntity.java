package com.example.dev.domain.entity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;


@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
@Table(name = "user")
public class userEntity {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @ManyToMany
    @JoinTable(
            name = "todo_userboard",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "board_id"))
    List<todo_board> boardlist;

    @Column(length = 20, nullable = false)
    private String userId;

    @Column(length = 20, nullable = false)
    private String password;

    @Column(length = 50, nullable = false)
    private String email;


    @Column(length = 10, nullable = false)
    private String user_name;

    @Column(length = 50, nullable = false)
    private String giturl;


    @Builder
    public userEntity(Long id, String userId,String password,String email,String user_name, String giturl) {
        this.id = id;
        this.userId = userId;
        this.email = email;
        this.password = password;
        this.user_name = user_name;
        this.giturl = giturl;
    }
}
