import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900">Contact</h1>
      <p className="mt-3 text-gray-600">
        Have a project, opportunity or question? Send me a message.
      </p>

      <div className="mt-10">
        <ContactForm />
      </div>
    </main>
  );
}