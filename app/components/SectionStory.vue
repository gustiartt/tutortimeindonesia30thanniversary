<script setup lang="ts">
const { el, isRevealed } = useScrollReveal()
const years = useCountUp(30, 2000)
const centers = useCountUp(7, 1500)
const alumni = useCountUp(5000, 2500)
</script>

<template>
  <section ref="el" class="section-padding bg-tt-warm relative overflow-hidden">
    <div class="absolute -right-24 top-1/4 w-72 h-72 rounded-full bg-orange/10 blur-xl" />
    <div class="absolute -left-16 bottom-16 w-56 h-56 rounded-full bg-sky/12 blur-xl" />

    <!-- Large hand-drawn sun top-right -->
    <svg
      class="absolute -top-8 right-4 md:right-16 w-40 h-40 md:w-56 md:h-56 text-sunshine/60"
      viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"
    >
      <circle cx="100" cy="100" r="30" fill="currentColor" opacity="0.3" />
      <line x1="100" y1="20" x2="100" y2="55" /><line x1="100" y1="145" x2="100" y2="180" />
      <line x1="20" y1="100" x2="55" y2="100" /><line x1="145" y1="100" x2="180" y2="100" />
      <line x1="43" y1="43" x2="68" y2="68" /><line x1="132" y1="132" x2="157" y2="157" />
      <line x1="157" y1="43" x2="132" y2="68" /><line x1="68" y1="132" x2="43" y2="157" />
    </svg>

    <div class="section-container relative z-10">
      <!-- Two-column asymmetric layout -->
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center mb-16">
        <!-- Left: Text content — 3 cols -->
        <div
          class="lg:col-span-3 transition-all duration-700"
          :class="isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'"
        >
          <p class="font-zabal text-base text-orange font-bold uppercase tracking-widest mb-3">
            Since 1996
          </p>
          <h2 class="heading-display text-3xl sm:text-4xl md:text-5xl text-gray-800 mb-2 leading-tight">
            Where It All
            <span class="relative inline-block">
              <span class="text-orange">Began</span>
              <svg class="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 8 C50 2, 100 12, 198 4" stroke="#FF6B35" stroke-width="4" stroke-linecap="round" stroke-dasharray="8 6" />
              </svg>
            </span>
          </h2>

          <p class="body-text text-base sm:text-lg text-gray-600 mt-6 leading-relaxed">
            Our first center opened in <strong class="text-orange-dark">Kemang in 1996</strong>,
            at a time when international-standard early childhood education was still rare in Jakarta.
          </p>
          <p class="body-text text-base sm:text-lg text-gray-600 mt-4 leading-relaxed">
            What started as one school has grown into
            <strong class="text-orange-dark">seven active centers</strong> across Jakarta,
            Tangerang, and Bandung &mdash; each built with the same commitment to
            quality, care, and purposeful learning.
          </p>
        </div>

        <!-- Right: Polaroid-style school facade photo — 2 cols -->
        <div
          class="lg:col-span-2 flex justify-center transition-all duration-700 delay-200"
          :class="isRevealed ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-10 rotate-6'"
        >
          <!-- Stacked polaroid photos — front photo prominent, back one peeking -->
          <div class="relative">
            <!-- Back photo (peeking) -->
            <div class="absolute -top-3 -left-5 bg-white p-3 rounded-lg shadow-md rotate-[-6deg] w-full h-full z-0">
              <img
                src="/images/centers/kemang-2015-66.png"
                alt="Tutor Time Kemang facade"
                class="w-full h-48 md:h-56 object-cover rounded opacity-60"
              >
            </div>

            <!-- Front polaroid photo -->
            <div class="relative bg-white p-3 pb-12 rounded-lg shadow-xl rotate-[2deg] z-10 max-w-xs">
              <img
                src="/images/centers/kemang-2006.png"
                alt="Tutor Time Kemang — Where it all began, 1996"
                class="w-full h-48 md:h-56 object-cover rounded"
              >
              <!-- Polaroid caption -->
              <p class="absolute bottom-3 left-0 right-0 text-center font-zabal text-sm text-gray-500 italic">
                Kemang 1996
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats row -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div
          ref="years.el"
          class="rounded-3xl p-8 text-center bg-orange/15 border-3 border-orange/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
          :class="isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          style="transition-delay: 300ms"
        >
          <span class="heading-display text-5xl md:text-6xl text-orange block">{{ years.count.value }}</span>
          <span class="heading-sub text-lg text-gray-700 block mt-1">Years</span>
          <span class="body-text text-sm text-gray-500">of nurturing young minds</span>
        </div>

        <div
          ref="centers.el"
          class="rounded-3xl p-8 text-center bg-sky/25 border-3 border-sky/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
          :class="isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          style="transition-delay: 450ms"
        >
          <span class="heading-display text-5xl md:text-6xl text-sky-dark block">{{ centers.count.value }}</span>
          <span class="heading-sub text-lg text-gray-700 block mt-1">Centers</span>
          <span class="body-text text-sm text-gray-500">across Indonesia</span>
        </div>

        <div
          ref="alumni.el"
          class="rounded-3xl p-8 text-center bg-sunshine/30 border-3 border-sunshine/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
          :class="isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          style="transition-delay: 600ms"
        >
          <span class="heading-display text-5xl md:text-6xl text-sunshine-dark block">{{ alumni.count.value.toLocaleString() }}+</span>
          <span class="heading-sub text-lg text-gray-700 block mt-1">Alumni</span>
          <span class="body-text text-sm text-gray-500">confident learners</span>
        </div>
      </div>

      <!-- Journey path connector -->
      <div
        class="mt-14 flex items-center justify-center gap-4 transition-all duration-700"
        :class="isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        style="transition-delay: 700ms"
      >
        <div class="bg-orange rounded-full px-6 py-3 text-center shadow-lg">
          <span class="heading-display text-xl md:text-2xl text-white">1996</span>
          <p class="font-dosis text-xs text-orange-light">Kemang</p>
        </div>
        <div class="flex-1 max-w-56 h-1.5 relative">
          <svg class="w-full h-4" viewBox="0 0 200 16" preserveAspectRatio="none">
            <path d="M0 8 Q50 0 100 8 Q150 16 200 8" stroke="#FF6B35" stroke-width="3" stroke-dasharray="8 6" fill="none" stroke-linecap="round" />
          </svg>
        </div>
        <div class="bg-sky rounded-full px-6 py-3 text-center shadow-lg">
          <span class="heading-display text-xl md:text-2xl text-white">2026</span>
          <p class="font-dosis text-xs text-sky-light">7 Centers</p>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 w-full">
      <WaveDivider color="#FFF9F0" variant="curve" />
    </div>
  </section>
</template>
