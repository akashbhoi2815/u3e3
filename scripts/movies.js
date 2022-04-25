// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let id;
  //https://omdbapi.com/?s=om%20shanti%20om&apikey=a9e2831a

  async function searchmovie() {
    try {
      const search = document.getElementById("search").value;

      const res = await fetch(`https://omdbapi.com/?s=${search}&apikey=a9e2831a`)

      const data = await res.json();

      const movie = data.Search;

      return movie;

      // console.log(movie)
      // appendmovies(movie)

    } catch (er) {
      console.log("er:", er)
    }
  }

  function appendmovies(data){
    let movies_append = document.getElementById("movies");
    movies_append.innerHTML=null

    data.forEach(function(el) {
      let div=document.createElement("div");
    div.setAttribute("class","movie_tab");

    let img=document.createElement("img");
    img.src=el.Poster;

    let title = document.createElement("p");
    title.innerText=el.Title

    let button = document.createElement("button");
    button.innerText="Book Now"
    button.setAttribute("class","book_now")
   
    button.addEventListener( "click",function(){
      bookmovies(el);
      window.location.href="checkout.html"
    })

    div.append(img,title,button);
    movies_append.append(div);
    });
    
  }

  async function main(){
    var data = await searchmovie()
    if(data===undefined){
      return false;
    }
    appendmovies(data)
  }

  function debounce(func,delay){
    if(id){
      clearTimeout(id)
      
    }
    id = setTimeout(function(){
      func()
    },delay)
  }
let bookmoviearr=JSON.parse(localStorage.getItem("movie")) || []
  function bookmovies(el){
    bookmoviearr.push(el)
    localStorage.setItem("movie",JSON.stringify(el))
  }