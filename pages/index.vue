<template>
  <div class="w-full">
    <!-- Hero section -->
    <LandingHero />
    <LandingRemoteSensing />
    <LandingRequestDemo />
    <LandingDocumentation />
    <LandingOurTeam />
    <LandingContactUs />
    <LandingCollaborations />
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.text-header-gradient {
  background: rgb(57, 132, 244);
  background: linear-gradient(
    169.4deg,
    #3984f4 -6.01%,
    #0cd3ff 36.87%,
    #2f7cf0 78.04%,
    #0e65e8 103.77%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bg-partner {
  background: url("../assets/img/partner/background.png");
  background-size: cover;
  background-position: center;
}
.bg-trading-tools {
  background: url("../assets/img/bg-trading-tools.webp");
  background-size: cover;
  background-position: center;
}
.max-h-0 {
  max-height: 0;
}
</style>
