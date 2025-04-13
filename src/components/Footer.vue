<template>
  <footer class="bg-gray-800 text-white py-12 px-6 dark:bg-gray-900 dark:text-gray-200">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row justify-between">
        <div class="mb-8 md:mb-0">
          <div>
            <img src="@/assets/images/kodikami-light.png" alt="Logo" class="h-10 mb-5">
          </div>
          <p class="text-gray-400 max-w-md mb-10">
            We are a team of passionate developers and designers dedicated to creating beautiful and functional web
            applications. Our mission is to help businesses succeed online by providing top-notch development services
            and innovative solutions.
          </p>
          <div>
            <h5 class="text-gray-400">Follow Us</h5>
            <div class="flex space-x-4 mt-2">
              <a href="#" class="text-gray-400 hover:text-[#5EC5E3] transition-colors">
                <iconify-icon icon="mdi:facebook" width="24" height="24"></iconify-icon>
              </a>
              <a href="#" class="text-gray-400 hover:text-[#5EC5E3] transition-colors">
                <iconify-icon icon="mdi:twitter" width="24" height="24"></iconify-icon>
              </a>
              <a href="https://www.instagram.com/kodikami.studio/" target="_blank"
                class="text-gray-400 hover:text-[#5EC5E3] transition-colors">
                <iconify-icon icon="mdi:instagram" width="24" height="24"></iconify-icon>
              </a>
              <a href="#" class="text-gray-400 hover:text-[#5EC5E3] transition-colors">
                <iconify-icon icon="mdi:linkedin" width="24" height="24"></iconify-icon>
              </a>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li>
                <a href="#home" class="text-gray-400 hover:text-[#5EC5E3] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" class="text-gray-400 hover:text-[#5EC5E3] transition-colors">About</a>
              </li>
              <li>
                <a href="#services" class="text-gray-400 hover:text-[#5EC5E3] transition-colors">Services</a>
              </li>
              <li>
                <a href="#portfolio" class="text-gray-400 hover:text-[#5EC5E3] transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#contact" class="text-gray-400 hover:text-[#5EC5E3] transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">Services</h4>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-400 hover:text-[#5EC5E3] transition-colors">Web Development</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-[#5EC5E3] transition-colors">UI/UX Design</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-[#5EC5E3] transition-colors">Digital Marketing</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-[#5EC5E3] transition-colors">SEO</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-[#5EC5E3] transition-colors">App Development</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">Contact</h4>
            <ul class="space-y-2">
              <li class="flex items-center text-gray-400">
                <iconify-icon class="mr-2" icon="mdi:phone" width="20" height="20"></iconify-icon> +62 897-7063-2441
              </li>
              <li class="flex items-center text-gray-400">
                <iconify-icon class="mr-2" icon="mdi:email" width="20" height="20"></iconify-icon>
                kodikami.studio@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 mb-4 md:mb-0">© {{ new Date().getFullYear() }} KodiKami Studio. All rights reserved.</p>
        <div class="flex space-x-6">
          <a href="#" class="text-gray-400 hover:text-[#5EC5E3] transition-colors">Privacy Policy</a>
          <a href="#" class="text-gray-400 hover:text-[#5EC5E3] transition-colors">Terms of Service</a>
          <a href="#" class="text-gray-400 hover:text-[#5EC5E3] transition-colors">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
</template>