import React, { useState, useEffect } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import Nav from './components/Nav';

function App() {
  // State variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [isCaptchaVisible, setIsCaptchaVisible] = useState(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [reCaptchaSiteKey, setReCaptchaSiteKey] = useState("");

  useEffect(() => {
    // Fetch the reCAPTCHA site key from your server when the component mounts
    axios.get('http://localhost:4000/getRecaptchaSiteKey')
      .then(response => {
        setReCaptchaSiteKey(response.data.siteKey);
      })
      .catch(error => {
        console.error('Error fetching reCAPTCHA site key:', error);
      });
  }, []);

  // Handler for reCAPTCHA verification
  const onChanger = () => {
    setIsCaptchaVerified(true);
  };

  // Handler for input field changes
  const handleFieldChange = (field, value) => {
    if (field === 'name') {
      setName(value);
    } else if (field === 'email') {
      setEmail(value);
    } else if (field === 'comment') {
      setComment(value);
    }

    // Show the reCAPTCHA if all required fields are filled
    if (name !== '' && email !== '' && comment !== '') {
      setIsCaptchaVisible(true);
    } else {
      setIsCaptchaVisible(false);
    }
  };

  // Submit form to Notion API
  async function submitFormNotion() {
    
    // Form validation
    if (name === '' || email === '' || comment === '') {
      toast.error('Please fill out all input fields completely');
      return;
    }

    if (!/^[A-Za-z\s]+$/.test(name)) {
      toast.error('Name should only contain letters and spaces');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Email is invalid. Please try again');
      return;
    }

    if (comment.length > 5000) {
      toast.error('Comment should not exceed 5000 characters');
      return;
    }

    if (!isCaptchaVerified) {
      toast.error('Please complete the reCAPTCHA');
      return;
    }

    try {
      const url = 'http://localhost:4000/submitFormToNotion';
      const data = {
        name: name,
        email: email,
        comment: comment,
      };

      const response = await axios.post(url, data);

      if (response.status === 200) {
        const submitButton = document.getElementById('submit-button');
    
        submitButton.disabled = true;
       
        setTimeout(() => {
          if (submitButton.disabled === true) {
            submitButton.disabled = false;
          }
        }, 5000);

        toast.success('Form Submitted Successfully', {
          autoClose: 1000, // Set the autoClose option to 1000 milliseconds (1 second)
        });
        // Reload the page after 2 seconds
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } 
        
      
    } catch (error) {
      console.error('Error: ', error);
      if (error.response && error.response.status === 429) {
          toast.error("API rate limit exceeded. Please try again later.");
      } else {
        toast.error('Network response was not okay');
      }
    }
  }

  return (
    <div className='App mt-10'>
      <Nav />
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundImage: 'url(https://github.com/Sridhar-C-25/space-tourism-website_react_tailwind/blob/main/src/assets/background.jpg?raw=true)' }}>
        <div className="container mx-auto mt-8">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url(https://coda.newjobs.com/api/imagesproxy/ms/cms/content30/images/hot-it-jobs.jpg)' }}>
              {/* Add any content you want for the left side */}
            </div>
            <div className="form-container w-full text-black lg:w-1/2 py-16 px-12 bg-opacity-10">
              <div className='head'>
                <h1 className="text-4xl mb-4 text-black text-center font-bold">Feedback Form</h1>
              </div>
              <div className='form'>
                <div className="mt-5">
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="border border-gray-400 py-2 px-3 w-full rounded-lg focus:outline-none focus:border-purple-500 hover:opacity-90 transition-opacity"
                    onChange={(e) => handleFieldChange('name', e.target.value)}
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="text"
                    id="email"
                    placeholder="Email"
                    className="border border-gray-400 py-2 px-3 w-full rounded-lg focus:outline-none focus:border-purple-500 hover:opacity-90 transition-opacity"
                    onChange={(e) => handleFieldChange('email', e.target.value)}
                  />
                </div>
                <div className="mt-5">
                  <textarea
                    id="comment"
                    rows={6}
                    cols={25}
                    placeholder="Comment"
                    className="border border-gray-400 py-2 px-3 w-full rounded-lg focus:outline-none focus:border-purple-500 hover:opacity-90 transition-opacity"
                    onChange={(e) => handleFieldChange('comment', e.target.value)}
                  ></textarea>
                </div>
                {isCaptchaVisible && (
                  <div className="mt-5 flex justify-center animate-bounce">
                    <ReCAPTCHA
                      sitekey={reCaptchaSiteKey}
                      onChange={onChanger}
                    />
                  </div>
                )}
                <div className="mt-5">
                  <button id ="submit-button" className="w-full bg-purple-500 py-3 text-center text-white rounded-lg hover:bg-purple-600" onClick={submitFormNotion}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
