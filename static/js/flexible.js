/**
 * Created by zxy on 2017/6/28.
 */
!(function () {
  var a = "@charset \"utf-8\";*{margin:0;padding:0;}body,div,p,a,li,ul,ol,span,input,dl,dd,dt,form,h1,h2,h3,h4,h5,h6,select,pre,img,textarea{padding:0;margin:0;outline:none;border:0 none;text-decoration:none;-webkit-tap-highlight-color:rgba(0,0,0,0);}html{-webkit-text-size-adjust:none;-ms-text-size-adjust:none;}body{-webkit-text-size-adjust:none;-ms-text-size-adjust:none;}html,body{font-family:'Arial','Microsoft Yahei','Simsun';margin:0 auto;}form{display:inline;}ul,ol{list-style:none;}a{text-decoration:none;color:#808080;}a:hover,a:active,a:focus{color:#333;text-decoration:none;}a:active{color:#333;}em,i{font-style:normal;}u{text-decoration:none;color:#65C417;}img{border:0;display:block;}button,input,select,textarea{vertical-align:middle;outline:none;font-family:\"Microsoft Yahei\";}input[type=\"submit\"],input[type=\"reset\"],input[type=\"button\"],input{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:0;}textarea{resize:none;}button,input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{cursor:pointer;-webkit-appearance:button;-moz-appearance:button;}input:focus:-moz-placeholder,input:focus::-webkit-input-placeholder{color:transparent;}button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0;}table{border-collapse:collapse;border-spacing:0;}header,footer,article,section,nav,menu,hgroup{display:block;clear:both;}",
    b = document.createElement('style')
  if (document.getElementsByTagName('head')[0].appendChild(b), b.styleSheet) b.styleSheet.disabled || (b.styleSheet.cssText = a); else {
    try {
      b.innerHTML = a
    } catch (c) {
      b.innerText = a
    }
  }
}())
!(function (a, b) {
  function c () {
    var b = f.getBoundingClientRect().width
    b / i > 540 && (b = 540 * i)
    var c = b / 7.5
    f.style.fontSize = c + 'px', k.rem = a.rem = c
  }

  var d, e = a.document, f = e.documentElement, g = e.querySelector('meta[name="viewport"]'),
    h = e.querySelector('meta[name="flexible"]'), i = 0, j = 0, k = b.flexible || (b.flexible = {})
  if (g) {
    var l = g.getAttribute('content').match(/initial\-scale=([\d\.]+)/)
    l && (j = parseFloat(l[1]), i = parseInt(1 / j))
  } else if (h) {
    var m = h.getAttribute('content')
    if (m) {
      var n = m.match(/initial\-dpr=([\d\.]+)/), o = m.match(/maximum\-dpr=([\d\.]+)/)
      n && (i = parseFloat(n[1]), j = parseFloat((1 / i).toFixed(2))), o && (i = parseFloat(o[1]), j = parseFloat((1 / i).toFixed(2)))
    }
  }
  if (!i && !j) {
    var p = (a.navigator.appVersion.match(/android/gi), a.navigator.appVersion.match(/iphone/gi)),
      q = a.devicePixelRatio
    i = p ? q >= 3 && (!i || i >= 3) ? 3 : q >= 2 && (!i || i >= 2) ? 2 : 1 : 1, j = 1 / i
  }
  if (f.setAttribute('data-dpr', i), !g) {
    if (g = e.createElement('meta'), g.setAttribute('name', 'viewport'), g.setAttribute('content', 'initial-scale=' + j + ', maximum-scale=' + j + ', minimum-scale=' + j + ', user-scalable=no'), f.firstElementChild) f.firstElementChild.appendChild(g); else {
      var r = e.createElement('div')
      r.appendChild(g), e.write(r.innerHTML)
    }
  }
  a.addEventListener('resize', function () {
    clearTimeout(d), d = setTimeout(c, 300)
  }, !1), a.addEventListener('pageshow', function (a) {
    a.persisted && (clearTimeout(d), d = setTimeout(c, 300))
  }, !1), e.readyState === 'complete' ? e.body.style.fontSize = 12 * i + 'px' : e.addEventListener('DOMContentLoaded', function () {
    e.body.style.fontSize = 12 * i + 'px'
  }, !1), c(), k.dpr = a.dpr = i, k.refreshRem = c, k.rem2px = function (a) {
    var b = parseFloat(a) * this.rem
    return typeof a === 'string' && a.match(/rem$/) && (b += 'px'), b
  }, k.px2rem = function (a) {
    var b = parseFloat(a) / this.rem
    return typeof a === 'string' && a.match(/px$/) && (b += 'rem'), b
  }
}(window, window.lib || (window.lib = {})))
