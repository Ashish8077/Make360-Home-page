import { useState } from "react";
import { SERVICES } from "../../constants/constants";

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    <section className="p-10 bg-gray-100">
      <h2>Services</h2>

      <div className="grid md:grid-cols-4 gap-4">
        {SERVICES.map((s, i) => (
          <div
            key={i}
            onClick={() => setActive(i)}
            className="bg-white p-4 cursor-pointer"
          >
            <h3>{s.title}</h3>
            <p>{s.desc}</p>

            {active === i && <button>Learn More</button>}
          </div>
        ))}
      </div>
    </section>
  );
}
