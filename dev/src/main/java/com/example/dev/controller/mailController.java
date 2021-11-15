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
        return "redirect:/";
    }

    @GetMapping("/findUserPw")
    public String findPw() {
        return "/findUserPw";
    }

    @PostMapping("/findUserPw")
    public String findUserPw(@RequestParam("userId") String userId, Model model) {
        mailService.mailSendForFindUserPw(userId);
        return "/findUserPw";
    }

    @GetMapping("/configPass")
    public String configNewPassword(@RequestParam("userId") String userId, Model model) {
        model.addAttribute("userId", userId);
        return "/configNewPassword";
    }
    @PostMapping("/configPass")
    public String configNewPassword(@RequestParam("userId") String userId,
                                    @RequestParam("inputPassword") String inputPassword) {
        mailService.configNewPassword(userId,inputPassword);
        return "/login";
    }
}