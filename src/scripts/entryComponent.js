const createEntrie = {
    makeJournalEntryComponent(entry) {  // Create your own HTML structure for a journal entry
        return `<div>
    <h1>${entry.conceptsCovered}</h1>
    <p>${entry.entry}</p>
    <p>${entry.dateOfEntry}</p>
    <p>My mood today is ${entry.mood}!</p>
    </div>
    `}
}

export default createEntrie;