import { useState } from "react"



function About() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Us</h1>
          <p className="mt-4 text-lg text-gray-600">
            We're a passionate team dedicated to creating amazing experiences.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900">Our Mission</h2>
          <p className="mt-4 text-gray-600">
            Our mission is to provide high-quality solutions that help our clients achieve their goals. We believe in
            simplicity, efficiency, and innovation.
          </p>

          {expanded && (
            <p className="mt-4 text-gray-600">
              Founded in 2023, we've been working with clients across various industries to deliver exceptional results
              that exceed expectations.
            </p>
          )}

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900">Our Team</h2>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">Jane Doe</h3>
              <p className="text-gray-500">Founder & CEO</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900">John Smith</h3>
              <p className="text-gray-500">CTO</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Contact us at:{" "}
            <a href="mailto:info@example.com" className="text-gray-700 hover:underline">
              info@example.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About


