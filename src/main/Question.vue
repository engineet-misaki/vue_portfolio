<template>
    <div class="container">
        <template v-if="ok && qnum!=3" class="question">
            <h2 class="title">{{ question[qnum].name }}</h2>
            <p class="questionabout">{{ question[qnum].question }}</p>
            <div class="radio-button">
                <div class="somequestion">
                    <input
                    type="checkbox"
                    id="five"
                    value="5"
                    v-model="eventData.select">
                    <label for="five">{{ question[qnum].ans1 }}</label><br>
                </div>
                <div class="somequestion">
                    <input
                    type="checkbox"
                    id="ten"
                    value="10"
                    v-model="eventData.select">
                    <label for="ten">{{ question[qnum].ans2 }}</label><br>
                </div>
                <div class="somequestion">
                    <input
                    type="checkbox"
                    id="twelb"
                    value="20"
                    v-model="eventData.select">
                    <label for="twelb">{{ question[qnum].ans3 }}</label><br>
                </div>
            </div>
        </template>
        <template v-if="!ok" class="answer">
            <Answer :selectnum=eventData.select :qnum=qnum></Answer>
        </template>
        <div>
            <button v-if="ok && qnum!=3" @click="goAnswer()" class="ansbutton">{{togle}}</button>
            <button
            v-else-if="!ok"
            @click="ok=!ok; togle='Answer'; qnum+=1; eventData.select=[]"
            class="nextQbutton">
                {{togle}}
            </button>
            <router-link v-else to="/"><p class="home">Thank You</p></router-link>
        </div>
    </div>
</template>

<script>
import question from '../assets/que.json';
import Answer from './Answer';

export default {
    data() {
        return {
            eventData: {
                select: []
            },
            question,
            qNumber: 0,
            ok: true,
            togle: "Answer",
            qnum: 0,
        }
    },
    components: {
        Answer
    },
    methods: {
        goAnswer: function() {
            if(this.qnum==0 && this.eventData.select.length==0){
                alert("入力してね！");
            }else if(this.qnum==0 && this.eventData.select.length>1){
                alert("入力しすぎだよ！");
            }else{
                this.ok=false;
                this.togle='Next';
            }
        },
    },
}
</script>



<style scoped>

.radio-button {
    margin-right: 25%;
    margin-left: 25%;
}

label {
    margin: 0px;
    display: inline-block;
    cursor : pointer;
}

input {
    cursor: pointer;
}

.somequestion {
    margin-bottom: 30px;
    border: solid rgb(184, 184, 184);
}

.title {
    margin: 50px 25%;
}

.questionabout {
    margin: 50px 25%;
    font-size: 20px;
}

.ansbutton {
    background-color: tomato;
    border: solid;
    border-width: 0.5px;
    border-color: gray;
    color: white;
    margin-left: 75%;
}

.nextQbutton {
    background-color: teal;
    border: solid;
    border-width: 0.5px;
    border-color: gray;
    color: white;
    margin-left: 75%;
}

.home {
    margin-top: 200px;
    text-align: center;
    font-size: 30px;
}


</style>