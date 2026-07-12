import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700">We are a local service center committed to quality and customer satisfaction.</p>
      </main>
      <Footer />
    </div>
  )
}
