# JSProjectMode

1. What is the project?
  This application allows users to choose districts in Colorado to compare and examine data related to TCAP scores.
	⁃	As a user, I will be able to choose a district from a District Dropdown Form, so that I can populate the TCAP Score List to view the related TCAP scores.
	⁃	As a user, I will be able to click on a district to remove it from the TCAP Score List.
	⁃	As a user, I will be able to type in and search for a district with a District Search Form, in order to populate the TCAP Score List.

	API endpoint: https://data.colorado.gov/resource/pxq3-yhfb.json
	⁃	I will be fetching an API containing TCAP data collected in 2012 from various districts around Colorado to compare district performance related to factors like Free and Reduced Lunch, Unsatisfactory, Proficient and Advanced Performance.
	  ⁃	Information like this could potentially be used to test relationships between access to services (ie, FaRL, advanced curriculum) and performance on standardized exams.
	  ⁃	Alternatively, in years where there are larger catastrophes (like COVID or the 2013 Boulder Flood), relationships could be tested between catastrophic experiences and performance on standardized testing.
	  ⁃	It would also be interesting to examine the relationship between testing yearly and performance - ie, do students improve as they are tested yearly? Does performance track downward or stay consistent?
	
  How you are meeting the requirements of the project
	⁃	3 Event Listeners: dropdown form, search form, click-to-remove
	  ⁃	dropdown form: I will need an event listener on the District Dropdown Form to listen for changes in chosen districts.
	  ⁃	search form: I will need an event listener on the District Search Form to listen for input.
	  ⁃	click-to-remove: I will need an event listener on each District displayed in the TCAP Score List to listen for a “click” prompting removal.
	⁃	single-page application
	⁃	using a publicly accessible API that does not require a key
	
  Push Goals…
	⁃	make a button on each <li> to click to remove
	⁃	choose fields to display (ie, FaRL, grade level, no score count, etc)
  
2. How do you install this project?

3. If you want to run this project, are there any special considerations? If so, what are they?
