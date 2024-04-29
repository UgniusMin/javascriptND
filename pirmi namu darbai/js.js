// 1.

// const catalog = [
//     {
//       category: "Grozine literatura",
//       books: [
//         { ISBN: "GR1236K", year: 2018, title: "Mano mintys debesyse", pages: 300 },
//         { ISBN: "GR4567J", year: 2021, title: "Nauja book", pages: 250 },
//         { ISBN: "GR1234E", year: 2020, title: "Mano mintys debesyse: antra dalis", pages: 350 },
//       ],
//     },
//     {
//       category: "Fantastika",
//       books: [
//         { ISBN: "FANT7890", year: 2019, title: "Laikrodžių vagilė", pages: 400 },
//         { ISBN: "JHGG0613", year: 2023, title: "Geltonu plytu kelias", pages: 100},
//         { ISBN: "MBN12457", year: 2000, title: "Kalbantis suo", pages: 120},
//         { ISBN: "LKJH1867", year: 1800, title: "Call of the nightmares", pages: 300},
//         { ISBN: "FTYU1426", year: 1900, title: "The jount", pages: 100},
//       ],
//     },
//     {
//       category: "Biografijos",
//       books: [
//         { ISBN: "BIO2345H", year: 2017, title: "Steve Jobs", pages: 500 },
//         { ISBN: "MKR8945L", year: 2024, title: "Micheal Bay", pages: 400},
//       ],
//     },
//   ];
  
//   catalog.forEach((category) => {
//     console.log(`${category.category} (${category.books.length} books):`);
//     category.books.forEach((book) => {
//       const newBook = book.year === new Date().getFullYear() ? " (new book)" : "";
//       console.log(`ISBN: ${book.ISBN}, Release year: ${book.year}${newBook}, title: ${book.title}, Page number: ${book.pages}`);
//     });
//   });


// 2.

// function grading(totalPoints, finalEzam = false) {
//     if (totalPoints >= 89 && totalPoints <= 100) {
//         if (finalEzam && totalPoints >= 90) {
//             return true;
//         } else if (!finalEzam) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(grading(95));
// console.log(grading(92, true));
// console.log(grading(85));
// console.log(grading(90));


// 3.

// function tikrintiDiapazona(number) {
//     return number >= 40 && number <= 10000;
// }

// console.log(tikrintiDiapazona(40));
// console.log(tikrintiDiapazona(4000));
// console.log(tikrintiDiapazona(10000));
// console.log(tikrintiDiapazona(20));
// console.log(tikrintiDiapazona(50000));


// 4. Neveikia

// function makeNewLine(line) {
//     if (line.charAt(0) === 'P' && line.charAt(line.length - 1) === 'P') {
//         return line.substring(1, line.length - 1);
//     } else {
//         return line;
//     }
// }

// console.log(makeNewLine("Programing"));
// console.log(makeNewLine("Python"));
// console.log(makeNewLine("JavaScript"));
