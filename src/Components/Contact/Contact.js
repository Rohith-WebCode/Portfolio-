import React from 'react'
import './Contact.css'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "64f3c349-2c49-4461-8e6b-9ffac405063f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };
  return (
    <div className='Contact'>
      <div className='contact-container'>
         <div class="contact-info">
          <h1 className='head'>&lt;Contact&gt;</h1>
          <p>Just give me a message whenever and however you want and we will start our cooperation.</p>
          <p>MY PHONE:</p>
          <p>+91 8590566352</p>
          <p>EMAIL:</p>
          <p>rohithprakash19@gmail.com</p>
         </div>
         <div className='contact-form'>
         <form onSubmit={onSubmit} action="#" method="post">
                <input type="text" id="name" name="name" placeholder="Name" required />
                <input type="email" id="email" name="email" placeholder="Email" required />
                <textarea className='message' name="message" placeholder="Your Message." required></textarea>
                <button type="submit">SEND</button>
            </form>
         </div>
      </div>
    </div>
  )
}

export default Contact