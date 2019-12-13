import axios from 'axios'
import md5 from 'js-md5'
import { enableLoadingUrl } from './config'

let currentUrl = ''

axios.interceptors.response.use(
  (response) => {
    let loadingUrl = enableLoadingUrl.find(item => item === currentUrl)
    if (loadingUrl) {
      window.vm.$Spin.hide()
    }
    return response
  },
  (err) => {
    let mes = ''
    try {
      if (err && err.response) {
        switch (err.response.status) {
          case 400: err.message = '请求错误(400)'; break
          case 401: err.message = '未授权，请重新登录(401)'; break
          case 403: err.message = '拒绝访问(403)'; break
          case 404: err.message = '请求出错(404)'; break
          case 408: err.message = '请求超时(408)'; break
          case 500: err.message = '服务器错误(500)'; break
          case 501: err.message = '服务未实现(501)'; break
          case 502: err.message = '网络错误(502)'; break
          case 503: err.message = '服务不可用(503)'; break
          case 504: err.message = '网络超时(504)'; break
          case 505: err.message = 'HTTP版本不受支持(505)'; break
          default:
            err.message = `连接出错(${err.response.status})!`
            mes = err.message
        }
      } else {
        mes = '连接服务器失败!'
      }
    } catch (e) {
      mes = '连接服务器失败!'
    }
    console.error(mes)
    return Promise.reject(err)
  }
)

