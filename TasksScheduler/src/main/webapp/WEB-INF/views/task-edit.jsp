<div ng-controller="task-edit-controller as tec" ng-show="tec.isTaskSelected()" class="well">
    <div class="row">
        <div class="col-sm-12 form-group">
            <label for="name">Nazwa:</label>
            <input id="name" class="form-control" type="text" ng-model="tec.getTask().name">
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12 form-group">
            <label for="description">Opis:</label>
            <input id="description" class="form-control" type="text" ng-model="tec.getTask().description">
        </div>
    </div>
    <div class="row">
        <div class="col-sm-2 form-group">
            <label for="done">&nbsp;</label>
            <div id="done" ng-click="" class="{{tec.getTask.isDone ? 'glyphicon glyphicon-check' : 'glyphicon glyphicon-unchecked'}}" style="font-size: xx-large;"></div>
        </div>
        <div class="col-sm-5 form-group">
            <label for="date">Data:</label>
            <input id="date" class="form-control" type="text" ng-model="tec.getTask().taskDate">
        </div>
        <div class="col-sm-5 form-group">
            <label for="priority">Priorytet:</label>
            <input id="priority" class="form-control" type="text" ng-model="tec.getTask().priority">
        </div>
    </div>
    <div class="text-center">
        <div class="btn-group">
            <button ng-click="tec.onOk()" type="button" class="btn btn-default">OK</button>
            <button ng-click="tec.onCancel()" type="button" class="btn btn-default">Anuluj</button>
            <button ng-click="tec.onDelete()" type="button" class="btn btn-default">Usun</button>
        </div>
    </div>
</div>