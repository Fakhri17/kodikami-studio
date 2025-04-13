<script setup>
import ButtonVisit from '@/components/ButtonVisit.vue';
import Footer from '@/components/Footer.vue';
// import SimpleFooter from '@/components/SimpleFooter.vue';
import Navbar from '@/components/Navbar.vue';
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
              Kami menyediakan solusi digital yang inovatif untuk membantu bisnis Anda tumbuh dan
              berkembang di era modern. Dengan tim profesional dans teknologi terkini, kami siap
              mewujudkan visi Anda.
            </p>
            <div class="">
              <h5 class="font-semibold text-xl text-gray-800 dark:text-gray-100">Our Partner</h5>
              <div class="mt-5 bg-gray-800 backdrop-blur-md p-3 rounded-lg w-fit">
                <img src="@/assets/images/pikarlabs.png" alt="Partner 1" class="h-8" />
              </div>
            </div>
          </div>
          <div class="md:w-1/2 flex justify-center relative">
            <div
              class="absolute rounded-full top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_48%,rgba(94,197,227,0.1)_49%,rgba(94,197,227,0.1)_51%,transparent_52%)] dark:bg-[linear-gradient(45deg,transparent_48%,rgba(94,197,227,0.05)_49%,rgba(94,197,227,0.05)_51%,transparent_52%)] bg-[length:6rem_6rem]">
            </div>
            <img src="@/assets/images/hero-image.png" alt="Hero Image" class="w-full h-auto rounded-lg relative z-10" />
          </div>
        </div>
      </section>

      <section id="about" class="py-40 px-6 bg-primary-50 dark:bg-gray-800">
        <div class="container mx-auto">
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 mb-10 md:mb-0 md:pr-10 relative">
              <div class="bg-gradient-to-r from-primary-400/20 to-secondary-400/20 p-3 rounded-full absolute left-0">
                <div
                  class="bg-gradient-to-r from-primary-400 to-secondary-400 w-8 h-8 rounded-full flex items-center justify-center">
                  <iconify-icon class="text-white" icon="ri:team-fill" width="24" height="24"></iconify-icon>
                </div>
              </div>
              <div class="bg-white p-6 rounded-xl shadow-lg dark:shadow-primary-600">
                <img src="@/assets/images/about.png" alt="" />
              </div>
            </div>
            <div class="md:w-1/2">
              <div class="mb-10">
                <h2
                  class="text-3xl md:text-5xl font-extrabold block mb-3 bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text py-2 w-fit">
                  About Us
                </h2>
                <p class="text-lg text-gray-600 mb-4 dark:text-gray-300">
                  Kami berusaha untuk memberikan solusi digital yang inovatif dan efektif. Kami
                  telah membantu banyak klien mencapai tujuan bisnis mereka.
                </p>
              </div>
              <div class="space-y-8">
                <div class="flex items-start">
                  <div class="bg-accent/20 p-3 rounded-full mr-4">
                    <div class="bg-accent w-8 h-8 rounded-full flex items-center justify-center">
                      <iconify-icon class="text-white" icon="iconamoon:lightning-1-light" width="24"
                        height="24"></iconify-icon>
                    </div>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2 dark:text-gray-50">
                      Cepat & Tepat Waktu
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300 font-medium">
                      Mengutamakan kecepatan tanpa mengorbankan kualitas desain dan pengembangan.
                    </p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="bg-secondary/20 p-3 rounded-full mr-4">
                    <div class="bg-secondary w-8 h-8 rounded-full flex items-center justify-center">
                      <iconify-icon class="text-white" icon="mdi:shield-check" width="24" height="24"></iconify-icon>
                    </div>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2 dark:text-gray-50">
                      Solusi Aman
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300 font-medium">
                      Keamanan adalah prioritas utama kami. Semua solusi kami dibangun dengan
                      standar keamanan terkini.
                    </p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="bg-primary/20 p-3 rounded-full mr-4">
                    <div class="bg-primary w-8 h-8 rounded-full flex items-center justify-center">
                      <iconify-icon class="text-white" icon="material-symbols:cloud-outline" width="24"
                        height="24"></iconify-icon>
                    </div>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2 dark:text-gray-50">
                      Digital & Scalable
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300 font-medium">
                      Solusi kami dirancang untuk tumbuh bersama bisnis Anda. Kami menggunakan
                      teknologi terbaru untuk memastikan skalabilitas.
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
                <iconify-icon class="text-primary" icon="tabler:code" width="46" height="46"></iconify-icon>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-4 dark:text-white">
                Web Development
              </h3>
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
                Desain antarmuka yang menarik dan pengalaman pengguna yang intuitif untuk aplikasi
                bisnismu.
              </p>
            </div>

            <!-- Card 3 - Template Design -->
            <div
              class="bg-white p-8 pt-24 rounded-xl shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden dark:bg-gray-800 dark:shadow-accent-600">
              <div
                class="bg-accent/20 p-5 rounded-full w-28 h-28 flex items-center justify-center absolute -top-4 -right-4">
                <iconify-icon class="text-accent" icon="tdesign:template" width="46" height="46"></iconify-icon>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-4 dark:text-white">
                Template Design
              </h3>
              <p class="text-gray-600 mb-4 dark:text-gray-300">
                Desain template untuk website, aplikasi, dan media sosial yang menarik dan
                profesional.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" class="py-40 px-6 bg-white relative overflow-hidden dark:bg-gray-800">
        <div class="container mx-auto">
          <div class="text-center mb-16">
            <h2
              class="text-3xl md:text-5xl font-extrabold block mb-3 bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text py-2 w-fit mx-auto">
              Pricing
            </h2>
            <p class="text-lg text-gray-600 mb-4 dark:text-gray-300">
              Kami menawarkan berbagai paket harga yang sesuai dengan kebutuhan Anda.
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <!-- Paket Starter -->
            <div
              class="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow dark:shadow-primary-600">
              <div class="p-6 text-center">
                <h3 class="text-xl font-bold text-gray-800 mb-2">Paket Starter</h3>
                <div class="text-2xl font-bold text-primary mb-4">
                  Rp 250rb <span class="text-sm text-gray-500">- 1jt</span>
                </div>
                <p class="text-sm text-gray-600 mb-4 bg-primary/10 p-3 rounded-lg">
                  Cocok untuk personal brand, portofolio, blog, atau landing page.
                </p>
                <a href="#contact"
                  class="block w-full bg-primary hover:bg-[#4ab4d2] text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm">
                  Pesan Sekarang
                </a>
              </div>
              <div class="border-t border-gray-200 p-6">
                <h4 class="font-semibold text-gray-700 mb-3 text-center">Termasuk:</h4>
                <ul class="space-y-3 text-sm">
                  <li class="flex items-start">
                    <iconify-icon class="text-primary mt-1 mr-2 flex-shrink-0" icon="entypo:check" width="20"
                      height="20"></iconify-icon>
                    <span class="text-gray-600">Landing page / blog dinamis</span>
                  </li>
                  <li class="flex items-start">
                    <iconify-icon class="text-primary mt-1 mr-2 flex-shrink-0" icon="entypo:check" width="20"
                      height="20"></iconify-icon>
                    <span class="text-gray-600">Desain responsif & modern</span>
                  </li>
                  <li class="flex items-start">
                    <iconify-icon class="text-primary mt-1 mr-2 flex-shrink-0" icon="entypo:check" width="20"
                      height="20"></iconify-icon>
                    <span class="text-gray-600">1 tahun hosting + domain (web.id / my.id)</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Paket Growth -->
            <div
              class="relative bg-white border-3 border-secondary rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow dark:shadow-secondary-600">
              <div class="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULER
              </div>
              <div class="p-6 text-center">
                <h3 class="text-xl font-bold text-gray-800 mb-2">Paket Growth</h3>
                <div class="text-2xl font-bold text-secondary mb-4">
                  Rp 1.5jt <span class="text-sm text-gray-500">- 4jt</span>
                </div>
                <p class="text-sm text-gray-600 mb-4 bg-secondary/10 p-3 rounded-lg">
                  Cocok untuk UMKM, usaha kuliner, jasa lokal, atau profil bisnis.
                </p>
                <a href="#contact"
                  class="block w-full bg-secondary hover:bg-[#a90bd3] text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm">
                  Pesan Sekarang
                </a>
              </div>
              <div class="border-t border-gray-200 p-6">
                <h4 class="font-semibold text-gray-700 mb-3 text-center">Termasuk:</h4>
                <ul class="space-y-3 text-sm">
                  <li class="flex items-start">
                    <iconify-icon class="text-secondary mt-1 mr-2 flex-shrink-0" icon="entypo:check" width="20"
                      height="20"></iconify-icon>
                    <span class="text-gray-600">Website dinamis dengan fitur basic CRUD</span>
                  </li>
                  <li class="flex items-start">
                    <iconify-icon class="text-secondary mt-1 mr-2 flex-shrink-0" icon="entypo:check" width="20"
                      height="20"></iconify-icon>
                    <span class="text-gray-600">Desain responsif & modern</span>
                  </li>
                  <li class="flex items-start">
                    <iconify-icon class="text-secondary mt-1 mr-2 flex-shrink-0" icon="entypo:check" width="20"
                      height="20"></iconify-icon>
                    <span class="text-gray-600">1 tahun hosting + custom domain (.com / .id / lainnya)</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Paket Pro App -->
            <div
              class="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow dark:shadow-accent-600">
              <div class="p-6 text-center">
                <h3 class="text-xl font-bold text-gray-800 mb-2">Paket Pro App</h3>
                <div class="text-2xl font-bold text-accent mb-4">
                  Rp 5jt <span class="text-sm text-gray-500">- 10jt</span>
                </div>
                <p class="text-sm text-gray-600 mb-4 bg-accent/10 p-3 rounded-lg">
                  Cocok untuk kebutuhan bisnis lebih kompleks: dashboard, login, admin panel.
                </p>
                <a href="#contact"
                  class="block w-full bg-accent hover:bg-[#d8b70a] text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm">
                  Pesan Sekarang
                </a>
              </div>
              <div class="border-t border-gray-200 p-6">
                <h4 class="font-semibold text-gray-700 mb-3 text-center">Termasuk:</h4>
                <ul class="space-y-3 text-sm">
                  <li class="flex items-start">
                    <iconify-icon class="text-accent mt-1 mr-2 flex-shrink-0" icon="entypo:check" width="20"
                      height="20"></iconify-icon>
                    <span class="text-gray-600">Web App dengan fitur khusus</span>
                  </li>
                  <li class="flex items-start">
                    <iconify-icon class="text-accent mt-1 mr-2 flex-shrink-0" icon="entypo:check" width="20"
                      height="20"></iconify-icon>
                    <span class="text-gray-600">Contoh: sistem booking, katalog produk</span>
                  </li>
                  <li class="flex items-start">
                    <iconify-icon class="text-accent mt-1 mr-2 flex-shrink-0" icon="entypo:check" width="20"
                      height="20"></iconify-icon>
                    <span class="text-gray-600">Manajemen user</span>
                  </li>
                  <li class="flex items-start">
                    <iconify-icon class="text-accent mt-1 mr-2 flex-shrink-0" icon="entypo:check" width="20"
                      height="20"></iconify-icon>
                    <span class="text-gray-600">Desain responsif & modern</span>
                  </li>
                  <li class="flex items-start">
                    <iconify-icon class="text-accent mt-1 mr-2 flex-shrink-0" icon="entypo:check" width="20"
                      height="20"></iconify-icon>
                    <span class="text-gray-600">1 tahun hosting + custom domain</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Custom Solution -->
            <div class="bg-gradient-to-br from-primary to-secondary rounded-xl shadow-lg overflow-hidden">
              <div class="p-6 text-center text-white">
                <h3 class="text-xl font-bold mb-2">Custom</h3>
                <div class="text-2xl font-bold mb-4">Custom price</div>
                <p class="text-sm mb-4 bg-white/20 p-3 rounded-lg">
                  Punya ide unik? Kami siap membantu mewujudkannya! Hubungi kami untuk penawaran
                  khusus.
                </p>
              </div>
              <div class="border-t border-white/20 p-6">
                <h4 class="font-semibold text-white mb-3 text-center">Hubungi Kami:</h4>
                <ul class="space-y-3 text-sm text-white/90">
                  <li class="flex items-center">
                    <iconify-icon class="text-white mr-2 flex-shrink-0" icon="ic:baseline-email" width="24"
                      height="24"></iconify-icon>
                    <span>kodikami.studio@gmail.com</span>
                  </li>
                </ul>
                <p class="text-sm text-white mt-4 text-center">
                  Silakan hubungi tim kami untuk konsultasi & penawaran khusus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" class="relative overflow-hidden py-40 px-6 bg-primary-50 dark:bg-gray-900">
        <div class="absolute rounded-full top-32 left-0 w-1/3 h-1/3 bg-primary-500 blur-xl opacity-10"></div>
        <div class="absolute rounded-full bottom-32 right-0 w-1/3 h-1/3 bg-primary-500 blur-xl opacity-10"></div>
        <div class="container mx-auto relative z-10">
          <div class="text-center mb-24">
            <h2
              class="text-3xl md:text-5xl font-extrabold block mb-3 bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text py-2 w-fit mx-auto">
              Our Portfolio
            </h2>
            <div class="w-24 h-1.5 rounded-lg bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto"></div>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <!-- Project 1 -->
            <div
              class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-900">
              <div
                class="bg-gray-200 h-72 flex items-center justify-center border-b-2 border-gray-300 dark:border-primary-300">
                <img src="@/assets/images/project-1.png" alt="Project 1" class="w-full h-full object-cover" />
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

                <ButtonVisit href="https://animmanga.moe/" />
              </div>
            </div>
            <!-- Project 2 -->
            <div
              class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-900">
              <div
                class="bg-gray-200 h-72 flex items-center justify-center border-b-2 border-gray-300 dark:border-primary-300">
                <img src="@/assets/images/project-2.png" alt="Project 1" class="w-full h-full object-cover" />
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
                <ButtonVisit href="https://mihwan.id/" />
              </div>
            </div>
            <!-- Project 3 -->
            <div
              class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-900">
              <div
                class="bg-gray-200 h-72 flex items-center justify-center border-b-2 border-gray-300 dark:border-primary-300">
                <img src="@/assets/images/project-3.png" alt="Project 1" class="w-full h-full object-cover" />
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
                <ButtonVisit href="https://suppatools.com/" />
              </div>
            </div>
            <!-- Project 4 -->
            <div
              class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-900">
              <div
                class="bg-gray-200 h-72 flex items-center justify-center border-b-2 border-gray-300 dark:border-primary-300">
                <img src="@/assets/images/project-4.png" alt="Project 1" class="w-full h-full object-cover" />
              </div>
              <div class="p-6 py-12">
                <h3 class="text-xl md:text-2xl font-semibold text-gray-800 mb-2 dark:text-gray-100">
                  Website Baca Al-Qur'an
                </h3>
                <p class="text-gray-600 mb-4 dark:text-gray-300">
                  Website menampilkan kumpulan ayat Al-Qur'an dengan terjemahan, serta jadwal
                  sholat.
                </p>
                <div class="flex flex-wrap gap-2.5">
                  <span
                    class="bg-primary-400/20 text-primary-400 px-3 py-1 rounded-full text-xs font-medium">Website</span>
                  <span
                    class="bg-accent-400/20 text-accent-400 px-3 py-1 rounded-full text-xs font-medium">JavaScript</span>
                  <span
                    class="bg-secondary-400/20 text-secondary-500 px-3 py-1 rounded-full text-xs font-medium">UI/UX</span>
                </div>
                <ButtonVisit href="http://islamic-web-telkomsby.netlify.app/" />
              </div>
            </div>
            <!-- Project 5 -->
            <div
              class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-900">
              <div
                class="bg-gray-200 h-72 flex items-center justify-center border-b-2 border-gray-300 dark:border-primary-300">
                <img src="@/assets/images/project-5.png" alt="Project 1" class="w-full h-full object-cover" />
              </div>
              <div class="p-6 py-12">
                <h3 class="text-xl md:text-2xl font-semibold text-gray-800 mb-2 dark:text-gray-100">
                  Website Student Service Center (SSC)
                </h3>
                <p class="text-gray-600 mb-4 dark:text-gray-300">
                  Website yang tiketing untuk mahasiswa yang ingin mengajukan layanan atau bantuan
                  dari kampus Telkom University Surabaya.
                </p>
                <div class="flex flex-wrap gap-2.5">
                  <span
                    class="bg-primary-400/20 text-primary-400 px-3 py-1 rounded-full text-xs font-medium">Website</span>
                  <span class="bg-green-400/20 text-green-500 px-3 py-1 rounded-full text-xs font-medium">VueJS</span>
                  <span
                    class="bg-secondary-400/20 text-secondary-500 px-3 py-1 rounded-full text-xs font-medium">UI/UX</span>
                </div>
                <ButtonVisit href="https://ssc-sby.id/" />
              </div>
            </div>
            <!-- Project 6 -->
            <div
              class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-900">
              <div
                class="bg-gray-200 h-72 flex items-center justify-center border-b-2 border-gray-300 dark:border-primary-300">
                <img src="@/assets/images/project-6.png" alt="Project 1" class="w-full h-full object-cover" />
              </div>
              <div class="p-6 py-12">
                <h3 class="text-xl md:text-2xl font-semibold text-gray-800 mb-2 dark:text-gray-100">
                  Website Prodi Bisnis Digital
                </h3>
                <p class="text-gray-600 mb-4 dark:text-gray-300">
                  Website resmi prodi Bisnis Digital di Telkom University Surabaya. Menampilkan
                  berupa informasi prodi dan berita prodi.
                </p>
                <div class="flex flex-wrap gap-2.5">
                  <span
                    class="bg-primary-400/20 text-primary-500 px-3 py-1 rounded-full text-xs font-medium">Website</span>
                  <span
                    class="bg-primary-400/20 text-primary-500 px-3 py-1 rounded-full text-xs font-medium dark:">Wordpress</span>
                  <span
                    class="bg-secondary-400/20 text-secondary-500 px-3 py-1 rounded-full text-xs font-medium">UI/UX</span>
                </div>
                <ButtonVisit href="https://bdb-sby.telkomuniversity.ac.id/" />
              </div>
            </div>
          </div>
        </div>
      </section>



      <!--<section id="contact" class="py-40 px-6 relative overflow-hidden bg-primary-50 dark:bg-gray-800">
        <div class="container mx-auto">
          <div class="text-center mb-16">
            <h2
              class="text-3xl md:text-5xl font-extrabold block mb-3 bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text py-2 w-fit mx-auto">
              Contact Us
            </h2>
            <div class="w-24 h-1.5 rounded-lg bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto"></div>
          </div>
          <div class="flex flex-col md:flex-row">
            <div class="w-full mb-10 md:mb-0 md:pr-10">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="flex items-center md:justify-center">
                  <div class="bg-primary/20 p-3 rounded-full mr-4">
                    <div class="bg-primary-400 w-8 h-8 rounded-full flex items-center justify-center">
                      <iconify-icon class="text-white" icon="ic:baseline-phone" width="24" height="24"></iconify-icon>
                    </div>
                  </div>
                  <div>
                    <h4 class="text-lg font-medium text-gray-700 dark:text-gray-100">Phone</h4>
                    <p class="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div class="flex items-center md:justify-center">
                  <div class="bg-secondary/20 p-3 rounded-full mr-4">
                    <div class="bg-secondary-400 w-8 h-8 rounded-full flex items-center justify-center">
                      <iconify-icon class="text-white" icon="ic:baseline-email" width="24" height="24"></iconify-icon>
                    </div>
                  </div>
                  <div>
                    <h4 class="text-lg font-medium text-gray-700 dark:text-gray-100">Email</h4>
                    <p class="text-gray-600 dark:text-gray-400">kodikami.studio@gmail.com</p>
                  </div>
                </div>
                <div class="flex items-center md:justify-center">
                  <div class="bg-accent/20 p-3 rounded-full mr-4">
                    <div class="bg-accent-400 w-8 h-8 rounded-full flex items-center justify-center">
                      <iconify-icon class="text-white" icon="ic:baseline-pin-drop" width="24"
                        height="24"></iconify-icon>
                    </div>
                  </div>
                  <div>
                    <h4 class="text-lg font-medium text-gray-700 dark:text-gray-100">Address</h4>
                    <p class="text-gray-600 dark:text-gray-400">
                      Jl. Telkom University Surabaya, Surabaya, East Java, Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>-->
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>
