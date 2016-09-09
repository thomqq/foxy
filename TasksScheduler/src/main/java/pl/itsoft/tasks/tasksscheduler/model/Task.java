package pl.itsoft.tasks.tasksscheduler.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author pkoziol
 */
@Entity
@Table(name = "modtr.task")
public class Task {

    
    @Id
    private int id;
    private String name;
    private String description;
    private String taskDate;
    private boolean isDone;
    private int priority;

    public Task() {
    }

    public Task(int id, String name, String taskDate, boolean isDone, int priority) {
        this.id = id;
        this.name = name;
        this.description = "test description";
        this.taskDate = taskDate;
        this.isDone = isDone;
        this.priority = priority;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTaskDate() {
        return taskDate;
    }

    public void setTaskDate(String taskDate) {
        this.taskDate = taskDate;
    }

    public boolean isIsDone() {
        return isDone;
    }

    public void setIsDone(boolean isDone) {
        this.isDone = isDone;
    }

    public int getPriority() {
        return priority;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }
}
