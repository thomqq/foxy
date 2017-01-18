package pl.itsoft.tasks.tasksscheduler.dao;

/**
 *
 * @author tsliwa
 */
public interface UserDao {

    boolean checkUserAndPassword(String user, String password);
    
}
