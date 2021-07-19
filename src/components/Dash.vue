<template>
  <div>
    <h1>evictor/telemetry-ui</h1>
    <h2>UI portion of Loop Telemetry Test</h2>

    <div class="body">
      <div v-if="devices == null">Loading devices...</div>
      <div v-else>
        <h3>Device List</h3>
        <ul>
          <li v-for="deviceKey in devices" :key="deviceKey">
            {{deviceKey}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/lib/axios'

export default {
  name: 'Dash',

  data() {
    return {
      devices: null
    }
  },

  async mounted() {
    this.devices = (await axios.get('/devices')).data
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}

.body {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  background: rgba(0, 0, 0, 0.05);
  padding: 15px 25px;
}
</style>
