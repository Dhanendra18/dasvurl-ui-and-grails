import com.dasvurl.Role
import com.dasvurl.User
import com.dasvurl.UserRole

class BootStrap {

    def init = { servletContext ->
        User user  = new User('rohit','password1').save()
        Role role_user = new Role('USER').save()
        new UserRole(user , role_user).save(failOnError: true)
    }
    def destroy = {
    }
}
