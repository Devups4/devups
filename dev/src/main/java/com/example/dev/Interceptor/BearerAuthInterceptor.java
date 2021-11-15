package com.example.dev.Interceptor;

import com.example.dev.AuthorizationExtractor;
import com.example.dev.JwtTokenProvider;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class BearerAuthInterceptor implements HandlerInterceptor {
    //HandlerInterceptor를 통해서 인터셉터를 "구현"한다.
    private AuthorizationExtractor authExtractor;
    private JwtTokenProvider jwtTokenProvider;

    public BearerAuthInterceptor(AuthorizationExtractor authExtractor, JwtTokenProvider jwtTokenProvider) {
        this.authExtractor = authExtractor;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Override
    public boolean preHandle(HttpServletRequest request,
                             HttpServletResponse response, Object handler) {
        System.out.println(">>> interceptor.preHandle occur");
        String token = authExtractor.extract(request, "Bearer");
        if (ObjectUtils.isEmpty(token)) {
            throw new IllegalArgumentException("There is no Token..........");
        }

        if (!jwtTokenProvider.validateToken(token)) {
            throw new IllegalArgumentException("not valid token!!!!!!!!!!!!!!!!");
        }

        String name = jwtTokenProvider.getSubject(token); //userId를 획득합니다.
        request.setAttribute("name", name); //request에 subject(userId)를 전달합니다.
        return true;
    }
}
