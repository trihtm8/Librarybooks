<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Welcome</template>
    <p class="strong">Ứng dụng quản lý thư viện</p>
    <p>DEV Phạm Hửu Trí</p>
    <p>MSSV: B2014624</p>
    <p>Học phần: CT449-01 Phát triển ứng dụng web</p>
  </WelcomeItem>
</template>

<style scoped>
.strong{
  font-weight: 500;
}
</style>
