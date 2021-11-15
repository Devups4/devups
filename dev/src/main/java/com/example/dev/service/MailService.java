package com.example.dev.service;

import com.example.dev.domain.dto.MailDto;
import com.example.dev.domain.repository.MemberRepository;
import lombok.AllArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@AllArgsConstructor
public class MailService {  //�꽌鍮꾩뒪�떒�뿉�뒗 transactional�씠 �븘�닔�쟻�씠�떎.
    private JavaMailSender mailSender;
    private static final String FROM_ADDRESS = "funnypaanda@gmail.com";
    private final MemberRepository memberRepository;

    @Transactional
    public void mailSendForFindUserId(String email) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setFrom(MailService.FROM_ADDRESS);
        message.setSubject("Check Your userId!");
        String findId = memberRepository.findUserIdByEmail(email);
        message.setText("Your Id is \" "+findId+" \"");
        mailSender.send(message);
    }

    @Transactional
    public void mailSendForFindUserPw(String userId) {
        SimpleMailMessage message = new SimpleMailMessage();
        String email = memberRepository.findUserEmailByUserId(userId);
        message.setTo(email); //id瑜� �넻�빐 �쑀���쓽 �씠硫붿씪�쓣 �쉷�뱷.
        message.setFrom(MailService.FROM_ADDRESS);
        message.setSubject("鍮꾨�踰덊샇 李얘린 怨쇱젙 吏꾪뻾硫붿꽭吏��엯�땲�떎.");
        message.setText("Click link : "+"http://localhost:8080/configPass"+"?userId="+userId);
        mailSender.send(message);
    }
    @Transactional
    public void configNewPassword(String userId,String inputPassword){
        Long id =memberRepository.findId(userId);
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        memberRepository.configNewPassword(id,passwordEncoder.encode(inputPassword));
    }
}
