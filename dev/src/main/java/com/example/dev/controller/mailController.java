package com.example.dev.controller;

import com.example.dev.service.MailService;
import com.example.dev.service.userService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequiredArgsConstructor

public class mailController {
    private final MailService mailService;
    private final userService memberService;

    @GetMapping("/findUserId")
    public String findId() {
        return "/findUserId";
    }

    @PostMapping("/findUserId")
    public String findUserId(@RequestParam("email") String email) {
        mailService.mailSendForFindUserId(email);
        return "redirect:/";  //�옱�슂泥��떆 �씠硫붿씪�씠 �삉 蹂대궡吏�硫� �븞�릺湲곕븣臾몄뿉 redirect濡� 泥섎━瑜� �빐�빞�븳�떎.
    }

    @GetMapping("/findUserPw")
    public String findPw() {
        return "/findUserPw";
    }

    @PostMapping("/findUserPw")
    public String findUserPw(@RequestParam("userId") String userId, Model model) {
        mailService.mailSendForFindUserPw(userId);
        return "/findUserPw";
        // �뿬湲곌� �걹�굹硫� �씠�젣 prompt李� �븯�굹 �쓣�썙�꽌 �씠硫붿씪�뿉 �쟾�넚�맂 留곹겕濡� �뙣�뒪�썙�뱶李얘린瑜� 怨꾩냽 吏꾪뻾�빐二쇱떆湲� 諛붾엻�땲�떎
        // �떇�쑝濡� 吏꾪뻾�븯硫� �맆寃껉컳�떎.
    }

    @GetMapping("/configPass")
    public String configNewPassword(@RequestParam("userId") String userId, Model model) {
        model.addAttribute("userId", userId);
        return "/configNewPassword";  //�씠硫붿씪�쓣 �넻�븳 留곹겕�젒�냽.
    }
    @PostMapping("/configPass")
    public String configNewPassword(@RequestParam("userId") String userId,
                                    @RequestParam("inputPassword") String inputPassword) {
        mailService.configNewPassword(userId,inputPassword);
        return "/login";
    }
}