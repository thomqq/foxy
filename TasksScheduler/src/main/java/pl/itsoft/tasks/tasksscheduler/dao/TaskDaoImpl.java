package pl.itsoft.tasks.tasksscheduler.dao;

import java.util.List;
import org.hibernate.Criteria;
import org.springframework.stereotype.Repository;
import pl.itsoft.tasks.tasksscheduler.model.Task;

/**
 *
 * @author tsliwa
 */
@Repository("taskDao")
public class TaskDaoImpl extends AbstractDao implements TaskDao{

    @Override
    public List<Task> getAll() {
        Criteria criteria = getSession().createCriteria(Task.class);        
	return (List<Task>) criteria.list();
    }
    
}
