export default function ContactForm() {
  return (
    <form>
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea placeholder="Your Message" />
      <button type="submit">Send Message</button>
    </form>
  );
}