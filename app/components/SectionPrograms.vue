<script setup lang="ts">
const { el, isRevealed } = useScrollReveal()

const programs = [
  { name: 'MiniMe', age: '6-18 mo', description: 'Parental bonding through guided play.', icon: '👶', color: 'bg-orange', ring: 'ring-orange/40' },
  { name: 'Toddlers', age: '1-2 yr', description: 'Nurturing curiosity and milestones.', icon: '🧸', color: 'bg-sky-dark', ring: 'ring-sky/40' },
  { name: 'Twos', age: '2-3 yr', description: 'Friendships through interactive play.', icon: '🎨', color: 'bg-sunshine-dark', ring: 'ring-sunshine/40' },
  { name: 'Preschool', age: '3-4 yr', description: 'LifeSmart curriculum with STEM.', icon: '🔬', color: 'bg-leaf-dark', ring: 'ring-leaf/40' },
  { name: 'Pre-K', age: '4-5 yr', description: 'Literacy and math for school prep.', icon: '📚', color: 'bg-coral', ring: 'ring-coral/40' },
  { name: 'Kindergarten', age: '5-6 yr', description: 'Confidence for school readiness.', icon: '🎓', color: 'bg-rose', ring: 'ring-rose/40' },
]
</script>

<template>
  <section ref="el" class="relative overflow-hidden" style="background: linear-gradient(180deg, #FFF9F0 0%, #FEF6E4 100%)">
    <div class="absolute top-0 right-0 w-72 h-72 rounded-full bg-orange/8 blur-xl" />
    <div class="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-sunshine/12 blur-xl" />

    <!-- Top heading area -->
    <div class="section-padding pb-8 md:pb-12">
      <div class="section-container relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <!-- Left: Text -->
          <div
            class="transition-all duration-700"
            :class="isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'"
          >
            <p class="font-zabal text-base text-orange font-bold uppercase tracking-widest mb-3">
              Ages 6 Months to 6 Years
            </p>
            <h2 class="heading-display text-3xl sm:text-4xl md:text-5xl text-gray-800 mb-4 leading-tight">
              Nurturing Since
              <span class="text-orange">Day One</span>
            </h2>
            <p class="body-text text-base sm:text-lg text-gray-600 leading-relaxed">
              A complete School Readiness Pathway guiding each child through their earliest milestones &mdash; from first steps to school readiness.
            </p>
          </div>

          <!-- Right: Large activity photo in organic frame -->
          <div
            class="transition-all duration-700 delay-200"
            :class="isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'"
          >
            <div class="relative">
              <svg class="absolute -inset-5 w-[112%] h-[112%] text-orange/12" viewBox="0 0 200 160" fill="currentColor">
                <path d="M160 10C185 25 200 55 195 85C190 115 170 135 140 148C110 160 75 158 45 143C15 128 0 105 5 75C10 45 30 22 60 10C90 -2 135 -5 160 10Z" />
              </svg>
              <img
                src="/images/gallery/100.png"
                alt="Kids learning at Tutor Time"
                class="relative w-full h-48 md:h-60 object-cover rounded-[2rem] shadow-xl ring-4 ring-orange/20"
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Program pathway — horizontal visual flow -->
    <div class="pb-16 md:pb-24">
      <div class="section-container">
        <!-- Pathway line (desktop) -->
        <div class="hidden lg:flex items-center justify-center mb-6">
          <div class="flex-1 max-w-4xl h-2 bg-gradient-to-r from-orange via-sunshine via-leaf to-rose rounded-full opacity-30" />
        </div>

        <!-- Program circles — NOT boring cards -->
        <div class="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
          <div
            v-for="(program, i) in programs"
            :key="program.name"
            class="group transition-all duration-500 hover:-translate-y-3"
            :class="isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
            :style="{ transitionDelay: `${i * 80 + 200}ms` }"
          >
            <div class="flex flex-col items-center w-36 sm:w-40 md:w-44">
              <!-- Icon circle — bold colored -->
              <div
                class="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-white shadow-lg ring-4 group-hover:scale-110 transition-transform duration-300 mb-3"
                :class="[program.color, program.ring]"
              >
                <span class="text-3xl md:text-4xl">{{ program.icon }}</span>
              </div>
              <!-- Age pill -->
              <span
                class="text-[10px] font-dosis font-bold px-3 py-1 rounded-full text-white shadow-sm mb-2"
                :class="program.color"
              >
                {{ program.age }}
              </span>
              <h3 class="font-zabal font-bold text-sm md:text-base text-gray-800 text-center">{{ program.name }}</h3>
              <p class="font-dosis text-xs text-gray-500 text-center mt-1 hidden sm:block">{{ program.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 w-full">
      <WaveDivider color="#FFF0F3" variant="scallop" />
    </div>
  </section>
</template>
