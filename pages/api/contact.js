export default function handler(req, res){
  if(req.method !== 'POST') return res.status(405).json({error:'Method not allowed'})
  const { name, email, message } = req.body || {}
  // TODO: add persistence/email
  console.log('Contact form submitted', { name, email, message })
  return res.status(200).json({ ok:true })
}
