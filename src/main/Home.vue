<template>
<div class="mag">
    <h1>INTRODACTION</h1>
    <img class="img-thumbnail" src="../../img/images2.jpg" alt="Thumbnail image">

    <div class="tabl bg-light">
    <table class="table">
        <thead>
            <tr>
            <th class="key">Topic</th>
            <th>About</th>
            </tr>
        </thead>
        <tbody>
            <tr class="table-info">
            <td class="key">Name</td>
            <td>Misaki Toyama</td>
            </tr>
            <tr>
            <td class="key">Job</td>
            <td>エンジニア</td>
            </tr>
            <tr class="table-info">
            <td class="key">Age</td>
            <td>23</td>
            </tr>
            <tr>
            <td class="key">Hobby</td>
            <td>筋トレ/温泉/プログラミング/小説</td>
            </tr>
            <tr class="table-info">
            <td class="key">Experience</td>
            <td>海外旅行</td>
            </tr>
            <tr>
            <td class="key">LikeFood</td>
            <td>オムライス</td>
            </tr>
        </tbody>
    </table>
    </div>


</div>
</template>

<style scoped>
.mag {
    text-align: center;
}

h1 {
    margin-top: 50px;
}
img {
    margin: 0 auto;
    width: 20%;
    height: auto;
    border-radius: 50%;
}

.tabl {
    margin: 5% 20%;
    border: 5px solid gainsboro;
}

.key {
    border-right-style: dotted;
    border-color: gainsboro;
}

thead {
    font-size: 20px;
    border-bottom: solid rgb(158, 158, 158);
}

table {
    margin: 0;
}

</style>