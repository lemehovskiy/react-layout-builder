(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){},31:function(e,t,n){e.exports=n(57)},55:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),s=n(25),c=n(9),r=n(14),a=n(8),l=n(29),u=n(30),d=n.n(u),h=n(2);function p(e,t){return Object.assign({},e,t)}function b(e,t,n){return e.map(function(e){return e.id!==t?e:n(e)})}var j={},O={resizeDirection:null},y=function(e){return function(t){t({type:"resizeTool/SET_RESIZE_DIRECTION",payload:{direction:e}})}},f=Object(a.c)({svgRender:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0,n=[];switch(t.type){case"svgRender/HANDLER_OBJECT_INDEX":return Object(h.a)({},e,{handlerObjectIndex:t.index});case"svgRender/UPDATE_EDIT_MODE":return Object(h.a)({},e,{editMode:t.mode});case"svgRender/SET_MOUSE_START_POSITION":return Object(h.a)({},e,{mouseStartPosition:{x:t.x,y:t.y}});case"svgRender/SELECT_OBJECTS":return Object(h.a)({},e,{selectedObjectsId:e.selectedObjectsId.concat(t.payload.ids)});case"svgRender/DESELECT_ALL_OBJECTS":return Object(h.a)({},e,{selectedObjectsId:[]});case"svgRender/DESELECT_ALL_OBJECTS_EXEPT":return Object(h.a)({},e,{selectedObjectsId:[t.payload]});case"svgRender/MOVE_OBJECT":return n=e.objects.map(function(e){return e.id===t.payload.id?Object(h.a)({},e,{x:t.payload.x,y:t.payload.y}):e}),Object(h.a)({},e,{objects:n});case"svgRender/SET_OBJECT_EDIT_START_POSITION":return n=e.objects.map(function(n){return e.selectedObjectsId.includes(n.id)?Object(h.a)({},n,{editStartPositionOffset:{x:t.payload.x-n.x,y:t.payload.y-n.y}}):n}),Object(h.a)({},e,{objects:n});case"svgRender/RESIZE_OBJECT":return n=b(e.objects,t.payload.id,function(e){return p(e,{x:t.payload.x,y:t.payload.y,width:t.payload.width,height:t.payload.height})}),p(e,{objects:n});case"svgRender/SET_OBJECT_MODE":return n=e.objects.map(function(e){return e.id===t.payload.id?Object(h.a)({},e,{mode:t.payload.mode}):e}),Object(h.a)({},e,{objects:n});case"svgRender/SAVE_EDIT_OBJECT_INIT_STATE":var i=null;return e.objects.forEach(function(e){e.id===t.payload.id&&(i=e)}),Object(h.a)({},e,{editObjectInitState:i});case"svgRender/RESET_OBJECT_MODE":return n=e.objects.map(function(e){return Object(h.a)({},e,{mode:null})}),Object(h.a)({},e,{objects:n});case"svgRender/ROTATE_OBJECT":return n=b(e.objects,t.payload.id,function(e){return p(e,{rotate:t.payload.rotate})}),p(e,{objects:n});case"textTool/SET_VERTICAL_ALIGN":return n=e.objects.map(function(n){return e.selectedObjectsId.includes(n.id)?Object(h.a)({},n,{textProps:Object(h.a)({},n.textProps,{verticalAlign:t.payload.value})}):n}),Object(h.a)({},e,{objects:n});case"textTool/SET_TEXT_ALIGN":return console.log("222"),n=e.objects.map(function(n){return e.selectedObjectsId.includes(n.id)?Object(h.a)({},n,{textProps:Object(h.a)({},n.textProps,{textAlign:t.payload.value})}):n}),Object(h.a)({},e,{objects:n});default:return e}},resizeTool:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"resizeTool/SET_RESIZE_DIRECTION":return Object(h.a)({},e,{resizeDirection:t.payload.direction});default:return e}}}),v=d()(),g=[l.a,Object(r.routerMiddleware)(v)],E=a.d.apply(void 0,[a.a.apply(void 0,g)].concat([])),x=Object(a.e)(Object(r.connectRouter)(v)(f),{svgRender:{editMode:null,mousePosition:{x:null,y:null},mouseStartPosition:{x:null,y:null},selectedObjectsId:[],handlerObjectIndex:null,objects:[{id:1,width:163,height:84,rotate:0,strokeWidth:0,fill:"rgba(0, 123, 255, 1)",radius:"0",type:"rectangle",x:17,y:15,text:"Lorem ipsum \n dolor",textProps:{textAlign:"center",verticalAlign:"top"}},{id:2,width:200,height:300,rotate:0,strokeWidth:0,fill:"rgba(0, 123, 255, 1)",radius:"0",type:"rectangle",x:200,y:50,text:"Lorem ipsum \n dolor",textProps:{textAlign:"right",verticalAlign:"bottom"}}],editObjectInitState:null}},E),m=n(3),T=n(4),S=n(6),M=n(5),_=n(7),w=function(e){return function(t){t({type:"svgRender/HANDLER_OBJECT_INDEX",index:e})}},k=function(e){return function(t){t({type:"svgRender/UPDATE_EDIT_MODE",mode:e})}},I=function(e,t){return function(n){n({type:"svgRender/SET_MOUSE_START_POSITION",x:e,y:t})}},R=function(e){return function(t){t({type:"svgRender/SELECT_OBJECTS",payload:{ids:e}})}},P=function(){return function(e){e({type:"svgRender/DESELECT_ALL_OBJECTS"})}},C=function(e){return function(t){t({type:"svgRender/DESELECT_ALL_OBJECTS_EXEPT",payload:e})}},D=function(e,t,n){return function(i){i({type:"svgRender/MOVE_OBJECT",payload:{id:e,x:t,y:n}})}},A=function(e,t){return function(n){n({type:"svgRender/SET_OBJECT_EDIT_START_POSITION",payload:{x:e,y:t}})}},z=function(e){return function(t){t({type:"svgRender/RESIZE_OBJECT",payload:e})}},L=function(e,t){return function(n){n({type:"svgRender/SET_OBJECT_MODE",payload:{id:e,mode:t}})}},B=function(e){return function(t){t({type:"svgRender/SAVE_EDIT_OBJECT_INIT_STATE",payload:{id:e}})}},J=function(){return function(e){e({type:"svgRender/RESET_OBJECT_MODE"})}},N=function(e){var t=e.id,n=e.rotate;return function(e){e({type:"svgRender/ROTATE_OBJECT",payload:{id:t,rotate:n}})}},X=function(e){return console.log(111),function(t){t({type:"textTool/SET_TEXT_ALIGN",payload:{value:e}})}},V=function(e){return function(t){t({type:"textTool/SET_VERTICAL_ALIGN",payload:{value:e}})}},U=function(e){function t(e){return Object(m.a)(this,t),Object(S.a)(this,Object(M.a)(t).call(this,e))}return Object(_.a)(t,e),Object(T.a)(t,[{key:"onMouseUp",value:function(e){var t=this.props.mouseStartPosition.x!==e.clientX||this.props.mouseStartPosition.y!==e.clientY;e.shiftKey||t||this.props.deselectAllObjectsExept(this.props.object.id)}},{key:"onMouseDown",value:function(e){e.shiftKey||this.props.selectedObjectsId.includes(this.props.object.id)||this.props.deselectAllObjects(),this.props.selectObjects([this.props.object.id]),this.props.setMouseStartPosition(e.clientX,e.clientY),this.props.setObjectEditStartPosition(e.clientX,e.clientY),this.props.updateEditMode("drag")}},{key:"render",value:function(){return o.a.cloneElement(this.props.children,{onMouseUp:this.onMouseUp.bind(this),onMouseDown:this.onMouseDown.bind(this),object:this.props.object,selectedObjectsId:this.props.selectedObjectsId})}}]),t}(o.a.Component),Y=Object(c.connect)(function(e){return{mouseStartPosition:e.svgRender.mouseStartPosition}},function(e){return Object(a.b)({updateHandlerObjectIndex:w,updateEditMode:k,setMouseStartPosition:I,selectObjects:R,deselectAllObjects:P,setObjectEditStartPosition:A,deselectAllObjectsExept:C},e)})(U),W=function(e){function t(){return Object(m.a)(this,t),Object(S.a)(this,Object(M.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){return o.a.createElement("g",null,o.a.createElement("rect",{strokeWidth:"1",stroke:"#6298F9",fill:"rgba(98, 152, 249, 0.3)",opacity:"0.3",x:this.props.selectToolPosition.x,y:this.props.selectToolPosition.y,width:this.props.selectToolSize.width,height:this.props.selectToolSize.height})," : ''}")}}]),t}(i.Component),G=null,H=null,Z={};function F(e,t,n){return G=e.y-n.y,H=t.height+G,Z.y=H>0?t.y:t.y-Math.abs(H),Z.height=Math.abs(H),Z}function K(e,t,n){return G=e.y-n.y,H=t.height-G,Z.y=H>0?t.y-(H-t.height):t.y+t.height,Z.height=Math.abs(H),Z}function q(e,t,n){return G=e.x-n.x,H=t.width+G,Z.x=H<0?t.x+H:t.x,Z.width=Math.abs(H),Z}function $(e,t,n){return G=e.x-n.x,H=t.width-G,Z.x=H>0?t.x+G:t.x+t.width,Z.width=Math.abs(H),Z}var Q=function(e){var t=e.mouse,n=e.mouseStartPosition,i=e.object;return-1*(180*Math.atan2(n.x+(i.width||0)/2-t.x,n.y+(i.height||0)/2-t.y)/Math.PI-45)},ee=function(e){var t=e.rotate,n=e.x,i=e.y,o=e.width,s=e.height;if(t){var c=o/2+n,r=s/2+i;return"rotate(".concat(t," ").concat(c," ").concat(r,")")}},te=function(e){return{transform:ee(e)}},ne=function(e){function t(e){return Object(m.a)(this,t),Object(S.a)(this,Object(M.a)(t).call(this,e))}return Object(_.a)(t,e),Object(T.a)(t,[{key:"onRotateMouseDown",value:function(e){this.props.setObjectMode(this.props.object.id,"rotate"),this.props.updateEditMode("rotate"),this.props.setMouseStartPosition(e.clientX,e.clientY)}},{key:"onDotMouseDown",value:function(e){this.props.setObjectMode(this.props.object.id,"resize"),this.props.updateEditMode("resize"),this.props.saveEditObjectInitState(this.props.object.id),this.props.setMouseStartPosition(e.clientX,e.clientY),this.props.setResizeDirection(e.target.getAttribute("name"))}},{key:"render",value:function(){var e=this,t=this.props.object,n={dots:[{name:"nw",x:t.x,y:t.y},{name:"n",x:t.x+t.width/2,y:t.y},{name:"ne",x:t.x+t.width,y:t.y},{name:"w",x:t.x,y:t.y+t.height/2},{name:"e",x:t.x+t.width,y:t.y+t.height/2},{name:"sw",x:t.x,y:t.y+t.height},{name:"s",x:t.x+t.width/2,y:t.y+t.height},{name:"se",x:t.x+t.width,y:t.y+t.height}]},i=t.x+t.width/2-6,s=t.y-20;return o.a.createElement("g",te(t),o.a.createElement("rect",{width:t.width,height:t.height,x:t.x,y:t.y,fill:"none",stroke:"#00a8ff",strokeDasharray:"3 3",pointerEvents:"none"}),n.dots.map(function(t){return o.a.createElement("circle",{key:t.name,name:t.name,cx:t.x,cy:t.y,fill:"#34B7EF",r:"5",style:{cursor:t.name+"-resize"},onMouseDown:e.onDotMouseDown.bind(e)})}),o.a.createElement("path",{cursor:"pointer",onMouseDown:e.onRotateMouseDown.bind(e),transform:"translate("+i+" "+s+")",stroke:"rgb(0, 0, 0, 0)",strokeWidth:"5",d:"M5.1,0.2L4.4,0.8c-0.1,0.1-0.1,0.2,0,0.3l1.1,1.1C4.2,2.1,2.8,2.5,1.7,3.5c-2,1.8-2.1,4.9-0.3,6.8 c1.8,2,4.8,2.1,6.8,0.3c0.9-0.8,1.4-1.9,1.5-3.1c0-0.1-0.1-0.3-0.2-0.3l-0.9,0c-0.1,0-0.2,0.1-0.2,0.2C8.3,8.2,7.9,9,7.2,9.6 c-1.4,1.3-3.6,1.2-4.8-0.2C1.1,8,1.2,5.8,2.6,4.5c0.9-0.8,2-1.1,3.1-0.8L4.2,5c-0.1,0.1-0.1,0.2,0,0.3L4.8,6c0.1,0.1,0.2,0.1,0.3,0 L8,3.4c0.1-0.1,0.1-0.2,0-0.3L5.4,0.2C5.3,0.1,5.2,0.1,5.1,0.2z"}))}}]),t}(o.a.Component),ie=Object(c.connect)(null,function(e){return Object(a.b)({resizeObject:z,setMouseStartPosition:I,updateEditMode:k,setObjectMode:L,saveEditObjectInitState:B,setResizeDirection:y},e)})(ne);var oe=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(S.a)(this,Object(M.a)(t).call(this,e))).state={height:0,width:0},n}return Object(_.a)(t,e),Object(T.a)(t,[{key:"onResize",value:function(){var e=this.divElement.clientHeight,t=this.divElement.clientWidth;this.setState({height:e,width:t})}},{key:"componentDidUpdate",value:function(e){e.object.width===this.props.object.width&&e.object.height===this.props.object.height||this.onResize()}},{key:"componentDidMount",value:function(){this.onResize()}},{key:"render",value:function(){var e=this;return o.a.createElement("g",null,o.a.createElement("foreignObject",Object.assign({},te(this.props.object),function(e,t){var n=0;switch(e.textProps.verticalAlign){case"top":n=e.y;break;case"middle":n=e.y+e.height/2-t.height/2;break;case"bottom":n=e.y+e.height-t.height;break;default:n=e.y+e.height/2-t.height/2}return{width:e.width,height:t.height,overflow:"visible",x:e.x,y:n}}(this.props.object,this.state)),o.a.createElement("div",Object.assign({},{style:{textAlign:this.props.object.textProps.textAlign}},{ref:function(t){return e.divElement=t}}),o.a.createElement("div",{xmlns:"http://www.w3.org/1999/xhtml",style:{display:"inline-block"}},this.props.object.text.split("\n").map(function(e,t){return o.a.createElement("div",{key:t},e)})))))}}]),t}(o.a.Component),se=Object(c.connect)(null,null)(oe),ce=function(e){function t(e){return Object(m.a)(this,t),Object(S.a)(this,Object(M.a)(t).call(this,e))}return Object(_.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){return o.a.createElement("g",null,this.props.object.text?o.a.createElement(se,{object:this.props.object}):"",o.a.createElement("rect",Object.assign({},te(this.props.object),{width:this.props.object.width,height:this.props.object.height,x:this.props.object.x,y:this.props.object.y,pointerEvents:"visible",cursor:"move",fill:"none",strokeWidth:"1",stroke:"black",onMouseDown:this.props.onMouseDown,onMouseUp:this.props.onMouseUp})),this.props.selectedObjectsId.includes(this.props.object.id)?o.a.createElement(ie,{object:this.props.object}):"")}}]),t}(o.a.Component),re=Object(c.connect)(null,null)(ce),ae=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(S.a)(this,Object(M.a)(t).call(this,e))).state={selectToolActive:!1,selectToolStartPoint:{x:null,y:null},mousePosition:{x:null,y:null},svgOffset:{x:null,y:null},selectToolSize:{x:null,y:null},selectToolPosition:{x:null,y:null}},n}return Object(_.a)(t,e),Object(T.a)(t,[{key:"componentDidMount",value:function(){var e=this.refs.svgRender.getBoundingClientRect();this.setState({svgOffset:{x:e.x,y:e.y}})}},{key:"onMouseMove",value:function(e){var t=this;"drag"===this.props.editMode?this.props.selectedObjects.forEach(function(n){t.props.moveObject(n.id,e.clientX-n.editStartPositionOffset.x,e.clientY-n.editStartPositionOffset.y)}):"resize"===this.props.editMode?this.props.selectedObjects.forEach(function(n){if("resize"===n.mode){var i=function(e,t,n,i,o){var s=o;switch(t){case"s":s=Object.assign(s,F(e,n,i));break;case"n":s=Object.assign(s,K(e,n,i));break;case"e":s=Object.assign(s,q(e,n,i));break;case"w":s=Object.assign(s,$(e,n,i));break;case"ne":s=Object.assign(s,K(e,n,i)),s=Object.assign(s,q(e,n,i));break;case"se":s=Object.assign(s,F(e,n,i)),s=Object.assign(s,q(e,n,i));break;case"sw":s=Object.assign(s,F(e,n,i)),s=Object.assign(s,$(e,n,i));break;case"nw":s=Object.assign(s,K(e,n,i)),s=Object.assign(s,$(e,n,i))}return s}({x:e.clientX,y:e.clientY},t.props.resizeToolDirection,t.props.editObjectInitState,t.props.mouseStartPosition,{x:n.x,y:n.y,width:n.width,height:n.height});t.props.resizeObject(Object(h.a)({id:n.id},i))}}):"rotate"===this.props.editMode&&this.props.selectedObjects.forEach(function(n){if("rotate"===n.mode){var i={x:e.clientX,y:e.clientY},o=t.props.mouseStartPosition;t.props.rotateObject({id:n.id,rotate:Q({mouse:i,mouseStartPosition:o,object:n})})}}),"selectTool"===this.props.editMode&&this.updateSelectToolData({x:e.clientX,y:e.clientY})}},{key:"onMouseUp",value:function(e){"selectTool"===this.props.editMode?this.handleSelectTool():"resize"===this.props.editMode?this.props.resetObjectMode():"rotate"===this.props.editMode&&this.props.resetObjectMode(),this.props.updateEditMode(null)}},{key:"onMouseDown",value:function(e){e.target===e.currentTarget&&(this.setSelectStartPosition({x:e.clientX,y:e.clientY}),this.updateSelectToolData({x:e.clientX,y:e.clientY}),this.props.updateEditMode("selectTool"))}},{key:"setSelectStartPosition",value:function(e){this.setState({selectToolStartPoint:{x:e.x-this.state.svgOffset.x,y:e.y-this.state.svgOffset.y}})}},{key:"handleSelectTool",value:function(){var e=this;this.resetSelectToolData();var t=[];this.props.objects.forEach(function(n){var i,o;i={x:n.x,y:n.y,width:n.width,height:n.height},o={x:e.state.selectToolPosition.x,y:e.state.selectToolPosition.y,width:e.state.selectToolSize.width,height:e.state.selectToolSize.height},i.x+i.width>=o.x&&i.x<=o.x+o.width&&i.y+i.height>=o.y&&i.y<=o.y+o.height&&t.push(n.id)}),this.props.deselectAllObjects(),t.length&&this.props.selectObjects(t)}},{key:"resetSelectToolData",value:function(){this.setState({selectToolStartPoint:{x:null,y:null},selectToolSize:{x:null,y:null}})}},{key:"updateSelectToolData",value:function(e){if(null!==this.state.selectToolStartPoint.x){var t,n,i,o=(t=this.state.selectToolStartPoint,n=e,i=this.state.svgOffset,{width:Math.abs(n.x-i.x-t.x),height:Math.abs(n.y-i.y-t.y)});this.setState({selectToolSize:o});var s=function(e,t,n,i){return{x:t.x-n.x>e.x?e.x:e.x-i.width,y:t.y-n.y>e.y?e.y:e.y-i.height}}(this.state.selectToolStartPoint,e,this.state.svgOffset,o);this.setState({selectToolPosition:s})}}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container"},o.a.createElement("svg",{className:"svgRender",ref:"svgRender",width:"800",height:"500",onMouseMove:this.onMouseMove.bind(this),onMouseUp:this.onMouseUp.bind(this),onMouseDown:this.onMouseDown.bind(this)},this.props.objects.map(function(t){var n=null;switch(t.type){case"rectangle":n=o.a.createElement(re,null);break;case"text":n=o.a.createElement(se,null)}return o.a.createElement(Y,{key:t.id,object:t,selectedObjectsId:e.props.selectedObjectsId},n)}),"selectTool"===this.props.editMode?o.a.createElement(W,{selectToolPosition:this.state.selectToolPosition,selectToolSize:this.state.selectToolSize}):""))}}]),t}(o.a.Component),le=Object(c.connect)(function(e){var t=e.svgRender,n=e.resizeTool;return{selectedObjects:t.objects.filter(function(e){return t.selectedObjectsId.includes(e.id)}),selectedObjectsId:t.selectedObjectsId,objects:t.objects,editMode:t.editMode,mouseStartPosition:t.mouseStartPosition,editObjectInitState:t.editObjectInitState,resizeToolDirection:n.resizeDirection}},function(e){return Object(a.b)({updateEditMode:k,deselectAllObjects:P,moveObject:D,selectObjects:R,resizeObject:z,resetObjectMode:J,rotateObject:N},e)})(ae),ue=(n(23),[{value:"top",label:"Top"},{value:"middle",label:"Middle"},{value:"bottom",label:"Bottom"}]),de=function(e){function t(){return Object(m.a)(this,t),Object(S.a)(this,Object(M.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(T.a)(t,[{key:"onClick",value:function(e){this.props.setVerticalAlign(e.target.value)}},{key:"render",value:function(){var e=this,t=this;return o.a.createElement("div",null,"Text Align",o.a.createElement("div",{className:"vertical-align-btn-group"},ue.map(function(n){return o.a.createElement("button",{className:t.props.activeValue===n.value?"vertical-align-btn-group__btn vertical-align-btn-group__btn_active":"vertical-align-btn-group__btn",key:n.value,value:n.value,onClick:t.onClick.bind(e)},n.label)})))}}]),t}(o.a.Component),he=[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"}],pe=function(e){function t(){return Object(m.a)(this,t),Object(S.a)(this,Object(M.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(T.a)(t,[{key:"onClick",value:function(e){this.props.setTextAlign(e.target.value)}},{key:"render",value:function(){var e=this,t=this;return o.a.createElement("div",null,"Text Align",o.a.createElement("div",{className:"text-align-btn-group"},he.map(function(n){return o.a.createElement("button",{className:t.props.activeValue===n.value?"text-align-btn-group__btn text-align-btn-group__btn_active":"text-align-btn-group__btn",key:n.value,value:n.value,onClick:t.onClick.bind(e)},n.label)})))}}]),t}(o.a.Component);Object.byString=function(e,t){for(var n=(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),i=0,o=n.length;i<o;++i){var s=n[i];if(!(s in e))return;e=e[s]}return e};var be=function(e,t){var n=[];return e.length>0&&e.forEach(function(e){n.push(Object.byString(e,t))}),n.every(function(e,t,n){return e===n[0]}),!!n.every(function(e,t,n){return e===n[0]})&&n[0]},je=function(e){function t(){return Object(m.a)(this,t),Object(S.a)(this,Object(M.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(de,{setVerticalAlign:this.props.setVerticalAlign.bind(this),activeValue:be(this.props.selectedObjects,"textProps.verticalAlign")}),o.a.createElement(pe,{setTextAlign:this.props.setTextAlign.bind(this),activeValue:be(this.props.selectedObjects,"textProps.textAlign")}))}}]),t}(o.a.Component),Oe=Object(c.connect)(function(e){var t=e.svgRender;return{selectedObjects:t.objects.filter(function(e){return t.selectedObjectsId.includes(e.id)})}},function(e){return Object(a.b)({setTextAlign:X,setVerticalAlign:V},e)})(je),ye=function(e){function t(e){return Object(m.a)(this,t),Object(S.a)(this,Object(M.a)(t).call(this,e))}return Object(_.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(Oe,null))}}]),t}(o.a.Component),fe=Object(c.connect)(null,null)(ye),ve=function(e){function t(){return Object(m.a)(this,t),Object(S.a)(this,Object(M.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(fe,null),o.a.createElement(le,null))}}]),t}(o.a.Component),ge=Object(c.connect)(null,function(e){return Object(a.b)({changePage:function(){return Object(r.push)("/about-us")}},e)})(ve),Ee=Object(c.connect)(null,null)(function(e){return o.a.createElement("div",null,o.a.createElement(ge,null))}),xe=function(){return o.a.createElement("div",null,o.a.createElement("main",null,o.a.createElement(Ee,null)))},me=(n(53),n(55),document.querySelector("#root"));Object(s.render)(o.a.createElement(c.Provider,{store:x},o.a.createElement(r.ConnectedRouter,{history:v},o.a.createElement("div",null,o.a.createElement(xe,null)))),me)}},[[31,2,1]]]);
//# sourceMappingURL=main.6de45dfd.chunk.js.map