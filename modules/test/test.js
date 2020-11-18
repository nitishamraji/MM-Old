Module.register("test",{
	// Default module config.
	defaults: {
		text: "Hello World!"
	},

	start: function() {
    Log.info('Starting module: ' + this.name);
    this.show = false;
    this.domCreated = false;
  },

	getStyles: function() {
    return [
      "test.css"
    ]
  },


  notificationReceived: function(notification, payload, sender) {
		if (sender) {
			Log.log(this.name + " received a module notification: " + notification + " from sender: " + sender.name);
			if (notification === "SHOW") {
				Log.log(this.name + " received a module tesing notification: " + notification + " from sender: " + sender.name);
				if (!this.domCreated)
						{
							this.show = true;
							this.domCreated = true;
							self.updateDom(0);
						}
			}
		} else { 
			if (notification === "DOM_OBJECTS_CREATED") {
				this.sendSocketNotification("REQUEST_DEFAULT_SETTINGS");
			}
		}
	},

  socketNotificationReceived: function(notification, payload) {

  	// if (notification === "DOM_OBJECTS_CREATED") {
  	// 	this.hide(1000);
  	// }

  	if (notification === "SHOW" || notification === "HIDE" || notification === "SHOW_ALERT") {

  		Log.log(this.name + " received a module test notification: " + notification + " from sender: " + sender.name); 

  		if(notification === "SHOW" || notification === "SHOW_ALERT")
  		{
  			if (!this.domCreated)
						{
							this.show = true;
							this.domCreated = true;
							self.updateDom(0);
						}

  		}
  	// 		module.hide(1000, {lockString: self.identifier});
			// var options = {lockString: this.identifier};
			// var modules = MM.getModules();
			// modules.enumerate(function(module) {
			// 	if (module.identifier === payload.module) {
			// 		if(notification === "SHOW" || notification === "SHOW_ALERT")
			// 		{
			// 			if (!this.domCreated)
			// 			{
			// 				this.show = true;
			// 				this.domCreated = ture;
			// 				self.updateDom();
			// 			}else {
			// 				module.show(1000, {lockString: self.identifier});
			// 			}
			// 		}else if(notification === "HIDE" || notification === "HIDE_ALERT"){
			// 			module.hide(1000, {lockString: self.identifier});

			// 		}

			// 	}
			// });
		}

  },

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		
		//if (this.show){
		var oImg = document.createElement("img");
		// oImg.setAttribute('src', 'https://lh3.googleusercontent.com/EaEK_u6E-fgUNA7uIq1Uft9oWpE88xAA-t4Bj-xb3xX2bxReOyp8x7QC6_yOasPF_M3GMWvTqXvlRwB7HrOAaO43GPoFqK1gvkKWjqHAdeCaSx6JpwRssmS2JmGSNAKA_MhSOdtJ3tNSokhQJQ2RPFRElMELO5a3PWnUadwHobMBF0oqpJzE4FeQVkosyjmBBTXMKHB3sBWPiQyFQpF39VUV47Qsb5sFg707n7BdLv7GlmK19s1T-f-BCe9tH2U7T6K8giAZXbwN1-8bxG-hTsUVcQmKZ_1OUxHVakQEwenKnKsEJLHqnPk1uZXMdjD_O5PLxFy-qQlSz5GXJmSCUgXtdqzKsZ2sJY535akNoq4TCFpSqLo8QX9P-pv3_QvLQ3ibpkhnFkLc9yS_jQ2aayNzIyYd4RneDIJ-MHHN2AB-DMJqdp-lK27FPpiTfLkpTjF9rsvxU4rfy9tBvd8teXYqlm_o5fl5_SlnpgbeNfCvA1A7FCMZCF4PD-CP-1AN08jGmUDs06hslS-0LHkLBmxHgG7TpDhNm0EeIGyhrZr2sSOPx7jbm9pQ7ZG4tP0NXvfeUXy4mF_NLeZIKXZjCA9Y49DSv2g5SWLPQNunWLU=w353-h626-no');
		oImg.setAttribute('src', 'modules/test/nit_kav.jpg');
		oImg.setAttribute('height', '1920');
		oImg.setAttribute('width', '1080');

		wrapper.appendChild(oImg);
	//}

		return wrapper;
		//return wrapper;
	}
});
