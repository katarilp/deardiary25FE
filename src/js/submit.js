import '../css/style.css';


const addEntry = async () => {  
    // haetaan kaikki input kentät ja
    // lähetetään ne fetchillä palvelimelle
        document.querySelector('.entryForm').addEventListener('submit', async (event) => {
          event.preventDefault();
        
          const formData = {
            //username: document.getElementById('username').value,
            entry_date: document.getElementById('entry_date').value,
            anxiety_level: document.getElementById('anxiety_level').value,
            notes: document.getElementById('notes').value,
          };
        
          const submission = await fetch('http://localhost:3000/api/entries', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'authorization': 'Bearer ' + localStorage.getItem('token'),
            },
            body: JSON.stringify(formData),
          });
        
          if (submission.ok) {
            alert('Entry added successfully!');
          } else {
            alert('Failed to add entry.');
          }
        });
  };
  
const addEntryBtn = document.querySelector('.add_entry');
addEntryBtn.addEventListener('click', addEntry); 


export default addEntry; addEntryBtn;