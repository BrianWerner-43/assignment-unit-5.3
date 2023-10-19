console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

// Create a global variable called myCollection that starts as an empty array
let myCollection = [];

// Create a global variable called tracks that is equal to an empty array
// let tracks = [];


// Create a function called addToCollection that should have the following input parameters:
// collection, title, artist, yearPublished. Make sure to test!!
function addToCollection(collection, title, artist, yearPublished) {
  let albums = {
    collection: collection,
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    
  };
  collection.push(albums);
  return albums;

};


// Adding 10 albums to myCollection
console.log('First album is:', addToCollection(myCollection, 'The Lonesome Crowded West', 'Modest Mouse', 1997));
console.log('Second album is:', addToCollection(myCollection, 'The Moon & Antartica', 'Modest Mouse', 2000 ));
console.log('Third album is:', addToCollection(myCollection, 'Siamese Dream', 'Smashing Pumpkins', 1993));
console.log('Fourth album is:', addToCollection(myCollection, 'Mellon Collie and the Infinite Sadness', 'Smashing Pumpkins', 1995));
console.log('Fifth album is:', addToCollection(myCollection, 'Windowlicker', 'Aphex Twin', 1999 ));
console.log('Sixth album is:', addToCollection(myCollection, 'Richard D. James', 'Aphex Twin', 1996));
console.log('Seventh album is:', addToCollection(myCollection, 'Let\s Rock', 'The Black Keys', 2019));
console.log('Eighth album is:', addToCollection(myCollection, 'Magic Potion', 'The Black Keys', 2006));
console.log('Nineth album is:', addToCollection(myCollection, 'Water', 'Dehd', 2019));
console.log('Tenth album is:', addToCollection(myCollection, 'Blue Skies', 'Dehd', 2022));
console.log('Collection is:', myCollection);


// Create a function called showCollection that should take in the collection parameter
// Loop over the collection and console.log each albums info formatted within a single string 
// Make sure to test!!
function showCollection(collection) {
  for (let record of collection) {
    console.log(`${record.title}, by, ${record.artist}, published in, ${record.yearPublished}`);
    // ${record.tracks} ${record.duration} // add later into showCollection
    // console.log(record.title, 'by', record.artist, 'published in', record.yearPublished);
    
  }

  
};
console.log('Testing the showCollection:');
showCollection(myCollection);


 // for (let album of artist) {
  //   if (collection.artist === artist) {
  //     console.log(`${album.artist} ${album.title}`);
  //   }
  // }





// // Create a function called findByArtist that takes in artist and collection parameters
// // Test function with an artist that is in the collection and an artist that isn't in the collection
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
// This function should take in a collection parameter
// Take in a searchCriteria parameter

// function search(collection, searchCriteria) {
//   const results = [];
//   for (let i = 0; i < collection.length; i++) {
//       const album = collection[i];
//       if (searchCriteria.artist && searchCriteria.year) {
//           if (album.artist === searchCriteria.artist && album.year === searchCriteria.year) {
//               results.push(album);
//           }
//       } else if (searchCriteria.artist) {
//           if (album.artist === searchCriteria.artist) {
//               results.push(album);
//           }
//       } else if (searchCriteria.year) {
//           if (album.year === searchCriteria.year) {
//               results.push(album);
//           }
//       }
//   }
//   return results;
// };
// console.log(search(myCollection, { artist: 'Modest Mouse', yearPublished: 2000 }));




// function search(collection, searchCriteria) {
//   let findArtist = [];
//   for (let i = 0; i < collection.length; i++) {
//     if (collection[i].artist === searchCriteria && collection[i].yearPublished === searchCriteria) {
//       findArtist.push(collection[i]);
//     }
//   }
//   return findArtist;

// };
// console.log('Artist that is in my collection', search({artist: 'The Black Keys', yearPublished: 2006}));












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
