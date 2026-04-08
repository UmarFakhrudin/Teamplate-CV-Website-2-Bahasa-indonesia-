/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Palette, 
  FileText, 
  Globe, 
  Plane, 
  Trophy, 
  Edit, 
  ChevronRight,
  ExternalLink,
  Github,
  Linkedin,
  Instagram,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Data ---
const profile = {
  name: "UMAR FAKHRUDIN",
  title: "Copywriter & Desain Grafis",
  summary: "Saya adalah lulusan Sekolah Menengah Kejuruan (SMK) jurusan Teknik Komputer dan Jaringan. Saya mahir dalam pengoperasian komputer dan terampil menggunakan Photoshop, Microsoft Word, Microsoft Excel, Microsoft PowerPoint, dll. Saya adalah orang yang sangat disiplin dalam mengelola waktu, mudah beradaptasi, percaya diri, dan mampu berkomunikasi dengan baik.",
  contact: {
    phone: "0896-7666-8137",
    email: "umar.fakhrudin17@gmail.com",
    location: "Kec. Arjawinangun Kab. Cirebon",
    socials: {
      linkedin: "https://www.linkedin.com/in/umar-fakhrudin-9a5786268",
      instagram: "https://www.instagram.com/FakhrudinUmar",
      github: "https://github.com/UmarFakhrudin"
    }
  },
  profileImage: "/foto_saya.jpg",
  resumeImage: "/cv_saya.jpg",
  skills: [
    { name: "Adobe Photoshop", level: 90 },
    { name: "Microsoft Word", level: 95 },
    { name: "Microsoft Excel", level: 85 },
    { name: "Instalasi Jaringan", level: 80 },
    { name: "Desain Grafis", level: 88 }
  ],
  experience: [
    {
      company: "FLORIE X PINNATA STORE",
      role: "Admin Back Office",
      period: "2024 - Sekarang",
      location: "Bayalangu",
      description: "Bertanggung jawab atas Manajemen Inventaris & Stok (Kontrol Inventaris, Pemantauan Tanggal Kedaluwarsa, Administrasi Penjualan & Pembelian, Manajemen Data Produk, Koordinasi Operasional, Pelaporan, Koordinasi Logistik & Stok)."
    },
    {
      company: "DEPO JAGO",
      role: "Staff General Affair",
      period: "2023 - 2024",
      location: "Arjawinangun",
      description: "Bertanggung jawab mengelola seluruh operasional fasilitas kantor dan pengadaan aset perusahaan. Berpengalaman dalam mencapai efisiensi anggaran operasional, mengelola hubungan dengan vendor eksternal, dan memastikan seluruh aspek hukum dan keselamatan lingkungan kerja terpenuhi sesuai standar perusahaan."
    },
    {
      company: "J&T EXPRESS CP",
      role: "Leader / Shift Lead Collection Point",
      period: "2020 - 2023",
      location: "Tegalgubug",
      description: "Mengawasi dan memantau alur kerja tim sesuai SOP, Memantau proses pemindaian barang untuk penerimaan dan pengiriman, Memantau pengiriman harian, mingguan, dan bulanan, Menginput alamat pengiriman barang atau surat, mencatat keuangan harian, mingguan, dan bulanan menggunakan sistem agen dan Microsoft Excel."
    },
    {
      company: "POS EXPRESS INDONESIA",
      role: "Sales Counter Officer",
      period: "2019 - 2020",
      location: "Tegalgubug",
      description: "Menginput alamat pengiriman barang atau surat, mencatat keuangan harian, mingguan, dan bulanan menggunakan sistem agen dan Microsoft Excel."
    },
    {
      company: "JNE EXPRES",
      role: "Sales Counter Officer",
      period: "2018 - 2019",
      location: "Tegalgubug",
      description: "Menginput alamat pengiriman barang atau surat, mencatat keuangan harian, mingguan, dan bulanan menggunakan sistem agen dan Microsoft Excel."
    }
  ],
  education: [
    {
      school: "SMK PLUS AL-HILAL",
      period: "2015 - 2018",
      major: "Teknik Komputer dan Jaringan",
      location: "Desa Tegalgubug, Kec. Arjawinangun Kab. Cirebon",
      status: "Lulus dengan Baik"
    },
    {
      school: "MTS AL-HILAL",
      period: "2012 - 2015",
      major: "Siswa",
      location: "Desa Tegalgubug, Kec. Arjawinangun Kab. Cirebon",
      status: "Lulus dengan Baik"
    },
    {
      school: "MI NAHDLATUT TAIBIN",
      period: "2006 - 2012",
      major: "Siswa",
      location: "Desa Majasri, Kec. Susukan Kab. Cirebon",
      status: "Lulus dengan Baik"
    }
  ],
  languages: [
    { name: "Inggris", level: 75 },
    { name: "Indonesia", level: 100 },
    { name: "Jawa", level: 100 }
  ],
  hobbies: [
    { name: "Traveling", icon: <Plane className="w-6 h-6" /> },
    { name: "Sepak Bola", icon: <Trophy className="w-6 h-6" /> },
    { name: "Editing", icon: <Edit className="w-6 h-6" /> },
    { name: "Web Dev", icon: <Code className="w-6 h-6" /> }
  ]
};

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#about' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Pengalaman', href: '#experience' },
    { name: 'Pendidikan', href: '#education' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-500 rounded-2xl px-6 py-3 flex justify-between items-center ${scrolled ? 'bg-glass shadow-glow' : 'bg-transparent'}`}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-display font-black tracking-tight"
          >
            <span className="text-brand-600">UMAR</span>
            <span className="text-slate-900">.F</span>
          </motion.div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-brand-600 hover:bg-brand-50 rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="ml-4 px-6 py-2.5 bg-brand-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-brand-200 hover:bg-brand-700 hover:-translate-y-0.5 transition-all"
            >
              Hubungi Saya
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-2 md:hidden bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-50 p-4"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-lg font-bold text-slate-700 hover:text-brand-600 hover:bg-brand-50 rounded-2xl transition-all"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-4 py-4 bg-brand-600 text-white text-center font-bold rounded-2xl shadow-lg shadow-brand-200"
              >
                Hubungi Saya
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle, center = false }: { children: React.ReactNode, subtitle?: string, center?: boolean }) => (
  <div className={`mb-16 ${center ? 'text-center flex flex-col items-center' : ''}`}>
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-xs font-black tracking-widest uppercase mb-4"
    >
      {children}
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 mb-6 leading-tight"
    >
      {subtitle}
    </motion.h2>
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 80 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="h-2 bg-linear-to-r from-brand-600 to-accent-pink rounded-full"
    />
  </div>
);

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    
    // Construct the direct Gmail compose link
    const body = `Halo Umar,%0D%0A%0D%0ANama: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0APesan:%0D%0A${message}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.contact.email}&su=${encodeURIComponent(subject || 'Kontak dari Portfolio')}&body=${body}`;
    
    // Open Gmail in a new tab
    window.open(gmailUrl, '_blank');
    
    // Show success message
    setIsSent(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = profile.resumeImage;
    link.download = `CV_${profile.name.replace(/\s+/g, '_')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-brand-100 selection:text-brand-900">
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-200/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-pink/20 rounded-full blur-[100px]" />
          <div className="absolute top-[20%] left-[10%] w-24 h-24 border-2 border-brand-200 rounded-full animate-pulse" />
          <div className="absolute bottom-[20%] right-[15%] w-16 h-16 border-2 border-accent-rose/30 rounded-lg rotate-45 animate-bounce" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 mb-8"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-bold text-slate-600 tracking-tight">Tersedia untuk proyek baru</span>
              </motion.div>

              <h1 className="text-6xl md:text-8xl font-display font-black text-slate-900 leading-[0.9] mb-8 tracking-tighter">
                Membangun Pengalaman <span className="text-gradient">Digital</span>.
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 font-medium mb-10 max-w-xl leading-relaxed">
                Halo, saya <span className="text-brand-600 font-bold">{profile.name}</span>. Seorang <span className="underline decoration-accent-pink decoration-4 underline-offset-4">{profile.title}</span> yang berdedikasi di Cirebon.
              </p>

              <div className="flex flex-wrap gap-5">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact" 
                  className="px-10 py-5 bg-brand-600 text-white rounded-2xl font-bold text-lg hover:bg-brand-700 transition-all shadow-xl shadow-brand-200 flex items-center gap-3"
                >
                  Mari Berdiskusi
                  <ChevronRight size={20} />
                </motion.a>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownloadCV}
                  className="px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all shadow-lg flex items-center gap-3"
                >
                  <FileText size={20} className="text-brand-600" />
                  Lihat CV
                </motion.button>
              </div>
              
              <div className="flex gap-6 mt-12">
                {[
                  { icon: <Instagram size={24} />, href: profile.contact.socials.instagram, color: 'hover:text-pink-600' },
                  { icon: <Linkedin size={24} />, href: profile.contact.socials.linkedin, color: 'hover:text-blue-600' },
                  { icon: <Github size={24} />, href: profile.contact.socials.github, color: 'hover:text-slate-900' }
                ].map((social, i) => (
                  <motion.a 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`text-slate-400 ${social.color} transition-all transform hover:scale-125`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative lg:ml-auto flex justify-center lg:justify-end"
            >
              <div className="relative z-10 w-full max-w-[700px] aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white group">
                <img 
                  src={profile.profileImage} 
                  alt={profile.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-accent-pink rounded-full -z-0 blur-3xl opacity-30 animate-pulse" />
              <div className="absolute -top-12 -left-12 w-56 h-56 bg-brand-400 rounded-full -z-0 blur-3xl opacity-30" />
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-12 top-1/4 z-20 bg-white p-6 rounded-[2.5rem] shadow-2xl border border-slate-100 hidden xl:block"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center text-brand-600">
                    <Trophy size={28} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Pengalaman</p>
                    <p className="text-xl font-bold text-slate-900">7+ Tahun</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 grid grid-cols-2 gap-6">
                <div className="space-y-6 pt-12">
                  <div className="aspect-square bg-brand-50 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center group hover:bg-brand-600 transition-all duration-500">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-600 shadow-sm mb-4 group-hover:scale-110 transition-transform">
                      <Palette size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-white transition-colors">Desain Kreatif</h4>
                  </div>
                  <div className="aspect-square bg-slate-50 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center group hover:bg-accent-pink transition-all duration-500">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-accent-pink shadow-sm mb-4 group-hover:scale-110 transition-transform">
                      <Edit size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-white transition-colors">Copywriting</h4>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="aspect-square bg-slate-900 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center group hover:bg-brand-500 transition-all duration-500">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white shadow-sm mb-4 group-hover:scale-110 transition-transform">
                      <Code size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-white transition-colors">Melek Teknologi</h4>
                  </div>
                  <div className="aspect-square bg-brand-100 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center group hover:bg-accent-rose transition-all duration-500">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-accent-rose shadow-sm mb-4 group-hover:scale-110 transition-transform">
                      <Briefcase size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-white transition-colors">Manajemen</h4>
                  </div>
                </div>
              </div>
              {/* Background circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-50 rounded-full -z-0 opacity-50" />
            </motion.div>

            <div className="relative">
              <SectionHeading subtitle="Bersemangat untuk menciptakan dampak yang berarti melalui desain dan kata-kata.">
                Tentang Saya
              </SectionHeading>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl text-slate-600 leading-relaxed mb-10"
              >
                {profile.summary}
              </motion.p>

              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                {[
                  { icon: <MapPin className="text-brand-600" />, label: 'Lokasi', value: profile.contact.location },
                  { icon: <Mail className="text-accent-pink" />, label: 'Email', value: profile.contact.email },
                  { icon: <Phone className="text-accent-rose" />, label: 'Telepon', value: profile.contact.phone },
                  { icon: <Globe className="text-accent-indigo" />, label: 'Bahasa', value: 'Indo, Jawa, Inggris' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-5 p-4 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all"
                  >
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
                      <p className="text-sm font-bold text-slate-900 truncate max-w-[150px]">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-4">
                {profile.languages.map((lang) => (
                  <div key={lang.name} className="px-5 py-2 bg-brand-50 text-brand-700 rounded-full text-sm font-bold border border-brand-100">
                    {lang.name} {lang.level}%
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-100/20 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading center subtitle="Lihat lebih detail perjalanan profesional saya.">
            Resume Saya
          </SectionHeading>
          
          <div className="flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group max-w-4xl w-full"
            >
              {/* Decorative background cards */}
              <div className="absolute inset-0 bg-brand-600 rounded-[3rem] rotate-2 scale-[1.02] -z-10 opacity-10 group-hover:rotate-3 transition-transform duration-500" />
              <div className="absolute inset-0 bg-accent-pink rounded-[3rem] -rotate-2 scale-[1.02] -z-10 opacity-10 group-hover:-rotate-3 transition-transform duration-500" />
              
              <div className="bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden text-center">
                <div className="w-24 h-24 bg-brand-100 rounded-3xl flex items-center justify-center text-brand-600 mx-auto mb-8">
                  <FileText size={48} />
                </div>
                <h3 className="text-3xl font-display font-black text-slate-900 mb-4">Resume Profesional</h3>
                <p className="text-slate-600 mb-10 max-w-md mx-auto text-lg">
                  Dokumen lengkap yang merangkum kualifikasi, pengalaman kerja, dan latar belakang pendidikan saya.
                </p>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownloadCV}
                  className="px-12 py-5 bg-brand-600 text-white rounded-2xl font-bold text-xl flex items-center gap-3 hover:bg-brand-700 transition-all shadow-xl shadow-brand-200 mx-auto"
                >
                  <FileText size={24} />
                  Unduh CV (PDF/JPG)
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-16 flex flex-wrap justify-center gap-6"
            >
              <a 
                href="#contact"
                className="px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all shadow-lg flex items-center gap-3"
              >
                <Mail size={24} className="text-accent-pink" />
                Hubungi Saya
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Alat dan teknologi yang saya kuasai untuk memberikan hasil berkualitas tinggi.">
            Keahlian Saya
          </SectionHeading>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {profile.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 group hover:bg-white hover:shadow-glow hover:border-brand-200 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-600 shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-all duration-500">
                    {skill.name.includes('Photoshop') || skill.name.includes('Desain') ? (
                      <Palette size={32} />
                    ) : skill.name.includes('Jaringan') ? (
                      <Code size={32} />
                    ) : (
                      <FileText size={32} />
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-4xl font-display font-black text-slate-200 group-hover:text-brand-100 transition-colors">
                      {skill.level}%
                    </p>
                  </div>
                </div>
                
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">{skill.name}</h3>
                
                <div className="relative h-3 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    className="absolute top-0 left-0 h-full bg-linear-to-r from-brand-600 to-accent-pink rounded-full"
                  />
                </div>
                
                <div className="mt-6 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Penguasaan</span>
                  <span className="text-sm font-black text-brand-600">Lanjutan</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Garis waktu pertumbuhan profesional dan pencapaian saya.">
            Perjalanan Kerja
          </SectionHeading>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-brand-600 via-accent-pink to-accent-rose rounded-full transform -translate-x-1/2 opacity-20" />
            
            <div className="space-y-20">
              {profile.experience.map((exp, index) => (
                <motion.div
                  key={exp.company + exp.period}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 top-0 w-10 h-10 bg-white rounded-2xl border-4 border-brand-600 shadow-glow transform -translate-x-1/2 z-10 flex items-center justify-center">
                    <Briefcase size={16} className="text-brand-600" />
                  </div>
                  
                  <div className="md:w-1/2 pl-16 md:pl-0">
                    <div className={`bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-glow hover:border-brand-200 transition-all duration-500 group ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                      <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
                        <div>
                          <div className="inline-block px-4 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-black uppercase tracking-widest mb-4">
                            {exp.period}
                          </div>
                          <h3 className="text-3xl font-display font-black text-slate-900 leading-tight group-hover:text-brand-600 transition-colors">{exp.role}</h3>
                          <div className="flex flex-wrap items-center gap-4 text-slate-500 font-bold mt-4">
                            <div className="flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-lg">
                              <Briefcase size={16} className="text-brand-400" />
                              <span>{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-lg">
                              <MapPin size={16} className="text-accent-pink" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-lg text-slate-600 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full -z-0 opacity-30">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-brand-600 rounded-full blur-[150px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent-rose rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-20 text-center flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-brand-300 text-xs font-black tracking-widest uppercase mb-4"
            >
              Akademik
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-display font-black mb-6">Pendidikan</h2>
            <div className="h-2 w-24 bg-linear-to-r from-brand-400 to-accent-pink rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {profile.education.map((edu, index) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand-500/20 group-hover:scale-110 transition-transform">
                  <GraduationCap size={32} className="text-white" />
                </div>
                <span className="text-brand-400 font-black text-sm tracking-widest uppercase">{edu.period}</span>
                <h3 className="text-2xl font-display font-black mt-4 mb-2">{edu.school}</h3>
                <p className="text-brand-200 font-bold mb-6">{edu.major}</p>
                
                <div className="space-y-4 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3 text-slate-400">
                    <MapPin size={18} className="text-accent-pink" />
                    <span className="text-sm font-medium">{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400">
                    <ChevronRight size={18} className="text-brand-400" />
                    <span className="text-sm font-bold text-white/80">{edu.status}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[4rem] p-8 md:p-20 overflow-hidden relative">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600 rounded-full blur-[120px] -mr-48 -mt-48 opacity-40" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-pink rounded-full blur-[120px] -ml-48 -mb-48 opacity-30" />
            
            <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-brand-300 text-xs font-black tracking-widest uppercase mb-6"
                >
                  Kontak
                </motion.div>
                <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-8 leading-tight">
                  Mari Bangun Sesuatu yang <span className="text-brand-400">Luar Biasa</span>.
                </h2>
                <p className="text-xl text-slate-400 mb-12 max-w-md leading-relaxed">
                  Punya proyek dalam pikiran? Saya selalu terbuka untuk mendiskusikan peluang baru dan ide-ide kreatif.
                </p>
                
                <div className="space-y-8">
                  {[
                    { icon: <Mail size={24} />, label: 'Email Saya', value: profile.contact.email, href: `mailto:${profile.contact.email}`, color: 'bg-brand-500' },
                    { icon: <Phone size={24} />, label: 'Telepon Saya', value: profile.contact.phone, href: `tel:${profile.contact.phone}`, color: 'bg-accent-pink' },
                    { icon: <MapPin size={24} />, label: 'Kunjungi Saya', value: profile.contact.location, href: '#', color: 'bg-accent-rose' }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-6 group"
                    >
                      <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <div className="text-white">{item.icon}</div>
                      </div>
                      <div>
                        <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">{item.label}</p>
                        <a href={item.href} className="text-xl font-bold text-white hover:text-brand-400 transition-colors">
                          {item.value}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex gap-5 mt-16">
                  {[
                    { icon: <Instagram size={24} />, href: profile.contact.socials.instagram },
                    { icon: <Linkedin size={24} />, href: profile.contact.socials.linkedin },
                    { icon: <Github size={24} />, href: profile.contact.socials.github }
                  ].map((social, i) => (
                    <motion.a 
                      key={i}
                      whileHover={{ y: -5 }}
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/10 hover:bg-white hover:text-slate-900 transition-all"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-10 md:p-12 rounded-[3rem] shadow-2xl"
              >
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-black text-slate-400 uppercase tracking-widest ml-1">Nama</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nama Anda"
                        required
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-bold"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-black text-slate-400 uppercase tracking-widest ml-1">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-bold"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-black text-slate-400 uppercase tracking-widest ml-1">Subjek</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Tentang apa ini?"
                      required
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-bold"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-black text-slate-400 uppercase tracking-widest ml-1">Pesan</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Ceritakan lebih banyak tentang proyek Anda..."
                      required
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-bold resize-none"
                    />
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSent}
                    className={`w-full py-5 rounded-2xl font-black text-lg transition-all shadow-xl ${
                      isSent 
                        ? 'bg-green-500 text-white shadow-green-200' 
                        : 'bg-brand-600 text-white hover:bg-brand-700 shadow-brand-200'
                    }`}
                  >
                    {isSent ? 'Pesan Terkirim!' : 'Kirim Pesan'}
                  </motion.button>
                  <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Balasan langsung dalam 24 jam
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-3xl font-display font-black tracking-tighter">
              <span className="text-brand-600">UMAR</span>
              <span className="text-slate-900">.F</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8">
              {['Tentang', 'Keahlian', 'Pengalaman', 'Pendidikan', 'Kontak'].map((item) => (
                <a key={item} href={`#${item === 'Tentang' ? 'about' : item === 'Keahlian' ? 'skills' : item === 'Pengalaman' ? 'experience' : item === 'Pendidikan' ? 'education' : 'contact'}`} className="text-sm font-black text-slate-400 hover:text-brand-600 uppercase tracking-widest transition-colors">
                  {item}
                </a>
              ))}
            </div>

            <div className="flex gap-4">
              {[
                { icon: <Instagram size={20} />, href: profile.contact.socials.instagram },
                { icon: <Linkedin size={20} />, href: profile.contact.socials.linkedin },
                { icon: <Github size={20} />, href: profile.contact.socials.github }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:text-brand-600 hover:border-brand-200 transition-all shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">
              © {new Date().getFullYear()} Umar Fakhrudin. Dibuat dengan Sepenuh Hati.
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-sm font-bold uppercase tracking-widest">
              <span>Didesain di</span>
              <span className="text-brand-600">Cirebon</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
