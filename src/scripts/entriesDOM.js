const cretePhrase = document.querySelector(".entryLog") // Make a variable to add something in the DOM


const journalEntries = {
 addToJournal(dataArray) {   // This function will attach the variable in the HTML
    dataArray.forEach(element => {
        let entryHtml = createEntrie.makeJournalEntryComponent(element)
        cretePhrase.innerHTML += entryHtml
    });
}
}

