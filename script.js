const url = 'https://restcountries.com/v2/all'
let count;

let countries = async () => {
    try {
        let response = await fetch(url)
        let data = await response.json()
        return data
    }
    catch (err) {
        console.log('Not Fetched!')
    }
}

countries().then(data => {
    count = data
    let n = document.querySelector('.text')
    n.innerHTML = "<p class="+"text"+">Total numbers of countries : <span class="+"num-of-countries"+"></span></p>"
    let p = document.querySelector('.num-of-countries')
    p.textContent = count.length
    return data
})

document.addEventListener("input", () => {
    let div = document.querySelector('.fetchContainer')



    const searchBox = document.querySelector(".search-bar").value.toLowerCase();

    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }
    if (sec == 1) {
        for (let i of count) {
            let text = i.name;



            if (text.toLowerCase().startsWith(searchBox) == true && searchBox != "") {
                let childDiv = document.createElement('div')
                childDiv.style.height = '200px'
                childDiv.style.width = '200px'
                childDiv.style.fontSize = "20px"
                childDiv.style.border = '1px solid black'
                childDiv.style.margin = '20px'
                childDiv.style.display = 'flex' // Set display property to flex
                childDiv.style.alignItems = 'center' // Center items vertically
                childDiv.style.justifyContent = 'center' // Center items horizontally
                childDiv.style.textAlign = 'center'
                childDiv.style.backgroundImage = 'url("Images/back.jpg")'; // Replace with your image path
                childDiv.style.backgroundSize = 'cover';
                childDiv.style.backgroundPosition = 'center';
                childDiv.style.color = 'white'; // Add text color to make it visible on the background image
                childDiv.textContent = text
                div.appendChild(childDiv)
            }

        }
    }
    else if(sec == 2)
    {
        for (let i of count) {
            let text = i.name;



            if (text.toLowerCase().indexOf(searchBox)>-1 && searchBox != "") {
                let childDiv = document.createElement('div')
                childDiv.style.height = '200px'
                childDiv.style.width = '200px'
                childDiv.style.fontSize = "20px"
                childDiv.style.border = '1px solid black'
                childDiv.style.margin = '20px'
                childDiv.style.display = 'flex' // Set display property to flex
                childDiv.style.alignItems = 'center' // Center items vertically
                childDiv.style.justifyContent = 'center' // Center items horizontally
                childDiv.style.textAlign = 'center'
                childDiv.style.backgroundImage = 'url("Images/back.jpg")'; // Replace with your image path
                childDiv.style.backgroundSize = 'cover';
                childDiv.style.backgroundPosition = 'center';
                childDiv.style.color = 'white'; // Add text color to make it visible on the background image
                childDiv.textContent = text
                div.appendChild(childDiv)
            }

        }
    }

})

function remove(){
    let div = document.querySelector('.fetchContainer')
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }
}

function display(){
    let div = document.querySelector('.fetchContainer')
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }

    for (let i of count) {
        let text = i.name;



        
            let childDiv = document.createElement('div')
            childDiv.style.height = '200px'
            childDiv.style.width = '200px'
            childDiv.style.fontSize = "20px"
            childDiv.style.border = '1px solid black'
            childDiv.style.margin = '20px'
            childDiv.style.display = 'flex' // Set display property to flex
            childDiv.style.alignItems = 'center' // Center items vertically
            childDiv.style.justifyContent = 'center' // Center items horizontally
            childDiv.style.textAlign = 'center'
            childDiv.style.backgroundImage = 'url("Images/back.jpg")'; // Replace with your image path
            childDiv.style.backgroundSize = 'cover';
            childDiv.style.backgroundPosition = 'center';
            childDiv.style.color = 'white'; // Add text color to make it visible on the background image
            childDiv.textContent = text
            div.appendChild(childDiv)
       

    }
}