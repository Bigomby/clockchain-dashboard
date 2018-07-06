<template>
  <q-layout view="lHh Lpr lFf">
    <div class="fixed-center background"/>

    <q-layout-header>
      <q-toolbar color="primary" >
        <q-btn
          flat
          dense
          round
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Clockchain Manager
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      content-class="bg-primary"
    >
      <q-list
        no-border
        sparse
      >
        <business-info />

        <q-item to="/dashboard">
          <q-item-side
            color="white"
            icon="dashboard"
          />
          <q-item-main
            class="text-white"
            label="Dashboard"
          />
        </q-item>

        <q-item disabled>
          <q-item-side
            color="white"
            icon="schedule"
          />
          <q-item-main
            class="text-white"
            label="Virtual clockchain"
          />
        </q-item>

        <q-item disabled>
          <q-item-side
            color="white"
            icon="settings"
          />
          <q-item-main
            class="text-white"
            label="Settings"
          />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import BusinessInfo from 'components/sidebar/BusinessInfo';
import { mapState } from 'vuex';

export default {
  name: 'LayoutDefault',

  components: {
    BusinessInfo,
  },

  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
    };
  },

  computed: mapState({
    isConnected: state => state.machines.connected,
  }),
};
</script>

<style media="screen">
.background {
  height: 100%;
  width: 100%;
  background-image: url('https://i.pinimg.com/originals/15/ba/96/15ba96d9f9a141fe48c6bc7c173f56b7.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: invert(1) grayscale(1);
}
</style>
