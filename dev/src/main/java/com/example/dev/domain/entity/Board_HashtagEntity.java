package com.example.dev.domain.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
@Table(name = "board_hashtag")
public class Board_HashtagEntity {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long hashtagId;

    @Column(length = 300, nullable = false)
    private String hashtag;

    @Id
    private Long boardId;
}
