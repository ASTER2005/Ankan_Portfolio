import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'C', 'Java'],
      gradient: 'from-cyan-500/10 to-blue-500/10 border-cyan-500/20 text-cyan-400',
    },
    {
      title: 'ML & Data Science',
      skills: ['Scikit-Learn', 'XGBoost', 'LightGBM', 'Random Forest', 'SVM', 'Logistic Regression', 'Ensemble Learning', 'Pandas', 'NumPy', 'SciPy', 'Matplotlib', 'Seaborn', 'Feature Engineering', 'Statistical Analysis'],
      gradient: 'from-violet-500/10 to-purple-500/10 border-violet-500/20 text-violet-400',
    },
    {
      title: 'Deep Learning & NLP',
      skills: ['PyTorch', 'TensorFlow', 'Keras', 'DistilBERT', 'ResNet-18', 'DS-CNN', 'ArcFace', 'TF-IDF', 'Text Classification', 'Entropy-Based Analysis'],
      gradient: 'from-fuchsia-500/10 to-pink-500/10 border-fuchsia-500/20 text-fuchsia-400',
    },
    {
      title: 'Audio AI',
      skills: ['SpeechBrain', 'Librosa', 'Torchaudio', 'Silero VAD', 'Mel Spectrogram', 'Speaker Verification', 'Cosine Similarity'],
      gradient: 'from-amber-500/10 to-orange-500/10 border-amber-500/20 text-amber-400',
    },
    {
      title: 'Deployment & MLOps',
      skills: ['ONNX Runtime', 'Flask', 'Gradio', 'INT8 Quantization', 'REST APIs', 'Edge AI Deployment'],
      gradient: 'from-emerald-500/10 to-teal-500/10 border-emerald-500/20 text-emerald-400',
    },
    {
      title: 'Databases & Tools',
      skills: ['MongoDB', 'MySQL', 'Microsoft Power BI', 'Google Sheets', 'Microsoft Excel', 'Git/GitHub', 'Jupyter', 'Google Colab', 'VS Code', 'Conda', 'Overleaf'],
      gradient: 'from-blue-500/10 to-indigo-500/10 border-blue-500/20 text-blue-400',
    },
    {
      title: 'Model Evaluation',
      skills: ['Accuracy', 'Precision', 'Recall', 'F1-Score', 'ROC-AUC', 'Stratified K-Fold', 'FAR', 'FRR', 'EER', 'min-DCF'],
      gradient: 'from-rose-500/10 to-red-500/10 border-rose-500/20 text-rose-400',
    },
    {
      title: 'Cybersecurity AI',
      skills: ['Threat Detection', 'Phishing', 'Malware', 'Botnet', 'DDoS', 'Brute-Force', 'Anomaly Detection', 'XAI'],
      gradient: 'from-cyan-500/10 to-emerald-500/10 border-cyan-500/20 text-cyan-350',
    },
  ];

  const education = [
    {
      degree: 'B.Tech, Computer Science & Engineering (IoT)',
      institution: 'University Of Engineering & Management, Kolkata',
      date: '2024 — 2028',
      score: 'SGPA: 8.125 / 10',
      icon: <GraduationCap className="text-neon-blue" size={20} />,
    },
    {
      degree: 'Higher Secondary (Class XII), CBSE',
      institution: 'Durgapur Public School',
      date: '2024',
      score: 'Score: 68.4%',
      icon: <BookOpen className="text-neon-purple" size={20} />,
    },
    {
      degree: 'Secondary (Class X), ICSE',
      institution: 'St. Michael\'s School',
      date: '2022',
      score: 'Score: 74%',
      icon: <Award className="text-neon-pink" size={20} />,
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="page-container"
    >
      {/* Title */}
      <motion.div variants={itemVariants}>
        <h2 className="section-title">About Me</h2>
      </motion.div>

      {/* Bio Section */}
      <motion.div 
        variants={itemVariants} 
        className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-48 h-48 bg-neon-blue/5 blur-3xl pointer-events-none rounded-full" />
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-sans">
          Motivated aspiring <span className="text-neon-blue font-semibold">AI/ML Engineer</span> skilled in Python, Data Science, Machine Learning, and Deep Learning. Passionate about building intelligent, data-driven solutions for real-time threat detection and security. A quick learner with strong problem-solving abilities, leadership qualities, time management skills, and a steadfast commitment to continuous learning and innovation.
        </p>
      </motion.div>

      {/* Grid: Skills & Education */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        
        {/* Left: Skills Column */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <motion.h3 
            variants={itemVariants} 
            className="text-3xl font-heading font-bold text-white mb-2"
          >
            Skills & Expertise
          </motion.h3>

          <div className="flex flex-col gap-4">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`p-6 md:p-8 rounded-2xl border bg-gradient-to-r ${category.gradient} flex flex-col gap-4`}
              >
                <h4 className="text-base font-semibold tracking-wider uppercase opacity-90">{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <motion.span
                      key={sIdx}
                      whileHover={{ scale: 1.08 }}
                      className="px-4 py-2 bg-white/5 border border-white/10 hover:border-white/20 rounded-xl text-base text-white font-medium shadow-sm cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Education Column */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <motion.h3 
            variants={itemVariants} 
            className="text-3xl font-heading font-bold text-white mb-2"
          >
            Education History
          </motion.h3>

          <div className="relative pl-8 border-l border-white/10 flex flex-col gap-8">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline Dot with Icon */}
                <div className="absolute -left-[42px] top-1 p-2 bg-space-black border border-white/10 rounded-full flex items-center justify-center shadow-lg">
                  {edu.icon}
                </div>
                
                {/* Timeline Content */}
                <div className="glass-panel p-6 md:p-8 rounded-2xl flex flex-col gap-3">
                  <span className="text-xs font-semibold text-neon-blue tracking-wider">{edu.date}</span>
                  <h4 className="text-lg md:text-xl font-bold text-white leading-tight font-heading">{edu.degree}</h4>
                  <h5 className="text-base text-gray-300 font-medium font-sans">{edu.institution}</h5>
                  {edu.score && (
                    <span className="text-sm font-semibold px-3 py-1 bg-white/5 border border-white/5 rounded-full w-max text-neon-pink">
                      {edu.score}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default About;
