// 提供首页相关API函数
import request from '@/utils/request'

/**
 * 获取广告区轮播图
 * @returns Promise
 */
export const findAd = (flag) => {
  return request(`/front/web/ad/index?url=&appId=10002&flag=${flag}`, 'get')
}

/**
 * 获取单页面
 * @returns Promise
 */
export const findNewsDetailByFlag = (flag) => {
  return request(`/front/plus/article/article/detailByFlag?url=&appId=10002&flag=${flag}`, 'get')
}
