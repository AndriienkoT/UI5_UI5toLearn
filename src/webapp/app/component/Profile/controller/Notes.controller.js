sap.ui.define([
  "UI5toLearn/controller/BaseController"
], function (BaseController) {
  "use strict";
  return BaseController.extend("UI5toLearn.component.Profile.controller.Notes", {
    onBeforeRendering: function () {
      var oButton = this.getView().byId("notesButton");
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
