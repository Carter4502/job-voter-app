(this["webpackJsonpjob-voter-app"]=this["webpackJsonpjob-voter-app"]||[]).push([[0],{224:function(e,t,n){},226:function(e,t,n){},263:function(e,t){},327:function(e,t,n){},329:function(e,t,n){},334:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(74),r=n.n(o),s=(n(224),n(65)),i=n.n(s),l=n(96),j=n(26),p=n(13),b=n(121),u=n(193),d=n(332),h="\n  query ListJobs(\n    $filter: ModelJobFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {\n      items {\n        id\n        position\n        company\n        imgURL\n        elo\n        times\n        createdAt\n        updatedAt\n        salary\n      }\n      nextToken\n    }\n  }\n",m={aws_project_region:"us-east-1",aws_appsync_graphqlEndpoint:"https://zsar4l2tkrgvvic33uugmxzmpy.appsync-api.us-east-1.amazonaws.com/graphql",aws_appsync_region:"us-east-1",aws_appsync_authenticationType:"API_KEY",aws_appsync_apiKey:"da2-as22gej4szeq3cz2mtbq7zushm"},O=n(399),f=n(402),x=n(396),g=n(149),v=n(397),y=n(400),w=n(401),N=n(398),k=(n(226),n(32)),C=n(395),S=n(68),$=n(194),J=n.n($),L=n(5);b.default.configure(m);var _=function(){var e=Object(k.a)(x.a)((function(e){var t,n=e.theme;return t={},Object(p.a)(t,"&.".concat(g.a.head),{backgroundColor:"#F8F8F8",color:n.palette.common.black,fontWeight:"bold",fontFamily:"Axiforma Bold"}),Object(p.a)(t,"&.".concat(g.a.body),{fontSize:16,fontFamily:"Nunito"}),t})),t=Object(a.useState)([]),n=Object(j.a)(t,2),c=n[0],o=n[1],r=Object(a.useState)([]),s=Object(j.a)(r,2),b=s[0],m=s[1],$=Object(a.useState)(""),_=Object(j.a)($,2),A=_[0],E=_[1],F=Object(a.useState)(!0),M=Object(j.a)(F,2),T=M[0],q=M[1];Object(a.useEffect)((function(){I()}),[]);var z=function(e){var t=c.filter((function(t){return t.company.toLowerCase().startsWith(e.toLowerCase())}));q(!1),m(t)},I=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.graphql(Object(d.b)(h));case 3:t=e.sent,(n=t.data.listJobs.items).sort((function(e,t){return t.elo-e.elo})),o(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error fetching jobs.",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(L.jsxs)("div",{children:[Object(L.jsx)("div",{className:"head3",children:Object(L.jsx)(S.b,{to:"/",children:Object(L.jsx)(C.a,{className:"lb2",variant:"primary",children:"Contribute Votes"})})}),Object(L.jsx)("h1",{className:"leaderTitle",children:"Leaderboard"}),Object(L.jsxs)("div",{className:"card2",children:[Object(L.jsx)(J.a,{value:A,onChange:function(e){return z(e)},onCancelSearch:function(){return E(""),q(!0),void z(A)},className:"searchBar",placeholder:"Search a company"}),Object(L.jsx)("div",{className:"border",children:Object(L.jsx)(v.a,{component:N.a,children:Object(L.jsxs)(O.a,{sx:{},"aria-label":"simple table",children:[Object(L.jsx)(y.a,{children:Object(L.jsxs)(w.a,{children:[(T||b.length===c.length)&&Object(L.jsx)(e,{children:"#"}),Object(L.jsx)(e,{children:"Company"}),Object(L.jsx)(e,{children:"Pay"}),Object(L.jsx)(e,{children:"Elo"})]})}),Object(L.jsxs)(f.a,{children:[(T||b.length===c.length)&&c.map((function(t,n){return Object(L.jsxs)(w.a,{children:[Object(L.jsx)(e,{component:"th",scope:"row",children:n+1}),Object(L.jsx)(e,{component:"th",scope:"row",children:t.company}),Object(L.jsxs)(e,{component:"th",scope:"row",children:["$",t.salary,"/hr"]}),Object(L.jsx)(e,{component:"th",scope:"row",children:t.elo})]},t.company)})),!T&&b.length!==c.length&&b.map((function(t,n){return Object(L.jsxs)(w.a,{children:[Object(L.jsx)(e,{component:"th",scope:"row",children:t.company}),Object(L.jsxs)(e,{component:"th",scope:"row",children:["$",t.salary,"/hr"]}),Object(L.jsx)(e,{component:"th",scope:"row",children:t.elo})]},t.company)}))]})]})})})]})]})},A=n(19),E=n(23),F=(n(327),function(e){var t=e.image,n=e.company,a=e.position,c=e.salary;return Object(L.jsxs)("div",{className:"card",children:[Object(L.jsxs)("div",{id:"container",children:[Object(L.jsx)("span",{className:"helper"}),Object(L.jsx)("img",{alt:"company logo",src:t})]}),Object(L.jsx)("h1",{className:"jobCompany",children:n}),Object(L.jsx)("h1",{className:"jobTitle",children:a}),Object(L.jsxs)("h3",{className:"jobSalary",children:["$",c,"/hr"]})]})}),M=(n(328),n(329),n(330));b.default.configure(m);var T=function(){var e=Object(a.useState)(-1),t=Object(j.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(-1),r=Object(j.a)(o,2),s=r[0],p=r[1],b=Object(a.useState)([]),m=Object(j.a)(b,2),O=m[0],f=m[1];Object(a.useEffect)((function(){x()}),[]),Object(a.useEffect)((function(){y()}),[O]);var x=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetched."),e.prev=1,e.next=4,u.a.graphql(Object(d.b)(h));case 4:t=e.sent,n=t.data.listJobs.items,console.log("job list",n),f(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log("Error fetching jobs.",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),g=function(e){var t=1===e?n:s,a=1===e?s:n,c=M.calculate(O[t].elo,O[a].elo).playerRating,o=M.calculate(O[t].elo,O[a].elo).opponentRating,r=O[t],i=O[a];v(r,c,t),v(i,o,a)},v=function(){var e=Object(l.a)(i.a.mark((function e(t,n,a){var c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("updated."),e.prev=1,t.elo=n,delete t.createdAt,delete t.updatedAt,e.next=7,u.a.graphql(Object(d.b)("\n  mutation UpdateJob(\n    $input: UpdateJobInput!\n    $condition: ModelJobConditionInput\n  ) {\n    updateJob(input: $input, condition: $condition) {\n      id\n      position\n      company\n      imgURL\n      elo\n      times\n      createdAt\n      updatedAt\n      salary\n    }\n  }\n",{input:t}));case 7:c=e.sent,(o=Object(E.a)(O))[a]=c.data.updateJob,f(o),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log("Error when updating elo in database.",e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,n,a){return e.apply(this,arguments)}}(),y=function(){if(0!==O.length){for(var e=Math.floor(Math.random()*O.length),t=Math.floor(Math.random()*O.length);t===e;)t=Math.floor(Math.random()*O.length);c(e),p(t)}};return Object(L.jsxs)("div",{className:"App",children:[Object(L.jsx)("div",{className:"head",children:Object(L.jsx)(S.b,{to:{pathname:"/leaderboard",state:{jobs:O}},children:Object(L.jsx)(C.a,{className:"lb",variant:"primary",children:"Leaderboard"})})}),Object(L.jsx)("h1",{className:"title",children:" Which internship would you take? "}),Object(L.jsxs)("div",{className:"container",children:[-1!==n&&Object(L.jsxs)("button",{className:"voteButton",onClick:function(){return g(1)},children:[Object(L.jsx)(F,{image:O[n].imgURL,company:O[n].company,position:O[n].position,salary:O[n].salary})," "]}),-1!==s&&Object(L.jsx)("button",{className:"voteButton",onClick:function(){return g(2)},children:Object(L.jsx)(F,{image:O[s].imgURL,company:O[s].company,position:O[s].position,salary:O[s].salary})})]})]})};var q=function(){return Object(L.jsxs)("div",{className:"App",children:[Object(L.jsx)(A.a,{exact:!0,path:["/","/vote"],component:T}),Object(L.jsx)(A.a,{exact:!0,path:"/leaderboard",component:_})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,403)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))};r.a.render(Object(L.jsx)(c.a.StrictMode,{children:Object(L.jsx)(S.a,{children:Object(L.jsx)(q,{})})}),document.getElementById("root")),z()}},[[334,1,2]]]);
//# sourceMappingURL=main.1fe87867.chunk.js.map