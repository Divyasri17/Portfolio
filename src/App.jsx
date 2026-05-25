import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
function App() {
  const skills = [
    {
      id: 1,
      img: "https://i.pinimg.com/1200x/8d/0c/72/8d0c72f49aaa0a6a35d34c7b98035baa.jpg",
      name: "Core Java",
    },

    {
      id: 2,
      img: "https://i.pinimg.com/736x/79/0d/a7/790da74a0b1c69dd3093fecc9a781afb.jpg",
      name: "SQL",
    },

    {
      id: 3,
      img: "https://i.pinimg.com/1200x/fb/1e/7f/fb1e7f9db2540c3194a9179094a925e2.jpg",
      name: "HTML",
    },

    {
      id: 4,
      img: "https://i.pinimg.com/736x/da/30/69/da30697068c26ddb9d9aa603889480d9.jpg",
      name: "CSS",
    },

    {
      id: 5,
      img: "https://i.pinimg.com/1200x/28/b0/d1/28b0d189571e22609f0e9378da7b09a4.jpg",
      name: "Java Script",
    },

    {
      id: 6,
      img: "https://i.pinimg.com/736x/47/17/0a/47170ad4d8aaa814852aea62d3cdec88.jpg",
      name: "Spring",
    },

    {
      id: 7,
      img: "https://i.pinimg.com/1200x/b4/07/2d/b4072de9bdae2a3942db5a085a8c95b6.jpg",
      name: "Spring Boot",
    },

    {
      id: 8,
      img: "https://i.pinimg.com/736x/0f/65/58/0f6558f88fb457e68f92c042df252892.jpg",
      name: "React.js",
    },
  ];

  const projects = [
    {
      id: 1,
      img: "https://i.pinimg.com/1200x/0a/bf/2b/0abf2b05785994522cedaedd4e6db007.jpg",
      name: "Recipe Finder",
      expanation:
        "A recipe search application where users can search for recipes like dosa, pizza, biryani, and more. When the application starts, all recipes are displayed, and users can easily find different varieties of recipes using the search feature.",
      git: "https://github.com/Divyasri17/RecipeFinder",
      livelink: "https://recipe-finder-divyasri.vercel.app/",
    },

    {
      id: 2,
      img: "https://i.pinimg.com/736x/e2/5d/a4/e25da4c25502689e6ebc3200f55df728.jpg",
      name: "Cart",
      expanation:
        "A shopping cart application that implements cart functionality such as adding items to the cart, removing items.",
      git: "https://github.com/Divyasri17/cart",
      livelink: "https://cart-gamma-tan.vercel.app/",
    },

    {
      id: 3,
      img: "https://i.pinimg.com/736x/90/28/af/9028af234b3d98375ff13e298da4ad10.jpg",
      name: "Student Form",
      expanation:
        "A student form application used to collect and manage student details through a user-friendly form interface with input handling and validation.",
      git: "https://github.com/Divyasri17/Form",
      livelink: "https://form-zeta-two-20.vercel.app/",
    },

    {
      id: 4,
      img: "https://i.pinimg.com/736x/32/b9/59/32b9599cba0a361e50caed2be558f15b.jpg",
      name: "Light And Dark Mode",
      expanation:
        "A theme switcher application that provides light and dark mode functionality, allowing users to change the website theme for a better user experience.",
      git: "https://github.com/Divyasri17/LightAndDarkMode",
      livelink: "https://lightanddarkmode-pi.vercel.app/",
    },

    {
      id: 5,
      img: "https://i.pinimg.com/736x/b1/7e/02/b17e028bd37c454aef6f2d6fdd8b7c09.jpg",
      name: "Login & Signup",
      expanation:
        "A login authentication project where users can log in using valid details. If the entered details are incorrect, it displays an error message. Users can also log out after successfully logging in.",
      git: "https://github.com/Divyasri17/LoginPage",
      livelink: "https://login-page-git-main-divyasri.vercel.app/",
    },

    {
      id: 6,
      img: "https://i.pinimg.com/1200x/f2/18/9e/f2189e3d990b2eead3fa482ac14bd00e.jpg",
      name: "ToDo App",
      expanation:
        "A task management application that allows users to add, update, complete, and delete daily tasks to improve productivity and task organization.",
      git: "https://github.com/Divyasri17/TodoList",
      livelink: "https://app-git-main-divyasri.vercel.app/",
    },

    {
      id: 7,
      img: "https://i.pinimg.com/1200x/f0/d0/70/f0d07019bf78575f3e8d53ac5949a8ff.jpg",
      name: "Food Delivery",
      expanation:
        "A full-stack food delivery application developed using Java Servlets and SQL. It is a real-world backend project that includes restaurant management, menu items, add/remove food items, ordering system, payment functionality, and other food delivery features.",
    },

    {
      id: 8,
      img: "https://i.pinimg.com/736x/ee/fe/8a/eefe8a5dedd2c00d984750ad82e3324e.jpg",
      name: "Ecommerce",
      expanation:
        "A full-stack ecommerce website for men, women, and kids with different product categories and multiple product sections. The project includes product listing, shopping features, category-based navigation, and an attractive user interface.",
    },
  ];
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY",
      )
      .then(
        () => {
          alert("Message Sent Successfully");
        },
        () => {
          alert("Failed to Send Message");
        },
      );

    e.target.reset();
  };
  return (
    <>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="home" id="home">
        <p>Hi this's</p>

        <h1>Divya Sree</h1>

        <h2>A Java Full Stack Developer</h2>

        <a href="/Divyasree_Resume.pdf" download>
          <button className="resume-btn">Download Resume</button>
        </a>
      </div>

      <div className="about" id="about">
        <h1>About Me</h1>

        <p>
          I am an aspiring Full Stack Developer passionate about building
          responsive and user-friendly web applications. I enjoy creating modern
          UI designs, solving problems, and continuously improving my
          development skills through real-world projects.
        </p>
      </div>

      <div className="skills-section" id="skills">
        <h1>Skills</h1>

        <div className="skills">
          {skills.map((s) => (
            <div key={s.id}>
              <img src={s.img} alt={s.name} />

              <h2>{s.name}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="project-section" id="projects">
        <h1>Projects</h1>

        <div className="project">
          {projects.map((p) => (
            <div key={p.id}>
              <img src={p.img} alt={p.name} />

              <h2>{p.name}</h2>

              <p>{p.expanation}</p>

              {p.git && (
                <a href={p.git} target="_blank">
                  <button
                    style={{
                      marginLeft: "20px",
                      marginTop: "10px",
                    }}
                  >
                    GitHub
                  </button>
                </a>
              )}

              {p.livelink && (
                <a href={p.livelink} target="_blank">
                  <button
                    style={{
                      float: "right",
                      marginRight: "20px",
                      marginTop: "10px",
                    }}
                  >
                    Live Demo
                  </button>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="contact" id="contact">
        <h1>Contact Me</h1>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Enter Your Name" />

          <input
            type="email"
            name="user_email"
            placeholder="Enter Your Email"
          />

          <textarea name="message" placeholder="Enter Your Message"></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className="social-icons">
          <a href="mailto:divyasripasupala17@gmail.com">
            <FaEnvelope />
          </a>

          <a href="tel:+91 8978920458">
            <FaPhone />
          </a>

          <a
            href="https://www.linkedin.com/in/divya-sri-b852a3294/"
            target="_blank"
          >
            <FaLinkedin />
          </a>

          <a href="https://github.com/Divyasri17" target="_blank">
            <FaGithub />
          </a>
        </div>
      </div>
    </>
  );
}

export { App };
