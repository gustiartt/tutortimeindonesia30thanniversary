<script setup lang="ts">
const { el, isRevealed } = useScrollReveal()
</script>

<template>
  <section ref="el" class="relative overflow-hidden">
    <!-- CTA Section — Bold ORANGE like reference -->
    <div class="section-padding bg-orange text-white relative">
      <!-- Decorative shapes on orange bg -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div class="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/5" />
        <div class="absolute top-1/3 right-8 w-24 h-24 rounded-full bg-white/8" />
        <div class="absolute bottom-16 left-1/3 w-20 h-20 rounded-full bg-white/5" />
        <div class="absolute -bottom-10 right-20 w-44 h-44 rounded-full bg-white/3" />

        <!-- Large star -->
        <svg class="absolute top-8 right-12 w-20 h-20 md:w-28 md:h-28 text-white/10" viewBox="0 0 64 64" fill="currentColor">
          <path d="M32 4l8 18h20l-16 12 6 20-18-14-18 14 6-20L4 22h20z" />
        </svg>
        <!-- Large heart -->
        <svg class="absolute bottom-12 left-8 w-16 h-16 md:w-24 md:h-24 text-white/10" viewBox="0 0 64 64" fill="currentColor">
          <path d="M32 56 C16 42 4 32 4 20 C4 10 12 4 22 4 C27 4 31 7 32 10 C33 7 37 4 42 4 C52 4 60 10 60 20 C60 32 48 42 32 56Z" />
        </svg>
      </div>

      <div class="section-container relative z-10 text-center">
        <div
          class="transition-all duration-700"
          :class="isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          <h2 class="font-zabal text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            30 Years Forward
          </h2>
          <div class="flex items-center justify-center gap-3 mb-8">
            <span class="w-10 h-0.5 bg-white/40 rounded-full" />
            <span class="w-4 h-4 rounded-full bg-sunshine" />
            <span class="w-10 h-0.5 bg-white/40 rounded-full" />
          </div>

          <p class="font-dosis text-base sm:text-lg text-white/85 max-w-2xl mx-auto mb-3 leading-relaxed">
            As we celebrate 30 years, we look back with gratitude and forward with purpose.
            The world continues to change. Childhood continues to evolve.
          </p>
          <p class="font-dosis text-base sm:text-lg text-white font-semibold max-w-2xl mx-auto mb-8">
            But what remains constant is our commitment to nurturing each child
            with care, expertise, and intention.
          </p>

          <p class="font-zabal text-2xl sm:text-3xl md:text-4xl font-bold text-sunshine mb-10 drop-shadow-sm">
            Thirty years strong &mdash; and still growing.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/6281234567890?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Tutor%20Time%20Indonesia."
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-dosis font-bold rounded-full px-8 py-4 text-lg transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Contact Us via WhatsApp
            </a>
            <a
              href="https://tutortime.co.id"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-dosis font-bold rounded-full px-8 py-4 text-lg border-2 border-white/30 transition-all duration-300 hover:scale-105"
            >
              Visit tutortime.co.id
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer bar — dark orange -->
    <footer class="bg-orange-dark py-8">
      <div class="section-container">
        <div class="flex flex-col md:flex-row items-center justify-between gap-5">
          <div class="flex items-center gap-4">
            <img src="/images/30th-tutortime-logo.png" alt="Tutor Time" class="h-10 w-auto brightness-0 invert opacity-80">
          </div>

          <div class="flex items-center gap-3">
            <a
              href="https://www.instagram.com/tutortimeid/"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/TutorTimeIndonesia"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://tutortime.co.id"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
              aria-label="Website"
            >
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </a>
          </div>
        </div>

        <div class="border-t border-white/15 mt-6 pt-5 text-center">
          <p class="font-dosis text-sm text-white/50">
            &copy; 2026 Tutor Time Indonesia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </section>
</template>
