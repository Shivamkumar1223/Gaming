import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/gamepad.svg" // You'll need to add this icon
              alt="Gaming Logo"
              width={40}
              height={40}
              priority
            />
            <span className="text-2xl font-bold text-green-500">GameZone</span>
          </div>
          <div className="flex gap-6">
            <a href="#games" className="hover:text-green-500">Games</a>
            <a href="#news" className="hover:text-green-500">News</a>
            <a href="#tournaments" className="hover:text-green-500">Tournaments</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Welcome to GameZone</h1>
          <p className="text-xl text-gray-400">Your Ultimate Gaming Destination</p>
        </div>

        {/* Featured Games */}
        <section id="games" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((game) => (
              <div key={game} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
                <div className="h-48 bg-gray-700"></div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Game Title {game}</h3>
                  <p className="text-gray-400">Experience amazing gameplay with stunning graphics.</p>
                  <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">
                    Play Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tournament Section */}
        <section id="tournaments" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Live Tournaments</h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-bold mb-2">Pro League Finals</h3>
                <p className="text-gray-400">Prize Pool: $100,000</p>
                <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">
                  Register Now
                </button>
              </div>
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-bold mb-2">Amateur Cup</h3>
                <p className="text-gray-400">Prize Pool: $25,000</p>
                <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-center py-6">
        <div className="container mx-auto">
          <p>&copy; 2024 GameZone. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
