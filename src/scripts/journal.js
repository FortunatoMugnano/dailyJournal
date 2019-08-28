console.log("My daily journal is working");

const journalEntries = [
    {
        dateOfEntry: "27 August 2019",
        conceptsCovered: "Manipulate the Dom",
        entry: "Today we have covered a lot of new information, we create functions able to create part of HTML and more other functions methods.",
        mood: "ok"
    },
    {
        dateOfEntry: "26 August 2019",
        conceptsCovered: "Objects and Functions in JS",
        entry: "Today we have learned about Objects and how important they are for JS, also we have discussed about the Functions and their value",
        mood: "ok"
    },
    {
        dateOfEntry: "23 August 2019",
        conceptsCovered: "Celebrity Project Presentation",
        entry: "We have presented our first project in front of the class, it was good!",
        mood: "super"
    },
    {
        dateOfEntry: "22 August 2019",
        conceptsCovered: "Project work",
        entry: "We have worked as a team in the first school project",
        mood: "ok"
    },
    {
        dateOfEntry: "12 August 2019",
        conceptsCovered: "First day of school",
        entry: "Today it was the first day of school, I was very exited to meet new people and start this adventure!",
        mood: "super"
    },

];
console.log(journalEntries);

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/
const makeJournalEntryComponent = (entry) => {
    // Create your own HTML structure for a journal entry
    return `<div>
    <h1>${entry.conceptsCovered}</h1>
    <p>${entry.entry}</p>
    <p>${entry.dateOfEntry}</p>
    <p>My mood today is ${entry.mood}!</p>
    </div>
    `
}


const cretePhrase = document.querySelector(".entryLog")


const renderJournalEntries = (entries) => {
    for (let i = 0; i < entries.length; i++) {
        console.log("inside a loop", i, entries[i])
        cretePhrase.innerHTML += makeJournalEntryComponent(entries[i]);
    }

}

// Invoke the render function
renderJournalEntries(journalEntries)