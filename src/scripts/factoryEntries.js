const createJournalEntries = (date, concept, entry, mood) => {
    const newEntry = {
        dateOfEntry: date,
        conceptsCovered: concept,
        entry: entry,
        mood: mood
    }
    return newEntry
}

export default createJournalEntries