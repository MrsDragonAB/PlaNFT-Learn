<template>
    <div>
        <div><span>Axios用例</span><button @click="aaaaa">点击发送GET请求</button></div>
    </div>
</template>
<script>
import axios from 'axios'
export default {

    methods:{
        aaaaa(){
            console.log(axios);
            axios.get('https://www.runoob.com/try/ajax/json_demo.json').then(Response => {
                console.log(Response);
            })
        }
    }
}
</script>