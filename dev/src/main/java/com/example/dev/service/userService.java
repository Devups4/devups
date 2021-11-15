package com.example.dev.service;

import com.example.dev.JwtTokenProvider;
import com.example.dev.domain.dto.LoginRequest;
import com.example.dev.domain.dto.userDto;
import com.example.dev.domain.entity.userEntity;
import com.example.dev.domain.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class userService {
    private final MemberRepository memberRepository;
    private final JwtTokenProvider jwtTokenProvider;


    @Transactional
    public Long joinUser(userDto userDto) {
        ValidateDuplicateMember(userDto.toEntity());
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        userDto.setPassword(passwordEncoder.encode(userDto.getPassword()));
        memberRepository.save(userDto.toEntity());
        return userDto.getId();
    }
    private void ValidateDuplicateMember(userEntity user) {

        List<userEntity> findMembers1 = memberRepository.ValidateDuplicateUserId(user.getUserId()); //userId
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
        else{
            userEntity findUser = memberRepository.findOneById(id); //�쁺�냽�꽦 而⑦뀓�뒪�듃瑜� 諛쏆븘�삩�떎.
            BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
            if(passwordEncoder.matches(password,findUser.getPassword())){
                flag=true;
                return flag;
            }
            else{
                return flag;
            }
        }
    }
    @Transactional
    public Optional<userEntity> findUserByUserId(String userId){
        return memberRepository.findOneByUserId(userId);
    }

    @Transactional
    public String createToken(LoginRequest loginRequest) {
        userEntity user = memberRepository.findUserByUserId(loginRequest.getUserId())
                .orElseThrow(IllegalArgumentException::new); // by using Optional -> I can use "orElseThrow" method!
                /* orElseThrow를 사용하면 에러 처리에 대한 간편성이 생깁니다!
                *  값이 없는경우 기본값을 반환하는 대신 예외를 던져야 하는 경우도 있습니다. 이때 orElseThrow() 사용.*/
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        if(passwordEncoder.matches(loginRequest.getPassword(),user.getPassword())){
            return jwtTokenProvider.createToken(user.getUserId());
        }
        else{
            return "Not Match Password";
            //오류 처리 방법?
        }

    }

}
