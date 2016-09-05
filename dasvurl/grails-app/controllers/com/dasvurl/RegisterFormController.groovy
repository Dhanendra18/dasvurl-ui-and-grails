package com.dasvurl

import grails.plugin.springsecurity.annotation.Secured

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

@Secured(value=["permitAll"])
@Transactional(readOnly = true)
class RegisterFormController {

    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond RegisterForm.list(params), model:[registerFormInstanceCount: RegisterForm.count()]
    }

    def show(RegisterForm registerFormInstance) {
        respond registerFormInstance
    }

    def create() {
        respond new RegisterForm(params)
    }

    @Transactional
    def save(RegisterForm registerFormInstance) {
        if (registerFormInstance == null) {
            notFound()
            return
        }

        if (registerFormInstance.hasErrors()) {
            respond registerFormInstance.errors, view:'create'
            return
        }

        registerFormInstance.save flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.created.message', args: [message(code: 'registerForm.label', default: 'RegisterForm'), registerFormInstance.id])
                redirect registerFormInstance
            }
            '*' { respond registerFormInstance, [status: CREATED] }
        }
    }

    @Secured(value=["hasRole('USER')"])
    def edit(RegisterForm registerFormInstance) {
        respond registerFormInstance
    }

    @Secured(value=["hasRole('USER')"])
    @Transactional
    def update(RegisterForm registerFormInstance) {
        if (registerFormInstance == null) {
            notFound()
            return
        }

        if (registerFormInstance.hasErrors()) {
            respond registerFormInstance.errors, view:'edit'
            return
        }

        registerFormInstance.save flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.updated.message', args: [message(code: 'RegisterForm.label', default: 'RegisterForm'), registerFormInstance.id])
                redirect registerFormInstance
            }
            '*'{ respond registerFormInstance, [status: OK] }
        }
    }

    @Secured(value=["hasRole('USER')"])
    @Transactional
    def delete(RegisterForm registerFormInstance) {

        if (registerFormInstance == null) {
            notFound()
            return
        }

        registerFormInstance.delete flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.deleted.message', args: [message(code: 'RegisterForm.label', default: 'RegisterForm'), registerFormInstance.id])
                redirect action:"index", method:"GET"
            }
            '*'{ render status: NO_CONTENT }
        }
    }

    protected void notFound() {
        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.not.found.message', args: [message(code: 'registerForm.label', default: 'RegisterForm'), params.id])
                redirect action: "index", method: "GET"
            }
            '*'{ render status: NOT_FOUND }
        }
    }
}
