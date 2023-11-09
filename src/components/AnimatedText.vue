<template>
    <div>
        <transition name="slide-fade">
            <p v-if="show" class="text"><slot></slot></p>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        };
    },
    mounted(){
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy(){
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll(){
            if(window.scrollY > 500){
                this.show = true;
            }
        }
    }
}
</script>

<style lang="sass">


slide-fade-enter-active
    animation: slide-fade-enter 5s
    animation-fill-mode: forwards

slide-fade-leave-active
    animation: slide-fade-leave 5s
    animation-fill-mode: forwards

@keyframes slide-fade-enter
    0%
        transform: translateY(100px)
        transition-delay: 4s
    
    100%
        transform: translateY(0)

@keyframes slide-fade-leave
    0%
        transform: translateY(0)
        transition-delay: 4s
    100%
        transform: translateY(100px)
</style>