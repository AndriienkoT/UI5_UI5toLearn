sap.ui.define([
  "sap/ui/core/Control",
  "sap/ui/core/Icon",
  "sap/m/Input",
  "sap/m/Text",
  "sap/m/Button"

], function (Control, Icon, Input, Text, Button) {
  "use strict";
  return Control.extend("UI5toLearn.control.LoginControl", {
    metadata : {
      properties : {
        // icon: {type: "string", defaultValue: "sap-icon://family-care"}
      },
      aggregations : {
        _icon : {type: "sap.ui.core.Icon", multiple: false},
        _userNameInput : {type: "sap.m.Input", multiple: false},
        _passwordInput : {type: "sap.m.Input", multiple: false},
        _button : {type: "sap.m.Button", multiple: false}
      },
      events : {
        press : {
        }
      }
    },
    init : function () {
      this.setAggregation("_icon", new Icon({
        id: "iconLoginControl"
      }));

      this.setAggregation("_userNameInput", new Input({
        id: "loginLoginControl",
        value: "{/login}",
        placeholder: "Enter username",
        valueLiveUpdate: true,
        width: "25%"
      }));

      this.setAggregation("_passwordInput", new Input({
        id: "passwordLoginControl",
        value: "{/password}",
        placeholder: "Enter password",
        valueLiveUpdate: true,
        width: "25%"
      }));

      this.setAggregation("_button", new Button({
        id: "signInLoginControl",
        text: "Sign in",
        press: this.onPress.bind(this)
      }));
    },
    onPress: function (oEvent) {
      // var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      // oRouter.navTo("main");
      this.fireEvent("press", {
      });
    },
    renderer : function (oRM, oControl) {
      oRM.write("<div");
      oRM.writeControlData(oControl);
      oRM.write(">");
      oControl.getAggregation("_icon").addStyleClass("iconStyle");
      oControl.getAggregation("_userNameInput").addStyleClass("inputStyle");
      oControl.getAggregation("_passwordInput").addStyleClass("inputStyle");
      oControl.getAggregation("_button").addStyleClass("buttonStyle");
      oRM.write("<div>");
      oRM.renderControl(oControl.getAggregation("_icon"));
      oRM.write("</div>");
      oRM.write("<div>");
      oRM.renderControl(oControl.getAggregation("_userNameInput"));
      oRM.write("</div>");
      oRM.write("<div>");
      oRM.renderControl(oControl.getAggregation("_passwordInput"));
      oRM.write("</div>");
      oRM.write("<div>");
      oRM.renderControl(oControl.getAggregation("_button"));
      oRM.write("</div>");
      oRM.write("</div>");
    }
  });
});
