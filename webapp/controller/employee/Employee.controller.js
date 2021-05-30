sap.ui.define([
	"com/zwork/znavigation/controller/BaseController"
], function (BaseController) {
	"use strict";
	return BaseController.extend("com.zwork.znavigation.controller.employee.Employee", {
		onInit: function () {
			var oRouter = this.getRouter();
			oRouter.getRoute("employee").attachMatched(this._onRouteMatched, this);
			// Hint: we don't want to do it this way
			/*  Note
                Instead of calling attachMatched(…) on a route we could also call 
                attachRouteMatched(…) directly on the router. 
                However, the event for the latter is fired for every matched event of any route 
                in the whole app. We don’t use the latter because we would have to implement 
                an additional check for making sure that current route is the route that has been matched. 
                We want to avoid this extra overhead and register on the route instead.
            /*
			oRouter.attachRouteMatched(function (oEvent){
				var sRouteName, oArgs, oView;
				sRouteName = oEvent.getParameter("name");
				if (sRouteName === "employee"){
					this._onRouteMatched(oEvent);
				}
			}, this);
			*/
		},
		_onRouteMatched : function (oEvent) {
			var oArgs, oView;
			oArgs = oEvent.getParameter("arguments");
			oView = this.getView();

			oView.bindElement({
				path : "/Employees(" + oArgs.employeeId + ")",
				events : {
					change: this._onBindingChange.bind(this),
					dataRequested: function (oEvent) {
						oView.setBusy(true);
					},
					dataReceived: function (oEvent) {
						oView.setBusy(false);
					}
				}
			});
		},
		_onBindingChange : function (oEvent) {
			// No data for the binding
			if (!this.getView().getBindingContext()) {
				this.getRouter().getTargets().display("notFound");
			}
		},
        onShowResume: function (oEvent) {
            var oCtx = this.getView().getElementBinding().getBoundContext();

            this.getRoute().navTo("employeeResume", {
                employeeId: oCtx.getProperty("EmployeeID")
            });
        }
	});
});