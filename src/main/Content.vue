<template>
    <div>
    <!-- <div class="card-body"> -->
        <h1 class="top">Content</h1>
        <hr>
    <!-- </div> -->
    <div class="contentlist">
    <ul>
        <li style="list-style-position: inside">
            <router-link class="nav-link" to="/question">自己紹介Question</router-link>
        </li>
    </ul>
    </div>
    <!-- <img class="card-img-bottom" src="../../img/images1.png" alt="Card image cap">
    <p class="top">これから何か作って行きます！！</p>
    <p class="top">乞うご期待！！！</p>
    <p>  $emit, CSS, slot, v-bind:, スロットプロパティ, 動的conponent IS   </p>

        <p>イベントの内容イベントの内容</p>
        <textarea id="form" cols="30" rows="10" v-model="eventdata.form"></textarea>
        <pre>{{eventdata.form}}</pre> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            eventdata: {
                form: "",
            },
        }
    },
}
</script>


<style scoped>
.top {
    margin-top: 120px;
    text-align: center;
}
.contentlist {
    margin-top: 70px;
    font-size: 20px;
    margin-left: 25%;
}
.nav-link {
    padding: 0px;
    display: inline;
}
</style>