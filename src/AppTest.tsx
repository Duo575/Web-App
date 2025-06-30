/**
 * Test App Component - Minimal version for debugging
 */

function AppTest() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Portfolio Website</h1>
          <p className="text-xl text-gray-300">Test page is working!</p>
          <div className="mt-8 p-6 bg-gray-800 rounded-lg">
            <h2 className="text-2xl mb-4">Contact Section Test</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 bg-gray-700 text-white rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 bg-gray-700 text-white rounded"
              />
              <textarea
                placeholder="Message"
                className="w-full p-3 bg-gray-700 text-white rounded h-24"
              />
              <button
                type="submit"
                className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppTest;
