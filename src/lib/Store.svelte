<script>
  import { onMount } from 'svelte'
  import {COUNT_KEY, STORE_KEY} from '../constants/storage.js'
  import { mainCount, purchase } from './mainCount.js'


  let count = 0

  let cost = 10;

  onMount(() => {
    try {
      const raw = localStorage.getItem(STORE_KEY)
      if (raw !== null) {
        const n = Number(raw)
        if (!Number.isNaN(n)) count = n
      }
    } catch (err) {
      // ignore localStorage errors (e.g. disabled)
    }
  })

  const increment = () => {
    if ($mainCount < cost) return;
    purchase(cost);
    count += 1
    try {
      localStorage.setItem(STORE_KEY, String(count))
    } catch (err) {
      // ignore storage errors
    }
  }
</script>

<button on:click={increment}>
  Auto count is {count}
</button>
