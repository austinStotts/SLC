import pg from "pg";

export default function handler (req, res) {
  
  let connectionString = "postgres://ebddjabf:u2RaNK1qawGzXy-xatygoQAI94cdkD2q@fanny.db.elephantsql.com/ebddjabf"
  let client = new pg.Client(connectionString);
  console.log(req.query.showid)
  if(req.query.showid == 'undefined') {
    console.log('undefined');
    res.status(500)
    res.send()
  } else {

  
    client.connect((err, response) => {
      if(err) {
        console.log(err);
        client.end();
        res.status(500)
        res.send();
        
      } else {
        client.query(`SELECT * FROM shows WHERE showid = '${req.query.showid}';`)
        .then(response => {
          // console.log(response);
          client.end();
          res.write(JSON.stringify(response))
          res.status(200)
          res.send()
          //res.send()//.json({ "data": response });
        }).catch(err => {
          console.log(err);
          client.end();
          res.status(500)
          res.send()
        })
      }
    })
  }
  // console.log(req.query.showid);
  
}