package com.example.dev.controller;

import com.example.dev.domain.dto.LoginRequest;
import com.example.dev.domain.dto.TokenResponse;
import com.example.dev.domain.dto.userDto;
import com.example.dev.service.userService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequiredArgsConstructor
public class userController {

    private final userService userService;

    @GetMapping("/user/signup") //洹몃깷 �쉶�썝媛��엯�솕硫댁쑝濡� 蹂대궡以�.
    public String dispSignup() {
        return "/signup";
    }

    // �쉶�썝媛��엯 泥섎━
    @PostMapping("/user/signup")
    public String execSignup(userDto userDto,Model model) {
        try {
            userService.joinUser(userDto);  //DB泥섎━瑜� �븯怨� �솕硫댁쑝濡� 蹂대깂.
        } catch(IllegalStateException e){
            String errMsg = e.getMessage();
            model.addAttribute("errMsg",errMsg);
            return "/ShowErr";
        }
        return "redirect:/login";
    }

    @GetMapping("/login")   //�떒�닚�븯寃� 濡쒓렇�씤 �솕硫댁쑝濡� 蹂대깂
    public String to_login(){
        return "/login";
    }

//    @PostMapping("/user/login")
//    public String login(@RequestParam("userId") String userId,
//                        @RequestParam("password") String password,
//                        Model model){
//        if(userService.loginChk(userId,password)){
//            //�듃猷⑥씪�떆 �긽�깭�쑀吏� 吏꾪뻾媛��뒫. => 由ъ븸�듃遺��뿉�꽌 泥섎━?
//            // model濡� �궗�슜�옄�쓽 �떇蹂꾩옄 id�� user_name�젙�룄 �꽆寃⑥��떎怨� �깮媛곹빀�떆�떎.
//            return "redirect:/";
//        } else{
//            return "redirect:/login";
//        }
//    }


}
