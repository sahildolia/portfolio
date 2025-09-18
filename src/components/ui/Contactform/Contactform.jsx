import './Contactform.css'
const Contactform = () => {
  return (
    <>
       <div className="min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className=" p-8 rounded-lg">
         <h1 className="text-2xl font-bold mb-6">Message Me</h1>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-md focus:outline-none fieldFocus"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3  rounded-md focus:outline-none fieldFocus"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              
              <div>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3  rounded-md focus:outline-none fieldFocus"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3  rounded-md focus:outline-none fieldFocus"
                  placeholder="Your Message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full sendBtn text-white font-medium py-3 px-4 rounded-md transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Contact info</h2>
            <p className="text-gray-300 mb-8">
              Always available for freelance work if the right project comes along. Feel free to contact me!
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-1">Name</h3>
                <p className="text-white">Sahil Dolia</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-1">Location</h3>
                <p className="text-white">Mohali, Punjab, India.</p>
              </div>
              
              
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-1">Email Me</h3>
                <p className="text-white">sahildolia.456@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
    </>
  )
}

export default Contactform