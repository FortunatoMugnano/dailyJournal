/* 
Responsible for displaying data from database within input fields
*/

import API from "./data.js"

const editForm = (entryId) => {
    let hiddenEntryId = document.querySelector("#entryId")
    let editEntryConcept = document.querySelector("#entryConcept")
    let editJournal = document.querySelector("#entryJournal")
    let editDate = document.querySelector("#entryDate")
    let editMood = document.querySelector("#modMood")

    API.getSingle(entryId)
    .then(response => {
        hiddenEntryId.value = entryId
        editEntryConcept.value = response.conceptsCovered
        editJournal.value = response.entry
        editDate.value = response.dateOfEntry
        editMood.value = response.mood
    })
}

export default editForm