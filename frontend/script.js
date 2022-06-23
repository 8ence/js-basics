//console.log('Hello world!');

/*function loadEvent() {
    console.log('loaded');
    
    let rootElement=document.getElementById('root');

    rootElement.innerHTML='Sziasztok!'
    console.dir(document.getElementById('root'))
    console.dir(document.querySelector('#root'))

    rootElement.innerHTML=' Ciao!'

    rootElement.insertAdjacentHTML('beforeend',`
        <h1>This is the title!</h1>
    `) 
} */

/*let x = "egy változó vagyok :)";
console.log(x);

x = "Én megváltoztam"

console.log(x)

const obj = {
    "kulcs" : "ertek",
    "kulcs2" : 132,
    "kulcs3" : true,
    "kulcs4" : "123",
    tomb: ['béla' , 'győzike' , 'klotild'],
    obivan : {
        key1 : "string",
        key2 : 987,
        key3 : [ 'luke' , 'anakin']
    }
}*/

const arr = [
    'string', 
    456,
    true,
    '123'
]

//arr[19] = 987;

function countryComponent(country) {
    return `
    <div class="country">
        ${country.name.common}
    </div>
    `
}

async function loadEvent() {
    let rootElement = document.getElementById('root');
    rootElement.insertAdjacentHTML('beforeend' , `
        <h1>${arr.length}</h1>
    `);

    /*for (let index = 5; index <= 10; index++) {
        console.log('The current value of index is: ', index);
        rootElement.insertAdjacentHTML('beforeend' , `
            <h1>${index}</h1>
        `)
    }*/

    const countries = await fetch('https://restcountries.com/v3.1/all');
    console.log(countries);
    const countriesJson = await countries.json();
    console.log(countriesJson);

    for (let index = 0; index < 10; index++) {
        //console.log(countriesJson[index].name.common);
        rootElement.insertAdjacentHTML('beforeend' , countryComponent(countriesJson[index]));
    }
}



window.addEventListener('load' , loadEvent);
