package com.dasvurl

import grails.plugin.springsecurity.annotation.Secured


/*
Created by IntelliJ IDEA.
User: dhanendra
Date: 31/12/16
Time: 7:12 PM
*/
@Secured('permitAll')
class OverseasController {

    @Secured("IS_AUTHENTICATED_ANONYMOUSLY")
    def index() {}

    def australia_university() {}

    def canada_university() {}

    def france_university() {}

    def more_university() {}

    def newzealand_university() {}

    def singapore_university() {}

    def uk_university() {}

    def usa_university() {}
}
