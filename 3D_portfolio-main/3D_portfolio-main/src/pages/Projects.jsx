import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className='max-container px-6 py-12'>
      {/* Header */}
      <div className='text-center max-w-3xl mx-auto'>
        <p className='text-sm uppercase tracking-widest text-blue-500 font-semibold'>
          Portfolio
        </p>

        <h1 className='head-text mt-2'>
          Featured{" "}
          <span className='blue-gradient_text drop-shadow font-semibold'>
            Projects
          </span>
        </h1>

        <p className='text-slate-500 mt-6 leading-relaxed text-lg'>
          Systems Engineering student passionate about full-stack development,
          cloud technologies, databases, and software architecture. Here are
          some of the projects I’ve developed throughout my academic journey.
        </p>
      </div>

      {/* Skills */}
      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
        {[
          "Java",
          "Spring Boot",
          "SQL Server",
          "ASP.NET MVC",
          "Microsoft Azure",
          "AWS",
          "JavaScript",
          "Git & GitHub",
        ].map((skill) => (
          <div
            key={skill}
            className='bg-white shadow-md border border-slate-100 rounded-2xl p-5 text-center hover:shadow-xl transition-all duration-300'
          >
            <p className='font-semibold text-slate-700'>{skill}</p>
          </div>
        ))}
      </div>
      {/* About Section */}
      <div className='bg-slate-50 rounded-3xl p-10 shadow-sm border border-slate-100'>
        <h2 className='text-3xl font-bold font-poppins'>
          About My Experience
        </h2>

        <p className='text-slate-600 mt-5 leading-relaxed'>
          I am currently pursuing a Bachelor's degree in Systems Engineering at
          Universidad Fidélitas in Costa Rica. My experience includes developing
          full-stack applications, working with relational databases, applying
          MVC architecture, and collaborating in team-based software projects.
        </p>

        <p className='text-slate-600 mt-4 leading-relaxed'>
          I also hold certifications in Scrum, Networking, Cybersecurity, Python
          Programming, Data Science, and Microsoft Azure Cloud Services.
        </p>
      </div>

      <hr className='border-slate-200 my-14' />

      <CTA />
    </section>
  );
};

export default Projects;