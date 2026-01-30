<template>
  <div class="card-main flex-row-c flex-no-grow br-l-4-r-12 pd-0 w-96">
    <input 
    class="int-700-ios"
    type="text" 
    v-model="inputValue" 
    onfocus="this.setSelectionRange(0, this.value.length)"
    inputmode="numeric"
    @blur="stopSelectText()"
    @keyup.enter.prevent="$emit('enter')"
    @paste.stop
    />
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
export default {
  name: "AppCountInput",
  props: {
    modelValue: {
      type: Number,
      default: null,
    },
    defaultValue: {
      type: Number,
      default: 0,
    },
		minValue: {
      type: Number,
      default: 0,
    },
    maxValue: {
      type: Number,
      default: 9999,
    },
  },
  emits: ["update:modelValue", "enter"],
  data() {
    return {
      inputValue: "",
    };
  },
  watch: {
    inputValue(val) {
      const numeric = val.replace(/\D/g, "");
      let num = parseInt(numeric, 10);
      if (isNaN(num) || numeric === "") {
        num = this.minValue;
      } else if (num > this.maxValue) {
        num = this.maxValue;
      }
      const corrected = num.toString();
      if (this.inputValue !== corrected) {
        this.inputValue = corrected;
      }
      this.$emit("update:modelValue", num);
    },
    modelValue: {
      immediate: true,
      handler(newVal) {
        const value = newVal ?? this.defaultValue ?? this.minValue;
        this.inputValue = value.toString();
      },
    },
  },

  methods: {
		...mapActions(usePagesStore, ["stopSelectText"]),
	},
};
</script>

<style scoped>
input[type="text"] {
  border-radius: 0;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  -khtml-border-radius: 0;
  padding: 16px;
  background: transparent;
  outline: none;
  color: #ffffff;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  height: 47px;
  border-radius: 4px 12px 12px 4px;
  text-decoration-line: underline;
  text-decoration-color: #ffffff;
  appearance: none;
  -webkit-appearance: none;
}
</style>