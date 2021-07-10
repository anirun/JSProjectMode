// define API URL to fetch
dataUrl = "https://data.colorado.gov/resource/pxq3-yhfb.json"

/* create tcapData function to parse API JSON into a JS Object 
that can later be manipulated with a chained .then() */
let tcapData = function(){
    return fetch(dataUrl)
        .then(json => json.json())
}

// grab school-dropdown, clear it, and add default option
let schoolDropdown = document.getElementById("school-dropdown")
schoolDropdown.length = 0

let defaultOption = document.createElement('option')
defaultOption.text = "Choose School and Grade Level"

schoolDropdown.add(defaultOption);
schoolDropdown.selectedIndex = 0

// use tcapData to populate schoolDropdown with school name
tcapData()
    .then(function(data) {
        let option;
        for (let i=0; i< data.length; i++) {
            option = document.createElement('option')
            option.text = data[i].school + " - Grade " + data[i].grade_level
            schoolDropdown.add(option)
        }
    })

// add event listener to SchoolDropdown

// add event listener to SchoolSearch

// function to fill in tcap-scores table with School-name and School-avg

// event listener to remove list or table elements