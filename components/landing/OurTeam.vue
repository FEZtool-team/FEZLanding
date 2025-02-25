<template>
  <section id="our-team" class="w-full lg:pb-24 pb-16 bg-[#FAFAFA]">
    <BaseSection class="lg:max-w-[1200px]">
      <div class="col-span-12 text-black text-center lg:pt-24 lg:pb-22 pt-20">
        <h1 class="lg:text-5xl text-3xl font-bold mb-8 uppercase">Our Team</h1>
        <div
          class="w-full lg:flex lg:flex-row lg:flex-wrap lg:justify-center py-10"
        >
          <a
            v-for="(member, index) in teamMembers"
            :key="index"
            :href="member.link"
            class="lg:basis1/5 lg:max-w-[20%]"
            :target="member.link.length > 2 ? '_blank' : ''"
          >
            <div class="p-4 pb-0 relative">
              <div :class="[index % 2 == 0 ? 'bg-[#72B01D]' : 'bg-[#EBEBEB]']">
                <img class="w-full" :src="member.imageUrl" :alt="member.name" />
              </div>
              <div
                class="absolute bg-white bottom-2 left-0 right-0 mx-7 rounded text-left px-2 max-h-[48px] hover:max-h-full transition-all duration-300 ease-in-out overflow-hidden"
              >
                <div>
                  {{ member.name }}
                </div>
                <div class="lg:truncate hover:whitespace-normal opacity-50">
                  {{ member.position }}
                </div>
              </div>
            </div>
          </a>
        </div>
        <p class="mb-8">
          After about a year with the cooperation of the FEZ team, the first
          tool is now available. <br />
          <a
            href="https://www.linkedin.com/company/feztool"
            class="text-[#72B01D] border-b border-[#72B01D]"
          >
            Discover more about us
          </a>
        </p>
      </div>
    </BaseSection>
  </section>
</template>

<script setup lang="ts">
import AradImage from "~/assets/img/team/arad-farahani.png";
import MohammadImage from "~/assets/img/team/mohammad-kiani.png";
import MahdiImage from "~/assets/img/team/mahdi-nedaei.png";
import YoonesImage from "~/assets/img/team/yoones-kiani.png";
import ParsaImage from "~/assets/img/team/parsa-elmi.png";
import MohammadHImage from "~/assets/img/team/mohammad-h-kiani.png";
import ErfanImage from "~/assets/img/team/erfan-karimzadeh.png";
import HoomanImage from "~/assets/img/team/hooman-mirzaei.png";

interface TeamMember {
  name: string;
  position: string;
  imageUrl: string;
  link: string;
}

const teamMembers = ref<TeamMember[]>([
  {
    name: "Arad Farahani",
    position: "Founder, Researcher, Back-end developer",
    imageUrl: AradImage,
    link: "https://www.linkedin.com/in/aradfarahani/",
  },
  {
    name: "Mohammad Kiani",
    position: "Co-founder, Team lead, FullStack developer",
    imageUrl: MohammadImage,
    link: "https://www.linkedin.com/in/mohmmdkiani/",
  },
  {
    name: "Mahdi Nedaei",
    position: "Back-end developer",
    imageUrl: MahdiImage,
    link: "https://www.linkedin.com/in/mahdi-nedaee-232168242/",
  },
  {
    name: "Hooman Mirzaei",
    position: "Back-end developer",
    imageUrl: HoomanImage,
    link: "https://www.linkedin.com/in/hooman-mirzaee/",
  },
  {
    name: "Yoones Kiani",
    position: "Designer",
    imageUrl: YoonesImage,
    link: "#",
  },
  {
    name: "Parsa Elmi",
    position: "HR manager",
    imageUrl: ParsaImage,
    link: "https://www.linkedin.com/in/elmiparsa/",
  },
  {
    name: "Erfan Karimzadeh",
    position: "Front-end developer",
    imageUrl: ErfanImage,
    link: "https://www.linkedin.com/in/erfan-karimzadeh/",
  },
  {
    name: "Mohammad Kiani",
    position: "Designer",
    imageUrl: MohammadHImage,
    link: "https://www.linkedin.com/in/mh-kiani/",
  },
  // {
  //   name: "AmirAli Abdoli",
  //   position: "Motion Graphist",
  //   imageUrl: ParsaImage,
  // },
]);
</script>

<style scoped></style>
