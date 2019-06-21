sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/routing/History"
], function (Controller, History) {
  "use strict";
  return Controller.extend("UI5toLearn.controller.BaseController", {
    getRouter : function (oEvent) {
      return sap.ui.core.UIComponent.getRouterFor(this);
    },

    onNavBack: function (oEvent) {
      var oHistory, sPreviousHash;
      oHistory = History.getInstance();
      sPreviousHash = oHistory.getPreviousHash();
      if (sPreviousHash !== undefined) {
        window.history.go(-1);
      } else {
        this.getRouter().navTo("Login", {}, true /*no history*/);
      }
    },

    getModel: function (oEvent) {
      return this.getOwnerComponent().getModel("Model");
    }
  });
});
