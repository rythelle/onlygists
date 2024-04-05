<script setup lang="ts">
import SocialForm from '@/modules/auth/components/SocialForm/SocialForm.vue'

let loading = ref<boolean>(false)

const handleGithubLogin = async () => {
  loading.value = true
  // @TODO call api
}
</script>

<template>
  <section class="w-full h-screen flex flex-col items-center justify-center gap-5 bg-gray-5">
    <Logo />
    <SocialForm @wants-login-with-github="handleGithubLogin" :loading="loading" />
  </section>
</template>
