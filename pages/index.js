import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Service Center</h1>
          <p className="text-lg text-gray-700 mb-6">Fast, reliable service for all your needs.</p>
          <a href="/book" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md">Book a Service</a>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border rounded">Service A</div>
            <div className="p-6 border rounded">Service B</div>
            <div className="p-6 border rounded">Service C</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
