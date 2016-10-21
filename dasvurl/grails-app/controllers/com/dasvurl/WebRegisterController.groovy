package com.dasvurl
import grails.plugin.springsecurity.annotation.Secured
import grails.plugins.rest.client.RestBuilder
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
        println params.'g-recaptcha-response'

        String response = params.'g-recaptcha-response'
        String secret = "6LeGwgkUAAAAAH2w2hTx6WPuPBYNaqB-uZDaPXbQ"

        def resp = new RestBuilder().post("https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${response}")

        println resp

        WebRegister webRegister = new WebRegister(params);
        webRegister.save(flush: true, failOnError: true)
    }
}
