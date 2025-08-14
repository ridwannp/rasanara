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
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const Home = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [form] = Form.useForm();

  const services = [
    {
      icon: <GlobalOutlined className="text-4xl" />,
      title: "Website Landing Page",
      description:
        "Crafting high-converting landing pages that tell your brand's story and drive results.",
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
        "Transform your digital experience with intuitive design that users love and remember.",
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
      title: "AI Content Generator",
      description:
        "Intelligent content creation tools powered by AI to scale your brand's narrative.",
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
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content:
        "Rasanara transformed our digital presence completely. Their approach to storytelling through design is unmatched.",
      rating: 5,
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, Innovate Co",
      content:
        "The AI content generator saved us countless hours while maintaining our brand voice perfectly.",
      rating: 5,
      avatar: "MC",
    },
    {
      name: "Lisa Rodriguez",
      role: "Founder, CreativeHub",
      content:
        "From zero to hero - Rasanara helped us build a brand that resonates with our audience.",
      rating: 5,
      avatar: "LR",
    },
  ];

  const menuItems = [
    { key: "services", label: "Services" },
    { key: "about", label: "About" },
    { key: "testimonials", label: "Testimonials" },
    { key: "contact", label: "Contact" },
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <img src={"/assets/logo.png"} alt="logo" width={60} />
              </div>
              <Title level={4} className="!mb-0 !text-gray-900">
                Rasanara
              </Title>
            </div>

            <div className="hidden md:flex items-center">
              <Menu
                mode="horizontal"
                className="border-0 bg-transparent"
                items={menuItems.map((item) => ({
                  ...item,
                  onClick: () => scrollToSection(item.key),
                }))}
              />
              <Button
                type="primary"
                className="ml-6 bg-gradient-to-r from-orange-500 to-red-500 border-0 rounded-full px-6 hover:from-orange-600 hover:to-red-600"
                icon={<RocketOutlined />}
              >
                Get Started
              </Button>
            </div>

            <Button
              className="md:hidden"
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setDrawerVisible(true)}
            />
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
            >
              {item.label}
            </Button>
          ))}
          <Button
            type="primary"
            block
            className="bg-gradient-to-r from-orange-500 to-red-500 border-0"
            icon={<RocketOutlined />}
          >
            Get Started
          </Button>
        </div>
      </Drawer>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <ThunderboltOutlined />
            <Text>Building from Zero to Hero</Text>
          </div>

          <Title level={1} className="!text-5xl md:!text-7xl !mb-6">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Rasa
            </span>
            {" + "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Narasi
            </span>
          </Title>

          <Paragraph className="!text-xl md:!text-2xl !text-gray-600 !mb-8 max-w-3xl mx-auto">
            We craft digital experiences that don't just look beautiful—they
            tell stories, create connections, and drive meaningful results.
          </Paragraph>

          <Space size="large" wrap className="mb-12">
            <Button
              type="primary"
              size="large"
              className="bg-gradient-to-r from-orange-500 to-red-500 border-0 rounded-full px-8 py-4 h-auto text-lg font-semibold hover:from-orange-600 hover:to-red-600 hover:scale-105 transition-all"
              icon={<ArrowRightOutlined />}
            >
              Start Your Journey
            </Button>
            <Button
              size="large"
              className="border-2 border-gray-300 text-gray-700 rounded-full px-8 py-4 h-auto text-lg font-semibold hover:border-orange-500 hover:text-orange-600"
            >
              Watch Our Story
            </Button>
          </Space>

          <Row gutter={[32, 32]} className="max-w-4xl mx-auto">
            <Col xs={24} md={8} className="text-center">
              <Title level={2} className="!text-3xl !text-gray-900 !mb-2">
                0
              </Title>
              <Text className="text-gray-600">Starting Point</Text>
            </Col>
            <Col xs={24} md={8} className="text-center">
              <Title level={2} className="!text-3xl !text-gray-900 !mb-2">
                2
              </Title>
              <Text className="text-gray-600">Co-Founders</Text>
            </Col>
            <Col xs={24} md={8} className="text-center">
              <Title level={2} className="!text-3xl !text-gray-900 !mb-2">
                ∞
              </Title>
              <Text className="text-gray-600">Possibilities</Text>
            </Col>
          </Row>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Title
              level={2}
              className="!text-4xl md:!text-5xl !text-gray-900 !mb-4"
            >
              Our Services
            </Title>
            <Paragraph className="!text-xl !text-gray-600 max-w-3xl mx-auto">
              Three powerful solutions to transform your digital presence and
              tell your brand's story effectively.
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            {services.map((service, index) => (
              <Col xs={24} lg={8} key={index}>
                <Card
                  className="h-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0"
                  bodyStyle={{ padding: "32px" }}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-6 hover:scale-110 transition-transform`}
                  >
                    {service.icon}
                  </div>

                  <Title level={3} className="!text-2xl !text-gray-900 !mb-4">
                    {service.title}
                  </Title>

                  <Paragraph className="!text-gray-600 !mb-6 !leading-relaxed">
                    {service.description}
                  </Paragraph>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-gray-700"
                      >
                        <CheckCircleOutlined className="text-green-500 mr-3 text-lg" />
                        <Text>{feature}</Text>
                      </div>
                    ))}
                  </div>

                  <Button
                    block
                    size="large"
                    className="rounded-xl font-semibold hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white hover:border-orange-500"
                  >
                    Learn More
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-r from-orange-50 to-red-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <Title
                level={2}
                className="!text-4xl md:!text-5xl !text-gray-900 !mb-6"
              >
                From Zero to
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  {" "}
                  Hero
                </span>
              </Title>
              <Paragraph className="!text-lg !text-gray-600 !mb-6 !leading-relaxed">
                Rasanara was born from a simple belief: every great business
                needs both <strong>Rasa</strong> (feeling/experience) and{" "}
                <strong>Narasi</strong> (story/narrative) to truly connect with
                their audience.
              </Paragraph>
              <Paragraph className="!text-lg !text-gray-600 !mb-8 !leading-relaxed">
                We're two passionate founders who started with zero capital,
                zero followers, but infinite determination to help Indonesian
                brands tell their stories through meaningful digital
                experiences.
              </Paragraph>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-4"></div>
                  <Text className="text-gray-700">
                    Technology with human touch
                  </Text>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-4"></div>
                  <Text className="text-gray-700">
                    Stories that inspire action
                  </Text>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-4"></div>
                  <Text className="text-gray-700">
                    Authentic Indonesian perspective
                  </Text>
                </div>
              </div>
            </Col>

            <Col xs={24} lg={12}>
              <div className="relative">
                <Card className="bg-gradient-to-r from-orange-500 to-red-500 border-0 text-white">
                  <Title level={3} className="!text-white !mb-4">
                    Our Mission
                  </Title>
                  <Paragraph className="!text-white !text-lg !leading-relaxed !mb-0">
                    "To help every Indonesian brand discover their unique voice
                    and tell their story through digital experiences that not
                    only look beautiful but create lasting connections with
                    their audience."
                  </Paragraph>
                </Card>
                <Card className="absolute -bottom-6 -right-6 shadow-xl border-0">
                  <div className="flex items-center space-x-4">
                    <UserOutlined className="text-3xl text-orange-500" />
                    <div>
                      <Title
                        level={4}
                        className="!text-2xl !text-gray-900 !mb-0"
                      >
                        100+
                      </Title>
                      <Text className="text-gray-600">Projects Planned</Text>
                    </div>
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Title
              level={2}
              className="!text-4xl md:!text-5xl !text-gray-900 !mb-4"
            >
              What People Say
            </Title>
            <Paragraph className="!text-xl !text-gray-600">
              Stories from brands we've helped transform
            </Paragraph>
          </div>

          <div className="max-w-4xl mx-auto">
            <Carousel autoplay effect="fade" className="testimonial-carousel">
              {testimonials.map((testimonial, index) => (
                <div key={index}>
                  <Card className="bg-gradient-to-r from-orange-500 to-red-500 border-0 text-center">
                    <Rate
                      disabled
                      defaultValue={testimonial.rating}
                      className="text-yellow-300 mb-6"
                    />
                    <Paragraph className="!text-xl md:!text-2xl !font-medium !mb-6 !leading-relaxed !text-white">
                      "{testimonial.content}"
                    </Paragraph>
                    <div className="flex items-center justify-center space-x-4">
                      <Avatar
                        size={48}
                        className="bg-white text-orange-500 font-bold"
                      >
                        {testimonial.avatar}
                      </Avatar>
                      <div className="text-left">
                        <Title level={5} className="!text-white !mb-1">
                          {testimonial.name}
                        </Title>
                        <Text className="text-orange-200">
                          {testimonial.role}
                        </Text>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Title level={2} className="!text-4xl md:!text-5xl !text-white !mb-6">
            Ready to Start Your Story?
          </Title>
          <Paragraph className="!text-xl !mb-8 max-w-3xl mx-auto !text-gray-300">
            Join us on this incredible journey from zero to hero. Let's create
            something meaningful together.
          </Paragraph>
          <Space size="large" wrap>
            <Button
              type="primary"
              size="large"
              className="bg-gradient-to-r from-orange-500 to-red-500 border-0 rounded-full px-8 py-4 h-auto text-lg font-semibold hover:from-orange-600 hover:to-red-600 hover:scale-105 transition-all"
            >
              Get Started Today
            </Button>
            <Button
              size="large"
              className="border-2 border-white text-white rounded-full px-8 py-4 h-auto text-lg font-semibold hover:bg-white hover:text-gray-900"
            >
              Schedule a Call
            </Button>
          </Space>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Title
              level={2}
              className="!text-4xl md:!text-5xl !text-gray-900 !mb-4"
            >
              Let's Connect
            </Title>
            <Paragraph className="!text-xl !text-gray-600">
              Ready to transform your digital presence? We'd love to hear from
              you.
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            <Col xs={24} lg={8}>
              <Card className="text-center h-full border-0 shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  <MailOutlined className="text-2xl" />
                </div>
                <Title level={4} className="!text-gray-900 !mb-2">
                  Email Us
                </Title>
                <Text className="text-gray-600">hello@rasanara.id</Text>
              </Card>
            </Col>

            <Col xs={24} lg={8}>
              <Card className="text-center h-full border-0 shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  <PhoneOutlined className="text-2xl" />
                </div>
                <Title level={4} className="!text-gray-900 !mb-2">
                  Call Us
                </Title>
                <Text className="text-gray-600">+62 xxx xxxx xxxx</Text>
              </Card>
            </Col>

            <Col xs={24} lg={8}>
              <Card className="text-center h-full border-0 shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  <EnvironmentOutlined className="text-2xl" />
                </div>
                <Title level={4} className="!text-gray-900 !mb-2">
                  Visit Us
                </Title>
                <Text className="text-gray-600">
                  Bogor, West Java, Indonesia
                </Text>
              </Card>
            </Col>
          </Row>

          <Divider />

          <div className="max-w-2xl mx-auto">
            <Title level={3} className="text-center !mb-8">
              Send us a message
            </Title>
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              className="space-y-4"
            >
              <Row gutter={[16, 0]}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                      { required: true, message: "Please input your name!" },
                    ]}
                  >
                    <Input size="large" placeholder="Your Name" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      { required: true, message: "Please input your email!" },
                      { type: "email", message: "Please enter a valid email!" },
                    ]}
                  >
                    <Input size="large" placeholder="your@email.com" />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                label="Subject"
                name="subject"
                rules={[
                  { required: true, message: "Please input the subject!" },
                ]}
              >
                <Input size="large" placeholder="How can we help you?" />
              </Form.Item>
              <Form.Item
                label="Message"
                name="message"
                rules={[
                  { required: true, message: "Please input your message!" },
                ]}
              >
                <Input.TextArea
                  rows={5}
                  placeholder="Tell us about your project..."
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  block
                  className="bg-gradient-to-r from-orange-500 to-red-500 border-0 rounded-lg h-12 text-lg font-semibold"
                  icon={<ArrowRightOutlined />}
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Row justify="space-between" align="middle">
            <Col xs={24} md={12} className="mb-4 md:mb-0">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <Title level={4} className="!mb-0 !text-white">
                  Rasanara
                </Title>
              </div>
            </Col>

            <Col xs={24} md={12} className="text-center md:text-right">
              <Paragraph className="!text-gray-400 !mb-2">
                Building meaningful digital experiences, one story at a time.
              </Paragraph>
              <Text className="text-gray-500 text-sm">
                © 2024 Rasanara. Made with{" "}
                <HeartOutlined className="text-red-500" /> in Indonesia.
              </Text>
            </Col>
          </Row>
        </div>
      </footer>

      <style jsx>{`
        .testimonial-carousel .ant-carousel .ant-carousel-dots {
          bottom: -50px;
        }
        .testimonial-carousel .ant-carousel .ant-carousel-dots li button {
          background: #d1d5db;
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        .testimonial-carousel
          .ant-carousel
          .ant-carousel-dots
          li.ant-carousel-dots-active
          button {
          background: #f97316;
        }
      `}</style>
    </div>
  );
};

export default Home;