class API {
  constructor () {
    // 设置请求地址
    this.BASE_URL = 'http://cs.necoo.cn'
    // this.BASE_URL= 'http://erp-dev.zxylucky.com';
    // this.BASE_URL= 'http://erp.necoo.cn';
    this.MOCK_BASE_URL = 'http://47.99.94.15:9090/mock/19'
    // 设置头部信息
    this.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'x-oauth-user-id': 1,
      'x-oauth-user-name': 2,
      x_oauth_organization_id: 6,
      x_oauth_organization_name: 4
    }
    this.DuplicateArray = {} // 重复请求列表
  }

  // 公布是否是真实环境的方法
  IsRealenvironment () {
    return this.BASE_URL === 'http://erp.necoo.cn'
  }

  // 获取真实路径
  GetBaseUrl (url) {
    if (url) {
      if (new RegExp('/config').test(url)) {
        return this.BASE_URL // 'http://10.11.22.101:12000';
      }
      if (new RegExp('/pos').test(url)) {
        return this.BASE_URL // 'http://10.11.22.55:15000';
      }
      if (new RegExp('/member').test(url)) {
        return this.BASE_URL // 'http://10.11.22.81:19000';
      }
    }
    return this.BASE_URL
  }

  // 获取MOCK数据路径
  GetMockBaseUrl () {
    return this.MOCK_BASE_URL
  }

  GetUrl (options, api) {
    let URL = this.GetBaseUrl(api)
    let port = 15000
    if (options && options.port) {
      // URL=`${URL}:${options.port}`;
    } else {
      // URL=`${URL}:${port}`;
    }
    URL = `${URL}`
    if (options && options.isMock) {
      URL = this.GetMockBaseUrl()
    }
    return URL
  }

  SetHeaders (headers) {
    this.headers = headers
  }

  GetHeaders () {
    return this.headers
  }

  DealDuplicateRequest (url, params, options) {
    let timeout = options.timeout || 300
    let md5Obj = md5(url, params)
    let newTime = new Date().getTime()
    if (this.DuplicateArray[md5Obj]) {
      // 比较是否超时
      let oldtime = this.DuplicateArray[md5Obj]
      let diff = newTime - oldtime
      if (diff <= timeout) {
        this.DuplicateArray[md5Obj] = newTime
        return false
      }
    }
    this.DuplicateArray[md5Obj] = newTime
    return true
  }

  get (url, params, options) {
    currentUrl = url
    let loadingUrl = enableLoadingUrl.find(item => item === url)
    if (loadingUrl) {
      window.vm.$Spin.show({
        render: (h) => h('div', [
          h('Icon', {
            class: 'demo-spin-icon-load',
            props: {
              type: 'ios-loading',
              size: 48
            }
          }),
          h('div', 'Loading')
        ])
      })
    }
    if (options && options.duplicate && !this.DealDuplicateRequest(url, params, options)) {
      return new Promise((resolve, reject) => {
        console.log(`${url},请求重复！`)
        reject()
      })
    }
    let headers = {
      'X-Requested-With': 'XMLHttpRequest'
    }
    let BASE_URL = this.GetUrl(options)
    let fd = `jsonObject=${encodeURI(JSON.stringify(params))}`
    return axios({
      method: 'get',
      url: `${BASE_URL}${url}${fd}`,
      withCredentials: true, // 表示跨域请求时是否需要使用凭证
      headers: headers
    })
  }

  fail (t, callback) {
    console.log(this.BASE_URL)
    window.vm.$Modal.error({
      title: '错误',
      content: t.data.text,
      mask: true,
      onOk: () => {
        if (callback) {
          return callback(t)
        }
      }
    })
  }

  post (url, params, options) {
    let loadingUrl = enableLoadingUrl.find(item => item === url)
    if (loadingUrl) {
      currentUrl = url
      window.vm.$Spin.show({
        render: (h) => h('div', [
          h('Icon', {
            class: 'demo-spin-icon-load',
            props: {
              type: 'ios-loading',
              size: 48
            }
          }),
          h('div', 'Loading')
        ])
      })
    }
    if (options && options.duplicate && !this.DealDuplicateRequest(url, params, options)) {
      return new Promise((resolve, reject) => {
        console.log(`${url},请求重复！`)
        reject()
      })
    }
    let BASE_URL = this.GetUrl(options, url)
    let fd = new FormData()
    let headers = this.GetHeaders()
    fd.append('jsonObject', encodeURI(JSON.stringify(params)))
    if (options.accessInfo) {
      let h = options.accessInfo
      fd.append('accessInfo', JSON.stringify(options.accessInfo))
    }
    return axios({
      method: 'post',
      url: `${BASE_URL}${url}`,
      data: fd,
      withCredentials: true, // 表示跨域请求时是否需要使用凭证
      headers: headers
    })
  }

  /** 请求参数
   * url 请求具体地址  ：/config/dataSetStorage/runQuery
   * params 请求发送数据 {}
   * options   请求参数 {
   *                     method: 'post/get',  请求方法【必填】
   *                     port :15000 ,请求端口默认15000 【选填】
   *                     isMock :false,  是否请求YApi mock数据【选填】
   *                     duplicate : false,  是否阻止重复请求，防暴力点击【选填】
   *                     timeout :300 , 防暴力点击控制时间 （毫秒）【选填】
   *                     accessInfo :{}   ,附加验证信息【选填】
   *                     callback : ()=<{} ,统一错误处理支持回调函数 【选填】
   *                    }
   *
   * 废除 options.headers
   *      options.x_oauth_organization_id
   *      options.BaseUrl
   */
  request (url, params, options) {
    if (options && options.method === 'get') {
      return new Promise((resolve, reject) => {
        this.get(url, params, options).then(res => {
          if (res.data && (res.data.status === '00000')) {
            resolve(res.data)
          } else {
            reject()
            let cb = function () { }
            if (options.callback && typeof options.callback === 'function') {
              cb = options.callback
            }
            this.fail(res, cb)
          }
        })
      })
    } else if (options && options.method === 'post') {
      return new Promise((resolve, reject) => {
        this.post(url, params, options).then(res => {
          if (res.data && (res.data.status === '00000')) {
            resolve(res.data)
          } else {
            reject()
            let cb = function () { }
            if (options.callback && typeof options.callback === 'function') {
              cb = options.callback
            }
            this.fail(res, cb)
          }
        })
      })
    } else {
      return new Promise((resolve, reject) => {
        console.log('请完善请求参数：', options)
        reject()
      })
    }
  }
}

export default new API()
