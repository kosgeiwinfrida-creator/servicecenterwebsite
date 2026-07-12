import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Services() {
  const services = [
    { id: 1, name: 'Service A', desc: 'Description A' },
    { id: 2, name: 'Service B', desc: 'Description B' },
    { id: 3, name: 'Service C', desc: 'Description C' },
  ]
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(s => (
            <div key={s.id} className="p-6 border rounded">
              <h3 className="font-semibold mb-2">{s.name}</h3>
              <p className="text-gray-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
