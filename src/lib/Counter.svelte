<script>
  import { mainCount, incrementMainCount } from './mainCount.js'
</script>

<button on:click={incrementMainCount}>
  count is {$mainCount}
</button>
