import { CheckCircle2 } from "lucide-react"
import { checklistItems } from '../constants/index.jsx'
import codeImg from '../assets/code.jpg'

const codingWorkflow = () => {
  return (
    <div className="">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide mb-5">Accelerate your <span className="bg-blue-500 text-transparent bg-clip-text">coding workflow.</span></h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={codeImg} alt="codeVisual" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex items-start mt-10 space-x-4 space-y-10 mb-8">
              <div className="text-blue-500 mx-6 h-10 w-10 p-2 flex justify-center items-center rounded-full">
                <CheckCircle2 size={30} />
              </div>
              <div className="text-left">
                <h5 className="mt-1 mb-2 text-xl font-semibold">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default codingWorkflow