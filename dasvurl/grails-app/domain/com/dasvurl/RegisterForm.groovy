package com.dasvurl

class RegisterForm {

    String toldName
    String lastName
    Date dateOfBirth
    String gender
    String email
    String address
    String correspondingAddress
    String mobileNo
    String landlineNo
    String qualification
    String currentEducationStatus
    String universityName
    String schoolName
    String age
    Boolean passport
    String interestedInStudying
    String countryPreference

    static constraints = {
        mobileNo maxSize: 12
        age maxSize: 3
        gender inList: ["Male","Female","Other"]
    }
}
