console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

// Create a global variable called myCollection that starts as an empty array
let myCollection = [];

// Create a global variable called tracks that is equal to an empty array
// let tracks = [];


// Create a function called addToCollection that should have the following input parameters:
// collection, title, artist, yearPublished. Make sure to test!!
function addToCollection(collection, title, artist, trackName, yearPublished, duration) {
  let albums = {
    collection: collection,
    title: title,
    artist: artist,
    trackName: trackName,
    yearPublished: yearPublished,
    duration: duration
    
    
  };
  collection.push(albums);
  return albums;

};


// Adding 10 albums to myCollection

console.log('First album is:', addToCollection(myCollection, 'The Lonesome Crowded West', 'Modest Mouse', 1997, 'Cowboy Dan', '6:14'));
console.log('Second album is:', addToCollection(myCollection, 'The Moon & Antartica', 'Modest Mouse', 2000, '3rd Planet', '3:59'));
console.log('Third album is:', addToCollection(myCollection, 'Siamese Dream', 'Smashing Pumpkins', 1993, 'Mayonaise', '5:49'));
console.log('Fourth album is:', addToCollection(myCollection, 'Mellon Collie and the Infinite Sadness', 'Smashing Pumpkins', 1995, 'Love', '4:22'));
console.log('Fifth album is:', addToCollection(myCollection, 'Windowlicker', 'Aphex Twin', 1999, 'Windowlicker', '2:37'));
console.log('Sixth album is:', addToCollection(myCollection, 'Richard D. James', 'Aphex Twin', 1996, '4', '3:37'));
console.log('Seventh album is:', addToCollection(myCollection, 'Let\s Rock', 'The Black Keys', 2019, 'Tell Me Lies', '3:40'));
console.log('Eighth album is:', addToCollection(myCollection, 'Magic Potion', 'The Black Keys', 2006, 'The Flame', '4:36'));
console.log('Nineth album is:', addToCollection(myCollection, 'Water', 'Dehd', 2019, 'Lucky', '2:34'));
console.log('Tenth album is:', addToCollection(myCollection, 'Blue Skies', 'Dehd', 2022, 'Bad Love', '2:31'));
console.log('Collection is:', myCollection);

// ${record.tracks} ${record.duration} // add later into showCollection
    
    // My original code for the  for of loop, but getting errors in the test, just wanted to keep it for refrence
    // console.log(record.title, 'by', record.artist, 'published in', record.yearPublished);


// Create a function called showCollection that should take in the collection parameter
// Loop over the collection and console.log each albums info formatted within a single string 
// Make sure to test!!
function showCollection(collection) {
  for (let record of collection) {
    console.log(`${record.title}, by, ${record.artist}, published in, ${record.yearPublished}, ${record.trackName}, ${record.duration}`);
    
    
    
  }

  
};
console.log('Testing the showCollection:');
showCollection(myCollection);


 
// Create a function called findByArtist that takes in artist and collection parameters
 // Test function with an artist that is in the collection and an artist that isn't in the collection
function findByArtist(collection, artist) {
  let searchArtist = [];
  

  for (let i = 0; i < collection.length; i++) {
      if (collection[i].artist === artist) {
          searchArtist.push(collection[i]);
      }    
  }
  return searchArtist;
  
};
// Testing the findByArtist function with an artist that's in my collection
console.log('Testing the findByArtist with an artist that is in my collection:');
console.log(findByArtist(myCollection, 'Modest Mouse'));
console.log(findByArtist(myCollection, 'The Black Keys'));

// Artist that is not in my collection
console.log('Artist that is not in my collection');
console.log(findByArtist(myCollection, 'The Black Crows'));


// Stretch Goals!!

// Create function called search that will allow for searching by artist and year
// This function should take in a collection and searchCriteria as parameters
// Take in a searchCriteria parameter

function search(collection, searchCriteria) {
  let findArtist = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].artist === searchCriteria.artist && collection[i].yearPublished === searchCriteria.yearPublished) {
      if (collection[i].trackName === searchCriteria.trackName && collection[i].duration === searchCriteria.duration) {
        findArtist.push(collection[i]);
      }
    } 
      
  }
  return findArtist;

  
};
console.log('Testing the search function with an artist that is my collection');
// console.log(search(myCollection, 'Cowboy Dan'));
console.log('Artist that is in my collection', search(myCollection, {artist: 'Modest Mouse', yearPublished: 2000, trackName: '3rd Planet', duration: '3:59'}));




















// Stretch!!
// Add an array of tracks to our albums in the collection that has a track name and duration


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
