package io.craigmiller160.keycloak.practice

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class Runner

fun main(args: Array<String>) {
    runApplication<Runner>(*args)
}