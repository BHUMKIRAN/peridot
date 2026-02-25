"use client"
export default function HowPMSWorks() {

  const steps = [
    "Understand your financial goals",
    "Create personalized investment strategy",
    "Invest in diversified assets",
    "Monitor and manage portfolio",
    "Provide regular reports"
  ]

  return (
    <section className="bg-gray-50 py-20 px-10">

      <h2 className="text-4xl font-bold mb-10">
        How PMS Works
      </h2>

      <div className="grid grid-cols-5 gap-6">

        {steps.map((step, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow">

            <h3 className="font-bold text-emerald-600 mb-2">
              Step {i + 1}
            </h3>

            <p className="text-gray-600">
              {step}
            </p>

          </div>
        ))}

      </div>

    </section>
  )
}