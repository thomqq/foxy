package pl.itsoft.tasks.tasksscheduler.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.itsoft.tasks.tasksscheduler.dao.UserDao;

/**
 *
 * @author tsliwa
 */
@Service
public class UserServiceImpl implements UserService{

    @Autowired
    UserDao userDao;
    
    @Override
    public boolean checkUser(String user, String password) {
        return userDao.checkUserAndPassword(user, password);
    }
    
}
