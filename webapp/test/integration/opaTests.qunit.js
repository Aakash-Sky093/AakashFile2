/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"DB/DialogBox/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});