<template>
    <div class="leftOptions">
        <div class="avatar">
            <span>
                <router-link to='/information'>杨斌</router-link>
            </span>
        </div>
        <div class="tabs">
            <ul>
                <router-link to='/information'>个人信息</router-link>
                <router-link to='/projects'>项目介绍</router-link>
                <router-link to='/skills'>专业技能</router-link>
                <router-link to='/contacts'>联系方式</router-link>
            </ul>
        </div>
        <div class="infos">
            <a href="https://www.jianshu.com/u/5bf13bf170c4" target="_blank">
                <svg class="boke">
                    <use xlink:href="#icon-boke"></use>
                </svg>
            </a>
            <a href="https://github.com/DeeJay0921" target="_blank">
                <svg class="github">
                    <use xlink:href="#icon-github"></use>
                </svg>
            </a>
            <a href="">
                <svg class="qq">
                    <use xlink:href="#icon-qq"></use>
                </svg>
            </a>
            <a href="">
                <svg class="weixin">
                    <use xlink:href="#icon-weixin2"></use>
                </svg>
            </a>
        </div>
        <div class="copyrights">
            <span>Open Source:
                <a href="https://github.com/DeeJay0921/resume" target="_blank">GitHub</a>
            </span>
            <br>
            <span>&copy;Copyright: DeeJay 2017</span>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'leftOptions'
    }
</script>
<style lang="scss">
    .leftOptions {
        position: fixed;
        z-index: 100;
        background: #202021;
        background: linear-gradient(135deg, #2c2e2c 0, #202021 100%);
        top: 0;
        bottom: 0;
        left: 0;
        width: 250px;
        text-align: left;
        padding: 5vh;
        .avatar {
            text-align: center;
            margin-top: 6vh;
            font-size: 40px;
            a {
                color: #529a76;
                transition: all .3s;
            }
            & a:hover {
                color: rgba(82, 154, 118, 0.67);
            }
        }
        .tabs {
            ul {
                margin-top: 60px;
                a {
                    display: block;
                    padding-top: 20px;
                    padding-bottom: 20px;
                    color: #ffffff;
                    font-size: 18px;
                    transition: all .3s;
                    &:hover {
                        color: #85bfff;
                    }
                }
            }
        }
        .infos {
            position: fixed;
            bottom: 15vh;
            left: 5vh;
            svg {
                width: 40px;
                height: 40px;
                transition: all .3s;
                opacity: 0.6;
            }
            .boke {
                fill: #ec6149;
                &:hover {
                    fill: #ff1001;
                    opacity: 1;
                }
            }
            .github {
                fill: #5c928f;
                &:hover {
                    fill: #8ea4ad;
                    opacity: 1;
                }
            }
            .qq {
                fill: #faaf08;
                &:hover {
                    fill: #ff7601;
                    opacity: 1;
                }
            }
            .weixin {
                fill: #94cb23;
                &:hover {
                    fill: #afff08;
                    opacity: 1;
                }
            }
        }
        .copyrights {
            color: #aaa;
            font-size: 14px;
            position: fixed;
            bottom: 2vh;
            left: 5vh;
            a {
                color: #aaaaaa;
                text-decoration: underline;
                transition: all .3s;
                &:hover {
                    color: #ffffff;
                }
            }
        }
    }
</style>