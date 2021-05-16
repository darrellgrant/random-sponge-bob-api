let button = document.querySelector("#button");
button.addEventListener("click", function () {
  location.reload();
});

function getData(callback) {
  fetch("data.php")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      callback(data);
    });
}

getData(function (myData) {
  let myAppiKey = myData;
  let showcase = document.querySelector("#showcase");

  let request = new XMLHttpRequest();
  request.open(
    "GET",
    `https://api.giphy.com/v1/gifs/random?api_key=${myAppiKey}&tag=spongebob&rating=g`
  );
  request.onload = function () {
    let response = request.response;
    let parsedData = JSON.parse(response);
    console.log(parsedData);
    let originalUrl = parsedData.data.images.original.url;
    console.log(originalUrl);

    let gif = document.createElement("img");
    gif.setAttribute("src", originalUrl);
    showcase.appendChild(gif);
  };
  request.send();
});
