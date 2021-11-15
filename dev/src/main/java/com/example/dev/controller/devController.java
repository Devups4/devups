package com.example.dev.controller;

import com.example.dev.service.BoardService;
import com.example.dev.domain.dto.BoardDto;
import lombok.AllArgsConstructor;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import java.util.List;

@Controller
@AllArgsConstructor
public class devController {
	private BoardService boardService;
	
	/*public devController(BoardService boardService) {
		this.boardService = boardService;
	}*/

    @GetMapping("/")
    public String start(Model model){
    	model.addAttribute("username", "hello");
        return "hello.html";
    }
    
    // spring security ����
    protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable().headers().frameOptions().disable();
	}
    
    /*@GetMapping("/board")
    public String list(Model model) {
        List<BoardDto> boardList = boardService.getBoardlist();

        model.addAttribute("boardList", boardList);
        System.out.println("list");
        
        return "board/list.html";
    }


    @GetMapping("/board/post")
    public String write() {
    	System.out.println("post");
        return "board/write.html";
    }


    @PostMapping("/board/post")
    public String write(BoardDto boardDto) {
    	boardService.savePost(boardDto);
    	System.out.println("savepost");
    	System.out.println(boardDto.toString());
    	//return "board/list.html";
        return "redirect:/board";
    }
    
    @GetMapping("/board/post/{no}")
    public String detail(@PathVariable("no") Long no, Model model) {
        BoardDto boardDTO = boardService.getPost(no);

        model.addAttribute("boardDto", boardDTO);
        return "board/detail.html";
    }

    @GetMapping("/board/post/edit/{no}")
    public String edit(@PathVariable("no") Long no, Model model) {
        BoardDto boardDTO = boardService.getPost(no);

        model.addAttribute("boardDto", boardDTO);
        return "board/update.html";
    }

    @PutMapping("/board/post/edit/{no}")
    public String update(BoardDto boardDTO) {
        boardService.savePost(boardDTO);

        return "redirect:/board";
    }

    @DeleteMapping("/board/post/{no}")
    public String delete(@PathVariable("no") Long no) {
        boardService.deletePost(no);

        return "redirect:/board";
    }*/
}
