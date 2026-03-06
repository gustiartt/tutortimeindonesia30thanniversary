<script setup lang="ts">
const { el, isRevealed } = useScrollReveal()

const photos = [
  { src: '/images/gallery/1.png', rotate: '-3deg', span: '' },
  { src: '/images/gallery/10.png', rotate: '2deg', span: 'sm:col-span-2' },
  { src: '/images/gallery/50.png', rotate: '-1deg', span: '' },
  { src: '/images/gallery/88.png', rotate: '3deg', span: '' },
  { src: '/images/gallery/42.png', rotate: '-2deg', span: 'sm:col-span-2' },
  { src: '/images/gallery/100.png', rotate: '1deg', span: '' },
  { src: '/images/gallery/14.png', rotate: '-3deg', span: '' },
  { src: '/images/gallery/62.png', rotate: '2deg', span: '' },
  { src: '/images/gallery/105.png', rotate: '-1deg', span: 'sm:col-span-2' },
  { src: '/images/gallery/73.png', rotate: '3deg', span: '' },
  { src: '/images/gallery/35.png', rotate: '-2deg', span: '' },
  { src: '/images/gallery/58.png', rotate: '1deg', span: '' },
]
</script>

<template>
  <section ref="el" class="section-padding relative overflow-hidden" style="background: linear-gradient(180deg, #FFF9F0 0%, #FEF6E4 100%)">
    <!-- Bold large cloud shape -->
    <svg class="absolute top-0 right-0 w-48 h-32 md:w-72 md:h-48 text-sky/15" viewBox="0 0 200 100" fill="currentColor">
      <path d="M170 85c16 0 28-11 28-25s-14-27-30-27c-3-20-22-33-44-33-24 0-44 18-44 40 0 2 0 5 1 7C68 47 55 58 55 72c0 16 14 28 30 28h85z" />
    </svg>

    <div class="section-container relative z-10">
      <div
        class="text-center mb-14 transition-all duration-700"
        :class="isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <p class="font-zabal text-base text-orange font-bold uppercase tracking-widest mb-3">
          30 Years of Memories
        </p>
        <h2 class="heading-display text-3xl sm:text-4xl md:text-5xl text-gray-800 mb-3">
          Little Steps, Big
          <span class="relative inline-block">
            <span class="text-orange">Moments</span>
            <svg class="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
              <path d="M2 8 C50 2, 100 12, 198 4" stroke="#FF6B35" stroke-width="4" stroke-linecap="round" stroke-dasharray="8 6" />
            </svg>
          </span>
        </h2>
      </div>

      <!-- Scrapbook-style photo grid -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5 max-w-6xl mx-auto">
        <div
          v-for="(photo, i) in photos"
          :key="photo.src"
          class="group transition-all duration-500"
          :class="[
            photo.span,
            isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ]"
          :style="{
            transitionDelay: `${i * 60 + 200}ms`,
            transform: isRevealed ? `rotate(${photo.rotate})` : `rotate(${photo.rotate}) translateY(20px)`,
          }"
        >
          <div class="relative bg-white p-2 md:p-3 rounded-lg shadow-md group-hover:shadow-xl group-hover:scale-105 group-hover:rotate-0 transition-all duration-300">
            <img
              :src="photo.src"
              :alt="`Tutor Time memory ${i + 1}`"
              class="w-full h-32 sm:h-40 md:h-48 object-cover rounded"
              loading="lazy"
            >
            <!-- Tape effect — orange tint -->
            <div class="absolute -top-2 left-1/2 -translate-x-1/2 w-14 h-5 bg-orange/40 rounded-sm opacity-70" />
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 w-full">
      <WaveDivider color="#F0FAF0" variant="wave" />
    </div>
  </section>
</template>
