let Will = {"name": "Jada Smith", "age": "54", "oscars": 1} 

let arr = [ 
    { 
        "name": "Фокус", 
        "genre": "Драма", 
        "Grade": 7.1 
    }, 
    { 
        "name": "Алладин", 
        "genre": "Фэнтези", 
        "Grade": 7.3 
    }, 
    { 
        "name": "Я - легенда", 
        "genre": "Боевик", 
        "Grade": 7.9
    } 
] 
function avg(arr){ 
    let sum = 0; 
    for (let i = 0; i < arr.length; i++) { 
        sum += arr[i]['Grade']; 
    } 
    return sum / arr.length; 
} 
  
  function movieDetails(arr) {
    document.write("<hr>");
    document.write("<h5>Movie: " + arr.name + "</h5>");
    document.write("<h5>Genre: " + arr.genre + "</h5>");
    document.write("<h5>Grade: " + arr.Grade + "</h5>");
  }

  function sumOfFilms(arr){
    return arr.length;
  }

function avgGrade(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i].Grade;
    }
    return sum / arr.length;
  }  
    document.write("<h4>Wife: " + Will.name + "</h4>");
    document.write("<h4>Age: " + Will.age + "</h4>");
    document.write("<h4>Oscars: " + Will.oscars + "</h4>");

  for (let i = 0; i < arr.length; i++) {
    let movie = arr[i];
    movieDetails(movie);
  }
  document.write("<hr>");
  document.write("<p>Sum of films: " + sumOfFilms(arr) + "</p>");
  document.write("<p>Average Grade: " + avgGrade(arr) + "</p");
