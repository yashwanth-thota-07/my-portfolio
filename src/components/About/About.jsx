import { motion } from 'framer-motion';
import { FiCode, FiCoffee, FiBookOpen, FiAward } from 'react-icons/fi';
import { useScrollReveal, useCounter } from '../../hooks/useAnimations';
import './About.css';

const stats = [
  { icon: FiCode, label: 'Projects', value: 10, suffix: '+' },
  { icon: FiCoffee, label: 'Problems Solved', value: 200, suffix: '+' },
  { icon: FiBookOpen, label: 'Technologies', value: 12, suffix: '+' },
  { icon: FiAward, label: 'Certifications', value: 3, suffix: '' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
};

function StatCard({ stat, index }) {
  const [ref, count] = useCounter(stat.value, 2000);
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      className="about__stat glass-card"
      custom={index}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="about__stat-icon">
        <Icon size={24} />
      </div>
      <div className="about__stat-value">
        {count}{stat.suffix}
      </div>
      <div className="about__stat-label">{stat.label}</div>
    </motion.div>
  );
}

export default function About() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section__title">About Me</h2>
          <p className="section__subtitle">Get to know who I am and what drives me.</p>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="about__text glass-card">
              <p>
                I'm a passionate second-year B.Tech Information Technology student at the
                <span className="gradient-text"> Army Institute of Technology (AIT), Pune</span>.
                My journey in technology began with a deep curiosity about how things work on the web,
                which quickly evolved into a love for building full-stack applications.
              </p>
              <p>
                I specialize in the <span className="gradient-text">MERN stack</span> and have hands-on
                experience building authentication systems, REST APIs, and client-facing websites.
                When I'm not coding, you'll find me grinding problems on LeetCode and HackerRank,
                constantly sharpening my problem-solving skills.
              </p>
              <p>
                Completed my schooling from <span className="gradient-text">Army Public School</span>,
                where I developed a strong foundation in academics and a disciplined approach to learning.
                I believe in writing clean, maintainable code and building applications that make a real impact.
              </p>

              <div className="about__tags">
                {['MERN Stack','DSA', 'Problem Solving', 'Team Leader', 'Quick Learner'].map((tag, i) => (
                  <motion.span
                    key={tag}
                    className="about__tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="about__stats">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
