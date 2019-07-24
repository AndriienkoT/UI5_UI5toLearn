sap.ui.define([
  "sap/ui/core/UIComponent"
], function (UIComponent) {
  "use strict";

  var oComponent = UIComponent.extend("UI5toLearn.component.Profile.Component", {
    metadata : {
      manifest : "json"
    },
    init: function () {
      // call the base component's init function
      UIComponent.prototype.init.apply(this, arguments);

      // this.getRouter().initialize();
    }
  });
  return oComponent;
});
