console.log("My daily journal is working");


const cretePhrase = document.querySelector(".entryLog")  // Make a variable to add something in the DOM


const makeJournalEntryComponent = (entry) => {  // Create your own HTML structure for a journal entry
    return `<div>
    <h1>${entry.conceptsCovered}</h1>
    <p>${entry.entry}</p>
    <p>${entry.dateOfEntry}</p>
    <p>My mood today is ${entry.mood}!</p>
    </div>
    `}

function addToJournal(htmlString) {   // This function will attach the variable in the HTML
    cretePhrase.innerHTML += htmlString
}

fetch("http://localhost:3000/entries") // Fetch from the API
    .then(entries => entries.json())  // Parse as JSON
    .then(parsedEntries => {  // What should happen when we finally have the array?
        parsedEntries.forEach(element => {  // Let's make a forEach function 
            const renderJournalEntries = makeJournalEntryComponent(element)  // This new function it's equal to the one we created
            addToJournal(renderJournalEntries)  // Finally we invoke the function to add the result to the HTML
        });
    })


