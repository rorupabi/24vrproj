import { testimonials } from "../constants/index.jsx";

const FeedbackComments = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        Feedback from Users!
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            {/* Card Wrapper with consistent height */}
            <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin flex flex-col justify-between h-full">

              {/* Testimonial Text (Expands to fill space) */}
              <p className="text-justify flex-grow">{testimonial.text}</p>

              {/* User Info Section (Centered) */}
              <div className="flex flex-col items-start text-center mt-8">
                {/* User Profile Image */}
                <img
                  className="w-12 h-12 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt={testimonial.user}
                />
                <h6 className="mt-2 font-semibold">{testimonial.user}</h6>
                <span className="text-sm font-normal italic text-neutral-600">
                  {testimonial.company}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackComments;