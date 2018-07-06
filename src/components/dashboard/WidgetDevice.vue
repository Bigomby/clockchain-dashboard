<template>
  <q-card class="widget" >
    <q-card-title>
      <router-link
        :to="`/devices/${device.mqttId}`"
        class="q-headline device-name"
      >
        {{ device.name }}
      </router-link>

    </q-card-title>
    <q-card-main/>
    <q-card-actions align="center"/>
  </q-card>
</template>

<script>
export default {
  props: {
    device: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {};
  },
};
</script>

<style lang="stylus" scoped>
@import '~variables';

.device-name {
  color: $secondary;
  text-decoration: none;
}

.counter {
  text-align: center;
  font-size: 40pt;
}

.widget {
  color: $secondary;
  background: rgba($primary);
}
</style>
