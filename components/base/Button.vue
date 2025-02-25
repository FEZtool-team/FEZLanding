<template>
  <button
    class="text-sm text-center rounded-full"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts">
export default {
  name: "BaseButton",
  inheritAttrs: false,
};
</script>
