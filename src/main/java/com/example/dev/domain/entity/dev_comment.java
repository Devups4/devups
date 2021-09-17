package com.example.dev.domain.entity;


import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
@Table(name = "dev_comment")
public class dev_comment extends TimeEntity{
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="comment_id")
    private Long id;

    @Column(length = 20, nullable = false)
    private String writer;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    @ManyToOne
    @JoinColumn(name="post_id")
    private dev_board post;

    @ManyToOne
    @JoinColumn(name="parent_id")
    private dev_comment parent;

    @OneToMany(mappedBy = "parent", orphanRemoval = true, fetch = FetchType.LAZY)
    private List<ps_comment> children = new ArrayList<>();

    @Builder
    public dev_comment(Long id, String writer, String content, dev_board post, dev_comment parent) {
        this.id = id;
        this.writer = writer;
        this.content = content;
        this.post = post;
        this.parent = parent;
    }
}
