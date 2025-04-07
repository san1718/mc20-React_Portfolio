// About Me section for portfolio

const About = () => {
  return (
    <section className="about-me p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="mb-4">
        {/* Introduction */}
        Hello! I'm <strong>Sung Min An</strong>, a passionate and dedicated developer with a strong
        foundation in full-stack web development. My journey in coding has been marked by continuous
        learning and hands-on experience, leading to the creation of diverse projects that showcase
        my skills and growth in the field.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">My Development Journey</h3>
      <p className="mb-4">
        {/* Flexibility on projects */}
        From the outset, I've been committed to building applications that are both functional and
        user-friendly. My projects reflect a progression from fundamental web technologies to more
        complex frameworks and APIs, illustrating my adaptability and eagerness to embrace new
        challenges.
      </p>

      <h3 className="text-2xl font-semibold mt-6 mb-2">Key Projects</h3>
      <ul className="list-disc list-inside space-y-4">
        {/* Links to projects */}
        <li>
          {/* Currency convenience p1 */}
          <a
            href="https://github.com/san1718/P1G2-Currency-Convenience"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Currency Convenience
          </a>{' '}
          - A comprehensive tool designed to assist travelers by providing real-time currency
          exchange rates and weather updates for their destinations.
        </li>
        <li>
          {/* README generator */}
          <a
            href="https://github.com/san1718/mc09-Professional_README_Generator"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Professional README.md Generator
          </a>{' '}
          - An efficient command-line application that automates the creation of professional README
          files, streamlining the documentation process for developers.
        </li>
        <li>
          <a
            href="https://github.com/san1718/mc14_TheBlogSpacer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            The Blog Spacer
          </a>{' '}
          - A CMS-style blog platform that empowers users to create accounts, publish posts, and
          engage with a community through comments, fostering interactive discussions.
        </li>
        <li>
          <a
            href="https://github.com/san1718/mc18-Social_Network_API"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Social Network API
          </a>{' '}
          - A robust backend API for a social networking application, enabling users to share
          thoughts, react to friends' posts, and manage their social connections seamlessly.
        </li>
        <li>
          <a
            href="https://github.com/san1718/mc21-Book_Search_Engine/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Book Search & Save
          </a>{' '}
          - A full-stack application that allows users to search for books and save their favorites,
          integrating the Google Books API for comprehensive search capabilities.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-2">Skills and Technologies</h3>
      <ul className="list-disc list-inside mb-6">
        <li>Front-End: HTML, CSS, JavaScript, React</li>
        <li>Back-End: Node.js, Express.js</li>
        <li>Databases: MongoDB, MySQL</li>
        <li>Other Tools: Git, GitHub, REST APIs, Mongoose, Sequelize, JWT, GraphQL</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-2">Let's Connect</h3>
      <p>
        I'm always eager to collaborate on innovative projects and expand my horizons in the tech
        industry.
      </p>
      <ul className="mt-2">
        <li>
          📌{' '}
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
          📌{' '}
          <a
            href="https://www.linkedin.com/in/san1718"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </section>
  );
};

export default About;
