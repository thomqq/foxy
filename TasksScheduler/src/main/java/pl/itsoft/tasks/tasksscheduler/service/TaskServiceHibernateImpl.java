package pl.itsoft.tasks.tasksscheduler.service;

import java.util.ArrayList;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.itsoft.tasks.tasksscheduler.dao.TaskDao;
import pl.itsoft.tasks.tasksscheduler.model.Task;

/**
 *
 * @author tsliwa
 */
@Service("taskService")
//@Transactional
public class TaskServiceHibernateImpl implements TaskService{
   
    //@Autowired
    //private TaskDao dao;
    
    private static List<Task> initStartTasks() {
        List<Task> result = new ArrayList<>();
        result.add(new Task(10, "task 10", "2016-05-09", false, 1));
        result.add(new Task(11, "task 11", "2016-05-09", true, 2));
        result.add(new Task(12, "task 12", "2016-05-09", false, 3));
        result.add(new Task(20, "task 20", "2016-05-05", false, 5));
        result.add(new Task(21, "task 21", "2016-05-05", false, 4));
        result.add(new Task(30, "task xyz", "2016-05-11", true, 1));
        return result;
    }
    
    @Override
    public List<Task> getTasks() {  
        //System.out.println("SLIWKA GET all service " + dao.getAll().size());
        
        return initStartTasks();
        //return dao.getAll();
    }

    @Override
    public Task getTask(int id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public boolean updateTask(Task task) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public boolean addTask(Task task) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public boolean deleteTask(int id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
