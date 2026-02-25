import React from 'react'

const Team = () => {
     const teamMembers = [
    {
      name: "Kiran Khatri",
      role: "Founder & CEO",
      image: "https://i.pravatar.cc/300?img=1",
    },
    {
      name: "Aarav Sharma",
      role: "Lead Developer",
      image: "https://i.pravatar.cc/300?img=2",
    },
    {
      name: "Sofia Williams",
      role: "Financial Analyst",
      image: "https://i.pravatar.cc/300?img=3",
    },
    {
      name: "Emily Chen",
      role: "Product Designer",
      image: "https://i.pravatar.cc/300?img=4",
    },
  ]
  return (
    <div className="bg-gray-50 py-20">

        <h2 className="text-3xl font-semibold text-center mb-12">
          Meet Our Team
        </h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">

          {teamMembers.map((member, index) => (

            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center"
            >

              <img
                src={member.image}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />

              <h3 className="font-semibold text-lg">
                {member.name}
              </h3>

              <p className="text-gray-500 text-sm">
                {member.role}
              </p>

            </div>

          ))}

        </div>

      </div>
  )
}

export default Team