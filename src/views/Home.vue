<template>
    <figma-page :design=design :config=config v-model:view-model=viewModel @update="update"></figma-page>
</template>

<script lang="ts">
export default {
    name:"Home"
}
</script>

<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'
var design = {
    figmaFile:'qam5ckf8Hc7KMrfR7v2FGz',
    // figmaFile:'XRCDYeK5heNxkqItAxDjBW',
    figmaAccessKey:'377619-9a8341ff-53fe-4e2a-a3a0-fc315e0c9b6c',
    page:1
}
var viewModel = reactive({
    name:'World',
    result:'Hello',
    sayHello:()=>{
        console.log("hello, "+viewModel.name);
        viewModel.result = "Hello "+viewModel.name;
    }
})

var config = {
}

const listAssign = (a:any, b:any) => Object.keys(a).forEach(key => {
    a[key] = b[key] || a[key]
})

const update = (value:any)=>{
    console.log(value);
    listAssign(viewModel,value)
}

</script>



<style scoped>

</style>