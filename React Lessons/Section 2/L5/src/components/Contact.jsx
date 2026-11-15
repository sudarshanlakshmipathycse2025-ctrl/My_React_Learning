export default function Contact() {
    return (
        <div className="contact-card">
            <h1>Contact Us</h1>

            <p>
                We would love to hear from you!
            </p>

            <div className="contact-info">
                <p><strong>Name:</strong> Mr.Whiskerson</p>
                <p><strong>Email:</strong> mrwhiskerson@catnap.meow</p>
                <p><strong>Phone:</strong> (212) 555-1234</p>
            </div>

            <form>
                <input
                    type="text"
                    placeholder="Your Name"
                />

                <input
                    type="email"
                    placeholder="Your Email"
                />

                <textarea
                    placeholder="Your Message"
                    rows="5"
                ></textarea>

                <button type="submit">
                    Send Message
                </button>
            </form>
        </div>
    );
}
