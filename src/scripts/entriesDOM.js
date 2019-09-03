const journalEntries = {
    addToJournal(dataArray) {   // This function will attach the variable in the HTML
        dataArray.forEach(element => {
            let entryHtml = createEntrie.makeJournalEntryComponent(element)
            entriesDom.cretePhrase.innerHTML += entryHtml
        });
    }
}

const entriesDom = {
    cretePhrase: document.querySelector(".entryLog"),
}