// 对API进行统一管理
import requests from "./request";

const loginAdmin = async (name, password) => {
  return await requests({url: '/login', method: 'post', data: {
    name,
    password
  }})
}
// 获取笔记分类列表
const getSortList = async () => {
  return await requests.get('/getsortlist')
}
// 上传笔记
const uploadNote = async (noteMessage) => {
  return await requests({
    url: '/uploadnote',
    method: 'post',
    data: noteMessage
  })
}

export {
  loginAdmin,
  getSortList,
  uploadNote
}