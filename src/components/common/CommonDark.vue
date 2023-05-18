<template>
    <button :class="isDark" @click="onClickDark"></button>
</template>

<script setup lang="ts">
import { useCommon } from '@/store/commonStore';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const common = useCommon();
const { dark } = storeToRefs(common);

const initDark = () => {
    if (localStorage.dark) {
        dark.value = JSON.parse(localStorage.dark);
        if (dark.value == true) {
            document.body.classList.add('dark');
        }
    }
};
initDark();
const onClickDark = () => {
    dark.value = !dark.value;
    localStorage.setItem('dark', JSON.stringify(dark.value));
    document.body.classList.toggle('dark');
};
const isDark = computed(() => {
    return dark.value ? 'xi-sun' : 'xi-night';
});


</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/CommonDark.scss';
</style>