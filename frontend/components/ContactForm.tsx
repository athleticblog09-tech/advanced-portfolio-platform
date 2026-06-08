export default function ContactForm() {
  return (
    <form>
      <div>
        <label>Name</label>
        <input type="text" placeholder="Your Name" />
      </div>

      <div>
        <label>Email</label>
        <input type="email" placeholder="Your Email" />
      </div>

      <div>
        <label>Message</label>
        <textarea placeholder="Your Message" />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}