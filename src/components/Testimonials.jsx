import { testimonials } from "../constants";
export default function Testimonials() {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What people are saying
      </h2>

      <div className="flex flex-wrap justify-center">
        {testimonials.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-natural rounded-md p-6 text-md border border-neutral-800 font-thin">
              <p>{item.text}</p>
              <div className="flex mt-5">
                <img
                  className="w-12 h-12 rounded-full mr-6"
                  src={item.image}
                  alt={item.user}
                />
                <div>
                  <h6>
                    <strong>{item.user}</strong>
                  </h6>
                  <span>{item.company}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
