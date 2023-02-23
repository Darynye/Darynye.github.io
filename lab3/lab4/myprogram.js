let Will = {"name": "Jada Smith", "age": "54", "oscars": 1};

function getMovieDetails(name, genre, grade) {
  return {
    name: name,
    genre: genre,
    grade: grade
  };
}

let movie1 = getMovieDetails("Фокус", "Драма", 7.1);
let movie2 = getMovieDetails("Алладин", "Фэнтези", 7.3);
let movie3 = getMovieDetails("Я - легенда", "Боевик", 7.9);

let arr = [movie1, movie2, movie3];

function movieDetails(movie) {
  document.write("<hr>");
  document.write("<h5>Movie: " + movie.name + "</h5>");
  document.write("<h5>Genre: " + movie.genre + "</h5>");
  document.write("<h5>Grade: " + movie.grade + "</h5>");
}

function sumOfFilms(arr){
  return arr.length;
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