package pl.itsoft.tasks.tasksscheduler.starter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import pl.itsoft.tasks.tasksscheduler.configuration.AppConfig;

/**
 *
 * @author tsliwa
 */
@SpringBootApplication
public class BootStart {
    
    public static void main(String[] args) {
        SpringApplication.run(AppConfig.class, args);
    }
}
