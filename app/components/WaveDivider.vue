<script setup lang="ts">
interface Props {
  color?: string
  flip?: boolean
  variant?: 'wave' | 'scallop' | 'curve'
}
const props = withDefaults(defineProps<Props>(), {
  color: '#FEF6E4',
  flip: false,
  variant: 'wave',
})

const paths: Record<string, string> = {
  wave: 'M0,64 C320,120 640,0 960,64 C1280,128 1440,32 1440,32 L1440,160 L0,160 Z',
  scallop: 'M0,96 C120,40 240,40 360,96 C480,152 600,152 720,96 C840,40 960,40 1080,96 C1200,152 1320,152 1440,96 L1440,160 L0,160 Z',
  curve: 'M0,128 Q360,0 720,80 Q1080,160 1440,64 L1440,160 L0,160 Z',
}
</script>

<template>
  <div
    class="w-full leading-0 overflow-hidden"
    :class="flip ? 'rotate-180' : ''"
  >
    <svg
      class="block w-full h-auto"
      viewBox="0 0 1440 160"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path :d="paths[props.variant]" :fill="props.color" />
    </svg>
  </div>
</template>
