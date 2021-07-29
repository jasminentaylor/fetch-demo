const input = document.querySelector('input');
const button = document.querySelector('button')
const countryDiv = document.querySelector('.country-div')

// add event listener to our button
button.addEventListener('click', function() {
    // Fetch our data
    fetch('https://restcountries.eu/rest/v2/name/usa')
    .then((response) => response.json())
    .then((data) => {
        const countryData = data[0];
        console.log(countryData);
        //const [countryData] = data;
    });
});
