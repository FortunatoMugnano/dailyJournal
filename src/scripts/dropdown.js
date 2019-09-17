import API from "./data.js"

const dropdown = {
    makeMoodDropdown: () => {
        API.getMood().then(allMood => {
            const moodDropdown = document.querySelector("#mood-input")
            allMood.forEach(mood => {
                moodDropdown.innerHTML += `<option id="mood-${mood.id}">${mood.name}</option>`
                
            });
        })
    },
    makeModifyMoodDropdown: () => {
        API.getMood().then(allMood => {
            const editMoodDropdown = document.querySelector("#modMood")
            allMood.forEach(mood => {
                editMoodDropdown.innerHTML += `<option id="mood-${mood.id}">${mood.name}</option>`
            })
        })
    }
}

export  default dropdown