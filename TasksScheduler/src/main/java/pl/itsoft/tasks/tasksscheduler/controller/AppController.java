package pl.itsoft.tasks.tasksscheduler.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import pl.itsoft.tasks.tasksscheduler.service.TaskService;

/**
 *
 * @author tsliwa
 */
@Controller
public class AppController {

    @Autowired
    private TaskService taskService;

    @RequestMapping({"/index", "/list"})
    public String list() {
        taskService.getTasks();
        return "list";
    }

    
    @RequestMapping("/task-edit")
    public String taskEdit() {
        return "task-edit";
    }

    @RequestMapping(value = "/logout", method = RequestMethod.GET)
    public String logoutPage(HttpServletRequest request, HttpServletResponse response) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null) {
            new SecurityContextLogoutHandler().logout(request, response, auth);
        }
        return "redirect:/login?logout";
    }
}
