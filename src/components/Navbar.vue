<script setup>
import { ref, onMounted } from 'vue'
import logoLight from '@/assets/images/kodikami-light.png';
import logoDark from '@/assets/images/kodikami.png';

const activeSection = ref('home')
const isMobileMenuOpen = ref(false)
const darkMode = ref(false)

const sections = [
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'services', name: 'Services' },
  { id: 'portfolio', name: 'Portfolio' },
  { id: 'pricing', name: 'Pricing' },
  { id: 'contact', name: 'Contact' },
]

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
  if (darkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  // Save preference to localStorage
  localStorage.setItem('darkMode', darkMode.value)
}

const handleScroll = () => {
  const scrollPosition = window.scrollY + 100

  for (const section of sections) {
    const element = document.getElementById(section.id)
    if (element) {
      const offsetTop = element.offsetTop
      const offsetHeight = element.offsetHeight

      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = section.id
        break
      }
    }
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  // Check for saved preference
  const savedMode = localStorage.getItem('darkMode')
  if (savedMode === 'true') {
    darkMode.value = true
    document.documentElement.classList.add('dark')
  }

  window.addEventListener('scroll', handleScroll)
  handleScroll()
})
</script>

<template>
  <nav class="fixed w-full bg-white dark:bg-gray-800 shadow-md z-10">
    <div class="container mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <div>
          <img :src="darkMode ? logoLight : logoDark" alt="Logo" class="h-10">
        </div>
        <div class="flex items-center space-x-6">
          <div class="hidden lg:flex space-x-8">
            <a v-for="section in sections" :key="section.id" :href="`#${section.id}`"
              class="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300" :class="{
                'text-white bg-[#5EC5E3] dark:bg-[#5EC5E3]': activeSection === section.id,
                'text-gray-700 dark:text-gray-300 hover:text-white hover:bg-[#5EC5E3] dark:hover:bg-[#5EC5E3]':
                  activeSection !== section.id,
              }" @click="closeMobileMenu">
              {{ section.name }}
            </a>
          </div>

          <!-- Dark Mode Toggle -->
          <button @click="toggleDarkMode"
            class="p-2 rounded-full focus:outline-none cursor-pointer transition-colors duration-300 bg-gray-100 dark:bg-gray-700 text-yellow-500 dark:text-purple-400 hover:bg-gray-200 dark:hover:bg-gray-600"
            aria-label="Toggle dark mode" style="
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
              ">
            <transition enter-active-class="transition-all duration-300 ease-out"
              leave-active-class="transition-all duration-200 ease-in" enter-from-class="opacity-0 -rotate-45 scale-75"
              enter-to-class="opacity-100 rotate-0 scale-100" leave-from-class="opacity-100 rotate-0 scale-100"
              leave-to-class="opacity-0 rotate-45 scale-75" mode="out-in">
              <!-- Sun Icon (Light Mode) -->
              <iconify-icon v-if="!darkMode" class="w-5 h-5 transform transition-transform duration-300 hover:rotate-12"
                icon="heroicons-solid:moon" width="20" height="20"></iconify-icon>
              <!-- Moon Icon (Dark Mode) -->
              <iconify-icon v-else key="moon"
                class="w-5 h-5 transform transition-transform duration-300 hover:-rotate-12"
                icon="heroicons-outline:sun" width="20" height="20"></iconify-icon>
            </transition>
          </button>

          <!-- Mobile Menu Button -->
          <button @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="lg:hidden text-gray-700 dark:text-gray-300 focus:outline-none" aria-label="Toggle menu">
            <svg class="w-6 h-6 transition-transform duration-300" :class="{ 'rotate-90': isMobileMenuOpen }"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                :d="isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <transition enter-active-class="transition-all duration-300 ease-out"
        leave-active-class="transition-all duration-200 ease-in" enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-96" leave-from-class="opacity-100 max-h-96"
        leave-to-class="opacity-0 max-h-0">
        <div v-if="isMobileMenuOpen" class="lg:hidden overflow-hidden" @click="closeMobileMenu">
          <div class="pt-2 pb-4 space-y-1">
            <a v-for="section in sections" :key="section.id" :href="`#${section.id}`"
              class="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300" :class="{
                'text-white bg-[#5EC5E3] dark:bg-[#5EC5E3]': activeSection === section.id,
                'text-gray-700 dark:text-gray-300 hover:text-white hover:bg-[#5EC5E3] dark:hover:bg-[#5EC5E3]':
                  activeSection !== section.id,
              }" @click="closeMobileMenu">
              {{ section.name }}
            </a>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>