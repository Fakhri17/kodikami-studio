<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>
<template>
  <div class="min-h-screen">
    <!-- Navbar -->
    <Navbar />

    <!-- Sections -->
    <main>
      <section id="home" class="flex items-center px-6 dark:bg-gray-900 py-30 overflow-hidden relative">
        <!-- Blurry circle elements -->
        <div
          class="absolute hidden md:block -right-40 -top-40 w-80 h-80 bg-primary-400 rounded-full opacity-30 dark:opacity-20">
        </div>
        <div
          class="absolute hidden md:block -left-40 -bottom-40 w-80 h-80 bg-primary-400 rounded-full opacity-30 dark:opacity-20">
        </div>

        <div class="container mx-auto flex flex-col md:flex-row items-center relative z-10">
          <div class="md:w-1/2 mb-10 md:mb-0">
            <h1 class="text-5xl md:text-7xl font-extrabold mb-4 text-gray-800 dark:text-white">
              Creative <span class="text-primary">Solutions</span> for Your Business
            </h1>
            <p class="text-lg text-gray-600 mb-16 dark:text-gray-300">
              Kami menyediakan solusi digital yang inovatif untuk membantu bisnis Anda tumbuh dan berkembang di era
              modern. Dengan tim profesional dans teknologi terkini, kami siap mewujudkan visi Anda.
            </p>
            <div class="">
              <h5 class="font-semibold text-xl text-gray-800 dark:text-gray-100">Our Partner</h5>
              <div class="mt-5 bg-gray-800 backdrop-blur-md p-3 rounded-lg w-fit">
                <img src="@/assets/images/pikarlabs.png" alt="Partner 1" class="h-8">
              </div>
            </div>
          </div>
          <div class="md:w-1/2 flex justify-center relative">
            <div
              class="absolute rounded-full top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_48%,rgba(94,197,227,0.1)_49%,rgba(94,197,227,0.1)_51%,transparent_52%)] dark:bg-[linear-gradient(45deg,transparent_48%,rgba(94,197,227,0.05)_49%,rgba(94,197,227,0.05)_51%,transparent_52%)] bg-[length:6rem_6rem]">
            </div>
            <img src="@/assets/images/hero-image.png" alt="Hero Image" class="w-full h-auto rounded-lg relative z-10">
          </div>
        </div>
      </section>


      <section id="about" class="py-40 px-6 bg-primary-50 dark:bg-gray-800">
        <div class="container mx-auto">
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <div class="bg-white p-6 rounded-xl shadow-md">
                <div class="bg-gray-200 w-full h-64 rounded-lg flex items-center justify-center mb-6">
                  <span class="text-gray-400">Team Photo</span>
                </div>
                <h3 class="text-xl font-semibold text-gr mb-2">Our Story</h3>
                <p class="text-gray-600">
                  Founded in 2020, we started as a small team with big dreams. Today, we've grown
                  into a full-service digital agency.
                </p>
              </div>
            </div>
            <div class="md:w-1/2">
              <div class="mb-10">
                <h2
                  class="text-3xl md:text-5xl font-extrabold block mb-3 bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text py-2 w-fit">
                  About Us
                </h2>
                <p class="text-lg text-gray-600 mb-4 dark:text-gray-300">
                  Kami berusaha untuk memberikan solusi digital yang inovatif dan efektif. Kami telah membantu banyak
                  klien mencapai
                  tujuan bisnis mereka.
                </p>
              </div>
              <div class="space-y-8">
                <div class="flex items-start">
                  <div class="bg-[#F0CA0B]/20 p-3 rounded-full mr-4">
                    <div class="bg-[#F0CA0B] w-8 h-8 rounded-full flex items-center justify-center">
                      <iconify-icon class="text-white" icon="iconamoon:lightning-1-light" width="24"
                        height="24"></iconify-icon>
                    </div>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2 dark:text-gray-50">Cepat & Tepat Waktu</h3>
                    <p class="text-gray-600 dark:text-gray-300 font-medium">
                      Mengutamakan kecepatan tanpa mengorbankan kualitas desain dan pengembangan.
                    </p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="bg-[#C00EF4]/20 p-3 rounded-full mr-4">
                    <div class="bg-[#C00EF4] w-8 h-8 rounded-full flex items-center justify-center">
                      <iconify-icon class="text-white" icon="mdi:shield-check" width="24" height="24"></iconify-icon>
                    </div>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2 dark:text-gray-50">Solusi Aman</h3>
                    <p class="text-gray-600 dark:text-gray-300 font-medium">
                      Keamanan adalah prioritas utama kami. Semua solusi kami dibangun dengan standar keamanan terkini.
                    </p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="bg-[#5EC5E3]/20 p-3 rounded-full mr-4">
                    <div class="bg-[#5EC5E3] w-8 h-8 rounded-full flex items-center justify-center">
                      <iconify-icon class="text-white" icon="material-symbols:cloud-outline" width="24"
                        height="24"></iconify-icon>
                    </div>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2 dark:text-gray-50">Digital & Scalable</h3>
                    <p class="text-gray-600 dark:text-gray-300 font-medium">
                      Solusi kami dirancang untuk tumbuh bersama bisnis Anda. Kami menggunakan teknologi terbaru untuk
                      memastikan skalabilitas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" class="py-40 px-6 dark:bg-gray-900">
        <div class="container mx-auto">
          <div class="text-center mb-16">
            <h2
              class="text-3xl md:text-5xl font-extrabold block mb-3 bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text py-2 w-fit mx-auto">
              Our Services
            </h2>
            <p class="text-lg text-gray-600 mb-4 dark:text-gray-300">
              Kami menawarkan berbagai layanan untuk memenuhi kebutuhan digital Anda.
            </p>
          </div>
          <div class="grid md:grid-cols-3 gap-8">
            <!-- Card 1 - Web Development -->
            <div
              class="bg-white p-8 pt-24 rounded-xl shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden dark:bg-gray-800 dark:shadow-primary-600">
              <div
                class="bg-primary/20 p-5 rounded-full w-28 h-28 flex items-center justify-center absolute -top-4 -right-4">
                <iconify-icon class="text-[#5EC5E3]" icon="tabler:code" width="46" height="46"></iconify-icon>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-4 dark:text-white">Web Development</h3>
              <p class="text-gray-600 mb-4 dark:text-gray-300">
                Bangun website profesional, cepat, dan responsif sesuai kebutuhan bisnismu.
              </p>
            </div>

            <!-- Card 2 - UI/UX Design -->
            <div
              class="bg-white p-8 pt-24 rounded-xl shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden dark:bg-gray-800 dark:shadow-secondary-600">
              <div
                class="bg-secondary/20 p-5 rounded-full w-28 h-28 flex items-center justify-center absolute -top-4 -right-4">
                <iconify-icon class="text-secondary" icon="tabler:layout" width="46" height="46"></iconify-icon>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-4 dark:text-white">UI/UX Design</h3>
              <p class="text-gray-600 mb-4 dark:text-gray-300">
                Desain antarmuka yang menarik dan pengalaman pengguna yang intuitif untuk aplikasi bisnismu.
              </p>
            </div>

            <!-- Card 3 - Template Design -->
            <div
              class="bg-white p-8 pt-24 rounded-xl shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden dark:bg-gray-800 dark:shadow-accent-600">
              <div
                class="bg-accent/20 p-5 rounded-full w-28 h-28 flex items-center justify-center absolute -top-4 -right-4">
                <iconify-icon class="text-[#F0CA0B]" icon="tdesign:template" width="46" height="46"></iconify-icon>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-4 dark:text-white">Template Design</h3>
              <p class="text-gray-600 mb-4 dark:text-gray-300">
                Desain template untuk website, aplikasi, dan media sosial yang menarik dan profesional.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" class="py-40 px-6 bg-primary-50 dark:bg-gray-800">
        <div class="container mx-auto">
          <div class="text-center mb-24">
            <h2
              class="text-3xl md:text-5xl font-extrabold block mb-3 bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text py-2 w-fit mx-auto">
              Our Portfolio
            </h2>
            <div class="w-24 h-1.5 rounded-lg bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto"></div>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Project 1 -->
            <div
              class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-900">
              <div
                class="bg-gray-200 h-48 flex items-center justify-center border-b-2 border-gray-300 dark:border-primary-300">
                <img src="@/assets/images/project-1.png" alt="Project 1" class="w-full h-full object-cover">
              </div>
              <div class="p-6 py-12">
                <h3 class="text-xl md:text-2xl font-semibold text-gray-800 mb-2 dark:text-gray-100">
                  Website Animmanga
                </h3>
                <p class="text-gray-600 mb-4 dark:text-gray-300">
                  Website interaktif yang dirancang khusus untuk para pecinta anime dan manga.
                </p>
                <div class="flex flex-wrap gap-2.5">
                  <span
                    class="bg-primary-400/20 text-primary-400 px-3 py-1 rounded-full text-xs font-medium">Website</span>
                  <span class="bg-[#FF0000]/20 text-[#FF0000] px-3 py-1 rounded-full text-xs font-medium dark:">Craft
                    CMS</span>
                  <span
                    class="bg-secondary-400/20 text-secondary-500 px-3 py-1 rounded-full text-xs font-medium">PHP</span>
                </div>
              </div>
            </div>
            <!-- Project 2 -->
            <div
              class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-900">
              <div
                class="bg-gray-200 h-48 flex items-center justify-center border-b-2 border-gray-300 dark:border-primary-300">
                <img src="@/assets/images/project-1.png" alt="Project 1" class="w-full h-full object-cover">
              </div>
              <div class="p-6 py-12">
                <h3 class="text-xl md:text-2xl font-semibold text-gray-800 mb-2 dark:text-gray-100">
                  Blog Mihwan
                </h3>
                <p class="text-gray-600 mb-4 dark:text-gray-300">
                  Website pribadi yang menampilkan profil, karya, dan perjalanan profesional Mihwan.
                </p>
                <div class="flex flex-wrap gap-2.5">
                  <span
                    class="bg-primary-400/20 text-primary-400 px-3 py-1 rounded-full text-xs font-medium">Website</span>
                  <span class="bg-[#FF0000]/20 text-[#FF0000] px-3 py-1 rounded-full text-xs font-medium dark:">Craft
                    CMS</span>
                  <span
                    class="bg-secondary-400/20 text-secondary-500 px-3 py-1 rounded-full text-xs font-medium">PHP</span>
                </div>
              </div>
            </div>
            <!-- Project 3 -->
            <div
              class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-900">
              <div
                class="bg-gray-200 h-48 flex items-center justify-center border-b-2 border-gray-300 dark:border-primary-300">
                <img src="@/assets/images/project-1.png" alt="Project 1" class="w-full h-full object-cover">
              </div>
              <div class="p-6 py-12">
                <h3 class="text-xl md:text-2xl font-semibold text-gray-800 mb-2 dark:text-gray-100">
                  Website SuppaTools
                </h3>
                <p class="text-gray-600 mb-4 dark:text-gray-300">
                  Website pribadi yang menampilkan profil, karya, dan perjalanan profesional Mihwan.
                </p>
                <div class="flex flex-wrap gap-2.5">
                  <span
                    class="bg-primary-400/20 text-primary-400 px-3 py-1 rounded-full text-xs font-medium">Website</span>
                  <span class="bg-[#FF0000]/20 text-[#FF0000] px-3 py-1 rounded-full text-xs font-medium dark:">Craft
                    CMS</span>
                  <span
                    class="bg-secondary-400/20 text-secondary-500 px-3 py-1 rounded-full text-xs font-medium">PHP</span>
                </div>
              </div>
            </div>
            <!-- Project 4 -->
            <div
              class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-900">
              <div
                class="bg-gray-200 h-48 flex items-center justify-center border-b-2 border-gray-300 dark:border-primary-300">
                <img src="@/assets/images/project-1.png" alt="Project 1" class="w-full h-full object-cover">
              </div>
              <div class="p-6 py-12">
                <h3 class="text-xl md:text-2xl font-semibold text-gray-800 mb-2 dark:text-gray-100">
                  Website Baca Al-Qur'an
                </h3>
                <p class="text-gray-600 mb-4 dark:text-gray-300">
                  Website menampilkan kumpulan ayat Al-Qur'an dengan terjemahan, serta jadwal sholat.
                </p>
                <div class="flex flex-wrap gap-2.5">
                  <span
                    class="bg-primary-400/20 text-primary-400 px-3 py-1 rounded-full text-xs font-medium">Website</span>
                  <span
                    class="bg-accent-400/20 text-accent-400 px-3 py-1 rounded-full text-xs font-medium">JavaScript</span>
                  <span
                    class="bg-secondary-400/20 text-secondary-500 px-3 py-1 rounded-full text-xs font-medium">UI/UX</span>
                </div>
              </div>
            </div>
            <!-- Project 5 -->
            <div
              class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-900">
              <div
                class="bg-gray-200 h-48 flex items-center justify-center border-b-2 border-gray-300 dark:border-primary-300">
                <img src="@/assets/images/project-1.png" alt="Project 1" class="w-full h-full object-cover">
              </div>
              <div class="p-6 py-12">
                <h3 class="text-xl md:text-2xl font-semibold text-gray-800 mb-2 dark:text-gray-100">Website Student
                  Service Center (SSC)
                </h3>
                <p class="text-gray-600 mb-4 dark:text-gray-300">
                  Website yang tiketing untuk mahasiswa yang ingin mengajukan layanan atau bantuan dari kampus Telkom
                  University Surabaya.
                </p>
                <div class="flex flex-wrap gap-2.5">
                  <span
                    class="bg-primary-400/20 text-primary-400 px-3 py-1 rounded-full text-xs font-medium">Website</span>
                  <span class="bg-green-400/20 text-green-500 px-3 py-1 rounded-full text-xs font-medium">VueJS</span>
                  <span
                    class="bg-secondary-400/20 text-secondary-500 px-3 py-1 rounded-full text-xs font-medium">UI/UX</span>
                </div>
              </div>
            </div>
            <!-- Project 6 -->
            <div
              class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-900">
              <div
                class="bg-gray-200 h-48 flex items-center justify-center border-b-2 border-gray-300 dark:border-primary-300">
                <img src="@/assets/images/project-1.png" alt="Project 1" class="w-full h-full object-cover">
              </div>
              <div class="p-6 py-12">
                <h3 class="text-xl md:text-2xl font-semibold text-gray-800 mb-2 dark:text-gray-100">Website Prodi Bisnis
                  Digital
                </h3>
                <p class="text-gray-600 mb-4 dark:text-gray-300">
                  Website resmi prodi Bisnis Digital di Telkom University Surabaya. Menampilkan berupa informasi prodi
                  dan berita prodi.
                </p>
                <div class="flex flex-wrap gap-2.5">
                  <span
                    class="bg-primary-400/20 text-primary-500 px-3 py-1 rounded-full text-xs font-medium">Website</span>
                  <span
                    class="bg-primary-400/20 text-primary-500 px-3 py-1 rounded-full text-xs font-medium dark:">Wordpress</span>
                  <span
                    class="bg-secondary-400/20 text-secondary-500 px-3 py-1 rounded-full text-xs font-medium">UI/UX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="pricing" class="py-20 px-6 bg-white">
        <div class="container mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">
              Paket <span class="text-[#C00EF4]">Layanan</span>
            </h2>
            <div class="w-20 h-1 bg-[#F0CA0B] mx-auto"></div>
            <p class="text-gray-600 max-w-2xl mx-auto mt-6">
              Pilih paket yang sesuai dengan kebutuhan Anda. Semua paket termasuk hosting dan
              domain.
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <!-- Paket Starter -->
            <div
              class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              <div class="p-6 text-center">
                <h3 class="text-xl font-bold text-gray-800 mb-2">Paket Starter</h3>
                <div class="text-2xl font-bold text-[#5EC5E3] mb-4">
                  Rp 250rb <span class="text-sm text-gray-500">- 1jt</span>
                </div>
                <p class="text-sm text-gray-600 mb-4 bg-[#5EC5E3]/10 p-3 rounded-lg">
                  Cocok untuk personal brand, portofolio, blog, atau landing page.
                </p>
                <a href="#contact"
                  class="block w-full bg-[#5EC5E3] hover:bg-[#4ab4d2] text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm">
                  Pesan Sekarang
                </a>
              </div>
              <div class="border-t border-gray-200 p-6">
                <h4 class="font-semibold text-gray-700 mb-3 text-center">Termasuk:</h4>
                <ul class="space-y-3 text-sm">
                  <li class="flex items-start">
                    <svg class="w-4 h-4 text-[#5EC5E3] mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="text-gray-600">Landing page / blog dinamis</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-4 h-4 text-[#5EC5E3] mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="text-gray-600">Desain responsif & modern</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-4 h-4 text-[#5EC5E3] mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="text-gray-600">1 tahun hosting + domain (web.id / my.id)</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Paket Growth -->
            <div
              class="relative bg-white border-2 border-[#C00EF4] rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform">
              <div class="absolute top-0 right-0 bg-[#C00EF4] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULER
              </div>
              <div class="p-6 text-center">
                <h3 class="text-xl font-bold text-gray-800 mb-2">Paket Growth</h3>
                <div class="text-2xl font-bold text-[#C00EF4] mb-4">
                  Rp 1.5jt <span class="text-sm text-gray-500">- 4jt</span>
                </div>
                <p class="text-sm text-gray-600 mb-4 bg-[#C00EF4]/10 p-3 rounded-lg">
                  Cocok untuk UMKM, usaha kuliner, jasa lokal, atau profil bisnis.
                </p>
                <a href="#contact"
                  class="block w-full bg-[#C00EF4] hover:bg-[#a90bd3] text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm">
                  Pesan Sekarang
                </a>
              </div>
              <div class="border-t border-gray-200 p-6">
                <h4 class="font-semibold text-gray-700 mb-3 text-center">Termasuk:</h4>
                <ul class="space-y-3 text-sm">
                  <li class="flex items-start">
                    <svg class="w-4 h-4 text-[#C00EF4] mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="text-gray-600">Website dinamis dengan fitur basic CRUD</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-4 h-4 text-[#C00EF4] mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="text-gray-600">Desain responsif & modern</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-4 h-4 text-[#C00EF4] mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="text-gray-600">1 tahun hosting + custom domain (.com / .id / lainnya)</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Paket Pro App -->
            <div
              class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              <div class="p-6 text-center">
                <h3 class="text-xl font-bold text-gray-800 mb-2">Paket Pro App</h3>
                <div class="text-2xl font-bold text-[#F0CA0B] mb-4">
                  Rp 5jt <span class="text-sm text-gray-500">- 10jt</span>
                </div>
                <p class="text-sm text-gray-600 mb-4 bg-[#F0CA0B]/10 p-3 rounded-lg">
                  Cocok untuk kebutuhan bisnis lebih kompleks: dashboard, login, admin panel.
                </p>
                <a href="#contact"
                  class="block w-full bg-[#F0CA0B] hover:bg-[#d8b70a] text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm">
                  Pesan Sekarang
                </a>
              </div>
              <div class="border-t border-gray-200 p-6">
                <h4 class="font-semibold text-gray-700 mb-3 text-center">Termasuk:</h4>
                <ul class="space-y-3 text-sm">
                  <li class="flex items-start">
                    <svg class="w-4 h-4 text-[#F0CA0B] mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="text-gray-600">Web App dengan fitur khusus</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-4 h-4 text-[#F0CA0B] mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="text-gray-600">Contoh: sistem booking, katalog produk</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-4 h-4 text-[#F0CA0B] mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="text-gray-600">Manajemen user</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-4 h-4 text-[#F0CA0B] mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="text-gray-600">Desain responsif & modern</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-4 h-4 text-[#F0CA0B] mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="text-gray-600">1 tahun hosting + custom domain</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Custom Solution -->
            <div class="bg-gradient-to-br from-[#5EC5E3] to-[#C00EF4] rounded-xl shadow-lg overflow-hidden">
              <div class="p-6 text-center text-white">
                <h3 class="text-xl font-bold mb-2">Custom Solution</h3>
                <div class="text-2xl font-bold mb-4">Custom Price</div>
                <p class="text-sm mb-4 bg-white/20 p-3 rounded-lg">
                  Punya ide atau kebutuhan spesifik? Kami bantu realisasikan.
                </p>
                <a href="#contact"
                  class="block w-full bg-white hover:bg-gray-100 text-[#5EC5E3] font-medium py-2 px-4 rounded-lg transition-colors text-sm">
                  Konsultasi Gratis
                </a>
              </div>
              <div class="border-t border-white/20 p-6">
                <h4 class="font-semibold text-white mb-3 text-center">Hubungi Kami:</h4>
                <ul class="space-y-3 text-sm text-white/90">
                  <li class="flex items-center">
                    <svg class="w-4 h-4 text-white mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                      </path>
                    </svg>
                    <span>contact@example.com</span>
                  </li>
                  <li class="flex items-center">
                    <svg class="w-4 h-4 text-white mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                      </path>
                    </svg>
                    <span>+62 8xx xxxx xxxx</span>
                  </li>
                </ul>
                <p class="text-xs text-white/70 mt-4 text-center">
                  Silakan hubungi tim kami untuk konsultasi & penawaran khusus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" class="py-20 px-6">
        <div class="container mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">
              Get In <span class="text-[#5EC5E3]">Touch</span>
            </h2>
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
                    <p class="text-gray-600">
                      123 Business Ave, Suite 456<br />San Francisco, CA 94107
                    </p>
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
                    placeholder="John Doe" />
                </div>
                <div class="mb-6">
                  <label for="email" class="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input type="email" id="email"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5EC5E3] focus:border-transparent"
                    placeholder="john@example.com" />
                </div>
                <div class="mb-6">
                  <label for="subject" class="block text-gray-700 font-medium mb-2">Subject</label>
                  <input type="text" id="subject"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5EC5E3] focus:border-transparent"
                    placeholder="How can we help?" />
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
    <Footer />
  </div>
</template>
