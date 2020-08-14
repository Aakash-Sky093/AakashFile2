sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment"
], function (Controller,MessageToast,Fragment) {
	"use strict";

	return Controller.extend("DB.DialogBox.controller.App", {
		onInit: function () {

		},
		onOpenDialog : function () {
			// create dialog lazily
			if (!this.Fragment) {
		    var dia = this.createId("x");
			this.Fragment = new sap.ui.xmlfragment(dia,"DB.DialogBox.view.Dialog",this);
			this.getView().addDependent(this.Fragment);
			}
		 this.Fragment.open();	
		},
		
		onSubmit : function(){
			      debugger;
			      
			      this.Fragment.close();
			       var dia = this.createId("x");
			       var user = Fragment.byId(dia, "input01").getValue();
			       MessageToast.show(user);
			      
			    // var view = this.getView();
       //         var user = view.byId("input01").getValue();
       //         MessageToast.show(user);
			      
			      
		}
		
	
	});
});