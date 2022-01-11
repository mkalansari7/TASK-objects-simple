/** Task 1:
 * create 3 objects with the name movie1, movie2, movie3
 * Add 3 properties to it
 * - id -> just a unique id, you can start with 1
 * - name -> a movie name (e.g. COCO)
 * - image  -> an http link of the image on the internet
 * rating -> a rating number from 1 to 10
 *
 * After you create the movies, console log them.
 * Open the live server, and see the logs in the console of the browser
 *
 */

const movie1 = {
  id: 1,
  name: "Catch me if you can",
  image:
    "https://upload.wikimedia.org/wikipedia/en/4/4d/Catch_Me_If_You_Can_2002_movie.jpg",
  rating: 8.1,
};
const movie2 = {
  id: 2,
  name: "now you see me",
  image: "https://www.qasioun-news.com/public/storage/uploads/3304458896.jpg",
  rating: 7.2,
};
const movie3 = {
  id: 3,
  name: "inception",
  image:
    "https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-movie/inceptionmovie-newposter-big.jpg?itok=zn3rPAOq",
  rating: 8.8,
};
console.log(movie1);
console.log(movie2);
console.log(movie3);

/** Task 2:
 * Create an array `movies`
 * Add to it the movies that you created on top.
 * Once you add one movie,
 * you will see the movie card in the html page!
 *
 * Don't add to the array the movies variables,
 * just copy paste the content to be in the following format
 * [
 *    {
 *       prop: value,
 *       prop: value,
 *       prop: value,
 *    },
 * ]
 */
const movies = [
  {
    id: 1,
    name: "Catch me if you can",
    image:
      "https://upload.wikimedia.org/wikipedia/en/4/4d/Catch_Me_If_You_Can_2002_movie.jpg",
    rating: 8.1,
  },
  {
    id: 2,
    name: "now you see me",
    image: "https://www.qasioun-news.com/public/storage/uploads/3304458896.jpg",
    rating: 7.2,
  },
  {
    id: 3,
    name: "inception",
    image:
      "https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-movie/inceptionmovie-newposter-big.jpg?itok=zn3rPAOq",
    rating: 8.8,
  },
];
/** TASK 3:
 * Create a new file call it `movies.json`
 * Copy paste the content of the array inside the json file
 * Make sure it's a json format.
 */
