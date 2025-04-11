import React, { useState, useEffect, useRef } from "react";
import * as echarts from "echarts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion"; // Import Framer Motion
import { Helmet, HelmetProvider } from "react-helmet-async"; // Import Helmet and HelmetProvider

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("conversion");
  const [chartInstance, setChartInstance] = useState(null);
  const animatedElements = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const chartContainer = document.querySelector("#chart-container");
    if (chartContainer) {
      const chart = echarts.init(chartContainer);
      setChartInstance(chart);
      const option = {
        animation: false,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        legend: {
          data: ["Before", "After"],
          right: 10,
          top: 10,
        },
        xAxis: {
          type: "category",
          data: ["Conversion", "Engagement", "Load Time", "Mobile Traffic"],
          axisLine: {
            lineStyle: {
              color: "#ddd",
            },
          },
          axisLabel: {
            color: "#666",
            interval: 0,
            rotate: 0,
          },
        },
        yAxis: {
          type: "value",
          max: 100,
          axisLine: {
            lineStyle: {
              color: "#ddd",
            },
          },
          axisLabel: {
            color: "#666",
          },
          splitLine: {
            lineStyle: {
              color: "#f5f5f5",
            },
          },
        },
        series: [
          {
            name: "Before",
            type: "bar",
            barWidth: "30%",
            data: [30, 45, 65, 35],
            itemStyle: {
              color: "#a0aec0",
            },
          },
          {
            name: "After",
            type: "bar",
            barWidth: "30%",
            data: [85, 90, 95, 80],
            itemStyle: {
              color: "#4ade80",
            },
          },
        ],
      };
      chart.setOption(option);

      const handleResize = () => {
        chart.resize();
      };
      window.addEventListener("resize", handleResize);
      return () => {
        chart.dispose();
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    animatedElements.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleSmoothScroll = (event) => {
      const target = event.target.getAttribute("href");
      if (target && target.startsWith("#")) {
        event.preventDefault();
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  useEffect(() => {
    // Trigger animations on initial render
    animatedElements.current.forEach((el) => {
      if (el) {
        el.classList.add("animate-visible");
      }
    });
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>
          Vysible - Professional Websites & High-Converting Landing Pages
        </title>
        <meta
          name="description"
          content="Vysible specializes in creating professional websites and high-converting landing pages for businesses. Boost your online presence today!"
        />
        <meta
          name="keywords"
          content="landing pages, website development, Ghana, worldwide, converting pages, SEO optimization"
        />
        <meta name="author" content="Vysible" />
        <meta
          property="og:title"
          content="Vysible - High-Converting Landing Pages"
        />
        <meta
          property="og:description"
          content="We create high-performing landing pages and websites for businesses worldwide. Contact us to transform your online presence."
        />
        <meta
          property="og:image"
          content="https://public.readdy.ai/ai/img_res/94602d129ca06a5a79c77d8242a97e1b.jpg"
        />
        <meta property="og:url" content="https://vysible.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Vysible - High-Converting Landing Pages"
        />
        <meta
          name="twitter:description"
          content="We create high-performing landing pages and websites for businesses worldwide. Contact us to transform your online presence."
        />
        <meta
          name="twitter:image"
          content="https://public.readdy.ai/ai/img_res/94602d129ca06a5a79c77d8242a97e1b.jpg"
        />
      </Helmet>
      <div className="font-sans text-gray-900 min-h-screen bg-gradient-to-br from-emerald-50 to-green-100">
        {/* Header & Navigation */}
        <header
          className={`fixed w-full z-50 transition-all duration-300 ${
            isScrolled ? "bg-white shadow-md py-3" : "bg-white py-4"
          }`}
        >
          <div className="container mx-auto px-6 flex justify-between items-center">
            <motion.div
              className="flex items-center"
              initial={{ scale: 1 }}
              animate={isScrolled ? { scale: 1.2 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
                initial={{ opacity: 1 }}
                animate={isScrolled ? { opacity: 1 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  d="M20 0C8.954 0 0 8.954 0 20C0 31.046 8.954 40 20 40C31.046 40 40 31.046 40 20C40 8.954 31.046 0 20 0ZM30 30H10L20 10L30 30Z"
                  fill="#10b981"
                />
                <path d="M20 15L15 25H25L20 15Z" fill="white" />
              </motion.svg>
              <motion.h1
                className={`text-2xl font-bold ${
                  isScrolled ? "text-emerald-500" : "text-gray-900"
                }`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
                initial={{ opacity: 1, x: 0 }}
                animate={
                  isScrolled ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }
                }
                transition={{ duration: 0.3 }}
              >
                vysible.
              </motion.h1>
            </motion.div>
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li>
                  <a
                    href="#results"
                    className={`hover:text-emerald-500 transition-colors cursor-pointer ${
                      activeTab === "results"
                        ? "text-emerald-500 font-bold"
                        : ""
                    }`}
                    onClick={() => setActiveTab("results")}
                  >
                    Results
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className={`hover:text-emerald-500 transition-colors cursor-pointer ${
                      activeTab === "services"
                        ? "text-emerald-500 font-bold"
                        : ""
                    }`}
                    onClick={() => setActiveTab("services")}
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className={`hover:text-emerald-500 transition-colors cursor-pointer ${
                      activeTab === "testimonials"
                        ? "text-emerald-500 font-bold"
                        : ""
                    }`}
                    onClick={() => setActiveTab("testimonials")}
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className={`hover:text-emerald-500 transition-colors cursor-pointer ${
                      activeTab === "portfolio"
                        ? "text-emerald-500 font-bold"
                        : ""
                    }`}
                    onClick={() => setActiveTab("portfolio")}
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className={`hover:text-emerald-500 transition-colors cursor-pointer ${
                      activeTab === "contact"
                        ? "text-emerald-500 font-bold"
                        : ""
                    }`}
                    onClick={() => setActiveTab("contact")}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-black focus:outline-none cursor-pointer !rounded-button whitespace-nowrap"
              >
                <i
                  className={`fa-solid ${
                    isMenuOpen ? "fa-xmark" : "fa-bars"
                  } text-xl`}
                ></i>
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white shadow-lg">
              <ul className="py-4">
                <li className="py-2 px-6 border-b border-gray-100">
                  <a
                    href="#results"
                    onClick={() => setIsMenuOpen(false)}
                    className="block cursor-pointer"
                  >
                    Results
                  </a>
                </li>
                <li className="py-2 px-6 border-b border-gray-100">
                  <a
                    href="#services"
                    onClick={() => setIsMenuOpen(false)}
                    className="block cursor-pointer"
                  >
                    Services
                  </a>
                </li>
                <li className="py-2 px-6 border-b border-gray-100">
                  <a
                    href="#testimonials"
                    onClick={() => setIsMenuOpen(false)}
                    className="block cursor-pointer"
                  >
                    Testimonials
                  </a>
                </li>
                <li className="py-2 px-6 border-b border-gray-100">
                  <a
                    href="#portfolio"
                    onClick={() => setIsMenuOpen(false)}
                    className="block cursor-pointer"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="py-2 px-6">
                  <a
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block cursor-pointer"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:py-32 bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 text-left mb-10 md:mb-0 md:pr-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
                  Real Results
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-700">
                  Our landing pages don't just look good—they perform. See the
                  difference we make.
                </p>
                <a
                  href="#contact"
                  className="bg-emerald-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-emerald-600 transition-colors cursor-pointer !rounded-button whitespace-nowrap shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Get Started
                </a>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-500">
                      24+
                    </div>
                    <div className="text-gray-700">Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-500">
                      2+
                    </div>
                    <div className="text-gray-700">Years of Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-500">
                      12+
                    </div>
                    <div className="text-gray-700">Industries Served</div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src="https://public.readdy.ai/ai/img_res/94602d129ca06a5a79c77d8242a97e1b.jpg"
                  alt="Growth Metrics Visualization"
                  className="w-full max-w-md rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section
          id="results"
          className="py-20 bg-white opacity-0"
          ref={(el) => animatedElements.current.push(el)}
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Real Results
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our landing pages don't just look good—they perform. See the
                difference we make.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 mb-16">
              <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-lg overflow-hidden animate-zoom-in">
                <div id="chart-container" className="w-full h-[400px]"></div>
              </div>
              <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-in-left">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-emerald-500">
                  <div className="text-5xl font-bold text-emerald-500 mb-2">
                    85%
                  </div>
                  <div className="text-gray-700 font-medium">
                    Average Conversion Rate Increase
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-emerald-500">
                  <div className="text-5xl font-bold text-emerald-500 mb-2">
                    3x
                  </div>
                  <div className="text-gray-700 font-medium">
                    Lead Generation Growth
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-emerald-500">
                  <div className="text-5xl font-bold text-emerald-500 mb-2">
                    90%
                  </div>
                  <div className="text-gray-700 font-medium">
                    Mobile Optimization Score
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-emerald-500">
                  <div className="text-5xl font-bold text-emerald-500 mb-2">
                    2s
                  </div>
                  <div className="text-gray-700 font-medium">
                    Average Page Load Time
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-gray-50 p-8 rounded-xl max-w-3xl">
                <div className="flex items-start mb-6">
                  <div className="text-emerald-500 mr-4 mt-1">
                    <i className="fa-solid fa-quote-left text-3xl"></i>
                  </div>
                  <p className="text-lg text-gray-700 italic">
                    "After implementing Vysible's landing page strategy, our
                    conversion rates increased by 85% in just two months. Their
                    focus on both design and performance made all the
                    difference."
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    src="https://public.readdy.ai/ai/img_res/d9c1d68941f21036342c531469083c6f.jpg"
                    alt="Client"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">Sarah Johnson</h4>
                    <p className="text-gray-600 text-sm">
                      Marketing Director, TechSolutions Inc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section
          id="services"
          className="py-20 bg-gray-50 opacity-0"
          ref={(el) => animatedElements.current.push(el)}
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive solutions to transform your online
                presence and drive real business results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-in-up">
                <div className="w-16 h-16 bg-emerald-500 rounded-lg flex items-center justify-center mb-6">
                  <i className="fa-solid fa-code text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">
                  High-Converting Landing Pages
                </h3>
                <p className="text-gray-600 mb-6">
                  Custom-designed pages that capture attention and drive
                  visitors to take action.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-emerald-500 mr-2"></i>
                    <span>Responsive design</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-emerald-500 mr-2"></i>
                    <span>A/B testing</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-emerald-500 mr-2"></i>
                    <span>Conversion optimization</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-emerald-500 rounded-lg flex items-center justify-center mb-6">
                  <i className="fa-solid fa-gauge-high text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Performance Optimization
                </h3>
                <p className="text-gray-600 mb-6">
                  Lightning-fast pages that provide exceptional user experience
                  and boost SEO.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-emerald-500 mr-2"></i>
                    <span>Fast loading times</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-emerald-500 mr-2"></i>
                    <span>Core Web Vitals optimization</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-emerald-500 mr-2"></i>
                    <span>Mobile responsiveness</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-emerald-500 rounded-lg flex items-center justify-center mb-6">
                  <i className="fa-solid fa-chart-line text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Analytics & Insights</h3>
                <p className="text-gray-600 mb-6">
                  Data-driven approach to continuously improve performance and
                  ROI.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-emerald-500 mr-2"></i>
                    <span>Conversion tracking</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-emerald-500 mr-2"></i>
                    <span>User behavior analysis</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-emerald-500 mr-2"></i>
                    <span>Performance reporting</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 text-center">
              <a
                href="#contact"
                className="inline-block bg-emerald-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-emerald-600 transition-colors cursor-pointer !rounded-button whitespace-nowrap shadow-lg"
              >
                Learn More About Our Services
              </a>
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our clients have to
                say about working with us.
              </p>
            </div>
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <div className="flex mb-6">
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                </div>
                <p className="text-gray-700 mb-6">
                  "The landing page Vysible created for our product launch
                  exceeded all expectations. Conversion rates jumped by 120%
                  compared to our previous page."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional headshot of a male business executive with neutral background, modern corporate portrait, high quality professional photo&width=60&height=60&seq=10&orientation=squarish"
                    alt="Client"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">Michael Roberts</h4>
                    <p className="text-gray-600 text-sm">
                      CEO, Innovate Solutions
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <div className="flex mb-6">
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                </div>
                <p className="text-gray-700 mb-6">
                  "Working with Vysible transformed our online presence. Their
                  attention to both design and performance metrics delivered
                  real business results."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional headshot of a female business executive with neutral background, modern corporate portrait, high quality professional photo&width=60&height=60&seq=11&orientation=squarish"
                    alt="Client"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">Jennifer Chen</h4>
                    <p className="text-gray-600 text-sm">
                      Marketing VP, GrowthTech
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <div className="flex mb-6">
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                </div>
                <p className="text-gray-700 mb-6">
                  "The mobile optimization Vysible implemented increased our
                  conversion rates by 95% on smartphones. Absolutely worth the
                  investment."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional headshot of a business executive with neutral background, modern corporate portrait, high quality professional photo&width=60&height=60&seq=12&orientation=squarish"
                    alt="Client"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">David Wilson</h4>
                    <p className="text-gray-600 text-sm">
                      Founder, MobileFirst
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile Testimonials Slider */}
            <div className="md:hidden">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
              >
                <SwiperSlide>
                  <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                    <div className="flex mb-6">
                      <i className="fa-solid fa-star text-yellow-400"></i>
                      <i className="fa-solid fa-star text-yellow-400"></i>
                      <i className="fa-solid fa-star text-yellow-400"></i>
                      <i className="fa-solid fa-star text-yellow-400"></i>
                      <i className="fa-solid fa-star text-yellow-400"></i>
                    </div>
                    <p className="text-gray-700 mb-6">
                      "The landing page Vysible created for our product launch
                      exceeded all expectations. Conversion rates jumped by 120%
                      compared to our previous page."
                    </p>
                    <div className="flex items-center">
                      <img
                        src="https://readdy.ai/api/search-image?query=Professional headshot of a male business executive with neutral background, modern corporate portrait, high quality professional photo&width=60&height=60&seq=10&orientation=squarish"
                        alt="Client"
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-bold">Michael Roberts</h4>
                        <p className="text-gray-600 text-sm">
                          CEO, Innovate Solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                    <div className="flex mb-6">
                      <i className="fa-solid fa-star text-yellow-400"></i>
                      <i className="fa-solid fa-star text-yellow-400"></i>
                      <i className="fa-solid fa-star text-yellow-400"></i>
                      <i className="fa-solid fa-star text-yellow-400"></i>
                      <i className="fa-solid fa-star text-yellow-400"></i>
                    </div>
                    <p className="text-gray-700 mb-6">
                      "Working with Vysible transformed our online presence.
                      Their attention to both design and performance metrics
                      delivered real business results."
                    </p>
                    <div className="flex items-center">
                      <img
                        src="https://readdy.ai/api/search-image?query=Professional headshot of a female business executive with neutral background, modern corporate portrait, high quality professional photo&width=60&height=60&seq=11&orientation=squarish"
                        alt="Client"
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-bold">Jennifer Chen</h4>
                        <p className="text-gray-600 text-sm">
                          Marketing VP, GrowthTech
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                    <div className="flex mb-6">
                      <i className="fa-solid fa-star text-yellow-400"></i>
                      <i className="fa-solid fa-star text-yellow-400"></i>
                      <i className="fa-solid fa-star text-yellow-400"></i>
                      <i className="fa-solid fa-star text-yellow-400"></i>
                      <i className="fa-solid fa-star text-yellow-400"></i>
                    </div>
                    <p className="text-gray-700 mb-6">
                      "The mobile optimization Vysible implemented increased our
                      conversion rates by 95% on smartphones. Absolutely worth
                      the investment."
                    </p>
                    <div className="flex items-center">
                      <img
                        src="https://readdy.ai/api/search-image?query=Professional headshot of a business executive with neutral background, modern corporate portrait, high quality professional photo&width=60&height=60&seq=12&orientation=squarish"
                        alt="Client"
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-bold">David Wilson</h4>
                        <p className="text-gray-600 text-sm">
                          Founder, MobileFirst
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            {/* Client Portfolio Section */}
            <div id="portfolio" className="mt-20">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Our Client Portfolio
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-48 overflow-hidden">
                    <img
                      src="https://public.readdy.ai/ai/img_res/a6630393daf01d121bbfdd79a96a7b3d.jpg"
                      alt="TechSolutions Landing Page"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <i className="fa-solid fa-microchip text-white"></i>
                      </div>
                      <h4 className="font-bold text-lg">TechSolutions Inc.</h4>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Product launch landing page that increased conversion
                      rates by 85% and reduced bounce rate by 40%.
                    </p>
                    <a
                      href="#"
                      className="text-emerald-500 hover:text-emerald-600 font-medium flex items-center transition-colors"
                    >
                      <span>View Live</span>
                      <i className="fa-solid fa-arrow-right ml-2"></i>
                    </a>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-48 overflow-hidden">
                    <img
                      src="https://public.readdy.ai/ai/img_res/33180d377a0342a01a3ae64facff220e.jpg"
                      alt="FashionForward E-commerce"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center mr-3">
                        <i className="fa-solid fa-shirt text-white"></i>
                      </div>
                      <h4 className="font-bold text-lg">FashionForward</h4>
                    </div>
                    <p className="text-gray-600 mb-4">
                      E-commerce optimization that improved mobile sales by 120%
                      and reduced cart abandonment by 35%.
                    </p>
                    <a
                      href="#"
                      className="text-emerald-500 hover:text-emerald-600 font-medium flex items-center transition-colors"
                    >
                      <span>View Live</span>
                      <i className="fa-solid fa-arrow-right ml-2"></i>
                    </a>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-48 overflow-hidden">
                    <img
                      src="https://public.readdy.ai/ai/img_res/1c391741963fe1edbbf3bfe1751c1f11.jpg"
                      alt="FinanceHub Platform"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center mr-3">
                        <i className="fa-solid fa-chart-line text-white"></i>
                      </div>
                      <h4 className="font-bold text-lg">FinanceHub</h4>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Financial services platform with 95% increase in lead
                      quality and 70% improvement in user engagement.
                    </p>
                    <a
                      href="#"
                      className="text-emerald-500 hover:text-emerald-600 font-medium flex items-center transition-colors"
                    >
                      <span>View Live</span>
                      <i className="fa-solid fa-arrow-right ml-2"></i>
                    </a>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-48 overflow-hidden">
                    <img
                      src="https://public.readdy.ai/ai/img_res/624cd7449207e1a61f9e38b667483688.jpg"
                      alt="HealthTrack App"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-3">
                        <i className="fa-solid fa-heart-pulse text-white"></i>
                      </div>
                      <h4 className="font-bold text-lg">HealthTrack</h4>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Health app landing page with 200% increase in app
                      downloads and 65% reduction in acquisition costs.
                    </p>
                    <a
                      href="#"
                      className="text-emerald-500 hover:text-emerald-600 font-medium flex items-center transition-colors"
                    >
                      <span>View Live</span>
                      <i className="fa-solid fa-arrow-right ml-2"></i>
                    </a>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-48 overflow-hidden">
                    <img
                      src="https://public.readdy.ai/ai/img_res/22556b867195881d9063f4e04a64d5d4.jpg"
                      alt="PropertyPro Real Estate"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center mr-3">
                        <i className="fa-solid fa-house text-white"></i>
                      </div>
                      <h4 className="font-bold text-lg">PropertyPro</h4>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Real estate platform with 150% increase in qualified leads
                      and 45% improvement in user session duration.
                    </p>
                    <a
                      href="#"
                      className="text-emerald-500 hover:text-emerald-600 font-medium flex items-center transition-colors"
                    >
                      <span>View Live</span>
                      <i className="fa-solid fa-arrow-right ml-2"></i>
                    </a>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-48 overflow-hidden">
                    <img
                      src="https://public.readdy.ai/ai/img_res/cbb2492ca3502707990dfdab7da3207e.jpg"
                      alt="AnalyticsPro SaaS"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                        <i className="fa-solid fa-database text-white"></i>
                      </div>
                      <h4 className="font-bold text-lg">AnalyticsPro</h4>
                    </div>
                    <p className="text-gray-600 mb-4">
                      SaaS platform with 90% increase in trial signups and 60%
                      improvement in trial-to-paid conversion rate.
                    </p>
                    <a
                      href="#"
                      className="text-emerald-500 hover:text-emerald-600 font-medium flex items-center transition-colors"
                    >
                      <span>View Live</span>
                      <i className="fa-solid fa-arrow-right ml-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Let's discuss how we can help transform your online presence and
                drive real results for your business.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="w-full lg:w-1/2 bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="company" className="block mb-2 font-medium">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                      placeholder="Your company name"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="service" className="block mb-2 font-medium">
                      Service Interested In
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 appearance-none cursor-pointer"
                      >
                        <option value="">Select a service</option>
                        <option value="landing-pages">Landing Pages</option>
                        <option value="performance">
                          Performance Optimization
                        </option>
                        <option value="analytics">Analytics & Insights</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <i className="fa-solid fa-chevron-down text-gray-400"></i>
                      </div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                      placeholder="Tell us about your project"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-emerald-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-emerald-600 transition-colors w-full cursor-pointer !rounded-button whitespace-nowrap shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                  <h3 className="text-2xl font-bold mb-6">Why Choose Us</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <i className="fa-solid fa-chart-line text-emerald-500 text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">
                          Data-Driven Approach
                        </h4>
                        <p className="text-gray-600">
                          We make decisions based on metrics and performance
                          data, not just aesthetics.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <i className="fa-solid fa-gauge-high text-emerald-500 text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">
                          Performance Focused
                        </h4>
                        <p className="text-gray-600">
                          We optimize for speed, conversions, and user
                          experience to drive real business results.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <i className="fa-solid fa-users text-emerald-500 text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">
                          Experienced Team
                        </h4>
                        <p className="text-gray-600">
                          Our experts have helped hundreds of businesses achieve
                          their growth goals.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <i className="fa-solid fa-envelope text-emerald-500 text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Email</h4>
                        <p className="text-gray-600">info@vysible.net</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <i className="fa-solid fa-phone text-emerald-500 text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Phone</h4>
                        <p className="text-gray-600">+233 576 132 060</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <i className="fa-solid fa-location-dot text-emerald-500 text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Location</h4>
                        <p className="text-gray-600">Accra, Ghana</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-6 text-center">
            <div className="flex justify-center items-center mb-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M20 0C8.954 0 0 8.954 0 20C0 31.046 8.954 40 20 40C31.046 40 40 31.046 40 20C40 8.954 31.046 0 20 0ZM30 30H10L20 10L30 30Z"
                  fill="#10b981"
                />
                <path d="M20 15L15 25H25L20 15Z" fill="white" />
              </svg>
              <h2
                className="text-2xl font-bold"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                vysible.
              </h2>
            </div>
            <p className="text-gray-400 mb-4">
              &copy; {new Date().getFullYear()} Vysible. All rights reserved.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <i className="fa-brands fa-twitter text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <i className="fa-brands fa-facebook text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <i className="fa-brands fa-instagram text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <i className="fa-brands fa-linkedin text-xl"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </HelmetProvider>
  );
}

export default App;
