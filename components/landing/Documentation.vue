<template>
  <section id="documentation" class="w-full pb-16 lg:pb-24">
    <BaseSection class="lg:max-w-[1200px]">
      <div class="col-span-12 text-black text-center lg:pt-24 lg:pb-22 pt-20">
        <h1 class="lg:text-5xl text-3xl font-bold mb-8 uppercase">
          Documentation
        </h1>
        <p class="mb-8">
          <span class="text-[#72B01D]"> Free and Easy </span> is not just a
          slogan. <br />
          The resources of some tools are publicly available on
          <a
            href="https://github.com/aradfarahani/Remote-Sensing"
            target="_blank"
            class="text-[#72B01D]"
          >
            Github
          </a>
          and
          <a
            href="https://www.researchgate.net/profile/Mahdi-Farmahini-Farahani"
            target="_blank"
            class="text-[#72B01D]"
          >
            Researchgate
          </a>
          and you can easily
          <br />
          use them.
        </p>
        <a
          href="https://github.com/aradfarahani/Remote-Sensing"
          target="_blank"
        >
          <base-button
            class="px-6 py-3 mr-3 bg-black text-white font-bold inline-flex items-center"
          >
            <GithubIcon class="mr-3 text-xl" />
            Github
          </base-button>
        </a>
        <a
          href="https://www.researchgate.net/profile/Mahdi-Farmahini-Farahani"
          target="_blank"
        >
          <base-button
            class="px-6 py-3 bg-black text-white font-bold inline-flex items-center"
          >
            <ResearchGateIcon class="mr-3 text-xl" />
            Research Gate
          </base-button>
        </a>
      </div>
    </BaseSection>
  </section>
</template>

<script setup lang="ts">
import GithubIcon from "~icons/mdi/github";
import ResearchGateIcon from "~icons/simple-icons/researchgate";
</script>

<style scoped></style>
