(this.webpackJsonpgridster=this.webpackJsonpgridster||[]).push([[0],{52:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(15),s=n.n(a),r=n(22),l=n(9),d=n(7),o=n(11),j=n(57),u=n(60),b=n(58),h=n(59),O=n(21),x=n.n(O),p=n.p+"static/media/dragndrop.418bfccc.png",m=(n(52),n(0)),f=Object(O.WidthProvider)(x.a);var g=function(){Object(c.useEffect)((function(){document.body.style.overflowX="hidden"}),[]);var e=[{icon:d.d,title:"Paragraph",w:6,h:3,type:"p",default:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae blanditiis molestias hic est quod nesciunt quae alias assumenda commodi! Ratione similique error ab laboriosam placeat sed obcaecati neque minima soluta."},{icon:d.a,title:"Heading",w:2,h:2,type:"h2",default:"Heading"},{icon:d.f,title:"Blockquote",w:12,h:4,type:"bq",default:"This is a Blockquote"}],t=[{icon:d.b,title:"Image",w:6,h:2,type:"img",default:null,disabled:!0},{icon:d.e,title:"Video",w:2,h:2,type:"video",default:null,disabled:!0},{icon:d.c,title:"Gallery",w:12,h:4,type:"gallery",default:null,disabled:!0}],n=Object(c.useState)([]),i=Object(l.a)(n,2),a=i[0],s=i[1],O=Object(c.useState)(!1),x=Object(l.a)(O,2),g=x[0],v=x[1],y=Object(c.useState)({icon:"",title:"",w:0,h:0,type:"",default:"",disabled:!1}),w=Object(l.a)(y,2),N=w[0],k=w[1];Object(c.useEffect)((function(){return window.addEventListener("keydown",E),function(){}}),[]);var S=function(e){var t={i:(a.length+1).toString(),x:0,y:0,w:e.w,h:e.h,type:e.type,value:e.default};s([].concat(Object(r.a)(a),[t])),C(),v(!1)},q=function(e){k(e)},C=function(){return a.map((function(e){return Object(m.jsxs)("div",{className:"element","data-grid":{x:e.x,y:e.y,w:e.w,h:e.h,resizeHandles:["sw","nw","se"]},children:[Object(m.jsx)("button",{onClick:function(){return function(e){var t=a.filter((function(t){return t.i!==e}));s(t)}(e.i)},type:"button",children:"X"}),D(e.type,e.value)]},e.i)}))},D=function(e,t){return"p"===e?Object(m.jsx)("p",{contentEditable:!0,children:t}):"h2"===e?Object(m.jsx)("h2",{contentEditable:!0,children:t}):"bq"===e?Object(m.jsx)("blockquote",{contentEditable:!0,children:t}):void 0},E=function(e){console.log(e.key),"/"===e.key&&v(!0),"Escape"===e.key&&v(!1)};return Object(m.jsxs)(b.a,{fluid:!0,children:[Object(m.jsxs)(h.a,{children:[Object(m.jsxs)(j.a,{md:"9",className:"workArea",children:[0===a.length?Object(m.jsxs)("div",{className:"dropArea",children:[Object(m.jsx)("img",{src:p,alt:"drop area"}),Object(m.jsx)("div",{className:"heading",children:"Drop Area"}),Object(m.jsx)("div",{className:"muted",children:'Or press "/" to get options to add'})]}):""," ",Object(m.jsx)(f,{className:"layout",onDrop:function(e,t,n){var c={i:(a.length+1).toString(),x:t.x,y:t.y,w:N.w,h:N.h,type:N.type,value:N.default};s([].concat(Object(r.a)(a),[c])),C()},measureBeforeMount:!1,isDroppable:!0,rowHeight:30,children:C()})]}),Object(m.jsx)(j.a,{md:"3",className:"p-0",children:Object(m.jsxs)("div",{className:"itemsArea",children:[Object(m.jsxs)("div",{className:"group",children:[Object(m.jsxs)("div",{className:"heading",children:["Typography",Object(m.jsx)("hr",{})]}),Object(m.jsx)("div",{className:"options",children:Object(m.jsx)(b.a,{children:Object(m.jsx)(h.a,{children:e.map((function(e,t){return Object(m.jsx)(j.a,{md:"4",children:Object(m.jsx)("div",{draggable:"true",onDragStart:function(e){return e.dataTransfer.setData("text/plain","")},onDrag:function(){q(e)},unselectable:"on",children:Object(m.jsxs)(u.a,{children:[Object(m.jsx)(o.a,{icon:e.icon}),Object(m.jsx)("p",{children:e.title})]})},(100*Math.random()).toString())})}))})})})]}),Object(m.jsxs)("div",{className:"group",children:[Object(m.jsxs)("div",{className:"heading",children:["Media",Object(m.jsx)("hr",{})]}),Object(m.jsx)("div",{className:"options",children:Object(m.jsx)(b.a,{children:Object(m.jsx)(h.a,{children:t.map((function(e){return Object(m.jsx)(j.a,{md:"4",children:Object(m.jsx)("div",{draggable:!e.disabled,onClick:function(){return alert("Comming Soon..")},onDragStart:function(){return q(e)},children:Object(m.jsxs)(u.a,{className:e.disabled?"disabled":"",children:[Object(m.jsx)(o.a,{icon:e.icon}),Object(m.jsx)("p",{children:e.title})]})},(100*Math.random()).toString())})}))})})})]})]})})]}),g?Object(m.jsxs)("div",{className:"hoverOptions",children:[Object(m.jsx)("button",{className:"close",onClick:function(){return v(!1)},children:Object(m.jsx)(o.a,{icon:d.g})}),Object(m.jsxs)(u.a,{children:[Object(m.jsx)("h6",{children:"Typography"}),Object(m.jsx)("hr",{}),Object(m.jsx)("ul",{children:e.map((function(e){return Object(m.jsx)("li",{onClick:function(){return S(e)},children:Object(m.jsxs)("div",{className:"d-flex align-items-center",children:[Object(m.jsx)(o.a,{icon:e.icon}),Object(m.jsx)("p",{children:e.title})]},(100*Math.random()).toString())})}))})]})]}):""]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};n(54);s.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root")),v()}},[[55,1,2]]]);
//# sourceMappingURL=main.48469ed1.chunk.js.map