<template>
    <div>
        <div>
            <div>
                <span>Vuex用例</span>
            </div>
            <div><button>-</button><span>{{}}</span><button>+</button></div>
        </div>
        <div>
            <div>
                <span>Axios用例</span>
            </div>
                <div><button @click="aaaaa">点击发送GET请求</button>
            </div>
    </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {

    methods:{
        aaaaa(){
            console.log(axios);
            this.$axios.get('https://test.planft.com/market/sales?page=1&pageSize=10&title=&sortBy=1&saleMethod=&chainSymbol=').then(Response => {
                console.log(Response);
            })
        }
    }
}
</script>