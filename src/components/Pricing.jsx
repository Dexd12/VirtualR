import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

export default function Pricing() {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text:text-5xl lg:text-6xl text-center my-8 tracking-wider">
        Pricing
      </h2>

      <div className="flex flex-wrap">
        {pricingOptions.map((item, index) => (
          <div key={index} className="w-full lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {item.title}
                {item.title === "Pro" && (
                  <span
                    className="bg-gradient-to-r from-orange-500 to-red-400
                text-transparent bg-clip-text text-xl mb-4 ml-2"
                  >
                    {" "}
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-8 mr-2">{item.price}</span>
                <span className="text-natural-400 tracking-tight">/Month</span>
              </p>
              <ul>
                {item.features.map((feacture, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 className="mr-2" />
                    <span className="ml-2">{feacture}</span>
                  </li>
                ))}
              </ul>
              <a
                href=""
                className="flex justify-center items-center text-center w-full h-12 p-5 mt-20 
              tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition 
              duration-200"
              >
                Subscrite
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
