package com.dasvurl

import grails.plugin.springsecurity.annotation.Secured

@Secured(value=["hasRole('USER')"])
class WebRegisterViewController {

    def index(Integer max){
        params.max = Math.min(max ?: 10, 100)
        respond WebRegister.list(params), model:[WebRegisterInstanceCount: RegisterForm.count()]
    }

    def show(WebRegister WebRegisterInstance) {
        respond WebRegisterInstance
    }
}
