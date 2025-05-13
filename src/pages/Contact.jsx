import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaBluesky, FaX, FaXTwitter } from 'react-icons/fa6';

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_qpv10ii',
      'template_wkvnc7o',
      form.current,
      'TixOwhIh85ppX472o'
    ).then(
      () => {
        setSent(true);
        form.current.reset();
      },
      (error) => {
        console.error(error.text);
      }
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-2 py-8">
      <h1 className="text-4xl text-[rgb(245,118,118)] font-lilex font-normal text-center mb-8">Get In Touch!</h1>
  
      <div className="flex flex-col items-center gap-8">
        {/* social icons */}
        <div className="flex gap-6 text-4xl justify-center">
          <a href="https://www.linkedin.com/in/cbui3/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-gray-600 hover:text-[rgb(86,162,238)] hover:scale-130 transition-transform duration-120" />
          </a>
          <a href="https://github.com/christopherbui" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-600 hover:text-[rgb(181,114,232)] hover:scale-130 transition-transform duration-120" />
          </a>
          <a href="mailto:cbui3@pm.me">
            <FaEnvelope className="text-gray-600 hover:text-[rgb(106,188,104)] hover:scale-130 transition-transform duration-120" />
          </a>
          <a href="https://bsky.app/profile/christopherbui.bsky.social" target="_blank" rel="noopener noreferrer">
            <FaBluesky className="text-gray-600 hover:text-[rgb(86,162,238)] hover:scale-130 transition-transform duration-120" />
          </a>
          <a href="https://x.com/chrisbui_" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="text-gray-600 hover:text-black hover:scale-130 transition-transform duration-120" />
          </a>
        </div>
  
        {/* email form */}
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 w-full max-w-xl">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="input input-bordered w-full border-[2px] border-neutral-500 rounded-md focus:outline-none focus:border-none focus:ring-2 focus:ring-[rgb(245,118,118)]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="input input-bordered w-full border-[2px] border-neutral-500 rounded-md focus:outline-none focus:border-none focus:ring-2 focus:ring-[rgb(245,118,118)]"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            className="textarea textarea-bordered w-full h-32 border-[2px] border-neutral-500 rounded-md focus:outline-none focus:border-none focus:ring-2 focus:ring-[rgb(245,118,118)]"
          />
{!sent ? (
  <button
    type="submit"
    className="w-full px-4 py-2 rounded-md text-white bg-[rgb(245,118,118)] hover:bg-[rgb(225,98,98)] font-lilex transition"
  >
    Send
  </button>
) : (
  <div className="w-full px-4 py-2 rounded-md bg-white text-[rgb(245,118,118)] text-md text-center font-lilex">
    Sent!
  </div>
)}

        </form>
      </div>
    </div>
  );
  
}
