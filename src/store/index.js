import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { elanckStore } from "./elanck";
export const useCounterStore = defineStore('counter', () => {
    // ref() 就是 state 属性
    const count = ref(100)
    const phone = ref('18582482334')
    // computed() 就是 getters
    const phoneHidde = computed(() => {
        // console.log('phone', phone);
        // console.log('phone.value', phone.value);
        return phone.value.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
    })
    // function() 就是 actions
    function increment() {
        count.value++
    }

    function getList() {
        console.log(elanckStore().list);
    }

    return { count, phone, increment, phoneHidde, getList }
})