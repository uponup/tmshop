(window.webpackJsonp=window.webpackJsonp||[]).push([[63,56],{498:function(e,t,r){"use strict";r.d(t,"f",(function(){return c})),r.d(t,"b",(function(){return d})),r.d(t,"d",(function(){return m})),r.d(t,"h",(function(){return f})),r.d(t,"e",(function(){return h})),r.d(t,"c",(function(){return v})),r.d(t,"a",(function(){return F})),r.d(t,"g",(function(){return k}));var o=r(27),n=r(127),l=r.n(n);function c(data){return data=l.a.parse(data),Object(o.a)({url:"login",method:"POST",data:data})}function d(data){return data=l.a.parse(data),Object(o.a)({url:"cellphoneCode",method:"POST",data:data})}function m(data){return data=l.a.parse(data),Object(o.a)({url:"emailCode",method:"POST",data:data})}function f(data){return data=l.a.parse(data),Object(o.a)({url:"verifyEmail",method:"POST",data:data})}function h(data){return data=l.a.parse(data),Object(o.a)({url:"findPassword",method:"POST",data:data})}function v(data){return data=l.a.parse(data),Object(o.a)({url:"changeCellphone",method:"POST",data:data})}function F(data){return data=l.a.parse(data),Object(o.a)({url:"amendPassword",method:"POST",data:data})}function k(data){return data=l.a.parse(data),Object(o.a)({url:"register",method:"POST",data:data})}},500:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return d})),r.d(t,"a",(function(){return m}));var o=r(27),n=r(127),l=r.n(n);function c(){return Object(o.a)({url:"user",method:"GET"})}function d(data){return data=l.a.parse(data),Object(o.a)({url:"user",method:"POST",data:data})}function m(data){return data=l.a.parse(data),Object(o.a)({url:"cancel",method:"POST",data:data})}},534:function(e,t,r){e.exports=r.p+"img/portrait.2250589.gif"},569:function(e,t,r){"use strict";r.r(t);var o=r(22),n=r(7),l=(r(49),r(11),r(28),r(31),r(73),r(500)),c=r(498),d=r(39);t.default={layout:"user",head:function(){return{title:"个人资料-个人中心"}},data:function(){return{disabled:!1,codename:"获取验证码",seconds:"",unit:"",uploadFile:{url:"https://api.uponup.cn/api/v1/app/uploadPictures",header:{"apply-secret":"base64:szoJ3mSx/5U7zOsJfU7s4pSahiwdh01x6badmz5FtCM=",Authorization:"Bearer "+Object(d.a)("token")},data:{type:1,size:2097152}},loading:!0,buttonLoading:!1,centerDialogVisible:!1,imgProgressPercent:0,imgProgress:!1,dialogType:"",dialogTitle:"",ruleForm:{},user:{},collectList:[],rules:{portrait:[{required:!0,message:"请上传头像",trigger:"blur"}],nickname:[{required:!0,message:"请设置昵称",trigger:"blur"}],email:[{required:!0,message:"请设置邮箱",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],code:[{required:!0,message:"请输入验证码",trigger:"blur"},{type:"number",message:"验证码必须为数字"}]}}},mounted:function(){this.getUser()},methods:{getUser:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([Object(l.b)(e.listQuery)]).then((function(t){var r=Object(o.a)(t,1)[0];e.user=r,e.loading=!1})).catch((function(t){e.loading=!1}));case 2:case"end":return t.stop()}}),t)})))()},submitForm:function(){var e=this;this.$refs.ruleForm.validate((function(t){t&&(e.buttonLoading=!0,"email"===e.dialogType?Object(c.h)(e.ruleForm).then((function(t){e.buttonLoading=!1,e.centerDialogVisible=!1,e.getUser(),e.$message({message:"保存成功",type:"success"})})).catch((function(){e.buttonLoading=!1})):Object(l.c)(e.ruleForm).then((function(t){e.buttonLoading=!1,e.centerDialogVisible=!1,e.getUser(),e.$message({message:"保存成功",type:"success"})})).catch((function(){e.buttonLoading=!1})))}))},modification:function(e){switch(this.centerDialogVisible=!0,this.dialogType=e,e){case"portrait":this.dialogTitle="修改头像",this.ruleForm={portrait:this.user.portrait};break;case"nickname":this.dialogTitle="修改昵称",this.ruleForm={nickname:this.user.nickname};break;case"email":this.dialogTitle="修改邮箱",this.ruleForm={email:this.user.email,code:""}}},handleAvatarSuccess:function(e,t){this.ruleForm.portrait=t.response,this.imgProgress=!1,this.imgProgressPercent=0},handleProgress:function(e,t){this.imgProgressPercent=e.percent},beforeAvatarUpload:function(e){var t=e.size/1024/1024<2;return-1===["image/jpeg","image/gif","image/png","image/bmp"].indexOf(e.type)?(this.$message.error("请上传正确的图片格式"),!1):(t||this.$message.error("上传头像图片大小不能超过 2MB!"),this.imgProgress=!0,t)},getCode:function(){var e=this,t=this;this.buttonLoading=!0,Object(c.d)(this.ruleForm).then((function(r){e.seconds=60,e.codename="",e.unit="s",e.disabled=!0,e.buttonLoading=!1,e.timer=setInterval((function(){t.seconds=t.seconds-1,0===t.seconds&&(clearInterval(t.timer),t.seconds="",t.codename="获取验证码",t.unit="",t.codeDisabled=!1)}),1e3),r.code&&(t.ruleForm.code=r.code)})).catch((function(){e.buttonLoading=!1}))}}}},570:function(e,t,r){var content=r(648);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(10).default)("51505046",content,!0,{sourceMap:!1})},647:function(e,t,r){"use strict";r(570)},648:function(e,t,r){var o=r(9)(!1);o.push([e.i,".portrait[data-v-2a0239d0]{cursor:pointer}.ruleForm[data-v-2a0239d0]{width:500px}.ruleForm .avatar-uploader-icon[data-v-2a0239d0]{line-height:190px;margin:auto}.ruleForm .code-button[data-v-2a0239d0]{position:absolute;right:5px;top:6px}.ruleForm a[data-v-2a0239d0]{position:relative;top:-1px}.user-title[data-v-2a0239d0]{color:#757575;font-weight:400;font-size:18px;margin-bottom:20px}",""]),e.exports=o},682:function(e,t,r){"use strict";r.r(t);var o=r(569).default,n=(r(647),r(6)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"box"},[o("div",{staticClass:"user-title"},[e._v("个人资料")]),e._v(" "),o("div",{staticClass:"padding-top-20"},[o("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"label-width":"200px"}},[o("el-form-item",{attrs:{label:"头像",prop:"portrait"}},[o("el-avatar",{attrs:{size:80}},[o("img",{staticClass:"portrait",attrs:{src:e.user.portrait?e.user.portrait:r(534)},on:{click:function(t){return e.modification("portrait")}}})])],1),e._v(" "),o("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[o("span",[e._v(e._s(e.user.nickname?e.user.nickname:"未设置"))]),e._v(" "),o("el-link",{attrs:{type:"primary",underline:!1},on:{click:function(t){return e.modification("nickname")}}},[e._v("修改")])],1),e._v(" "),o("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[o("span",[e._v(e._s(e.user.email?e.user.email:"未绑定"))]),e._v(" "),o("el-link",{attrs:{type:"primary",underline:!1},on:{click:function(t){return e.modification("email")}}},[e._v("修改")])],1)],1)],1),e._v(" "),o("el-dialog",{attrs:{title:e.dialogTitle,visible:e.centerDialogVisible,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[o("el-form",{ref:"ruleForm",staticClass:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},["portrait"===e.dialogType?[o("el-form-item",{attrs:{label:"头像",prop:"portrait"}},[o("el-upload",{staticClass:"avatar-uploader",attrs:{"show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload,"on-progress":e.handleProgress,action:e.uploadFile.url,headers:e.uploadFile.header,data:e.uploadFile.data}},[e.imgProgress?o("span",[o("el-progress",{staticClass:"progress-img",attrs:{percentage:e.imgProgressPercent,type:"circle"}})],1):o("span",[e.ruleForm.portrait?o("img",{staticClass:"avatar",attrs:{src:e.ruleForm.portrait}}):o("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),e._v(" "),o("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png/gif文件，且不超过2M")])])],1)]:"nickname"===e.dialogType?[o("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[o("el-input",{attrs:{maxlength:"30",placeholder:"请输入昵称",clearable:""},model:{value:e.ruleForm.nickname,callback:function(t){e.$set(e.ruleForm,"nickname",t)},expression:"ruleForm.nickname"}})],1)]:[o("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[o("el-input",{attrs:{maxlength:"255",placeholder:"请输入邮箱",clearable:""},model:{value:e.ruleForm.email,callback:function(t){e.$set(e.ruleForm,"email",t)},expression:"ruleForm.email"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"验证码",prop:"code"}},[o("el-input",{attrs:{maxlength:"5",placeholder:"请输入验证码",clearable:""},model:{value:e.ruleForm.code,callback:function(t){e.$set(e.ruleForm,"code",t)},expression:"ruleForm.code"}}),e._v(" "),o("el-button",{staticClass:"code-button",attrs:{loading:e.buttonLoading,type:"danger",round:"",size:"mini",disabled:e.disabled},on:{click:e.getCode}},[e._v(e._s(e.codename+e.seconds+e.unit))])],1)]],2),e._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{loading:e.buttonLoading},on:{click:function(t){e.centerDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),o("el-button",{attrs:{loading:e.buttonLoading,type:"danger"},on:{click:e.submitForm}},[e._v("确 定")])],1)],1)],1)}),[],!1,null,"2a0239d0",null);t.default=component.exports}}]);