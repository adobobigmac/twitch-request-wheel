(this["webpackJsonptwitch-bot"]=this["webpackJsonptwitch-bot"]||[]).push([[0],{23:function(e,t){},35:function(e,t,n){},36:function(e,t,n){},40:function(e,t,n){},46:function(e,t){},68:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),c=n(25),i=n.n(c),o=n(15),r=(n(35),n(9)),u=n(10),h=n(12),l=n(11),d=(n(36),n(19)),p=n.n(d),j=n(5),b=n(26),f=n(17),m=n(27),O=n(30),g=(n(40),n(2)),v=n(42),x=n(44),y="!request",k=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).updateTimeDiff=function(){s.setState((function(){return{timeDiff:"".concat(Math.floor((Date.now()-s.props.metadata.time)/6e4)," minutes ago")}}))},s.delete=function(e){s.props.onDelete(s.props.msg)},s.state={timeDiff:0},s}return Object(u.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(O.a,{effect:"solid",place:"right"}),Object(g.jsx)("div",{id:"baseDiv","data-tip":"Requested ".concat(this.state.timeDiff," by ").concat(this.props.metadata.username),style:{backgroundColor:"steelblue",textAlign:"left",borderRadius:"8px",textTransform:"capitalize"},onMouseEnter:this.updateTimeDiff,children:Object(g.jsxs)("p",{style:{margin:"15px",padding:"4px",fontSize:"24px",display:"flex",justifyContent:"left",alignItems:"center"},children:[Object(g.jsx)("button",{type:"button",className:"deleteButton",onClick:this.delete,children:"X"}),this.props.msg]})})]})}}]),n}(s.Component),w=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).onGameChosen=function(e){console.log("Game chosen: "+e)},s.removeGame=function(e){var t=Object(j.a)({},s.state.messages);delete t[e],s.setState((function(e){return Object(j.a)(Object(j.a)({},e),{},{messages:t,counter:s.state.counter+1})}))},s.onMessage=function(e,t,n,a){var c=function(e){if(e.startsWith(y))return e.replace(y,"").trim().toLowerCase()}(n);c&&(s.state.messages[c]?s.sendMessage("/me @".concat(t.username,", ").concat(c," has already been requested!")):(s.setState((function(e){return Object(j.a)(Object(j.a)({},e),{},{messages:Object(j.a)(Object(j.a)({},s.state.messages),{},Object(f.a)({},c,{username:t.username,time:Date.now()})),counter:s.state.counter+1})})),s.sendMessage("/me @".concat(t.username,", ").concat(c," has been added to the request queue."))))},s.sendMessage=function(e){s.state.client.say(s.props.channel,e)},s.state={messages:{},colors:v({count:99,luminosity:"light",hue:"blue"}),counter:0},s}return Object(u.a)(n,[{key:"componentDidMount",value:function(e){var t=new x.client({identity:{username:this.props.channel,password:this.props.access_token},channels:[this.props.channel]});t.on("message",this.onMessage),t.connect(),console.log(JSON.stringify(t)),this.setState((function(e){return Object(j.a)(Object(j.a)({},e),{},{client:t})}))}},{key:"render",value:function(){var e=this,t=Object.keys(this.state.messages);return console.log(this.state.messages),Object(g.jsxs)("div",{style:{display:"flex"},children:[Object(g.jsxs)("column",{width:"50vw",children:[Object(g.jsx)("h2",{style:{marginBottom:"0"},children:"Game Requests"}),Object(g.jsxs)("h4",{style:{fontSize:"12px",marginTop:"6px",marginBottom:"12px",fontWeight:400},children:['Type e.g. "!request Blather Round" in ',this.props.channel,"'s chat to add"]}),t.map((function(t,n){return Object(g.jsx)(k,{msg:t,metadata:e.state.messages[t],onDelete:e.removeGame},n)}))]}),Object(g.jsx)("column",{width:"50vw",style:{textTransform:"capitalize"},children:Object(g.jsx)("div",{style:{fontSize:"16px",overflow:"hidden",width:"600px"},children:Object(g.jsx)(m.a,{segments:t,segColors:this.state.colors,onFinished:this.onGameChosen,isOnlyOnce:!1,size:250,upDuration:100,downDuration:1e3,primaryColor:"white",contrastColor:"black"},this.state.counter)})})]})}}]),n}(s.Component),_=n(3),C=n(28),D=n.n(C),S=n(62),q=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={username:"",access_token:"",failed_login:!1},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(b.a)(p.a.mark((function e(){var t,n=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=D.a.parse(this.props.location.search),e.next=3,S("https://id.twitch.tv/oauth2/token?"+new URLSearchParams({grant_type:"authorization_code",code:t.code,client_id:"u172q64ekv1j8nxy1r48mb8vn4kk7v",client_secret:"7yfmbc5ka6t7frki5g8m0qsboltp2p",redirect_uri:"https://asukii314.github.io/twitch-request-wheel/#"}),{method:"POST",headers:{Accept:"application/vnd.twitchtv.v5+json"}}).then((function(e){return e.json()})).then((function(e){e.access_token?(n.setState((function(t){return Object(j.a)(Object(j.a)({},t),{},{access_token:e.access_token})})),S("https://api.twitch.tv/helix/users",{headers:{"Client-ID":"u172q64ekv1j8nxy1r48mb8vn4kk7v",Authorization:"Bearer ".concat(e.access_token)}}).then((function(e){return e.json()})).then((function(e){n.setState((function(t){return Object(j.a)(Object(j.a)({},t),{},{username:e.data[0].login})}))}))):n.setState((function(e){return Object(j.a)(Object(j.a)({},e),{},{failed_login:!0})}))}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(g.jsx)("p",{children:this.state.failed_login?Object(g.jsx)(_.a,{to:"/login"}):this.state.username&&Object(g.jsx)(w,{channel:this.state.username,access_token:this.state.access_token})})}}]),n}(s.Component),M=Object(_.f)(q),T=function(){var e="https://id.twitch.tv/oauth2/authorize?client_id=".concat("u172q64ekv1j8nxy1r48mb8vn4kk7v","&response_type=code&scope=chat:read chat:edit&redirect_uri=").concat("https://asukii314.github.io/twitch-request-wheel/%23");return Object(g.jsx)("a",{href:e,style:{backgroundColor:"rebeccapurple",borderRadius:"5px",padding:"10px",color:"white"},children:"Log In With Twitch"})},z=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(g.jsx)(o.b,{basename:"/",children:Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)("header",{className:"App-header",children:[Object(g.jsx)(_.b,{exact:!0,path:"/login",children:T()}),Object(g.jsx)(_.b,{path:"/",component:M})]})})})}}]),n}(s.Component),B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),c(e),i(e)}))};i.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(o.a,{children:Object(g.jsx)(z,{})})}),document.getElementById("root")),B()}},[[68,1,2]]]);
//# sourceMappingURL=main.0e6bc8e9.chunk.js.map