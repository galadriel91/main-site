<template>
    <header>
        <div class="headerWrap">
            <h1>
                <RouterLink to="home">Moon<span>。</span></RouterLink>
            </h1>
            <div>
                <nav class="nav">
                    <ul>
                        <li @click="onClickRemove">
                            <RouterLink to="home"><span>Home</span></RouterLink>
                        </li>
                        <li @click="onClickRemove">
                            <RouterLink to="about"><span>About</span></RouterLink>
                        </li>
                        <li @click="onClickRemove">
                            <RouterLink to="projects"><span>Projects</span></RouterLink>
                        </li>
                        <li @click="onClickRemove">
                            <RouterLink to="contact"><span>Contact</span></RouterLink>
                        </li>
                    </ul>
                </nav>
                <a
                    href="javascript:void(0)"
                    class="wholeBtn"
                    @click="onToggleActive"
                >
                    <span :class="{ active: isActive }">&nbsp;</span>
                </a>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">

import { ref } from 'vue';
const isActive = ref(false);
const onToggleActive = () => {
    isActive.value = !isActive.value;
};
const onClickRemove = () => {
    isActive.value = false;
};
</script>

<style lang="scss">
@import '@/assets/scss/components/common/CommonHeader.scss';
</style>