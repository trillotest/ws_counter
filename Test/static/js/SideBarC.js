/* globals Test */

(function() {

  Test.SideBarC = Trillo.inherits(Trillo.Controller, function(viewSpec) {
    Trillo.Controller.call(this, viewSpec);
  });

  var SideBarC = Test.SideBarC.prototype;
  var Controller = Trillo.Controller.prototype;

  SideBarC.handleAction = function(actionName, selectedObj, $e, targetController) {
    if (actionName === "about") {
      $("#about").modal("show");
      return true;
    }
    return Controller.handleAction.call(this, actionName, selectedObj, $e, targetController);
  };
})();
