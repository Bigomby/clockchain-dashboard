<template >
  <div>
    <q-btn
      round
      color="tertiary"
      class="floating-button"
      icon="add"
      size="lg"
      @click="openModal()"
    />

    <q-modal v-model="isModalOpened">
      <q-card square>
        <q-card-title align="center">
          Add new device
        </q-card-title>

        <q-card-separator />

        <q-card-main>
          <q-field
            :error="$v.name.$error"
            error-label="Invalid device name"
          >
            <q-input
              v-model="name"
              color="secondary"
              type="text"
              float-label="Device name"
              autofocus
              @keyup.enter="create"
            />
          </q-field>

          <br>

          <q-field
            :error="$v.mqttId.$error"
            error-label="Invalid MQTT id"
          >
            <q-input
              v-model="mqttId"
              color="secondary"
              type="text"
              float-label="MQTT ID"
              @keyup.enter="create()"
            />
          </q-field>

          <br>

          <div class="row">
            <q-btn
              color="tertiary"
              class="full-width"
              label="Crear"
              @click="create()"
            />
          </div>

          <br>

          <div
            v-if="error"
            class="row">
            <div class="col">
              <q-alert
                :detail="error"
                type="negative"
              >
                Error creando máquina
              </q-alert>
            </div>
          </div>
        </q-card-main>
      </q-card>
    </q-modal>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      isModalOpened: false,
      name: '',
      mqttId: '',
      error: false,
      opened: false,
    };
  },

  methods: {
    openModal() {
      this.$v.name.$reset();
      this.$v.mqttId.$reset();
      this.isModalOpened = true;
    },

    create() {
      this.$v.$touch();

      if (this.$v.$error) {
        return;
      }

      this.$pouch.post('devices', {
        name: this.name,
        mqttId: this.mqttId,
      });

      this.name = '';
      this.mqttId = '';

      this.isModalOpened = false;
    },
  },

  validations: {
    name: { required },
    mqttId: { required },
  },
};
</script>

<style media="screen">
.floating-button {
  position: fixed;
  right: 2em;
  bottom: 2em;
}
</style>
