<template>
    <CommonHeader/>
    <RouterView/>
    <CommonDark/>
</template>

<script setup lang="ts">
import CommonHeader from '@/components/common/CommonHeader.vue';
import CommonDark from '@/components/common/CommonDark.vue';
</script>

<style lang="scss">
    @import '@/assets/scss/index.scss';
</style>