(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{498:function(e,r,t){"use strict";t.d(r,"f",(function(){return d})),t.d(r,"b",(function(){return l})),t.d(r,"d",(function(){return f})),t.d(r,"h",(function(){return m})),t.d(r,"e",(function(){return h})),t.d(r,"c",(function(){return O})),t.d(r,"a",(function(){return w})),t.d(r,"g",(function(){return P}));var n=t(27),o=t(127),c=t.n(o);function d(data){return data=c.a.parse(data),Object(n.a)({url:"login",method:"POST",data:data})}function l(data){return data=c.a.parse(data),Object(n.a)({url:"cellphoneCode",method:"POST",data:data})}function f(data){return data=c.a.parse(data),Object(n.a)({url:"emailCode",method:"POST",data:data})}function m(data){return data=c.a.parse(data),Object(n.a)({url:"verifyEmail",method:"POST",data:data})}function h(data){return data=c.a.parse(data),Object(n.a)({url:"findPassword",method:"POST",data:data})}function O(data){return data=c.a.parse(data),Object(n.a)({url:"changeCellphone",method:"POST",data:data})}function w(data){return data=c.a.parse(data),Object(n.a)({url:"amendPassword",method:"POST",data:data})}function P(data){return data=c.a.parse(data),Object(n.a)({url:"register",method:"POST",data:data})}},546:function(e,r,t){"use strict";t.r(r);t(73),t(17),t(50);var n=t(498);r.default={layout:"login",head:function(){return{title:"重置密码-天明商城-跨终端免费平台"}},data:function(){var e=this;return{ruleForm:{cellphone:"",password:"",code:"",rPassword:"",state:1},codename:"获取验证码",seconds:"",unit:"",loading:!1,codeDisabled:!1,rules:{cellphone:[{validator:function(e,r,t){if(""===r)t(new Error("请输入手机号"));else{/^1[3456789]\d{9}$/.test(r)||t(new Error("手机号格式有误")),t()}},trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:5,message:"密码长度必须大于5位",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"},{type:"number",message:"验证码必须为数字"}],rPassword:[{validator:function(r,t,n){""===t?n(new Error("请再次输入密码")):t!==e.ruleForm.password?n(new Error("两次输入密码不一致!")):n()},trigger:"blur"}]}}},methods:{getCode:function(){var e=this,r=this;Object(n.b)(this.ruleForm).then((function(t){e.seconds=60,e.codename="",e.unit="s",e.codeDisabled=!0,e.timer=setInterval((function(){r.seconds=r.seconds-1,0===r.seconds&&(clearInterval(r.timer),r.seconds="",r.codename="获取验证码",r.unit="",r.codeDisabled=!1)}),1e3),t.code&&(r.ruleForm.code=t.code)})).catch((function(){}))},submitForm:function(){var e=this;this.$refs.ruleForm.validate((function(r){r&&(e.loading=!0,Object(n.e)(e.ruleForm).then((function(){e.$message({message:"重置成功",type:"success"}),e.loading=!1,$nuxt.$router.replace("/pass/login")})).catch((function(){e.loading=!1})))}))}}}}}]);