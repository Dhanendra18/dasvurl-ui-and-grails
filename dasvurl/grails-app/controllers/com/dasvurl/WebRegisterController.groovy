package com.dasvurl

import grails.converters.JSON
import grails.plugin.springsecurity.annotation.Secured
import grails.plugins.rest.client.RestBuilder
import grails.transaction.Transactional
import groovy.json.JsonSlurper

import static org.springframework.http.HttpStatus.NOT_FOUND

@Secured("IS_AUTHENTICATED_ANONYMOUSLY")
@Transactional
class WebRegisterController {

    def utilService

    WebRegisterController() {
    }

    def index() {
        respond status: NOT_FOUND
    }

    def show() {
        respond status: NOT_FOUND
    }

    def register() {
        String response1 = params.'g-recaptcha-response'
        String secret = "6LeGwgkUAAAAAH2w2hTx6WPuPBYNaqB-uZDaPXbQ"

        WebRegister webRegister = new WebRegister();
        def resp = new RestBuilder().post("https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${response1}")

        JsonSlurper js = new JsonSlurper();
        def result =  js.parseText(resp.responseEntity.body.toString())
        println "=============3=============="+ result.success

        if (!!result.success) {
            webRegister = new WebRegister(params);
            webRegister.save(flush: true, failOnError: true)
            try {

                utilService.sendRegisterEmail(webRegister)
            } catch (Exception e) {
                e.printStackTrace()
            }
        } else {
            println "77777777777777777777777777777777777777777777"
//            response.setStatus(401);
        }

        render webRegister as JSON;
    }
}
