package dasvurl

class ParamsFilters {

    def clickCountService

    def filters = {
        all(controller:'*', action:'*') {
            before = {
                def dataLogger = "RemoteAddr="+request.getRemoteAddr() + " X-Forwarded-For ="+ request.getHeader("X-Forwarded-For") + " Client-IP = " + request.getHeader("Client-IP") + "Params = " +params
                println dataLogger
                clickCountService.count(request.getHeader("X-Forwarded-For"));
            }
            after = { Map model ->

            }
            afterView = { Exception e ->

            }
        }
    }
}
