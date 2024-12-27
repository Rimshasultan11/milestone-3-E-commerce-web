import React from 'react'

const page = () => {
  return (
    <div>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
  
    <h2 className="text-2xl font-bold text-center mb-6 text-[#6b7a15] ">Contact Us</h2>
    <form action="#" method="POST">
      <div className="mb-4">
        <label htmlFor="name" className="block  text-[#6b7a15]">Name</label>
        <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Your Name" required />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-[#6b7a15]">Email</label>
        <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Your Email" required />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-[#6b7a15]">Message</label>
        <textarea id="message" name="message" className="w-full p-3 border border-gray-300 rounded-md" rows={4} placeholder="Your Message" required></textarea>
      </div>

      <div className="text-center">
        <button type="submit" className="bg-[#6b7a15] text-white py-2 px-6 rounded-full ">Send Message</button>
      </div>
    </form>
  </div>
</div>

    </div>
  )
}

export default page
