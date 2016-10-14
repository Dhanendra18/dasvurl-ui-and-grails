package com.dasvurl
import grails.plugin.springsecurity.annotation.Secured
import grails.rest.RestfulController
import grails.transaction.Transactional

import static org.springframework.http.HttpStatus.NOT_FOUND

@Secured("IS_AUTHENTICATED_ANONYMOUSLY")
@Transactional
class WebRegisterController extends RestfulController {

    static responseFormats = ['json', 'xml']

    WebRegisterController() {
    }

    def index() {
        respond status: NOT_FOUND
    }

    def show() {
        respond status: NOT_FOUND
    }

    def register() {
        println request.localName
        println "request.localName"
        println request.remotePort
        println "request.remotePort"
        println request.remoteUser
        println "request.remoteUser"
        println request.localAddr
        println "request.localAddr"
        println request.remoteAddr
        println "request.remoteAddr"
//        println "User agent: " + request.getHeader("User-Agent")
        println request.properties

        WebRegister webRegister = new WebRegister(params);
        webRegister.save(flush: true, failOnError: true)

    }
}
