package com.example.dev.domain.entity;


import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
@Table(name = "todo_list")
public class todo_list extends TimeEntity{

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String stat;

    /* 다쪽인 이쪽에서 foreign key를 가지고있다. board의 id에 대한 키를가지고 있습니다.
     *  그 board의 id로 유저에 대한 id를 얻을수있고, 그에 대해서 user의 정보를 얻을수있다.
     * */
    @ManyToOne
    @JoinColumn(name = "todo_board_id")
    private todo_board board;

    @Builder
    public todo_list(Long id,String title,String stat,todo_board board) {
        this.id = id;
        this.title = title;
        this.stat = stat;
        this.board = board;
    }
}
