/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	port: 8080,
        address: "0.0.0.0",
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "192.168.1.17", "192.168.1.149", "192.168.1.172", "192.168.1.31"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	//units: "metric",
        units: "imperial",
        scale: 'f',
        debug: true,

	modules: [
		{
			module: "alert",
		},
                /**
		{
			//module: "updatenotification",
			position: "top_bar"
		},
                **/
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third",
                        config: {
                                //remoteFile: "compliments.json",
                        }
		},
                /**
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Chicago",
				locationID: "4887398",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "979035e38dd95d5467ab3a2ebd5b2d01"
			}
		},
                              
               	{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Chicago",
				locationID: "4887398",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "979035e38dd95d5467ab3a2ebd5b2d01"
			}
		},
                **/
                {  
                       	module: "MMM-Weather",
  			position: "top_right",
  			configDeepMerge: true,
  			config: {
    					updateInterval: "15m", // 15 minutes
    					api: {
      						key: "979035e38dd95d5467ab3a2ebd5b2d01",
      						latitude: 50.104321,
      						longitude: 4.759645,
    					},
  				}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,				showPublishDate: true
			}
		},
                /**
		{
                       module: 'MMM-MirrorMirrorOnTheWall',
                       position: "middle_center",
                       config: {}
                },
		**/
		/**
		{
		      module: 'test',
		      position: "top_bar",
		      config: { text: 'testing' }
                },
		**/
                /**
                {
                      module: 'MMM-Remote-Control',
                },
                
                {
    		      disabled: false,
		      module: 'MMM-NOAA',
    		      position: 'top_right',
    		      config: {

			apiKey: "6985eab724cbbe8e",    // https://www.wunderground.com/weather/api  select the middle plan... 
			useAir: false,             // set to false if you do not want to use Air Quality Index
			airKey: "B39ERozPKNJkSZpYB",    // IF you want Air Quality Index
			pws: "KILELKGR6",         // go here to find your pws: https://www.wunderground.com/wundermap
			showClock: false,           // Hides or shows clock
			dformat: true,             // for M/D/YYYY format, false for D/M/YYYY
			format: "12",              // 12 or 24 hour format.. will default to 12 hour if none selected.
			ampm: true,                // to show AM and PM on Sunrise/Sunset time
			showGreet: false,          // deafult is false - to show greeting under clock and above date
			name: "",                  // Your name
			showWind: false,
			showDate: false,
			showForecast: true,         //show bottom 3 day forecast
			flash: true                 //Today in forecast flashes halo
		     }
		},
                **/
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
