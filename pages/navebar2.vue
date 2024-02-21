<template>
    <div class="howto-overlay" id="howto">
        <button class="close-button" onclick="closeOverlay()">X</button>
        <div class="content"> <!--HOW-To-->

            <a href="#"><button class="usage-guidelines">กติกาการใช้งาน</button></a>
            <a href="#"><button class="usage-steps">ข้อตกลงของนักเขียน</button></a>
            <a href="#"><button class="writer-agreement">คำถามที่พบได้บ่อย</button></a>
            <a href="#"><button class="issue-report">แจ้งปัญหา</button></a>
        </div>
    </div>

    <div class="nav">
        <div class="button-nav">
            <button class="shelter" type="button">ชั้นหนังสือ</button>
            <button class="howto" onclick="openOverlay()">วิธีใช้งาน</button>


            <script src="script.js"></script>
        </div>
        <button class="button" type="button" onclick="redirectToURL('http://www.readawrite.com%27%29%22%3E/')" >
        <div class=" icon-logo"></div>
    </div>
    </button>

    <script>
        function redirectToURL(url) {
                window.location.href = url;
            }
    </script>
    <div class="icon-nav">
        <ui class="home"></ui>
        <ui class="search"></ui>
        <ui class="notf"></ui>
        <ui class="prf"></ui>
    </div>
    </div> <!--navbar-->
</template>
<style>
.nav {
    position: relative;
    display: flex;
    top: 0px;
    max-width: 100%;
    max-height: 102px;
    background-color: #ffffff;
    justify-content: space-around;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
    align-items: center;
}

.button {
    position: sticky;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("icon-logo.png") no-repeat;
    background-size: contain;
    background-position: center center;
    width: 107px;
    height: 83px;
}

.button-nav {
    position: sticky;
    display: flex;
}

.shelter {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    background: transparent;
    border: none;
    padding: 40px;
}

.howto {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    background: transparent;
    border: none;
    padding: 40px;
    text-decoration: none;
    text-transform: none;
    color: black;
}

.icon-nav {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    right: 10px;
    width: 340px;
    height: 80px;
}

.home {
    position: relative;
    background: url("icons-home.png") no-repeat;
    background-size: contain;
    background-position: center center;
    width: 40px;
    height: 40px;
    right: 0px;
    margin: 20px;
}

.search {
    position: relative;
    background: url("icons-search.png") no-repeat;
    background-size: contain;
    background-position: center center;
    width: 40px;
    height: 40px;
    margin: 20px;
}

.notf {
    position: relative;
    background: url("icons-bell 2.png") no-repeat;
    background-size: contain;
    background-position: center center;
    width: 40px;
    height: 40px;
    margin: 20px;
}

.prf {
    position: relative;
    background: url("icons-profile.png") no-repeat;
    background-size: contain;
    background-position: center center;
    width: 40px;
    height: 40px;
    margin: 20px;
}

.howto-overlay {
    position: fixed;
    top: 0px;
    left: 20px;
    width: 360px;
    height: 500px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
}

/* overlay */

@media only screen and (min-width: 768px) {
    .howto-overlay {
        top: 110px;
        left: 120px;
        position: fixed;
    }
}

.close-button {
    position: absolute;
    right: 0px;
    top: 0px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 30px;
    background: transparent;
    border: none;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 70px;
    position: relative;
    width: 210px;
    height: 210px;
    left: 47px;
    top: 65px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.usage-guidelines {
    background: transparent;
    border: 0px;
}

.usage-steps {
    background: transparent;
    border: 0px;
}

.writer-agreement {
    background: transparent;
    border: 0px;
}

.issue-report {
    color: crimson;
    background: transparent;
    border: 0px;
}</style>