<template>
  <div ref="imageWrapper" class="images-wrapper">
    <img class="before-image" :src="beforeImage" alt="Before image" />
    <div
      class="compare-overlay !h-full"
      :style="{
        width: `${compareWidth}%`,
        backgroundImage: `url(${afterImage})`,
      }"
    ></div>
    <input
      class="compare__range"
      type="range"
      min="0"
      max="100"
      :step="step"
      :value="compareWidth"
      @input="handleInput"
      tabindex="-1"
    />
    <div class="handle-wrap" :style="{ left: `${compareWidth}%` }">
      <div class="handle">
        <svg
          class="handle__arrow handle__arrow--l"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
        <svg
          class="handle__arrow handle__arrow--r"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>
      <span class="handle-line"></span>
    </div>
    <span
      class="absolute bottom-0 left-[25%] translate-x-[-50%] -translate-y-10 text-[#72b01d] font-bold"
    >
      NDVI image
    </span>
    <span
      class="absolute bottom-0 right-[25%] translate-x-[50%] -translate-y-10 text-[#72b01d] font-bold"
    >
      RGB image
    </span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue?: number;
  beforeImage: string;
  afterImage: string;
  step?: number;
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: 50,
  beforeImage: "",
  afterImage: "",
  step: 0.1,
});

const width = ref<number | null>(null);
const compareWidth = ref(props.modelValue);
const imageWrapper = ref<HTMLElement | null>(null);

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  compareWidth.value = Number(target.value);
};

const resizeHandler = () => {
  if (imageWrapper.value) {
    width.value = imageWrapper.value.getBoundingClientRect().width;
  }
};

onMounted(() => {
  if (imageWrapper.value) {
    width.value = imageWrapper.value.getBoundingClientRect().width;
  }
  window.addEventListener("resize", resizeHandler);
});

onUnmounted(() => {
  window.removeEventListener("resize", resizeHandler);
});
</script>

<style scoped>
.images-wrapper {
  width: 100%;
  position: relative;
}
.compare-overlay {
  position: absolute;
  overflow: hidden;
  height: auto;
  top: 0;
  background-position: top left;
  background-repeat: no-repeat;
  background-size: cover;
}
.before-image,
.after-image {
  width: 100%;
  height: auto;
}
.after-image {
  z-index: 2;
  width: 50%;
  position: relative;
}
.compare__range {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 999;
  right: 0;
  left: 0;
  height: 50px;
  cursor: ew-resize;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
}
.handle__arrow {
  position: absolute;
  width: 20px;
}
.handle__arrow--l {
  left: 0;
}
.handle__arrow--r {
  right: 0;
}
.handle-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  height: 100%;
  transform: translate(-50%, -50%);
  z-index: 5;
}
.handle {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: #72b01d;
  border-radius: 50%;
  width: 30px;
  height: 30px;
}
.handle-line {
  content: "";
  position: absolute;
  top: 0;
  width: 2px;
  height: 100%;
  background: #72b01d;
  z-index: 4;
  pointer-events: none;
  user-select: none;
}
</style>
