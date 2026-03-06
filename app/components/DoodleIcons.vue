<script setup lang="ts">
interface Props {
  type: 'star' | 'cloud' | 'heart' | 'balloon' | 'rainbow' | 'crayon' | 'abc' | 'rocket' | 'sun' | 'music' | 'book' | 'flower' | 'butterfly' | 'kite'
  size?: string
  color?: string
}
const props = withDefaults(defineProps<Props>(), {
  size: 'w-12 h-12',
  color: 'text-sunshine',
})
</script>

<template>
  <!-- Star -->
  <svg v-if="props.type === 'star'" :class="[props.size, props.color]" viewBox="0 0 64 64" fill="currentColor">
    <path d="M32 4l8 18h20l-16 12 6 20-18-14-18 14 6-20L4 22h20z" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.8" />
  </svg>

  <!-- Cloud -->
  <svg v-else-if="props.type === 'cloud'" :class="[props.size, props.color]" viewBox="0 0 64 40" fill="currentColor" opacity="0.6">
    <path d="M52 28c6 0 10-4 10-9s-5-10-11-10c-1-7-8-13-16-13-9 0-16 7-16 15 0 1 0 2 .2 3C14 14 10 18 10 23c0 6 5 10 11 10h31z" />
  </svg>

  <!-- Heart -->
  <svg v-else-if="props.type === 'heart'" :class="[props.size, props.color]" viewBox="0 0 64 64" fill="currentColor" opacity="0.7">
    <path d="M32 56 C16 42 4 32 4 20 C4 10 12 4 22 4 C27 4 31 7 32 10 C33 7 37 4 42 4 C52 4 60 10 60 20 C60 32 48 42 32 56Z" />
  </svg>

  <!-- Balloon -->
  <svg v-else-if="props.type === 'balloon'" :class="[props.size, props.color]" viewBox="0 0 48 72" fill="currentColor" opacity="0.7">
    <ellipse cx="24" cy="24" rx="18" ry="24" />
    <polygon points="20,46 28,46 24,52" />
    <path d="M24 52 C22 58 26 62 24 68" stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.5" />
  </svg>

  <!-- Rainbow -->
  <svg v-else-if="props.type === 'rainbow'" :class="[props.size, props.color]" viewBox="0 0 80 44" fill="none" stroke-width="4" stroke-linecap="round" opacity="0.5">
    <path d="M8 40 A32 32 0 0 1 72 40" stroke="#E23741" />
    <path d="M14 40 A26 26 0 0 1 66 40" stroke="#F8D34F" />
    <path d="M20 40 A20 20 0 0 1 60 40" stroke="#9AB973" />
    <path d="M26 40 A14 14 0 0 1 54 40" stroke="#89CFF0" />
  </svg>

  <!-- Crayon -->
  <svg v-else-if="props.type === 'crayon'" :class="[props.size, props.color]" viewBox="0 0 20 64" fill="currentColor" opacity="0.6">
    <rect x="2" y="16" width="16" height="40" rx="2" />
    <polygon points="2,16 10,2 18,16" />
    <rect x="2" y="50" width="16" height="6" rx="1" opacity="0.3" />
  </svg>

  <!-- ABC Block -->
  <svg v-else-if="props.type === 'abc'" :class="[props.size, props.color]" viewBox="0 0 48 48" fill="currentColor" opacity="0.6">
    <rect x="2" y="2" width="44" height="44" rx="6" stroke="currentColor" stroke-width="3" fill="none" />
    <text x="24" y="34" text-anchor="middle" font-size="24" font-weight="bold" fill="currentColor" font-family="sans-serif">A</text>
  </svg>

  <!-- Rocket -->
  <svg v-else-if="props.type === 'rocket'" :class="[props.size, props.color]" viewBox="0 0 48 64" fill="currentColor" opacity="0.6">
    <path d="M24 2 C24 2 8 18 8 38 L18 38 L18 52 L24 58 L30 52 L30 38 L40 38 C40 18 24 2 24 2Z" />
    <circle cx="24" cy="28" r="5" fill="white" opacity="0.5" />
  </svg>

  <!-- Sun -->
  <svg v-else-if="props.type === 'sun'" :class="[props.size, props.color]" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" opacity="0.5">
    <circle cx="32" cy="32" r="12" fill="currentColor" opacity="0.3" />
    <line x1="32" y1="4" x2="32" y2="14" /><line x1="32" y1="50" x2="32" y2="60" />
    <line x1="4" y1="32" x2="14" y2="32" /><line x1="50" y1="32" x2="60" y2="32" />
    <line x1="12" y1="12" x2="19" y2="19" /><line x1="45" y1="45" x2="52" y2="52" />
    <line x1="52" y1="12" x2="45" y2="19" /><line x1="19" y1="45" x2="12" y2="52" />
  </svg>

  <!-- Music Note -->
  <svg v-else-if="props.type === 'music'" :class="[props.size, props.color]" viewBox="0 0 40 56" fill="currentColor" opacity="0.5">
    <circle cx="12" cy="46" r="8" /><rect x="18" y="8" width="4" height="40" />
    <path d="M20 8 C20 8 36 4 36 14 L22 18 L22 8Z" />
  </svg>

  <!-- Book -->
  <svg v-else-if="props.type === 'book'" :class="[props.size, props.color]" viewBox="0 0 56 48" fill="currentColor" opacity="0.6">
    <path d="M28 8 C28 8 16 4 4 6 L4 42 C16 40 28 44 28 44 C28 44 40 40 52 42 L52 6 C40 4 28 8 28 8Z" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.3" />
    <line x1="28" y1="8" x2="28" y2="44" stroke="currentColor" stroke-width="2" opacity="0.4" />
  </svg>

  <!-- Flower -->
  <svg v-else-if="props.type === 'flower'" :class="[props.size, props.color]" viewBox="0 0 48 56" fill="currentColor" opacity="0.6">
    <circle cx="24" cy="16" r="8" opacity="0.7" /><circle cx="16" cy="22" r="8" opacity="0.5" />
    <circle cx="32" cy="22" r="8" opacity="0.5" /><circle cx="18" cy="12" r="8" opacity="0.5" />
    <circle cx="30" cy="12" r="8" opacity="0.5" /><circle cx="24" cy="18" r="5" fill="#F8D34F" />
    <rect x="22" y="26" width="4" height="24" rx="2" fill="#9AB973" opacity="0.6" />
  </svg>

  <!-- Butterfly -->
  <svg v-else-if="props.type === 'butterfly'" :class="[props.size, props.color]" viewBox="0 0 56 40" fill="currentColor" opacity="0.5">
    <ellipse cx="16" cy="14" rx="14" ry="12" transform="rotate(-20 16 14)" /><ellipse cx="40" cy="14" rx="14" ry="12" transform="rotate(20 40 14)" />
    <ellipse cx="18" cy="28" rx="10" ry="8" transform="rotate(-10 18 28)" opacity="0.7" />
    <ellipse cx="38" cy="28" rx="10" ry="8" transform="rotate(10 38 28)" opacity="0.7" />
    <rect x="27" y="6" width="2" height="28" rx="1" />
  </svg>

  <!-- Kite -->
  <svg v-else-if="props.type === 'kite'" :class="[props.size, props.color]" viewBox="0 0 40 64" fill="currentColor" opacity="0.6">
    <polygon points="20,2 36,24 20,40 4,24" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.4" />
    <line x1="20" y1="2" x2="20" y2="40" stroke="currentColor" stroke-width="1.5" opacity="0.3" />
    <line x1="4" y1="24" x2="36" y2="24" stroke="currentColor" stroke-width="1.5" opacity="0.3" />
    <path d="M20 40 C18 46 22 50 18 56 C22 54 20 60 20 64" stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.4" />
  </svg>
</template>
