<template>
  <div><button @click="store.increment()">function()修改</button></div>
  <div><button @click="handlePatch">$patch-对象形式 修改</button></div>
  <div><button @click="handlePatchMethod">$patch-函数形式 修改</button></div>
  <div><button @click="store.getList()">store调用</button></div>
</template>

<script setup >
import { ref,reactive } from "vue";
import { useCounterStore } from '@/store/index'

const store = useCounterStore()

// Pinia修改状态数据的方式
// 1. $patch-对象形式
const handlePatch=() => {//可进行多个数据同时改变
  store.$patch({
    count:store.count+2
  })
}
// 2. $patch-函数形式
const handlePatchMethod=() => {
  store.$patch((state) => {
    state.count--
  })
}
//3.actions 及function() 直接调用方法名
</script>

<style scoped >
  
</style>