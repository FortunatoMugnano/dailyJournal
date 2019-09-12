import API from "./data.js";
import journalEntries from "./entriesDOM.js";
import createJournalEntries from "./factoryEntries.js";


/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/


API.getJournalEntries().then(data => {
    journalEntries.addToJournal(data)
})


document.querySelector("#button").addEventListener("click", () => {
    let journalDate = document.querySelector("#journalDate").value
    if (journalDate === null || journalDate === "") {
        alert("Please fill the form")
        return
    }
    else if (journalDate.includes("$") || journalDate.includes("@") || journalDate.includes("#") || journalDate.includes("%") || journalDate.includes("^") || journalDate.includes("&") || journalDate.includes("*") || journalDate.includes("|") || journalDate.includes("~") || journalDate.includes("`")) {
        alert("No special characters allowed")
        return
    }
    let concept = document.querySelector("#concept").value
    if (concept === null || concept === "") {
        alert("Please fill the form")
        return
    }
    else if (concept.includes("$") || concept.includes("@") || concept.includes("#") || concept.includes("%") || concept.includes("^") || concept.includes("&") || concept.includes("*") || concept.includes("|") || concept.includes("~") || concept.includes("`")) {
        alert("No special characters allowed")
        return
    }
    let journalEntry = document.querySelector("#journal-entry").value
    if (journalEntry === null || journalEntry === "") {
        alert("Please fill the form")
        return
    }
    else if (journalEntry.includes("$") || journalEntry.includes("@") || journalEntry.includes("#") || journalEntry.includes("%") || journalEntry.includes("^") || journalEntry.includes("&") || journalEntry.includes("*") || journalEntry.includes("|") || journalEntry.includes("~") || journalEntry.includes("`")) {
        alert("No special characters allowed")
        return
    }
    let mood = document.querySelector("#mood").value
    if (mood === null || mood === "") {
        alert("Please fill the form")
        return
    }
    else if (mood.includes("$") || mood.includes("@") || mood.includes("#") || mood.includes("%") || mood.includes("^") || mood.includes("&") || mood.includes("*") || mood.includes("|") || mood.includes("~") || mood.includes("`")) {
        alert("No special characters allowed")
        return
    }

    let newEntryObj = createJournalEntries (journalDate, concept, journalEntry, mood)

    document.querySelector("#concept").value = ""
    document.querySelector("#journal-entry").value = ""

    API.createEntries(newEntryObj).then(() => {
        API.getJournalEntries().then(newEntryObj => {
            journalEntries.addToJournal(newEntryObj)
        })
    })


})





