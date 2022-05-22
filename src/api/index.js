// 对API进行统一管理
import requests from "./request";

// 登录admin
const loginAdmin = async (name, password) => {
  return await requests({url: '/login', method: 'post', data: {
    name,
    password
  }})
}

// 登录模块
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
// 获取全部笔记(不包括内容)
const getAllNote = async () => {
  return await requests.get('/getallnote')
}
// 根据页数条数查询笔记
const getSomeNote = async (num, page) => {
  return await requests({
    method: 'post',
    url: '/getsomenote',
    data: {
      note_page: page,
      note_num: num
    }
  })
}
// 删除笔记
const deleteNote = async (id) => {
  return await requests({
    method: 'delete',
    url: '/deletenote',
    data: {
      id
    }
  })
}

// demo模块
// 获取全部demo信息
const getDemoAll = async () => {
  return await requests({
    method: 'post',
    url: '/getdemo',
    data: {
      getId: 0 
    }
  })
}
// 添加demo信息
const addDemo = async (addMessage) => {
  return requests({
    method: 'post',
    url: '/adddemo',
    data: {
      addMessage
    }
  })
}

// 个人介绍模块
// 获取个人所有信息
const getMyIntroduce = async (queryKey) => {
  return requests({
    method: 'post',
    url: '/getintroduce',
    data: {
      queryKey
    }
  })
}
// 修改个人全部信息
const updateAll = async (personalForm) => {
  return requests({
    method: 'post',
    url: '/updateallintro',
    data: {
      personalForm
    }
  })
}

export {
  loginAdmin,
  getSortList,
  uploadNote,
  getAllNote,
  deleteNote,
  getSomeNote,
  getDemoAll,
  addDemo,
  getMyIntroduce,
  updateAll
}