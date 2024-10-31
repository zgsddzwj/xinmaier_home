// 定义分类相关的API接口函数
import request from '@/utils/request'

/**
 * 获取所有分类（顶级，二级，对应的产品推荐数据）
 * @returns Promise
 */
export const findAllCategory = () => {
  return request('/front/product/category/index?url=&appId=10002', 'get')
}

