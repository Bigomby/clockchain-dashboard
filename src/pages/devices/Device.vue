<template >
  <q-page padding>
    <q-card
      color="secondary"
      text-color="primary"
    >
      <q-card-title>
        <div class="q-display-1">
          {{ device.name }}
        </div>
      </q-card-title>



      <q-card-main>
        <div class="row content-stretch justify-around">

          <div class="col-6">
            <q-tabs align="center">
              <q-tab
                slot="title"
                label="Text"
                name="tab-1"
                default
              />
              <q-tab
                slot="title"
                label="RAW"
                disable
              />
              <q-tab
                slot="title"
                label="Single value"
                disable
              />

              <q-tab-pane name="tab-1">
                <q-field label="Text">
                  <q-input v-model="text" />
                </q-field>
              </q-tab-pane>
            </q-tabs>
          </div>
          <div class="col-auto">
            <matrix :text="text"/>
          </div>
        </div>

      </q-card-main>
    </q-card>
  </q-page >
</template>

<script>
import Matrix from 'components/device/Matrix';

export default {
  components: {
    Matrix,
  },

  data() {
    return {
      text: ' 17:45  eth|eur1412.23',
    };
  },

  computed: {
    deviceId() {
      return this.$route.params.id;
    },
  },

  pouch: {
    device() {
      return {
        database: 'devices',
        selector: { mqttId: this.deviceId },
        first: true,
      };
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~variables';

</style>
