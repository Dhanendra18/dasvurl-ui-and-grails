package com.dasvurl

import grails.plugin.springsecurity.annotation.Secured
import grails.plugins.rest.client.RestBuilder
import grails.rest.RestfulController
import grails.transaction.Transactional
import groovy.json.JsonSlurper

import static org.springframework.http.HttpStatus.NOT_FOUND

@Secured("IS_AUTHENTICATED_ANONYMOUSLY")
@Transactional
class WebRegisterController extends RestfulController {

    static responseFormats = ['json', 'xml']
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
        println "==========1======1========1============="
        println request.properties
        println "---------------------------"
        println response.properties
        println params.'g-recaptcha-response'

        String response1 = params.'g-recaptcha-response'
        String secret = "6LeGwgkUAAAAAH2w2hTx6WPuPBYNaqB-uZDaPXbQ"

        def resp = new RestBuilder().post("https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${response1}")

        JsonSlurper js = new JsonSlurper();
        def result =  js.parseText(resp.responseEntity.body.toString())
        println "=============3=============="+ result.success

        if (!!result.success) {
            WebRegister webRegister = new WebRegister(params);
            webRegister.save(flush: true, failOnError: true)
            utilService.sendRegisterEmail(webRegister)
        } else {
            println "77777777777777777777777777777777777777777777"
//            response.setStatus(401);
        }

        response.setContentType("JSONP")
        respond status: 200
    }
}
