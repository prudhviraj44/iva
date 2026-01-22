import React from 'react';
import './Contact.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted');
    };

    return (
        <section className="contact-section">
            <h2 className="contact-title">Contact Us</h2>
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Company Email</label>
                        <input required name="email" id="email" type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="textarea">How Can We Help You?</label>
                        <textarea required cols="50" rows="10" id="textarea" name="textarea"></textarea>
                    </div>
                    <button type="submit" className="form-submit-btn">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
