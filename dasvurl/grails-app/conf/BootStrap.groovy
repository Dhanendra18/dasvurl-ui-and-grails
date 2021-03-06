import com.dasvurl.Role
import com.dasvurl.User
import com.dasvurl.UserRole

class BootStrap {

    def init = { servletContext ->
        User user = User.findByUsername('rohit');
        Role role_user = Role.findByAuthority("USER")
        if(!user) {
            user = new User('rohit','password1').save()
        }
        if(!role_user) {
            role_user = new Role('USER').save()
            new UserRole(user , role_user).save(failOnError: true)
        }
    }
    def destroy = {
    }
}
