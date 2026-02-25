"use client"
export default function PortfolioProcess() {

  const process = [
    "Client onboarding",
    "Risk profiling",
    "Portfolio creation",
    "Investment execution",
    "Monitoring and reporting"
  ]

  return (
    <section className="py-20 px-10">

      <h2 className="text-4xl font-bold mb-10">
        Our Portfolio Management Process
      </h2>

      <ul className="space-y-4">

        {process.map((step, i) => (
          <li key={i} className="p-4 border rounded-lg">

            {step}

          </li>
        ))}

      </ul>

    </section>
  )
}