package com.example.dev.domain.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class Board_HashtagDto {
    private Long hashtagId;
    private String hashtag;
    private Long boardId;
}
