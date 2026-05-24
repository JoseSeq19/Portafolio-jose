import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container px-6 py-12'>
      {/* HERO */}
      <div className='max-w-4xl'>
        <p className='text-sm uppercase tracking-widest text-blue-500 font-semibold'>
          About Me
        </p>

        <h1 className='head-text mt-2'>
          Hello, I'm{" "}
          <span className='blue-gradient_text font-semibold drop-shadow'>
            José Andrés
          </span>{" "}
          👋
        </h1>

        <div className='mt-6 flex flex-col gap-4 text-slate-600 text-lg leading-relaxed'>
          <p>
            Systems Engineering student at Universidad Fidélitas in Costa Rica,
            passionate about full-stack development, software architecture,
            databases, cloud computing, and cybersecurity.
          </p>

          <p>
            I enjoy building scalable and clean applications while continuously
            learning modern technologies and best development practices.
          </p>
        </div>
      </div>

      {/* EXTRA */}
      <div className='bg-slate-50 border border-slate-100 rounded-3xl p-10 mt-10 shadow-sm'>
        <h3 className='text-3xl font-bold font-poppins'>
           Information 
        </h3>

        <div className='mt-6 grid md:grid-cols-2 gap-8'>
          <div>
            <h4 className='font-semibold text-slate-800 text-lg'>
              Languages
            </h4>

            <ul className='mt-3 text-slate-600 space-y-2'>
              <li>• Spanish — Native</li>
              <li>• English — B2 Upper-Intermediate</li>
            </ul>
          </div>

          <div>
            <h4 className='font-semibold text-slate-800 text-lg'>
              Areas of Interest
            </h4>

            <ul className='mt-3 text-slate-600 space-y-2'>
              <li>• Full-Stack Web Development</li>
              <li>• Cloud Computing</li>
              <li>• Cybersecurity</li>
              <li>• Software Architecture</li>
            </ul>
          </div>
        </div>
      </div>

      <hr className='border-slate-200 my-16' />

      <CTA />
    </section>
  );
};

export default About;