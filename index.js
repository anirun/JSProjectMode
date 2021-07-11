// define API URL to fetch
dataUrl = "https://data.colorado.gov/resource/pxq3-yhfb.json"

/* create fetchTcapData function to parse API JSON into a JS Object 
that can later be manipulated with a chained .then() */
let fetchTcapData = function(){
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

// use fetchTcapData to populate schoolDropdown with school names
fetchTcapData()
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
    fetchTcapData()
        .then(data => {
            let selection = e.target.value
            for (let i=0; i<data.length; i++) {
                // the "if" block is structured to ensure we do not display other grades when a school is selected
                if ((data[i].school + " - Grade " + data[i].grade_level) === selection) {
                    // fill in tcap-scores table with schoolName, grade and proficientCount
                    let schoolName = data[i].school
                    let gradeLevel = data[i].grade_level
                    let proficientCount = data[i]._2012_proficient_count
                    
                    let tr = tcapBody.insertRow()
                    tr.className = "unselected"
                    let td1 = tr.insertCell(0)
                    td1.id = "school-name"
                    let td2 = tr.insertCell(1)
                    td2.id = "grade-level"
                    let td3 = tr.insertCell(2)
                    td3.id = "proficient-count"
                    
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

// highlight school only on mouseover
function highlightSchool(e) {
    if ( e.target.parentNode.className === "unselected" ) {
        e.target.parentNode.className = "selected"
        e.target.parentNode.style.color = "pink"
    }
}

function unhighlightSchool(e) {
    if ( e.target.parentNode.className === "selected" ) {
        e.target.parentNode.className = "unselected"
        e.target.parentNode.style.color = "white"
    }
}

tcapBody.addEventListener('mouseover', highlightSchool)
tcapBody.addEventListener('mouseout', unhighlightSchool)

// remove table rows with double click
function removeSchool(event) {
    let tr = event.target.parentNode; 
    tr.parentNode.removeChild(tr);
}

tcapBody.addEventListener('dblclick', removeSchool)