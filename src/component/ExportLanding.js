import React, { useState, useRef, useEffect, createContext, useContext } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Lenis from "lenis";

/* ============================================================
   LANGUAGE DICTIONARY & CONTEXT
   ============================================================ */
const LanguageContext = createContext();

const translations = {
  EN: {
    eyebrowNav: "· Software engineer & Product thinker — Web · Automation · AI",
    navWork: "Work",
    navFaq: "FAQ",
    navCta: "Start a free discussion →",
    heroEyebrow: "Software engineer & Product thinker — helping businesses run lighter",
    heroTitle1: "I build ",
    heroTitle2: "systems",
    heroTitle3: " that actually get used.",
    heroSub1: "Not just code that runs — but ",
    heroSub2: "your team's time back",
    heroSub3: ", and ",
    heroSub4: "nights that stop being late",
    heroSub5: " because of something that should've been automated.",
    heroParagraph: "From automation and AI agents to SaaS products, work isn't finished until it's ",
    heroParagraphBold: "used every day",
    heroParagraphEnd: ", not just demoed.",
    heroBtnPrimary: "Explore the story ↓",
    heroBtnSecondary: "Talk to me",

    // Section 2 - Reality
    sec2Tag: "( Section 2 — The Reality )",
    sec2Headline: '"Growing businesses shouldn\'t rely on spreadsheets and manual work."',
    sec2MorphTag: "( Continuous Transition )",
    sec2MorphTitle1: "We don't just build software.",
    sec2MorphTitle2: "We redesign how your business works.",
    p1Title: "Point 01",
    p1Text: "Business data scattered across multiple tools.",
    p2Title: "Point 02",
    p2Text: "Manual processes waste valuable time.",
    p3Title: "Point 03",
    p3Text: "Decisions rely on outdated information.",
    p4Title: "Point 04",
    p4Text: "Teams repeat the same work every day.",

    // Section 3 - What We Do
    sec3Tag: "( Section 3 — What We Do )",
    sec3Title1: "Four core capabilities.",
    sec3Title2: "One integrated system.",
    sec3Sub: "Each service is not an isolated component — every solution builds upon the previous one to form a resilient ecosystem.",
    sec3Proceed: "Proceeding to Business Transformation ↓",
    s1Title: "Custom Software",
    s1Desc: "Tailored engineering designed around your business domain.",
    s2Title: "AI Automation",
    s2Desc: "Intelligent agents that qualify leads, answer inquiries, and reduce manual load.",
    s3Title: "Business Dashboard",
    s3Desc: "Real-time visibility into multi-channel inventory, sales, and operations.",
    s4Title: "System Integration",
    s4Desc: "Connecting your isolated SaaS tools into one unified automated pipeline.",

    // Section 4 - Business Transformation
    sec4Tag: "( Section 4 — Business Transformation )",
    sec4Title1: "From manual operations to ",
    sec4Title2: "intelligent systems.",
    sec4Sub: "We help businesses redesign workflows, automate operations, and build scalable digital systems powered by AI.",
    sec4MorphTitle: '"Every inefficient workflow has a cost."',
    sec4MorphSub: "From understanding comes the narrative. From the narrative comes the solution.",
    m1Val: "3× Faster",
    m1Label: "Workflow Speed",
    m2Val: "95% Less",
    m2Label: "Manual Overhead",
    m3Val: "24/7",
    m3Label: "Active AI Systems",

    // Section 5 - Work
    workTag: "( Work that's live )",
    workTitle1: "What's been ",
    workTitle2: "fixed.",
    w1Title: "Rasanara Education Platform",
    w1Tag: "Skola Multi-tenant Student Enrollment System",
    w1Prob: "Manual admission tracking across spreadsheet silos.",
    w1Sys: "Unified portal with role-based access for admins & applicants.",
    w1Imp: "Reduced intake processing time from weeks to real-time status updates.",
    w1Rasa: "Parents get instant clarity; administrators get their sanity back.",
    w2Title: "Rasanara Digital Insights",
    w2Tag: "TikTok Viral Explorer Automated Data Scraping & Scoring",
    w2Prob: "Marketing teams spending 4+ hours daily manually looking for trending products.",
    w2Sys: "Automated scraper calculating engagement & viral potential scores.",
    w2Imp: "Automated 100% of daily video discovery with instant AI summary.",
    w2Rasa: "Turning raw social noise into clear, actionable product direction.",

    // Section 6 - Tech Stack
    techTag: "( Tools in use )",
    techTitle1: "The stack ",
    techTitle2: "follows the problem",
    techTitle3: ", not the other way around.",

    // Section 7 - Pricing
    priceTag: "( Pricing, kept transparent )",
    priceTitle: "Here's roughly what it costs.",
    priceFoot1: "Free 30-minute chat → written recommendation → fixed scope. ",
    priceFoot2: "Nothing starts until you say yes.",
    tier1Name: "Automation & AI Agents",
    tier1Range: "Rp 3 – 8 Million",
    tier1Desc: "First deployment, automated follow-up & lead qualification pipelines.",
    tier2Name: "Business Systems & Dashboards",
    tier2Range: "Rp 10 Million+",
    tier2Desc: "Connected inventory, seamless reseller operations, and intelligent business workflows.",
    tier3Name: "Web & Digital Products",
    tier3Range: "Rp 2 – 5 Million",
    tier3Desc: "High-converting landing pages up to custom web applications.",

    // Section 8 - FAQ
    faqTag: "( So it's clear from the start )",
    faqTitle: "Honest answers, no filler.",
    q1: "What does Rasanara actually do?",
    a1: "Rasanara helps businesses identify operational bottlenecks, redesign messy workflows, and build custom digital systems, automations, and AI integrations that save time and restore peace of mind.",
    q2: "How do you keep a project from stalling halfway through?",
    a2: "We ship in small, functional iterations. You get a progress version from day one, with weekly demos and clear documentation.",
    q3: "How much does it cost?",
    a3: "Projects typically range from Rp 2M for lightweight web builds up to Rp 10M+ for complete custom business systems.",
    q4: "Who is this NOT a good fit for?",
    a4: "Businesses wanting instant magic without discussing actual requirements, or those looking for a large traditional agency headcount.",
    q5: "What happens if I want to stop midway?",
    a5: "You retain full ownership of everything built up to that point — code, accounts, and documentation. No lock-in.",
    q6: "Can you sign an NDA if our data is sensitive?",
    a6: "Yes, absolutely. We prioritize data privacy and sign NDAs before accessing internal business data.",

    // Section 9 - Contact
    contactTag: "( Free 30-minute chat )",
    contactTitle1: "Walk away with a ",
    contactTitle2: "clear next step.",
    contactSub: "Not a sales call in disguise. I look for the one thing costing your business the most, then tell you honestly whether it actually needs a system — or not.",
    lblQuestion: "Which part of your business eats the most time or money?",
    phQuestion: "e.g. WhatsApp chats piling up, manual order recaps, inventory sync...",
    lblName: "Your Name",
    phName: "Name",
    lblContact: "Email or WhatsApp Number",
    phContact: "Contact detail",
    btnSubmit: "Start the conversation →",
    contactFoot: "30 minutes · no sales deck · walk away with one concrete step.",

    // Footer
    footerBrand: "rasanara",
    footerTagline: "Software engineer & Product thinker · building systems that get used, not just systems that run.",
    footerCopy: "© Rasanara — problems in, systems that actually get used out.",
  },
  ID: {
    eyebrowNav: "· Software engineer & Product thinker — Web · Otomasi · AI",
    navWork: "Portofolio",
    navFaq: "FAQ",
    navCta: "Mulai cerita gratis →",
    heroEyebrow: "Software engineer & Product thinker — membantu bisnis berjalan lebih efektif dan efisien",
    heroTitle1: "Setiap bisnis punya",
    heroTitle2: " cerita",
    heroTitle3: " kami menerjemahkannya sebagai solusi",
    heroSub1: "Teknologi terbaik lahir dari cerita yang dipahami dengan baik.",
    heroSub2: " Pekerjaan yang dilakukan berulang",
    heroSub3: ", dan ",
    heroSub4: "setiap peluang yang hilang",
    heroSub5: " untuk hal yang seharusnya sudah diotomasi.",
    heroParagraph: "Dari otomasi dan AI agent hingga solusi custom, setiap solusi dibangun untuk mendukung",
    heroParagraphBold: "cara bisnis anda bekerja setiap hari",
    heroParagraphEnd: ", bukan hanya sekadar demo.",
    heroBtnPrimary: "Mulai Cerita Anda",
    heroBtnSecondary: "Diskusi dengan kami",

    // Section 2 - Reality
    sec2Tag: "( Bagian 2 — Realita Bisnis )",
    sec2Headline: '"Bisnis yang berkembang membutuhkan sistem yang ikut berkembang."',
    sec2MorphTag: "( Transisi Berkelanjutan )",
    sec2MorphTitle1: "Kami tidak hanya membuat software.",
    sec2MorphTitle2: "Kami merancang ulang cara bisnis Anda bekerja.",
    p1Title: "Poin 01",
    p1Text: "Data bisnis tersebar di berbagai aplikasi terpisah.",
    p2Title: "Poin 02",
    p2Text: "Proses manual membuang waktu operasional berharga.",
    p3Title: "Poin 03",
    p3Text: "Keputusan diambil berdasarkan informasi yang terlambat.",
    p4Title: "Poin 04",
    p4Text: "Tim mengulang pekerjaan rutin yang sama setiap hari.",

    // Section 3 - What We Do
    sec3Tag: "( Bagian 3 — Yang Kami Kerjakan )",
    sec3Title1: "Empat kapabilitas utama.",
    sec3Title2: "Satu ekosistem terpadu.",
    sec3Sub: "Setiap solusi dirancang untuk saling melengkapi, membentuk satu sistem bisnis yang terhubung.",
    sec3Proceed: "Lanjut ke Transformasi Bisnis ↓",
    s1Title: "Custom Software",
    s1Desc: "Solusi berbasis sistem yang dirancang khusus untuk menjawab kebutuhan operasional bisnis Anda.",
    s2Title: "AI Automation",
    s2Desc: "AI Agent membantu bisnis menjaga setiap peluang, mengotomatisasi pekerjaan berulang, dan memberi ruang bagi tim untuk fokus pada hal yang lebih bernilai.",
    s3Title: "Business Dashboard",
    s3Desc: "Mengubah data bisnis menjadi gambaran yang jelas untuk keputusan yang lebih tepat.",
    s4Title: "Integrasi Sistem",
    s4Desc: "Menghubungkan berbagai aplikasi terpisah menjadi satu alur kerja otomatis.",

    // Section 4 - Business Transformation
    sec4Tag: "( Bagian 4 — Transformasi Bisnis )",
    sec4Title1: "Dari operasional manual menuju ",
    sec4Title2: "sistem cerdas terintegrasi.",
    sec4Sub: "Kami membantu bisnis mengubah alur kerja yang masih manual, membangun operasional yang lebih efektif, dan menghadirkan sistem digital terukur berbasis AI.",
    sec4MorphTitle: '"Di balik setiap proses yang tidak efisien, ada waktu, biaya, dan peluang yang terbuang"',
    sec4MorphSub: "Dari rasa, lahir narasi. Dari narasi, tercipta solusi.",
    m1Val: "3× Lebih Cepat",
    m1Label: "Kecepatan Alur Kerja",
    m2Val: "95% Berkurang",
    m2Label: "Beban Kerja Manual",
    m3Val: "24/7",
    m3Label: "Sistem AI Aktif",

    // Section 5 - Work
    workTag: "( Portofolio Aktif )",
    workTitle1: "Masalah yang telah ",
    workTitle2: "diselesaikan.",
    w1Title: "Rasanara Education Platform",
    w1Tag: "Sistem Penerimaan Siswa Multi-tenant Skola",
    w1Prob: "Pelacakan pendaftaran manual menggunakan file spreadsheet terpisah.",
    w1Sys: "Portal terpadu dengan hak akses berbasis peran untuk admin & pendaftar.",
    w1Imp: "Memangkas waktu proses penerimaan dari hitungan minggu menjadi pembaruan status real-time.",
    w1Rasa: "Orang tua mendapatkan kepastian instan; staf administrasi kembali tenang.",
    w2Title: "Rasanara Digital Insights",
    w2Tag: "TikTok Viral Explorer Scraping & Scoring Data Otomatis",
    w2Prob: "Tim marketing menghabiskan 4+ jam setiap hari mencari produk tren secara manual.",
    w2Sys: "Scraper otomatis yang menghitung skor keterlibatan dan potensi viral.",
    w2Imp: "Mengotomatiskan 100% penemuan video harian dengan ringkasan AI instan.",
    w2Rasa: "Mengubah keramaian media sosial menjadi arah produk yang jelas dan terukur.",

    // Section 6 - Tech Stack
    techTag: "( Teknologi yang Digunakan )",
    techTitle1: "Teknologi ",
    techTitle2: "mengikuti kebutuhan masalah",
    techTitle3: ", bukan sebaliknya.",

    // Section 7 - Pricing
    priceTag: "( Transparansi Biaya )",
    priceTitle: "Gambaran estimasi biaya investasi.",
    priceFoot1: "Diskusi gratis 30 menit → rekomendasi tertulis → ruang lingkup pasti. ",
    priceFoot2: "Pekerjaan baru dimulai setelah Anda setuju.",
    tier1Name: "Otomasi & AI Agents",
    tier1Range: "Rp 3 – 8 Juta",
    tier1Desc: "Implementasi pertama, pipeline follow-up otomatis & kualifikasi prospek.",
    tier2Name: "Sistem Bisnis & Dashboard",
    tier2Range: "Rp 10 Juta+",
    tier2Desc: "Inventaris terhubung, operasional reseller lancar, dan alur bisnis cerdas.",
    tier3Name: "Web & Produk Digital",
    tier3Range: "Rp 2 – 5 Juta",
    tier3Desc: "Landing page berkonversi tinggi hingga aplikasi web kustom.",

    // Section 8 - FAQ
    faqTag: "( Kejelasan Sejak Awal )",
    faqTitle: "Jawaban jujur tanpa basa-basi.",
    q1: "Apa sebenarnya yang dikerjakan oleh Rasanara?",
    a1: "Rasanara membantu bisnis menemukan hambatan bisnis, merancang ulang alur kerja yang rumit, dan membangun sistem digital, otomasi, serta integrasi AI sesuai kebutuhan bisnis demi mencapai alur kerja yang efektif dan efisien untuk meningkatkan kinerja bisnis Anda.",
    q2: "Bagaimana cara memastikan proyek tidak berhenti di tengah jalan?",
    a2: "Kami mendistribusikan hasil secara bertahap. Anda mendapatkan versi yang berfungsi sejak awal, dengan progress mingguan dan dokumentasi lengkap.",
    q3: "Berapa kisaran biayanya?",
    a3: "Proyek biasanya berkisar dari Rp 2 Juta untuk pembuatan web ringan hingga Rp 10 Juta+ untuk sistem bisnis kustom sesuai kebutuhan bisnis.",
    q4: "Siapa yang TIDAK cocok dengan layanan ini?",
    a4: "Bisnis yang menginginkan hasil instan tanpa diskusi kebutuhan, atau yang mencari tim agensi besar konvensional.",
    q5: "Apa yang terjadi jika saya ingin berhenti di tengah proyek?",
    a5: "Anda memegang kepemilikan penuh atas semua kode, akun, dan dokumentasi yang telah dibuat. Tanpa kuncian vendor.",
    q6: "Bisakah menandatangani NDA jika data kami sensitif?",
    a6: "Ya, tentu saja. Kami memprioritaskan privasi data dan selalu menandatangani NDA sebelum mengakses data internal bisnis Anda.",

    // Section 9 - Contact
    contactTag: "( Diskusi Gratis 30 Menit )",
    contactTitle1: "Dapatkan ",
    contactTitle2: "langkah nyata yang jelas.",
    contactSub: "Saya akan membantu anda menemukan masalah yang menghambat, menyita waktu dan biaya bisnis anda, kemudian membantu anda memutuskan solusi yang paling tepat, bukan yang paling mahal.",
    lblQuestion: "Bagian bisnis mana yang paling menghambat dan menyita waktu anda?",
    phQuestion: "contoh: obrolan WhatsApp menumpuk, rekap pesanan manual, sinkronisasi stok...",
    lblName: "Nama Anda",
    phName: "Nama",
    lblContact: "Email atau Nomor WhatsApp",
    phContact: "Detail kontak",
    btnSubmit: "Mulai Percakapan →",
    contactFoot: "rasanara memahami bisnis Anda · menemukan masalah · menentukan solusi.",

    // Footer
    footerBrand: "rasanara",
    footerTagline: "Software engineer & Product thinker · membangun sistem yang benar-benar digunakan, bukan sekadar sistem yang berjalan.",
    footerCopy: "© Rasanara — dari masalah yang ada, sistem yang benar-benar dipakai sebagai solusi bisnis.",
  },
};

