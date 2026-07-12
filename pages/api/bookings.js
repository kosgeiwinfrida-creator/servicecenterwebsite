export default function handler(req, res){
  if(req.method !== 'POST') return res.status(405).json({error:'Method not allowed'})
  const { name, email, service, datetime } = req.body || {}
  console.log('Booking requested', { name, email, service, datetime })
  // TODO: store booking
  return res.status(200).json({ ok:true })
}
