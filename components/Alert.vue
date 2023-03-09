<template>
  <div>
    <div
      id="mo_alert"
      :class="`alert ${data_alert.variant} all_transition_slow position-fixed`"
      :style="`color: ${data_alert.color_text}`"
      v-show="data_alert.open"
    >
      <div class="d-flex justify-content-between align-items-center">
        <div class="pr-4">
          {{ data_alert.message }}
        </div>
        <div>
          <span class="closebtn all_transition" :style="`color: ${data_alert.color_text}`"
            >&times;</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mo_alert",
  computed: {
    data_alert() {
      try {
        let data = JSON.parse(this.$store.getters.getAlert);
        return data;
      } catch (error) {
        return this.$store.getters.getAlert;
      }
    },
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style lang="scss" scoped>
#mo_alert {
  padding: 15px 20px;
  min-width: 320px;
  top: 20px;
  //top: 120px;
  right: 10px;
  opacity: 1;
  // transition: opacity 0.6s;
  z-index: 10000;

  .closebtn {
    opacity: 0.5;
    font-size: 26px;
    line-height: 26px;
    font-weight: bold;
    cursor: pointer;
    float: right;
  }

  .closebtn:hover {
    opacity: 1;
  }
}

#mo_alert.danger {
  background-color: #ff443f;
}
#mo_alert.success {
  background-color: #28a745;
}
#mo_alert.primary {
  background-color: #00152b;
}
#mo_alert.warning {
  background-color: #ffc107;
}
</style>
