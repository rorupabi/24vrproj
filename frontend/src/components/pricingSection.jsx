import { CheckCircle2 } from "lucide-react"
import { pricingOptions } from '../constants/index.jsx'

const pricingSection = () => {
  return (
    <div className="mt-10">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">Pricing</h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className=" w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8 flex items-center">
                {option.title}
                {option.title === "Pro" && <span className="text-blue-500 text-xl mt-2 ml-2">({""}Favored!)</span>}
              </p>
              <div className="flex items-center mb-6">
                <span className="text-5xl font-semibold mr-2">{option.price}</span>
                <span className="text-neutral-400 text-lg tracking-wide">/Month</span>
              </div>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 className="text-blue-500" />
                    <span className="ml-4">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-12 tracking-tight text-xl border rounded-xl hover:bg-gray-300 duration-300 cursor-pointer">Subscribe</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default pricingSection