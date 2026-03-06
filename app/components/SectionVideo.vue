<script setup lang="ts">
const { el, isRevealed } = useScrollReveal()
const videoRef = ref<HTMLVideoElement>()
const isPlaying = ref(false)

function playVideo() {
  isPlaying.value = true
  nextTick(() => {
    videoRef.value?.play()
  })
}
</script>

<template>
  <section ref="el" class="relative overflow-hidden">
    <!-- Orange top portion -->
    <div class="bg-orange pt-8 pb-20 md:pt-12 md:pb-28 relative">
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div class="absolute top-4 left-8 w-24 h-24 rounded-full bg-white/8" />
        <div class="absolute top-10 right-12 w-36 h-36 rounded-full bg-white/6" />
        <div class="absolute bottom-8 left-1/3 w-20 h-20 rounded-full bg-white/8" />
        <!-- Large star -->
        <svg class="absolute top-4 right-8 md:right-24 w-16 h-16 md:w-24 md:h-24 text-white/10" viewBox="0 0 64 64" fill="currentColor">
          <path d="M32 4l8 18h20l-16 12 6 20-18-14-18 14 6-20L4 22h20z" />
        </svg>
      </div>

      <div class="section-container relative z-10">
        <div
          class="text-center mb-8 md:mb-10 transition-all duration-700"
          :class="isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          <p class="font-zabal text-lg sm:text-xl text-white/90 font-bold uppercase tracking-widest mb-2">
            Watch Our Story
          </p>
          <h2 class="font-zabal font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-3">
            Three Decades of Care
          </h2>
          <p class="font-dosis text-base text-white/70 max-w-lg mx-auto">
            A look back at 30 years of nurturing young minds
          </p>
        </div>

        <!-- Video showcase -->
        <div
          class="max-w-4xl mx-auto transition-all duration-700 delay-200"
          :class="isRevealed ? 'opacity-100 scale-100' : 'opacity-0 scale-95'"
        >
          <div class="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/30 bg-gray-900 aspect-video">
            <!-- Video element (hidden until play) -->
            <video
              v-show="isPlaying"
              ref="videoRef"
              controls
              playsinline
              class="w-full h-full object-cover"
            >
              <source src="/videos/bumper-30th.mp4" type="video/mp4">
            </video>

            <!-- Custom poster/play button -->
            <div
              v-show="!isPlaying"
              class="absolute inset-0 cursor-pointer group"
              @click="playVideo"
            >
              <!-- Photo collage background -->
              <div class="absolute inset-0 grid grid-cols-3 gap-0.5 opacity-30">
                <img src="/images/gallery/50.png" class="w-full h-full object-cover" alt="">
                <img src="/images/gallery/1.png" class="w-full h-full object-cover" alt="">
                <img src="/images/gallery/42.png" class="w-full h-full object-cover" alt="">
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-gray-900/70" />

              <!-- Center content -->
              <div class="absolute inset-0 flex flex-col items-center justify-center">
                <img
                  src="/images/30th-logo.png"
                  alt="30th Anniversary"
                  class="w-28 sm:w-36 md:w-44 h-auto mb-5 drop-shadow-2xl"
                >
                <!-- Play button -->
                <div class="w-18 h-18 md:w-22 md:h-22 rounded-full bg-orange flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-orange-dark transition-all duration-300 ring-4 ring-white/20">
                  <svg class="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p class="font-zabal text-white/70 text-xs md:text-sm mt-3 font-bold tracking-wider uppercase">
                  Play 30th Anniversary Bumper
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Photo strip below video — contextual visual storytelling -->
        <div
          class="flex justify-center gap-3 mt-6 transition-all duration-700 delay-400"
          :class="isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
        >
          <div class="bg-white/15 rounded-xl p-1.5 rotate-[-2deg] shadow-lg">
            <img src="/images/gallery/88.png" alt="" class="w-20 sm:w-28 h-14 sm:h-20 object-cover rounded-lg">
          </div>
          <div class="bg-white/15 rounded-xl p-1.5 rotate-[1deg] shadow-lg -mt-1">
            <img src="/images/gallery/73.png" alt="" class="w-20 sm:w-28 h-14 sm:h-20 object-cover rounded-lg">
          </div>
          <div class="bg-white/15 rounded-xl p-1.5 rotate-[-1deg] shadow-lg hidden sm:block">
            <img src="/images/gallery/35.png" alt="" class="w-28 h-20 object-cover rounded-lg">
          </div>
          <div class="bg-white/15 rounded-xl p-1.5 rotate-[2deg] shadow-lg hidden md:block">
            <img src="/images/gallery/58.png" alt="" class="w-28 h-20 object-cover rounded-lg">
          </div>
        </div>
      </div>
    </div>

    <!-- Scalloped transition -->
    <div class="relative -mt-1">
      <svg class="w-full h-12 md:h-20" viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
        <path
          d="M0 0V30C60 55 120 55 180 30C240 5 300 5 360 30C420 55 480 55 540 30C600 5 660 5 720 30C780 55 840 55 900 30C960 5 1020 5 1080 30C1140 55 1200 55 1260 30C1320 5 1380 5 1440 30V0H0Z"
          fill="#FF6B35"
        />
      </svg>
    </div>
  </section>
</template>
