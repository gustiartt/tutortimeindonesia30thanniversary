<script setup lang="ts">
const { el, isRevealed } = useScrollReveal()

const values = [
  { title: 'Thoughtfully Designed Curriculum', description: 'Combining global standards with local understanding since 1996.', color: 'bg-orange', icon: '📖' },
  { title: 'Holistic Development', description: 'Cognitive, social, emotional, and physical growth in every interaction.', color: 'bg-sky', icon: '🌱' },
  { title: 'Experienced Educators', description: 'Teachers who bring passion and deep expertise to every classroom.', color: 'bg-sunshine-dark', icon: '👩‍🏫' },
  { title: 'Safe Environments', description: 'Spaces designed for exploration, where every child feels secure.', color: 'bg-leaf-dark', icon: '🏠' },
  { title: 'Parent Partnerships', description: 'Families and educators united for each child\'s success.', color: 'bg-coral', icon: '🤝' },
]
</script>

<template>
  <section ref="el" class="relative overflow-hidden" style="background: linear-gradient(180deg, #FFF0F3 0%, #FFF5F7 100%)">
    <!-- Top: Text + Large feature photo side by side -->
    <div class="section-padding pb-8 md:pb-12">
      <div class="section-container relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <!-- Left: heading + description -->
          <div
            class="transition-all duration-700"
            :class="isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'"
          >
            <p class="font-zabal text-base text-orange font-bold uppercase tracking-widest mb-3">
              Why Families Choose Us
            </p>
            <h2 class="heading-display text-3xl sm:text-4xl md:text-5xl text-gray-800 mb-4 leading-tight">
              A Legacy of
              <span class="text-orange">Trust</span>
            </h2>
            <p class="body-text text-base sm:text-lg text-gray-600 leading-relaxed">
              For 30 years, families have chosen Tutor Time because we provide
              what matters most for their children's earliest years.
              Our values aren't just words &mdash; they're in every classroom, every lesson, every hug.
            </p>
          </div>

          <!-- Right: Large photo in organic frame -->
          <div
            class="transition-all duration-700 delay-200"
            :class="isRevealed ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-10 rotate-3'"
          >
            <div class="relative">
              <svg class="absolute -inset-6 w-[115%] h-[115%] text-orange/12" viewBox="0 0 200 180" fill="currentColor">
                <path d="M160 15C185 30 200 60 195 95C190 130 170 155 140 170C110 185 75 185 45 170C15 155 0 130 5 95C10 60 30 30 60 15C90 0 135 0 160 15Z" />
              </svg>
              <img
                src="/images/gallery/100.png"
                alt="Kids learning together"
                class="relative w-full h-56 md:h-72 object-cover rounded-[2rem] shadow-2xl ring-4 ring-orange/20"
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom: Bold horizontal value pills — NOT boring card grid -->
    <div class="pb-16 md:pb-24">
      <div class="section-container">
        <div class="flex flex-wrap justify-center gap-3 md:gap-4">
          <div
            v-for="(value, i) in values"
            :key="value.title"
            class="flex items-center gap-3 rounded-full px-5 py-3 md:px-7 md:py-4 text-white shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-default"
            :class="[
              value.color,
              isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
            ]"
            :style="{ transitionDelay: `${i * 80 + 400}ms` }"
          >
            <span class="text-2xl">{{ value.icon }}</span>
            <div>
              <h3 class="font-zabal font-bold text-sm md:text-base leading-tight">{{ value.title }}</h3>
              <p class="font-dosis text-xs md:text-sm text-white/80 hidden sm:block">{{ value.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 w-full">
      <WaveDivider color="#EAF4FC" variant="wave" />
    </div>
  </section>
</template>
