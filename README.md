# vite vue 配置 “@” 路径别名

## 1.安装依赖

``` 
npm i @types/node -D
```



## 2.修改`vite.config.js`

```
import { resolve } from 'path'

export default defineConfig {
    // ...
    resolve: {
        alias: {
            "@": resolve(__dirname, 'src'), // 路径别名
        },
        extensions: ['.js', '.json', '.ts'] // 使用路径别名时想要省略的后缀名，可以自己 增减
    }
    // ...
}
```

# Vue pinia

1.安装

``` 
npm install pinia
```

2.在main中引入

```
import { createPinia } from 'pinia'

app.use(createPinia())
```

3.定义store

Composition API

```
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
// 第一个参数是应用程序中 store 的唯一 id
export const useStore = defineStore('main',()=> {

// ref() 就是 state 属性
    const count = ref(100)
    
// computed() 就是 getters
    const phoneHidde = computed(() => {
        return ...
    })
    
// function() 就是 actions
    function increment() {
        ...
    }
    
    return { count,  increment, phoneHidde }
})
```

Options API

```
export const useStore = defineStore('main', {
  state: () => {
    return {
    }
  },
   getters: {
  },
  actions: {
    increment() {
    }
  },
})
```

4.读取store数据

```
<script setup>
import { useCounterStore } from '@/store/index'

const store = useCounterStore()
</script>

```

5.Pinia中Store调用

先定义store

然后import

```
import { elanckStore } from "./elanck";
```

