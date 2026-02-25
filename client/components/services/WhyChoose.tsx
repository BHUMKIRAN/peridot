"use client"
export default function WhyChoose() {

  const reasons = [
    "Expert Portfolio Managers",
    "Personalized Investment Strategy",
    "Transparent Reporting",
    "Risk Management",
    "Proven Track Record",
    "Client-focused approach"
  ]

  return (
    <section className="py-20 px-10">

      <h2 className="text-4xl font-bold mb-10">
        Why Ace Legacy Holdings for PMS
      </h2>

      <div className="grid grid-cols-3 gap-6">

        {reasons.map((reason, i) => (
          <div key={i} className="p-6 shadow rounded-lg">

            <p className="font-semibold">
              {reason}
            </p>

          </div>
        ))}

      </div>

    </section>
  )
}