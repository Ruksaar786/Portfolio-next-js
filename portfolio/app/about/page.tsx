import React from "react";
import Container from "../components/ui/container";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Nodejs" },
  { skill: "React" },
  { skill: "Redux" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Radix UI" },
  { skill: "Shadcn" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Mongodb" },
  { skill: "Mysql" },
  { skill: "Prisma client" },
];
const About = () => {
  return (
    <>
      <Container>
        <div className="px-4 flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0  md:flex-row md:text-left">
          <section className="py-6 md:w-1/2 ">
            <h2 className="text-2xl font-semibold">About Me</h2>
            <h3 className="text-xl font-semibold my-2">
              Full-Stack Web Developer
            </h3>
            <p>
              I am a skilled Full-Stack web developer with 6 months hand on
              experience in web development. My expertise includes JavaScript,
              ReactJs, NextJs, Typescript, NodeJS, Express,
              MongoDB,Tailwind-css, Radix-UI, Shadcn. I have experience in
              frontend & backend development, Mern-stack, Nextjs Projects. React
              js & Next js applications and landing pages.
            </p>
            <p className="my-2">
              I have a passion for technology and a desire to always push the
              limits of what is possible. I am excited to see where my career
              takes me and I am always open to new opportunities. 🙂
            </p>
            <br />

            <h3 className="text-xl font-semibold my-2">Education</h3>
            <p className="my-2">
              I have certificates from the SHECODES bootcamp
            </p>

            <br />
            <h3 className="text-xl font-semibold my-2">Experience</h3>
            <h4 className="font-semibold">
              learning opportunity at Velisa academy
            </h4>
            <p className="my-2">
              Technology i cover HTML, CSS, Javascript, React, Redux, Nodejs,
              Express, Mongodb, MERN Stack, Nextjs, Tailwind css.
            </p>
          </section>
          <section className="md:w-1/2 ">
            <div className="text-center md:w-1/2 md:text-left">
              <h1 className="text-2xl font-bold mb-6">My Skills</h1>
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start my-4">
                {skills.map((item, idx) => {
                  return (
                    <p
                      key={idx}
                      className="bg-gray-200 px-4 py-2 mr-2 my-2 text-gray-500 rounded font-semibold"
                    >
                      {item.skill}
                    </p>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </Container>
    </>
  );
};

export default About;
