let movies = [ 
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
function avg(movies){ 
    let sum = 0; 
    for (let i = 0; i < movies.length; i++) { 
        sum += movies[i]['Grade']; 
    } 
    return sum / movies.length; 
} 
 
let iron_man = { 
    "name": "В погоне за счастьем", 
    "genre": "Драма", 
    "Grade": 8.3 
} 
 
function averageGrade(movies) {
    let sum = 0;
    for (let i = 0; i < movies.length; i++) {
      sum += movies[i].Grade;
    }
    return sum / movies.length;
  }
  
  function writeMovieDetails(movie) {
    document.write("<h5>Movie: " + movie.name + "</h5>");
    document.write("<h5>Genre: " + movie.genre + "</h5>");
    document.write("<h5>Grade: " + movie.Grade + "</h5>");
    document.writeln("");
  }
  
  for (let i = 0; i < movies.length; i++) {
    let movie = movies[i];
    writeMovieDetails(movie);
  }
  
  document.write("<h5>Average Grade: " + averageGrade(movies) + "</h5>");

