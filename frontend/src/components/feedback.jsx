import { testimonials } from "../constants/index.jsx"

const feedbackComments = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">Feedback from Users!</h2>
      <div className="flex flex-wrap justify-center">
      {testimonials.map((testimonials, index) => (
        
      ))}
      </div>
    </div>
  )
}

export default feedbackComments