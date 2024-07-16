<!-- Dom模板 -->
<template>
  <div class="box">
   
    <!-- Dom内容 -->
    <div class="main">
      
       <div class="showlog" id="pop" v-if="logshow">
          <div class="colsebtn" @click="close"></div>
       </div>
       <div class="preview" id="mp4a" v-if="logmp4">
        <div> <img class="closeant" @click="closemp4" src="../assets/img/cross.png" alt="" srcset=""></div>
          <video :src="showvideo" controls  autoplay loop muted preload="auto"></video>
         </div>
       <div class="quanping" v-if="alllog"></div>
      <!-- 遮罩层 -->
      <div class="mp4">
        <div class="gradient"></div>
        <!-- <div class="gradient"></div> -->
        <div class="gradient"></div>
        <video class="video" :src="showvideo" autoplay loop muted preload="auto"></video>
      </div>
      <div class="conctrl">
        <div class="headSet flex">
          <div><img class="logo" src="../assets/img/Logo.png" alt="" srcset=""></div>
          <div class="flex">
            <div><img class="twiter" src="../assets/img/X.png" alt="" srcset=""></div>
            <div class="logbtn" @click="login"> Log in</div>
          </div>
        </div>
      </div>
      <div class="crunsh">
        Crunch Original
      </div>
      <div class="crunsh crate">
        Create What’s Next
      </div>
      <div class="featubtn">Featuring</div>
      <div class="mummy">The Mummy (2017)</div>
      <div class="Cruise">Tom Cruise · Sofia Boutella · Annabelle Wallis</div>

      <div class="PreviewBtn zd2 flex" @click="getmp4">
        <div class="preset flex">
          <div class="play"></div>
          Preview
        </div>
      </div>
      <div class="chosebox flex zd2">
        <div class="chose bos1">CrunchSpace</div>
        <div class="chose bos2">Airdrop</div>
        <div class="chose bos3">Campaign</div>
        <div class="chose bos4">CrunchBox App</div>
      </div>
      <div class="about">
        <div id="stat1" class="title zd11"> About CrunchSpace </div>
        <div class="aboutbg ">
          <div id="stat" class="state zd11">A Decentralized Protocol Network for Entertainment Assets <br />
            On-chain Issuance and Distribution</div>
          <div class="showbox  ">
            <div class="zhezhaoceng"></div>
            <div class="showboxa  zd11 env1 other" id="enr1" @mouseover="getmouth(0)" @mouseleave="getout(0)">
              <img class="group" src="../assets/img/Group1.png" alt="" srcset="">
              <div class="groptext">Creators can secure funding for content creation through crowdfunding in Web3 Space,
                which offers them higher potential returns and stimulates their creative enthusiasm</div>
              <div class="hiddenbox1 his">
                <div class="hiddenimg hifont1 flex">
                  <img class="ww" src="../assets/img/Donut1.png" alt="" srcset="">
                  <div class="hisetext">Creators</div>
                </div>
                <div class="hiatext">
                  <p class="addtile hifont1">High Return Potential</p>
                  <p class="addmain">Through crowdfunding in the Web3 space, creators can achieve higher potential
                    returns compared to traditional funding channels.</p>
                  <p class="addtile hifont1">Boosts Creative Enthusiasm</p>
                  <p class="addmain">Securing funds significantly boosts creators' enthusiasm, driving them to innovate
                    continually.</p>
                  <p class="addtile hifont1">Direct Support</p>
                  <p class="addmain">Fans and supporters can directly fund creators' projects, fostering a closer and
                    more interactive relationship.</p>
                </div>
              </div>
            </div>
            <div class="showboxa zd11 env2" id="enr2" @mouseover="getmouth(1)" @mouseleave="getout(1)">
              <img class="group" src="../assets/img/Group2.png" alt="" srcset="">
              <div class="groptext">Investors benefit from transparent investments and earnings distribution through
                smart contracts, reducing information asymmetry and improving the efficiency of capital allocation in
                the industry.</div>
              <div class="hiddenbox2 his">
                <div class="hiddenimg hifont2 flex">
                  <img class="ww" src="../assets/img/burger.png" alt="" srcset="">
                  <div class="hisetext">Investors</div>
                </div>
                <div class="hiatext">
                  <p class="addtile hifont2">Transparent Investments</p>
                  <p class="addmain">Investors benefit from clear and transparent investment processes.</p>
                  <p class="addtile hifont2">Smart Contracts</p>
                  <p class="addmain">Earnings distribution is managed through smart contracts, ensuring accuracy and
                    reliability.</p>
                  <p class="addtile hifont2">Reduced Information Asymmetry</p>
                  <p class="addmain">Transparency reduces information asymmetry, allowing investors to make more
                    informed decisions.</p>
                </div>
              </div>
            </div>
            <div class="showboxa zd11 env3" id="enr3" @mouseover="getmouth(2)" @mouseleave="getout(2)">
              <img class="group" src="../assets/img/Group3.png" alt="" srcset="">
              <div class="groptext set3">Short Drama Fans and influencers act as content distribution channels,
                effectively discovering valuable content. This reduces the financial waste brought about by opaque
                algorithmic placements, thereby improving project return on investment.</div>
              <div class="hiddenbox3 his">
                <div class="hiddenimg hifont3 flex">
                  <img class="ww" src="../assets/img/Pizza.png" alt="" srcset="">
                  <div class="hisetext">Fans</div>
                </div>
                <div class="hiatext">
                  <p class="addtile hifont3">Effective Content Distribution</p>
                  <p class="addmain">Short drama fans and influencers act as efficient content distribution channels.
                  </p>
                  <p class="addtile hifont3">Discovery of Valuable Content</p>
                  <p class="addmain">They help in discovering and promoting valuable content.</p>
                  <p class="addtile hifont3">Reduced Financial Waste</p>
                  <p class="addmain">Reduces financial waste caused by opaque algorithmic placements.</p>
                  <p class="addtile hifont3">Improved ROI</p>
                  <p class="addmain">Enhances project return on investment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="aunear">
        <div class="aunbox">
          <div class="auntitle"> ROADMAP</div>
          <div class="auntbot">Strategic Growth and Innovation: A Five-Quarter Roadmap to Our Success</div>
        </div>
        <div class="inoe flex">
          <div class="inoeshow">
            <div class="tapq">
              <div class="tapqtil "> 2024 Q3</div>
            </div>
            <div class="hover-effect">
              <div class="fontrt trans">
                Foundation<br />
                and<br />
                Initial Funding
              </div>
              <ul class="tea">
                <li>Establish the Web3 crowdfunding platform, focusing on user-friendly interface and security.</li>
                <li>Secure initial funding through early adopters and strategic partnerships.</li>
                <li>Onboard first wave of content creators and influencers to showcase the platform's potential.</li>
                <li>
                  Begin community building efforts, including social media presence and engagement campaigns.</li>
              </ul>
            </div>
          </div>
          <div class="inoeshow">
            <div class="tapq bod ">
              <div class="tapqtil coy  "> 2024 Q4</div>
            </div>
            <div class="hover-effect eff2 ">
              <div class="fontrt coy trans">
                Platform Expansion<br />
                and Community <br />
                Growth
              </div>
              <ul class="tea">
                <li> Expand platform features, including enhanced smart contract functionality for transparent earnings
                  distribution.</li>
                <li>Launch marketing campaigns targeting both creators and investors to increase platform visibility.
                </li>
                <li>Continue onboarding diverse creators, emphasizing high-quality and innovative content.</li>
              </ul>
            </div>
          </div>
          <div class="inoeshow">
            <div class="tapq bod1">
              <div class="tapqtil coy1 "> 2025 Q1</div>
            </div>
            <div class="hover-effect eff3">
              <div class="fontrt  coy1 trans ">
                Enhanced<br />
                Transparency and <br />
                Global Outreach
              </div>
              <ul class="tea">
                <li> Integrate advanced transparency tools to further reduce information asymmetry for investors.</li>
                <li>Initiate global outreach programs to attract international creators and investors.</li>
                <li>Develop educational resources and webinars to help users understand the benefits of Web3
                  crowdfunding.</li>
              </ul>
            </div>
          </div>
          <div class="inoeshow inosea2">
            <div class="tapq bod2">
              <div class="tapqtil coy2 "> 2025 Q2</div>
            </div>
            <div class="hover-effect eff4">
              <div id="fore" class="fontrt coy2 trans">
                Strategic Partnerships <br />
                and Ecosystem <br />
                Development
              </div>
              <ul class="tea">
                <li> Form strategic partnerships with established brands and organizations to broaden platform reach.
                </li>
                <li>Launch a beta version of a decentralized marketplace for content distribution.</li>
                <li>Enhance the platform's security features and scalability to handle increased user activity.</li>
                <li>Continue to refine the smart contract system </li>
              </ul>
            </div>
          </div>
          <div class="inoeshow">
            <div class="tapq">
              <div class="tapqtil "> 2025 Q3</div>
            </div>
            <div class="hover-effect">
              <div class="fontrt coy0">

                Full-Scale Launch <br />
                and Continuous <br />
                Innovation
              </div>
              <ul class="tea">
                <li> Officially launch the full-scale platform with all features and enhancements.</li>
                <li>Focus on continuous innovation by integrating the latest Web3 technologies.</li>
                <li>Expand the ecosystem by introducing new tools and services for creators and investors.</li>
                <li>Monitor platform performance and user satisfaction</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="aunaen">
        <div class="aunbox">
          <div class="auntitle"> BACKERS</div>
          <div class="auntbot">Empowering Investors: A Transparent and Rewarding Journey in Web3 Crowdfunding</div>
        </div>
        <div class="ronbox">
          <div class="choosimg chos1"></div>
          <div class="choosimg chos2"></div>
          <div class="choosimg chos1"></div>
          <div class="choosimg chos2"></div>
          <div class="choosimg chos1"></div>
          <div class="choosimg chos2"></div>
          <div class="choosimg chos1"></div>
          <div class="choosimg chos2"></div>
          <div class="choosimg chos1"></div>
          <div class="choosimg chos2"></div>
        </div>
      </div>
      <div class="bortom">
        <div class="leftfont">
          © 2024 CrunchSpace. All Rights Reserved
        </div>
        <div class="loads">
        </div>
        <div class="navigat">
          <div class="showast titen">Navigation</div>
          <div class="showast">Our Drops</div>
          <div class="showast">What We Do</div>
          <div class="showast">Who We Are</div>
          <div class="showast">Backers & Advisors</div>
        </div>
        <div class="legal">
          <div class="pokiu titen">Legal</div>
          <div class="pokiu">Privacy Policy</div>
          <div class="pokiu">Terms and conditions</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// import a from './a'; // 引入组件
