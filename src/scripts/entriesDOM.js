import createEntrie from "./entryComponent.js";

const journalEntries = {
    addToJournal(dataArray) {   // This function will attach the variable in the HTML
        dataArray.forEach(element => {
            let cretePhrase =  document.querySelector(".entryLog");
            let entryHtml = createEntrie.makeJournalEntryComponent(element)
            cretePhrase.innerHTML += entryHtml
        });
    },
    filterMood: (entries, mood) => { //entries all journal entries from API fetch; mood is coming from the eventlistener 
        let entryLog = document.querySelector(".entryLog");
        entryLog.innerHTML = ""; // setting it to an empty string
        entries.forEach(entry => { // going through all the entries and for each loop there is one entry
            if (entry.mood.toUpperCase() === mood.toUpperCase()){ //checking to see if the mood matches the mood selected; if not move to the next mood. Doesn't effect if it lower case, it will automatically look for an UpperCase mood
            entryLog.innerHTML += createEntrie.makeJournalEntryComponent(entry);   
            }
        });
             
    }
}




export default journalEntries;