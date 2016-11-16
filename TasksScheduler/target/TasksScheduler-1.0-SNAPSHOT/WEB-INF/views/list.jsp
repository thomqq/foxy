<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
        
        <link href="<c:url value='/static/styles.css' />"  rel="stylesheet"></link>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
        <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>        
        <script src="<c:url value='/static/app.js' />" ></script>

        <title>Welcome to Spring Web MVC project</title>
    </head>

    <body ng-app="list-module">
        <h3>Lista zadań:</h3>

        <div ng-controller="task-list-controller as tlc" class="container">
            <div class="row">
                <div class="btn-group col-sm-5">
                    <button ng-click="tlc.addTaskClick()" type="button" class="btn btn-default">Add</button>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-5 list-group">
                    <div ng-repeat="date in tlc.days() | orderBy:date" class="row list-group-item">
                        <div class="col-sm-12">
                            <h4>{{date}}</h4>
                                <div ng-repeat="task in tlc.tasks[date] | orderBy:'priority'" class="row list-group-item panel priority{{task.priority}}">
                                    <div>
                                        <div ng-click="tlc.taskIconClick(task)" class="col-xs-2 {{task.isDone ? 'glyphicon glyphicon-check' : 'glyphicon glyphicon-unchecked'}}" style="font-size: xx-large;"></div>
                                        <div class="col-xs-8" style="font-size: x-large; margin-top: 5px;">{{task.name}}</div>
                                        <div ng-click="tlc.editTaskClick(task)" type="button" class="col-xs-2 glyphicon glyphicon-pencil" style="font-size: x-large; margin-top: 5px;"></div>
                                    </div>
                                    <div class="col-xs-12">
                                        {{task.description}}
                                            
                                        <div task-edit ng-show="tlc.isSelected(task)" class="visible-xs"></div>
                                    </div> 
                                </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-7">
                    <div task-edit class="hidden-xs"></div>
                </div>
            </div>
        </div>
    </body>
</html>
