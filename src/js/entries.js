
const getEntries = async () => {
  // haetaan alue joho luodaan kortit
  //const diaryEntries = document.getElementById('card-area');
  //console.log(diaryEntries);

  // haetaan data fetch rajapinnasta
  const url = 'http://localhost:3000/api/entries';
  let options = {
    method: 'GET',
    headers: {
    'Content-Type': 'key-value',
    'authorization': 'Bearer ' + localStorage.getItem('token')}     
  };
  let data = await fetch(url, options = {
    method: 'GET',
    headers: {
    'Content-Type': 'key-value',
    'authorization': 'Bearer ' + localStorage.getItem('token')}
    });
  console.log('Data:', data); 
    
  const response = await data.json(); 
  console.log(response);
 
// luodaan kortit ja lisätään ne alueelle

  const diaryContainer = document.querySelector('.card-area');
  console.log('Löytyykö:', diaryContainer);

 diaryContainer.innerHTML = ''; //tyhjennetään taulukko  

response.forEach((entry) => {
  const card = document.createElement('div');
  card.classList.add('card');
  
  const cardImg = document.createElement('div');
  cardImg.classList.add('card-img');
  
  const img = document.createElement('img');
  img.src = '/img/diary.jpg';    
  img.alt = 'Diary Image';
  cardImg.appendChild(img);
  
  const cardDiary = document.createElement('div');
  cardDiary.classList.add('card-diary');
  cardDiary.innerHTML = `
      <p><strong>Päiväys:</strong> ${entry.entry_date}</p>
      <p><strong>Ahdistus:</strong> ${entry.anxiety_level}</p>
      <p><strong>Muistiinpanot:</strong> ${entry.notes}</p>
  `;
  
  card.appendChild(cardImg);
  card.appendChild(cardDiary);
  diaryContainer.appendChild(card);
  });
};



const getEntriesBtn = document.querySelector('.get_entries');
getEntriesBtn.addEventListener('click', getEntries);

export {getEntries, getEntriesBtn};
