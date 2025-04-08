const Home = () => {
  return (
    <section>
      <div>
        <h1 className="text-4xl font-bold mb-2">Hi, I'm Sung Min An 👋</h1>
        <p className="text-lg text-gray-700 mb-4">
          I'm a full-stack web developer passionate about dynamic, user-friendly applications.
          I enjoy solving problems, working with modern web technologies, and constantly learning new tools to improve my craft.
        </p>
        <p className="text-md text-gray-600">
          I've worked on a variety of projects from travel utilities and social media APIs to full-stack MERN apps
          like book search platforms and content management systems. My GitHub reflects my growth and my exitement 
          for tech-driven solutions.
        </p>
      </div>

      <div className="flex gap-4 mt-4 flex-wrap">
         <a
          href="https://github.com/san1718"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          View GitHub
        </a>
        <button
          href="#about"
          onClick={() => handlePageChange('About')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Learn More About Me
        </button>
        <button
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Explore Projects
        </button>
      </div>

    </section>    
  );
}

export default Home;
