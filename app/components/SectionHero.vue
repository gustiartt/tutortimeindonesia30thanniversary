<script setup lang="ts">
const { el, isRevealed } = useScrollReveal()
</script>

<template>
  <section
    ref="el"
    class="relative min-h-screen flex items-center justify-center overflow-hidden"
    style="background: linear-gradient(180deg, #FFF9F0 0%, #FEF6E4 40%, #FFF5EB 100%)"
  >
    <!-- Large decorative blobs — bold, vibrant -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-orange/20 blur-3xl" />
      <div class="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-sunshine/25 blur-2xl" />
      <div class="absolute bottom-1/3 right-0 w-64 h-64 rounded-full bg-sky/15 blur-2xl" />
    </div>

    <!-- LARGE hand-drawn sun — top right, impactful -->
    <svg
      class="absolute top-6 right-8 md:top-10 md:right-16 w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 text-sunshine animate-spin-slow opacity-80"
      viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"
    >
      <circle cx="100" cy="100" r="35" fill="currentColor" opacity="0.35" />
      <circle cx="100" cy="100" r="35" stroke-width="3" />
      <!-- Rays -->
      <line x1="100" y1="15" x2="100" y2="50" /><line x1="100" y1="150" x2="100" y2="185" />
      <line x1="15" y1="100" x2="50" y2="100" /><line x1="150" y1="100" x2="185" y2="100" />
      <line x1="40" y1="40" x2="65" y2="65" /><line x1="135" y1="135" x2="160" y2="160" />
      <line x1="160" y1="40" x2="135" y2="65" /><line x1="65" y1="135" x2="40" y2="160" />
      <!-- Extra playful rays -->
      <line x1="100" y1="5" x2="100" y2="25" stroke-width="3" opacity="0.5" />
      <line x1="55" y1="22" x2="70" y2="45" stroke-width="3" opacity="0.5" />
      <line x1="145" y1="22" x2="130" y2="45" stroke-width="3" opacity="0.5" />
      <!-- Swirl in center -->
      <path d="M95 95 Q100 85 105 95 Q110 105 100 108 Q90 108 92 98" stroke-width="2.5" opacity="0.4" />
    </svg>

    <!-- LARGE cloud — top left -->
    <svg
      class="absolute top-12 left-4 md:top-16 md:left-12 w-36 h-20 md:w-52 md:h-28 text-sky/40"
      viewBox="0 0 200 100" fill="currentColor"
    >
      <path d="M170 85c16 0 28-11 28-25s-14-27-30-27c-3-20-22-33-44-33-24 0-44 18-44 40 0 2 0 5 1 7C68 47 55 58 55 72c0 16 14 28 30 28h85z" />
    </svg>

    <!-- LEFT: Large kid photo in organic blob frame -->
    <div
      class="absolute left-0 bottom-0 w-48 sm:w-56 md:w-72 lg:w-80 xl:w-96 z-10 transition-all duration-1000"
      :class="isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'"
    >
      <div class="relative">
        <!-- Orange blob background -->
        <svg class="absolute -inset-4 w-[110%] h-[110%] text-orange/25" viewBox="0 0 200 220" fill="currentColor">
          <path d="M140 10C170 15 195 45 198 85C201 125 190 155 165 185C140 215 100 225 65 210C30 195 5 165 2 125C-1 85 15 50 45 25C75 0 110 5 140 10Z" />
        </svg>
        <img
          src="/images/gallery/1.png"
          alt="Happy Tutor Time student"
          class="relative w-full h-auto object-cover rounded-[2rem] shadow-2xl"
          style="clip-path: ellipse(85% 90% at 55% 55%)"
        >
        <!-- Floating star badge -->
        <div class="absolute -top-4 -right-2 md:-top-6 md:right-2">
          <svg class="w-16 h-16 md:w-20 md:h-20 text-sunshine drop-shadow-lg animate-float" viewBox="0 0 64 64" fill="currentColor">
            <path d="M32 4l8 18h20l-16 12 6 20-18-14-18 14 6-20L4 22h20z" />
          </svg>
        </div>
      </div>
    </div>

    <!-- RIGHT: Large kid photo in organic blob frame -->
    <div
      class="absolute right-0 bottom-0 w-44 sm:w-52 md:w-64 lg:w-72 xl:w-80 z-10 transition-all duration-1000 delay-200"
      :class="isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'"
    >
      <div class="relative">
        <!-- Sky blob background -->
        <svg class="absolute -inset-4 w-[110%] h-[110%] text-sky/25" viewBox="0 0 200 220" fill="currentColor">
          <path d="M60 10C30 20 5 50 2 90C-1 130 10 160 35 185C60 210 100 220 135 205C170 190 195 160 198 120C201 80 185 45 155 25C125 5 90 0 60 10Z" />
        </svg>
        <img
          src="/images/gallery/42.png"
          alt="Kids playing at Tutor Time"
          class="relative w-full h-auto object-cover rounded-[2rem] shadow-2xl"
          style="clip-path: ellipse(85% 90% at 45% 55%)"
        >
        <!-- Floating heart badge -->
        <div class="absolute -top-2 -left-4 md:-top-4 md:-left-2">
          <svg class="w-12 h-12 md:w-16 md:h-16 text-rose drop-shadow-lg animate-float-delay" viewBox="0 0 64 64" fill="currentColor">
            <path d="M32 56 C16 42 4 32 4 20 C4 10 12 4 22 4 C27 4 31 7 32 10 C33 7 37 4 42 4 C52 4 60 10 60 20 C60 32 48 42 32 56Z" />
          </svg>
        </div>
      </div>
    </div>

    <!-- CENTER: Main content -->
    <div
      class="section-container text-center relative z-20 transition-all duration-1000 px-16 sm:px-20 md:px-8"
      :class="isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
    >
      <!-- Real 30th + Tutor Time Logo -->
      <div class="mb-4 md:mb-6">
        <img
          src="/images/30th-tutortime-logo.png"
          alt="30th Anniversary Tutor Time"
          class="mx-auto w-44 sm:w-56 md:w-72 lg:w-80 h-auto drop-shadow-lg"
        >
      </div>

      <!-- Multi-color BOLD heading — each word a different brand color -->
      <h1 class="font-zabal font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-2">
        <span class="text-orange">30 Years</span>
        <span class="text-gray-700"> of </span>
        <span class="text-sky-dark">Little</span>
        <span class="text-gray-700"> </span>
        <span class="text-rose">Steps</span>
      </h1>

      <!-- Bold vibrant divider -->
      <div class="flex items-center justify-center gap-3 mb-4 md:mb-6">
        <span class="w-10 h-1.5 bg-orange rounded-full" />
        <span class="w-4 h-4 rounded-full bg-sunshine" />
        <span class="w-10 h-1.5 bg-orange rounded-full" />
      </div>

      <p class="font-zabal text-xl sm:text-2xl md:text-3xl text-orange font-bold mb-4 tracking-wide">
        Our Journey. Our Legacy.
      </p>

      <p class="body-text text-base sm:text-lg md:text-xl text-gray-600 max-w-xl mx-auto mb-10 leading-relaxed">
        For three decades, Tutor Time Indonesia has walked alongside families
        during the most important years of a child's life.
      </p>

      <!-- Orange vibrant CTA badge -->
      <div class="inline-block bg-orange text-white font-zabal font-bold text-lg sm:text-xl px-8 py-3 rounded-full shadow-xl animate-bounce-slow mb-8">
        Celebrating Since 1996
      </div>

      <!-- Scroll Indicator -->
      <div class="animate-bounce">
        <div class="w-12 h-12 mx-auto rounded-full border-3 border-orange/50 flex items-center justify-center bg-white/60">
          <svg class="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 14l-7 7m0 0l-7-7" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Bold orange scalloped wave divider at bottom -->
    <div class="absolute bottom-0 left-0 w-full z-30">
      <svg class="w-full h-16 md:h-24" viewBox="0 0 1440 96" fill="none" preserveAspectRatio="none">
        <path
          d="M0 96V60C40 40 80 52 120 60C160 68 200 44 240 40C280 36 320 52 360 56C400 60 440 40 480 36C520 32 560 48 600 52C640 56 680 40 720 36C760 32 800 48 840 52C880 56 920 40 960 36C1000 32 1040 48 1080 52C1120 56 1160 40 1200 36C1240 32 1280 48 1320 52C1360 56 1400 44 1440 40V96H0Z"
          fill="#FF6B35"
        />
      </svg>
    </div>
  </section>
</template>

<style scoped>
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
.animate-spin-slow { animation: spin-slow 30s linear infinite; }
.animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
</style>
