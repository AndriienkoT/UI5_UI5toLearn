sap.ui.define([
  "sap/m/MessageToast",
  "UI5toLearn/controller/BaseController"
], function (MessageToast, BaseController) {
  "use strict";
  return BaseController.extend("UI5toLearn.component.Profile.controller.SearchForFriends", {

    onButtonPress: function (oEvent) {
      var sMemeberName = oEvent.getSource().getParent().getAggregation("cells")[1].getAggregation("items")[0].getAggregation("items")[0].getProperty("text");
      MessageToast.show(sMemeberName + " is added to friends");
    }
  });
});
