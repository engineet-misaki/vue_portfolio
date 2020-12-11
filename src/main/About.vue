<template>
<div class="container" style="margin-top: 40px">
    <div>
        <div class="skilCard mb-3 d-inline-block" style="width: 20rem;">
            <div class="skiltitle html">HTML</div>
            <div class="card-body">
                <h6 class="card-title">経験年数 : 1年</h6>
                <h6 class="card-title">FW : --</h6>
                <p class="card-text">個人開発でいくつかサイトをコーディングした経験があります。<br><br><br></p>
            </div>
        </div>
        <div class="skilCard mb-3 d-inline-block" style="width: 20rem;">
            <div class="skiltitle css">CSS</div>
            <div class="card-body">
                <h6 class="card-title">経験年数 : 1年</h6>
                <h6 class="card-title">FW : bootstrap</h6>
                <p class="card-text">個人開発でいくつかサイトをコーディングした経験があります。<br>Bootstrapに関しては、このサイトでも使用しています。</p>
            </div>
        </div>
        <div class="skilCard mb-3 d-inline-block" style="width: 20rem;">
            <div class="skiltitle js">Javascript</div>
            <div class="card-body">
                <h6 class="card-title">経験年数 : 3ヶ月</h6>
                <h6 class="card-title">FW : Vue</h6>
                <p class="card-text">現在勉強中です。このサイトはVueを用いて開発されています。<br><br><br></p>
            </div>
        </div>
    </div>
    <div>
        <div class="skilCard mb-3 d-inline-block" style="width: 20rem;">
            <div class="skiltitle python">Python</div>
            <div class="card-body">
                <h6 class="card-title">経験年数 : 6ヶ月</h6>
                <h6 class="card-title">FW : --</h6>
                <p class="card-text">個人開発で３✖️４マスでやる将棋アプリの対戦AIを作ったことがあります。<br>その他、業務効率化のためのスクリプトを制作に使用しました。</p>
            </div>
        </div>
        <div class="skilCard mb-3 d-inline-block" style="width: 20rem;">
            <div class="skiltitle java">Java</div>
            <div class="card-body">
                <h6 class="card-title">経験年数 : 2ヶ月</h6>
                <h6 class="card-title">FW : --</h6>
                <p class="card-text">会社の研修で使用した。基礎文法の理解は出来ている。<br><br><br></p>
            </div>
        </div>
        <div class="skilCard mb-3 d-inline-block" style="width: 20rem;">
            <div class="skiltitle ruby">Ruby</div>
            <div class="card-body">
                <h6 class="card-title">経験年数 : 2ヶ月</h6>
                <h6 class="card-title">FW : Ruby on Rails</h6>
                <p class="card-text">簡単なメモアプリの作成で使用した。<br>ほとんど忘れているので挨拶ができる程度のスキル<br><br></p>
            </div>
        </div>
    </div>
    <div>
        <div class="skilCard mb-3 d-inline-block" style="width: 20rem;">
            <div class="skiltitle aws">AWS</div>
            <div class="card-body">
                <h6 class="card-title">経験年数 : 6ヶ月</h6>
                <h6 class="card-title">FW : --</h6>
                <p class="card-text">AWSを用いてサーバー構築やサイト運用の経験がある。<br>ソリューションアーキテクトアソシエイト資格を取得した。</p>
            </div>
        </div>
    </div>
</div>
</template>


<style scoped>
.container {
    text-align: center;
}

.skilCard {
    position: relative;
    flex-direction: column;
    min-width: 0;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
}

.skiltitle {
    padding: 10px 0;
    color: white;
    opacity: 0.9;
}

.html {
    background-color: rgb(250, 106, 90);
}

.css {
    background-color: rgb(233, 201, 60);
}

.js {
    background-color: rgb(122, 212, 248);
}

.python {
    background-color: rgb(106, 150, 3);
}

.java {
    background-color: dodgerblue;
}

.ruby {
    background-color: rgb(219, 58, 58);
}

.aws {
    background-color: gray;
}

</style>