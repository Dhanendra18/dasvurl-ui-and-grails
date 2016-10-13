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
        println params
        WebRegister webRegister = new WebRegister(params);
        webRegister.save(flush: true, failOnError: true)
        respond webRegister
    }
}
