package com.dasvurl

class WebRegister {

    String fullName
    String email
    String phoneNumber
    String gender
    String country1
    String country2
    String country3
    String course
    String intake

    Date dateCreated
    Date lastModified

    static constraints = {
        fullName(nullable: false, blank: false)
        email(nullable: false, blank: false)
        phoneNumber(nullable: false, blank: false)
        gender(nullable: false, blank: false)
        country1(nullable: false, blank: false)
        country2(nullable: false, blank: false)
        country3(nullable: false, blank: false)
        course(nullable: false, blank: false)
        intake(nullable: false, blank: false)
        dateCreated nullable: true, blank: true
        lastModified nullable: true, blank: true
    }
}
