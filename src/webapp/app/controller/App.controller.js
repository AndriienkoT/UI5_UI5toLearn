sap.ui.define([
  "UI5toLearn/controller/BaseController"
], function (BaseController) {
  "use strict";
  return BaseController.extend("UI5toLearn.controller.App", {

    onInit: function () {
      jQuery.sap.log.setLevel(jQuery.sap.log.Level.INFO);
      var oRouter = this.getRouter();

      oRouter.attachBypassed(function (oEvent) {
        var sHash = oEvent.getParameter("hash");
        jQuery.sap.log.info("Sorry, but the hash '" + sHash + "' is invalid.", "The resource was not found.");
      });
      oRouter.attachRouteMatched(function (oEvent){
        var sRouteName = oEvent.getParameter("name");
        jQuery.sap.log.info("User accessed route " + sRouteName + ", timestamp = " + new Date().getTime());
      });

      this.getEventBus().subscribe("Profile", "GoToSplitApp", this.goToSplitApp, this);
      this.getEventBus().subscribe("Profile", "GoToCharts", this.goToCharts, this);
      this.getEventBus().subscribe("Profile", "GoToKPITiles", this.goToKPITiles, this);
      this.getEventBus().subscribe("Profile", "GoToSelectedItem", this.goToSelectedItem, this);
      this.getEventBus().subscribe("Profile", "GoToSelectedFunction", this.goToSelectedItem, this);
    },

    //press menu button
    onMenuButtonPress : function (oEvent) {
      var viewId = this.getView().getId();
      var mainPage = sap.ui.getCore().byId(viewId + "--main");
      mainPage.setSideExpanded(!mainPage.getSideExpanded());
    },

    sideNavIsSelected: function (oEvent) {
      var oItem = oEvent.getParameter("item");
      var oContext = oItem.getBindingContext("Model");
      var oModelObject = oContext.oModel.getProperty(oContext.sPath);
      var fNavigation = oModelObject.action;
      if (fNavigation == "goToProfile") {
        this.goToProfile();
      } else if (fNavigation == "goToLogout") {
        this.goToLogout();
      }
    },
    goToProfile: function (oEvent) {
      this.getRouter().navTo("profile");
    },
    goToLogout: function (oEvent) {
      // this.getRouter().navTo("logout");
    },
    goToSplitApp: function (oEvent) {
      this.getRouter().navTo("splitApp");
    },
    goToCharts: function (oEvent) {
      this.getRouter().navTo("charts");
    },
    goToKPITiles: function (oEvent) {
      this.getRouter().navTo("kpiTiles");
    },
    goToSelectedItem: function (sChannel, oEvent, data) {
      this.getRouter().navTo(data);
    }
  });
});
