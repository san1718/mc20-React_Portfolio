const Contact = () => {
  return (
    <section className="contact p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mt-6 mb-2">Let's Connect</h2>
      <p>
        I'm always eager to collaborate on innovative projects and expand my
        horizons in the tech industry. I'm always open to new opportunities,
        collaborations, or just a friendly chat about tech. Feel free to reach
        out to me through the platforms below:
      </p>
      <ul className="mt-2">
        <li>
          💻{" "}
          <a
            href="https://github.com/san1718"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            GitHub
          </a>
        </li>
        <li>
          💼{" "}
          <a
            href="https://www.linkedin.com/in/san1718"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            LinkedIn
          </a>
        </li>
        <li>
          📧{" "}
          <a
            href="mailto:gripsaitesting@gmail.com?subject=Contact from website&body=Hello, I wanted to reach out to you regarding..."
            className="text-blue-600 underline"
          >
            Email
          </a>
        </li>
      </ul>

      {/* Contact form - can use Formspree or EmailJS to customize or add stuff, align stuff after */}
      {/*             
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name: </label>
          <input
            type="text"
            className="w-full border rounded p-2"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email: </label>
          <input
            type="email"
            className="w-full border rounded p-2"
            placeholder="Your email"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Message: </label>
          <textarea
            className="w-full border rounded p-2"
            placeholder="Your message"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
      */}
    </section>
  );
};

export default Contact;
