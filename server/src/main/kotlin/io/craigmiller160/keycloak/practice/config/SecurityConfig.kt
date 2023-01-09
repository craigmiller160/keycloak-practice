package io.craigmiller160.keycloak.practice.config

import org.keycloak.adapters.springsecurity.KeycloakConfiguration
import org.keycloak.adapters.springsecurity.config.KeycloakWebSecurityConfigurerAdapter
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.core.context.SecurityContext
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.core.context.SecurityContextImpl
import org.springframework.security.web.authentication.session.SessionAuthenticationStrategy

//@Configuration
//@KeycloakConfiguration
//@EnableWebSecurity
//class SecurityConfig : KeycloakWebSecurityConfigurerAdapter() {
//    override fun sessionAuthenticationStrategy(): SessionAuthenticationStrategy =
//        SessionAuthenticationStrategy { authentication, request, response ->
//            val context = SecurityContextImpl(authentication)
//            SecurityContextHolder.setContext(context)
//        }
//}