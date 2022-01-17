const feedDisplay = document.querySelector('#feed')
const shareCode = document.querySelector('#share-code')
const addBtn = document.querySelector('#add-btn')
const priceRow = document.querySelector('.price-row')

url = 'http://localhost:8000/code/'

addBtn.addEventListener('click', async function(){
    urlCode = url + shareCode.value
    console.log(urlCode)  

    while(feedDisplay.firstChild){
        feedDisplay.removeChild(feedDisplay.firstChild)
    }

    return fetch(urlCode)
            .then(response => {return response.json()})
            .then(data => {
                const output = `<div class='price-row'><h3>` + 
                    shareCode.value.toUpperCase() + 
                    `</h3><p>R$ ` + 
                    data + 
                    `</p></data>`
                feedDisplay.insertAdjacentHTML("beforeend", output)
            })
            .catch(err => console.log(err))    
})