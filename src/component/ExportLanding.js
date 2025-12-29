import React, { useState } from "react";
import {
  Button,
  Typography,
  Row,
  Col,
  Card,
  Drawer,
} from "antd";
import {
  ArrowRightOutlined,
  CheckCircleOutlined,
  MessageOutlined,
  TeamOutlined,
  RocketOutlined,
  WhatsAppOutlined,
  MenuOutlined,
  BookOutlined,
  HeartOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const ExportLanding = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const menuItems = [
    { key: "problem", label: "Cerita" },
    { key: "approach", label: "Cara Kami" },
    { key: "assistant", label: "AI Assistant" },
    { key: "process", label: "Proses" },
    { key: "contact", label: "Hubungi" },
  ];

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setDrawerVisible(false);
  };

  const processSteps = [
    {
      title: "Brand Interview",
      description: "Ekstraksi cerita dan nilai brand Anda",
      icon: <MessageOutlined />,
    },
    {
      title: "Story & Structure",
      description: "Definisi struktur narasi website",
      icon: <BookOutlined />,
    },
    {
      title: "Website Design & Build",
      description: "Desain dan pembangunan website",
      icon: <RocketOutlined />,
    },
    {
      title: "AI Assistant Training",
      description: "Pelatihan chatbot dengan cerita brand",
      icon: <GlobalOutlined />,
    },
    {
      title: "Launch & Refinement",
      description: "Peluncuran dan penyempurnaan",
      icon: <CheckCircleOutlined />,
    },
  ];

  const approachPillars = [
    {
      title: "Story",
      description: "Menggali perjalanan dan nilai brand Anda",
      detail: "Kami mengekstrak esensi bisnis Anda—bagaimana Anda memulai, tantangan yang dihadapi, dan nilai yang Anda jaga. Ini menjadi fondasi kepercayaan.",
      icon: <BookOutlined className="text-4xl" />,
      color: "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)",
    },
    {
      title: "Design",
      description: "Visual storytelling yang membangun kepercayaan",
      detail: "Desain bukan sekadar estetika. Setiap elemen visual dirancang untuk memperkuat narasi dan memudahkan buyer memahami brand Anda.",
      icon: <HeartOutlined className="text-4xl" />,
      color: "linear-gradient(135deg, #EC4899 0%, #F472B6 100%)",
    },
    {
      title: "Website",
      description: "Struktur narasi yang jelas untuk buyer",
      detail: "Website yang menjelaskan bisnis Anda dengan flow yang logis—dari value proposition hingga proses kerja—tanpa perlu Anda hadir.",
      icon: <GlobalOutlined className="text-4xl" />,
      color: "linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)",
    },
  ];

  return (
    <div className="min-h-screen export-landing" style={{ background: 'linear-gradient(135deg, #F8F9FF 0%, #FFF5F7 50%, #F0FDFA 100%)' }}>
      {/* Navigation */}
      <div className="fixed top-0 w-full export-nav z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center space-x-3">
              <Title
                level={4}
                className="!mb-0 !text-lg md:!text-xl"
                style={{
                  color: "#3E3731",
                  fontFamily: "Playfair Display, serif",
                }}
              >
                RASANARA
              </Title>
            </div>

            <div className="hidden lg:flex items-center gap-1">
              {menuItems.map((item) => (
                <Button
                  key={item.key}
                  type="text"
                  onClick={() => scrollToSection(item.key)}
                  className="font-medium hover:text-purple-600"
                  style={{ 
                    fontSize: "15px", 
                    color: "#3E3731",
                    padding: "4px 16px",
                    height: "auto",
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                type="primary"
                className="ml-2 export-btn-primary rounded-full px-6 py-2 h-auto font-semibold"
                icon={<WhatsAppOutlined />}
                href="https://wa.me/6281297203692?text=Halo%20Rasanara%2C%20saya%20ingin%20membangun%20cerita%20bisnis%20ekspor%20saya."
                target="_blank"
                rel="noopener noreferrer"
              >
                Mulai Percakapan
              </Button>
            </div>

            <div className="lg:hidden">
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
      >
        <div className="space-y-4">
          {menuItems.map((item) => (
            <Button
              key={item.key}
              type="text"
              block
              onClick={() => scrollToSection(item.key)}
              className="text-left"
              style={{ fontSize: "16px", height: "48px" }}
            >
              {item.label}
            </Button>
          ))}
          <Button
            type="primary"
            block
            className="export-btn-primary rounded-full"
            style={{ height: "48px", fontWeight: "600" }}
            icon={<WhatsAppOutlined />}
            href="https://wa.me/6281297203692?text=Halo%20Rasanara%2C%20saya%20ingin%20membangun%20cerita%20bisnis%20ekspor%20saya."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setDrawerVisible(false)}
          >
            Mulai Percakapan
          </Button>
        </div>
      </Drawer>

      {/* Hero Section */}
      <section
        className="pt-32 md:pt-40 pb-20 md:pb-28 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(180deg, #F8F9FF 0%, #FFF5F7 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center md:text-left">
            <Title
              level={1}
              className="!text-4xl sm:!text-5xl md:!text-6xl !mb-8 !leading-tight"
              style={{
                fontFamily: "Playfair Display, serif",
                background: "linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "-0.02em",
              }}
            >
              Website yang Menjelaskan Bisnis Anda
              <br />
              <span style={{ 
                background: "linear-gradient(135deg, #F97316 0%, #EC4899 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Saat Anda Tidak Bisa Menjelaskan Sendiri.
              </span>
            </Title>

            <Paragraph
              className="!text-lg md:!text-xl !mb-10 !leading-relaxed"
              style={{ color: "#475569", maxWidth: "680px" }}
            >
              Kami membantu UMKM dan personal brand ekspor / impor membangun
              kepercayaan buyer lewat cerita, struktur, dan percakapan.
            </Paragraph>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                type="primary"
                size="large"
                className="export-btn-primary rounded-full font-semibold"
                style={{ padding: "12px 32px", height: "auto", fontSize: "16px" }}
                icon={<ArrowRightOutlined />}
                href="#process"
              >
                Lihat Cara Kami Bekerja
              </Button>
              <Button
                size="large"
                className="export-btn-secondary rounded-full font-semibold"
                style={{ padding: "12px 32px", height: "auto", fontSize: "16px" }}
                href="https://wa.me/6281297203692?text=Halo%20Rasanara%2C%20saya%20ingin%20membangun%20cerita%20bisnis%20ekspor%20saya."
                target="_blank"
                rel="noopener noreferrer"
              >
                Mulai Percakapan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section
        id="problem"
        className="py-20 md:py-28 px-4 sm:px-6 lg:px-8"
        style={{ background: "#FFFFFF" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Title
              level={2}
              className="!text-3xl md:!text-5xl !mb-6"
              style={{
                fontFamily: "Playfair Display, serif",
                color: "#3E3731",
              }}
            >
              Tantangan Nyata dalam Ekspor / Impor
            </Title>
          </div>

          <div className="space-y-8">
            <Card className="export-card border-0 rounded-2xl p-6 md:p-8">
              <Paragraph
                className="!text-lg md:!text-xl !mb-6 !leading-relaxed"
                style={{ color: "#3E3731", fontWeight: "500" }}
              >
                Banyak bisnis ekspor punya produk bagus, tapi website-nya belum
                mampu menjelaskan kenapa brand itu layak dipercaya.
              </Paragraph>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleOutlined
                    className="mr-3 mt-1"
                    style={{ color: "#8B7355", fontSize: "18px" }}
                  />
                  <Text style={{ color: "#5A5248", fontSize: "16px" }}>
                    Buyer internasional butuh kepercayaan sebelum kontak
                  </Text>
                </div>
                <div className="flex items-start">
                  <CheckCircleOutlined
                    className="mr-3 mt-1"
                    style={{ color: "#8B7355", fontSize: "18px" }}
                  />
                  <Text style={{ color: "#5A5248", fontSize: "16px" }}>
                    Penjelasan berulang yang menguras energi founder
                  </Text>
                </div>
                <div className="flex items-start">
                  <CheckCircleOutlined
                    className="mr-3 mt-1"
                    style={{ color: "#8B7355", fontSize: "18px" }}
                  />
                  <Text style={{ color: "#5A5248", fontSize: "16px" }}>
                    Prospek mengevaluasi secara diam-diam tanpa kontak langsung
                  </Text>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Story Matters Section */}
      <section
        className="py-20 md:py-28 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(135deg, #FFF5F7 0%, #F0FDFA 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Title
              level={2}
              className="!text-3xl md:!text-5xl !mb-6"
              style={{
                fontFamily: "Playfair Display, serif",
                color: "#3E3731",
              }}
            >
              Kenapa Cerita Penting dalam Ekspor / Impor
            </Title>
            <Paragraph
              className="!text-lg !max-w-3xl mx-auto"
              style={{ color: "#5A5248", lineHeight: "1.8" }}
            >
              Cerita bukan sekadar kata-kata. Dalam bisnis global, cerita adalah
              fondasi kepercayaan.
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <div className="export-feature-card p-8 rounded-2xl h-full">
                <Title
                  level={4}
                  className="!mb-4"
                  style={{ color: "#3E3731", fontFamily: "Playfair Display, serif" }}
                >
                  Kredibilitas
                </Title>
                <Paragraph style={{ color: "#5A5248", lineHeight: "1.7" }}>
                  Buyer internasional mencari konsistensi. Cerita yang terstruktur
                  menunjukkan bahwa Anda serius dan dapat diandalkan.
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="export-feature-card p-8 rounded-2xl h-full">
                <Title
                  level={4}
                  className="!mb-4"
                  style={{ color: "#3E3731", fontFamily: "Playfair Display, serif" }}
                >
                  Kepatuhan & Proses
                </Title>
                <Paragraph style={{ color: "#5A5248", lineHeight: "1.7" }}>
                  Transparansi proses—dari sourcing hingga quality control—membuat
                  buyer memahami standar kerja Anda tanpa perlu bertanya berulang.
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="export-feature-card p-8 rounded-2xl h-full">
                <Title
                  level={4}
                  className="!mb-4"
                  style={{ color: "#3E3731", fontFamily: "Playfair Display, serif" }}
                >
                  Konsistensi Lintas Zona Waktu
                </Title>
                <Paragraph style={{ color: "#5A5248", lineHeight: "1.7" }}>
                  Website yang terstruktur bekerja 24/7, menjawab pertanyaan buyer
                  dari berbagai zona waktu dengan informasi yang konsisten.
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="export-feature-card p-8 rounded-2xl h-full">
                <Title
                  level={4}
                  className="!mb-4"
                  style={{ color: "#3E3731", fontFamily: "Playfair Display, serif" }}
                >
                  Trust Anchor
                </Title>
                <Paragraph style={{ color: "#5A5248", lineHeight: "1.7" }}>
                  Website bukan brosur. Ini adalah jangkar kepercayaan yang membantu
                  buyer memutuskan sebelum mereka menghubungi Anda.
                </Paragraph>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Rasanara Approach Section */}
      <section
        id="approach"
        className="py-20 md:py-28 px-4 sm:px-6 lg:px-8"
        style={{ background: "#FFFFFF" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Title
              level={2}
              className="!text-3xl md:!text-5xl !mb-6"
              style={{
                fontFamily: "Playfair Display, serif",
                color: "#3E3731",
              }}
            >
              Cerita, Desain, Website
            </Title>
            <Paragraph
              className="!text-lg !max-w-3xl mx-auto"
              style={{ color: "#5A5248", lineHeight: "1.8" }}
            >
              Tiga pilar pendekatan kami untuk membantu brand Anda berbicara
              dengan jelas.
            </Paragraph>
          </div>

          <Row gutter={[40, 40]}>
            {approachPillars.map((pillar, index) => (
              <Col xs={24} lg={8} key={index}>
                <div className="export-pillar-card p-8 rounded-2xl h-full text-center">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{
                      background: pillar.color,
                      color: "white",
                    }}
                  >
                    {pillar.icon}
                  </div>
                  <Title
                    level={3}
                    className="!text-2xl !mb-4"
                    style={{
                      color: "#3E3731",
                      fontFamily: "Playfair Display, serif",
                    }}
                  >
                    {pillar.title}
                  </Title>
                  <Paragraph
                    className="!mb-4"
                    style={{
                      color: "#5A5248",
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    {pillar.description}
                  </Paragraph>
                  <Paragraph style={{ color: "#6B5D52", lineHeight: "1.7" }}>
                    {pillar.detail}
                  </Paragraph>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Brand Narrative Assistant Section */}
      <section
        id="assistant"
        className="py-20 md:py-28 px-4 sm:px-6 lg:px-8"
        style={{ background: "#F5F3F0" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Title
              level={2}
              className="!text-3xl md:!text-5xl !mb-6"
              style={{
                fontFamily: "Playfair Display, serif",
                color: "#3E3731",
              }}
            >
              Website yang Bisa Menjawab
              <br />
              <span style={{ 
                background: "linear-gradient(135deg, #F97316 0%, #EC4899 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>Saat Anda Tidak Hadir</span>
            </Title>
            <Paragraph
              className="!text-lg !max-w-3xl mx-auto"
              style={{ color: "#5A5248", lineHeight: "1.8" }}
            >
              Brand Narrative Assistant adalah chatbot yang dilatih dengan cerita
              asli brand Anda—bukan template, bukan jawaban generik.
            </Paragraph>
          </div>

          <Card className="export-ai-card border-0 rounded-3xl p-8 md:p-12">
            <Row gutter={[32, 32]} align="middle">
              <Col xs={24} md={12}>
                <div
                  className="rounded-2xl p-8 text-center"
                  style={{ background: "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)" }}
                >
                  <GlobalOutlined
                    style={{ fontSize: "64px", color: "#8B5CF6" }}
                  />
                  <Title
                    level={4}
                    className="!mt-4 !mb-2"
                    style={{ color: "#3E3731" }}
                  >
                    AI yang Memahami Brand Anda
                  </Title>
                  <Text style={{ color: "#5A5248" }}>
                    Dilatih dengan cerita, proses, dan nilai Anda
                  </Text>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div className="space-y-6">
                  <div>
                    <Title
                      level={5}
                      className="!mb-2"
                      style={{ color: "#3E3731" }}
                    >
                      Jawaban Konsisten
                    </Title>
                    <Text style={{ color: "#5A5248" }}>
                      Menjawab pertanyaan buyer dengan referensi ke cerita asli
                      brand Anda, bukan hallusinasi.
                    </Text>
                  </div>
                  <div>
                    <Title
                      level={5}
                      className="!mb-2"
                      style={{ color: "#3E3731" }}
                    >
                      Tahu Batasannya
                    </Title>
                    <Text style={{ color: "#5A5248" }}>
                      Chatbot tahu kapan harus eskalasi ke manusia. Tidak
                      menggurui, tidak menebak-nebak.
                    </Text>
                  </div>
                  <div>
                    <Title
                      level={5}
                      className="!mb-2"
                      style={{ color: "#3E3731" }}
                    >
                      Fokus pada Klaritas
                    </Title>
                    <Text style={{ color: "#5A5248" }}>
                      Bukan "AI canggih", tapi alat yang membantu buyer memahami
                      brand Anda dengan lebih baik.
                    </Text>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        className="py-20 md:py-28 px-4 sm:px-6 lg:px-8"
        style={{ background: "#FFFFFF" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Title
              level={2}
              className="!text-3xl md:!text-5xl !mb-6"
              style={{
                fontFamily: "Playfair Display, serif",
                color: "#3E3731",
              }}
            >
              Proses Kolaboratif Kami
            </Title>
            <Paragraph
              className="!text-lg !max-w-3xl mx-auto"
              style={{ color: "#5A5248", lineHeight: "1.8" }}
            >
              Transparan, kolaboratif, dan fokus pada hasil yang bermakna.
            </Paragraph>
          </div>

          <Row gutter={[24, 24]}>
            {processSteps.map((step, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <div className="export-process-card p-6 md:p-8 rounded-2xl h-full">
                  <div className="flex items-start mb-4">
                    <div
                      className="flex items-center justify-center w-14 h-14 rounded-full flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)", color: "white" }}
                    >
                      {step.icon}
                    </div>
                    <div
                      className="ml-4 flex items-center justify-center w-10 h-10 rounded-full font-bold"
                      style={{
                        background: "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
                        color: "#8B5CF6",
                        fontSize: "18px",
                      }}
                    >
                      {index + 1}
                    </div>
                  </div>
                  <Title
                    level={4}
                    className="!mb-3 !text-xl"
                    style={{ color: "#3E3731", fontFamily: "Playfair Display, serif" }}
                  >
                    {step.title}
                  </Title>
                  <Paragraph style={{ color: "#5A5248", fontSize: "15px", lineHeight: "1.7" }}>
                    {step.description}
                  </Paragraph>
                </div>
              </Col>
            ))}
          </Row>

          {/* Add a timeline visual indicator on desktop */}
          <div className="hidden lg:block mt-12">
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-2">
                {processSteps.map((_, index) => (
                  <React.Fragment key={index}>
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ background: "linear-gradient(135deg, #14B8A6 0%, #2DD4BF 100%)" }}
                    />
                    {index < processSteps.length - 1 && (
                      <div
                        className="h-0.5 w-16"
                        style={{ background: "linear-gradient(135deg, rgba(20, 184, 166, 0.2) 0%, rgba(45, 212, 191, 0.2) 100%)" }}
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section
        className="py-20 md:py-28 px-4 sm:px-6 lg:px-8"
        style={{ background: "#F5F3F0" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Title
              level={2}
              className="!text-3xl md:!text-5xl !mb-6"
              style={{
                fontFamily: "Playfair Display, serif",
                color: "#3E3731",
              }}
            >
              Untuk Siapa Ini?
            </Title>
          </div>

          <Row gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <Card className="export-who-card border-0 rounded-2xl p-8 h-full">
                <Title
                  level={4}
                  className="!mb-6"
                  style={{ color: "#3E3731", fontFamily: "Playfair Display, serif" }}
                >
                  ✓ Cocok untuk Anda jika:
                </Title>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircleOutlined
                      className="mr-3 mt-1"
                      style={{ color: "#8B7355" }}
                    />
                    <Text style={{ color: "#5A5248" }}>
                      UMKM eksportir yang ingin membangun kepercayaan internasional
                    </Text>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleOutlined
                      className="mr-3 mt-1"
                      style={{ color: "#8B7355" }}
                    />
                    <Text style={{ color: "#5A5248" }}>
                      Importir yang butuh website untuk menjelaskan proses bisnis
                    </Text>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleOutlined
                      className="mr-3 mt-1"
                      style={{ color: "#8B7355" }}
                    />
                    <Text style={{ color: "#5A5248" }}>
                      Content creator yang membangun brand global
                    </Text>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleOutlined
                      className="mr-3 mt-1"
                      style={{ color: "#8B7355" }}
                    />
                    <Text style={{ color: "#5A5248" }}>
                      Founder yang menghargai klaritas dan kredibilitas
                    </Text>
                  </div>
                </div>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card
                className="border-0 rounded-2xl p-8 h-full"
                style={{ background: "rgba(139, 115, 85, 0.05)" }}
              >
                <Title
                  level={4}
                  className="!mb-6"
                  style={{ color: "#3E3731", fontFamily: "Playfair Display, serif" }}
                >
                  ✗ Tidak cocok jika:
                </Title>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Text style={{ color: "#8B7355", marginRight: "12px" }}>
                      →
                    </Text>
                    <Text style={{ color: "#6B5D52" }}>
                      Mencari template instan atau solusi murah
                    </Text>
                  </div>
                  <div className="flex items-start">
                    <Text style={{ color: "#8B7355", marginRight: "12px" }}>
                      →
                    </Text>
                    <Text style={{ color: "#6B5D52" }}>
                      Tidak tertarik membangun cerita brand jangka panjang
                    </Text>
                  </div>
                  <div className="flex items-start">
                    <Text style={{ color: "#8B7355", marginRight: "12px" }}>
                      →
                    </Text>
                    <Text style={{ color: "#6B5D52" }}>
                      Hanya butuh website sebagai formalitas
                    </Text>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Collaboration CTA Section */}
      <section
        id="contact"
        className="py-20 md:py-28 px-4 sm:px-6 lg:px-8"
        style={{
          background: "linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p
            level={2}
            className="!text-3xl md:!text-5xl !mb-6 !text-white"
            style={{
              fontFamily: "Playfair Display, serif",
            }}
          >
            Kami Membuka Kolaborasi Terbatas
          </p>
          <Paragraph
            className="!text-lg md:!text-xl !mb-10"
            style={{
              color: "rgba(255, 255, 255, 0.9)",
              lineHeight: "1.8",
              maxWidth: "600px",
              margin: "0 auto 40px",
            }}
          >
            Untuk brand yang ingin membangun cerita digitalnya dengan serius.
          </Paragraph>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              type="primary"
              size="large"
              className="rounded-full font-semibold border-0"
              style={{
                background: "#FFFFFF",
                color: "#3E3731",
                padding: "12px 40px",
                height: "auto",
                fontSize: "16px",
              }}
              icon={<WhatsAppOutlined />}
              href="https://wa.me/6281297203692?text=Halo%20Rasanara%2C%20saya%20ingin%20memulai%20dari%20cerita."
              target="_blank"
              rel="noopener noreferrer"
            >
              Mulai dari Cerita
            </Button>
            <Button
              size="large"
              className="rounded-full font-semibold"
              style={{
                background: "transparent",
                color: "#FFFFFF",
                border: "2px solid rgba(255, 255, 255, 0.5)",
                padding: "12px 40px",
                height: "auto",
                fontSize: "16px",
              }}
              href="https://wa.me/6281297203692?text=Halo%20Rasanara%2C%20saya%20ingin%20diskusi%20awal%20tentang%20project."
              target="_blank"
              rel="noopener noreferrer"
            >
              Diskusi Awal
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 px-4 text-center"
        style={{ background: "#3E3731" }}
      >
        <div className="max-w-7xl mx-auto">
          <Title
            level={4}
            className="!mb-4"
            style={{
              color: "#FAF9F7",
              fontFamily: "Playfair Display, serif",
            }}
          >
            RASANARA
          </Title>
          <Paragraph className="!mb-6" style={{ color: "#8B5CF6" }}>
            Dari Awal yang Sederhana Menuju Kisah yang Besar
          </Paragraph>
          <Text style={{ color: "#8B7355", fontSize: "14px" }}>
            Made with <HeartOutlined style={{ color: "#EC4899" }} /> in
            Indonesia.
          </Text>
        </div>
      </footer>
    </div>
  );
};

export default ExportLanding;
