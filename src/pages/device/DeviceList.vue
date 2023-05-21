<template>
  <div>
    <va-list>
      <va-list-label> DeviceList </va-list-label>

      <va-list-item v-for="(device, index) in device" :key="index" class="list__item">
        <va-list-item-section>
          <va-list-item-label>
            {{ device.name }}
          </va-list-item-label>

          <va-list-item-label caption>
            {{ device.desc }}
          </va-list-item-label>
        </va-list-item-section>

        <va-list-item-section icon>
          <div class="device_list_function">
            <va-icon name="remove_red_eye" color="background-tertiary" />
            <a href="/device/detail">
              <va-icon name="keyboard_arrow_right" color="background-tertiary" size="large" />
            </a>
          </div>
        </va-list-item-section>
      </va-list-item>
    </va-list>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'DeviceList',

    data() {
      return {
        device: [
          {
            id: 1,
            name: 'CO2气体检测器',
            desc: 'CO2浓度的检查',
          },
          {
            id: 2,
            name: '温度检测器',
            desc: '626 Carroll Street, Roulette, Ohio, 1477',
          },
          {
            id: 3,
            name: '气压检测器',
            desc: '检查气压',
          },
          {
            id: 4,
            name: 'Herbert Keller',
            desc: '286 NW. Shore St.Longwood, FL 32779',
          },
        ],
      }
    },
  }
</script>

<style lang="scss">
  .list__item + .list__item {
    margin-top: 20px;
  }
  .device_list_function va-icon {
    margin-left: 4px;
    margin-right: 4px;
  }
</style>
