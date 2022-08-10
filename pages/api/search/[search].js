import pg from "pg";

// import purl from "../../../purl.json";

console.log(process.env.PURL)
export default function handler(req, res) {
  let connectionString = process.env.PURL;
  let client = new pg.Client(connectionString);
  console.log(req.query.showid)

  client.connect((err, response) => {
    if(err) {
      console.log(err);
      res.status(404);
      client.end();
    } else {
      if(req.query.search == 'all') {
        console.log("ALL!!")
        client.query(`SELECT * FROM shows;`)
        .then(response => {
          // console.log(response);
          res.status(200).json({ "data": response });
          client.end();
        }).catch(err => {
          console.log(err);
          res.status(404);
          client.end();
        })
      } else {
        client.query(`SELECT * FROM shows WHERE showid = '${req.query.search}';`)
        .then(response => {
          // console.log(response);
          res.status(200).json({ "data": response });
          client.end();
        }).catch(err => {
          console.log(err);
          res.status(404);
          client.end();
        })
      }
    }
    
  })
}