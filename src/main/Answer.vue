<template>
    <div class="container">
        <h1 v-if="selectnum[0] == '20' && selectnum[1] == null && qnum == 0 || selectnum.length == 3 && qnum == 1 || selectnum == '' && qnum == 2 " class="title">正解！！</h1>
        <h1 v-else class="title">残念。。</h1>
        <pre class="ansAbout">{{ answer[qnum].ans}}</pre>
    </div>
</template>



<script>
import answer from '../assets/ans.json'

export default {
    props: ["selectnum","qnum"],
    data() {
        return {
            eventData: {
                select: ""
            },
            answer,
        }
    },
}
</script>


<style scoped>
.title {
    margin: 50px 25%;
}

.ansAbout {
    margin: 50px 25%;
    font-size: 20px;
}

pre {
    white-space: pre-wrap;
}
</style>