/* ============================================================
   GLOBAL MOTION CONSTANTS & VARIANTS
   ============================================================ */
const easeCinematic = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeCinematic },
  },
};

const blurReveal = {
  hidden: { opacity: 0, filter: "blur(8px)", y: 16 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeCinematic },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

/* ============================================================
   HELPER: IN-VIEW SECTION WRAPPER
   ============================================================ */
function SectionReveal({ children, className = "", style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* ============================================================
   1. NAVBAR WITH LANGUAGE SWITCHER TOGGLE
   ============================================================ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useContext(LanguageContext);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`rn-nav ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: easeCinematic }}
    >
      <div className="container rn-nav__inner">
        <div className="rn-nav__brand">
          <a href="#top" className="rn-nav__logo">
            rasanara
          </a>
          <span className="rn-nav__eyebrow">
            {t.eyebrowNav}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <ul className="rn-nav__links">
            <li><a href="#work">{t.navWork}</a></li>
            <li><a href="#faq">{t.navFaq}</a></li>
          </ul>

          {/* Language Switcher Switch Pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "var(--color-surface-2)",
              border: "1px solid var(--color-border)",
              borderRadius: "99px",
              padding: "2px",
              gap: "2px",
            }}
          >
            <button
              onClick={() => setLang("EN")}
              style={{
                border: "none",
                background: lang === "EN" ? "var(--color-brand)" : "transparent",
                color: lang === "EN" ? "#ffffff" : "var(--color-text-secondary)",
                padding: "0.25rem 0.65rem",
                borderRadius: "99px",
                fontSize: "0.75rem",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              EN
            </button>
            <button
              onClick={() => setLang("ID")}
              style={{
                border: "none",
                background: lang === "ID" ? "var(--color-brand)" : "transparent",
                color: lang === "ID" ? "#ffffff" : "var(--color-text-secondary)",
                padding: "0.25rem 0.65rem",
                borderRadius: "99px",
                fontSize: "0.75rem",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              ID
            </button>
          </div>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="https://wa.me/6281297203692?text=Halo%20Rasanara%2C%20saya%20ingin%20diskusi."
            target="_blank"
            rel="noopener noreferrer"
            className="rn-nav__cta"
          >
            {t.navCta}
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}

/* ============================================================
   2. HERO & MARQUEE
   ============================================================ */
function Hero() {
  const { t } = useContext(LanguageContext);

  const marqueeItems = [
    "AI automation integrations",
    "Commerce Intelligence",
    "Multi-channel systems",
    "Operational dashboards",
    "Web & digital products",
    "Business Process Digitalization",
    "Custom Software Development",
  ];

  return (
    <section id="top" style={{ paddingTop: "140px", paddingBottom: "4rem", position: "relative" }}>
      <div className="container">
        <SectionReveal>
          <motion.div
            variants={blurReveal}
            style={{
              fontSize: "0.8125rem",
              fontWeight: 600,
              color: "var(--color-amber)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "1.5rem",
            }}
          >
            {t.heroEyebrow}
          </motion.div>

          <motion.h1
            variants={blurReveal}
            style={{
              fontSize: "clamp(2.75rem, 5.5vw, 4.75rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "1.5rem",
              maxWidth: "920px",
              color: "var(--color-text-primary)",
            }}
          >
            {t.heroTitle1}<span className="text-brand font-italic">{t.heroTitle2}</span>{t.heroTitle3}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            style={{
              fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
              color: "var(--color-text-secondary)",
              lineHeight: 1.6,
              maxWidth: "780px",
              marginBottom: "1.75rem",
            }}
          >
            {t.heroSub1}<span className="font-italic text-amber" style={{ fontWeight: 600 }}>{t.heroSub2}</span>{t.heroSub3}<span className="font-italic text-amber" style={{ fontWeight: 600 }}>{t.heroSub4}</span>{t.heroSub5}
          </motion.p>

          <motion.p
            variants={fadeUp}
            style={{
              fontSize: "1rem",
              color: "var(--color-text-tertiary)",
              maxWidth: "680px",
              marginBottom: "2.5rem",
              lineHeight: 1.6,
            }}
          >
            {t.heroParagraph}
            <strong style={{ color: "var(--color-brand)" }}><br />{t.heroParagraphBold}</strong>{t.heroParagraphEnd}
          </motion.p>

          <motion.div variants={scaleIn} style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#reality"
              className="btn-amber"
            >
              {t.heroBtnPrimary}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="btn-outline"
            >
              {t.heroBtnSecondary}
            </motion.a>
          </motion.div>
        </SectionReveal>
      </div>

      {/* Marquee Ticker */}
      <div className="rn-marquee" style={{ marginTop: "4.5rem" }}>
        <div className="rn-marquee__track">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span key={idx} className="rn-marquee__item">
              {item} <span style={{ opacity: 0.5, margin: "0 0.5rem" }}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   MOBILE DETECTION HOOK
   ============================================================ */
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);
  return isMobile;
}

/* ============================================================
   3. SECTION 2 — THE REALITY
   ============================================================ */
function Section2Reality() {
  const { t } = useContext(LanguageContext);
  const isMobile = useIsMobile();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const headlineOpacity = useTransform(scrollYProgress, [0, 0.05, 0.7, 0.82], [0, 1, 1, 0]);
  const headlineBlur = useTransform(scrollYProgress, [0, 0.08, 0.7, 0.82], ["blur(16px)", "blur(0px)", "blur(0px)", "blur(12px)"]);
  const p1Opacity = useTransform(scrollYProgress, [0.08, 0.18, 0.75, 0.85], [0, 1, 1, 0]);
  const p1Y = useTransform(scrollYProgress, [0.08, 0.18, 0.75, 0.85], [40, 0, 0, -20]);
  const p1Scale = useTransform(scrollYProgress, [0.08, 0.18, 0.75, 0.85], [0.96, 1, 1, 0.95]);
  const p2Opacity = useTransform(scrollYProgress, [0.20, 0.30, 0.75, 0.85], [0, 1, 1, 0]);
  const p2Y = useTransform(scrollYProgress, [0.20, 0.30, 0.75, 0.85], [40, 0, 0, -20]);
  const p2Scale = useTransform(scrollYProgress, [0.20, 0.30, 0.75, 0.85], [0.96, 1, 1, 0.95]);
  const p3Opacity = useTransform(scrollYProgress, [0.32, 0.42, 0.75, 0.85], [0, 1, 1, 0]);
  const p3Y = useTransform(scrollYProgress, [0.32, 0.42, 0.75, 0.85], [40, 0, 0, -20]);
  const p3Scale = useTransform(scrollYProgress, [0.32, 0.42, 0.75, 0.85], [0.96, 1, 1, 0.95]);
  const p4Opacity = useTransform(scrollYProgress, [0.44, 0.54, 0.75, 0.85], [0, 1, 1, 0]);
  const p4Y = useTransform(scrollYProgress, [0.44, 0.54, 0.75, 0.85], [40, 0, 0, -20]);
  const p4Scale = useTransform(scrollYProgress, [0.44, 0.54, 0.75, 0.85], [0.96, 1, 1, 0.95]);
  const morphHeadlineOpacity = useTransform(scrollYProgress, [0.78, 0.88, 0.98], [0, 1, 1]);
  const morphHeadlineBlur = useTransform(scrollYProgress, [0.78, 0.88, 0.98], ["blur(14px)", "blur(0px)", "blur(0px)"]);

  const painPoints = [
    { title: t.p1Title, text: t.p1Text, icon: "📊", anim: { opacity: p1Opacity, y: p1Y, scale: p1Scale } },
    { title: t.p2Title, text: t.p2Text, icon: "⏳", anim: { opacity: p2Opacity, y: p2Y, scale: p2Scale } },
    { title: t.p3Title, text: t.p3Text, icon: "📉", anim: { opacity: p3Opacity, y: p3Y, scale: p3Scale } },
    { title: t.p4Title, text: t.p4Text, icon: "🔄", anim: { opacity: p4Opacity, y: p4Y, scale: p4Scale } },
  ];

  if (isMobile) {
    return (
      <section id="reality" className="section">
        <div className="container">
          <SectionReveal>
            <motion.div variants={blurReveal} style={{ textAlign: "center", marginBottom: "2rem" }}>
              <span style={{ fontSize: "0.75rem", color: "var(--color-amber)", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700 }}>
                {t.sec2Tag}
              </span>
              <h2 style={{ fontSize: "clamp(1.35rem, 5vw, 2.25rem)", fontWeight: 800, marginTop: "0.5rem", color: "var(--color-brand)" }}>
                {t.sec2Headline}
              </h2>
            </motion.div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }}>
              {painPoints.map((p, idx) => (
                <motion.div key={idx} variants={scaleIn} className="rn-glass-card" style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--color-amber)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>{p.title}</div>
                  <p style={{ fontSize: "0.9375rem", color: "var(--color-text-primary)", fontWeight: 600, lineHeight: 1.5 }}>{p.text}</p>
                </motion.div>
              ))}
            </div>
            <motion.div variants={blurReveal} style={{ textAlign: "center", marginTop: "2.5rem" }}>
              <h2 style={{ fontSize: "clamp(1.35rem, 5vw, 2rem)", fontWeight: 800, color: "var(--color-brand)" }}>
                {t.sec2MorphTitle1}<br /><span className="text-amber">{t.sec2MorphTitle2}</span>
              </h2>
            </motion.div>
          </SectionReveal>
        </div>
      </section>
    );
  }

  return (
    <div id="reality" ref={targetRef} style={{ height: "150vh", position: "relative" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div className="container" style={{ width: "100%" }}>
          <motion.div style={{ opacity: headlineOpacity, filter: headlineBlur, textAlign: "center", marginBottom: "3.5rem" }}>
            <span style={{ fontSize: "0.8125rem", color: "var(--color-amber)", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700 }}>{t.sec2Tag}</span>
            <h2 style={{ fontSize: "clamp(1.5rem, 4.5vw, 3.5rem)", fontWeight: 800, marginTop: "0.5rem", color: "var(--color-brand)", letterSpacing: "-0.03em" }}>{t.sec2Headline}</h2>
          </motion.div>
          <motion.div className="rn-sec2-morph-overlay" style={{ position: "absolute", top: "15%", left: "5%", right: "5%", opacity: morphHeadlineOpacity, filter: morphHeadlineBlur, textAlign: "center", pointerEvents: "none" }}>
            <span style={{ fontSize: "0.8125rem", color: "var(--color-brand)", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700 }}>{t.sec2MorphTag}</span>
            <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 3.25rem)", fontWeight: 800, marginTop: "0.5rem", color: "var(--color-brand)", letterSpacing: "-0.02em" }}>
              {t.sec2MorphTitle1}<br /><span className="text-amber">{t.sec2MorphTitle2}</span>
            </h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {painPoints.map((p, idx) => (
              <motion.div key={idx} style={{ opacity: p.anim.opacity, y: p.anim.y, scale: p.anim.scale, textAlign: "center" }} className="rn-glass-card">
                <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{p.icon}</div>
                <div style={{ fontSize: "0.75rem", color: "var(--color-amber)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>{p.title}</div>
                <p style={{ fontSize: "1rem", color: "var(--color-text-primary)", fontWeight: 600, lineHeight: 1.5 }}>{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   4. SECTION 3 — WHAT WE DO
   ============================================================ */
function Section3WhatWeDo() {
  const { t } = useContext(LanguageContext);
  const isMobile = useIsMobile();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end end"] });

  const s1Opacity = useTransform(scrollYProgress, [0.05, 0.18, 0.78, 0.88], [0, 1, 1, 0]);
  const s1Y = useTransform(scrollYProgress, [0.05, 0.18, 0.78, 0.88], [60, 0, 0, -20]);
  const s1Scale = useTransform(scrollYProgress, [0.05, 0.18, 0.78, 0.88], [0.95, 1, 1, 0.96]);
  const s2Opacity = useTransform(scrollYProgress, [0.22, 0.35, 0.78, 0.88], [0, 1, 1, 0]);
  const s2Y = useTransform(scrollYProgress, [0.22, 0.35, 0.78, 0.88], [60, 0, 0, -20]);
  const s2Scale = useTransform(scrollYProgress, [0.22, 0.35, 0.78, 0.88], [0.95, 1, 1, 0.96]);
  const s3Opacity = useTransform(scrollYProgress, [0.38, 0.50, 0.78, 0.88], [0, 1, 1, 0]);
  const s3Y = useTransform(scrollYProgress, [0.38, 0.50, 0.78, 0.88], [60, 0, 0, -20]);
  const s3Scale = useTransform(scrollYProgress, [0.38, 0.50, 0.78, 0.88], [0.95, 1, 1, 0.96]);
  const s4Opacity = useTransform(scrollYProgress, [0.52, 0.65, 0.78, 0.88], [0, 1, 1, 0]);
  const s4Y = useTransform(scrollYProgress, [0.52, 0.65, 0.78, 0.88], [60, 0, 0, -20]);
  const s4Scale = useTransform(scrollYProgress, [0.52, 0.65, 0.78, 0.88], [0.95, 1, 1, 0.96]);
  const lineProgress = useTransform(scrollYProgress, [0.15, 0.65], [0, 1]);
  const sec4HeadlineOpacity = useTransform(scrollYProgress, [0.82, 0.92], [0, 1]);
  const sec4HeadlineBlur = useTransform(scrollYProgress, [0.82, 0.92], ["blur(14px)", "blur(0px)"]);

  const services = [
    { title: t.s1Title, desc: t.s1Desc, anim: { opacity: s1Opacity, y: s1Y, scale: s1Scale } },
    { title: t.s2Title, desc: t.s2Desc, anim: { opacity: s2Opacity, y: s2Y, scale: s2Scale } },
    { title: t.s3Title, desc: t.s3Desc, anim: { opacity: s3Opacity, y: s3Y, scale: s3Scale } },
    { title: t.s4Title, desc: t.s4Desc, anim: { opacity: s4Opacity, y: s4Y, scale: s4Scale } },
  ];

  if (isMobile) {
    return (
      <section id="services" className="section">
        <div className="container">
          <SectionReveal>
            <motion.div variants={blurReveal}>
              <span style={{ fontSize: "0.75rem", color: "var(--color-amber)", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700 }}>{t.sec3Tag}</span>
              <h2 style={{ fontSize: "clamp(1.5rem, 5vw, 2.5rem)", fontWeight: 800, lineHeight: 1.2, color: "var(--color-brand)", marginTop: "0.5rem", marginBottom: "1rem" }}>
                {t.sec3Title1}<br /><span className="text-amber">{t.sec3Title2}</span>
              </h2>
              <p style={{ fontSize: "0.9375rem", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem" }}>{t.sec3Sub}</p>
            </motion.div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {services.map((s, idx) => (
                <motion.div key={idx} variants={scaleIn} className="rn-glass-card">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                    <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--color-brand)" }}>{s.title}</h3>
                    <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--color-amber)" }}>0{idx + 1}</span>
                  </div>
                  <p style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)" }}>{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>
    );
  }

  return (
    <div id="services" ref={targetRef} style={{ height: "220vh", position: "relative" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div className="container" style={{ width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3rem", alignItems: "center", position: "relative" }}>
            <div>
              <span style={{ fontSize: "0.8125rem", color: "var(--color-amber)", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700 }}>{t.sec3Tag}</span>
              <h2 style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)", fontWeight: 800, lineHeight: 1.15, color: "var(--color-brand)", marginTop: "0.5rem", marginBottom: "1.5rem" }}>
                {t.sec3Title1}<br /><span className="text-amber">{t.sec3Title2}</span>
              </h2>
              <p style={{ fontSize: "1.0625rem", color: "var(--color-text-secondary)", lineHeight: 1.6, maxWidth: "450px" }}>{t.sec3Sub}</p>
            </div>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <svg style={{ position: "absolute", left: "-18px", top: "20px", bottom: "20px", width: "4px", height: "calc(100% - 40px)", overflow: "visible", pointerEvents: "none" }}>
                <line x1="2" y1="0" x2="2" y2="100%" stroke="rgba(107, 25, 62, 0.15)" strokeWidth="2" />
                <motion.line x1="2" y1="0" x2="2" y2="100%" stroke="#f28e29" strokeWidth="3" style={{ pathLength: lineProgress }} />
              </svg>
              {services.map((s, idx) => (
                <motion.div key={idx} style={{ opacity: s.anim.opacity, y: s.anim.y, scale: s.anim.scale }} className="rn-glass-card">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-brand)" }}>{s.title}</h3>
                    <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--color-amber)" }}>0{idx + 1}</span>
                  </div>
                  <p style={{ fontSize: "0.9375rem", color: "var(--color-text-secondary)" }}>{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div style={{ position: "absolute", bottom: "6%", left: 0, right: 0, textAlign: "center", opacity: sec4HeadlineOpacity, filter: sec4HeadlineBlur, pointerEvents: "none" }}>
            <h3 style={{ fontSize: "1.25rem", color: "var(--color-brand)", fontWeight: 700 }}>{t.sec3Proceed}</h3>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   5. SECTION 4 — BUSINESS TRANSFORMATION
   ============================================================ */
function Section4Transformation() {
  const { t } = useContext(LanguageContext);
  const isMobile = useIsMobile();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end end"] });

  const nodesOpacity = useTransform(scrollYProgress, [0.05, 0.45, 0.65, 0.75], [0, 1, 1, 0]);
  const nodesScale = useTransform(scrollYProgress, [0.05, 0.45, 0.65, 0.75], [0.92, 1, 1, 0.9]);
  const nodesBlur = useTransform(scrollYProgress, [0.65, 0.75], ["blur(0px)", "blur(12px)"]);
  const metricsY = useTransform(scrollYProgress, [0.38, 0.52, 0.68, 0.75], [40, 0, 0, -20]);
  const metricsOpacity = useTransform(scrollYProgress, [0.38, 0.52, 0.68, 0.75], [0, 1, 1, 0]);
  const morphHeadlineOpacity = useTransform(scrollYProgress, [0.72, 0.84, 0.98], [0, 1, 1]);
  const morphHeadlineBlur = useTransform(scrollYProgress, [0.72, 0.84, 0.98], ["blur(14px)", "blur(0px)", "blur(0px)"]);
  const morphHeadlineY = useTransform(scrollYProgress, [0.72, 0.84], [50, 0]);

  const workflowNodes = [
    { icon: "📝", title: "Manual Tasks", sub: "Excel & WhatsApp" },
    { icon: "⚙️", title: "Automated Pipeline", sub: "n8n & Prisma" },
    { icon: "🤖", title: "AI Agent Node", sub: "Claude API Stream", highlight: true },
    { icon: "📈", title: "Live Dashboard", sub: "Real-time metrics" },
  ];

  if (isMobile) {
    return (
      <section id="transformation" className="section">
        <div className="container">
          <SectionReveal>
            <motion.div variants={blurReveal} style={{ textAlign: "center", marginBottom: "2rem" }}>
              <span style={{ fontSize: "0.75rem", color: "var(--color-amber)", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700 }}>{t.sec4Tag}</span>
              <h2 style={{ fontSize: "clamp(1.35rem, 5vw, 2.25rem)", fontWeight: 800, color: "var(--color-brand)", marginTop: "0.5rem" }}>
                {t.sec4Title1}<span className="text-amber"><br />{t.sec4Title2}</span>
              </h2>
              <p style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", maxWidth: "640px", margin: "0.5rem auto 0" }}>{t.sec4Sub}</p>
            </motion.div>

            <motion.div variants={scaleIn} style={{ background: "#ffffff", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)", padding: "1.5rem", boxShadow: "0 8px 32px rgba(107, 25, 62, 0.06)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.875rem" }}>
                {workflowNodes.map((n, idx) => (
                  <div key={idx} className={n.highlight ? "" : "rn-glass-card"} style={{ padding: "1rem", textAlign: "center", ...(n.highlight ? { background: "var(--color-brand-light)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)" } : {}) }}>
                    <div style={{ fontSize: "1.25rem" }}>{n.icon}</div>
                    <div style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--color-brand)", marginTop: "0.25rem" }}>{n.title}</div>
                    <span style={{ fontSize: "0.6875rem", color: n.highlight ? "var(--color-brand)" : "var(--color-amber)", fontWeight: 600 }}>{n.sub}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "1.5rem", paddingTop: "1.25rem", borderTop: "1px solid var(--color-border)", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem", textAlign: "center" }}>
                <div>
                  <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--color-brand)" }}>{t.m1Val}</div>
                  <div style={{ fontSize: "0.6875rem", color: "var(--color-text-secondary)", fontWeight: 600 }}>{t.m1Label}</div>
                </div>
                <div>
                  <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--color-amber)" }}>{t.m2Val}</div>
                  <div style={{ fontSize: "0.6875rem", color: "var(--color-text-secondary)", fontWeight: 600 }}>{t.m2Label}</div>
                </div>
                <div>
                  <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--color-brand)" }}>{t.m3Val}</div>
                  <div style={{ fontSize: "0.6875rem", color: "var(--color-text-secondary)", fontWeight: 600 }}>{t.m3Label}</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={blurReveal} style={{ textAlign: "center", marginTop: "2.5rem", padding: "2rem 1.25rem", background: "#ffffff", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)", boxShadow: "0 12px 40px rgba(107, 25, 62, 0.08)" }}>
              <h2 style={{ fontSize: "clamp(1.125rem, 4vw, 1.75rem)", fontWeight: 800, color: "var(--color-brand)", lineHeight: 1.3 }}>{t.sec4MorphTitle}</h2>
              <p style={{ fontSize: "clamp(0.875rem, 2.5vw, 1.125rem)", color: "var(--color-amber)", marginTop: "0.75rem", fontWeight: 700 }}>{t.sec4MorphSub}</p>
            </motion.div>
          </SectionReveal>
        </div>
      </section>
    );
  }

  return (
    <div id="transformation" ref={targetRef} style={{ height: "260vh", position: "relative" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div className="container" style={{ width: "100%", position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span style={{ fontSize: "0.8125rem", color: "var(--color-amber)", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700 }}>{t.sec4Tag}</span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 800, color: "var(--color-brand)", marginTop: "0.5rem" }}>
              {t.sec4Title1}<span className="text-amber"><br />{t.sec4Title2}</span>
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", maxWidth: "640px", margin: "0.5rem auto 0" }}>{t.sec4Sub}</p>
          </div>
          <motion.div style={{ opacity: nodesOpacity, scale: nodesScale, filter: nodesBlur, background: "#ffffff", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)", padding: "2.5rem", position: "relative", maxWidth: "920px", margin: "0 auto", boxShadow: "0 16px 48px rgba(107, 25, 62, 0.06)" }}>
            <div className="rn-sec4-nodes" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.5rem", position: "relative", zIndex: 2 }}>
              {workflowNodes.map((n, idx) => (
                <div key={idx} className={n.highlight ? "" : "rn-glass-card"} style={{ padding: "1.25rem", textAlign: "center", ...(n.highlight ? { background: "var(--color-brand-light)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", boxShadow: "0 4px 20px rgba(107, 25, 62, 0.08)" } : {}) }}>
                  <div style={{ fontSize: "1.5rem" }}>{n.icon}</div>
                  <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--color-brand)", marginTop: "0.25rem" }}>{n.title}</div>
                  <span style={{ fontSize: "0.75rem", color: n.highlight ? "var(--color-brand)" : "var(--color-amber)", fontWeight: 600 }}>{n.sub}</span>
                </div>
              ))}
            </div>
            <motion.div className="rn-sec4-metrics" style={{ opacity: metricsOpacity, y: metricsY, marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--color-border)", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", textAlign: "center" }}>
              <div>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--color-brand)" }}>{t.m1Val}</div>
                <div style={{ fontSize: "0.8125rem", color: "var(--color-text-secondary)", fontWeight: 600 }}>{t.m1Label}</div>
              </div>
              <div>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--color-amber)" }}>{t.m2Val}</div>
                <div style={{ fontSize: "0.8125rem", color: "var(--color-text-secondary)", fontWeight: 600 }}>{t.m2Label}</div>
              </div>
              <div>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--color-brand)" }}>{t.m3Val}</div>
                <div style={{ fontSize: "0.8125rem", color: "var(--color-text-secondary)", fontWeight: 600 }}>{t.m3Label}</div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div className="rn-sec4-morph-overlay" style={{ position: "absolute", top: "50%", left: 0, right: 0, opacity: morphHeadlineOpacity, filter: morphHeadlineBlur, y: morphHeadlineY, textAlign: "center", pointerEvents: "none" }}>
            <div className="rn-sec4-morph-box" style={{ maxWidth: "1000px", margin: "0 auto", padding: "3rem 2rem", background: "#ffffff", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)", boxShadow: "0 20px 60px rgba(107, 25, 62, 0.12)" }}>
              <h2 style={{ fontSize: "clamp(1rem, 3.5vw, 2.5rem)", fontWeight: 800, color: "var(--color-brand)", letterSpacing: "-0.03em", lineHeight: 1.15 }}>{t.sec4MorphTitle}</h2>
              <p style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)", color: "var(--color-amber)", marginTop: "1rem", fontWeight: 700 }}>{t.sec4MorphSub}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   6. WORK / CASE STUDIES
   ============================================================ */
function Work() {
  const { t } = useContext(LanguageContext);

  const cases = [
    {
      title: t.w1Title,
      tag: t.w1Tag,
      tech: "Next.js · Prisma · NextAuth",
      problem: t.w1Prob,
      system: t.w1Sys,
      impact: t.w1Imp,
      rasa: t.w1Rasa,
    },
    {
      title: t.w2Title,
      tag: t.w2Tag,
      tech: "Apify · Claude API · n8n",
      problem: t.w2Prob,
      system: t.w2Sys,
      impact: t.w2Imp,
      rasa: t.w2Rasa,
    },
  ];

  return (
    <section className="section" id="work" style={{ background: "var(--color-surface-2)" }}>
      <div className="container">
        <SectionReveal>
          <motion.div variants={blurReveal} style={{ fontSize: "0.8125rem", color: "var(--color-amber)", fontWeight: 700, marginBottom: "0.5rem" }}>
            {t.workTag}
          </motion.div>
          <motion.h2 variants={blurReveal} style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 800, color: "var(--color-brand)", marginBottom: "3rem" }}>
            {t.workTitle1}<span className="text-amber font-italic">{t.workTitle2}</span>
          </motion.h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem", marginBottom: "4rem" }}>
            {cases.map((c, i) => (
              <motion.div key={i} variants={scaleIn} whileHover={{ y: -6 }} style={{ background: "#ffffff", padding: "2rem", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)", boxShadow: "0 4px 20px rgba(107, 25, 62, 0.04)" }}>
                <span style={{ fontSize: "0.75rem", color: "var(--color-amber)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>{c.tech}</span>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--color-brand)", margin: "0.5rem 0" }}>{c.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", fontWeight: 600, marginBottom: "1rem" }}>{c.tag}</p>

                <p style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", marginBottom: "0.5rem" }}><strong>Problem:</strong> {c.problem}</p>
                <p style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", marginBottom: "0.5rem" }}><strong>System:</strong> {c.system}</p>
                <p style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", marginBottom: "1.25rem" }}><strong>Impact:</strong> {c.impact}</p>

                <p style={{ fontSize: "0.8125rem", fontStyle: "italic", color: "var(--color-text-tertiary)", borderTop: "1px solid var(--color-border)", paddingTop: "0.75rem" }}>
                  "{c.rasa}"
                </p>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ============================================================
   7. TECH STACK
   ============================================================ */
function TechStack() {
  const { t } = useContext(LanguageContext);

  const stack = [
    "React", "Next.js 15", "Vue.js", "Javascript", "TypeScript", "Tailwind CSS", "shadcn/ui", "Redux", "TanStack Query",
    "Prisma", "Firebase", "Supabase", "PostgreSQL", "NextAuth", "n8n",
    "OpenAI", "Google Cloud", "Claude API", "OpenClaw", "Apify", "Docker", "Version Control", "REST API integration", "Authentication & Authorization",
    "Web Security"
  ];

  return (
    <section className="section">
      <div className="container">
        <SectionReveal>
          <motion.div variants={blurReveal} style={{ fontSize: "0.8125rem", color: "var(--color-text-tertiary)", fontWeight: 600, marginBottom: "0.5rem" }}>
            {t.techTag}
          </motion.div>
          <motion.h2 variants={blurReveal} style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "var(--color-brand)", marginBottom: "2rem" }}>
            {t.techTitle1}<span className="font-italic text-amber">{t.techTitle2}</span>{t.techTitle3}
          </motion.h2>

          <motion.div variants={staggerContainer} style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {stack.map((item, idx) => (
              <motion.span
                key={idx}
                variants={scaleIn}
                whileHover={{ scale: 1.08, y: -2, backgroundColor: "#6b193e", color: "#f28e29" }}
                style={{
                  background: "#ffffff",
                  border: "1px solid var(--color-border)",
                  padding: "0.6rem 1.2rem",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--color-brand)",
                  boxShadow: "0 2px 10px rgba(107, 25, 62, 0.03)",
                  cursor: "default",
                }}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ============================================================
   8. PRICING
   ============================================================ */
function Pricing() {
  const { t } = useContext(LanguageContext);

  const tiers = [
    {
      name: t.tier1Name,
      range: t.tier1Range,
      desc: t.tier1Desc,
    },
    {
      name: t.tier2Name,
      range: t.tier2Range,
      desc: t.tier2Desc,
    },
    {
      name: t.tier3Name,
      range: t.tier3Range,
      desc: t.tier3Desc,
    },
  ];

  return (
    <section className="section" style={{ background: "var(--color-amber-light)" }}>
      <div className="container">
        <SectionReveal>
          <motion.div variants={blurReveal} style={{ fontSize: "0.8125rem", color: "var(--color-brand)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
            {t.priceTag}
          </motion.div>
          <motion.h2 variants={blurReveal} style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 800, color: "var(--color-brand)", marginBottom: "3rem" }}>
            {t.priceTitle}
          </motion.h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "2.5rem" }}>
            {tiers.map((tItem, i) => (
              <motion.div key={i} variants={scaleIn} whileHover={{ y: -5 }} style={{ background: "#ffffff", padding: "2rem", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)", boxShadow: "0 4px 20px rgba(107, 25, 62, 0.05)" }}>
                <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--color-brand)", marginBottom: "0.5rem" }}>{tItem.name}</h3>
                <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--color-amber)", marginBottom: "1rem" }}>{tItem.range}</div>
                <p style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{tItem.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p variants={fadeUp} style={{ textAlign: "center", fontSize: "0.9375rem", color: "var(--color-text-secondary)" }}>
            {t.priceFoot1}<strong style={{ color: "var(--color-brand)" }}>{t.priceFoot2}</strong>
          </motion.p>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ============================================================
   9. FAQ
   ============================================================ */
function FAQ() {
  const { t } = useContext(LanguageContext);
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    { q: t.q1, a: t.a1 },
    { q: t.q2, a: t.a2 },
    { q: t.q3, a: t.a3 },
    { q: t.q4, a: t.a4 },
    // { q: t.q5, a: t.a5 },
    { q: t.q6, a: t.a6 },
  ];

  return (
    <section className="section" id="faq">
      <div className="container" style={{ maxWidth: "800px" }}>
        <SectionReveal>
          <motion.div variants={blurReveal} style={{ fontSize: "0.8125rem", color: "var(--color-text-tertiary)", fontWeight: 600, marginBottom: "0.5rem" }}>
            {t.faqTag}
          </motion.div>
          <motion.h2 variants={blurReveal} style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 800, color: "var(--color-brand)", marginBottom: "2.5rem" }}>
            {t.faqTitle}
          </motion.h2>

          <div>
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="rn-faq__item"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <div className="rn-faq__question">
                  <span>{f.q}</span>
                  <motion.span
                    animate={{ rotate: openIdx === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ color: "var(--color-amber)", fontWeight: 700, fontSize: "1.25rem" }}
                  >
                    +
                  </motion.span>
                </div>
                <AnimatePresence initial={false}>
                  {openIdx === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: easeCinematic }}
                      className="rn-faq__answer"
                    >
                      {f.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ============================================================
   10. CONTACT
   ============================================================ */
function Contact() {
  const { t } = useContext(LanguageContext);

  return (
    <section className="section" id="contact" style={{ background: "var(--color-brand-light)", borderTop: "1px solid var(--color-border)" }}>
      <div className="container" style={{ maxWidth: "700px" }}>
        <SectionReveal>
          <motion.div variants={blurReveal} style={{ fontSize: "0.8125rem", color: "var(--color-brand)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem", textAlign: "center" }}>
            {t.contactTag}
          </motion.div>
          <motion.h2 variants={blurReveal} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "var(--color-brand)", textAlign: "center", marginBottom: "1rem" }}>
            {t.contactTitle1}<span className="text-amber font-italic">{t.contactTitle2}</span>
          </motion.h2>
          <motion.p variants={fadeUp} style={{ textAlign: "center", color: "var(--color-text-secondary)", marginBottom: "2rem" }}>
            {t.contactSub}
          </motion.p>

          <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }} onSubmit={(e) => e.preventDefault()}>
            <div className="rn-form-group">
              <label>{t.lblQuestion}</label>
              <textarea className="rn-input" rows="3" placeholder={t.phQuestion} />
            </div>
            <div className="rn-form-group">
              <label>{t.lblName}</label>
              <input type="text" className="rn-input" placeholder={t.phName} />
            </div>
            <div className="rn-form-group">
              <label>{t.lblContact}</label>
              <input type="text" className="rn-input" placeholder={t.phContact} />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="btn-brand"
              style={{ width: "100%", justifyContent: "center", marginTop: "1rem" }}
            >
              {t.btnSubmit}
            </motion.button>
          </form>

          <motion.p variants={fadeUp} style={{ textAlign: "center", fontSize: "0.8125rem", color: "var(--color-text-tertiary)", marginTop: "1.5rem", fontWeight: 500 }}>
            {t.contactFoot}
          </motion.p>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ============================================================
   11. FOOTER
   ============================================================ */
function Footer() {
  const { t } = useContext(LanguageContext);

  return (
    <footer style={{ background: "#ffffff", borderTop: "1px solid var(--color-border)", padding: "2.5rem 0" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          <span style={{ fontWeight: 800, fontSize: "1.125rem", color: "var(--color-brand)" }}>{t.footerBrand}</span>
          <span style={{ fontSize: "0.8125rem", color: "var(--color-text-tertiary)", marginLeft: "0.75rem", fontWeight: 500 }}>
            {t.footerTagline}
          </span>
        </div>
        <div style={{ fontSize: "0.8125rem", color: "var(--color-text-tertiary)", fontWeight: 500 }}>
          {t.footerCopy}
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   MAIN ROOT COMPONENT WITH LANGUAGE PROVIDER & LENIS
   ============================================================ */
export default function RasanaraLanding() {
  const [lang, setLang] = useState("EN");

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const value = {
    lang,
    setLang,
    t: translations[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      <div style={{ position: "relative" }}>

        {/* Light Mesh Background with Ambient Glow Orbs */}
        <div className="cinematic-bg">
          <div className="bg-glow-orb bg-glow-orb--1" />
          <div className="bg-glow-orb bg-glow-orb--2" />
        </div>

        <Navbar />

        <main>
          <Hero />
          <Section2Reality />
          <Section3WhatWeDo />
          <Section4Transformation />
          <Work />
          <TechStack />
          <Pricing />
          <FAQ />
          <Contact />
        </main>

        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}
