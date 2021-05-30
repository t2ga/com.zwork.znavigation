sap.ui.define([
    "com/zwork/znavigation/controller/BaseController"
], function (BaseController) {
    "use strict";

    return BaseController.extend("com.zwork.znavigation.controller.Home", {
        onDisplayNotFound: function () {
            //display the "notFound" target without changing the hash code in URL
            /* i Note:
             In the example code we get a reference to the sap.m.routing.Targets object 
             by calling getTargets() on this.getRouter() from the base controller. 
             However, you could also get a reference to the sap.m.routing.Targets object 
             by calling this.getOwnerComponent().getRouter().getTargets() 
             or this.getOwnerComponent().getTargets().
            */
            this.getRouter().getTargets().display("notFound", {
                /*
                    contains the name of the current target; 
                    the one from which we navigate to the notFound target. 
                    We decide to choose the key fromTarget but since it is a custom configuration 
                    object any other key would be fine as well.
                 */
                fromTarget: "home" 

            }); //'this' is a controller
        },

        onNavToEmployees: function()  {
            this.getRouter().navTo("employeeList");
        }
    });
});