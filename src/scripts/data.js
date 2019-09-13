
const API = {
   getJournalEntries() { 
       return fetch("http://localhost:3000/entries")
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
       return fetch (`http://localhost:3000/entries/${id}`, {
           method: "DELETE"
       }).then(response => response.json())
   }
}
    
 

export default API;







            