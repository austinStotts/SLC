const { Client, Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    ssl: {
        rejectUnauthorized: false
    }
});

export default async function handler(req, res) {
  let client;
  try {
    client = await pool.connect();
    console.log(req.query.showid);
    if(req.query.search == 'all') {
      let result = await client.query(`SELECT * FROM shows ORDER BY id DESC;`)
      res.status(200).json({ "data": result });
    } else if (req.query.search == "all-abc") {
      let result = await client.query(`SELECT * FROM shows ORDER BY showid ASC;`)
      res.status(200).json({ "data": result });
    } else if (req.query.search == "all-zyx") {
      let result = await client.query(`SELECT * FROM shows ORDER BY showid DESC;`)
      res.status(200).json({ "data": result });
    } else {
      let result = await client.query(`SELECT * FROM shows WHERE showid LIKE '%${req.query.search}%';`)
      res.status(200).json({ "data": result });
    }
  } catch (error) {
    console.log(error);
  } finally {
    if(client) {
      client.release();
    }
  }
}


  // client.connect((err, response) => {
  //   if(err) {
  //     console.log(err);
  //     res.status(404);
  //     client.end();
  //   } else {
  //     if(req.query.search == 'all') {
  //       // console.log("ALL!!")
  //       client.query(`SELECT * FROM shows ORDER BY id DESC;`)
  //       .then(response => {
  //         // console.log(response);
  //         res.status(200).json({ "data": response });
  //         client.end();
  //       }).catch(err => {
  //         console.log(err);
  //         res.status(404);
  //         client.end();
  //       })
  //     } else if(req.query.search == "all-abc") {
  //       client.query(`SELECT * FROM shows ORDER BY showid ASC;`)
  //       .then(response => {
  //         // console.log(response);
  //         res.status(200).json({ "data": response });
  //         client.end();
  //       }).catch(err => {
  //         console.log(err);
  //         res.status(404);
  //         client.end();
  //       })
  //     } else if(req.query.search == "all-zyx") {
  //       client.query(`SELECT * FROM shows ORDER BY showid DESC;`)
  //       .then(response => {
  //         // console.log(response);
  //         res.status(200).json({ "data": response });
  //         client.end();
  //       }).catch(err => {
  //         console.log(err);
  //         res.status(404);
  //         client.end();
  //       })
  //     } else {
  //       client.query(`SELECT * FROM shows WHERE showid LIKE '%${req.query.search}%';`)
  //       .then(response => {
  //         // console.log(response);
  //         res.status(200).json({ "data": response });
  //         client.end();
  //       }).catch(err => {
  //         console.log(err);
  //         res.status(404);
  //         res.send()
  //         client.end();
  //       })
  //     }
  //   }
    
  // })
// }