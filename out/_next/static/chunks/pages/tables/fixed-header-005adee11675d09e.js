(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5566],{81458:function(r,e,t){"use strict";t.d(e,{Z:function(){return R}});var a=t(1048),n=t(32793),i=t(67294),o=(t(45697),t(86010)),s=t(27192),l=t(70917),c=t(41796),d=t(98216),u=t(2734),m=t(11496),f=t(33616),h=t(28979);function b(r){return(0,h.Z)("MuiLinearProgress",r)}(0,t(76087).Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var p=t(85893);const v=["className","color","value","valueBuffer","variant"];let g,Z,x,w,j,y,C=r=>r;const S=(0,l.F4)(g||(g=C`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),k=(0,l.F4)(Z||(Z=C`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),P=(0,l.F4)(x||(x=C`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),$=(r,e)=>"inherit"===e?"currentColor":"light"===r.palette.mode?(0,c.$n)(r.palette[e].main,.62):(0,c._j)(r.palette[e].main,.5),M=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,e[`color${(0,d.Z)(t.color)}`],e[t.variant]]}})((({ownerState:r,theme:e})=>(0,n.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:$(e,r.color)},"inherit"===r.color&&"buffer"!==r.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===r.variant&&{backgroundColor:"transparent"},"query"===r.variant&&{transform:"rotate(180deg)"}))),N=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.dashed,e[`dashedColor${(0,d.Z)(t.color)}`]]}})((({ownerState:r,theme:e})=>{const t=$(e,r.color);return(0,n.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===r.color&&{opacity:.3},{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,l.iv)(w||(w=C`
    animation: ${0} 3s infinite linear;
  `),P)),_=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.bar,e[`barColor${(0,d.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar1Indeterminate,"determinate"===t.variant&&e.bar1Determinate,"buffer"===t.variant&&e.bar1Buffer]}})((({ownerState:r,theme:e})=>(0,n.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===r.color?"currentColor":e.palette[r.color].main},"determinate"===r.variant&&{transition:"transform .4s linear"},"buffer"===r.variant&&{zIndex:1,transition:"transform .4s linear"})),(({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,l.iv)(j||(j=C`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),S))),I=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.bar,e[`barColor${(0,d.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar2Indeterminate,"buffer"===t.variant&&e.bar2Buffer]}})((({ownerState:r,theme:e})=>(0,n.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==r.variant&&{backgroundColor:"inherit"===r.color?"currentColor":e.palette[r.color].main},"inherit"===r.color&&{opacity:.3},"buffer"===r.variant&&{backgroundColor:$(e,r.color),transition:"transform .4s linear"})),(({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,l.iv)(y||(y=C`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),k)));var R=i.forwardRef((function(r,e){const t=(0,f.Z)({props:r,name:"MuiLinearProgress"}),{className:i,color:l="primary",value:c,valueBuffer:m,variant:h="indeterminate"}=t,g=(0,a.Z)(t,v),Z=(0,n.Z)({},t,{color:l,variant:h}),x=(r=>{const{classes:e,variant:t,color:a}=r,n={root:["root",`color${(0,d.Z)(a)}`,t],dashed:["dashed",`dashedColor${(0,d.Z)(a)}`],bar1:["bar",`barColor${(0,d.Z)(a)}`,("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","buffer"!==t&&`barColor${(0,d.Z)(a)}`,"buffer"===t&&`color${(0,d.Z)(a)}`,("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,s.Z)(n,b,e)})(Z),w=(0,u.Z)(),j={},y={bar1:{},bar2:{}};if("determinate"===h||"buffer"===h)if(void 0!==c){j["aria-valuenow"]=Math.round(c),j["aria-valuemin"]=0,j["aria-valuemax"]=100;let r=c-100;"rtl"===w.direction&&(r=-r),y.bar1.transform=`translateX(${r}%)`}else 0;if("buffer"===h)if(void 0!==m){let r=(m||0)-100;"rtl"===w.direction&&(r=-r),y.bar2.transform=`translateX(${r}%)`}else 0;return(0,p.jsxs)(M,(0,n.Z)({className:(0,o.Z)(x.root,i),ownerState:Z,role:"progressbar"},j,{ref:e},g,{children:["buffer"===h?(0,p.jsx)(N,{className:x.dashed,ownerState:Z}):null,(0,p.jsx)(_,{className:x.bar1,ownerState:Z,style:y.bar1}),"determinate"===h?null:(0,p.jsx)(I,{className:x.bar2,ownerState:Z,style:y.bar2})]}))}))},72882:function(r,e,t){"use strict";t.d(e,{Z:function(){return b}});var a=t(32793),n=t(1048),i=t(67294),o=(t(45697),t(86010)),s=t(27192),l=t(33616),c=t(11496),d=t(28979);function u(r){return(0,d.Z)("MuiTableContainer",r)}(0,t(76087).Z)("MuiTableContainer",["root"]);var m=t(85893);const f=["className","component"],h=(0,c.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(r,e)=>e.root})({width:"100%",overflowX:"auto"});var b=i.forwardRef((function(r,e){const t=(0,l.Z)({props:r,name:"MuiTableContainer"}),{className:i,component:c="div"}=t,d=(0,n.Z)(t,f),b=(0,a.Z)({},t,{component:c}),p=(r=>{const{classes:e}=r;return(0,s.Z)({root:["root"]},u,e)})(b);return(0,m.jsx)(h,(0,a.Z)({ref:e,as:c,className:(0,o.Z)(p.root,i),ownerState:b},d))}))},89161:function(r,e,t){"use strict";t.r(e);t(67294);var a=t(25675),n=t(95062),i=t(66242),o=t(44267),s=t(72882),l=t(7906),c=t(53184),d=t(53816),u=t(53252),m=t(15861),f=t(295),h=t(87357),b=t(81458),p=t(93946),v=t(85893),g=[{id:"pname",label:"Products",minWidth:170},{id:"review",label:"Review",minWidth:100},{id:"earnings",label:"Earnings",minWidth:170},{id:"action",label:"Action",minWidth:170}],Z=[{id:1,imgsrc:"/images/products/s1.jpg",name:"Is it good butterscotch ice-cream?",tags:"Ice-Cream, Milk, Powder",review:"good",percent:65,earnings:"546,000"},{id:2,imgsrc:"/images/products/s2.jpg",name:"Supreme fresh tomato available",tags:"Market, Mall",review:"excellent",percent:98,earnings:"780,000"},{id:3,imgsrc:"/images/products/s3.jpg",name:"Red color candy from Gucci",tags:"Chocolate, Yummy",review:"average",percent:46,earnings:"457,000"},{id:4,imgsrc:"/images/products/s4.jpg",name:"Stylish night lamp for night",tags:"Elecric, Wire, Current",review:"poor",percent:23,earnings:"125,000"}];e.default=function(){return(0,v.jsx)(i.Z,{children:(0,v.jsx)(o.Z,{children:(0,v.jsx)(s.Z,{sx:{maxHeight:440},children:(0,v.jsxs)(l.Z,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,v.jsx)(c.Z,{children:(0,v.jsx)(d.Z,{children:g.map((function(r){return(0,v.jsx)(u.Z,{align:r.align,style:{minWidth:r.minWidth},children:(0,v.jsx)(m.Z,{variant:"h5",fontWeight:"500",children:r.label})},r.id)}))})}),(0,v.jsx)(f.Z,{children:Z.map((function(r){return(0,v.jsxs)(d.Z,{hover:!0,children:[(0,v.jsx)(u.Z,{sx:{pl:0},children:(0,v.jsxs)(h.Z,{display:"flex",alignItems:"center",children:[(0,v.jsx)(a.default,{src:r.imgsrc,alt:r.imgsrc,height:"70",width:"90",className:"borderRadius"}),(0,v.jsxs)(h.Z,{sx:{ml:2},children:[(0,v.jsx)(m.Z,{variant:"h5",children:r.name}),(0,v.jsx)(m.Z,{color:"textSecondary",variant:"h6",fontWeight:"400",children:r.tags})]})]})}),(0,v.jsxs)(u.Z,{sx:{pl:0},children:[(0,v.jsx)(m.Z,{variant:"h6",sx:{mb:1},children:(e=r.review,e.charAt(0).toUpperCase()+e.slice(1))}),(0,v.jsx)(b.Z,{value:r.percent,variant:"determinate",sx:{"& span":{backgroundColor:"good"===r.review?function(r){return r.palette.primary.main}:"excellent"===r.review?function(r){return r.palette.success.main}:"average"===r.review?function(r){return r.palette.warning.main}:"poor"===r.review?function(r){return r.palette.error.main}:function(r){return r.palette.secondary.main}}}}),(0,v.jsxs)(m.Z,{color:"textSecondary",variant:"h6",fontWeight:"400",sx:{mt:1,whiteSpace:"nowrap"},children:[r.percent,"% sold"]})]}),(0,v.jsxs)(u.Z,{children:[(0,v.jsx)(m.Z,{color:"textSecondary",variant:"h6",children:"Earnings"}),(0,v.jsxs)(m.Z,{variant:"h5",children:["$",r.earnings]})]}),(0,v.jsx)(u.Z,{children:(0,v.jsx)(p.Z,{children:(0,v.jsx)(n.Z,{icon:"trash",width:"18",height:"18",sx:{color:function(r){return r.palette.grey.A200}}})})})]},r.id);var e}))})]})})})})}},43400:function(r,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tables/fixed-header",function(){return t(89161)}])}},function(r){r.O(0,[8937,9774,2888,179],(function(){return e=43400,r(r.s=e);var e}));var e=r.O();_N_E=e}]);