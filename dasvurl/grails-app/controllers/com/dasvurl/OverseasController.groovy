package com.dasvurl

import grails.plugin.springsecurity.annotation.Secured


/*
Created by IntelliJ IDEA.
User: dhanendra
Date: 31/12/16
Time: 7:12 PM
*/

class OverseasController {

    @Secured("IS_AUTHENTICATED_ANONYMOUSLY")
    def index() {}
}
