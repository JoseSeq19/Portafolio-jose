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

      {/* SKILLS */}
      <div className='py-16'>
        <div className='flex items-center justify-between flex-wrap gap-4'>
          <div>
            <h3 className='subhead-text'>Technical Skills</h3>

            <p className='text-slate-500 mt-2'>
              Technologies and tools I currently work with.
            </p>
          </div>
        </div>

        <div className='mt-14 grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-8'>
          {skills.map((skill) => (
            <div
              className='group flex flex-col items-center'
              key={skill.name}
            >
              <div className='block-container w-24 h-24'>
                <div className='btn-back rounded-2xl' />

                <div className='btn-front rounded-2xl flex justify-center items-center group-hover:scale-110 transition-all duration-300'>
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>

              <p className='mt-4 text-slate-700 font-medium text-center'>
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* TIMELINE */}
      <div className='py-8'>
        <h3 className='subhead-text'>Education & Certifications</h3>

        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            My academic background and certifications that have strengthened my
            knowledge in software engineering, networking, cloud technologies,
            and cybersecurity.
          </p>
        </div>

        <div className='mt-14 flex'>
          <VerticalTimeline lineColor='#e2e8f0'>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.title}
                date={experience.date}
                iconStyle={{
                  background: experience.iconBg,
                  color: "#fff",
                }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  background: "#ffffff",
                  color: "#1e293b",
                  borderRadius: "20px",
                  borderBottom: `6px solid ${experience.iconBg}`,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid white",
                }}
              >
                <div>
                  <h3 className='text-slate-900 text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>

                  <p
                    className='text-slate-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-slate-600 font-normal pl-1 text-sm leading-relaxed'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      {/* EXTRA */}
      <div className='bg-slate-50 border border-slate-100 rounded-3xl p-10 mt-10 shadow-sm'>
        <h3 className='text-3xl font-bold font-poppins'>
          Additional Information
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