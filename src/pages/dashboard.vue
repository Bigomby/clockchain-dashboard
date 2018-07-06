<template lang="html">
  <q-page padding>
    <div class="row gutter-sm">
      <div
        v-for="device in devices"
        :key="device._id"
        class="col-sm-6 col-xl-4"
      >
        <widget-device :device="device" />
      </div>
    </div>

    <add-device />
  </q-page >
</template>

<script>
import AddDevice from 'components/dashboard/AddDevice';
import WidgetDevice from 'components/dashboard/WidgetDevice';

export default {
  components: {
    AddDevice,
    WidgetDevice,
  },

  data() {
    return {
      machines: [],
    };
  },

  pouch: {
    devices() {
      return {
        database: 'devices',
        selector: {},
        sort: [{ name: 'asc' }],
      };
    },
  },
};
</script>
