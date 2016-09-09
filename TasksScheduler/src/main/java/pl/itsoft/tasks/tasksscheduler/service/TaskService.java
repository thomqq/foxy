package pl.itsoft.tasks.tasksscheduler.service;

import java.util.List;
import pl.itsoft.tasks.tasksscheduler.model.Task;


/**
 *
 * @author pkoziol
 */
public interface TaskService {

    List<Task> getTasks();

    Task getTask(int id);

    boolean updateTask(Task task);

    boolean addTask(Task task);

    boolean deleteTask(int id);

}
