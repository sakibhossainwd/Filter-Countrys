const loadCoutrys = (regionName) => {
    const url = `https://restcountries.com/v3.1/region/${regionName}`
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => regionCountrys(data))
}

const regionCountrys = countrys => {
    const countryContainer = document.getElementById('country-container');
    countryContainer.innerHTML = '';
    countrys.forEach(country => {
        // console.log(country.altSpellings[2]);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="col">
                    <div class="card">
                        <img src="${country.flags.png}" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">Name: ${country.name.common}</h5>
                          <p class="card-text">Spellings: ${country.altSpellings[2]}</p>
                        </div>
                    </div>
        </div>
        `
        countryContainer.appendChild(div);
    });
}

document.getElementById('region-list').addEventListener('click', function(even){
    const regionName = even.target.innerText;
    console.log(regionName);
    loadCoutrys(regionName);


    // display present country name
    const displayCountry = document.getElementById('display-country');
    console.log(displayCountry);
    displayCountry.innerText = regionName;

    
})


loadCoutrys('Asia');