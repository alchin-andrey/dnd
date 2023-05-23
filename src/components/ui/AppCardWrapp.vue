<template>
  <div
    class="card-main flex-col"
    :class="[
      class_Gap,
      {
        'hov cur-p': !passive && !banned,
        'pos-rel': icon,
        'btm-select': active_card,
        'cur-ban': banned,
				'blur-60': !no_blur,
      },
    ]"
  >
    <slot></slot>
    <AppSvg
      v-if="icon"
      class="svg-18 svg-main-f cur-p icon-pos"
      :name="icon"
      @click="getAction()"
    />
  </div>
</template>

<script>
export default {
  name: "AppCardWrapp",
  props: {
    gap: {
      type: String,
      default: "26",
    },
    icon: {
      type: String,
      default: null,
    },
    passive: {
      type: Boolean,
      default: false,
    },
    active_card: {
      type: Boolean,
      default: false,
    },
    banned: {
      type: Boolean,
      default: false,
    },
		no_blur: {
			type: Boolean,
			default: false,
    },
  },
  computed: {
    class_Gap() {
      return `gap-${this.gap}`;
    },
  },

  methods: {
    getAction() {
      this.$emit("clickIcon");
    },
  },
};
</script>

<style scoped>
.icon-pos {
  position: absolute;
  right: 14px;
  top: 14px;
}
</style>
