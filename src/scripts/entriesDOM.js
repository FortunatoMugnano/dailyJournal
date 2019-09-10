import createEntrie from "./entryComponent.js";

const journalEntries = {
    addToJournal(dataArray) {   // This function will attach the variable in the HTML
        dataArray.forEach(element => {
            let cretePhrase =  document.querySelector(".entryLog");
            let entryHtml = createEntrie.makeJournalEntryComponent(element)
            cretePhrase.innerHTML += entryHtml
        });
    }
}




export default journalEntries;