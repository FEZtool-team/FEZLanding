<template>
  <section id="contact-us" class="w-full lg:pb-24 pb-12">
    <BaseSection class="lg:max-w-[1200px]">
      <div class="col-span-12 text-black text-left lg:pt-24 lg:pb-22 pt-12">
        <div class="lg:grid lg:grid-cols-12 gap-x-16 py-10">
          <div
            class="lg:col-span-6 max-w-full mb-5 lg:mb-0 flex flex-col justify-center"
          >
            <h1 class="lg:text-5xl text-3xl font-bold mb-8 uppercase">
              Contact Us
            </h1>
            <p class="lg:pr-6">
              Have questions or inquiries about FEZtool? We're here to help!
              Whether you're seeking assistance with our products, have feedback
              to share, or simply want to learn more about our services, our
              dedicated team is ready to assist you. Feel free to reach out to
              us through the contact form below, and we'll get back to you as
              soon as possible. Alternatively, you can also connect with us via
              email at support@feztool.com or through our social media channels.
              We value your input and look forward to hearing from you!
            </p>
          </div>
          <div class="lg:col-span-6 max-w-full">
            <div class="bg-white p-10 rounded-2xl">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Your email</label
              >
              <input
                v-model="email"
                type="email"
                id="email"
                aria-describedby="helper-text-explanation"
                class="bg-gray-50 mb-5 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="name@feztool.com"
              />
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Message
              </label>
              <textarea
                v-model="message"
                id="message"
                rows="4"
                class="block mb-5 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                placeholder="Your message..."
              ></textarea>
              <base-button
                class="px-8 py-3 bg-[#72B01D] text-white font-bold"
                :class="[{ grayscale: !validForm }]"
                @click="sendContact"
                :disabled="!validForm"
              >
                <div v-if="isLoading" role="status">
                  <svg
                    aria-hidden="true"
                    class="inline w-[1.1rem] h-[1.1rem] text-gray-200 animate-spin fill-black"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
                <span v-else> Send Message </span>
              </base-button>
            </div>
          </div>
        </div>
      </div>
    </BaseSection>
    <div
      class="notification fixed right-0 bottom-0 flex justify-end items-end flex-col pr-5 w-auto max-w-xs"
    >
      <div
        v-if="success"
        id="toast-success"
        class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow"
        role="alert"
      >
        <div
          class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg"
        >
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
            />
          </svg>
          <span class="sr-only">Check icon</span>
        </div>
        <div class="ms-3 text-sm font-normal">
          Your message successfully sent.
        </div>
        <button
          type="button"
          class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
          data-dismiss-target="#toast-success"
          aria-label="Close"
          @click="success = false"
        >
          <span class="sr-only">Close</span>
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
      <div
        v-if="error"
        id="toast-danger"
        class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow"
        role="alert"
      >
        <div
          class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg"
        >
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"
            />
          </svg>
          <span class="sr-only">Error icon</span>
        </div>
        <div class="ms-3 text-sm font-normal flex-1 overflow-hidden">
          {{
            errorContent.includes("core.")
              ? errorContent.split(":")[2]
              : errorContent
          }}
        </div>
        <button
          type="button"
          class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
          data-dismiss-target="#toast-danger"
          aria-label="Close"
          @click="error = false"
        >
          <span class="sr-only">Close</span>
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const isLoading = ref(false);
const email = ref("");
const message = ref("");

const success = ref(false);
const error = ref(false);
const errorContent = ref("");

const validForm = computed(() => {
  return (
    String(email.value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) && message.value.length > 0
  );
});

const sendContact = async () => {
  if (
    validForm.value &&
    !isLoading.value &&
    email.value.length > 0 &&
    message.value.length > 0
  ) {
    isLoading.value = true;

    const response = await useFetch("https://core.feztool.com/contact", {
      method: "POST",
      body: {
        email: email.value,
        message: message.value,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    isLoading.value = false;

    if (response.error && response.error.value) {
      error.value = true;
      errorContent.value = response.error.value.message;
    } else {
      success.value = true;
    }

    setTimeout(() => {
      error.value = false;
      errorContent.value = "";
      success.value = false;
    }, 5000);
  }
};
</script>

<style scoped></style>
