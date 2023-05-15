<template>
    <header>
        <div class="headerWrap">
            <h1>
                <a href="#home">Moon<span>。</span></a>
            </h1>
            <div>
                <nav class="nav">
                    <ul id="menu">
                        <li data-menuanchor="home">
                            <a href="#home"><span>Home</span></a>
                        </li>
                        <li data-menuanchor="about">
                            <a href="#about"><span>About</span></a>
                        </li>
                        <li data-menuanchor="projects">
                            <a href="#projects"><span>Projects</span></a>
                        </li>
                        <li data-menuanchor="contact">
                            <a href="#contact"><span>Contact</span></a>
                        </li>
                    </ul>
                </nav>
                <!-- <button
                    :class="isDark"
                    @click="onClickDark"
                    class="dark"
                ></button>
                <a
                    href="javascript:void(0)"
                    class="wholeBtn"
                    @click="onToggleActive"
                >
                    <span :class="{ active: isActive }">&nbsp;</span>
                </a> -->
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
@import '@/assets/components/CommonHeader.scss';
</style>