console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

// Create a global variable called myCollection that starts as an empty array
let myCollection = [];


// Create a function called addToCollection that should have the following input parameters:
// collection, title, artist, yearPublished. Make sure to test!!
function addToCollection(collection, title, artist, yearPublished) {
  let albums = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  collection.push(albums);
  return albums;

};

// Adding 10 albums to myCollection
console.log('First album is:', addToCollection(myCollection, 'The Lonesome Crowded West', 'Modest Mouse', 1997));
console.log('Second album is:', addToCollection(myCollection, 'The Moon & Antartica', 'Modest Mouse', 2000 ));
console.log('Third album is:', addToCollection(myCollection, 'Siamese Dream', 'Smashing Pumpkins', 1993));
console.log('Fourth album is:', addToCollection(myCollection, 'Mellon Collie and the Infinite Sadness', 'Smashing Pumpkins', 1995));
console.log('Fifth album is:', addToCollection(myCollection, 'Windowlicker', 'Aphex twin', 1999 ));
console.log('Sixth album is:', addToCollection(myCollection, 'Richard D. James', 'Aphex Twin', 1996));
console.log('Seventh album is:', addToCollection(myCollection, 'Let\s Rock', 'The Black Keys', 2019));
console.log('Eighth album is:', addToCollection(myCollection, 'Magic Potion', 'The Black Keys', 2006));
console.log('Nineth album is:', addToCollection(myCollection, 'Water', 'Dehd', 2019));
console.log('Tenth album is:', addToCollection(myCollection, 'Blue Skies', 'Dehd', 2022));
console.log('Collection is:', myCollection);


// Create a function called showCollection that should take in the collection parameter
// Loop over the collection and console.log each albums info formatted within a single string 
// Make sure to test!!
// function showCollection(collection) {
//   for (let i = 0; i < collection.length; i++) {
//     console.log(myCollection[i].title, 'by', myCollection[i].artist, 'published in', myCollection[i].yearPublished);
//   }
//   for (let i = 0; i < myCollection.length; i++) {
//     console.log(`There is ${myCollection.length} albums in my collection`);
//   }
// };
// console.log('Testing the showCollection:');
// showCollection(myCollection);


// // Create a function called findByArtist that takes in artist parameter and returns it as a string.
// // Test function with an artist that is in the collection and an artist that isn't in the collection
// function findByArtist(artist) {
//   let searchArtist = [];
//   for (let i = 0; i < myCollection.length; i++) {
//       if (myCollection[i].artist === artist) {
//           searchArtist.push(artist);
//       }
     
      
//   }
//   return searchArtist;
  
// };
// // Testing the findByArtist function with an artist that's in my collection
// console.log('Testing the findByArtist function:', findByArtist('The Black Keys'));

// Testing the findByArtist function with an artist that is not

// Stretch Goals!!






// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
