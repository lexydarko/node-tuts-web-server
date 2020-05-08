const weatherForm = document.querySelector('form')
const search = document.querySelector('#address')
const pFirst = document.querySelector('#error')
const pSecond = document.querySelector('#success')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

    if(search === '' || search === undefined){
        pFirst.textContent = 'You must enter an address'  
        pSecond.textContent = ''

    }
    else if (!search){
        pFirst.textContent = 'Unable to find location, try another search' 
        pSecond.textContent = ''

    }
    else{
        fetch('http://localhost:3000/weather?address=' + location).then( (response) => {
            response.json().then((data) => {
                if(data.error) {
                    pFirst.textContent = data.error
                }
                else{
                    pFirst.textContent = ''
                    pFirst.textContent = data.location
                    pSecond.textContent = data.forecast
                }
            })
        })
    }
})


