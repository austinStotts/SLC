// let pg = require("pg");
// let shows = require("./map.json");

// let connectionString = "postgres://ebddjabf:u2RaNK1qawGzXy-xatygoQAI94cdkD2q@fanny.db.elephantsql.com/ebddjabf"
// let client = new pg.Client(connectionString);
// let i = 6;
// console.log("start", i)
// let showid = shows.shows[i].showid;
// let json = JSON.stringify(shows.shows[i]);
// console.log('\n',showid,'\n',json)
// client.connect((err, response) => {
//   if(err) {
//     console.log(err);
//     client.end();
//   } else {
//     client.query(`INSERT INTO shows(showid, showjson) VALUES('${showid}', '${json}');`)
//     // client.query(`DELETE FROM shows WHERE showid = '${showid}';`)
//     .then(response => {
//       console.log("CREATED: ", shows.shows[i].name);
//       client.end();
//     }).catch(err => {
//       console.log(err);
//       client.end();
//     })
//   }
// })

// // for(let i = 0; i < shows.shows.length;i++) {
// //   console.log(JSON.stringify(shows.shows[i]))
// // }
export default function () {
  console.log("hello");
}