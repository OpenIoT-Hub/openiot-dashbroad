<template>
  <div class="device-map-page">
    <div class="row">
      <div class="flex md12 xs12">
        <va-card class="device-map-page__widget" title="Device Maps">
          <DeviceMap style="height: 65vh" />
        </va-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import DeviceMap from './DeviceMap.vue'
</script>

<style scoped lang="scss"></style>
