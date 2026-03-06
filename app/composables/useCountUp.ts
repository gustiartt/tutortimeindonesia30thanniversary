export function useCountUp(target: number, duration = 2000) {
  const count = ref(0)
  const isVisible = ref(false)
  const el = ref<HTMLElement | null>(null)

  function animate() {
    const start = performance.now()
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      count.value = Math.floor(eased * target)
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }

  onMounted(() => {
    if (!el.value) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible.value) {
          isVisible.value = true
          animate()
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el.value)
  })

  return { count, el }
}
