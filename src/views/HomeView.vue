<script setup>
import { ref, onMounted } from 'vue';

const activeSection = ref('home');

const sections = [
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'services', name: 'Services' },
  { id: 'portfolio', name: 'Portfolio' },
  { id: 'contact', name: 'Contact' }
];

const handleScroll = () => {
  const scrollPosition = window.scrollY + 100;

  for (const section of sections) {
    const element = document.getElementById(section.id);
    if (element) {
      const offsetTop = element.offsetTop;
      const offsetHeight = element.offsetHeight;

      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = section.id;
        break;
      }
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check
});
</script>

<template>
  <div class="min-h-screen font-sans bg-gray-50">
    <!-- Navbar -->
    <nav class="fixed w-full bg-white shadow-md z-10">
      <div class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <div class="text-2xl font-bold text-[#5EC5E3]">Logo</div>
          <div class="hidden md:flex space-x-8">
            <a v-for="section in sections" :key="section.id" :href="`#${section.id}`"
              class="px-3 py-2 rounded-md text-sm font-medium transition-colors" :class="{
                'text-white bg-[#5EC5E3]': activeSection === section.id,
                'text-gray-700 hover:text-[#5EC5E3]': activeSection !== section.id
              }">
              {{ section.name }}
            </a>
          </div>
          <button class="md:hidden text-gray-700">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Sections -->
    <main>
      <section id="home" class="pt-32 pb-20 px-6">
        <div class="container mx-auto flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-10 md:mb-0">
            <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Creative <span class="text-[#5EC5E3]">Solutions</span> for Your Business
            </h1>
            <p class="text-lg text-gray-600 mb-8">
              We provide innovative digital solutions to help your business grow and succeed in the modern world.
            </p>
            <div class="flex space-x-4">
              <a href="#contact"
                class="bg-[#5EC5E3] hover:bg-[#4ab4d2] text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Get Started
              </a>
              <a href="#services"
                class="border-2 border-[#5EC5E3] text-[#5EC5E3] hover:bg-[#5EC5E3]/10 px-6 py-3 rounded-lg font-medium transition-colors">
                Learn More
              </a>
            </div>
          </div>
          <div class="md:w-1/2 flex justify-center">
            <div class="bg-gradient-to-br from-[#5EC5E3] to-[#C00EF4] p-2 rounded-2xl shadow-xl">
              <div class="bg-white rounded-xl w-full h-80 md:h-96 flex items-center justify-center">
                <span class="text-gray-400">Hero Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" class="py-20 px-6 bg-gray-100">
        <div class="container mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">About <span class="text-[#5EC5E3]">Us</span></h2>
            <div class="w-20 h-1 bg-[#C00EF4] mx-auto"></div>
          </div>
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <div class="bg-white p-6 rounded-xl shadow-md">
                <div class="bg-gray-200 w-full h-64 rounded-lg flex items-center justify-center mb-6">
                  <span class="text-gray-400">Team Photo</span>
                </div>
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Our Story</h3>
                <p class="text-gray-600">
                  Founded in 2020, we started as a small team with big dreams. Today, we've grown into a full-service
                  digital agency.
                </p>
              </div>
            </div>
            <div class="md:w-1/2">
              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="bg-[#F0CA0B]/20 p-3 rounded-full mr-4">
                    <div class="bg-[#F0CA0B] w-8 h-8 rounded-full flex items-center justify-center">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Fast Delivery</h3>
                    <p class="text-gray-600">
                      We pride ourselves on delivering projects on time without compromising quality.
                    </p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="bg-[#C00EF4]/20 p-3 rounded-full mr-4">
                    <div class="bg-[#C00EF4] w-8 h-8 rounded-full flex items-center justify-center">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Secure Solutions</h3>
                    <p class="text-gray-600">
                      Security is our top priority. All our solutions are built with the latest security standards.
                    </p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="bg-[#5EC5E3]/20 p-3 rounded-full mr-4">
                    <div class="bg-[#5EC5E3] w-8 h-8 rounded-full flex items-center justify-center">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Cloud Ready</h3>
                    <p class="text-gray-600">
                      Our solutions are cloud-native and ready to scale with your business needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" class="py-20 px-6">
        <div class="container mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">Our <span class="text-[#C00EF4]">Services</span></h2>
            <div class="w-20 h-1 bg-[#5EC5E3] mx-auto"></div>
          </div>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div class="bg-[#5EC5E3]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-[#5EC5E3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-4">Web Development</h3>
              <p class="text-gray-600 mb-4">
                Custom websites built with modern technologies to ensure performance and scalability.
              </p>
              <a href="#" class="text-[#5EC5E3] font-medium flex items-center">
                Learn more
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                  </path>
                </svg>
              </a>
            </div>
            <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div class="bg-[#C00EF4]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-[#C00EF4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01">
                  </path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-4">UI/UX Design</h3>
              <p class="text-gray-600 mb-4">
                Beautiful and intuitive interfaces designed to enhance user experience and engagement.
              </p>
              <a href="#" class="text-[#C00EF4] font-medium flex items-center">
                Learn more
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                  </path>
                </svg>
              </a>
            </div>
            <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div class="bg-[#F0CA0B]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-[#F0CA0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                  </path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-4">Digital Marketing</h3>
              <p class="text-gray-600 mb-4">
                Comprehensive digital marketing strategies to increase your online presence and conversions.
              </p>
              <a href="#" class="text-[#F0CA0B] font-medium flex items-center">
                Learn more
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                  </path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" class="py-20 px-6 bg-gray-100">
        <div class="container mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">Our <span class="text-[#F0CA0B]">Portfolio</span></h2>
            <div class="w-20 h-1 bg-[#C00EF4] mx-auto"></div>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div class="bg-gray-200 h-48 flex items-center justify-center">
                <span class="text-gray-400">Project 1</span>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">E-commerce Website</h3>
                <p class="text-gray-600 mb-4">A full-featured online store with payment integration.</p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-[#5EC5E3]/10 text-[#5EC5E3] px-3 py-1 rounded-full text-xs font-medium">Web</span>
                  <span class="bg-[#C00EF4]/10 text-[#C00EF4] px-3 py-1 rounded-full text-xs font-medium">UI/UX</span>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div class="bg-gray-200 h-48 flex items-center justify-center">
                <span class="text-gray-400">Project 2</span>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Mobile App</h3>
                <p class="text-gray-600 mb-4">A cross-platform mobile application for health tracking.</p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-[#F0CA0B]/10 text-[#F0CA0B] px-3 py-1 rounded-full text-xs font-medium">Mobile</span>
                  <span class="bg-[#5EC5E3]/10 text-[#5EC5E3] px-3 py-1 rounded-full text-xs font-medium">React
                    Native</span>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div class="bg-gray-200 h-48 flex items-center justify-center">
                <span class="text-gray-400">Project 3</span>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Corporate Website</h3>
                <p class="text-gray-600 mb-4">A modern website for a financial services company.</p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-[#C00EF4]/10 text-[#C00EF4] px-3 py-1 rounded-full text-xs font-medium">Design</span>
                  <span
                    class="bg-[#F0CA0B]/10 text-[#F0CA0B] px-3 py-1 rounded-full text-xs font-medium">Marketing</span>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-12">
            <a href="#"
              class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#5EC5E3] hover:bg-[#4ab4d2] transition-colors">
              View All Projects
              <svg class="ml-3 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section id="contact" class="py-20 px-6">
        <div class="container mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">Get In <span class="text-[#5EC5E3]">Touch</span></h2>
            <div class="w-20 h-1 bg-[#F0CA0B] mx-auto"></div>
          </div>
          <div class="flex flex-col md:flex-row">
            <div class="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h3 class="text-xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="bg-[#5EC5E3]/10 p-3 rounded-full mr-4">
                    <svg class="w-6 h-6 text-[#5EC5E3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                      </path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-medium text-gray-700">Phone</h4>
                    <p class="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="bg-[#C00EF4]/10 p-3 rounded-full mr-4">
                    <svg class="w-6 h-6 text-[#C00EF4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                      </path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-medium text-gray-700">Email</h4>
                    <p class="text-gray-600">info@example.com</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="bg-[#F0CA0B]/10 p-3 rounded-full mr-4">
                    <svg class="w-6 h-6 text-[#F0CA0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-medium text-gray-700">Address</h4>
                    <p class="text-gray-600">123 Business Ave, Suite 456<br>San Francisco, CA 94107</p>
                  </div>
                </div>
              </div>
              <div class="mt-10">
                <h3 class="text-xl font-semibold text-gray-800 mb-6">Follow Us</h3>
                <div class="flex space-x-4">
                  <a href="#"
                    class="bg-[#5EC5E3]/10 p-3 rounded-full text-[#5EC5E3] hover:bg-[#5EC5E3]/20 transition-colors">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z">
                      </path>
                    </svg>
                  </a>
                  <a href="#"
                    class="bg-[#C00EF4]/10 p-3 rounded-full text-[#C00EF4] hover:bg-[#C00EF4]/20 transition-colors">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z">
                      </path>
                    </svg>
                  </a>
                  <a href="#"
                    class="bg-[#5EC5E3]/10 p-3 rounded-full text-[#5EC5E3] hover:bg-[#5EC5E3]/20 transition-colors">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z">
                      </path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="md:w-1/2">
              <form class="bg-white p-8 rounded-xl shadow-md">
                <div class="mb-6">
                  <label for="name" class="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input type="text" id="name"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5EC5E3] focus:border-transparent"
                    placeholder="John Doe">
                </div>
                <div class="mb-6">
                  <label for="email" class="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input type="email" id="email"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5EC5E3] focus:border-transparent"
                    placeholder="john@example.com">
                </div>
                <div class="mb-6">
                  <label for="subject" class="block text-gray-700 font-medium mb-2">Subject</label>
                  <input type="text" id="subject"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5EC5E3] focus:border-transparent"
                    placeholder="How can we help?">
                </div>
                <div class="mb-6">
                  <label for="message" class="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea id="message" rows="5"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5EC5E3] focus:border-transparent"
                    placeholder="Your message here..."></textarea>
                </div>
                <button type="submit"
                  class="w-full bg-[#5EC5E3] hover:bg-[#4ab4d2] text-white font-medium py-3 px-4 rounded-lg transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-12 px-6">
      <div class="container mx-auto">
        <div class="flex flex-col md:flex-row justify-between">
          <div class="mb-8 md:mb-0">
            <h3 class="text-2xl font-bold text-[#5EC5E3] mb-4">Logo</h3>
            <p class="text-gray-400 max-w-md">
              We create digital experiences that help businesses grow and succeed in the modern world.
            </p>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
              <ul class="space-y-2">
                <li><a href="#home" class="text-gray-400 hover:text-[#5EC5E3] transition-colors">Home</a></li>
                <li><a href="#about" class="text-gray-400 hover:text-[#5EC5E3] transition-colors">About</a></li>
                <li><a href="#services" class="text-gray-400 hover:text-[#5EC5E3] transition-colors">Services</a></li>
                <li><a href="#portfolio" class="text-gray-400 hover:text-[#5EC5E3] transition-colors">Portfolio</a></li>
                <li><a href="#contact" class="text-gray-400 hover:text-[#5EC5E3] transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-4">Services</h4>
              <ul class="space-y-2">
                <li><a href="#" class="text-gray-400 hover:text-[#5EC5E3] transition-colors">Web Development</a></li>
                <li><a href="#" class="text-gray-400 hover:text-[#5EC5E3] transition-colors">UI/UX Design</a></li>
                <li><a href="#" class="text-gray-400 hover:text-[#5EC5E3] transition-colors">Digital Marketing</a></li>
                <li><a href="#" class="text-gray-400 hover:text-[#5EC5E3] transition-colors">SEO</a></li>
                <li><a href="#" class="text-gray-400 hover:text-[#5EC5E3] transition-colors">App Development</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-4">Contact</h4>
              <ul class="space-y-2">
                <li class="text-gray-400">123 Business Ave</li>
                <li class="text-gray-400">San Francisco, CA 94107</li>
                <li class="text-gray-400">+1 (555) 123-4567</li>
                <li class="text-gray-400">info@example.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 mb-4 md:mb-0">© 2023 Your Company. All rights reserved.</p>
          <div class="flex space-x-6">
            <a href="#" class="text-gray-400 hover:text-[#5EC5E3] transition-colors">Privacy Policy</a>
            <a href="#" class="text-gray-400 hover:text-[#5EC5E3] transition-colors">Terms of Service</a>
            <a href="#" class="text-gray-400 hover:text-[#5EC5E3] transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>