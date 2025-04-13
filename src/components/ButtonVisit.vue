<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true,
    default: 'Lihat Website',
  },
  href: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <a
    :href="href"
    target="_blank"
    class="mt-5 inline-block bg-primary-500 text-white px-4 py-2 rounded-lg relative overflow-hidden group"
  >
    <span class="relative z-10 font-medium">{{ text }}</span>
    <span
      class="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
    ></span>
  </a>
</template>