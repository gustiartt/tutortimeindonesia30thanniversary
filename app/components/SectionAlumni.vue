<script setup lang="ts">
const { el, isRevealed } = useScrollReveal()
const alumniCount = useCountUp(5000, 2500)
</script>

<template>
  <section ref="el" class="section-padding bg-tt-cream relative overflow-hidden">
    <div class="absolute top-0 left-1/4 w-40 h-40 rounded-full bg-orange/10 blur-xl" />
    <div class="absolute bottom-12 right-16 w-56 h-56 rounded-full bg-sunshine/12 blur-xl" />

    <div class="section-container relative z-10">
      <!-- Two-column: counter + photo on left, text + quote on right -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left: Large counter + collage of kid photos -->
        <div
          class="transition-all duration-700"
          :class="isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'"
        >
          <!-- Counter — bold, vibrant -->
          <div
            ref="alumniCount.el"
            class="text-center mb-8"
          >
            <div class="inline-block bg-orange/15 rounded-3xl px-10 py-6 border-3 border-orange/30">
              <span class="heading-display text-6xl sm:text-7xl md:text-8xl text-orange leading-none">
                {{ alumniCount.count.value.toLocaleString() }}+
              </span>
              <p class="heading-sub text-lg text-gray-700 mt-1">Alumni &amp; Counting</p>
            </div>
          </div>

          <!-- Mini collage of 3 photos — stacked polaroid style -->
          <div class="flex justify-center gap-3">
            <div class="bg-white p-1.5 rounded shadow-md rotate-[-4deg] w-28 sm:w-32">
              <img src="/images/gallery/8.png" alt="Tutor Time moment" class="w-full h-20 sm:h-24 object-cover rounded">
            </div>
            <div class="bg-white p-1.5 rounded shadow-md rotate-[2deg] w-28 sm:w-32 -mt-2">
              <img src="/images/gallery/28.png" alt="Tutor Time moment" class="w-full h-20 sm:h-24 object-cover rounded">
            </div>
            <div class="bg-white p-1.5 rounded shadow-md rotate-[-2deg] w-28 sm:w-32">
              <img src="/images/gallery/62.png" alt="Tutor Time moment" class="w-full h-20 sm:h-24 object-cover rounded">
            </div>
          </div>
        </div>

        <!-- Right: Text + Quote -->
        <div
          class="transition-all duration-700 delay-200"
          :class="isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'"
        >
          <p class="font-zabal text-base text-orange font-bold uppercase tracking-widest mb-3">
            Our Proud Alumni
          </p>
          <h2 class="heading-display text-3xl sm:text-4xl md:text-5xl text-gray-800 mb-4 leading-tight">
            A Community Beyond
            <span class="text-orange">Graduation</span>
          </h2>

          <p class="body-text text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
            More than 5,000 alumni have taken their next steps from Tutor Time
            into primary schools across Indonesia and beyond. Confident learners,
            kind friends, and resilient individuals who began their journeys here.
          </p>

          <!-- Quote block — vibrant orange left border -->
          <div class="border-l-4 border-orange pl-6 py-2">
            <svg class="w-8 h-8 text-orange/40 mb-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
            </svg>
            <blockquote class="font-zabal text-lg md:text-xl text-gray-700 italic leading-relaxed">
              For many families, Tutor Time is not just a school &mdash;
              it is the beginning of a lifelong learning story.
            </blockquote>
          </div>
        </div>
      </div>
    </div>

    <!-- Bold orange scalloped transition to footer -->
    <div class="absolute bottom-0 left-0 w-full">
      <svg class="w-full h-12 md:h-20" viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
        <path
          d="M0 80V50C60 25 120 25 180 50C240 75 300 75 360 50C420 25 480 25 540 50C600 75 660 75 720 50C780 25 840 25 900 50C960 75 1020 75 1080 50C1140 25 1200 25 1260 50C1320 75 1380 75 1440 50V80H0Z"
          fill="#FF6B35"
        />
      </svg>
    </div>
  </section>
</template>
