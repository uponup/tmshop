(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{520:function(t,n,e){"use strict";e.d(n,"d",(function(){return l})),e.d(n,"c",(function(){return d})),e.d(n,"a",(function(){return f})),e.d(n,"b",(function(){return h}));var c=e(27),r=e(127),o=e.n(r);function l(t){return Object(c.a)({url:"collect",method:"GET",params:t})}function d(t){return Object(c.a)({url:"collect/"+t,method:"GET"})}function f(data){return data=o.a.parse(data),Object(c.a)({url:"collect",method:"POST",data:data})}function h(t){return Object(c.a)({url:"collect/destroy/"+t,method:"POST"})}},564:function(t,n,e){"use strict";e.r(n);var c=e(22),r=e(7),o=(e(49),e(11),e(28),e(31),e(520));n.default={layout:"user",head:function(){return{title:"我的收藏-个人中心"}},data:function(){return{loading:!0,collectList:[],total:0,listQuery:{limit:10,page:1,sort:"-created_at"}}},mounted:function(){this.getList()},methods:{getList:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.loading=!0,n.next=3,Promise.all([Object(o.d)(t.listQuery)]).then((function(n){var e=Object(c.a)(n,1)[0];t.collectList=e.data,t.total=e.total,t.loading=!1})).catch((function(n){t.loading=!1}));case 3:case"end":return n.stop()}}),n)})))()},destroy:function(t){var n=this;this.$confirm("是否确认删除？","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then((function(){Object(o.b)(t).then((function(t){n.handleFilter(),n.$message({message:"删除成功",type:"success"})})).catch((function(){}))})).catch((function(){}))},handleFilter:function(){this.listQuery.page=1,this.getList()}}}}}]);