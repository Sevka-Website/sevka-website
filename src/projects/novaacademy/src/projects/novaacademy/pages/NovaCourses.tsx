import { Link } from 'react-router-dom';
import { CheckCircle2, Clock, Users, Award } from 'lucide-react';

const courses = [
  {
    tag: 'JEE', color: '#FF6B2B',
    title: 'JEE Main & Advanced',
    subtitle: 'For Class 11, 12 & Droppers',
    img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=700&q=80',
    duration: '2 Years / 1 Year / 6-Month Crash',
    batchSize: '25–30 students',
    includes: ['400+ hours of live teaching', 'Daily Practice Problems (DPP)', 'Weekly mock tests & analysis', 'Physics, Chemistry & Maths', 'Previous 20-year paper discussion', 'IIT alumni mentors'],
    price: '₹85,000/year',
    highlight: true,
  },
  {
    tag: 'NEET', color: '#10B981',
    title: 'NEET UG Preparation',
    subtitle: 'For Class 11, 12 & Droppers',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80',
    duration: '2 Years / 1 Year / Crash Course',
    batchSize: '25 students',
    includes: ['NCERT line-by-line coverage', 'Biology, Physics & Chemistry', 'Doctor-mentor access', 'AIIMS & top college strategy', 'Weekly full mock tests', '5,000+ practice questions'],
    price: '₹80,000/year',
    highlight: false,
  },
  {
    tag: 'Foundation', color: '#6366F1',
    title: 'Foundation Course',
    subtitle: 'Class 8, 9 & 10 Students',
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&q=80',
    duration: '1 Year program',
    batchSize: '20 students',
    includes: ['School syllabus + competitive prep', 'Science & Maths focus', 'Olympiad preparation', 'Board exam strategy', 'Logical reasoning sessions', 'Monthly PTMs'],
    price: '₹45,000/year',
    highlight: false,
  },
  {
    tag: 'Board Prep', color: '#F59E0B',
    title: 'Board Exam Excellence',
    subtitle: 'Class 10 & 12 CBSE / ISC',
    img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=700&q=80',
    duration: '6 Months',
    batchSize: '30 students',
    includes: ['Full CBSE/ISC syllabus coverage', 'Sample paper solving', 'Practical exam guidance', 'Chapter-wise weightage analysis', 'Last 10-year paper discussion', 'Score predictor tool'],
    price: '₹30,000',
    highlight: false,
  },
];

export default function NovaCourses() {
  return (
    <div className="bg-white pt-24">
      {/* Hero */}
      <section className="py-20 px-6 text-center text-white"
        style={{ background: 'linear-gradient(135deg, #0A1628 0%, #1E3A5F 100%)' }}>
        <span className="text-[#FF9F1C] font-mono text-xs tracking-widest uppercase font-bold">All Programs</span>
        <h1 className="text-5xl font-black mt-3 mb-4">Our Courses</h1>
        <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
          Carefully designed programs for every student, every goal, every stage of their journey.
        </p>
        <Link to="/work/novaacademy/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white hover:opacity-90 transition-all"
          style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9F1C)' }}>
          Book Free Demo Class →
        </Link>
      </section>

      {/* Courses */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-20">
          {courses.map((course, i) => (
            <div key={i} className={`flex flex-col md:flex-row gap-12 items-start ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-2/5">
                <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                  <img src={course.img} alt={course.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-full md:w-3/5">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-4"
                  style={{ background: course.color }}>{course.tag}</span>
                <h2 className="text-3xl font-black text-[#0A1628] mb-1">{course.title}</h2>
                <p className="text-[#6B7280] font-semibold mb-5">{course.subtitle}</p>

                <div className="flex flex-wrap gap-5 mb-6">
                  <div className="flex items-center gap-2 text-sm text-[#374151]">
                    <Clock size={15} className="text-[#FF6B2B]" />{course.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#374151]">
                    <Users size={15} className="text-[#FF6B2B]" />{course.batchSize}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#374151]">
                    <Award size={15} className="text-[#FF6B2B]" />{course.price}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {course.includes.map((item, j) => (
                    <div key={j} className="flex items-center gap-2.5 text-sm text-[#374151]">
                      <CheckCircle2 size={15} className="text-[#FF6B2B] shrink-0" />{item}
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link to="/work/novaacademy/contact"
                    className="px-7 py-3 rounded-xl font-bold text-white hover:opacity-90 transition-all"
                    style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9F1C)' }}>
                    Book Free Demo
                  </Link>
                  <Link to="/work/novaacademy/contact"
                    className="px-7 py-3 rounded-xl font-bold border-2 border-[#FF6B2B] text-[#FF6B2B] hover:bg-[#FF6B2B]/5 transition-all">
                    Download Brochure
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scholarship */}
      <section className="py-20 px-6" style={{ background: 'linear-gradient(135deg, #0A1628, #1E3A5F)' }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <span className="text-[#FF9F1C] font-mono text-xs tracking-widest uppercase font-bold">Don't Let Cost Stop You</span>
          <h2 className="text-4xl font-black mt-3 mb-4">Scholarship up to 90% Available</h2>
          <p className="text-white/70 text-lg mb-8">Take the Nova Scholarship Admission Test (NSAT) and unlock your potential — and your fees waiver.</p>
          <Link to="/work/novaacademy/contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-white hover:opacity-90 transition-all"
            style={{ background: 'linear-gradient(135deg, #FF6B2B, #FF9F1C)' }}>
            Apply for Scholarship →
          </Link>
        </div>
      </section>
    </div>
  );
}
