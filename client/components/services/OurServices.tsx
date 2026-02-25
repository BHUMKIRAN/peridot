"use client"
export default function OurServices() {

  const services = [
    {
      title: "Individual Portfolio Management",
      desc: "Custom investment portfolio tailored to individual goals."
    },
    {
      title: "Wealth Management",
      desc: "Comprehensive wealth growth and protection strategies."
    },
    {
      title: "Investment Planning",
      desc: "Strategic planning for long-term financial success."
    },
    {
      title: "Risk Management",
      desc: "Protect investments through diversification."
    }
  ]

  return (
    <section className="bg-gray-50 py-20 px-10">

      <h2 className="text-4xl font-bold mb-10">
        Our Services
      </h2>

      <div className="grid grid-cols-2 gap-8">

        {services.map((service, i) => (
          <div key={i} className="bg-white p-6 shadow rounded-lg">

            <h3 className="font-bold text-xl mb-2">
              {service.title}
            </h3>

            <p className="text-gray-600">
              {service.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  )
}