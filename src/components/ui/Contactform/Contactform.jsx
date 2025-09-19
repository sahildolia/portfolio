import { useState } from 'react';
import './Contactform.css';

const Contactform = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setSubmitMessage('Please enter your name');
      return false;
    }
    
    if (!formData.email.trim()) {
      setSubmitMessage('Please enter your email');
      return false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setSubmitMessage('Please enter a valid email address');
      return false;
    }
    
    if (!formData.subject.trim()) {
      setSubmitMessage('Please enter a subject');
      return false;
    }
    
    if (!formData.message.trim()) {
      setSubmitMessage('Please enter your message');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
const response = await fetch('https://portfolio-backend-lrtj.onrender.com/api/email/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});

    const data = await response.json();
    if (!response.ok) {
      if (data.errors && Array.isArray(data.errors)) {
        const errorMessages = data.errors.map(error => error.msg).join(', ');
        throw new Error(errorMessages || 'Validation failed');
      }
      throw new Error(data.message || 'Failed to send message');
    }
    setSubmitMessage('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
   
      setSubmitMessage('Message sent successfully!');
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="p-8 rounded-lg">
            <h1 className="text-2xl font-bold mb-6">Message Me</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-md focus:outline-none fieldFocus"
                    placeholder="Your Name"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-md focus:outline-none fieldFocus"
                    placeholder="Your Email"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              <div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-md focus:outline-none fieldFocus"
                  placeholder="Subject"
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-md focus:outline-none fieldFocus"
                  placeholder="Your Message"
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              {submitMessage && (
                <div className={`p-3 rounded-md text-center ${
                  submitMessage.includes('successfully') 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  {submitMessage}
                </div>
              )}
              
              <button
                type="submit"
                className="w-full sendBtn text-white font-medium py-3 px-4 rounded-md transition-colors duration-300 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          
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
  );
};

export default Contactform;