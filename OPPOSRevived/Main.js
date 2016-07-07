var OPPOSRevived = {};

(function() {
		OPPOSRevived.modPath = GDT.getRelativePath();

	var ready = function () {
		console.log("OPPOS Revived initialized successfully");
	};

	var error = function () {
		alert("Failed to initialize OPPOS Revived", error);
		console.log("OPPOS Revived failed to initialize");
	};

GDT.loadJs([
	'Code/OPPOSConsole.js',
	'Code/OPPOSTopic.js',
	], ready, error);

})();
