import '../css/style.css';
import {getUsers, addUser} from './users.js';
import {getData} from './test.js';
import {getEntries, addEntry} from './entries.js';

document.querySelector('#app').innerHTML = 'Moi tässä oman APIn harjoituksia';

getData();

const getUserBtn = document.querySelector('.get_users');
getUserBtn.addEventListener('click', getUsers);

const addUserForm = document.querySelector('.formpost');
addUserForm.addEventListener('click', addUser);

const getEntriesBtn = document.querySelector('.get_entries');
getEntriesBtn.addEventListener('click', getEntries);

const addEntryBtn = document.querySelector('.add_entry');
addEntryBtn.addEventListener('click', addEntry);    
