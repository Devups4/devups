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
@Table(name = "todo_log")
public class todo_log extends TimeEntity{

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column(nullable = false)
    private String action;
    //add moved update 처럼 동작방식.

    @Column(nullable = false)
    private String subject; //내용

    @Column(nullable = false)
    private String from_column;
    //리스트간의 이동을 나타내기 위한 column

    @Column(nullable = false)
    private String to_column;


    @ManyToOne
    @JoinColumn(name = "todo_board_id")
    private todo_board board;
    //Many쪽에서 foreign key관리 -> board id를 통해서 user_id를 가져올것.

    @Builder
    public todo_log(Long id,String action,String subject,String from_column,String to_column,todo_board board) {
        this.id = id;
        this.action =action;
        this.subject =subject;
        this.from_column =from_column;
        this.to_column =to_column;
        this.board = board;
    }
}
