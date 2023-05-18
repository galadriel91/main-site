<template>
    <div class="contact">
        <h1>Contact</h1>
        <div class="contactForm">
            <form ref="form">
                <div>
                    <input
                        id="inputName"
                        type="text"
                        placeholder="이름"
                        name="from_name"
                    />
                </div>
                <div>
                    <input
                        id="inputTitle"
                        type="text"
                        placeholder="제목"
                        name="from_title"
                    />
                </div>
                <div>
                    <input
                        id="inputEmail"
                        type="text"
                        placeholder="이메일"
                        name="from_email"
                    />
                </div>
                <div>
                    <input
                        id="inputTel"
                        type="text"
                        placeholder="연락처"
                        name="from_number"
                    />
                </div>
                <div class="inputContentWrap">
                    <textarea
                        id="inputContent"
                        type="text"
                        placeholder="내용을 입력해주세요"
                        name="from_message"
                    ></textarea>
                </div>
                <button class="inputButton" value="Send" type="submit">
                    메세지 보내기
                </button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
@import '@/assets/scss/components/ContactPage.scss';
@import '@/assets/scss/components/ContactForm.scss';
</style>