import React from 'react'
import './RecrutementForm.css'
import Nav from '../components/Nav';
export default function RecrutementForm() {
    
  return (
    <div className='rec-form-page'>
        <Nav/>
        <h2 className='title-rec-form'>Formulaire de recrutement</h2>
    <form action="http://localhost:8000/recrutement" method="POST" enctype="multipart/form-data" className="recruitment-form" >
    <label htmlFor="name">Name</label>
    <input type="text" id="name" name="name"  />

    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" required/>
    <label htmlFor="profession">profession</label>
    <input type="text" id="profession" name="profession" required  />

    <label htmlFor="cv-file">Insérez votre CV </label>
    <input type="file" id="cv-file" name="cv" accept=".pdf"  required/>
    <label htmlFor="lm-file">Insérez votre LM </label>
    <input type="file" id="lm-file" name="ldm" accept=".pdf"  required/>

    <button type="submit" value="Send Message">Submit</button>
  </form>
    </div>
  )
}
