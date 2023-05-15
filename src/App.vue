<template>
    <CommonHeader/>
    <div>
        <RouterView/>
    </div>
</template>

<script setup lang="ts">
import CommonHeader from '@/components/CommonHeader.vue';
</script>

<style lang="scss">
    @import '@/assets/index.scss';
</style>