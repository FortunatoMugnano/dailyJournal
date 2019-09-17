import API from "./data.js";
import journalEntries from "./entriesDOM.js";
import createJournalEntries from "./factoryEntries.js";
import createEntrie from "./entryComponent.js";
import editForm from "./editForm.js"
import dropdown from "./dropdown.js"


/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
dropdown.makeMoodDropdown()
dropdown.makeModifyMoodDropdown()

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
    let mood = document.querySelector("#mood-input").value
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
    } else if (event.target.id.startsWith("editEntry")) {  //Editing a single entry 
        editForm(event.target.id.split("--")[1])  // Invoke the editForm function from edit.js, slpitting the content between -- and passing only the second [1] "element" 
    }
})

/* Edit button event listener */


// We will create an eventListener for the save entry button if you modify an Entry

document.querySelector("#editButton").addEventListener("click", (event) => {
   
    API.editEntry(document.querySelector("#entryId").value)
        .then((response => {
            document.querySelector("#entryConcept").value = "";
            document.querySelector("#entryJournal").value = "";
            document.querySelector("#entryDate").value = "";
            document.querySelector("#modMood").value = "";
            document.querySelector(".entryLog").innerHTML = "";
            API.getJournalEntries().then(data => {
                journalEntries.addToJournal(data)
            })

        }))
})