export default {
  name: '',
  data() {
    return {
      logmp4:false,
      logshow:false,
      alllog:false,
      choose: 0,
      msg: '测试',
      showvideo:
        'https://static.shortscdn.com/video/668a6480c03dc07fa8c53321/202407/1809892311006318592.MP4',
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  // Vue方法定义
  methods: {
    login(){
      this.logshow = true
      this.alllog = true
      setTimeout(() => {
      const popup = document.getElementById('pop')
        popup.style.opacity = 1
      }, 0);
    },
    close(){
        const popup = document.getElementById('pop')
        popup.style.opacity = 0
         setTimeout(() => {
         this.logshow = false
         this.alllog = false
           }, 350);
    },
    getmp4(){
       this.alllog = true
      this.logmp4 = true 
        setTimeout(() => {
      const popup = document.getElementById('mp4a')
        popup.style.opacity = 1
      }, 0);
    },
    closemp4(){
         const popup = document.getElementById('mp4a')
        popup.style.opacity = 0
         setTimeout(() => {
         this.logmp4 = false
         this.alllog = false
           }, 350);
    },
    getmouth(e) {
      const target = document.getElementById('stat')
      const target1 = document.getElementById('stat1')
         e == 0
        ? (target.style.color = 'rgba(217, 194, 252, 1)')
        : e == 1
        ? (target.style.color = 'rgba(255, 225, 51, 1)')
        : (target.style.color = 'rgba(220, 119, 85, 1)')

        e == 0
        ? (target1.style.color = 'rgba(217, 194, 252, 1)')
        : e == 1
        ? (
          target1.style.color = 'black'
        )
        : (target1.style.color = 'rgba(220, 119, 85, 1)')
          e == 0
        ? (target1.style. webkitTextStroke ='15px white' )
        : e == 1
        ? (
          target1.style. webkitTextStroke ='15px rgba(255, 225, 51, 1)'
        )
        : (target1.style.webkitTextStroke ='15px white')
      const a = '350px'
      if (e == 0) {
        const ap2 = document.getElementById('enr2')
        const ap3 = document.getElementById('enr3')
        ap2.style.transform = `translateX(${a})` // 将 ap2 向右平移 350px
        ap3.style.transform = `translateX(${a})` // 将 ap3 向右平移 350px
        ap2.style.zIndex = '8'
        ap3.style.zIndex = '8'
        const hiddenDiv = document.querySelector('.hiddenbox1')
        hiddenDiv.style.visibility = 'visible'
        hiddenDiv.style.opacity = '1'
        hiddenDiv.style.transform = 'translateX(30%)'
      } else if (e == 1) {
        const ap1 = document.getElementById('enr1')
        const ap3 = document.getElementById('enr3')
        ap1.style.transform = `translateX(-${a})` // 将 ap2 向右平移 350px
        ap1.style.zIndex = '8'
        ap3.style.zIndex = '8'
        const hiddenDiv = document.querySelector('.hiddenbox2')
        hiddenDiv.style.visibility = 'visible'
        hiddenDiv.style.opacity = '1'
        hiddenDiv.style.transform = 'translateX(-30%)'
      } else if (e == 2) {
        const ap1 = document.getElementById('enr1')
        const ap2 = document.getElementById('enr2')
        ap1.style.zIndex = '8'
        ap2.style.zIndex = '8'
        ap1.style.transform = `translateX(-${a})` // 将 ap2 向右平移 350px
        ap2.style.transform = `translateX(-${a})` // 将 ap2 向右平移 350px
        const hiddenDiv = document.querySelector('.hiddenbox3')
        hiddenDiv.style.visibility = 'visible'
        hiddenDiv.style.opacity = '1'
        hiddenDiv.style.transform = 'translateX(-30%)'
      }
    },
    getout(e) {
      console.log(2)
      const ap1 = document.getElementById('enr1')
      const ap2 = document.getElementById('enr2')
      const ap3 = document.getElementById('enr3')
      ap1.style.transform = 'translateX(0px)' // 将 ap3 向右平移 100px
      ap2.style.transform = 'translateX(0px)' // 将 ap2 向右平移 100px
      ap3.style.transform = 'translateX(0px)' // 将 ap3 向右平移 100px
      ap1.style.zIndex = '20'
      ap2.style.zIndex = '20'
      ap3.style.zIndex = '20'
      const target = document.getElementById('stat')
      target.style.color = 'white'
       const target1 = document.getElementById('stat1')
      target1.style.color = 'black'
      target1.style. webkitTextStroke ='15px white' 
      const aa = document.querySelector('.his')
      aa.style.zIndex = 20
      if (e == 0) {
        const hiddenDiv = document.querySelector('.hiddenbox1')
        hiddenDiv.style.transform = 'translateX(-50px)'
        hiddenDiv.style.opacity = '0.5'
        setTimeout(() => {
          this.$nextTick(() => {
            hiddenDiv.style.visibility = 'hidden'
          })
        }, 300)
      } else if (e == 1) {
        const hiddenDiv = document.querySelector('.hiddenbox2')
        hiddenDiv.style.transform = 'translateX(50px)'
        hiddenDiv.style.opacity = '0.5'
        setTimeout(() => {
          this.$nextTick(() => {
            hiddenDiv.style.visibility = 'hidden'
          })
        }, 300)
      } else if (e == 2) {
        const hiddenDiv = document.querySelector('.hiddenbox3')
        hiddenDiv.style.transform = 'translateX(50px)'
        hiddenDiv.style.opacity = '0.5'
        setTimeout(() => {
          this.$nextTick(() => {
            hiddenDiv.style.visibility = 'hidden'
          })
        }, 300)
      }
    },
  },
}
</script>

<style scoped  >
/* @import url(''); 引入css类 */
.zd2 {
  z-index: 2;
}
.zd11 {
  z-index: 13;
}
.zd3 {
  z-index: 3;
}
.flex {
  display: flex;
}
.box {
  width: 100%;
  height: 100%;
  background: black;
  font-family: GillSans;
  color: black;
}
.main {
  width: 1440px;
  /* height: 1000px; */
  margin: 0 auto;
  background: rgb(0, 0, 0);
  position: relative;
}
.video {
  width: 1440px;
}
.mp4 {
  position: relative;
  height: 810px;
}
.gradient {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  width: 1440px;
  height: 810px; /* 设置高度 */
}
.conctrl {
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.logo {
  width: 255px;
  height: 39px;
  padding-left: 126px;
  padding-top: 10px;
}
.twiter {
  width: 40px;
  height: 40px;
  padding-top: 10px;
  margin-right: 20px;
  cursor: pointer;
}
.logbtn {
  width: 125px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #ffe133;
  border-radius: 20px;
  margin-right: 126px;
  margin-top: 10px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
}
.headSet {
  width: 100%;
  justify-content: space-between;
}
.crunsh {
  z-index: 2;
  position: absolute;
  top: 150px;
  left: 125px;
  color: #ffe133;
  font-size: 60px;
  font-weight: 700;
}
.crate {
  font-style: italic;
  z-index: 2;
  position: absolute;
  top: 212px;
  left: 125px;
  font-size: 80px;
  font-weight: 300;
  color: white;
}
.featubtn {
  z-index: 2;
  width: 165px;
  height: 64px;
  line-height: 64px;
  text-align: center;
  border-radius: 24px;
  background: #ffe133;
  font-size: 24px;
  font-weight: 700;
  position: absolute;
  top: 372px;
  left: 125px;
  cursor: pointer;
}
.mummy {
  z-index: 2;
  position: absolute;
  top: 457px;
  left: 125px;
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
}
.Cruise {
  z-index: 2;
  position: absolute;
  top: 492px;
  left: 125px;
  font-size: 16px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.7);
}
.PreviewBtn {
  width: 125px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  border-radius: 20px;
  border: 1px solid #ffe133;
  background: rgba(0, 0, 0, 0);
  /* background: white; */
  position: absolute;
  top: 532px;
  left: 125px;
  color: white;
  cursor: pointer;
  transition: background-color 0.8s ease; /* 平滑过渡效果 */
}
.PreviewBtn:hover {
  background: #ffe133;
  color: black;
}
.PreviewBtn:hover .play {
  /* width: 16px;
  height: 25px; */
  background-image: url('../assets/img/sanjiaoxingyou.png');
  /* transform: translate(-2%,29%); */
}
.play {
  width: 12px;
  height: 12px;
  background-image: url('../assets/img/sanjiaoxingyou1.png');
  background-size: 100%, 100%;

  transform: translate(-33%, 106%);
}

.preset {
  margin: 0 auto;
}
.chosebox {
  justify-content: center;
  position: absolute;
  left: 320px;
  top: 730px;
}
.chose {
  width: 200px;
  height: 24px;
  /* background: red; */
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  /* border-bottom: 2px solid #ccc; */
}
.bos1 {
  color: rgba(255, 225, 51, 1);
  border-bottom: 2px solid rgba(255, 225, 51, 1);
}
.bos2 {
  color: rgba(217, 194, 252, 0.3);
  border-bottom: 2px solid rgba(217, 194, 252, 0.3);
}
.bos3 {
  color: rgba(220, 119, 85, 0.3);
  border-bottom: 2px solid rgba(220, 119, 85, 0.3);
}
.bos4 {
  color: rgba(255, 255, 255, 0.3);
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
}
.about {
  width: 100%;
  height: 718px;
  position: relative;
  /* background: red; */
}
.aboutbg {
  width: 1312px;
  height: 589px;
  margin: 0 auto;
  margin-top: 42px;
  background: linear-gradient(180deg, #1a1b1a 0%, #000000 100%);
  border-radius: 48px;
  position: relative;
  overflow-x: hidden;
}
.title {
  font-size: 56px;

  font-weight: 700;
  position: absolute;
  top: -40px;
  left: 124px;
  z-index: 77;
  width: 710px;
  height: 65px;
  padding-left: 17px;
  /* background-size: 100%, 100%; */
  color: black;
  -webkit-text-stroke: 15px white;
  transition: color 0.2s ease-in-out;

}
.title::after{
  content:'About CrunchSpace' ;
  -webkit-text-stroke: 0 ;
  position: absolute;
  top: 0;
 left: 17px;
}
.state {
  width: 604px;
  height: 56px;
  font-size: 24px;
  line-height: 27.56px;
  font-weight: 400;
  position: absolute;
  top: 58px;
  left: 64px;
  color: rgba(255, 255, 255, 1);
  transition: color 0.2s ease-in-out;
}
.showbox {
  width: 1184px;
  height: 297px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 57px;
  left: 50%;
  transform: translate(-50%, 0%);
}
.showboxa {
  width: 378px;
  height: 297px;
  background: white;
  box-sizing: border-box;
  border-radius: 48px;
  transition: transform 0.7s;
  position: relative;
}
.env1 {
  border: 8px solid rgba(217, 194, 252, 1);
}
.env1:hover {
  background-color: rgba(217, 194, 252, 1);
}
.env1:hover .group {
  content: url('../assets/img/Group1-1.png');
  transform: scale(1.25);
}

.env2 {
  border: 8px solid rgba(255, 225, 51, 1);
}
.env2:hover {
  background: rgba(255, 225, 51, 1);
}
.env2:hover .group {
  content: url('../assets/img/Group2-2.png');
  transform: scale(1.25);
}
.env3 {
  border: 8px solid rgba(220, 119, 85, 1);
}
.env3:hover {
  background: rgba(220, 119, 85, 1);
  color: rgba(255, 255, 255, 1);
}
.env3:hover .group {
  content: url('../assets/img/Group3-3.png');
  transform: scale(1.2);
}
.group {
  width: 248px;
  height: 200px;
  position: absolute;
  top: -50px;
  left: 16%;
  transform: translate(-50%, 2%);
  transition: transform 1s;
  transform-origin: bottom;
  transform: scaleY(1);
  transition: transform 0.5s;
}
.groptext {
  width: 330px;
  height: 68px;
  position: absolute;
  top: 197px;
  left: 14px;
  font-weight: 600;
  line-height: 16.8px;
  text-align: center;
  font-size: 14px;
}
.set3 {
  top: 183px;
}
.hiddenbox1 {
  visibility: hidden;
  padding: 10px;
  transition: transform 0.5s ease;
  position: absolute;
  top: -50px;
  right: -270px;
}
.hiddenimg {
  width: 292px;
  height: 67px;
  justify-content: space-between;
}
.hiddenimg .ww {
  width: 67px;
  height: 67px;
}
.hifont1 {
  color: rgba(217, 194, 252, 1);
}
.hisetext {
  width: 213px;
  height: 58px;
  line-height: 58px;
  text-align: center;
  font-weight: 700;
  font-size: 48px;
  /* color: white; */
  align-items: center;
  margin-top: 5px;
}
.hiatext {
  width: 324px;
  height: 215px;
  /* margin-top: 20px; */
}
.addtile {
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  margin-top: 13px;
}
.addmain {
  font-weight: 600;
  font-size: 14px;
  line-height: 16.8px;
  color: white;
}

.hiddenbox2 {
  visibility: hidden;
  padding: 10px;
  transition: transform 0.5s ease;
  position: absolute;
  top: -30px;
  left: -250px;
}
.hifont2 {
  color: rgba(255, 225, 51, 1);
}

.hiddenbox3 {
  visibility: hidden;
  padding: 10px;
  transition: transform 0.5s ease;
  position: absolute;
  top: -70px;
  left: -250px;
}
.hifont3 {
  color: rgba(220, 119, 85, 1);
}
.zhezhaoceng {
  width: 1332px;

  height: 589px;
  position: absolute;
  top: -235px;
  left: -70px;
  /* background: rgba(0, 0, 0, 0.6); */
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  z-index: 10;
  pointer-events: none;
}

.aunear {
  width: 1440px;
  height: 698px;
  position: relative;
  background: linear-gradient(180deg, #000000 0%, #1a1b1a 100%);
}
.aunaen {
  width: 1440px;
  height: 613px;
  position: relative;
  background: linear-gradient(180deg, #1a1b1a 0%, #000000 100%);
}
.aunbox {
  width: 598px;
  height: 83px;
  position: absolute;
  top: 30px;
  left: 421px;
  text-align: center;
}
.auntitle {
  font-weight: 700;
  font-size: 56px;
  color: white;
}
.auntbot {
  font-size: 16px;
  font-weight: 400;
  color: rgba(196, 194, 192, 1);
  line-height: 18.38px;
}
.inoe {
  width: 1185px;
  height: 428px;
  position: absolute;
  top: 170px;
  left: 128px;
  /* background: #ffe133; */
}
.tapq {
  width: 237px;
  height: 45px;
  text-align: center;
  border-bottom: 4px solid white;
}
.tapqtil {
  transition: transform 0.3s, font-size 0.3s; /* 平滑过渡效果 */
  font-size: 32px;
  font-weight: 700;
  line-height: 38.4px;
  color: white;
}
.fontrt {
  width: 237px;
  height: 61px;
  color: white;
  top: 58px;
  left: 16px;
  padding-top: 10px;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.6px;
  text-align: center;
  transition: transform 0.5s color ease;
}
.tea {
  /* list-style-position: inside; */
  padding-left: 20px;
  width: 150px;
  height: 248px;

  font-size: 14px;
  font-weight: 400;
  line-height: 16.8px;
  text-align: left;
  position: absolute;
  top: 90px;
  left: 34px;
}
.tea li {
  text-align: left; /* 将文字左对齐 */
}
.inoeshow {
  width: 237px;
}

.hover-effect {
  width: 237px;
  height: 383px;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0) 50%, white 50%);
  background-size: 100% 200%;
  background-position: bottom;
  transition: background-position 0.35s;
  color: rgb(217, 217, 217);
  border-radius: 0px 0px 30px 30px;
  position: relative;
}
.eff2 {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0) 50%,
    rgba(255, 225, 51, 1) 50%
  );
}
.eff3 {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0) 50%,
    rgba(217, 194, 252, 1) 50%
  );
}
.eff4 {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0) 50%,
    rgba(220, 119, 85, 1) 50%
  );
}

