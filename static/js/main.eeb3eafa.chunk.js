(this.webpackJsonpwebprboom=this.webpackJsonpwebprboom||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(13),s=n.n(c),i=n(3),o=n(6),d=n(5),a=n(4),v=n(0),u=n.n(v),l=n(12),m=n(16),f=n(14),b=n.n(f),j=(n(22),function(e){Object(d.a)(n,e);var t=Object(a.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={goToSlide:0},r.slides=e.slides.map((function(e,t){return Object(l.a)(Object(l.a)({},e),{},{onClick:function(){r.state.goToSlide===t&&r.onSelected(e.key),r.setState({goToSlide:t})}})})),r}return Object(o.a)(n,[{key:"onSelected",value:function(e){this.props.onSelected&&this.props.onSelected(e)}},{key:"moveRight",value:function(){var e=this.state.goToSlide;++e===this.slides.length&&(e=0),this.setState({goToSlide:e})}},{key:"moveLeft",value:function(){var e=this.state.goToSlide;--e<0&&(e=this.slides.length-1),this.setState({goToSlide:e})}},{key:"select",value:function(){this.onSelected(this.slides[this.state.goToSlide].key)}},{key:"render",value:function(){return Object(r.jsx)(b.a,{slides:this.slides,offsetRadius:2,animationConfig:m.a.gentle,goToSlide:this.state.goToSlide})}}]),n}(v.Component)),C=n(15),z=(n(23),function(e){Object(d.a)(n,e);var t=Object(a.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"Loading",children:Object(r.jsx)("div",{className:"Loading-inner",children:Object(r.jsx)(C.a,{percent:this.props.percent,strokeWidth:"4",strokeColor:"red",trailColor:"#999999"})})})}}]),n}(v.Component)),A=n.p+"static/media/doom1.3a7142d0.png",g=n.p+"static/media/freedoom1.e84d08bc.png",h=n.p+"static/media/freedoom2.ffa285ce.png",k=(n(24),function(e){Object(d.a)(n,e);var t=Object(a.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).padDown=!1,c.ModeEnum={menu:1,loading:2,loaded:3},c.state={mode:c.ModeEnum.menu,loadingPercent:0},c.slides=[{key:"doom1",content:Object(r.jsx)("img",{src:A,alt:"1"})},{key:"freedoom1",content:Object(r.jsx)("img",{src:g,alt:"2"})},{key:"freedoom2",content:Object(r.jsx)("img",{src:h,alt:"3"})}],c.carouselRef=u.a.createRef(),c.keyUpListener=c.createKeyUpListener(),c.animationListener=c.createAnimationListener(),c}return Object(o.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.keyUpListener),requestAnimationFrame(this.animationListener)}},{key:"componentDidUpdate",value:function(){this.state.mode!==this.ModeEnum.menu&&document.removeEventListener("keyup",this.keyUpListener)}},{key:"onGameSelected",value:function(e){var t=this,n=document.getElementById("GameCanvas"),r=window.Module;r.canvas=n,r.elementPointerLock=!0,r.locateFile=function(t,n){return e+"/"+t},r.setStatus=function(e){var n=e.match(/([^(]+)\((\d+(\.\d+)?)\/(\d+)\)/);if(n){var r=n[2]/n[4]*100;t.setState({loadingPercent:r}),100===r&&(window.Module.canvas.style.display="block",t.setState({mode:t.ModeEnum.loaded}))}};var c=document.createElement("script");document.body.appendChild(c),c.type="text/javascript",c.src=e+"/"+e+".js",this.setState({mode:this.ModeEnum.loading})}},{key:"pollGamepads",value:function(e){for(var t=e.carouselRef.current,n=e.padDown,r=navigator.getGamepads?navigator.getGamepads():navigator.webkitGetGamepads?navigator.webkitGetGamepads:[],c=0;c<r.length;c++)if(r[c]){var s=r[c],i=s.buttons;if(i&&i.length>=16){var o=!0;if(i[14].pressed?n||t.moveLeft():i[15].pressed?n||t.moveRight():i[0].pressed?n||t.select():o=!1,o)return void(e.padDown=!0)}var d=s.axes;if(d&&d.length>=1){var a=d[0],v=!0;if(a<-.5?n||t.moveLeft():a>.5?n||t.moveRight():v=!1,v)return void(e.padDown=!0)}}e.padDown=!1}},{key:"createAnimationListener",value:function(){var e=this,t=this;return function(){t.state.mode===e.ModeEnum.menu&&(t.pollGamepads(t),requestAnimationFrame(t.animationListener))}}},{key:"createKeyUpListener",value:function(){var e=this.carouselRef;return function(t){var n=e.current;switch(t.code){case"ArrowRight":n.moveRight();break;case"ArrowLeft":n.moveLeft();break;case"Enter":n.select()}}}},{key:"renderMenu",value:function(){var e=this;return Object(r.jsxs)("div",{className:"Menu",children:[Object(r.jsx)("div",{className:"Header",children:Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAY8AAAA/CAYAAAAYJ0QmAAANkElEQVR4Xu2dXahdRxXHE9MqjbHfYERy/AgihJYg4kdpUQkIJT5ELPqgL9Ki+JYXP9CC9KVKVZS+CX6ggggKSh8sBSFVqVQrpYZUS5GqvUGskH6kxhRtoz7M4c7vevb/3DVnZp/sffe/T7cns2fW/GfN+u+19po1uz++a9d/d634332z2YpPbn3s5o2NlftpJcPKAoz0wRrM+5jyTlrHIWC7k/DsQ9/cZz0Cu00e9SCOsYchGDjitpOM3RCw3Ul4jnF/TUFmk8cUVrljjkMwcCaP/pTP5NEftu45IbCFPD5z955NXK59z382//77vS/b/Psrn72w+XcrBaUh+8TxLMOBY1mG509lGe463l6GqSkEMee6X359xvzl13Sj8u+ny9B68bndnQ+8cDr/zjUdO6n0je3U8CzTNrdeFwImj3UhPbBx+jZwnO7UjF3f2E4Nz4FtHYszR8DkMVFV6NvAmTwSAn14dSaPiW7agU17C3kwZHTNW3IS1h9/lsMLP/x++5ARDdmHPpLDVldfm9F65kz+uw8ZBrYuvYtDzD/5xYz5nr156Avn898bj24vEteLrfftz/+n+ufvZ/+U23/97vb6tv1M6lq0wtZ41q2Dn+4XAZNHv/gOtvdWBo4TtLFLaLTC1ngOdvtYsP//YG7PYzo60crAmTwWdaYVtiaP6ezHMc50i+fBkNGhW3LY6qlf5LBVH2EEtdkI6LmnVg9lDC0t9WIpCrPjiMnRYzmTbd++vNbnzmUdeLYww+oqkanF/mfXdYezGLY6+XCW4cEHcibYxcJQjds3tn3jGcmcXOc+ishTqgNjkT8iZyt8asYyeZRq4Ijb923gCE3fxm5oy9A3tn3jGTFGEUPTal0i8pSONRb5I3K2wqdmLJNHqQaOuH3fBs7ksfjNo5VXZ/Ko33gRQ1k/SuqhxrhH5Kzpn3OsGWtw5KG+u7x0tvtAmTKIBEgdPDy/kfu8EtllfFYdiOMBOnWI8vbv5HAQ+7/kyhyKeQkH6DjWq67rLjl24YVu9d5zWf79mQfyuCrk2GqT1PTDdWFGFkOU/J0HVJkhNrstZ2QRH2JSKqfCmf08+LmcpcYMwNKxWrWvwbN0Hx28NYcQX/Galcvj7frHo3kPnr4n6y3D48QnYjSVQSQ+Q5OfMt/x44zD1Td1H9a+86P59wgmijDuPJHxp83519/y7586nNeXY5k85qiaPFqZsHg/NcbO5LGIcw2eJo+43rJlK/IzeayG/5bURnseCUR7HgkHex7xTWXySFjZ81iuM8SnF8/j8G3ZLXr2N2W1rdTiKfeK7UvJgzDdcFOW810fzG7XJVd0u9U8/MjMImYEnX6y+9nDb839b/wlt7n3nowb56KWk4cfORb7j5gPuuEq7BYJC0TGatWmxtgxM5BZWyrkxd+V/OowI9uz9tfeg8gEG0AIqwZPzpHfaW7+RtZnhkPZ/tzj3bXL/vDr7r3D/fWm9yKEi9A0D6iyH+6vyDe8IctPDOlJv/bDOQyrwtEvPp+fjoSwlGfDtbvqHXmtGdJnCIuhYxm2MnmkxTF5tKKKtmEWk0dbPE0ei3j2TX4mjw7bYs8jgWLPYznx1LwpmzxMHvY8kg4MwvNQISPltqjFY7YAVfyOD3RnCKiw1RVvzE/TjaXrxP4p//53d7vMQ84+Kn3HpwF926cztv98IocRXonQyhPf7s5mUaX4VaYZXdq9s26cWUKf81LhiNnru0MfQzgkyJDCvjfn+RLb5x7J8nMz12BL3Jht2DeeX3syj8BsQOrVQ9/NbRhKKtVhFWqmnhDziA0Zi/zESukJ21DHHvlJ/pfrj2x/tcGXT+Y2tAO0sQzv0+arsGGotpXJo3RLrKe9yWM9OJs8Es4mj0V9qyE/k8ccAfVBxp5HfwbO5NEftuzZ5GHyUJpm8pgjUxq2IqBM+Tr5rRweYRt+hL/9SHe4gzJEwlY0oMzcuPTy7uXeqWGrN7w9z5e3QPIA130fy+vCUEOkJLvaPCqLiVlkfJZZbfydtbN4mromJNKKWogPM1J4rwazVtRhRlWOPoItM8HYniGFQ+/MoQmOdepEdzYg++E+4j6NzLH0kBrHVSFrzpc6rK6HGLv81LFXH+0OQVPH1Mf8G49321WuI2/wvOxAbs/fI9luVWErk0cr87RaP9wwJo/VMIw8ZfJIKCmCNHkkfFQCSIT8TB7znWjPI2KS6tuYPOoxjPRg8jB5KD1p5TlNjjz4BZ/1nXjrnLqT4MCx7JoxhBVJ32TdGxVqU2ErpQSXot6UasNDYWzz+FdzjSPKxgyK/e/PB38iBouHgyJ1ls4+nENSzAK6//M5lKFCQCpUSDn//FC31DVl29mjKreuMvoUtjX1rJgYouqPUWZ+QGYWENvUYKvOGCn9ufF93WGru45vr3s1BNmH58GwZ+RG0bHLr+rgUcd4MPDEN7MWMMzLA5jEjdmn7IfZkjwMThtOPeQ+rQpbmTzSApo8Eg6ld36YPBICiphNHgkfk0fCweQxtxj2PJb7H/Y8Ej72PCJ+ampjzyPhUJrUMATPafSeB10/fuRRFWd5aEUdKuHhL9aA4sEW1gui68Rto24SVGErPssQFtmbmRt8y6MbyLfpA6/LYQG+DanaVgytUB7OV9WQUXNXWTc8SMUyzirDiv2rdefBNN7up8plx83cYsvIBlY3TqqaPByF+kmXnG24psz0Y/Ya2/MQpcoeXCe2NECUk+v4yx9138yowj7sp7TGXUQf1DcD7in2w7AMy+CPXX5FHtQxHrzlOqqwFWu+0Z7THjLE/dsvdWfJPvb7/Inh1O+y/mwJW5k85m8uuELV5JEwMXksmkKTx6J3GCEMtjF5JDRMHnOtYA6yPY/F7WTPw55HH16dPY/FsNVYPKfRkwfDLDw8wjAILz/hwROGg55GnR/lfjJsFXlbUW++TFc9dEv3ARlmUq2zLDnx5KEbHgI68/PsKkayYoiVOmHONnRX//qDnBXGsZTHyX64pgxbRcJNkfWNtOFbKrElGVMn2afKhlLjEtsbvpCzldTNjwwptMI2ggnb0ABFamGpw4wMA/LGTFW/q0YHuKbEXB0mLQ1bjUV+rh0zoCI3lvKUO0PrPDSt9i/3ERM3FP7M2NwStjJ5lG7X5e1NHm3xNHksx9Pkseh5mDwSJiaP+d7hm689jwQKq+ra81g0svY8EiaqOrX64DwW4zt2+Ufveah7oalADFvRjVXMxm1M94o35UXKAjNDhlkW7F8dHGOoQZUlb/uOnHpTnofKDmIp74g8KrTCA4MMJzKUoUIrzNqiDH2UpojMkW3oeXCzMXuEIUpmskXuPFBjqRLfbM9DspFwEJ9VoTZmwrA9D47xd9Ym4u8M+UZK3HO+7EeVZy8lZvbJdaQNUbXRuPdVGvdY5CcOvMZCHVhWoVH2Q5vA7EGVIUmbr7IQGcKSYSuTR6k5W97e5NEWT5NHwtPkkXAweSzuL5PHHBOVm2/PIwFkzyPhYM8j4WDPI+FgzyPhsFbPg8boyPe66+EwbKVCQCr7gm+Oqg4+s7xUCWJVo0mFxQ7euv0te6xlpN6XazJtWCKbc2RYiVlYrGel6jWxzXncHqiy4Hj7GDFUmUvEQbnMNZk2pX7JxfI8WIZH6cmZ+3PWnLpJUK271Lez3bcrsj1vf+PvkVTgyDWuzIpkfTaGRpmNqebCF0Gej1H1lHjA7Vc/7T7YOHb5iRXDVipcqTIzFQ7sX7VhtEkdsWA/DH9tybYyeSw3ZyaPhA+/l5g8EiYmj+V7x+SR8FEFQE0ec/2x55GAUJcs2fMo9TlSe3sei7jZ81jUjaPHshc4ZM9p9J7HbDbb9AnV5uQkWQqYLFr6BqpCWMzCYsaFyrKgbOyTv9OjojscuQVPVfRU5o9yUolVqWTOkRc6MaWSB/04Lt/mGBZjm0hZEYUP+1HZbqXrvhptLBoI1jRTmTkq5huRWdXRilw3oFLJ1fUEEfkVbpGsJD5bOnc+S8z5O+utUQ9VlhcPskUOo+1U+ZWOqbVW9f0ia6rsJPe+qu+nDmbuNnksLlXkLgGTR0KgVHFNHsv1jf+qyIZtTB6LeKqXyKGRn8ljvnalRsSeRwLOnkecTlQRvcibe2lJFXsei+syNOOrNMfksXxPqZIwVZ6Hcm2UKKWEUbrYpe5qTf9xEzbelpGsjNLZtdKByLjKKESeLdWlVmOVytaqfR/rsk5MpiB/KzxLsWo17pawlcmj1dYdZj8mj3iordUGu1iaUGpQInKuE5MpyN8Kz1KsWo1r8ojsmh3SxuRh8qhR5VZGJyJDqUGM9Dk0+VvJU4pVq3EleUQWw22MgBEwAkZgmgiYPKa57p61ETACRqAKAZNHFXx+2AgYASMwTQRMHtNcd8/aCBgBI1CFgMmjCj4/bASMgBGYJgImj2muu2dtBIyAEahCwORRBZ8fNgJGwAhMEwGTxzTX3bM2AkbACFQhYPKogs8PGwEjYASmiYDJY5rr7lkbASNgBKoQMHlUweeHjYARMALTRMDkMc1196yNgBEwAlUImDyq4PPDRsAIGIFpImDymOa6e9ZGwAgYgSoETB5V8PlhI2AEjMA0ETB5THPdPWsjYASMQBUCJo8q+PywETACRmCaCJg8prnunrURMAJGoAqB/wGdRoKOQc/F0gAAAABJRU5ErkJggg==",alt:""})}),Object(r.jsxs)("div",{className:"BoomCarousel-outer",children:[this.state.mode===this.ModeEnum.loading?Object(r.jsx)(z,{percent:this.state.loadingPercent}):null,Object(r.jsx)(j,{slides:this.slides,ref:this.carouselRef,onSelected:function(t){e.onGameSelected(t)}})]}),Object(r.jsx)("div",{className:"Footer",children:Object(r.jsx)("img",{src:"data:image/png;base64,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",alt:""})})]})}},{key:"render",value:function(){return Object(r.jsx)(u.a.StrictMode,{children:Object(r.jsxs)("div",{children:[Object(r.jsx)("canvas",{id:"GameCanvas"}),this.state.mode!==this.ModeEnum.loaded?this.renderMenu():null]})})}}]),n}(v.Component));n(25);window.Module={};var O=document.getElementById("root");s.a.render(Object(r.jsx)(k,{}),O)}},[[26,1,2]]]);
//# sourceMappingURL=main.eeb3eafa.chunk.js.map