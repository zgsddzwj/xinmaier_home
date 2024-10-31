// 提供产品相关的API函数
import request from '@/utils/request'

/**
 * 获取产品详情
 * @param {String} id - 产品ID
 */
export const findGoods = (productId) => {
  return request('/front/product/product/detail?url=&appId=10002', 'get', { productId })
}

/**
 * 获取产品详情
 * @param {String} id - 产品ID
 */
export const findNews = (newsId) => {
  return request('/front/news/news/detail?url=&appId=10002', 'get', { newsId })
}

/**
 * 获取相关推荐产品|猜你喜欢产品
 * @param {Integer} location - 10销量排序20时间排序30
 */
export const findRelevantGoods = (location = 10) => {
  return request('/front/product/product/recommendProduct?url=&appId=10002', 'get', { location})
}


export const findGoodsHot = (location = 10) => {
  return request('/front/product/product/recommendProduct?url=&appId=10002&location=10', 'post')
}

/**
 * 获取资讯类别
 */

export const findNewsCategory = () => {
  return request('/front/news/category/index?url=&appId=10002', 'get')
}

/**
 * 获取资讯
 * @param {Object} params - 可参考接口文档
 */
export const findNewsByCategoryId = (params) => {
  params.appId = 10002
  return request('/front/news/news/lists?url=&appId=10002', 'post',params)
}