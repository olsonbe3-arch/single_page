return fetch("https://api.apilayer.net/weatherstack/current?access_code=7ac5f6f877275ca3e68779a51e715baf&query=Livonia,Michigan&units=f")
  .then(response => response.json())
  .then(data => {
    console.log(data); 
  });
 