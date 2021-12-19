const { onMounted,reactive,ref } = Vue

const tagsArr = reactive({arr:[]})
const quesArr = reactive({arr:[]})

const app = {
    setup(){
        onMounted(() => {
            axios
            .get('https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow')
            .then((res) => {
                tagsArr.arr = res.data
                console.log(tagsArr);
            })
        })

        onMounted(() => {
            axios
            .get('https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow')
            // 後面顯示{"error_id":502,"error_message":"too many requests from this IP, more requests available in 67194 seconds","error_name":"throttle_violation"}
            .then((qres) => {
                quesArr.arr = qres.data
                console.log(quesArr);
            })
        })

        return{
            tagsArr,
            quesArr,
        }
    }
}

Vue.createApp(app).mount("#app");