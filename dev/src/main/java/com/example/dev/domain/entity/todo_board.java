package com.example.dev.domain.entity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.util.Set;


@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
@Table(name = "todo_board")
public class todo_board extends TimeEntity {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column
    private Long id;

    /*board와 list는 다대일 관계이다.*/
    @Column(nullable = false)
    private String title;

    @ManyToMany(mappedBy = "boardlist")
    Set<userEntity> users;
    // 지금여기를 통해서 userEntity와 다대다 관계가 맺어진것이다.
    // 생성된 todo_userboard에 유저에해당하는 boardId가 저장될것이다.


    /* OneToMany나 ManyToOne이든 Many쪽에서 외래키가 관리된다고합니다.... */

    @Builder
    public todo_board(Long id,String title,Set<userEntity> user) {
        this.id = id;
        this.title = title;
        this.users = user;
    }
}
