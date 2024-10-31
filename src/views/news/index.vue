<template>
  <div class="body">
    <div class="top">
      <div class="top-content">
        <div class="title">资讯中心</div>
      </div>
    </div>
    <div class="list" v-for="item in newsList" :key="item.title">
      <a :href="item.path" target="_blank">
        <Card :item="item" />
      </a>
    </div>
    <BasePagination
            v-if="total > 0"
            :current-page="reqParams.pageIndex"
            :page-size="reqParams.pageSize"
            :total="total"
            @current-change="changePagerFn"
          />
  </div>
</template>
<script>
import Card from "./components/card.vue";

import img1 from "./images/1.png";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";
import img7 from "./images/7.png";
import img8 from "./images/8.jpg";
import img9 from "./images/9.png";
import img10 from "./images/10.png";
import img11 from "./images/11.png";
import img12 from "./images/12.png";
import img13 from "./images/13.png";
import img14 from "./images/14.jpg";
import img15 from "./images/15.png";
import img16 from "./images/16.png";
import img17 from "./images/17.jpg";
import img18 from "./images/18.png";
import img19 from "./images/19.png";
import img20 from "./images/20.png";
import img21 from "./images/21.png";
import img22 from "./images/22.png";
import img23 from "./images/23.png";
import img24 from "./images/24.png";
import img25 from "./images/25.png";
import img26 from "./images/26.jpg";
import img27 from "./images/27.jpg";
import img28 from "./images/28.jpg";
import img29 from "./images/29.png";
import img30 from "./images/30.png";
import img31 from "./images/31.jpg";
import img32 from "./images/32.png";
import img33 from "./images/33.jpg";
import img34 from "./images/34.png";
import img35 from "./images/35.png";
import img36 from "./images/36.png";
import img37 from "./images/37.jpg";
import img38 from "./images/38.png";
import img39 from "./images/39.png";
import img40 from "./images/40.png";
import img41 from "./images/41.png";
import img42 from "./images/42.png";
import img43 from "./images/43.png";
import img44 from "./images/44.png";
import img45 from "./images/45.jpg";
import img46 from "./images/46.png";
import img47 from "./images/47.jpg";
import img48 from "./images/48.png";
import img49 from "./images/49.png";
import { ref,reactive } from "vue";

