sap.ui.define([
  "UI5toLearn/controller/BaseController"
], function (BaseController) {
  "use strict";
  return BaseController.extend("UI5toLearn.component.Profile.controller.DragAndDrop", {
    onBeforeRendering: function () {
      var oButton = this.getView().byId("movableButton");
      oButton.addEventDelegate({
        onAfterRendering: function (oBtn) {
          $(oBtn.srcControl.getDomRef()).draggable({
            cancel:false
          });
        }
      });
    }
  });
});
