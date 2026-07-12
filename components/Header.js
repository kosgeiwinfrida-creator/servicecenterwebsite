export default function Header(){
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold">Service Center</a>
        <nav className="space-x-4">
          <a href="/services" className="text-gray-700">Services</a>
          <a href="/about" className="text-gray-700">About</a>
          <a href="/contact" className="text-gray-700">Contact</a>
          <a href="/book" className="text-blue-600 font-semibold">Book</a>
        </nav>
      </div>
    </header>
  )
}
