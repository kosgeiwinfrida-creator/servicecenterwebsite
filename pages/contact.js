import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  async function submit(e) {
    e.preventDefault()
    setStatus('loading')
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) setStatus('success')
    else setStatus('error')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <form onSubmit={submit} className="max-w-lg">
          <label className="block mb-2">Name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full border p-2 rounded"/></label>
          <label className="block mb-2">Email<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="w-full border p-2 rounded"/></label>
          <label className="block mb-2">Message<textarea required value={form.message} onChange={e=>setForm({...form,message:e.target.value})} className="w-full border p-2 rounded"/></label>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded mt-2">Send</button>
          {status==='success' && <p className="text-green-600 mt-2">Message sent.</p>}
          {status==='error' && <p className="text-red-600 mt-2">Error sending message.</p>}
        </form>
      </main>
      <Footer />
    </div>
  )
}
