package com.example.dev.controller;

import com.example.dev.domain.dto.BoardDto;
import com.example.dev.service.BoardService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@AllArgsConstructor
@RequestMapping("/board")
public class boardController {
    private BoardService boardService;

    @GetMapping("")
    public String list(Model model) {
        List<BoardDto> boardList = boardService.getBoardlist();
        model.addAttribute("boardList", boardList);
        System.out.println("list");
        return "board/list.html";
    }

    @GetMapping("/post")
    public String write() {
        System.out.println("post");
        return "board/write.html";
    }


    @PostMapping("/post")
    public String write(BoardDto boardDto) {
        boardService.savePost(boardDto);
        System.out.println("savepost");
        System.out.println(boardDto.toString());
        //return "board/list.html";
        return "redirect:/board";
    }

    @GetMapping("/post/{no}")
    public String detail(@PathVariable("no") Long no, Model model) {
        BoardDto boardDTO = boardService.getPost(no);

        model.addAttribute("boardDto", boardDTO);
        return "board/detail.html";
    }

    @GetMapping("/post/edit/{no}")
    public String edit(@PathVariable("no") Long no, Model model) {
        BoardDto boardDTO = boardService.getPost(no);

        model.addAttribute("boardDto", boardDTO);
        return "board/update.html";
    }

    @PutMapping("/post/edit/{no}")
    public String update(BoardDto boardDTO) {
        boardService.savePost(boardDTO);

        return "redirect:/board";
    }

    @DeleteMapping("/post/{no}")
    public String delete(@PathVariable("no") Long no) {
        boardService.deletePost(no);

        return "redirect:/board";
    }

}
