<template>
  <footer class="max-w-screen-2xl px-8 mx-auto z-10 relative">
    <div class="w-full border-y border-[#DDDDDD]">
      <div
        class="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1"
      >
        <div
          class="md:w-full lg:w-full w-full sm:w-1/2 xl:w-fit flex flex-col sm:flex-row sm:px-6 py-6 sm:py-12 sm:space-x-10 sm:border-r-0 border-[#DDDDDD]"
        >
          <div class="sm:hidden xl:block mb-6 sm:mb-0">
            <a href="#">
              <img
                src="~/assets/img/logo/logo-black.svg"
                class="w-24 -mt-2"
                alt="Nefa Logo"
              />
            </a>
          </div>
          <ul class="space-y-4 flex flex-col">
            <div class="text-xl">Social media</div>
            <a
              class="inline-flex items-center"
              title="LinkedIn"
              href="https://www.linkedin.com/company/feztool"
              target="_blank"
            >
              <LinkedinIcon class="mr-2" />
              Linkedin
            </a>
            <a
              class="inline-flex items-center"
              title="Instagram"
              href="https://www.instagram.com/fez.tool?igsh=MXV2ZXpucWE4a2Zzdw=="
              target="_blank"
            >
              <InstagramIcon class="mr-2" />
              Instagram
            </a>
            <a
              class="inline-flex items-center"
              title="Telegram"
              href="https://t.me/FEZtool"
              target="_blank"
            >
              <TelegramIcon class="mr-2" />
              Telegram
            </a>
          </ul>
        </div>
        <div
          class="md:w-full lg:w-full lg:border-r w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 border-t sm:border-t xl:border-r border-[#DDDDDD]"
        >
          <ul class="space-y-4 flex flex-col">
            <div class="text-xl">Documents</div>

            <a
              class="inline-flex items-center"
              title="Github"
              href="https://github.com/aradfarahani/Remote-Sensing"
              target="_blank"
            >
              <GithubIcon class="mr-2" />
              Github
            </a>
            <a
              class="inline-flex items-center"
              title="ResearchGate"
              href="https://www.researchgate.net/profile/Mahdi-Farmahini-Farahani"
              target="_blank"
            >
              <ResearchGateIcon class="mr-2" />
              Research Gate
            </a>
          </ul>
        </div>
        <div
          class="md:w-full md:border-t lg:w-full w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 border-t sm:border-t-0 sm:border-r-0 border-[#DDDDDD]"
        >
          <ul class="space-y-4 flex flex-col">
            <div class="text-xl">Help Center</div>
            <a class="inline-flex items-center" title="Coming soon" href="#">
              Privacy and policy
            </a>
            <a class="inline-flex items-center" title="Coming soon" href="#">
              Support
            </a>
            <a class="inline-flex items-center" title="Coming soon" href="#">
              Blog
            </a>
          </ul>
        </div>
        <div
          class="md:w-full md:border-t lg:w-full sm:px-10 py-6 sm:py-12 w-full sm:w-1/2 xl:w-[22rem] space-y-4 sm:border-t border-[#DDDDDD]"
        >
          <h5
            class="text-sm font-medium text-[#666666] focus:outline-none focus:shadow-outline"
          >
            Newsletter
          </h5>
          <p
            class="text-sm text-[#666666] focus:outline-none focus:shadow-outline"
          >
            Never miss anything with FEZtool when you're exploring geology on
            the go!
          </p>
          <div class="flex items-center space-x-2">
            <input
              type="text"
              class="w-full px-2 py-4 sm:py-3 rounded-lg sm:rounded-md text-sm focus:outline-none border border-[#AAAAAA] placeholder-[#888]"
              placeholder="Soon ..."
              disabled
            />
            <button
              disabled
              class="bg-[#666666] px-4 py-4 sm:py-3 rounded-md text-white hover:shadow-md transition duration-300"
            >
              <ArrowRightIcon class="text-base" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="py-8 sm:py-4 text-center text-sm text-[#666666] hover:text-gray-900"
    >
      &copy; Copyright 2025 FEZtool LLC. All rights reserved
    </div>
  </footer>
</template>
<script lang="ts" setup>
import ArrowRightIcon from "~icons/material-symbols-light/arrow-forward-ios-rounded";
import LinkedinIcon from "~icons/akar-icons/linkedin-box-fill";
import InstagramIcon from "~icons/akar-icons/instagram-fill";
import TelegramIcon from "~icons/akar-icons/telegram-fill";

import GithubIcon from "~icons/mdi/github";
import ResearchGateIcon from "~icons/simple-icons/researchgate";
</script>
