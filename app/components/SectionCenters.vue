<script setup lang="ts">
const { el, isRevealed } = useScrollReveal()

const centers = [
  { name: 'Kemang', area: 'South Jakarta', since: 1996, badge: 'Pusat Pertama', photo: '/images/centers/kemang-2006.png' },
  { name: 'Pondok Indah', area: 'South Jakarta', since: 1997, badge: 'Premium Location', photo: '/images/centers/pd-indah-2006.png' },
  { name: 'Pluit', area: 'North Jakarta', since: 1998, badge: 'North Hub', photo: '/images/centers/pluit-2006.png' },
  { name: 'Kelapa Gading', area: 'North Jakarta', since: 2000, badge: 'Family Favorite', photo: '/images/centers/kelapa-gading-2006.png' },
  { name: 'Intercon', area: 'West Jakarta', since: 2002, badge: 'West Side', photo: '/images/centers/intercon-2006.png' },
  { name: 'Serpong', area: 'South Tangerang', since: 2008, badge: 'BSD Area' },
  { name: 'Bandung', area: 'West Java', since: 2010, badge: 'City of Flowers', photo: '/images/centers/bandung-2006.png' },
]
</script>

<template>
  <section ref="el" class="section-padding relative overflow-hidden" style="background: linear-gradient(180deg, #EAF4FC 0%, #E0F0FF 50%, #F0F8FF 100%)">
    <div class="absolute top-0 -right-16 w-56 h-56 rounded-full bg-sky/15 blur-xl" />
    <div class="absolute bottom-10 left-8 w-40 h-40 rounded-full bg-orange/8 blur-xl" />

    <div class="section-container relative z-10">
      <!-- Header with animated counter -->
      <div
        class="text-center mb-12 transition-all duration-700"
        :class="isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <p class="font-zabal text-base text-orange font-bold uppercase tracking-widest mb-3">
          7 Centers Across Indonesia
        </p>
        <h2 class="heading-display text-3xl sm:text-4xl md:text-5xl text-gray-800 mb-4">
          Our
          <span class="text-sky-dark">Locations</span>
        </h2>

        <!-- Visual counter highlight -->
        <div class="flex items-center justify-center gap-3 mt-6">
          <div class="flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full shadow-lg ring-1 ring-sky/20">
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-orange to-rose text-white font-zabal font-bold text-lg">7</span>
            <span class="font-dosis font-semibold text-gray-700">Cabang Aktif</span>
          </div>
          <div class="flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full shadow-lg ring-1 ring-sky/20">
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-sky to-sky-dark text-white font-zabal font-bold text-lg">30</span>
            <span class="font-dosis font-semibold text-gray-700">Tahun Pengalaman</span>
          </div>
        </div>
      </div>

      <!-- All 7 centers in prominent grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        <div
          v-for="(center, i) in centers"
          :key="center.name"
          class="group transition-all duration-500 hover:-translate-y-2"
          :class="isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
          :style="{ transitionDelay: `${i * 100}ms` }"
        >
          <div
            class="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white ring-1 ring-gray-100"
            :class="i === 0 ? 'ring-2 ring-orange/30' : ''"
          >
            <!-- Photo -->
            <div class="relative h-40 overflow-hidden">
              <img
                v-if="center.photo"
                :src="center.photo"
                :alt="`Tutor Time ${center.name}`"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              >
              <div v-else class="w-full h-full bg-gradient-to-br from-sky/20 via-sky/10 to-leaf/10 flex items-center justify-center">
                <svg class="w-16 h-16 text-sky/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <!-- Gradient overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              <!-- Badge -->
              <div class="absolute top-3 left-3">
                <span
                  class="inline-block px-3 py-1 rounded-full text-xs font-dosis font-bold backdrop-blur-sm"
                  :class="i === 0 ? 'bg-orange text-white' : 'bg-white/90 text-gray-700'"
                >
                  {{ center.badge }}
                </span>
              </div>

              <!-- Since badge -->
              <div class="absolute top-3 right-3">
                <span class="inline-block px-2.5 py-1 bg-black/30 backdrop-blur-sm rounded-full text-white text-xs font-dosis font-semibold">
                  Since {{ center.since }}
                </span>
              </div>
            </div>

            <!-- Info -->
            <div class="p-4">
              <div class="flex items-center justify-between mb-2">
                <h3 class="font-zabal font-bold text-lg text-gray-800 group-hover:text-sky transition-colors">
                  {{ center.name }}
                </h3>
                <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse" title="Active" />
              </div>
              <p class="font-dosis text-sm text-gray-500 flex items-center gap-1.5">
                <svg class="w-4 h-4 text-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ center.area }}
              </p>
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
