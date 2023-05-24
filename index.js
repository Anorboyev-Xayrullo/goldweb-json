fetch("http://localhost:3000/posts")
    .then((res) => res.json())
    .then((data) => {
        data.forEach(elem => {
            let container = document.querySelector(".container")
            container.innerHTML += `
            <div class="col-3">
            <img width="300" src=${elem?.img} alt="">
            <p>${elem.name}</p> 
            </div>        
         `
        });
    })