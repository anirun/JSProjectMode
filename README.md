# JSProjectMode

1. What is the project?

This application allows users to choose districts in Colorado to compare and examine data related to TCAP scores.

	⁃	As a user, I will be able to choose a district from a District Dropdown Form, so that I can populate the TCAP Score List to view the related TCAP scores.

	⁃	As a user, I will be able to double click on a district to remove it from the TCAP Score List.

	⁃	As a user, when I mouse over a line in the TCAP table, it will highlight only that line.

API endpoint: https://data.colorado.gov/resource/pxq3-yhfb.json
	
	⁃	I will fetch an API containing TCAP data collected in 2012 from districts around Colorado to compare data like Proficient Count (number of students considered proficient in that grade level).
	
How you are meeting the requirements of the project

	⁃	3 Event Listeners: dropdown form, highlight on mouseover, double click to remove
	  ⁃	dropdown form: I will need an event listener on the District Dropdown Form to listen for changes in chosen districts.
	  ⁃	highlight on mouseover: I will need two event listeners, one for mouseover and one for mouseout.
	  ⁃	double click to remove: I will need an event listener on each District displayed in the TCAP Score List to listen for a “click” prompting removal.
	⁃	single-page application
	⁃	using a publicly accessible API that does not require a key
	
Push Goals…

	⁃	make a button on each <tr> to click to remove
	⁃	choose fields to display (ie, FaRL, grade level, no score count, etc)
  

2. If you want to run this project, are there any special considerations? If so, what are they?
 N/A
