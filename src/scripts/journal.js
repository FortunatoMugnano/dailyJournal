import API from "./data.js";
import journalEntries from "./entriesDOM.js";
import createJournalEntries from "./factoryEntries.js";
import createEntrie from "./entryComponent.js";


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

    let newEntryObj = createJournalEntries(journalDate, concept, journalEntry, mood)

    document.querySelector("#concept").value = ""
    document.querySelector("#journal-entry").value = ""

    API.createEntries(newEntryObj).then(() => {
        API.getJournalEntries().then(newEntryObj => {
            journalEntries.addToJournal(newEntryObj)
        })
    })


})

/* Radio Button eventListener part */

const superButton = document.querySelector("#super")
const happyButton = document.querySelector("#happy")
const okButton = document.querySelector("#ok")
const sadButton = document.querySelector("#sad")


superButton.addEventListener("click", event => {
    API.getJournalEntries()
        .then(res => res.filter(entry => entry.mood === superButton.id))
        .then(filteredRes => {
            document.querySelector(".entryLog").innerHTML = ""
            journalEntries.addToJournal(filteredRes)
        })
})

happyButton.addEventListener("click", event => {
    API.getJournalEntries()
        .then(res => res.filter(entry => entry.mood === happyButton.id))
        .then(filteredRes => {
            document.querySelector(".entryLog").innerHTML = ""
            journalEntries.addToJournal(filteredRes)
        })
})

okButton.addEventListener("click", event => {
    API.getJournalEntries()
        .then(res => res.filter(entry => entry.mood === okButton.id))
        .then(filteredRes => {
            document.querySelector(".entryLog").innerHTML = ""
            journalEntries.addToJournal(filteredRes)
        })
})

sadButton.addEventListener("click", event => {
    API.getJournalEntries()
        .then(res => res.filter(entry => entry.mood === sadButton.id))
        .then(filteredRes => {
            document.querySelector(".entryLog").innerHTML = ""
            journalEntries.addToJournal(filteredRes)
        })
})



/* Delete button event listener */

document.querySelector(".entryLog").addEventListener("click", event => {
    if(event.target.id.startsWith("deleteEntry--")) {
        API.deleteEntries(event.target.id.split("--")[1])
        .then(() => {
            document.querySelector(".entryLog").innerHTML = "";
            API.getJournalEntries().then(data => {
                journalEntries.addToJournal(data)
            })
            
        })
    }
})

/* Edit button event listener */