.inoeshow:hover .hover-effect {
  background-position: top;
  color: black;
}
.inosea2:hover .hover-effect {
 
  color: white ;
} 
.inosea2:hover #fore {
 
  color: white ;
} 
.inoeshow:hover .fontrt {
  color: black;
}
.inosea2:hover .tea {
 
  color: white ;
}
.inoeshow:hover .tapqtil {
  font-size: 40px; /* 鼠标悬浮时字体增大 */
  transform: translateY(-10px); /* 从底部往上移动10像素 */
}
.coy {
  color: rgba(255, 225, 51, 1);
}
.bod {
  border-bottom: 4px solid rgba(255, 225, 51, 1);
}
.coy1 {
  color: rgba(217, 194, 252, 1);
}
.bod1 {
  border-bottom: 4px solid rgba(217, 194, 252, 1);
}
.coy2 {
  color: rgba(220, 119, 85, 1);
}
.trans {
  transition: color 0.5s ease-in-out; /* 设置过渡效果 */
}
.bod2 {
  border-bottom: 4px solid rgba(220, 119, 85, 1);
}

.coy0 {
  /* color: rgba(220, 119, 85, 1) ; */
  transition: color 0.5s ease-in-out; /* 设置过渡效果 */
}

.ronbox {
  width: 1030px;
  height: 294px;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 165px;
  left: 205px;
}
.choosimg {
  width: 206px;
  height: 147px;
}
.chos1 {
  background-image: url('../assets/img/logo1-1.png');
  background-size: 100% 100%;
  transition: background-image 0.3s ease-in-out;
}
.chos1:hover {
  background-image: url('../assets/img/logo1-2.png');
}
.chos2 {
  background-image: url('../assets/img/logo2-1.png');
  background-size: 100% 100%;
  transition: background-image 0.3s ease-in-out;
}
.chos2:hover {
  background-image: url('../assets/img/logo2-2.png');
}
.bortom {
  width: 1440px;
  height: 308px;
  background: linear-gradient(180deg, #000000 0%, #1a1b1a 100%);
  position: relative;
}
.leftfont {
  color: white;
  position: absolute;
  width: 255px;
  height: 10px;
  top: 218px;
  left: 128px;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  text-align: center;
}
.loads {
  position: absolute;
  width: 193px;
  height: 171px;
  top: 57px;
  left: 623px;
  background-image: url('../assets/img/Frame.png');
  background-size: cover;
}
.navigat {
  position: absolute;
  width: 111px;
  height: 122px;
  top: 106px;
  left: 991px;
  font-family: Gill Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 28px;
  text-align: right;
}

.showast {
  color: rgba(102, 102, 102, 1);
  font-size: 14px;
  font-weight: 400;
  line-height: 28px;
  text-align: right;
  cursor: pointer;
}

.legal {
  width: 135px;
  height: 66px;
  top: 106px;
  left: 1188px;
  position: absolute;
}
.pokiu {
  font-size: 14px;
  font-weight: 600;
  line-height: 28px;
  text-align: right;
  color: rgba(102, 102, 102, 1);
  cursor: pointer;
}
.titen {
  color: rgba(255, 255, 255, 1);
}

.text-stroke {
  font-size: 50px;
  color: white;
  -webkit-text-stroke: 5px red; /* Chrome, Safari */
  text-stroke: 2px blue; /* 标准语法，未广泛支持 */
  color: blue; /* 字体填充颜色设置为透明 */
}

.container {
  display: flex;
}

.box1 {
  flex: 1;
  height: 100px;
  background-color: lightblue;
  transition: all 0.3s;
}

.box1:hover {
  background-color: lightcoral;
}

.box1:hover + .box1 {
  margin-left: 100px; /* 第一个元素被hover时，第二个元素向右挤出 */
}

.box1:hover::after {
  content: '';
  width: 20px;
  height: 100px;
  background-color: lightgreen;
  margin-left: 100px; /* 第一个元素被hover时，在右侧生成一个模块 */
}

.box1 + .box1:hover {
  margin-right: 100px; /* 第二个元素被hover时，第一个元素向左挤出 */
}

.box1 + .box1:hover::before {
  content: '';
  width: 20px;
  height: 100px;
  background-color: lightyellow;
  margin-right: 100px; /* 第二个元素被hover时，在左侧生成一个模块 */
}
#pop{
    width: 795px;
  height: 391px;
  background-image: url('../assets/img/log.png');
  position: fixed;
  top: 191px;
  left: 50%;
  transform: translate(-50%,0%);
  opacity: 0; /* 初始状态为完全透明 */
  transition: opacity 0.35s; /* 添加淡入淡出效果，持续1秒 */
  z-index: 99;
}
#pop.show {
  opacity: 1; /* 淡入效果，将元素的透明度从0变为1 */
}
.preview{
position: fixed;
 width: 989.76px;
height: 590px;
top: 90px;
left: 50%;
border-radius: 16px ;
border: 1px 0px 0px 0px;
/* opacity: 0px; */
background: black;
z-index: 99;
 opacity: 0; /* 初始状态为完全透明 */
  transition: opacity 0.35s; /* 添加淡入淡出效果，持续1秒 */
  transform: translate(-50%, 0px);
}
.preview video{
width: 989.76px;
margin-top: 33px;
}
.closeant{
  width: 24px;
  height: 24px;
  position: absolute;
  right: 10px;
  top: 7px;
}
.quanping{
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  right: 0;
  z-index: 80;
  background: rgba(0,0,0,0.7);
}
.colsebtn{
  width: 15px;
  height: 15px;
  position: absolute;
  right: 28px;
  top: 28px;
  cursor: pointer;
}
</style>