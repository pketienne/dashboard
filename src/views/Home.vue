<template>
  <div class="home">
    <Host
      v-for="host in $store.state.hosts"
      :key="host.fqdn"
      :host="host"
    >
    </Host>
  </div>
</template>

<script>
import Host from '@/components/Host.vue'
export default {
  name: 'home',
  components: {
    Host
  }
}
</script>

<style scoped>
.home {
  background: url('../assets/interlaced.png')
}
</style>