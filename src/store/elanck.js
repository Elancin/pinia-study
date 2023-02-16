// store的相互调用
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const elanckStore = defineStore('elanck', () => {
    const list = ref(['12', '23', '34'])

    return { list }
})