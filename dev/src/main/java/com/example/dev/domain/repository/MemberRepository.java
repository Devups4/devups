package com.example.dev.domain.repository;

import com.example.dev.domain.dto.userDto;
import com.example.dev.domain.entity.userEntity;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
@Slf4j
public class MemberRepository {

    private final EntityManager em;

    public void save(userEntity user){ //영속성컨텍스트 저장을 위해 Entity로 저장.
        em.persist(user);
    }

    public userEntity findOneById(Long id){
        return em.find(userEntity.class,id);
    }

    public Optional<userEntity> findOneByUserId(String userId){
        userEntity user = (userEntity) em.createQuery("select m from userEntity m where m.userId=:userId")
                .setParameter("userId",userId)
                .getSingleResult();
        Optional<userEntity> optOf = Optional.of(user); // cast to Optional instance by using "of" method!
        return optOf;
    }

    public String findUserIdByEmail(String email){
        userEntity user = (userEntity) em.createQuery("select m from userEntity m where m.email=:email")
                            .setParameter("email",email)
                            .getSingleResult();
        String findId = user.getUserId();
        return findId;
    }

    public String findUserEmailByUserId(String userId){
        userEntity user = (userEntity) em.createQuery("select m from userEntity m where m.userId=:userId")
                .setParameter("userId",userId)
                .getSingleResult();
        String findEmail = user.getEmail();
        return findEmail;
    }

    public Long findId(String userId){
        userEntity user=(userEntity) em.createQuery("select m from userEntity m where m.userId=:userId")
                          .setParameter("userId",userId)
                          .getSingleResult();  //과연 userId로 영속성 객체를 가져올수 있을까??
        Long findId = user.getId();
        return findId;
    }

    public Optional<userEntity> findUserByUserId(String userId){
        userEntity user=(userEntity) em.createQuery("select m from userEntity m where m.userId=:userId")
                .setParameter("userId",userId)
                .getSingleResult();  //과연 userId로 영속성 객체를 가져올수 있을까??
        return Optional.of(user); // return Optional instance by "of" method.
    }

    public void configNewPassword(Long id,String inputPassword){
        userEntity user = em.find(userEntity.class, id);
        user.configNewPassword(inputPassword);
    }
    public List<userEntity> ValidateDuplicateUserId(String userId){
        return em.createQuery("select m from userEntity m where m.userId=:userId",userEntity.class)
                .setParameter("userId",userId)
                .getResultList();
    }
    public List<userEntity> ValidateDuplicateUserName(String user_name){
        return em.createQuery("select m from userEntity m where m.user_name=:user_name",userEntity.class)
                .setParameter("user_name",user_name)
                .getResultList();
    }
    public List<userEntity> ValidateDuplicateUserEmail(String email){
        return em.createQuery("select m from userEntity m where m.email=:email",userEntity.class)
                .setParameter("email",email)
                .getResultList();
    }
}
