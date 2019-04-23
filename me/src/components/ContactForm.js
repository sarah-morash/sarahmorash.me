import React from 'react'
import { useInput } from '../hooks/useInput'
// import firebase from 'firebase'
// import dotenv from 'dotenv'

// const result = dotenv.config();
// const config = {
//     apiKey: process.env.FIREBASE_API,
//     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.FIREBASE_DB_URL,
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.FIREBASE_SENDER_ID
// };

// firebase.initializeApp(config);

const ContactForm = props => {
  const { value: name, bind: bindName, reset: resetName } = useInput('')
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('')
  const { value: message, bind: bindMessage, reset: resetMessage } = useInput(
    ''
  )

  const handleSubmit = evt => {
    evt.preventDefault()

    // console.log(config);

    // const db = firebase.firestore();
    // db.settings({
    //     timestampsInSnapshots: true
    // });
    // const contactEmailRef = db.collection("contact-form-emails").add({
    //     name,
    //     email,
    //     message,
    //     date: new Date()
    // });

    resetName()
    resetEmail()
    resetMessage()
  }

  return (
    <section id="contact">
      <div className="inner">
        <section>
          <form onSubmit={handleSubmit}>
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" {...bindName} />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" {...bindEmail} />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea {...bindMessage} rows="6" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Submit" className="special" />
              </li>
              <li>
                <input type="reset" value="Clear" />
              </li>
            </ul>
          </form>
        </section>
      </div>
    </section>
  )
}

export default ContactForm
