let searchDogButton = document.getElementById('searchDogButton');
let typeOfDog = document.getElementById('typeOfDog');
let dogPic = document.getElementById('dogPic');

searchDogButton.addEventListener('click', function (e) {
    if (typeOfDog.type !== "") {
        e.preventDefault();
        typeOfDog.value=typeOfDog.value.replace(/\s/g,'');
        let link = `https://dog.ceo/api/breed/${typeOfDog.value}/images`;
        console.log('click worked');
        fetch(link)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let randomDogPic = data.message[Math.floor(Math.random() * data.message.length)];
                dogPic.setAttribute('src', randomDogPic);
            })
    }

});