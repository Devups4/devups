package com.example.dev.domain.entity;

import lombok.*;

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

    @Column(length = 30, nullable = false)
    private String userId;

    @Column(length = 100, nullable = false)
    private String password;

    @Column(length = 50, nullable = false)
    private String email;


    @Column(length = 20, nullable = false)
    private String user_name;

    @Column(length = 50, nullable = false)
    private String giturl;


    @Builder
    public userEntity(Long id, String userId,String password,String email,String user_name, String giturl) {
        this.id = id;
        this.userId = userId;
        this.password = password;
        this.email = email;
        this.user_name = user_name;
        this.giturl = giturl;
    }

    //==Setter瑜� �뿴湲곕낫�떎�뒗 �뿬湲곗뿉 鍮꾩쫰�땲�뒪 濡쒖쭅硫붿냼�뱾瑜� 異붽��븯�옄.==//
    public void configNewPassword(String inputPassword){
        this.password=inputPassword;
    }
}
