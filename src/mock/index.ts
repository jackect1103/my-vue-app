import Mock from 'mockjs'
import shopList from './shopList'

Mock.mock('/shopList/getList', 'post', shopList.getList);
Mock.mock('/shopList/update', 'post', shopList.update);
Mock.mock('/shopList/delete', 'post', shopList.delete); 
export default Mock
