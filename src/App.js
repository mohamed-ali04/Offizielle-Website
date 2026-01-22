import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import {
  Code2,
  ChefHat,
  Dumbbell,
  Mail,
  GraduationCap,
  Sparkles,
  Terminal,
  Github,
  Linkedin,
  Send,
} from "lucide-react";

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);


  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflowX = "hidden";
    document.body.style.background = "#0a0a0a";
    document.documentElement.style.margin = "0";
    document.documentElement.style.padding = "0";
    document.documentElement.style.overflowX = "hidden";

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:mohammeed.ali04@gmail.com?subject=${encodeURIComponent(`Bewerbungsanfrage von ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nE-Mail: ${formData.email}\n\nNachricht:\n${formData.message}`)}`;
    window.location.href = mailtoLink;

    setFormData({ name: "", email: "", message: "" });
    setShowContactForm(false);
  };

  const techStack = [
    {
      name: "HTML",
      color: "#E44D26",
      logo: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
        </svg>
      ),
    },
    {
      name: "CSS",
      color: "#264DE4",
      logo: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
        </svg>
      ),
    },
    {
      name: "JavaScript",
      color: "#F7DF1E",
      logo: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
        </svg>
      ),
    },
    {
      name: "React",
      color: "#61DAFB",
      logo: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
        </svg>
      ),
    },
    {
      name: "Vue.js",
      color: "#42B883",
      logo: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z" />
        </svg>
      ),
    },

    {
      name: "Node.js",
      color: "#339933",
      logo: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
        </svg>
      ),
    },
  ];

  // techStackExtended is no longer directly used for the second scrolling strip,
  // but could be kept for other purposes if intended.

  const skills = [
    { name: "JavaScript", level: "Fortgeschritten", percent: 75 },
    { name: "HTML", level: "Fortgeschritten", percent: 75 },
    { name: "CSS", level: "Fortgeschritten", percent: 75 },
    { name: "React", level: "Grundkenntnisse", percent: 40 },
    { name: "Vue.js", level: "Grundkenntnisse", percent: 40 },
  ];

  const hobbies = [
    {
      icon: ChefHat,
      title: "Kochen",
      description: "Kreativität in der Küche",
    },
    {
      icon: Code2,
      title: "Programmieren",
      description: "Leidenschaft für Code",
    },
    {
      icon: Dumbbell,
      title: "Fitness",
      description: "Körper & Geist in Balance",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#fff",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        overflowX: "hidden",
      }}
    >
      {/* Navigation */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          background: "rgba(10, 10, 10, 0.8)",
          backdropFilter: "blur(10px)",
          padding: isMobile ? "16px 24px" : "20px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 1000,
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <a
            href="https://github.com/mohamed-ali04"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#888",
              textDecoration: "none",
              fontSize: "14px",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
          >
            <Github size={20} />
            {!isMobile && "GitHub"}
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-ali04/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#888",
              textDecoration: "none",
              fontSize: "14px",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
          >
            <Linkedin size={20} />
            {!isMobile && "LinkedIn"}
          </a>
          <a
            href="/Lebenslauf Mohamed Ali .pdf"
            download="bewerbugsunterlagen Mohamed Ali.pdf"
            target="_blank"
            style={{
              background: "#ff6b6b",
              color: "#fff",
              border: "none",
              padding: isMobile ? "6px 12px" : "8px 20px",
              borderRadius: "6px",
              fontSize: isMobile ? "12px" : "14px",
              fontWeight: "600",
              cursor: "pointer",
              textDecoration: "none",
              transition: "all 0.3s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#ff5252")}
            onMouseLeave={(e) => (e.target.style.background = "#ff6b6b")}
          >
            {isMobile ? "CV" : "Lebenslauf"}
          </a>
        </div>

        {!isMobile && (
          <div style={{ display: "flex", gap: "32px" }}>
            <button
              onClick={() => scrollToSection("about")}
              style={{
                background: "none",
                border: "none",
                color: "#888",
                cursor: "pointer",
                fontSize: "14px",
                transition: "color 0.3s",
                padding: 0,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
            >
              Über mich
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              style={{
                background: "none",
                border: "none",
                color: "#888",
                cursor: "pointer",
                fontSize: "14px",
                transition: "color 0.3s",
                padding: 0,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              style={{
                background: "none",
                border: "none",
                color: "#888",
                cursor: "pointer",
                fontSize: "14px",
                transition: "color 0.3s",
                padding: 0,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
            >
              Kontakt
            </button>
          </div>
        )}
      </nav>
      {/* Hero Section */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: isMobile ? "100px 24px 48px" : "120px 48px 48px",
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            width: "100%",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "48px" : "80px",
            alignItems: "center",
          }}
        >
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              style={{
                fontSize: isMobile ? "36px" : "56px",
                fontWeight: "bold",
                marginBottom: "16px",
                lineHeight: "1.2",
              }}
            >
              Hi! I'm <span style={{ color: "#ff6b6b" }}>Mohamed Ali</span>
            </h1>
            <p
              style={{
                fontSize: isMobile ? "18px" : "24px",
                color: "#888",
                marginBottom: "32px",
              }}
            >
              Ich bin auf der Suche nach einer Ausbildung zum Fachinformatiker für Anwendungsentwicklung, um meine Kenntnisse in der Webentwicklung weiter auszubauen und praktische Erfahrung in der Softwareentwicklung zu sammeln.
            </p>
            <p
              style={{
                fontSize: isMobile ? "14px" : "16px",
                color: "#666",
                lineHeight: "1.8",
                marginBottom: "40px",
              }}
            >
              Ich bin ein kreativer Problemlöser und Content-Creator 
              mit Leidenschaft für moderne Webtechnologien. 
              Mit React, Vue.js und JavaScript entwickle ich benutzerfreundliche und ansprechende Weblösungen.
            </p>

            <button
              onClick={() => setShowContactForm(true)}
              style={{
                background: "#ff6b6b",
                color: "#fff",
                border: "none",
                padding: "14px 30px",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.background = "#ff5252")}
              onMouseLeave={(e) => (e.target.style.background = "#ff6b6b")}
            >
              <Send size={18} />
              Kontaktiere mich
            </button>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: isMobile ? "250px" : "500px",
                height: isMobile ? "250px" : "500px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid rgba(255, 107, 107, 0.3)",
                boxShadow: "0 20px 60px rgba(102, 126, 234, 0.4)",
                position: "relative",
              }}
            >
              <img
                src="/Foto.jpg"
                alt="Mohamed Ali"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Icons with Scrolling Effect - Second Row (Left to Right) - Same Size */}
        <div
          style={{
            position: "absolute",
            bottom: isMobile ? "0px" : "10px",
            left: 0,
            right: 0,
            overflow: "hidden",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 80%, transparent)",
          }}
        >
          <motion.div
            animate={{
              x: [-3000, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
            style={{
              display: "flex",
              gap: isMobile ? "20px" : "32px",
              paddingLeft: "0%",
            }}
          >
            {[...techStack, ...techStack, ...techStack].map((tech, index) => (
              <div
                key={`${tech.name}-second-${index}`}
                style={{
                  padding: isMobile ? "14px 18px" : "18px 40px",
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "50px",
                  fontSize: isMobile ? "16px" : "40px",
                  color: "#ddd",
                  border: " node",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  transition: "all 11.9s",
                }}
              >
                <div
                  style={{
                    color: tech.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: isMobile ? "32px" : "40px",
                    height: isMobile ? "32px" : "40px",
                    transform: "scale(1.9)",
                  }}
                >
                  {tech.logo}
                </div>
                <span style={{ fontWeight: "600" }}>{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        style={{
          padding: isMobile ? "48px 24px" : "96px 48px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? "32px" : "48px",
            fontWeight: "bold",
            marginBottom: "48px",
            textAlign: "center",
          }}
        >
          Über mich
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: "32px",
          }}
        >
        
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              background: "rgba(255,255,255,0.05)",
              padding: "32px",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.1)",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.transform = "translateY(-8px)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.transform = "translateY(0)";
              }
            }}
            >

            <GraduationCap
              size={40}
              style={{ color: "#ff6b6b", marginBottom: "16px" }}
            />
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "8px",
              }}
            >
              Bildung
            </h3>
            <p style={{ color: "#888", lineHeight: "1.6" }}>
              Auf der Suche nach einer Ausbildung als Fachinformatiker für
              Anwendungsentwicklung.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              background: "rgba(255,255,255,0.05)",
              padding: "32px",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.1)",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.transform = "translateY(-8px)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.transform = "translateY(0)";
              }
            }}
          >
            <Terminal
              size={40}
              style={{ color: "#667eea", marginBottom: "16px" }}
            />
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "8px",
              }}
            >
              Erfahrung
            </h3>
            <p style={{ color: "#888", lineHeight: "1.6" }}>
              Grundkenntnisse in JavaScript, HTML, CSS, React und Vue.js.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              background: "rgba(255,255,255,0.05)",
              padding: "32px",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.1)",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.transform = "translateY(-8px)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.transform = "translateY(0)";
              }
            }}
          >
            <Sparkles
              size={40}
              style={{ color: "#ffd93d", marginBottom: "16px" }}
            />
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "8px",
              }}
            >
              Motivation
            </h3>
            <p style={{ color: "#888", lineHeight: "1.6" }}>
              Schnell lernend, technikbegeistert und praxisorientiert.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        style={{
          padding: isMobile ? "48px 24px" : "96px 48px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? "32px" : "48px",
            fontWeight: "bold",
            marginBottom: "48px",
            textAlign: "center",
          }}
        >
          IT-Skills & Technologien
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: "24px",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                background: "rgba(255,255,255,0.05)",
                padding: "24px",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div
                style={{
                  display: "felx",
                  justifyContent: "space-between",
                  marginBottom: "12px",
                }}
              >
                <h3 style={{ fontSize: "18px", fontWeight: "600" }}>
                  {skill.name}
                </h3>
                <span style={{ color: "#888", fontSize: "14px" }}>
                  {skill.level}
                </span>
              </div>
              <div
                style={{
                  height: "8px",
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percent}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    height: "100%",
                    background:
                      "linear-gradient(90deg, #ff6b6b 0%, #667eea 100%)",
                    borderRadius: "4px",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
       {/* Projects Section */}
      <section id="projects" style={{
        padding: isMobile ? '48px 24px' : '96px 48px',
        maxWidth: '700px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: isMobile ? '32px' : '48px',
          fontWeight: 'bold',
          marginBottom: '48px',
          textAlign: 'center'
        }}>
          Meine Projekte
        </h2>

        <div style={{
          background: 'rgba(0, 0, 0, 0.05)',
          borderRadius: '24px',
          padding: isMobile ? '24px' : '48px',
          border: '1px solid rgba(255,255,255,0.1)',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div 
              style={{
                width: '100%',
                maxWidth: '700px',
                aspectRatio: '16/9',
                background: '#000',
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                cursor: 'pointer'
              }}
              onMouseEnter={() => videoRef.current?.play()}
              onMouseLeave={() => videoRef.current?.pause()}
            >
              {/* <video 
                ref={videoRef}
                controls
                muted
                loop
                playsInline
                poster="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              > */ }
                {/* Placeholder video - User should replace this 
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                Ihr Browser unterstützt das Video-Tag nicht.
              </video>*/}
            </div> 
              
            

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginTop: '24px',
              background: 'rgba(97, 218, 251, 0.1)',
              padding: '10px 24px',
              borderRadius: '30px',
              border: '1px solid rgba(97, 218, 251, 0.3)'
            }}>
              <div style={{ 
                color: '#61DAFB', 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="currentColor" style={{ animation: 'spin 10s linear infinite' }}>
                  <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
                  <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034-.46 0-.915-.01-1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
                </svg>
              </div>
              <span style={{ color: '#61DAFB', fontWeight: '600', fontSize: '16px' }}>React</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section
        style={{
          padding: isMobile ? "48px 24px" : "96px 48px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? "32px" : "48px",
            fontWeight: "bold",
            marginBottom: "48px",
            textAlign: "center",
          }}
        >
          Meine Hobbies
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: "32px",
          }}
        >
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            return (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "32px",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  textAlign: "center",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.transform = "translateY(-8px)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }
                }}
              >
                <Icon
                  size={48}
                  style={{ color: "#ff6b6b", margin: "0 auto 16px" }}
                />
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginBottom: "8px",
                  }}
                >
                  {hobby.title}
                </h3>
                <p style={{ color: "#888" }}>{hobby.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          padding: isMobile ? "48px 24px" : "96px 48px",
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? "32px" : "48px",
            fontWeight: "bold",
            marginBottom: "24px",
          }}
        >
          Kontaktiere mich
        </h2>
        <p
          style={{
            color: "#888",
            fontSize: isMobile ? "15px" : "16px",
            lineHeight: "1.6",
            marginBottom: "40px",
          }}
        >
          Ich suche ein Unternehmen, das mir die Chance gibt, zu lernen, zu
          wachsen und Teil eines innovativen Teams zu werden.
        </p>
        <button
          onClick={() => setShowContactForm(true)}
          style={{
            background: "#ff6b6b",
            color: "#fff",
            border: "none",
            padding: "14px 32px",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.background = "#ff5252")}
          onMouseLeave={(e) => (e.target.style.background = "#ff6b6b")}
        >
          <Mail size={18} />
          Nachricht senden
        </button>
      </section>

      {/* Contact Form Popup */}
      {showContactForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.9)",
            backdropFilter: "blur(12px)",
            zIndex: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={() => setShowContactForm(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{
              background: "#1a1a1a",
              borderRadius: "16px",
              padding: isMobile ? "24px" : "32px",
              maxWidth: "500px",
              width: "100%",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "24px",
              }}
            >
              <h3
                style={{
                  fontSize: isMobile ? "20px" : "24px",
                  fontWeight: "bold",
                }}
              >
                Kontaktiere mich
              </h3>
              <button
                onClick={() => setShowContactForm(false)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#888",
                  fontSize: "32px",
                  cursor: "pointer",
                  padding: 0,
                  lineHeight: 1,
                }}
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "16px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "500",
                    marginBottom: "8px",
                    color: "#ccc",
                  }}
                >
                  Ihre Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                    fontSize: "16px",
                    color: "#fff",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                  placeholder="Max Mustermann"
                />
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "500",
                    marginBottom: "8px",
                    color: "#ccc",
                  }}
                >
                  Ihre E-Mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                    fontSize: "16px",
                    color: "#fff",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                  placeholder="max@beispiel.de"
                />
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "500",
                    marginBottom: "8px",
                    color: "#ccc",
                  }}
                >
                  Ihre Nachricht
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  rows="4"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                    fontSize: "16px",
                    color: "#fff",
                    outline: "none",
                    resize: "none",
                    boxSizing: "border-box",
                  }}
                  placeholder="Schreiben Sie mir eine Nachricht..."
                />
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  background: "#ff6b6b",
                  color: "#fff",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "none",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.background = "#ff5252")}
                onMouseLeave={(e) => (e.target.style.background = "#ff6b6b")}
              >
                Nachricht senden
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}

      {/* Footer */}
      <footer
        style={{
          padding: isMobile ? "40px 24px" : "48px",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: "32px",
            marginBottom: "32px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "8px",
                color: "#ccc",
              }}
            >
              Telefon
            </p>
            <p style={{ fontSize: "14px", color: "#888" }}>015255465517</p>
          </div>
          <div>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "8px",
                color: "#ccc",
              }}
            >
              E-Mail
            </p>
            <p style={{ fontSize: "14px", color: "#888" }}>
              mohammeed.ali04@gmail.com
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "8px",
                color: "#ccc",
              }}
            >
              Social Media
            </p>
            <div
              style={{
                display: "flex",
                gap: "16px",
                justifyContent: isMobile ? "center" : "center",
              }}
            >
              <a
                href="https://github.com/mohamed-ali04"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#888", transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.target.style.color = "#fff")}
                onMouseLeave={(e) => (e.target.style.color = "#888")}
              >
                <Github size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-ali04/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#888", transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.target.style.color = "#fff")}
              >
                <Linkedin size={30} />
              </a>
            </div>
          </div>
        </div>
        <p style={{ fontSize: "13px", color: "#666" }}>
          © 2025 Mohamed Ali. Erstellt mit ❤️ und Code
        </p>
      </footer>
    </div>
  );
}
