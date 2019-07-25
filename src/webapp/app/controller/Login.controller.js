sap.ui.define([
  "UI5toLearn/controller/BaseController"
], function (BaseController) {
  "use strict";
  return BaseController.extend("UI5toLearn.controller.Login", {
    onInit: function () {
      var sLoc = sap.ui.getCore().getConfiguration().getLanguage();
      var i18nName = "UI5toLearn.i18n.i18n";
      if (sLoc === "de_DE") {
        i18nName = i18nName + "_de";
      }

      var oi18nModel = new sap.ui.model.resource.ResourceModel({
        bundleName:i18nName
      });
      this.getView().setModel(oi18nModel, "i18n");
    },

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
