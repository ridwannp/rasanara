import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Avatar,
  Rate,
  Carousel,
  Menu,
  Drawer,
  Typography,
  Space,
  Row,
  Col,
  Divider,
  Form,
  Input,
  message,
  Modal,
  Tag,
} from "antd";
import {
  MenuOutlined,
  RocketOutlined,
  ArrowRightOutlined,
  GlobalOutlined,
  BgColorsOutlined,
  ThunderboltOutlined,
  CheckCircleOutlined,
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  StarFilled,
  HeartOutlined,
  EyeOutlined,
  CloseOutlined,
  CalendarOutlined,
  TeamOutlined,
  WhatsAppOutlined,
  GlobalOutlined as LanguageIcon,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const Home = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [form] = Form.useForm();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const [language, setLanguage] = useState('id'); // 'id' or 'en'
  const [portfolioFilter, setPortfolioFilter] = useState('all'); // 'all', 'case-study', 'internal', 'personal'


  // Translations object
  const translations = {
    id: {
      // Navigation
      navServices: "Layanan",
      navPortfolio: "Jejak Karya",
      navAbout: "Tentang Rasanara",
      navContact: "Hubungi Kami",
      navCTA: "Konsultasi via WhatsApp",
      
      // Hero Section
      heroBadge: "Dari Awal yang Sederhana Menuju Kisah yang Besar",
      heroDescription: "Kami merancang pengalaman digital yang bukan hanya indah tetapi juga bercerita, membangun koneksi, dan hasil yang bermakna.",
      heroTagline: "Awali kisah dan rasa Anda bersama Rasanara",
      heroButton1: "Memulai Rasa",
      heroButton2: "Narasi Kami",
      
      // Services Section
      servicesTitle: "Rasa & Narasi yang Kami Hadirkan",
      servicesSubtitle: "Tiga solusi eksklusif untuk memperkuat identitas digital Anda dan menyampaikan kisah brand dengan cara yang lebih bermakna.",
      service1Title: "Website Builder",
      service1Desc: "Menciptakan website yang menyatukan rasa, cerita, dan strategi untuk menghasilkan konversi terbaik bagi brand Anda.",
      service2Title: "UI/UX Redesign",
      service2Desc: "Menciptakan pengalaman digital yang menghadirkan rasa dan membangun narasi yang dicintai pengguna.",
      service3Title: "AI Automation",
      service3Desc: "Tools berbasis AI yang meracik konten cerdas untuk memperluas jangkauan rasa dan narasi brand Anda.",
      
      // Portfolio Section
      portfolioTitle: "Karya Rasanara",
      portfolioSubtitle: "Temukan bagaimana kami membantu brand membangun identitas digital yang kuat melalui karya yang menyatukan rasa, narasi, dan strategi.",
      portfolioFilterAll: "Semua",
      portfolioFilterCaseStudy: "Studi Kasus",
      portfolioFilterInternal: "Project Internal",
      portfolioFilterPersonal: "Project Pribadi",
      portfolioSimulationBadge: "Simulasi",
      portfolioViewDetails: "Lihat Detail",
      
      // Capabilities Section
      capabilitiesTitle: "Kemampuan & Yang Bisa Saya Kerjakan",
      capabilitiesSubtitle: "Keahlian teknis dan solusi yang dapat saya bangun untuk membantu project Anda sukses.",
      
      // Modal
      modalChallenge: "Tantangan",
      modalSolution: "Solusi",
      modalApproach: "Pendekatan yang Akan Dilakukan",
      modalResults: "Hasil & Dampak",
      modalExpectedResults: "Hasil yang Diharapkan",
      modalTechnologies: "Teknologi yang Digunakan",
      modalDuration: "Durasi Project",
      modalStartProject: "Mulai Project Anda",
      
      // About Section
      aboutTitle1: "Dari Awal yang Sederhana",
      aboutTitle2: "Menuju",
      aboutTitle3: "Kisah yang Besar",
      aboutDesc1: "Rasanara terlahir dari sebuah prinsip: bahwa kekuatan sebuah brand tumbuh dari",
      aboutDesc1Bold1: "Rasa",
      aboutDesc1Text: "yang dirasakan dan",
      aboutDesc1Bold2: "Narasi",
      aboutDesc1End: "yang menghidupkan.",
      aboutDesc2: "Kami memulai dengan keberanian dan tekad untuk membantu brand menuturkan cerita mereka lewat pengalaman digital yang memiliki makna.",
      aboutPoint1: "Ketika Teknologi Bertemu Sentuhan Manusia",
      aboutPoint2: "Narasi yang Menggerakkan Aksi",
      aboutPoint3: "Perspektif yang Indah dan Bermakna",
      aboutMissionTitle: "Arah Perjalanan Kami",
      aboutMission: "Membantu brand menemukan suara autentik mereka dan menuturkan cerita melalui pengalaman digital yang penuh rasa—indah dipandang, bermakna, dan membangun hubungan jangka panjang dengan audiens.",
      aboutStats: "Projects Planned",
      
      // CTA Section
      ctaTitle: "Siap Menuliskan Cerita Anda Bersama Kami?",
      ctaDescription: "Mari melangkah bersama dalam perjalanan luar biasa menuju kisah yang besar. Kita ciptakan sesuatu yang benar-benar bermakna, bersama.",
      ctaButton: "Konsultasi via WhatsApp",
      
      // Contact Section
      contactTitle: "Mari Bercerita dengan Rasa",
      contactSubtitle: "Kami dengan senang hati membantu brand Anda, hubungi kami untuk memulainya.",
      contactEmail: "Kirim Email",
      contactEmailDesc: "Ceritakan kebutuhan Anda via email",
      contactWhatsApp: "Chat WhatsApp",
      contactWhatsAppDesc: "Konsultasi langsung via WhatsApp",
      
      // Footer
      footerTagline: "Dari Awal yang Sederhana Menuju Kisah yang Besar",
      footerCopyright: "Made with",
      footerLocation: "in Indonesia."
    },
    en: {
      // Navigation
      navServices: "Services",
      navPortfolio: "Portfolio",
      navAbout: "About Us",
      navContact: "Contact",
      navCTA: "WhatsApp Consultation",
      
      // Hero Section
      heroBadge: "From Humble Beginnings to Great Stories",
      heroDescription: "We craft digital experiences that are not only beautiful but also tell stories, build connections, and deliver meaningful results.",
      heroTagline: "Start your story and experience with Rasanara",
      heroButton1: "Get Started",
      heroButton2: "Our Story",
      
      // Services Section
      servicesTitle: "Experience & Narrative We Deliver",
      servicesSubtitle: "Three exclusive solutions to strengthen your digital identity and convey your brand story in a more meaningful way.",
      service1Title: "Website Builder",
      service1Desc: "Creating websites that unite experience, story, and strategy to deliver the best conversion for your brand.",
      service2Title: "UI/UX Redesign",
      service2Desc: "Creating digital experiences that deliver feeling and build narratives loved by users.",
      service3Title: "AI Automation",
      service3Desc: "AI-powered tools that craft smart content to expand your brand's reach and narrative.",
      
      // Portfolio Section
      portfolioTitle: "Our Work",
      portfolioSubtitle: "Discover how we help brands build strong digital identities through work that unites experience, narrative, and strategy.",
      portfolioFilterAll: "All",
      portfolioFilterCaseStudy: "Case Studies",
      portfolioFilterInternal: "Internal Projects",
      portfolioFilterPersonal: "Personal Projects",
      portfolioSimulationBadge: "Simulation",
      portfolioViewDetails: "View Details",
      
      // Capabilities Section
      capabilitiesTitle: "Capabilities & What I Can Build",
      capabilitiesSubtitle: "Technical expertise and solutions I can build to help your project succeed.",
      
      // Modal
      modalChallenge: "The Challenge",
      modalSolution: "Our Solution",
      modalApproach: "Proposed Approach",
      modalResults: "Results & Impact",
      modalExpectedResults: "Expected Results",
      modalTechnologies: "Technologies Used",
      modalDuration: "Project Duration",
      modalStartProject: "Start Your Project",
      
      // About Section
      aboutTitle1: "From Humble",
      aboutTitle2: "Beginnings to",
      aboutTitle3: "Great Stories",
      aboutDesc1: "Rasanara was born from a principle: that a brand's strength grows from the",
      aboutDesc1Bold1: "Experience",
      aboutDesc1Text: "felt and the",
      aboutDesc1Bold2: "Narrative",
      aboutDesc1End: "that brings it to life.",
      aboutDesc2: "We started with courage and determination to help brands tell their stories through meaningful digital experiences.",
      aboutPoint1: "When Technology Meets Human Touch",
      aboutPoint2: "Narratives That Drive Action",
      aboutPoint3: "Beautiful and Meaningful Perspectives",
      aboutMissionTitle: "Our Direction",
      aboutMission: "Helping brands discover their authentic voice and tell their story through digital experiences full of feeling—beautiful to behold, meaningful, and building long-term relationships with audiences.",
      aboutStats: "Projects Planned",
      
      // CTA Section
      ctaTitle: "Ready to Write Your Story With Us?",
      ctaDescription: "Let's step together on an incredible journey toward great stories. We create something truly meaningful, together.",
      ctaButton: "WhatsApp Consultation",
      
      // Contact Section
      contactTitle: "Let's Talk with Feeling",
      contactSubtitle: "We're happy to help your brand, contact us to get started.",
      contactEmail: "Send Email",
      contactEmailDesc: "Tell us your needs via email",
      contactWhatsApp: "WhatsApp Chat",
      contactWhatsAppDesc: "Direct consultation via WhatsApp",
      
      // Footer
      footerTagline: "From Humble Beginnings to Great Stories",
      footerCopyright: "Made with",
      footerLocation: "in Indonesia."
    }
  };

  const t = translations[language];

  const services = [
    {
      icon: <GlobalOutlined className="text-4xl" />,
      title: "Website Builder",
      description:
        "Menciptakan website yang menyatukan rasa, cerita, dan strategi untuk menghasilkan konversi terbaik bagi brand Anda.",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "Analytics Integration",
      ],
      gradient: "from-blue-500 to-cyan-500",
      antdColor: "#1890ff",
    },
    {
      icon: <BgColorsOutlined className="text-4xl" />,
      title: "UI/UX Redesign",
      description:
        "Menciptakan pengalaman digital yang menghadirkan rasa dan membangun narasi yang dicintai pengguna.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Usability Testing",
      ],
      gradient: "from-purple-500 to-pink-500",
      antdColor: "#722ed1",
    },
    {
      icon: <ThunderboltOutlined className="text-4xl" />,
      title: "AI Automation",
      description:
        "Tools berbasis AI yang meracik konten cerdas untuk memperluas jangkauan rasa dan narasi brand Anda.",
      features: [
        "Smart Copy Generation",
        "SEO Content",
        "Multi-language Support",
        "Brand Voice Training",
      ],
      gradient: "from-orange-500 to-red-500",
      antdColor: "#fa541c",
    },
  ];

  const testimonials = [
    {
      name: "Ahmad Fauzi",
      role: "Senior Frontend Engineer",
      content:
        "Bekerja dengan Ridwan sangat menyenangkan. Dia memiliki pemahaman yang kuat tentang React dan Next.js, serta selalu menghasilkan kode yang bersih dan maintainable.",
      rating: 5,
      avatar: "AF",
    },
    {
      name: "Siti Nurhaliza",
      role: "Tech Lead",
      content:
        "Kemampuan problem-solving dan perhatian terhadap detail UI/UX-nya sangat baik. Selalu proaktif dalam mengoptimasi performa aplikasi.",
      rating: 5,
      avatar: "SN",
    },
    {
      name: "Budi Santoso",
      role: "Project Manager",
      content:
        "Ridwan adalah developer yang dapat diandalkan. Selalu menyelesaikan task tepat waktu dengan kualitas tinggi dan komunikasi yang baik.",
      rating: 5,
      avatar: "BS",
    },
  ];

  const portfolioItems = [
    // CASE STUDY SIMULATIONS
    {
      id: 1,
      type: "case-study",
      isSimulation: true,
      title: "E-Commerce UX Optimization",
      category: "Case Study Simulation",
      year: "2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      description: "Studi kasus simulasi tentang optimasi UX pada platform e-commerce untuk meningkatkan conversion rate dan mengurangi bounce rate.",
      challenge: "Banyak platform e-commerce menghadapi bounce rate tinggi (>60%), proses checkout yang membingungkan dengan 5+ langkah, dan desain UI yang kurang modern. User sering abandon cart karena proses yang terlalu kompleks.",
      solution: "Pendekatan yang akan saya lakukan: (1) Melakukan UX review dan user journey mapping, (2) Mendesain ulang checkout flow menjadi 3 langkah sederhana, (3) Membuat UI modern dengan Material UI / Tailwind CSS, (4) Implementasi lazy loading dan code splitting untuk optimasi performance, (5) Memastikan full responsive dan accessibility compliance (WCAG 2.1).",
      results: [
        "Estimasi peningkatan conversion rate 40-50%",
        "Pengurangan cart abandonment hingga 60%",
        "Page load time < 2 detik",
        "Mobile-first responsive design"
      ],
      technologies: ["React.js", "Next.js", "Material UI", "Redux Toolkit", "React Query"],
      duration: "Estimasi 2-3 bulan",
      team: "1-2 Frontend Developers"
    },
    {
      id: 2,
      type: "case-study",
      isSimulation: true,
      title: "Dashboard Performance Optimization",
      category: "Case Study Simulation",
      year: "2024",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      description: "Simulasi optimasi performa dashboard analytics dengan data besar dan real-time updates.",
      challenge: "Dashboard dengan data kompleks sering mengalami slow rendering, memory leak, dan UI freeze saat handle large datasets (10K+ rows). Real-time updates menyebabkan re-render berlebihan.",
      solution: "Strategi optimasi: (1) Implementasi virtualization untuk large lists (react-window), (2) Memoization dengan useMemo dan useCallback, (3) Debouncing untuk real-time updates, (4) Code splitting per module, (5) Optimasi bundle size dengan tree shaking, (6) Implementasi Web Workers untuk heavy computation.",
      results: [
        "Rendering time turun 70%",
        "Memory usage berkurang 50%",
        "Smooth 60fps performance",
        "Bundle size reduction 40%"
      ],
      technologies: ["React.js", "TypeScript", "Chart.js", "React Query", "Web Workers"],
      duration: "Estimasi 1-2 bulan",
      team: "1 Frontend Developer"
    },
    
    // INTERNAL COMPANY PROJECTS
    {
      id: 3,
      type: "internal",
      isSimulation: false,
      title: "Enterprise Dashboard Module",
      category: "Internal Project",
      year: "2024",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
      description: "Pengembangan modul dashboard monitoring untuk aplikasi enterprise menggunakan React.js, Next.js, dan Material UI.",
      challenge: "Membangun dashboard yang dapat menampilkan data real-time dari multiple API endpoints dengan performa optimal dan UI yang konsisten.",
      solution: "Mengimplementasikan modular architecture dengan reusable components, state management menggunakan Redux Toolkit, dan optimasi rendering dengan React.memo. Integrasi API kompleks dengan error handling yang robust.",
      results: [
        "Successfully deployed to production",
        "Handling 1000+ concurrent users",
        "99.9% uptime",
        "Positive feedback from stakeholders"
      ],
      technologies: ["React.js", "Next.js", "Material UI", "Redux Toolkit", "REST API"],
      duration: "4 bulan",
      team: "Team of 3 developers"
    },
    {
      id: 4,
      type: "internal",
      isSimulation: false,
      title: "Admin Panel Redesign",
      category: "Internal Project",
      year: "2023",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
      description: "Redesign dan modernisasi admin panel untuk meningkatkan user experience dan efisiensi operasional.",
      challenge: "Admin panel lama memiliki UI yang outdated, navigasi yang kompleks, dan performa yang lambat. Banyak komplain dari internal users.",
      solution: "Melakukan complete redesign dengan modern UI framework, simplifikasi navigasi, implementasi dark mode, dan optimasi performa. Fokus pada usability dan accessibility.",
      results: [
        "User satisfaction meningkat 85%",
        "Task completion time berkurang 40%",
        "Modern, intuitive interface",
        "Full responsive design"
      ],
      technologies: ["React.js", "Ant Design", "TypeScript", "React Router"],
      duration: "3 bulan",
      team: "Solo developer"
    },

    // PERSONAL PROJECTS
    {
      id: 5,
      type: "personal",
      isSimulation: false,
      title: "Task Management Dashboard",
      category: "Personal Project",
      year: "2024",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop",
      description: "Modern task management app dengan drag-and-drop, real-time collaboration, dan analytics dashboard.",
      challenge: "Membuat task manager yang lebih intuitif dari existing solutions dengan fokus pada visual clarity dan ease of use.",
      solution: "Built dengan React dan Material UI, implementasi drag-and-drop dengan react-beautiful-dnd, state management dengan Context API, dan local storage untuk data persistence.",
      results: [
        "Clean, modern UI/UX",
        "Drag-and-drop functionality",
        "Dark mode support",
        "Fully responsive"
      ],
      technologies: ["React.js", "Material UI", "Context API", "LocalStorage"],
      duration: "2 minggu",
      team: "Personal project"
    },
    {
      id: 6,
      type: "personal",
      isSimulation: false,
      title: "Finance Tracker App",
      category: "Personal Project",
      year: "2024",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop",
      description: "Personal finance tracker dengan expense categorization, budget planning, dan visual reports.",
      challenge: "Membuat finance tracker yang simple namun powerful, dengan visualisasi data yang mudah dipahami.",
      solution: "Menggunakan React dengan Chart.js untuk visualisasi, implementasi CRUD operations, dan responsive design dengan Tailwind CSS.",
      results: [
        "Interactive charts & graphs",
        "Budget tracking & alerts",
        "Export to CSV",
        "Mobile-friendly interface"
      ],
      technologies: ["React.js", "Tailwind CSS", "Chart.js", "IndexedDB"],
      duration: "3 minggu",
      team: "Personal project"
    },
    {
      id: 7,
      type: "personal",
      isSimulation: false,
      title: "Landing Page Builder",
      category: "Personal Project",
      year: "2023",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      description: "Tool untuk membuat landing page modern dengan pre-built components dan live preview.",
      challenge: "Membuat builder yang user-friendly dengan hasil yang professional dan customizable.",
      solution: "Component-based architecture dengan reusable UI blocks, live preview, dan export to HTML/CSS functionality.",
      results: [
        "10+ pre-built components",
        "Live preview feature",
        "Export functionality",
        "Responsive templates"
      ],
      technologies: ["React.js", "Styled Components", "React DnD"],
      duration: "1 bulan",
      team: "Personal project"
    }
  ];

  // Capabilities data
  const capabilities = [
    {
      title: "Frontend Development",
      description: "React.js, Next.js, TypeScript, JavaScript ES6+",
      icon: "💻",
      color: "var(--color-purple)"
    },
    {
      title: "UI Framework & Styling",
      description: "Material UI, Ant Design, Tailwind CSS, Styled Components",
      icon: "🎨",
      color: "var(--color-rose-gold)"
    },
    {
      title: "State Management",
      description: "Redux Toolkit, Context API, React Query, Zustand",
      icon: "⚡",
      color: "var(--color-gold)"
    },
    {
      title: "Dashboard & Admin Panel",
      description: "Complex data visualization, real-time monitoring, analytics",
      icon: "📊",
      color: "var(--color-emerald)"
    },
    {
      title: "API Integration",
      description: "REST API, GraphQL, WebSocket, Axios, Fetch API",
      icon: "🔌",
      color: "var(--color-purple)"
    },
    {
      title: "Performance Optimization",
      description: "Code splitting, lazy loading, memoization, bundle optimization",
      icon: "🚀",
      color: "var(--color-gold)"
    }
  ];

  const menuItems = [
    { key: "services", label: t.navServices },
    { key: "portfolio", label: t.navPortfolio },
    { key: "about", label: t.navAbout },
    { key: "contact", label: t.navContact },
  ];

  const onFinish = (values) => {
    message.success(
      "Thank you for your message! We will get back to you soon."
    );
    form.resetFields();
  };

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setDrawerVisible(false);
  };

  const openPortfolioModal = (portfolio) => {
    setSelectedPortfolio(portfolio);
    setModalVisible(true);
  };

  const closePortfolioModal = () => {
    setModalVisible(false);
    setTimeout(() => setSelectedPortfolio(null), 300);
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 100%)' }}>
      {/* Navigation */}
      <div className="fixed top-0 w-full glass-nav z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center space-x-3">
              <Title level={4} className="!mb-0 !text-lg md:!text-xl" style={{ color: 'var(--color-navy-dark)', fontFamily: 'Playfair Display, serif' }}>
                RASANARA
              </Title>
            </div>

            <div className="hidden md:flex items-center">
              <Menu
                mode="horizontal"
                className="border-0 bg-transparent font-medium"
                style={{ fontSize: '15px' }}
                items={menuItems.map((item) => ({
                  ...item,
                  onClick: () => scrollToSection(item.key),
                }))}
              />
              <Button
                type="text"
                className="ml-4"
                onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--color-navy-dark)',
                  fontWeight: '600',
                  fontSize: '14px'
                }}
              >
                <LanguageIcon style={{ fontSize: '18px' }} />
                {language === 'id' ? 'EN' : 'ID'}
              </Button>
              <Button
                type="primary"
                className="ml-2 btn-premium border-0 rounded-full px-8 py-3 h-auto font-semibold shadow-lg"
                style={{ 
                  background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-light) 100%)',
                  color: 'var(--color-navy-dark)'
                }}
                icon={<WhatsAppOutlined />}
                href="https://wa.me/6281297203692?text=Halo%20Rasanara%2C%20saya%20ingin%20mulai%20membangun%20cerita%20brand%20saya.%20Bisa%20bantu%20konsultasi%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.navCTA}
              </Button>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <Button
                type="text"
                size="small"
                onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  color: 'var(--color-navy-dark)',
                  fontWeight: '600',
                  fontSize: '12px',
                  padding: '4px 8px'
                }}
              >
                <LanguageIcon style={{ fontSize: '16px' }} />
                {language === 'id' ? 'EN' : 'ID'}
              </Button>
              <Button
                type="text"
                icon={<MenuOutlined />}
                onClick={() => setDrawerVisible(true)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        className="md:hidden"
      >
        <div className="space-y-4">
          {menuItems.map((item) => (
            <Button
              key={item.key}
              type="text"
              block
              onClick={() => scrollToSection(item.key)}
              className="text-left"
              style={{ fontSize: '16px', height: '48px' }}
            >
              {item.label}
            </Button>
          ))}
          <Button
            type="primary"
            block
            className="btn-premium border-0 rounded-full"
            style={{ 
              background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-light) 100%)',
              color: 'var(--color-navy-dark)',
              height: '48px',
              fontWeight: '600'
            }}
            icon={<WhatsAppOutlined />}
            href="https://wa.me/6281297203692?text=Halo%20Rasanara%2C%20saya%20ingin%20mulai%20membangun%20cerita%20brand%20saya.%20Bisa%20bantu%20konsultasi%3F"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setDrawerVisible(false)}
          >
            {t.navCTA}
          </Button>
        </div>
      </Drawer>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.03) 0%, rgba(99, 102, 241, 0.03) 50%, rgba(232, 180, 184, 0.03) 100%)' }}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 glass-card px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-semibold mb-8 md:mb-10 animate-fade-in-up" style={{ color: 'var(--color-navy-dark)' }}>
            <ThunderboltOutlined style={{ color: 'var(--color-gold)', fontSize: '14px' }} />
            <Text style={{ color: 'var(--color-navy-dark)', fontSize: 'inherit' }}>{t.heroBadge}</Text>
          </div>

          <Title level={1} className="!text-4xl sm:!text-5xl md:!text-6xl lg:!text-8xl !mb-6 md:!mb-8 animate-fade-in-up px-2" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '-0.03em' }}>
            <span style={{ 
              background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-light) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Rasa
            </span>
            <span style={{ color: 'var(--color-navy-dark)', margin: '0 0.2em md:0 0.3em' }}>+</span>
            <span style={{ 
              background: 'linear-gradient(135deg, var(--color-purple) 0%, var(--color-purple-light) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Narasi
            </span>
          </Title>

          <Paragraph className="!text-base md:!text-xl lg:!text-2xl !mb-8 md:!mb-12 max-w-3xl mx-auto animate-fade-in-up px-4" style={{ color: 'var(--color-gray-700)', lineHeight: '1.7', fontWeight: '400' }}>
            {t.heroDescription}<br/> <br/>"{t.heroTagline}"
          </Paragraph>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16 px-4">
            <Button
              type="primary"
              size="large"
              className="btn-premium border-0 rounded-full w-full sm:w-auto font-semibold shadow-lg"
              style={{ 
                background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-light) 100%)',
                color: 'var(--color-navy-dark)',
                padding: '12px 32px',
                height: 'auto',
                fontSize: '16px'
              }}
              icon={<ArrowRightOutlined />}
              href="#services"
            >
              {t.heroButton1}
            </Button>
            <Button
              size="large"
              className="glass-card rounded-full w-full sm:w-auto font-semibold border-0"
              style={{ 
                color: 'var(--color-navy-dark)',
                padding: '12px 32px',
                height: 'auto',
                fontSize: '16px'
              }}
              href="#portfolio"
            >
              {t.heroButton2}
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24" style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(249, 250, 251, 0.9) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Title
              level={2}
              className="!text-5xl md:!text-6xl !mb-6"
              style={{ color: 'var(--color-navy-dark)', fontFamily: 'Playfair Display, serif' }}
            >
             {t.servicesTitle}
            </Title>
            <Paragraph className="!text-xl !max-w-3xl mx-auto" style={{ color: 'var(--color-gray-600)', lineHeight: '1.8' }}>
              {t.servicesSubtitle}
            </Paragraph>
          </div>

          <Row gutter={[40, 40]}>
            {services.map((service, index) => (
              <Col xs={24} lg={8} key={index}>
                <div className="glass-card h-full rounded-3xl p-8 card-elegant">
                  <div
                    className="w-20 h-20 rounded-3xl flex items-center justify-center text-white mb-8 shadow-lg animate-float"
                    style={{
                      background: index === 0 
                        ? 'linear-gradient(135deg, var(--color-purple) 0%, var(--color-purple-light) 100%)'
                        : index === 1
                        ? 'linear-gradient(135deg, var(--color-rose-gold) 0%, var(--color-rose-gold-light) 100%)'
                        : 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-light) 100%)'
                    }}
                  >
                    {service.icon}
                  </div>

                  <Title level={3} className="!text-2xl !mb-4" style={{ color: 'var(--color-navy-dark)', fontFamily: 'Playfair Display, serif' }}>
                    {service.title}
                  </Title>

                  <Paragraph className="!mb-8" style={{ color: 'var(--color-gray-600)', lineHeight: '1.7', fontSize: '15px' }}>
                    {service.description}
                  </Paragraph>

                  <div className="space-y-4 mb-10">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center"
                      >
                        <CheckCircleOutlined className="mr-3 text-lg" style={{ color: 'var(--color-emerald)' }} />
                        <Text style={{ color: 'var(--color-gray-700)', fontSize: '14px' }}>{feature}</Text>
                      </div>
                    ))}
                  </div>

                  <Button
                    block
                    size="large"
                    className="btn-premium rounded-2xl font-semibold border-0 shadow-md"
                    style={{
                      background: 'linear-gradient(135deg, var(--color-navy-dark) 0%, var(--color-navy) 100%)',
                      color: 'white',
                      height: '48px'
                    }}
                  >
                    Learn More
                  </Button>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24" style={{ background: 'linear-gradient(135deg, rgba(232, 180, 184, 0.05) 0%, rgba(212, 175, 55, 0.05) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Title
              level={2}
              className="!text-5xl md:!text-6xl !mb-6"
              style={{ color: 'var(--color-navy-dark)', fontFamily: 'Playfair Display, serif' }}
            >
              {t.portfolioTitle}
            </Title>
            <Paragraph className="!text-xl !max-w-3xl mx-auto !mb-10" style={{ color: 'var(--color-gray-600)', lineHeight: '1.8' }}>
              {t.portfolioSubtitle}
            </Paragraph>
            
            {/* Category Filters */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '40px', padding: '0 16px' }}>
              <Button
                className={portfolioFilter === 'all' ? 'btn-premium' : ''}
                onClick={() => setPortfolioFilter('all')}
                style={{
                  borderRadius: '10px',
                  fontWeight: '600',
                  padding: '0 16px',
                  height: '36px',
                  fontSize: '13px',
                  background: portfolioFilter === 'all' 
                    ? 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-light) 100%)'
                    : 'white',
                  color: portfolioFilter === 'all' ? 'var(--color-navy-dark)' : 'var(--color-gray-600)',
                  border: portfolioFilter === 'all' ? 'none' : '1px solid var(--color-gray-300)'
                }}
              >
                {t.portfolioFilterAll}
              </Button>
              <Button
                className={portfolioFilter === 'case-study' ? 'btn-premium' : ''}
                onClick={() => setPortfolioFilter('case-study')}
                style={{
                  borderRadius: '10px',
                  fontWeight: '600',
                  padding: '0 16px',
                  height: '36px',
                  fontSize: '13px',
                  background: portfolioFilter === 'case-study' 
                    ? 'linear-gradient(135deg, var(--color-purple) 0%, var(--color-purple-light) 100%)'
                    : 'white',
                  color: portfolioFilter === 'case-study' ? 'white' : 'var(--color-gray-600)',
                  border: portfolioFilter === 'case-study' ? 'none' : '1px solid var(--color-gray-300)'
                }}
              >
                {t.portfolioFilterCaseStudy}
              </Button>
              <Button
                className={portfolioFilter === 'internal' ? 'btn-premium' : ''}
                onClick={() => setPortfolioFilter('internal')}
                style={{
                  borderRadius: '10px',
                  fontWeight: '600',
                  padding: '0 16px',
                  height: '36px',
                  fontSize: '13px',
                  background: portfolioFilter === 'internal' 
                    ? 'linear-gradient(135deg, var(--color-emerald) 0%, #34D399 100%)'
                    : 'white',
                  color: portfolioFilter === 'internal' ? 'white' : 'var(--color-gray-600)',
                  border: portfolioFilter === 'internal' ? 'none' : '1px solid var(--color-gray-300)'
                }}
              >
                {t.portfolioFilterInternal}
              </Button>
              <Button
                className={portfolioFilter === 'personal' ? 'btn-premium' : ''}
                onClick={() => setPortfolioFilter('personal')}
                style={{
                  borderRadius: '10px',
                  fontWeight: '600',
                  padding: '0 16px',
                  height: '36px',
                  fontSize: '13px',
                  background: portfolioFilter === 'personal' 
                    ? 'linear-gradient(135deg, var(--color-rose-gold) 0%, var(--color-rose-gold-light) 100%)'
                    : 'white',
                  color: portfolioFilter === 'personal' ? 'white' : 'var(--color-gray-600)',
                  border: portfolioFilter === 'personal' ? 'none' : '1px solid var(--color-gray-300)'
                }}
              >
                {t.portfolioFilterPersonal}
              </Button>
            </div>
          </div>

          <Row gutter={[32, 32]}>
            {portfolioItems
              .filter(item => portfolioFilter === 'all' || item.type === portfolioFilter)
              .map((item) => (
              <Col xs={24} sm={12} lg={8} key={item.id}>
                <div 
                  className="glass-card rounded-3xl overflow-hidden card-elegant cursor-pointer h-full"
                  onClick={() => openPortfolioModal(item)}
                  style={{ position: 'relative' }}
                >
                  <div style={{ position: 'relative', overflow: 'hidden', height: '240px' }}>
                    <img 
                      src={item.thumbnail} 
                      alt={item.title}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    <div 
                      style={{ 
                        position: 'absolute', 
                        top: 0, 
                        left: 0, 
                        right: 0, 
                        bottom: 0,
                        background: 'linear-gradient(180deg, transparent 0%, rgba(15, 23, 42, 0.7) 100%)',
                        display: 'flex',
                        alignItems: 'flex-end',
                        padding: '20px',
                        gap: '8px',
                        flexWrap: 'wrap'
                      }}
                    >
                      <Tag 
                        style={{ 
                          background: item.type === 'case-study'
                            ? 'linear-gradient(135deg, var(--color-purple) 0%, var(--color-purple-light) 100%)'
                            : item.type === 'internal'
                            ? 'linear-gradient(135deg, var(--color-emerald) 0%, #34D399 100%)'
                            : 'linear-gradient(135deg, var(--color-rose-gold) 0%, var(--color-rose-gold-light) 100%)',
                          border: 'none',
                          color: 'white',
                          fontWeight: '600',
                          padding: '4px 12px',
                          borderRadius: '8px'
                        }}
                      >
                        {item.category}
                      </Tag>
                      {item.isSimulation && (
                        <Tag 
                          style={{ 
                            background: 'rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            color: 'white',
                            fontWeight: '600',
                            padding: '4px 12px',
                            borderRadius: '8px'
                          }}
                        >
                          {t.portfolioSimulationBadge}
                        </Tag>
                      )}
                    </div>
                  </div>
                  
                  <div style={{ padding: '24px' }}>
                    <Title 
                      level={4} 
                      className="!mb-3" 
                      style={{ color: 'var(--color-navy-dark)', fontFamily: 'Playfair Display, serif', fontSize: '20px' }}
                    >
                      {item.title}
                    </Title>
                    <Paragraph 
                      className="!mb-4" 
                      style={{ color: 'var(--color-gray-600)', fontSize: '14px', lineHeight: '1.6' }}
                      ellipsis={{ rows: 2 }}
                    >
                      {item.description}
                    </Paragraph>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Text style={{ color: 'var(--color-gray-500)', fontSize: '13px' }}>
                        {item.year}
                      </Text>
                      <Button 
                        type="text" 
                        icon={<EyeOutlined />}
                        style={{ color: 'var(--color-purple)', fontWeight: '600' }}
                      >
                        {t.portfolioViewDetails}
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>


      {/* Capabilities Section */}
      <section className="py-24" style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(249, 250, 251, 0.9) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Title
              level={2}
              className="!text-5xl md:!text-6xl !mb-6"
              style={{ color: 'var(--color-navy-dark)', fontFamily: 'Playfair Display, serif' }}
            >
              {t.capabilitiesTitle}
            </Title>
            <Paragraph className="!text-xl !max-w-3xl mx-auto" style={{ color: 'var(--color-gray-600)', lineHeight: '1.8' }}>
              {t.capabilitiesSubtitle}
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            {capabilities.map((capability, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <div className="glass-card h-full rounded-3xl p-8 card-elegant text-center">
                  <div
                    style={{
                      fontSize: '48px',
                      marginBottom: '20px',
                      display: 'inline-block'
                    }}
                  >
                    {capability.icon}
                  </div>
                  <Title level={4} className="!text-xl !mb-4" style={{ color: 'var(--color-navy-dark)', fontFamily: 'Playfair Display, serif' }}>
                    {capability.title}
                  </Title>
                  <Paragraph className="!mb-0" style={{ color: 'var(--color-gray-600)', lineHeight: '1.7', fontSize: '15px' }}>
                    {capability.description}
                  </Paragraph>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24"
        style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(249, 250, 251, 0.95) 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Row gutter={[64, 48]} align="middle">
            <Col xs={24} lg={12}>
              <Title
                level={2}
                className="!text-3xl md:!text-4xl !mb-8"
                style={{ color: 'var(--color-navy-dark)', fontFamily: 'Playfair Display, serif' }}
              >
               {t.aboutTitle1} <br/>{t.aboutTitle2} {""}
                <span style={{ 
                  background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-light) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {t.aboutTitle3}
                </span>
              </Title>
              <Paragraph className="!text-lg !mb-6" style={{ color: 'var(--color-gray-700)', lineHeight: '1.8' }}>
               {t.aboutDesc1} {""}<strong style={{ color: 'var(--color-gold)' }}>{t.aboutDesc1Bold1}</strong> {t.aboutDesc1Text}{" "}
                <strong style={{ color: 'var(--color-purple)' }}>{t.aboutDesc1Bold2} {""}</strong>{t.aboutDesc1End}
              </Paragraph>
              <Paragraph className="!text-lg !mb-10" style={{ color: 'var(--color-gray-700)', lineHeight: '1.8' }}>
               {t.aboutDesc2}
              </Paragraph>

              <div className="space-y-5">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-4" style={{ background: 'var(--color-gold)' }}></div>
                  <Text className="text-base font-medium" style={{ color: 'var(--color-gray-700)' }}>
                    {t.aboutPoint1}
                  </Text>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-4" style={{ background: 'var(--color-purple)' }}></div>
                  <Text className="text-base font-medium" style={{ color: 'var(--color-gray-700)' }}>
                   {t.aboutPoint2}
                  </Text>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-4" style={{ background: 'var(--color-emerald)' }}></div>
                  <Text className="text-base font-medium" style={{ color: 'var(--color-gray-700)' }}>
                   {t.aboutPoint3}
                  </Text>
                </div>
              </div>
            </Col>

            <Col xs={24} lg={12}>
              <div className="relative">
                <div className="glass-card rounded-3xl p-10 shadow-xl" style={{ background: 'linear-gradient(135deg, var(--color-navy-dark) 0%, var(--color-navy) 100%)' }}>
                  <Title level={3} className="!mb-6" style={{ color: 'white', fontFamily: 'Playfair Display, serif' }}>
                   {t.aboutMissionTitle}
                  </Title>
                  <Paragraph className="!text-lg !mb-0" style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.8' }}>
                    "{t.aboutMission}"
                  </Paragraph>
                </div>
                <div className="custom-card absolute -top-6 -right-6 md:-top-8 md:-right-8 shadow-2xl border-0 rounded-2xl md:rounded-3xl p-4 md:p-6">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-light) 100%)' }}>
                      <UserOutlined className="text-2xl md:text-3xl" style={{ color: 'var(--color-navy-dark)' }} />
                    </div>
                    <div className="">
                      <Title
                        level={4}
                        className="!text-2xl md:!text-3xl !mb-1"
                        style={{ color: '#fff', fontFamily: 'Playfair Display, serif' }}
                      >
                        100+
                      </Title>
                      <Text style={{ color: '#fff', fontSize: '12px', display: 'block' }} className="md:text-sm">{t.aboutStats}</Text>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section id="testimonials" className="py-24" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(249, 250, 251, 0.95) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Title
              level={2}
              className="!text-5xl md:!text-6xl !mb-6"
              style={{ color: 'var(--color-navy-dark)', fontFamily: 'Playfair Display, serif' }}
            >
              What People Say
            </Title>
            <Paragraph className="!text-xl" style={{ color: 'var(--color-gray-600)' }}>
              Stories from brands we've helped transform
            </Paragraph>
          </div>

          <div className="max-w-5xl mx-auto">
            <Carousel autoplay effect="fade" className="testimonial-carousel">
              {testimonials.map((testimonial, index) => (
                <div key={index}>
                  <div className="glass-card border-0 text-center rounded-3xl p-12 shadow-xl">
                    <Rate
                      disabled
                      defaultValue={testimonial.rating}
                      className="mb-8"
                      style={{ color: 'var(--color-gold)', fontSize: '24px' }}
                    />
                    <Paragraph className="!text-2xl md:!text-3xl !font-medium !mb-10" style={{ color: 'var(--color-navy-dark)', lineHeight: '1.6', fontFamily: 'Playfair Display, serif' }}>
                      "{testimonial.content}"
                    </Paragraph>
                    <div className="flex items-center justify-center space-x-5">
                      <Avatar
                        size={64}
                        className="font-bold shadow-lg"
                        style={{ background: 'linear-gradient(135deg, var(--color-purple) 0%, var(--color-purple-light) 100%)', color: 'white', fontSize: '24px' }}
                      >
                        {testimonial.avatar}
                      </Avatar>
                      <div className="text-left">
                        <Title level={5} className="!mb-1" style={{ color: 'var(--color-navy-dark)', fontFamily: 'Playfair Display, serif' }}>
                          {testimonial.name}
                        </Title>
                        <Text style={{ color: 'var(--color-gray-600)', fontSize: '15px' }}>
                          {testimonial.role}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-28 text-white" style={{ background: 'linear-gradient(135deg, var(--color-navy-dark) 0%, var(--color-navy) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Title level={2} className="!text-5xl md:!text-6xl !text-white !mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t.ctaTitle}
          </Title>
          <Paragraph className="!text-xl !mb-12 max-w-3xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.7' }}>
            {t.ctaDescription}
          </Paragraph>
          <Space size="large" wrap>
            <Button
              type="primary"
              size="large"
              className="btn-premium border-0 rounded-full px-10 py-3 h-auto text-lg font-semibold shadow-xl"
              style={{ 
                background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-light) 100%)',
                color: 'var(--color-navy-dark)'
              }}
              href="https://wa.me/6281297203692?text=Halo%20Rasanara%2C%20saya%20ingin%20mulai%20membangun%20cerita%20brand%20saya.%20Bisa%20bantu%20konsultasi%3F"
              target="_blank"
              rel="noopener noreferrer"
              icon={<WhatsAppOutlined />}
            >
              {t.ctaButton}
            </Button>
          </Space>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24" style={{ background: 'linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Title
              level={2}
              className="!text-5xl md:!text-6xl !mb-6"
              style={{ color: 'var(--color-navy-dark)', fontFamily: 'Playfair Display, serif' }}
            >
              {t.contactTitle}
            </Title>
            <Paragraph className="!text-xl" style={{ color: 'var(--color-gray-600)' }}>
             {t.contactSubtitle}
            </Paragraph>
          </div>

          <Row gutter={[32, 32]} justify="center">
            <Col xs={24} md={10}>
              <a 
                href="mailto:rasanaraholdingco@gmail.com"
                style={{ textDecoration: 'none' }}
              >
                <div 
                  className="glass-card border-0 rounded-3xl p-8 card-elegant"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.03) 100%)',
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.08) 100%)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.03) 100%)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div 
                      style={{ 
                        width: '56px', 
                        height: '56px', 
                        borderRadius: '18px', 
                        background: 'linear-gradient(135deg, var(--color-emerald) 0%, #34D399 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <MailOutlined style={{ fontSize: '28px', color: 'white' }} />
                    </div>
                    <div style={{ flex: 1, textAlign: 'left' }}>
                      <Title level={4} className="!mb-1" style={{ color: 'var(--color-navy-dark)', fontFamily: 'Playfair Display, serif', fontSize: '20px' }}>
                        {t.contactEmail}
                      </Title>
                      <Text style={{ 
                        display: 'block',
                        color: 'var(--color-gray-600)', 
                        fontSize: '14px'
                      }}>
                        {t.contactEmailDesc}
                      </Text>
                    </div>
                    <ArrowRightOutlined style={{ fontSize: '20px', color: 'var(--color-emerald)' }} />
                  </div>
                </div>
              </a>
            </Col>

            <Col xs={24} md={10}>
              <a 
                href="https://wa.me/6281297203692?text=Halo%20Rasanara%2C%20saya%20ingin%20mulai%20membangun%20cerita%20brand%20saya.%20Bisa%20bantu%20konsultasi%3F"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div 
                  className="glass-card border-0 rounded-3xl p-8 card-elegant"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(99, 102, 241, 0.03) 100%)',
                    border: '1px solid rgba(99, 102, 241, 0.2)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0.08) 100%)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(99, 102, 241, 0.03) 100%)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div 
                      style={{ 
                        width: '56px', 
                        height: '56px', 
                        borderRadius: '18px', 
                        background: 'linear-gradient(135deg, var(--color-purple) 0%, var(--color-purple-light) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <PhoneOutlined style={{ fontSize: '28px', color: 'white' }} />
                    </div>
                    <div style={{ flex: 1, textAlign: 'left' }}>
                      <Title level={4} className="!mb-1" style={{ color: 'var(--color-navy-dark)', fontFamily: 'Playfair Display, serif', fontSize: '20px' }}>
                        {t.contactWhatsApp}
                      </Title>
                      <Text style={{ 
                        display: 'block',
                        color: 'var(--color-gray-600)', 
                        fontSize: '14px'
                      }}>
                        {t.contactWhatsAppDesc}
                      </Text>
                    </div>
                    <ArrowRightOutlined style={{ fontSize: '20px', color: 'var(--color-purple)' }} />
                  </div>
                </div>
              </a>
            </Col>
          </Row>

          {/* <Divider style={{ margin: '60px 0', borderColor: 'var(--color-gray-300)' }} />

          <div className="max-w-3xl mx-auto">
            <Title level={3} className="text-center !mb-10" style={{ color: 'var(--color-navy-dark)', fontFamily: 'Playfair Display, serif' }}>
             Sampaikan Pesan Anda
            </Title>
            <div className="glass-card rounded-3xl p-10">
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
              >
                <Row gutter={[20, 0]}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label={<span style={{ color: 'var(--color-navy-dark)', fontWeight: '500' }}>Name</span>}
                      name="name"
                      rules={[
                        { required: true, message: "Please input your name!" },
                      ]}
                    >
                      <Input size="large" placeholder="Your Name" className="rounded-xl" style={{ height: '48px' }} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label={<span style={{ color: 'var(--color-navy-dark)', fontWeight: '500' }}>Email</span>}
                      name="email"
                      rules={[
                        { required: true, message: "Please input your email!" },
                        { type: "email", message: "Please enter a valid email!" },
                      ]}
                    >
                      <Input size="large" placeholder="your@email.com" className="rounded-xl" style={{ height: '48px' }} />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item
                  label={<span style={{ color: 'var(--color-navy-dark)', fontWeight: '500' }}>Subject</span>}
                  name="subject"
                  rules={[
                    { required: true, message: "Please input the subject!" },
                  ]}
                >
                  <Input size="large" placeholder="How can we help you?" className="rounded-xl" style={{ height: '48px' }} />
                </Form.Item>
                <Form.Item
                  label={<span style={{ color: 'var(--color-navy-dark)', fontWeight: '500' }}>Message</span>}
                  name="message"
                  rules={[
                    { required: true, message: "Please input your message!" },
                  ]}
                >
                  <Input.TextArea
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="rounded-xl"
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    block
                    className="btn-premium border-0 rounded-2xl text-lg font-semibold shadow-lg"
                    style={{ 
                      background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-light) 100%)',
                      color: 'var(--color-navy-dark)',
                      height: '56px'
                    }}
                    icon={<ArrowRightOutlined />}
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-16" style={{ background: 'linear-gradient(135deg, var(--color-navy-dark) 0%, var(--color-navy) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Row justify="space-between" align="middle" gutter={[0, 24]}>
            <Col xs={24} md={12} className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-light) 100%)' }}>
                  <span className="font-bold text-xl md:text-2xl" style={{ color: 'var(--color-navy-dark)', fontFamily: 'Playfair Display, serif' }}>R</span>
                </div>
                <Title level={4} className="!mb-0 !text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Rasanara                
                </Title>
              </div>
            </Col>

            <Col xs={24} md={12} className="text-center md:text-right">
              <Paragraph className="!mb-3 md:text-base" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>
              {t.footerTagline}
              </Paragraph>
              <Text style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '13px' }} className="md:text-sm">
                © 2024 Rasanarsa. {t.footerCopyright}{" "}
                <HeartOutlined style={{ color: 'var(--color-rose-gold)' }} /> {t.footerLocation}
              </Text>
            </Col>
          </Row>
        </div>
      </footer>

      {/* Portfolio Detail Modal */}
      <Modal
        open={modalVisible}
        onCancel={closePortfolioModal}
        footer={null}
        width="90%"
        style={{ maxWidth: '900px', top: 20 }}
        closeIcon={<CloseOutlined style={{ color: 'var(--color-navy-dark)', fontSize: '20px' }} />}
        styles={{
          body: { padding: 0 },
          content: { borderRadius: '16px', overflow: 'hidden' }
        }}
      >
        {selectedPortfolio && (
          <div>
            {/* Modal Header Image */}
            <div style={{ position: 'relative', height: '250px', overflow: 'hidden' }} className="md:h-96">
              <img 
                src={selectedPortfolio.image} 
                alt={selectedPortfolio.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div 
                style={{ 
                  position: 'absolute', 
                  bottom: 0, 
                  left: 0, 
                  right: 0,
                  background: 'linear-gradient(180deg, transparent 0%, rgba(15, 23, 42, 0.95) 100%)',
                  padding: '40px 20px 20px'
                }}
                className="md:p-10"
              >
                <div style={{ marginBottom: '12px' }}>
                  <Tag 
                    style={{ 
                      background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-light) 100%)',
                      border: 'none',
                      color: 'var(--color-navy-dark)',
                      fontWeight: '600',
                      padding: '4px 12px',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                  >
                    {selectedPortfolio.category}
                  </Tag>
                  {selectedPortfolio.isSimulation && (
                    <Tag 
                      style={{ 
                        background: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        color: 'white',
                        fontWeight: '600',
                        padding: '4px 12px',
                        borderRadius: '8px',
                        marginLeft: '8px',
                        fontSize: '12px'
                      }}
                    >
                      {t.portfolioSimulationBadge}
                    </Tag>
                  )}
                </div>
                <Title 
                  level={2} 
                  className="!mb-2 !text-xl md:!text-2xl" 
                  style={{ color: 'white', fontFamily: 'Playfair Display, serif' }}
                >
                  {selectedPortfolio.title}
                </Title>
                <div style={{ display: 'flex', gap: '16px', marginTop: '12px', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <UserOutlined style={{ color: 'var(--color-gold)', fontSize: '12px' }} />
                    <Text style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '12px' }}>
                      {selectedPortfolio.client}
                    </Text>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CalendarOutlined style={{ color: 'var(--color-gold)', fontSize: '12px' }} />
                    <Text style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '12px' }}>
                      {selectedPortfolio.year}
                    </Text>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <TeamOutlined style={{ color: 'var(--color-gold)', fontSize: '12px' }} />
                    <Text style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '12px' }}>
                      {selectedPortfolio.team}
                    </Text>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '20px' }} className="md:p-10">
              {/* Description */}
              <div style={{ marginBottom: '32px' }}>
                <Paragraph 
                  style={{ 
                    color: 'var(--color-gray-700)', 
                    fontSize: '16px', 
                    lineHeight: '1.8',
                    marginBottom: 0
                  }}
                >
                  {selectedPortfolio.description}
                </Paragraph>
              </div>

              {/* Challenge */}
              <div style={{ marginBottom: '32px' }}>
                <Title 
                  level={4} 
                  style={{ 
                    color: 'var(--color-navy-dark)', 
                    fontFamily: 'Playfair Display, serif',
                    marginBottom: '12px'
                  }}
                >
                  {t.modalChallenge}
                </Title>
                <Paragraph 
                  style={{ 
                    color: 'var(--color-gray-600)', 
                    fontSize: '15px', 
                    lineHeight: '1.7',
                    marginBottom: 0
                  }}
                >
                  {selectedPortfolio.challenge}
                </Paragraph>
              </div>

              {/* Solution */}
              <div style={{ marginBottom: '32px' }}>
                <Title 
                  level={4} 
                  style={{ 
                    color: 'var(--color-navy-dark)', 
                    fontFamily: 'Playfair Display, serif',
                    marginBottom: '12px'
                  }}
                >
                  {selectedPortfolio.isSimulation ? t.modalApproach : t.modalSolution}
                </Title>
                <Paragraph 
                  style={{ 
                    color: 'var(--color-gray-600)', 
                    fontSize: '15px', 
                    lineHeight: '1.7',
                    marginBottom: 0
                  }}
                >
                  {selectedPortfolio.solution}
                </Paragraph>
              </div>

              {/* Results */}
              <div style={{ marginBottom: '32px' }}>
                <Title 
                  level={4} 
                  style={{ 
                    color: 'var(--color-navy-dark)', 
                    fontFamily: 'Playfair Display, serif',
                    marginBottom: '16px'
                  }}
                >
                  {selectedPortfolio.isSimulation ? t.modalExpectedResults : t.modalResults}
                </Title>
                <Row gutter={[16, 16]}>
                  {selectedPortfolio.results.map((result, index) => (
                    <Col xs={24} sm={12} key={index}>
                      <div 
                        className="glass-card" 
                        style={{ 
                          padding: '16px 20px', 
                          borderRadius: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px'
                        }}
                      >
                        <CheckCircleOutlined 
                          style={{ 
                            color: 'var(--color-emerald)', 
                            fontSize: '20px',
                            flexShrink: 0
                          }} 
                        />
                        <Text 
                          style={{ 
                            color: 'var(--color-gray-700)', 
                            fontSize: '14px',
                            fontWeight: '500'
                          }}
                        >
                          {result}
                        </Text>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>

              {/* Technologies & Project Info */}
              <div>
                <Title 
                  level={4} 
                  style={{ 
                    color: 'var(--color-navy-dark)', 
                    fontFamily: 'Playfair Display, serif',
                    marginBottom: '16px'
                  }}
                >
                  {t.modalTechnologies}
                </Title>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '24px' }}>
                  {selectedPortfolio.technologies.map((tech, index) => (
                    <Tag 
                      key={index}
                      style={{ 
                        background: 'linear-gradient(135deg, var(--color-purple) 0%, var(--color-purple-light) 100%)',
                        border: 'none',
                        color: 'white',
                        padding: '6px 16px',
                        borderRadius: '10px',
                        fontSize: '13px',
                        fontWeight: '500'
                      }}
                    >
                      {tech}
                    </Tag>
                  ))}
                </div>

                <div 
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(99, 102, 241, 0.08) 100%)',
                    padding: '16px',
                    borderRadius: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                  }}
                  className="md:flex-row md:justify-between md:items-center"
                >
                  <div>
                    <Text style={{ color: 'var(--color-gray-500)', fontSize: '12px', display: 'block' }}>
                      {t.modalDuration}
                    </Text>
                    <Text style={{ color: 'var(--color-navy-dark)', fontSize: '15px', fontWeight: '600' }}>
                      {selectedPortfolio.duration}
                    </Text>
                  </div>
                  <Button 
                    type="primary"
                    block
                    className="btn-premium md:inline-block"
                    style={{ 
                      background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-light) 100%)',
                      color: 'var(--color-navy-dark)',
                      border: 'none',
                      borderRadius: '12px',
                      fontWeight: '600',
                      padding: '12px 24px',
                      height: 'auto'
                    }}
                  >
                    {t.modalStartProject}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>


      <style jsx>{`
        .testimonial-carousel .ant-carousel .ant-carousel-dots {
          bottom: -60px;
        }
        .testimonial-carousel .ant-carousel .ant-carousel-dots li button {
          background: var(--color-gray-300);
          width: 14px;
          height: 14px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .testimonial-carousel .ant-carousel .ant-carousel-dots li button:hover {
          background: var(--color-gold);
        }
        .testimonial-carousel
          .ant-carousel
          .ant-carousel-dots
          li.ant-carousel-dots-active
          button {
          background: var(--color-gold);
          width: 40px;
          border-radius: 7px;
        }
      `}</style>
    </div>
  );
};

export default Home;
