const createEntrie = {
    makeJournalEntryComponent(entry) {  // Create your own HTML structure for a journal entry
        return `<div>
    <h1>${entry.conceptsCovered}</h1>
    <p>${entry.entry}</p>
    <p>${entry.dateOfEntry}</p>
    <p>My mood today is ${entry.mood}!</p>
    <button id="deleteEntry--${entry.id}" type="button">Delete Entry</button>
    <button id="editEntry--${entry.id}" type="button">Edit Entry</button>
    </div>
    `}
}

export default createEntrie;