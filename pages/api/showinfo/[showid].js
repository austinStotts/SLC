export default function handler(req, res) {
  console.log(req.query.showid);
  res.status(200).json({ "showid": req.query.showid })
}