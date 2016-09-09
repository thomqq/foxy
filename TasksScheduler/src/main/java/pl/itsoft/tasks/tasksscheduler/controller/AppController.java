package pl.itsoft.tasks.tasksscheduler.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import pl.itsoft.tasks.tasksscheduler.service.TaskService;

/**
 *
 * @author tsliwa
 */
@Controller
public class AppController {
            
    @Autowired
    private TaskService taskService;
        
    @RequestMapping({"/index","/list"})
    public String list(){
        taskService.getTasks();
        return "list";
    }
    
    @RequestMapping("/task-edit")
    public String taskEdit(){
        return "task-edit";
    }
}
