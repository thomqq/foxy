package pl.itsoft.tasks.tasksscheduler.dao;

import java.util.List;
import pl.itsoft.tasks.tasksscheduler.model.Task;


/**
 *
 * @author tsliwa
 */
public interface TaskDao {
    List<Task> getAll();
}
