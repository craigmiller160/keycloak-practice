package io.craigmiller160.keycloak.practice.controller

import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestHeader
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/hello")
class HelloController {
    @GetMapping
    fun sayHello(@RequestHeader(value = "Authorization", required = false) authHeader: String?): String {
        println("AUTH HEADER: $authHeader")
        return "Hello World"
    }

    @PostMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun send(): String = ""
}