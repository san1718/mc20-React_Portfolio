export default function Projects() {
  return (
    <section>
      <div>
        <h1>Projects</h1>
        <p>These are some of the projects I have been working on.</p>
      </div>

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

    </section>
  );
}
