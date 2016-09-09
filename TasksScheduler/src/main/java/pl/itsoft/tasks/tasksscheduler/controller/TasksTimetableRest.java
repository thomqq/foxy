package pl.itsoft.tasks.tasksscheduler.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import pl.itsoft.tasks.tasksscheduler.model.Task;
import pl.itsoft.tasks.tasksscheduler.service.TaskService;

/**
 *
 * @author pkoziol
 */
@RestController
public class TasksTimetableRest {
    
    @Autowired
    private TaskService taskService;
    
    @RequestMapping(value = "/rest/task" ,method = RequestMethod.GET)
    public List<Task> getTasks() {        
        System.out.println("SLIWKA REST GET");
        return taskService.getTasks();
    }
    
    @RequestMapping(value = "/rest/task/{id}" ,method = RequestMethod.GET)
    public Task getTask(@PathVariable("id") int id) {
        return new Task();
        //return taskService.getTask(id);
    }
    
    @RequestMapping(value = "/task" ,method = RequestMethod.PUT)
    public boolean updateTask(@RequestBody Task task) {
        //return taskService.updateTask(task);
        return true;
    }
    
    @RequestMapping(value = "/task" ,method = RequestMethod.POST)
    public boolean addTask(@RequestBody Task task) {
        //return taskService.addTask(task);
        return true;
    }
    
    @RequestMapping(value = "/task/{id}" ,method = RequestMethod.DELETE)
    public boolean deleteTask(@PathVariable("id") int id) {
        //return taskService.deleteTask(id);
        return true;
    }
    
}
