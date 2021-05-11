let button = document.querySelector("#button");
button.addEventListener("click", function () {
  location.reload();
});
let showcase = document.querySelector("#showcase");

let request = new XMLHttpRequest();
request.open(
  "GET",
  "https://api.giphy.com/v1/gifs/random?api_key=3FZm8c2tZqF58iHHVYXNjUAIIKfLXOxU&tag=spongebob&rating=g"
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
