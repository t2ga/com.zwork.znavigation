sap.ui.define([
	"com/zwork/znavigation/controller/BaseController"
], function (BaseController) {
	"use strict";
	return BaseController.extend("com.zwork.znavigation.controller.employee.EmployeeList", {
        onListItemPressed: function (oEvent) {
            var oItem, oCtx;
            oItem = oEvent.getSource();
            oCtx = oItem.getBindingContext();
            this.getRouter().navTo("employee", {
                employeeId: oCtx.getProperty("EmployeeID") //Id from data model
            });
        }
	});
});