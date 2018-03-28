<template>
    <div class="rightContents">
        <ul class="tab-contents" id='tab-contents'>
            <router-view></router-view>
        </ul>
    </div>
    
</template>
<script>
import information from './information'
    export default {
        name: 'rightContents',
        components: {
            information,
        }
    }
</script>
<style lang='scss'>
.rightContents {
    height: 100%;
    //background: url("http://ox2pbpy73.bkt.clouddn.com/bg.jpg") center center no-repeat;
    //background-size: cover;
    .tab-contents {
      height: 100%;
      .information {
        padding: 5vh 10vh;
        height: 100%;
        background: url("//ox2pbpy73.bkt.clouddn.com/bg.jpg") center center no-repeat;
        background-size: cover;
        h1 {
          color: #fff;
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          font-weight: normal;
          svg {
            width: 40px;
            height: 40px;
            fill: white;
            margin-right: 1vh;
          }
        }
        ul {
          color: #ffffff;
          margin-top: 4vh;
          li {
            margin-bottom: 4vh;
            font-size: 18px;
            svg {
              width: 20px;
              height: 20px;
              fill: white;
              margin-right: 1vh;
            }
          }
        }
        .description {
          margin-top: 3vh;
          max-width: 80vh;
          svg {
            fill: white;
            width: 40px;
            height: 40px;
          }
          p {
            margin-top: 3vh;
            color: #ffffff;
            font-size: 16px;
            line-height: 2em;
          }
        }
      }
      .projects {
        padding: 5vh 10vh;
        //height: 100%;
        background: rgba(208, 231, 222, 0.7);
        h1 {
          color: #111;
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          font-weight: normal;
        }
        .pro-items {
          //margin-top: 5vh;\
          display: flex;
          flex-wrap: wrap;
          overflow: auto;
          li {
            width: 60vh;
            height: 40vh;
            overflow: hidden;
            margin: 5vh;
            border-radius: 5px;
            a {
              display: inline-block;
              position: relative;
              &:hover img {
                transform: scale(1.2);
              }
              div {
                position: absolute;
                width: 100%;
                height: 100%;
                z-index:1;
                background: rgba(164, 255, 240, 0.55);
                opacity: 0;
                transition: all .3s;
                &:hover {
                  opacity: 1;
                }
                h3 {
                  position: absolute;
                  top: 0;
                  left: 50%;
                  transform: translateX(-50%);
                  transition: all 1s;
                }
                &:hover h3 {
                  top: 25%;
                  left: 50%;
                  transform: translate(-50%,-50%);
                }
                span {
                  text-align: center;
                  position: absolute;
                  top: 0;
                  left: 50%;
                  transform: translateX(-50%);
                  transition: all 1s;
                }
                &:hover span {
                  top: 45%;
                  left: 50%;
                  transform: translate(-50%,-50%);
                }
              }
              img {
                width: 100%;
                height: 100%;
                transition: all .3s;
              }
            }
          }
        }
      }
      .skills {
        background: rgba(208, 231, 222, 0.7);
        height: 100%;
        padding: 5vh 10vh;
        h1 {
          font-weight: normal;
        }
        #main {
          margin: 0 auto;
        }
        .intro {
          margin-top: 10vh;
          svg {
            margin-top: 5vh;
            width: 40px;
            height: 40px;
          }
          .text {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            .cap,.adv {
              width: 70vh;
              line-height: 2em;
              h3 {
                position: relative;
                left: -3vh;
              }
              ul,li {
                list-style: disc;
              }
            }
            .cap {
              margin-right: 5vh;
            }

          }
        }
      }
      .contacts {
        padding: 5vh 10vh;
        background: rgba(208, 231, 222, 0.7);
        height: 100%;
        h1 {
          font-weight: normal;
        }
        ul {
          display: flex;
          justify-content: space-around;
          padding: 5vh 0;
          align-items: center;
          li {
            width: 30vh;
            position: relative;
            img {
              width: 100%;
            }
            span {
              position: absolute;
              top: 100%;
              left: 50%;
              transform: translateX(-50%);
              color: #aaa;
            }
          }
        }
        .rest {
          display: flex;
          justify-content: space-around;
          padding-top: 10vh;
          .phone,.c-github,.c-blog {
            font-size: 16px;
            display: inline-flex;
            align-items: center;
            color: #555;
            svg {
              width: 20px;
              height: 20px;
              fill: black;
              margin-right: 1vh;
            }
            a {
              color: #555;
              transition: all .3s;
              &:hover {
                color: #111111;
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
  }
</style>