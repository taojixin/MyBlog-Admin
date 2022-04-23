// 对API进行统一管理
import requests from "./request";

const loginAdmin = (name, password) => {
  return requests({url: '/login', method: 'post', data: {
    name,
    password
  }})
}

export {
  loginAdmin
}