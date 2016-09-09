package pl.itsoft.tasks.tasksscheduler.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 *
 * @author tsliwa
 */
@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication().withUser("tsliwa").password("tsliwa1").roles("USER");
        auth.inMemoryAuthentication().withUser("admin").password("adminadmin").roles("ADMIN");
        auth.inMemoryAuthentication().withUser("user").password("user1").roles("DBA");
    }
}