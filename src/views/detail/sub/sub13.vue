<template>
  <div class="body">
    <h1>学院简介</h1>
    <p>
      河南艺术职业学院是经省政府批准，教育部备案的一所公办高等艺术职业院校。
    </p>
    <p>
      学院师资力量雄厚,拥有校本部教职员工648人，其中专任教师584人，副高级以上职称166人，教授29人。设置新闻传媒、戏曲、音乐、美术、戏剧、影视艺术、文化传播、艺术设计、舞蹈等9个二级学院34个专业（含方向），在校全日制学生一万多名。
    </p>
    <p>
      建校以来，学院始终贯彻党的教育方针，坚持社会主义办学方向，坚持鲜明的艺术特色，以严谨的治学精神，造就了大批坚守在文化艺术一线的技术专家和骨干力量，培养了一批批像刘忠河、汪荃珍、王惠、李娜（歌唱演员）、孟祥礼、杨帅学、丁岚、张立、李光洁、蒋欣等著名豫剧表演艺术家、歌唱演员和影视演员。
    </p>
  </div>
</template>
<script>
export default {
  name: "Sub13"
};
</script>

<style scoped lang="less">
.body {
  width: 1440px;
  margin: 160px auto 80px;

  h1 {
    text-align: center;
  }

  .bold {
    font-weight: bold;
    font-size: 22px;
    text-indent: 2em;
  }

  p {
    text-indent: 2em;
    margin: 30px;
    color: #333;
    font-size: 18px;
    line-height: 30px;
  }

  .post {
    text-align: center;
    color: #333;
    margin: 0;
    margin-bottom: 80px;
  }

  .flex-2 {
    text-align: center;

    img {
      margin: 20px;
      margin-top: 0;
      width: 640px;
      height: 400px;
    }

    .img1 {
      margin: 40px;
      margin-top: 0;
      width: 820px;
      height: 600px;
    }

    .img2 {
      margin: 40px;
      margin-top: 0;
      width: 420px;
      height: 600px;
    }
  }

  .flex-3 {
    text-align: center;

    img {
      margin: 20px;
      margin-top: 0;
      width: 420px;
      height: 600px;
    }
  }

  .img-container {
    text-align: center;

    img {
      margin: 20px auto;
      width: 1320px;
    }
  }
}
</style>
