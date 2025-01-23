

"use client";

export default function About() {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-indigo-900 min-h-screen flex items-center justify-center text-white">
      <div className="max-w-4xl p-8 bg-white bg-opacity-10 rounded-2xl shadow-lg backdrop-blur-md">
        {/* Header Section */}
        <h1 className="text-4xl font-extrabold mb-4 text-center text-white">
          Welcome to <span className="text-yellow-300">Tomo's World</span> 🌟
        </h1>
        <p className="text-lg text-gray-300 text-center mb-8">
          Discover what makes <strong>Tomo</strong> unique, innovative, and inspiring.
        </p>

        {/* About Tomo */}
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-yellow-300 mb-2">Who is Tomo?</h2>
            <p className="text-gray-300 leading-relaxed">
              <strong>Tomo</strong> is not just an idea—it's a movement. A beacon of innovation, 
              creativity, and technology combined to make life simpler and more meaningful.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-300 mb-2">Mission & Vision 🚀</h2>
            <p className="text-gray-300 leading-relaxed">
              At <strong>Tomo</strong>, we aim to bring the world closer together by blending 
              state-of-the-art technology with human connection. Our vision is to empower individuals 
              and communities by providing tools, resources, and experiences that elevate their lives.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-300 mb-2">Why Choose Tomo?</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                💡 <strong>Innovative Solutions:</strong> Constantly evolving to meet your needs.
              </li>
              <li>
                🌍 <strong>Global Reach:</strong> Bringing people together from around the world.
              </li>
              <li>
                🎨 <strong>Creative Thinking:</strong> Always pushing the boundaries of imagination.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-300 mb-2">Join Us 🌐</h2>
            <p className="text-gray-300 leading-relaxed">
              Ready to take the leap into the future? Join the <strong>Tomo</strong> community and 
              embark on a journey of innovation and connection. Together, let's shape a brighter tomorrow.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <button className="px-6 py-2 bg-yellow-300 text-indigo-900 font-bold rounded-full hover:bg-yellow-400 shadow-md">
            Learn More About Tomo
          </button>
        </div>
      </div>
    </div>
  );
}
