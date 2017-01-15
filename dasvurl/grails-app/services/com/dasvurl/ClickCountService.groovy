package com.dasvurl

import grails.transaction.Transactional

@Transactional
class ClickCountService {

    def count(String ip) {
        ClickCount clickCount = ClickCount.findByIpAddress(ip)
        if (clickCount) {
            clickCount.count ++
        } else {
            clickCount = new ClickCount(count: 1, ipAddress: ip)
        }
        clickCount.save()
        println "IP saved or updated: " + ip
    }
}
