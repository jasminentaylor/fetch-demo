const input = document.querySelector('input');
const button = document.querySelector('button')
const countryDiv = document.querySelector('.country-div')

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

        const image = document.createElement('img');
        image.src = countryData.flag;
        image.classList.add('flag')
        document.body.append(image);
    });
});
