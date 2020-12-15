var axiosConfig = {
    headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
    }
}

function login(){
    var emailField = document.getElementById("email");
    var passwordField = document.getElementById("password");

    var email = emailField.value;
    var password = passwordField.value;

    axios.post("http://localhost:8080/auth",{
        email,
        password
    }).then(res => {
        var token = res.data.token;
        localStorage.setItem("token", token);
        axiosConfig.headers.Authorization = "Bearer " + localStorage.getItem("token");
    }).catch(err => {
        alert("invalid Login");
    });
}

function createGame(){
    var titleInput = document.getElementById("title");
    var yearInput = document.getElementById("year");
    var priceInput = document.getElementById("price");

    var game = {
        title: titleInput.value,
        year: yearInput.value,
        price: priceInput.value
    }
    axios.post("http://localhost:8080/game",game,axiosConfig).then(response => {
        if(response.status == 200){
            alert("Registered Game");
        }
    }).catch(err => {
        console.log(err);
    });
}

function deleteGame(listItem){
    var id = listItem.getAttribute("data-id");
    axios.delete("http://localhost:8080/game/"+id,axiosConfig).then(response => {
        alert("Deleted Game");
    }).catch(err => {
        console.log(err);
    })
}

function loadForm(listItem){
    var id = listItem.getAttribute("data-id");
    var title = listItem.getAttribute("data-title");
    var year = listItem.getAttribute("data-year");
    var price = listItem.getAttribute("data-price");

   document.getElementById("idEdit").value = id;
   document.getElementById("titleEdit").value = title;
   document.getElementById("yearEdit").value = year;
   document.getElementById("priceEdit").value = price;
}

function updateGame(){
    var idInput = document.getElementById("idEdit");
    var titleInput = document.getElementById("titleEdit");
    var yearInput = document.getElementById("yearEdit");
    var priceInput = document.getElementById("priceEdit");

    var game = {
        title: titleInput.value,
        year: yearInput.value,
        price: priceInput.value
    }

    var id = idInput.value;

    axios.put("http://localhost:8080/game/"+id,game,axiosConfig).then(response => {
        if(response.status == 200){
            alert("Edited Game!");
        }
    }).catch(err => {
        console.log(err);
    });
}

axios.get("http://localhost:8080/games",axiosConfig).then(response =>{
    var games = response.data;
    var list = document.getElementById("games");

    games.forEach(game => {
        var item = document.createElement("li");

        item.setAttribute("data-id", game.id);
        item.setAttribute("data-title", game.title);
        item.setAttribute("data-year", game.year);
        item.setAttribute("data-price", game.price);

        item.innerHTML = game.id + " - " + game.title + "- $" + game.price;

        var deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.addEventListener("click",function(){
            deleteGame(item);
        })

        var editBtn = document.createElement("button");
        editBtn.innerHTML = "Edit";
        editBtn.addEventListener("click",function(){
            loadForm(item);
        })

        item.appendChild(deleteBtn);
        item.appendChild(editBtn);

        list.appendChild(item);
    })
}).catch(error => {
    console.log(error);
});