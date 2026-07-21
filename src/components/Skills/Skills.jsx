import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiLayout, FiServer, FiDatabase, FiTerminal, FiTool
} from 'react-icons/fi';
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiNodedotjs,
  SiExpress, SiMongodb, SiCplusplus, SiGit, SiGithub,
  SiVscodium, SiPostman, SiLeetcode, SiHackerrank, SiCodeforces
} from 'react-icons/si';
import './Skills.css';

const categories = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: FiLayout,
    skills: [
      { name: 'HTML', icon: SiHtml5, level: 90, color: '#E34F26' },
      { name: 'CSS', icon: SiCss, level: 85, color: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript, level: 80, color: '#F7DF1E' },
      { name: 'React', icon: SiReact, level: 75, color: '#61DAFB' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: FiServer,
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 78, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, level: 75, color: '#FFFFFF' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    icon: FiDatabase,
    skills: [
      { name: 'MongoDB', icon: SiMongodb, level: 72, color: '#47A248' },
    ],
  },
  {
    id: 'programming',
    label: 'Programming',
    icon: FiTerminal,
    skills: [
      { name: 'C++', icon: SiCplusplus, level: 80, color: '#00599C' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Other',
    icon: FiTool,
    skills: [
      { name: 'DSA', icon: SiLeetcode, level: 70, color: '#FFA116' },
      { name: 'Git', icon: SiGit, level: 78, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, level: 80, color: '#FFFFFF' },
      { name: 'MongoDB', icon: SiMongodb, level: 85, color: '#04b459' },
      { name: 'Postman', icon: SiPostman, level: 75, color: '#FF6C37' },
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState('frontend');

  const activeCategory = categories.find((c) => c.id === active);

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section__title">Skills & Technologies</h2>
          <p className="section__subtitle">Technologies I work with to bring ideas to life.</p>
        </motion.div>

        <motion.div
          className="skills__tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                className={`skills__tab ${active === cat.id ? 'skills__tab--active' : ''}`}
                onClick={() => setActive(cat.id)}
              >
                <Icon size={18} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="skills__grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            {activeCategory.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                className="skills__card glass-card"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="skills__card-icon" style={{ color: skill.color }}>
                  <skill.icon size={36} />
                </div>
                <h3 className="skills__card-name">{skill.name}</h3>
                <div className="skills__bar-container">
                  <motion.div
                    className="skills__bar"
                    style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                    viewport={{ once: true }}
                  />
                </div>
                <span className="skills__level">{skill.level}%</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
