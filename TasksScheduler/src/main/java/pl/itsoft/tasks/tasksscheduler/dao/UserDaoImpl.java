package pl.itsoft.tasks.tasksscheduler.dao;

import org.springframework.stereotype.Component;

/**
 *
 * @author tsliwa
 */
@Component
public class UserDaoImpl implements UserDao{

    @Override
    public boolean checkUserAndPassword(String user, String password) {
        if(user.equals("admin") && password.equals("adminadmin")){
            return true;
        }
        return false;
    }
    
}
