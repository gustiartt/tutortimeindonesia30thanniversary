export function useScrollReveal() {
  const el = ref<HTMLElement | null>(null)
  const isRevealed = ref(false)

  onMounted(() => {
    if (!el.value) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isRevealed.value = true
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el.value)
  })

  return { el, isRevealed }
}
