const input = document.querySelector('input');
const button = document.querySelector('button')
const countryDiv = document.querySelector('.country-data')

// add event listener to our button
button.addEventListener('click', function() {
    //Grab what the user types
    const country = input.value;
    // Fetch our data
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
        const countryData = data[0];
        console.log(countryData);
        // array destructuring 
        //const [countryData] = data;
        //name, flag, region, capitol, population

        const html = 
        `
        <h2>${countryData.name}</h2>
        <img src="${countryData.flag}" alt="flag of ${countryData.name}" title="flag of ${countryData.name}" class="flag">
        <h3>${countryData.region}</h3>
        <h4>Capital: ${countryData.capital}</h4>
        <h4>Population: ${countryData.population}</h4>

        `
        countryDiv.innerHTML = html;
        
        //const image = document.createElement('img');
        //image.src = countryData.flag;
        //image.classList.add('flag')
        //countryDiv.append(image);
    });
});
