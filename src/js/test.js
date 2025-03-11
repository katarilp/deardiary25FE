const getData = async () => {
  try {
    // tehdään pyyntö HTTP GET
    const response = await fetch('http://localhost:3000/api/entries');
    console.log(response);
    // muunnetaan json muotoon
    const data = await response.json();
    console.log(data);
    console.log(data.value);
  } catch (error) {
    console.error('Virhe:', error);
  }
};

export {getData};
