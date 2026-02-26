"use client"
import { useState } from "react"
import axios from "axios"

const Contact = () => {
  const apiBaseUrl = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080").replace(/\/$/, "")

  const [data, setData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // currentTarget = the form element
    const form = e.currentTarget

    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value
    }

    setData(formData)

    try {
      const res = await axios.post(`${apiBaseUrl}/query`, formData)

      if (res.data) {
        alert("Your message has been sent")

        // reset form
        form.reset()
      }

    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="bg-gray-50 py-20">

      <h2 className="text-3xl font-semibold text-center mb-10">
        Contact Us
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-sm space-y-4"
      >

        <input
          name="name"
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-400 to-emerald-600 text-white py-3 rounded-lg hover:opacity-90 transition"
        >
          Send Message
        </button>

      </form>

    </div>
  )
}

export default Contact
