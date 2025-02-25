<template>
  <section id="collabration" class="w-full lg:pb-24 bg-[#454955]">
    <BaseSection class="lg:max-w-[1400px]">
      <div class="col-span-12 text-white text-center lg:pt-24 lg:pb-22 pt-20">
        <h1 class="lg:text-5xl text-3xl font-bold mb-8 uppercase">
          Collaborations
        </h1>
        <div class="lg:grid lg:grid-cols-6 gap-x-16 py-10">
          <div
            class="lg:col-span-2 text-center mb-5 lg:mb-0 flex flex-col justify-center"
          >
            <img class="max-h-28 mb-4" :src="AzadSVG" alt="Azad Univercity" />
            <div>Azad Univercity</div>
          </div>
          <div
            class="lg:col-span-2 text-center mb-5 lg:mb-0 flex flex-col justify-center"
          >
            <img
              class="max-h-28 mb-4"
              :src="ShamsipourSVG"
              alt="Shamsipour Univercity"
            />
            <div>Shamsipour Univercity</div>
          </div>
          <div
            class="lg:col-span-2 text-center mb-5 lg:mb-0 flex flex-col justify-center"
          >
            <img
              class="max-h-28 mb-4"
              :src="KharazmiSVG"
              alt="Kharazmi Univercity"
            />
            <div>Kharazmi Univercity</div>
          </div>
          <!-- <div
            class="lg:col-span-2 text-center mb-5 lg:mb-0 flex flex-col justify-center"
          >
            <img
              class="max-h-28 mb-4"
              :src="GeologySVG"
              alt="Geological Survey of Iran"
            />
            <div>Geological Survey of Iran</div>
          </div>
          <div
            class="lg:col-span-2 text-center mb-5 lg:mb-0 flex flex-col justify-center"
          >
            <img class="max-h-28 mb-4" :src="SafaSVG" alt="Azad Univercity" />
            <div>Safa Mine I.T. Co.</div>
          </div> -->
        </div>
      </div>
    </BaseSection>
  </section>
</template>

<script setup lang="ts">
import AzadSVG from "~/assets/img/collabs/Azad.svg";
import ShamsipourSVG from "~/assets/img/collabs/Shamsipour.svg";
import KharazmiSVG from "~/assets/img/collabs/Kharazmi.svg";
// import SafaSVG from "~/assets/img/collabs/Safa.svg";
// import GeologySVG from "~/assets/img/collabs/Geology.svg";
</script>

<style scoped></style>
