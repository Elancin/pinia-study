<template>
  <div>{{ store.count }}</div>
  <div>{{ store.phoneHidde }}</div>
  <input type="text" v-model="store.phone" >
  <countButton />
</template>

<script setup>
import { useCounterStore } from '@/store/index'
import countButton from './components/countButton.vue';


const store = useCounterStore()
</script>

<style scoped>
</style>
