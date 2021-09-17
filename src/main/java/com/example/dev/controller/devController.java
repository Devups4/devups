package com.example.dev.controller;

import com.example.dev.service.BoardService;
import com.example.dev.dto.BoardDto;
import lombok.AllArgsConstructor;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
    	model.addAttribute("username", "야미");
        return "hello.html";
    }
    
    // spring security 제거
    protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable().headers().frameOptions().disable();
	}
    
    @GetMapping("/board")
    public String list(Model model) {
        List<BoardDto> boardList = boardService.getBoardlist();

        model.addAttribute("boardList", boardList);
        System.out.println("list");
        
        return "board/list.html";
    }

    // 글쓰기
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
        return "redirect:/";
    }
}
