type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Rohit Dashaputra Portfolio",
    fullName: "Rohit Dashaputra",
    email: "dasharo46@gmail.com",
  },
  hero: {
    name: "Rohit Dashaputra",
    p: ["Senior @ Vernon Hills High School", "Penn State University CE '29"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm an aspiring computer engineer at 
      Penn State University with a strong foundation in both hardware 
      and software development. My expertise spans embedded systems, 
      circuit design, and low-level programming, along with proficiency 
      in languages like C, Python, and JavaScript. I thrive on problem-solving and innovation, 
      leveraging my skills in microcontroller programming, system optimization, 
      and full-stack development to create efficient and scalable solutions. 
      Whether it's designing hardware-software integrations or developing high-performance applications, 
      I am passionate about engineering technology that drives real-world impact. 
      Let's collaborate to bring cutting-edge ideas to life!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
