export default function ContactForm() {
  return (
    <form className="space-y-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          placeholder="Your Email"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-black px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
      >
        Submit
      </button>
    </form>
  );
}