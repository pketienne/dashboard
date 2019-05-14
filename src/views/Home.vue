<template>
  <div class="home">
    <b-card-group class="center" deck>
      <Host
        v-for="host in $store.state.hosts"
        :key="host.fqdn"
        :host="host"
      >
      </Host>
    </b-card-group>
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
  background: url('../assets/interlaced.png');
  padding: 30px;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-body {
  padding: 0;
}
</style>