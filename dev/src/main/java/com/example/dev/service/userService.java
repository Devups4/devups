package com.example.dev.service;

import com.example.dev.domain.dto.userDto;
import com.example.dev.domain.entity.userEntity;
import com.example.dev.domain.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class userService {
    private final MemberRepository memberRepository;

    //以묐났寃��궗�뒗 �꽌鍮꾩뒪�뿉�꽌 �씠猷⑥뼱�졇�빞 �븳�떎.
    @Transactional
    public Long joinUser(userDto userDto) { //�쉶�썝媛��엯
        ValidateDuplicateMember(userDto.toEntity());
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        userDto.setPassword(passwordEncoder.encode(userDto.getPassword()));
        memberRepository.save(userDto.toEntity());
        return userDto.getId();
    }
    private void ValidateDuplicateMember(userEntity user) {
        //臾몄젣媛� �엳�떎硫� �삁�쇅瑜� �꽣�쑉由닿굅�떎.
        List<userEntity> findMembers1 = memberRepository.ValidateDuplicateUserId(user.getUserId()); //userId
        //�젙留� �셿�쟾媛숈��닚媛꾩뿉 媛숈��씠由꾩쑝濡� �벑濡앺븷�닔媛��엳�뒗�뜲... DB�쓽 硫ㅽ띁�쓽 �꽕�엫�쓣 �쑀�땲�겕 �젣�빟議곌굔�쑝濡� �옟�븘二쇰뒗嫄� 沅뚯옣�븯�떗�땲�떎.
        if(!findMembers1.isEmpty()){
            throw new IllegalStateException("�씠誘� 議댁옱�븯�뒗 �븘�씠�뵒�엯�땲�떎.");
        }
        List<userEntity> findMembers3 = memberRepository.ValidateDuplicateUserEmail(user.getEmail());
        if(!findMembers3.isEmpty()){
            throw new IllegalStateException("�씠誘� 議댁옱�븯�뒗 �씠硫붿씪�엯�땲�떎.");
        }
        List<userEntity> findMembers2 = memberRepository.ValidateDuplicateUserName(user.getUser_name());
        if(!findMembers2.isEmpty()){
            throw new IllegalStateException("�씠誘� 議댁옱�븯�뒗 �땳�꽕�엫�엯�땲�떎.");
        }
     }
    @Transactional
    public boolean loginChk(String userId,String password) { //�쉶�썝媛��엯
        Long id = memberRepository.findId(userId); //�쑀���븘�씠�뵒�뿉 ���븳 怨좎쑀�떇蹂꾩옄 踰덊샇瑜� 諛쏆븘�샃�땲�떎!
        boolean flag = false;
        if(id==null) {
            log.info("怨좎쑀 �떇蹂꾩옄 id瑜� 李얠븘�삱�닔 �뾾�뒿�땲�떎.....");   //  <- �삁�쇅泥섎━ 1
            return flag;
        }
        else{ //�쑀���뿉 �빐�떦�븯�뒗 id�뒗 �엳�쓣�븣 => �씠�젣�뒗 怨좎쑀 �떇蹂꾩옄 踰덊샇濡�(pk) 李얠븘蹂댁옄.
              // �븳踰� �뜑 DB�뿰�궛�쓣 �븯�뒗 �뒓�굦�� �엳吏�留� �씪�떒 吏꾪뻾.
            userEntity findUser = memberRepository.findOneById(id); //�쁺�냽�꽦 而⑦뀓�뒪�듃瑜� 諛쏆븘�삩�떎.
            BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
            if(passwordEncoder.matches(password,findUser.getPassword())){
                flag=true;
                return flag;
            }
            else{
                return flag;      //  <- �삁�쇅泥섎━ 2
            }
        }
    }

}
