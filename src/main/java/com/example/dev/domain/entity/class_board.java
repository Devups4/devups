package com.example.dev.domain.entity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;


@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
@Table(name = "class_board")
public class class_board extends TimeEntity {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="post_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name="user_name",referencedColumnName ="user_name")
    private userEntity user;  //DB는 오브젝트를 저장할수없다. FK 자바는 오브젝트 저장이 가능하다.

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    @Column
    @ColumnDefault("0")
    private int hit;


    @Builder
    public class_board(Long id, userEntity user, String content, int hit) {
        this.id = id;
        this.user = user;
        this.content = content;
        this.hit = hit;
    }
}
