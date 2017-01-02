package com.dasvurl

import grails.transaction.Transactional

@Transactional
class UtilService {

    def groovyPageRenderer
    def mailService

    def serviceMethod() {

    }

    def sendRegisterEmail(WebRegister webRegister) {
        println "new regestration via web " + webRegister.properties
        String content = "New registeration - ${webRegister.properties} "

        sendMail {
            async true
            to "dhanendrapratapsingh514@gmail.com"
            subject "New User sign up"
            body content
//            html groovyPageRenderer.render(template:"webRegisterView/registerEmail",modal: [webRegister])
        }
        /*body: "Hi, <br> Here is the new user registeration details <br> Name: ${webRegister.fullName} <br> Email: ${webRegister.email} <br> Phone Number"*/
    }
}
