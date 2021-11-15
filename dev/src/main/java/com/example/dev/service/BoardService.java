package com.example.dev.service;

import com.example.dev.domain.dto.BoardDto;
import com.example.dev.domain.dto.Board_HashtagDto;
import com.example.dev.domain.entity.BoardEntity;
import com.example.dev.domain.entity.Board_HashtagEntity;
import com.example.dev.domain.repository.BoardRepository;
import lombok.AllArgsConstructor;

import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@Service
public class BoardService {
    private BoardRepository boardRepository;

    /*@Transactional
    public Long savePost(BoardDto boardDto) {
        return boardRepository.save(boardDto.toEntity()).getId();
    }*/
       
    
    @Transactional
    public List<BoardDto> getBoardlist() {
        List<BoardEntity> boardEntities = boardRepository.findAll();
        List<BoardDto> boardDtoList = new ArrayList<>();

        for ( BoardEntity boardEntity : boardEntities) {
            BoardDto boardDTO = BoardDto.builder()
                    .id(boardEntity.getId())
                    .title(boardEntity.getTitle())
                    .content(boardEntity.getContent())
                    .writer(boardEntity.getWriter())
                    .createdDate(boardEntity.getCreatedDate())
                    .summary(boardEntity.getSummary())
                    .build();

            boardDtoList.add(boardDTO);
        }
        return boardDtoList;
    }
    
    @Transactional
    public BoardDto getPost(Long id) {
        java.util.Optional<BoardEntity> boardEntityWrapper = boardRepository.findById(id);
        BoardEntity boardEntity = ((java.util.Optional<BoardEntity>) boardEntityWrapper).get();

        BoardDto boardDTO = BoardDto.builder()
                .id(boardEntity.getId())
                .title(boardEntity.getTitle())
                .content(boardEntity.getContent())
                .writer(boardEntity.getWriter())
                .createdDate(boardEntity.getCreatedDate())
                .summary(boardEntity.getSummary())
                .build();

        return boardDTO;
    }

    @Transactional
    public Long savePost(BoardDto boardDto) {
        return boardRepository.save(boardDto.toEntity()).getId();
    }

    @Transactional
    public void deletePost(Long id) {
        boardRepository.deleteById(id);
    }

    @Transactional
    public Board_HashtagDto getHashtag(Long id) {
        java.util.Optional<Board_HashtagEntity> boardEntityWrapper = boardRepository.findById(id);
        BoardEntity boardEntity = ((java.util.Optional<BoardEntity>) boardEntityWrapper).get();

        BoardDto boardDTO = BoardDto.builder()
                .id(boardEntity.getId())
                .title(boardEntity.getTitle())
                .content(boardEntity.getContent())
                .writer(boardEntity.getWriter())
                .createdDate(boardEntity.getCreatedDate())
                .summary(boardEntity.getSummary())
                .build();

        return boardDTO;
    }
}