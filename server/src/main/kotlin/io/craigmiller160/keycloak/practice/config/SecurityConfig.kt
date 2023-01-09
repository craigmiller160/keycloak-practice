package io.craigmiller160.keycloak.practice.config

import org.keycloak.adapters.springsecurity.KeycloakConfiguration
import org.keycloak.adapters.springsecurity.config.KeycloakWebSecurityConfigurerAdapter
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.core.authority.mapping.SimpleAuthorityMapper
import org.springframework.security.core.context.SecurityContext
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.core.context.SecurityContextImpl
import org.springframework.security.core.session.SessionRegistryImpl
import org.springframework.security.web.authentication.session.RegisterSessionAuthenticationStrategy
import org.springframework.security.web.authentication.session.SessionAuthenticationStrategy

@Configuration
@KeycloakConfiguration
@EnableWebSecurity
class SecurityConfig : KeycloakWebSecurityConfigurerAdapter() {
    @Bean
    override fun sessionAuthenticationStrategy(): SessionAuthenticationStrategy =
        RegisterSessionAuthenticationStrategy(SessionRegistryImpl())

    override fun configure(http: HttpSecurity) {
        super.configure(http)
        http.csrf().disable()
            .authorizeRequests()
            .antMatchers("/**").fullyAuthenticated()
    }

    override fun configure(auth: AuthenticationManagerBuilder) {
        val provider = keycloakAuthenticationProvider()
        provider.setGrantedAuthoritiesMapper(SimpleAuthorityMapper())
        auth.authenticationProvider(provider)
    }
}