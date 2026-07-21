import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import './Testimonials.css';

const experiences = [
  {
    role: 'B.Tech Information Technology',
    org: 'Army Institute of Technology (AIT), Pune',
    period: '2025 - Present',
    location: 'Pune, Maharashtra',
    description: 'Currently in my second year, pursuing B.Tech in Information Technology. Actively involved in coding competitions, hackathons, and building full-stack web applications using the MERN stack.',
    type: 'education',
    current: true,
  },
  {
    role: 'Joint Secretary',
    org: 'College Innovation and Development Club (CIDC), AIT Pune',
    period: '2025 - Present',
    location: 'AIT Pune',
    description: 'Serving as Joint Secretary of CIDC, making Projects, driving innovation initiatives, organizing technical events, workshops, and hackathons. Leading a team to foster a culture of creativity, collaboration, and technical growth across the campus community.',
    type: 'experience',
    current: true,
  },
  {
    role: 'Full Stack Web Developer',
    org: 'Self-Learning',
    period: '2025 - Present',
    location: 'online',
    description: 'Developed and delivered responsive websites for clients including a restaurant website and a gym website. Handled complete project lifecycle from requirements gathering to deployment.',
    type: 'experience',
    current: true,
  },
  {
    role: 'DSA & Competitive Programming',
    org: 'Self-Learning',
    period: '2024 - Present',
    location: 'Online',
    description: 'Solved 200+ problems across multiple platforms. Achieved a Codeforces rating of 980 and solved 100+ problems on LeetCode. Continuously improving problem-solving skills through daily practice and contest participation.',
    type: 'experience',
    current: true,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % experiences.length);
  const prev = () => setCurrent((prev) => (prev - 1 + experiences.length) % experiences.length);

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section__title">My Journey</h2>
          <p className="section__subtitle">A timeline of my education and experience so far.</p>
        </motion.div>

        <div className="testimonials__wrapper">
          <div className="testimonials__timeline">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                className={`testimonials__dot ${i === current ? 'testimonials__dot--active' : ''} ${i <= current ? 'testimonials__dot--passed' : ''}`}
                onClick={() => setCurrent(i)}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="testimonials__dot-inner" />
                {i < experiences.length - 1 && <div className="testimonials__dot-line" />}
              </motion.div>
            ))}
          </div>

          <div className="testimonials__card-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="testimonials__card glass-card"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.35 }}
              >
                <div className="testimonials__card-type">
                  {experiences[current].type === 'education' ? 'Education' : 'Experience'}
                </div>
                <h3 className="testimonials__card-role">{experiences[current].role}</h3>
                <h4 className="testimonials__card-org">{experiences[current].org}</h4>
                <div className="testimonials__card-meta">
                  <span className="testimonials__card-meta-item">
                    <FiCalendar size={14} /> {experiences[current].period}
                  </span>
                  {experiences[current].location && (
                    <span className="testimonials__card-meta-item">
                      <FiMapPin size={14} /> {experiences[current].location}
                    </span>
                  )}
                </div>
                <p className="testimonials__card-desc">{experiences[current].description}</p>
                {experiences[current].current && (
                  <span className="testimonials__card-current">Currently Active</span>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="testimonials__nav">
              <button className="testimonials__nav-btn" onClick={prev} aria-label="Previous">
                <FiChevronLeft size={20} />
              </button>
              <span className="testimonials__nav-count">
                {current + 1} / {experiences.length}
              </span>
              <button className="testimonials__nav-btn" onClick={next} aria-label="Next">
                <FiChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
