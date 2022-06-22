console.log('Hello world!');

function loadEvent() {
    console.log('loaded');
    
    let rootElement=document.getElementById('root');

    rootElement.innerHTML='Sziasztok!'
    /*console.dir(document.getElementById('root'))
    console.dir(document.querySelector('#root'))*/

    rootElement.innerHTML=' Ciao!'

    rootElement.insertAdjacentHTML('beforeend',`
        <h1>This is the title!</h1>
    `)
}

window.addEventListener('load',loadEvent)