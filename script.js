'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: {},
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('How many films do you wathed?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('How many films do you wathed?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const firstQuestion = prompt('One of the last wathed films?', ''),
                  secondQuestion = +prompt('How much do you like it?', '');
            
            if (firstQuestion != null && secondQuestion != null && firstQuestion != '' && secondQuestion != '' && firstQuestion.length < 50) {
                personalMovieDB.movies[firstQuestion] = secondQuestion;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectMyPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Common');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Liker');
        } else if (personalMovieDB.count >= 30) {
            console.log('Kinomania');
        } else {
            console.log('error');
        }
    },
    writeYourGenres: function() {
        // for (let i = 1; i < 4; i++) {
        //     let genre = prompt(`Your favourite genre numbre ${i}`);

        //     if (genre === '' || genre === null) {
        //         console.log('Incorrect');
        //         i--;
        //     } else {
        //         personalMovieDB.genres[i - 1] = genre;
        //     }
        // }

        for (let i = 1; i < 2; i++) {
            let genres = prompt('Your favourite films');

            if (genres === '' || genres === null) {
                console.log('inscorresct');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favourite genre number ${i + 1}: is ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat === false) {
            personalMovieDB.privat = true;
        } else if (personalMovieDB.privat === true){
            personalMovieDB.privat = false;
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat === false){
            console.log(personalMovieDB);
        }
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectMyPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB);
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();

// let i = 0;

// while (i < 2) {
    
//     const a = prompt('One of the last wathed films?', ''),
//           b = +prompt('How much do you like it?', '');
    
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }

//     i++;
// }

// let i = 0;

// do {
//     const a = prompt('One of the last wathed films?', ''),
//           b = +prompt('How much do you like it?', '');
    
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//         i++;
//     } else {
//         console.log('error');
//         i--;
//     }

// } while (i < 2);
