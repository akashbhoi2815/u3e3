// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let movie = document.getElementById("movie")
const data = JSON.parse(localStorage.getItem("movie"))

data.forEach(function(el) {
  
  let div=document.createElement("div");
  div.setAttribute("class","movie_tab");

  let img=document.createElement("img");
  img.src=el.Poster;

  let title = document.createElement("p");
  title.innerText=el.Title

  div.append(title,img);
  movie.append(div);
});
  