const Timeline = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Innovators Inc.",
      period: "2022 - Present",
      description: "Led development of cloud-native applications using React and Node.js. Improved system performance by 40%.",
      skills: ["React", "Node.js", "AWS", "Docker"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description: "Developed and maintained multiple web applications. Implemented CI/CD pipelines reducing deployment time by 60%.",
      skills: ["TypeScript", "MongoDB", "Express", "Git"]
    },
    {
      title: "Frontend Developer",
      company: "Creative Web Agency",
      period: "2018 - 2020",
      description: "Created responsive web interfaces and improved user experience across multiple client projects.",
      skills: ["JavaScript", "CSS", "HTML", "Vue.js"]
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="w-full max-w-[1440px] mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent 
                      bg-gradient-to-r from-cyan-400 to-purple-400 
                      drop-shadow-[0_0_8px_rgba(0,243,255,0.3)]">
          Experience Timeline
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-cyan-500 to-cyan-300" />
              
              {/* Timeline content */}
              <div className="ml-6 transform hover:scale-105 transition-transform duration-300">
                <div className="bg-black/40 p-6 rounded-lg border border-cyan-500/30 backdrop-blur-sm 
                              hover:border-cyan-400 shadow-lg hover:shadow-cyan-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-cyan-400">{exp.title}</h3>
                    <span className="text-sm text-cyan-300 px-3 py-1 rounded-full 
                                   bg-cyan-900/30 border border-cyan-500/30">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-lg text-cyan-300 mb-3">{exp.company}</h4>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span key={idx} 
                            className="px-3 py-1 text-sm bg-cyan-900/50 text-cyan-300 
                                     rounded-full border border-cyan-500/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Timeline dot */}
              <div className="absolute left-[-8px] top-6 w-4 h-4 rounded-full bg-cyan-500 
                            shadow-lg shadow-cyan-500/50 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline; 