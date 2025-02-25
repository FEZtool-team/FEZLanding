<template>
  <section id="remote-sensing" class="w-full lg:pb-24">
    <BaseSection class="lg:max-w-[1200px]">
      <div class="col-span-12 text-black text-center lg:pt-24 lg:pb-22 pt-20">
        <h1 class="lg:text-5xl text-3xl font-bold mb-8 uppercase">
          Remote Sensing
        </h1>
        <div class="lg:grid lg:grid-cols-12 gap-x-16 py-10">
          <div class="lg:col-span-6 max-w-full mb-5 lg:mb-0">
            <ToolsBeforeAfterSlider
              class="rounded-2xl overflow-hidden"
              :model-value="50"
              :step="0.1"
              :before-image="beforeImage"
              :after-image="afterImage"
            />
          </div>
          <div
            class="lg:col-span-6 max-w-full text-left flex flex-col justify-center"
          >
            <p class="text-xl mb-10 max-w-full">
              Remote sensing is the process of detecting and monitoring the
              physical characteristics of an area by measuring its reflected and
              emitted radiation at a distance. Remote sensing is a surveying and
              data collection technique, used to survey and collect data
              regarding an object while GIS is a computer system that consists
              of software used to analyze the collected data and hardware that
              the software would operate in.
            </p>
            <div class="mb-10">
              <ToolsChip class="mr-2 mt-2"> Spectral Indices </ToolsChip>
              <ToolsChip class="mr-2 mt-2"> Vegetation </ToolsChip>
              <ToolsChip class="mr-2 mt-2"> Land Coverage </ToolsChip>
              <ToolsChip class="mr-2 mt-2"> Remote Sensing </ToolsChip>
            </div>
            <div>
              <a href="#request-demo">
                <base-button
                  class="px-8 xl:px-10 py-3 bg-[#72B01D] text-white font-bold"
                >
                  Request demo
                </base-button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </BaseSection>
  </section>
</template>

<script setup lang="ts">
import beforeImage from "~/assets/img/remote-sensing/RGB.jpg";
import afterImage from "~/assets/img/remote-sensing/NDVI.jpg";
</script>

<style scoped></style>
