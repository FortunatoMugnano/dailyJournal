
const API = {
    getJournalEntries() {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())

    },
    getMood() {
        return fetch("http://localhost:3000/mood")
        .then(response => response.json())
    },
    createEntries(entries) {
        return fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entries)
        })
    },
    deleteEntries(id) {
        return fetch(`http://localhost:3000/entries/${id}`, {
            method: "DELETE"
        }).then(response => response.json())
    },
    editEntry: (id) => {
        const entryUpdateObject = {
            conceptsCovered: document.querySelector("#entryConcept").value,  //conceptsCovered from the entries.json file
            entry: document.querySelector("#entryJournal").value,             // entry from the entries.json file
            dateOfEntry: document.querySelector("#entryDate").value,         // dataOfEntry from the entries.json file
            mood: document.querySelector("#modMood").value                  // mood from the entries.json file
        }

        return fetch(`http://localhost:3000/entries/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entryUpdateObject)
        }).then(response => response.json())
    },
    getSingle: (entryId) => {
        return fetch(`http://localhost:3000/entries/${entryId}`)
            .then(response => response.json())
    }
}



export default API;







