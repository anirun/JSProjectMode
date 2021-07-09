// define API URL to fetch
dataUrl = "https://data.colorado.gov/resource/pxq3-yhfb.json"

/* create fetchData function to parse API JSON into a JS Object 
that can later be manipulated with a chained .then() */
let fetchData = function(){
    return fetch(dataUrl)
        .then(json => json.json())
}

// use tcapData to populate districtDropdown with district-name

// add event listener to districtDropdown

// add event listener to districtSearch

// function to fill in tcap-scores table with district-name and district-avg

// event listener to remove list or table elements