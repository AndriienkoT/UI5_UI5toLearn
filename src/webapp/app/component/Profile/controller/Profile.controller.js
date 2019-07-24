sap.ui.define([
  "UI5toLearn/controller/BaseController",
  'sap/ui/model/Filter',
  'sap/m/MessageToast'
], function (BaseController, Filter, MessageToast) {
  "use strict";
  return BaseController.extend("UI5toLearn.component.Profile.controller.Profile", {

    goToNotes: function (oEvent) {
      this.getEventBus().publish("Profile", "GoToNotes");
    },

    goToAnswers: function (oEvent) {
      this.getEventBus().publish("Profile", "GoToAnswers");
    },

    onItemSelected: function (oEvent) {
      var sId = oEvent.getSource().sId;
      var sElementId = sId.substr(sId.length - 1);
      var sViewId = this.getView().byId("profileList").getBinding("items").oList[sElementId].viewId;
      if (sViewId != undefined) {
        this.getEventBus().publish("Profile", "GoToSelectedItem", sViewId);
      }
    },

    //fragment
    openFragment: function (oEvent) {
      if(this.oFragment == undefined) {
        this.oFragment = sap.ui.xmlfragment("UI5toLearn.component.Profile.view.fragment.Like", this);
        this.oFragment.setModel(this.getView().oPropagatedProperties.oModels.Model);
        this.oFragment.open();
      } else {
        this.oFragment.open();
      }
    },
    handleSearch: function(oEvent) {
      var sValue = oEvent.getParameter("value");
      var oFilter = new Filter("name", sap.ui.model.FilterOperator.Contains, sValue);
      var oBinding = oEvent.getSource().getBinding("items");
      oBinding.filter([oFilter]);
    },

    handleClose: function(oEvent) {
      var aContexts = oEvent.getParameter("selectedContexts");
      if (aContexts && aContexts.length) {
        MessageToast.show("You have chosen " + aContexts.map(function(oContext) { return oContext.getObject().name; }).join(", "));
      }
      oEvent.getSource().getBinding("items").filter([]);
    }
  });
});
