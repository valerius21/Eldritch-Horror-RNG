(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(16)},16:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(4),d=n.n(i),o=n(2),r=n(5),c=n(6),h=n(9),s=n(7),u=n(1),m=n(8),F=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(h.a)(this,Object(s.a)(t).call(this))).handleClick=function(t){t.preventDefault(),e.setState({rdm:e.getField()}),document.getElementById("result").innerText=e.state.rdm},e.state={pool:[],rdm:e.getField()},e.getField=e.getField.bind(Object(u.a)(e)),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"getField",value:function(){var e=["Field 1","Field 2","Field 3","Field 4","Field 5","Field 6","Field 7","Field 8","Field 9","Field 10","Field 11","Field 12","Field 13","Field 14","Field 15","Field 16","Field 17","Field 18","Field 19","Field 20","Field 21","San Francisco","Arkham","The Amazon","Buenos Aires","London","Rome","Istandbul","The Pyramids","The Heart of Africa","Antartica","Tunguska","The Himalayas","Shanghai","Tokyo","Sydney"];return document.getElementById("mom").checked&&(e=[].concat(Object(o.a)(e),["Miskatonic Outpost","Lake Camp","Frozen Waste","City of the Elder Things","Snowy Mountains","Plateau of Leng"])),document.getElementById("pyram").checked&&(e=[].concat(Object(o.a)(e),["Alexandria","The Bent Pyramid","Cairo","The Sahara Desert","Tel el-Amarna","The Nile River"])),document.getElementById("dlands").checked&&(e=[].concat(Object(o.a)(e),["Celepha\xefs","Dylath-Leen","The Enchanted Wood","The Moon","The Underworld","Ulthar","Unknown Kadath"])),e[Math.floor(Math.random()*e.length)]}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",{className:"button is-link is-fullwidth is-large",onClick:this.handleClick},"Roll"))}}]),t}(a.Component);d.a.render(l.a.createElement(F,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.a5b3ace8.chunk.js.map