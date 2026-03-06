<script setup lang="ts">
const { el, isRevealed } = useScrollReveal()

const centers = [
  { name: 'Kemang', area: 'South Jakarta', since: '1996', photo: '/images/centers/kemang-2006.png', featured: true },
  { name: 'Pondok Indah', area: 'South Jakarta', photo: '/images/centers/pd-indah-2006.png' },
  { name: 'Pluit', area: 'North Jakarta', photo: '/images/centers/pluit-2006.png' },
  { name: 'Kelapa Gading', area: 'North Jakarta', photo: '/images/centers/kelapa-gading-2006.png' },
  { name: 'Intercon', area: 'West Jakarta', photo: '/images/centers/intercon-2006.png' },
  { name: 'Serpong', area: 'South Tangerang' },
  { name: 'Bandung', area: 'West Java', photo: '/images/centers/bandung-2006.png' },
]
</script>

<template>
  <section ref="el" class="section-padding relative overflow-hidden" style="background: linear-gradient(180deg, #EAF4FC 0%, #E0F0FF 50%, #F0F8FF 100%)">
    <div class="absolute top-0 -right-16 w-56 h-56 rounded-full bg-sky/15 blur-xl" />
    <div class="absolute bottom-10 left-8 w-40 h-40 rounded-full bg-orange/8 blur-xl" />

    <div class="section-container relative z-10">
      <div
        class="text-center mb-12 transition-all duration-700"
        :class="isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <p class="font-zabal text-base text-orange font-bold uppercase tracking-widest mb-3">
          7 Centers Across Indonesia
        </p>
        <h2 class="heading-display text-3xl sm:text-4xl md:text-5xl text-gray-800 mb-3">
          Our
          <span class="text-sky-dark">Locations</span>
        </h2>
      </div>

      <!-- Featured: Kemang (first center) — large hero card -->
      <div
        class="max-w-4xl mx-auto mb-10 transition-all duration-700 delay-200"
        :class="isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <div class="relative rounded-[2rem] overflow-hidden shadow-2xl ring-4 ring-orange/25 group">
          <img
            src="/images/centers/kemang-2006.png"
            alt="Tutor Time Kemang — Where it all began"
            class="w-full h-48 sm:h-56 md:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
          >
          <!-- Gradient overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-orange/90 via-orange/30 to-transparent" />
          <!-- Content overlay -->
          <div class="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
            <div class="flex items-end justify-between">
              <div>
                <span class="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full font-dosis text-sm font-bold mb-2">
                  Est. 1996 — Where It All Began
                </span>
                <h3 class="font-zabal font-bold text-2xl md:text-3xl">Kemang</h3>
                <p class="font-dosis text-white/80 text-sm">South Jakarta</p>
              </div>
              <div class="text-right hidden sm:block">
                <span class="heading-display text-4xl md:text-5xl text-white/90">30</span>
                <p class="font-dosis text-sm text-white/70">years strong</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Other centers — compact horizontal scroll on mobile, grid on desktop -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
        <div
          v-for="(center, i) in centers.slice(1)"
          :key="center.name"
          class="group transition-all duration-500 hover:-translate-y-2"
          :class="isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
          :style="{ transitionDelay: `${i * 80 + 400}ms` }"
        >
          <div class="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white">
            <div v-if="center.photo" class="h-28 overflow-hidden">
              <img
                :src="center.photo"
                :alt="`Tutor Time ${center.name}`"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              >
            </div>
            <div v-else class="h-28 bg-gradient-to-br from-sky/15 to-sky/5 flex items-center justify-center">
              <svg class="w-10 h-10 text-sky/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div class="p-3 text-center">
              <h3 class="font-zabal font-bold text-sm text-gray-800">{{ center.name }}</h3>
              <p class="font-dosis text-xs text-gray-400">{{ center.area }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 w-full">
      <WaveDivider color="#FEF6E4" variant="curve" />
    </div>
  </section>
</template>
