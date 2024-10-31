// 定义分类相关的API接口函数
import request from '@/utils/request'
/**
 * 获取所有分类（顶级，二级，对应的产品推荐数据）
 * @returns Promise
 */
export const findAllMenu = () => {
  return {
    list: [{
      menuId: 1,
      name: "首页",
      path: "/",
    },
    {
      menuId: 2,
      name: "公司介绍",
      path: "/intro",
    },
    {
      menuId: 3,
      name: "产业学院",
      path: "/college",
      children : [
        {
          "menuId": 301,
          "name": "特色优势",
          "path": "/college",
          "parentId": 3,
          "imagePath":"iconfont icon-teseyoushi"
        },
        {
          "menuId": 302,
          "name": "专业学科",
          "path": "/college",
          "parentId": 3,
          "imagePath":"iconfont icon-hangyezhuanjia"
        },
        {
          "menuId": 303,
          "name": "教学成果",
          "path": "/college",
          "parentId": 3,
          "imagePath":"iconfont icon-jiaoxuechengguo"
          },
      ]
    },
    {
      menuId: 4,
      name: "产业基地",
      path: "/techplat",
    },
    {
      menuId: 5,
      name: "合作案例",
      path: "/case",
    },
    {
      menuId: 6,
      name: "新闻资讯",
      path: "/news",
    },
  ]
    }
}
