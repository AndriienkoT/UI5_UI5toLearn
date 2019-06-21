sap.ui.define([
  "UI5toLearn/controller/BaseController"
], function (BaseController) {
  "use strict";
  return BaseController.extend("UI5toLearn.controller.Login", {

    onButtonPress: function (oEvent) {
      var sLogin = oEvent.oSource.mAggregations._userNameInput.getValue();
      var sPassword = oEvent.oSource.mAggregations._passwordInput.getValue();
      this.getModel().setProperty("/login", sLogin);
      this.getModel().setProperty("/password", sPassword);

      var oRouter = this.getRouter();
      oRouter.navTo("main");
    }
  });
});
