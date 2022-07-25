import pg from "pg";

export default function handler(req, res) {
  let connectionString = "postgres://ebddjabf:u2RaNK1qawGzXy-xatygoQAI94cdkD2q@fanny.db.elephantsql.com/ebddjabf"
  let client = new pg.Client(connectionString);
  console.log(req.query.showid)

  client.connect((err, response) => {
    if(err) {
      console.log(err);
      res.status(404);
      client.end();
    } else {
      client.query(`SELECT * FROM shows WHERE showid = '${req.query.showid}';`)
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
    
  })

  // console.log(req.query.showid);
  
}