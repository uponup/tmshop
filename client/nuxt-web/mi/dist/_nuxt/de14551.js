(window.webpackJsonp=window.webpackJsonp||[]).push([[14,16],{583:function(e,t,n){"use strict";n.r(t);n(298),n(95);var r=n(39);t.default={name:"InsertImage",props:{imgData:{type:Object,default:function(){return{type:1,size:2097152,specification:[80,150]}}},format:{type:Array,default:function(){return["image/jpeg","image/gif","image/png","image/bmp"]}},limit:{type:Number,default:5},fileList:{type:Array,default:function(){return[]}}},data:function(){return{url:"https://api.uponup.cn/api/v1/app/uploadPictures",imgHeaders:{"apply-secret":"base64:szoJ3mSx/5U7zOsJfU7s4pSahiwdh01x6badmz5FtCM=",Authorization:"Bearer "+Object(r.a)("token")}}},watch:{},mounted:function(){},methods:{handleSuccessList:function(e,t,n){this.$emit("getFile",n)},handleRemove:function(e,t){this.$emit("getFile",t)},handleExceed:function(e,t){this.$message.warning("当前限制选择 ".concat(this.limit," 个文件，本次选择了 ").concat(e.length," 个文件，共选择了 ").concat(e.length+t.length," 个文件"))},beforeUploadList:function(e){var t=e.size<this.imgData.size;return-1===this.format.indexOf(e.type)?(this.$message.error("请上传正确的文件格式"),!1):(t||this.$message.error("上传文件大小不能超过 "+e.size/1024/1024+"MB!"),t)}}}},584:function(e,t,n){var content=n(664);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("67fa09cc",content,!0,{sourceMap:!1})},663:function(e,t,n){"use strict";n(584)},664:function(e,t,n){var r=n(9)(!1);r.push([e.i,"",""]),e.exports=r},690:function(e,t,n){"use strict";n.r(t);var r=n(583).default,o=(n(663),n(6)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-upload",{attrs:{limit:e.limit,action:e.url,headers:e.imgHeaders,"on-success":e.handleSuccessList,"on-remove":e.handleRemove,"before-upload":e.beforeUploadList,data:e.imgData,"file-list":e.fileList,"on-exceed":e.handleExceed,multiple:"","list-type":"picture-card"}},[n("i",{staticClass:"el-icon-plus",attrs:{slot:"default"},slot:"default"})])],1)}),[],!1,null,"7b9a9e52",null);t.default=component.exports}}]);