export default {
  name: "Case",
  components: {
    Card
  },
  setup() {
    const news = ref([

      {
        icon: img1,
        title: "凯文-新迈尔数字产业学院“青春就业大讲堂”活动顺利开展",
        date:'2023.12.28',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389655&idx=1&sn=04ce17b36fd0aa36fb95a1609ed50e3a&chksm=874d5c8cb03ad59aa9328d5774f3f1c0539a80085b56023b98b6ceb4ad793343857f866f03d7&token=1518178742&lang=zh_CN#rd",
      },
      {
        icon: img2,
        title: "凯文新迈尔数字艺术学院——忆清明 缅英烈",
        date:'2023.12.19',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389646&idx=1&sn=3c04743a3cdca7f7dfa80d34dc6c5acb&chksm=874d5c95b03ad5839680e260dee5e709c72ff61a3a2fc789a955d597fd26710c42c850de4b7d&token=1518178742&lang=zh_CN#rd",
      },
      {
        icon: img3,
        title: "构筑产教协同育人新生态丨新迈尔&河南人才数字艺术产业学院签约仪式圆满举行",
        date:'2023.12.15',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389644&idx=1&sn=e84025709ef704bbd06456d04b7c3481&chksm=874d5c97b03ad581b9606f1b3bd84d9d835bdedf0738c75caa525c8a1213da26d8c10e2562bf&token=1518178742&lang=zh_CN#rd",
      },
      {
        icon: img4,
        title: "凯文教育、新迈尔携手湖南幼专打造首个产业学院，助力湘西北职业教育高质量发展",
        date:'2023.12.15',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389643&idx=1&sn=4b372a925d67ce12067d2bf158d31034&chksm=874d5c90b03ad5862ea4fbcbeb3405325a779d1068647479dd3b747cac87d40f744a76c3da03&token=1518178742&lang=zh_CN#rd",
      },
      {
        icon: img5,
        title: "济宁职业技术学院-新迈尔数字媒体产业学院荣获多项省赛荣誉",
        date:'2023.11.3',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389626&idx=1&sn=7b5251fffdebae24910bf97f6406f860&chksm=874d5c61b03ad577b48c73e5b5fe24f864fa2e14227af0ebeb678fa7ab841e108cbad9caddcf&token=1518178742&lang=zh_CN#rd",
      },
      {
        icon: img6,
        title: "【育人】新迈尔各产业学院每日践行“三个行动”，积极推进立德树人育人理念",
        date:'2023.12.19',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389609&idx=1&sn=97f89cca17752074dbf20bdce3dd2fcb&chksm=874d5c72b03ad56431912690139d0929e7ffa71accabf2b4b0520656d04471bd10fe8dd3d73d&token=1518178742&lang=zh_CN#rd",
      },
      {
        icon: img7,
        title: "捷报连连！新迈尔-华为云学院项目再添二等奖一项、三等奖两项！",
        date:'2023.12.15',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389594&idx=1&sn=1c19d276caa10e7b0fecb4ac23737e47&chksm=874d5c41b03ad557acd72bba09a2b533eb100e340be7ebedf4737d093dab9df69a7537f80b2b&token=1518178742&lang=zh_CN#rd",
      },
      {
        icon: img8,
        title: "喜报！凯文新迈尔智能技术产业学院斩获2024年度湖南省“楚怡杯”职业院校技能竞赛Python开发赛项一等奖一项、三等奖一项！",
        date:'2023.12.15',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389587&idx=1&sn=c7cca1e14665ad62635183daabbece2c&chksm=874d5c48b03ad55e270e7b1abc3daefeb91e5121b34f6af90975bec17bf9b3d27a69da64782e&token=1518178742&lang=zh_CN#rd",
      },
      {
        icon: img9,
        title: "凯文新迈尔数字艺术学院——23级设计素描结课展",
        date:'2023.11.3',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389581&idx=1&sn=3a6ff8d894f657d989c2a8d237d27cb8&chksm=874d5c56b03ad54095d4c8fd2780db76a598914196c3c93071727df748acfa8a0386b29a4d0e&token=1518178742&lang=zh_CN#rd",
      },
      {
        icon: img10,
        title: "恭喜新迈尔产业学院泸州职业技术学院校区荣获国赛三等奖和省赛一等奖、二等奖各一项！",
        date:'2023.6.2',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389579&idx=1&sn=254c5e14e9149d429b614001df12f75d&chksm=874d5c50b03ad5461f8d5afe203199d98b65c739b5629ce3ff4959ce6cce4b47194d3bb6a95b&token=1518178742&lang=zh_CN#rd",
      },
      {
        icon: img11,
        title: "【引产入校】岳阳职业技术学院&新迈尔校企联合运营众创空间",
        date:'2023.5.6',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389566&idx=1&sn=942360db1135b98d63d0b90225992cea&chksm=874d5c25b03ad53367072f433e4621620e25a37beeb7ab12a57ee5c89751538dfc0ae92142bd&token=1518178742&lang=zh_CN#rd",
      },
      {
        icon: img12,
        title: "校企合作共谋发展——重庆移通学院参访考察新迈尔圆满成功",
        date:'2023.4.28',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389555&idx=1&sn=8557582b22779075a6ab131473265263&chksm=874d5c28b03ad53e8f82edeae1795fc7d4731b3d3a9960ab2ab6d001ae0c58da5488b162082e&token=1518178742&lang=zh_CN#rd",
      },
      {
        icon: img13,
        title: "【引产入校】新迈尔产业学院山东海事校区开展跨境电商项目取得开门红",
        date:'2023.4.21',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389548&idx=1&sn=583b4e5be5dba153def822e9f7a180e1&chksm=874d5c37b03ad521877361427966f63dff809a1095a1d45fbfa1760c8592aff15ad0f416ffd2&token=1518178742&lang=zh_CN#rd",
      },
      {
        icon: img14,
        title: "济宁职业技术学院-新迈尔校企合作成果荣获多项省级荣誉",
        date:'2023.4.13',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389540&idx=1&sn=6e9edd4fb8e8613bb87ca85866f26c4d&chksm=874d5c3fb03ad529c817cadbb2d145586799c12fb1afe1a7891d1f6f6080392da43c6f4f49bf&token=1518178742&lang=zh_CN#rd",
      },
      {
        icon: img15,
        title: "新迈尔工信部证书报考工作连年取得突破！",
        date:'2023.4.7',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389524&idx=1&sn=cb0b04e2c36f5f064f22a56b6fb2d462&chksm=874d5c0fb03ad5198e3dd1e85c692db491c29bf96419e1f71ec430fdd79a87dea6a8d1677e49&token=1518178742&lang=zh_CN#rd",
      },
      {
        icon: img16,
        title: "3月公司6s管理活动圆满完成",
        date:'2023.3.31',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389517&idx=1&sn=2d64c2ecc1af7abd319c7cda4c058db3&chksm=874d5c16b03ad50067fc304c78b503ff9e470807e6b4be9013337305d19e29ac8a389e865daa&token=1518178742&lang=zh_CN#rd",
      },
      {
        icon: img17,
        title: "捷报连连！新迈尔合作院校聊城职业技术学院市场营销专业同学荣获山东省职业院校技能大赛（高职组）“创新创业”竞赛项目团体二等奖",
        date:'2023.3.30',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389506&idx=1&sn=b0c650251e18db95f81fca8a0d5c0268&chksm=874d5c19b03ad50fe25bc585178b1bc97517ad816c32fb0ce66186139f515fbcd8d7e8ec3d2f&token=1518178742&lang=zh_CN#rd",
      },
      {
        icon: img18,
        title: "【引产入校】河南开放大学“新迈尔设计产业学院”大一学生实训实习项目启动",
        date:'2023.3.22',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389501&idx=1&sn=c4057034e12972cf96b6963e50f2720a&chksm=874d5be6b03ad2f03dff780805668484106694555fff18c47a3b886d18b8eba7da838b6e2d56&token=1518178742&lang=zh_CN#rd",
      },
      {
        icon: img19,
        title: "就业成果 | 恭喜新迈尔&岳阳职业技术学院校企班就业工作再创佳绩！",
        date:'2023.3.16',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389492&idx=1&sn=596a6cd02bd0111773cea5482d606389&chksm=874d5befb03ad2f90b643835f67eaec94fcefef39fd7e77ed4f4e2bd9bed69e015619a34c372&token=1518178742&lang=zh_CN#rd",
      },
      {
        icon: img20,
        title: "喜报！岳阳职业技术学院&新迈尔校企合作斩获2023年度“楚怡杯”湖南省职业院校技能竞赛四个一等奖！",
        date:'2023.3.8',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389455&idx=1&sn=390e6ace6f9c74b2f48d702389b6b841&chksm=874d5bd4b03ad2c2acad144fa04d3721e6b8d181fb0c41540e726045788f32bcccea3af101e4&token=1518178742&lang=zh_CN#rd",
      },
      {
        icon: img21,
        title: "校企协同育人 合作共赢发展——湖南高速铁路职业技术学院领导一行参访新迈尔&凯文教育集团交流洽谈圆满成功",
        date:'2023.3.7',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389444&idx=1&sn=e1de35f1498e9c82977baf8ab24b423b&chksm=874d5bdfb03ad2c9b0771b3cfd3eabbf97179dc160359b36d3d7fe5a98bfa6f1a4163749ec4d&token=2033582784&lang=zh_CN#rd",
      },
      {
        icon: img22,
        title: "捷报连连！益阳职业技术学院新迈尔华为云学院荣获2023年度“楚怡杯”湖南省高职高专组微视频制作赛项二等奖",
        date:'2023.3.6',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389434&idx=1&sn=d34702ca24c71c673a6185fda275a78f&chksm=874d5ba1b03ad2b7a7806dd2a47b45e9c1d27fd8cfdd8af1173737f552bb317b069bd541e78f&token=2033582784&lang=zh_CN#rd",
      },
      {
        icon: img23,
        title: "新迈尔“小杨哥直播视频剪辑项目” 48小时实现播放量50万啦！",
        date:'2022.11.19',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389426&idx=1&sn=17794ab3adf9c5cdae31305ea52eb2c6&chksm=874d5ba9b03ad2bf4f64a8f3ee4e337d3cc1bd5b73694f5454ee959062760934936ab65eb5dd&token=2033582784&lang=zh_CN#rd",
      },
      {
        icon: img24,
        title: "宝鸡职业技术学院新迈尔电商产业学院荣获2022年陕西省职业院校教师教学能力大赛省赛三等奖",
        date:'2022.11.18',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389412&idx=1&sn=db914765a6f18d243a68607257b14036&chksm=874d5bbfb03ad2a936082ab033b2f927a2ab9e31aaf8ee6d273c1af6b9f6899fb7d95c9d4c80&token=2033582784&lang=zh_CN#rd",
      },
      {
        icon: img25,
        title: "异彩纷呈 硕果累累——新迈尔学子在各项竞赛评比中屡获佳绩",
        date:'2022.6.23',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389407&idx=1&sn=afb4608d7f761ce303df7f82851457c1&chksm=874d5b84b03ad292c90674180951ad2fc946e12f9e25d3ad7c7f15449c40befb3f227c4429f8&token=2033582784&lang=zh_CN#rd",
      },
      {
        icon: img26,
        title: "【重磅】新迈尔这项合作荣登《中国教育报》！",
        date:'2022.6.8',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389394&idx=1&sn=0a3ab78ef79b5295dbb224382335cc06&chksm=874d5b89b03ad29f2a26d23a9328d95b03765534e2ee3ccef525ab7d80b6a04f7fcd84632697&token=2033582784&lang=zh_CN#rd",
      },
      {
        icon: img27,
        title: "新迈尔与泸州职业技术学院签订共建产业学院合作，提速职业教育发展之路",
        date:'2022.4.20',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389387&idx=1&sn=6c569de6ce59d852279190257b84a574&chksm=874d5b90b03ad28654f8007da1130ce515e6ef9645a4b9f5fbab0db36cc54f31e9d2978a4501&token=2033582784&lang=zh_CN#rd",
      },
      {
        icon: img28,
        title: "职业教育法首次大修，将带来哪些重要改变？",
        date:'2022.4.20',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389387&idx=2&sn=273f7d868711d014719279d26b5aa1c2&chksm=874d5b90b03ad286902318c9fec4e56851178155935967e292a572cbabaecc3a567dce97cb83&token=2033582784&lang=zh_CN#rd",
      },
      {
        icon: img29,
        title: "最新发布！新迈尔入选教育部“产教融合校企合作典型案例”，数字经济产教融合型人才云平台获肯定",
        date:'2022.3.25',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389376&idx=1&sn=ecb6f5b55427da8ebe51c943d81a9fba&chksm=874d5b9bb03ad28de3a2fc499cd008c3c10378f3352afa52edd41a8f972c299a18c487b5e8b3&token=2033582784&lang=zh_CN#rd",
      },
      {
        icon: img30,
        title: "新迈尔合作院校——益阳职业技术学院疫情防控科普课登《益阳日报》",
        date:'2022.3.23',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389352&idx=1&sn=f116ab83a145891c0cdd73d362ffd412&chksm=874d5b73b03ad2658b2761e450f4986319e51e73038c48a06f1f71db90a97ad350c9188d9137&token=2033582784&lang=zh_CN#rd",
      },
      {
        icon: img31,
        title: "河南开放大学“新迈尔设计产业学院”成功签约",
        date:'2022.3.16',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389344&idx=1&sn=4218977f139c5fbaa304b86767c3b387&chksm=874d5b7bb03ad26daaf81309c7d3177d042d0c7f188035cfe8ed5d3a5ada974fa5ab00b062ff&token=2033582784&lang=zh_CN#rd",
      },
      {
        icon: img32,
        title: "省级特等奖：新迈尔和广安职业技术学院共同研究成果荣获教学成果奖",
        date:'2022.2.18',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389318&idx=1&sn=132aa19eb0c61d28b47be2fc43e1ef5d&chksm=874d5b5db03ad24bcdf2b402b5e83d6740eb33dcb7ca475a3bb0b51dd7a54cb2a343c78e2ede&token=2033582784&lang=zh_CN#rd",
      },
      {
        icon: img33,
        title: "新迈尔2021年度十大事件",
        date:'2022.1.31',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389307&idx=1&sn=956714dfa97d4ad6607213275a6f2c38&chksm=874d5b20b03ad2362f874e4f08c7a792cb4402937ff49ca5477bc4b6d7d488de3d19b47b0414&token=2033582784&lang=zh_CN#rd",
      },
      {
        icon: img34,
        title: "新迈尔“以赛促教、以赛促学”效果显著，获奖水平逐年大幅提升",
        date:'2022.1.28',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389292&idx=1&sn=28c05f7c9334be363731501a435752c5&chksm=874d5b37b03ad221b2298432e9667f89323f81ace69c6bba7db3bb7820e52c0d94df2b580bf1&token=2033582784&lang=zh_CN#rd",
      },
      {
        icon: img35,
        title: "新迈尔&湖北城市建设职业技术学院产业学院合作圆满签约",
        date:'2022.1.16',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389250&idx=1&sn=3b02e54ebe73a044f0f9521431b6e4f6&chksm=874d5b19b03ad20ff56112b83d55840f7bfe5a8fae22ddff5de1185a4cc103cf836ae55f64d7&token=2033582784&lang=zh_CN#rd",
      },
      {
        icon: img36,
        title: "合作企业赠锦旗，点赞新迈尔育人模式",
        date:'2022.1.13',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389239&idx=1&sn=ce45a4039a51de0354aa050e2def6e84&chksm=874d5aecb03ad3fa6229af0c7d12d70b1d4571bf6e76534e7be1411b7a7ca66db782483d76c5&token=2033582784&lang=zh_CN#rd",
      },
      {
        icon: img37,
        title: "宝鸡职业技术学院新迈尔电商产业学院正式成立",
        date:'2022.1.4',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389232&idx=1&sn=a0d309e8d7ac8ecb6c835984b0a414e4&chksm=874d5aebb03ad3fdf4190ca2d4d8420f0333afe50b8640246672ecf2102101c18ac8f1f7d369&token=2033582784&lang=zh_CN#rd",
      },
      {
        icon: img38,
        title: "恭贺新迈尔学子在2022年“楚怡杯”湖南省职业院校技能竞赛中取得佳绩",
        date:'2021.12.29',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389183&idx=1&sn=7147bd40c8799dad29ae493c7ab9fd77&chksm=874d5aa4b03ad3b26e1f7d13245244a2ed2fdbb9f0b1b1a8861b9a73f86b5b1cb977363aa35f&token=2033582784&lang=zh_CN#rd",
      },
      {
        icon: img39,
        title: "把握现在就是创造未来-唐山职业技术学院教学成果汇报大赛顺利举办",
        date:'2021.12.29',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389183&idx=2&sn=4d73d548a4daf278727ee26b33da6106&chksm=874d5aa4b03ad3b236ed541aa2703ce5afdaa8e3b2b09f704264c475db8150b761bc013ca9e7&token=2033582784&lang=zh_CN#rd",
      },
      {
        icon: img40,
        title: "新机遇、新生态、新格局——新迈尔荣获2021年度知名产教融合型企业",
        date:'2021.12.18',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389142&idx=1&sn=718a671ba73e6c0c90126acf99ab84ac&chksm=874d5a8db03ad39b072ea35e56c36754716a57cc8f6eda1f6945cb50bde38f3384838f7dec28&token=2033582784&lang=zh_CN#rd",
      },
      {
        icon: img41,
        title: "新迈尔合作院校——益阳职业技术学院“三个行动”体系荣登《益阳日报》",
        date:'2021.12.14',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389120&idx=1&sn=913bc4875ff2e0438a227be47455e46f&chksm=874d5a9bb03ad38db66e84f31ecabb71cb157648c3035804a3198819627241d68ddb78ab1134&token=2033582784&lang=zh_CN#rd",
      },
      {
        icon: img42,
        title: "协同育人、合作共赢 新迈尔与山东信息职业技术学院共建产业学院圆满签约",
        date:'2021.12.11',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389114&idx=1&sn=5b409945681f046c6f330ae0b104ea99&chksm=874d5a61b03ad37713454242f3bc3f78f8577a422fbca1c5d0b029626566085382d3a1b95a5e&token=2033582784&lang=zh_CN#rd",
      },
      {
        icon: img43,
        title: "新迈尔与湖北城市建设职业技术学院成功举办产业学院合作研讨会",
        date:'2021.12.4',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389099&idx=1&sn=69865006a81db48a47301d177b8c7ef7&chksm=874d5a70b03ad3667f702e4baa3f738e4a988bd4e6e71452f9c912dcf9f6c7b3e562235c9c6e&token=2033582784&lang=zh_CN#rd",
      },
      {
        icon: img44,
        title: "68.4%受访者期待校企合作共建职教新专业",
        date:'2021.11.29',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389091&idx=1&sn=0cd12ec8b11819b037b1293c9b5525fa&chksm=874d5a78b03ad36e729fdddbef62a179df4dc7f7049fd267cd712ff3764e7dfa34a8894c141a&token=2033582784&lang=zh_CN#rd",
      },
      {
        icon: img45,
        title: "共商产教融合，共赢美好未来 新迈尔与软通动力合作交流会顺利举行",
        date:'2021.11.23',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389086&idx=1&sn=3469b7c57ec48104b9d61807bfdef8d0&chksm=874d5a45b03ad353605e38e46e1dab87fa18fcb814c91389726d83556be925f079a0c7bce495&token=2033582784&lang=zh_CN#rd",
      },
      {
        icon: img46,
        title: "加强深度合作，实现互通共赢 新迈尔与聊城职业技术学院开展深度合作洽谈会",
        date:'2021.11.23',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389086&idx=2&sn=ac4945ba173ec2a274bb32064b671a25&chksm=874d5a45b03ad35365816d3062e07918b3e7aef7a3ff16c5eb27c0476e278f50aac514b6dc4c&token=2033582784&lang=zh_CN#rd",
      },
      {
        icon: img47,
        title: "河北印发《实施意见》推动职业教育高质量发展，到2035年基本建成技能型人才强省",
        date:'2021.11.12',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389072&idx=1&sn=d0c9ee028eaef5f33cde7a912fbefe06&chksm=874d5a4bb03ad35d66c259223d3395f12759e424bf868d4d7f608c32742bb3eea3ce0fe04e36&token=2033582784&lang=zh_CN#rd",
      },
      {
        icon: img48,
        title: "新迈尔与山东信息职业技术学院校企合作交流会顺利举行",
        date:'2021.10.25',
        path: "https://mp.weixin.qq.com/cgi-bin/appmsgpublish?sub=list&begin=40&count=10&token=2033582784&lang=zh_CN",
      },
      {
        icon: img49,
        title: "校企合作，再续新篇--新迈尔电商产业学院揭牌仪式圆满举行",
        date:'2021.10.22',
        path: "https://mp.weixin.qq.com/s?__biz=MzA3ODYwMDU2NA==&mid=2650389060&idx=1&sn=ec8c19ecf1734b9bacf75f343fff24a6&chksm=874d5a5fb03ad349941bc2aada60c81121cbd3565441b2e1410b9307757a23c534088a8beb03&token=2033582784&lang=zh_CN#rd",
      }

    ]);


    const total = ref(news.value.length);
    const newsList = ref([]);

    //初始化
    const pagination = (pageNo, pageSize, array)=>{
      let offset = (pageNo - 1)*pageSize
      return (offset + pageSize >=array.length)? array.slice(offset, array.length) : array.slice(offset,offset+pageSize)
    }



    // 筛选条件
    const reqParams = reactive({
      pageIndex: 1,
      pageSize: 10
    });
     // 实现分页切换
     const changePagerFn = newPage => {
      reqParams.pageIndex = newPage;
      newsList.value = pagination(reqParams.pageIndex,reqParams.pageSize,news.value)
      console.log(newsList.value)

    };


    newsList.value = pagination(reqParams.pageIndex,reqParams.pageSize,news.value)


    return {total,newsList,reqParams,changePagerFn};
  }
};
</script>

<style scoped lang="less">
.body {
  .top {
    margin-top: 80px;
    background-image: url(./images/news-header.jpg);
    background-size: cover;
    height: 284px;

    .top-content {
      width: 1440px;
      height: 284px;
      margin: 0 auto;

      .title {
        font-size: 45px;
        font-weight: 600;
        color: #ffffff;
        line-height: 70px;
        padding-top: 100px;
      }
    }
  }
  .list {
    width: 1440px;
    margin: 0 auto;
  }
}
</style>
