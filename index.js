// define API URL to fetch
dataUrl = "https://data.colorado.gov/resource/pxq3-yhfb.json"

/* create tcapData function to parse API JSON into a JS Object 
that can later be manipulated with a chained .then() */
let tcapData = function(){
    return fetch(dataUrl)
        .then(json => json.json())
}

// grab tcap-table and school-dropdown, clear it, and add default option
let tcapBody = document.querySelector('tbody')
let schoolDropdown = document.getElementById('school-dropdown')
schoolDropdown.length = 0

let defaultOption = document.createElement('option')
defaultOption.text = "Choose School and Grade Level"

schoolDropdown.add(defaultOption)
schoolDropdown.selectedIndex = 0

// use tcapData to populate schoolDropdown with school name
tcapData()
    .then(function(data) {
        let option;
        for (let i=0; i< data.length; i++) {
            if (!data[i].school.includes("RESULTS" || "DISTRICT")) {
            option = document.createElement('option')
            option.text = data[i].school + " - Grade " + data[i].grade_level
            schoolDropdown.add(option)
            }
        }
    })

// add event listener to SchoolDropdown
schoolDropdown.addEventListener('change', e => {
    tcapData()
        .then(data => {
            let selection = e.target.value
            for (let i=0; i<data.length; i++) {
                // the "if" block is structured to ensure we do not display 
                // other grades when a school is selected
                if ((data[i].school + " - Grade " + data[i].grade_level) === selection) {
                    // fill in tcap-scores table with schoolName and proficientCount
                    let schoolName = data[i].school
                    let gradeLevel = data[i].grade_level
                    let proficientCount = data[i]._2012_proficient_count
                    
                    let tr = tcapBody.insertRow()
                    let td1 = tr.insertCell(0)
                    td1.className = "school-name"
                    let td2 = tr.insertCell(1)
                    td2.className = "grade-level"
                    let td3 = tr.insertCell(2)
                    td3.className = "proficient-count"
                    
                    let tdSchool = document.createTextNode(schoolName)
                    let tdGradeLevel = document.createTextNode(gradeLevel)
                    let tdProficient = document.createTextNode(proficientCount)

                    td1.appendChild(tdSchool)
                    td2.appendChild(tdGradeLevel)
                    td3.appendChild(tdProficient)
                } 
            }
        })
})

// add event listener to SchoolSearch



// event listener to remove list or table elements


