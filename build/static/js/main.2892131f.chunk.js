(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{57:function(t,e,n){"use strict";n.r(e);var r,a,c=n(1),o=n(8),s=n.n(o),i=n(12),u=n(3),l=n.n(u),b=n(7),p=n(10),d=n(11),j=n(14),f=n(13),h=n(5),O=n(0),m=function(t){Object(j.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(p.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.onHandleSubmit=function(e){e.preventDefault(),t.props.checkDublicateName(t.state.name)?alert("".concat(t.state.name," already exist")):(t.props.addContact(t.state),t.setState({name:"",number:""}))},t.onHandleChange=function(e){var n=e.target,r=n.name,a=n.value;t.setState(Object(h.a)({},r,a))},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("form",{onSubmit:this.onHandleSubmit,children:[Object(O.jsxs)(O.Fragment,{children:["Name",Object(O.jsx)("input",{type:"text",onChange:this.onHandleChange,value:this.state.name,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(O.jsxs)(O.Fragment,{children:["Number",Object(O.jsx)("input",{type:"tel",onChange:this.onHandleChange,value:this.state.number,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(O.jsx)("button",{type:"submit",children:"Add Contact"})]})}}]),n}(c.Component),v=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"card",children:Object(O.jsx)("ul",{className:"contactItem",children:e.map((function(t){return Object(O.jsxs)("li",{children:[Object(O.jsx)("p",{children:t.name}),Object(O.jsx)("p",{children:t.number}),Object(O.jsx)("button",{type:"button",onClick:n,id:t.id,children:"Delete"})]},t.id)}))})})})},x=function(t){var e=t.title,n=t.children;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{children:e}),n]})},C=function(t){var e=t.filter,n=t.setFilter;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("label",{children:["Filter:",Object(O.jsx)("input",{type:"text",value:e,onChange:n})]})})},g=n(2),y=Object(g.b)("contacts/addContact"),k=Object(g.b)("contacts/deleteContact"),w=Object(g.b)("contacts/getAllContacts"),F=Object(g.b)("contacts/filterContacts"),A=Object(g.b)("contacts/setError"),D=Object(g.b)("contacts/resetError"),L=Object(g.b)("contacts/setContactsLoading"),N=n(15),H=n(16),S=n.n(H),z=n(9),E=function(t){return t.contacts},J=function(t){return t.filter},Z=function(t){return t.error},q=Object(z.a)([E,J],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),B=function(t){Object(j.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(p.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={contacts:{items:[],filter:""}},t.addContact=function(){var e=Object(b.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.props.addContactOperation(n);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.onDeleteContact=function(){var e=Object(b.a)(l.a.mark((function e(n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.target.id,t.props.deleteContactsOperation(r);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.checkDublicateName=function(e){return t.props.contacts.some((function(t){return t.name===e}))},t.setFilter=function(e){var n=e.target.value;t.props.filterContacts(n)},t.getFilteredContacts=function(){return t.props.contacts.filter((function(e){return e.name.toLowerCase().includes(t.props.filter.toLowerCase())}))},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=Object(b.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.props.getAllContactsOperation();case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[this.props.error&&Object(O.jsx)("h2",{children:this.props.error}),this.props.isLoading&&Object(O.jsx)("h2",{children:"Loading...."}),Object(O.jsx)(x,{title:"Phonebook",children:Object(O.jsx)(m,{addContact:this.addContact,checkDublicateName:this.checkDublicateName})}),Object(O.jsx)(x,{title:"Find contact by name",children:Object(O.jsx)(C,{filter:this.props.filter,setFilter:this.setFilter})}),Object(O.jsx)(x,{title:"Contacts",children:Object(O.jsx)(v,{contacts:this.getFilteredContacts(),onDeleteContact:this.onDeleteContact})})]})}}]),n}(c.Component),I={getAllContactsOperation:function(){return function(){var t=Object(b.a)(l.a.mark((function t(e){var n,r,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(L()),t.prev=1,t.next=4,S.a.get("https://phonebook-3ae5c-default-rtdb.firebaseio.com/contacts.json");case 4:n=t.sent,(r=n.data)&&(a=Object.keys(r).map((function(t){return Object(N.a)({id:t},r[t])})),e(w(a))),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(A(t.t0.response.data.error));case 12:return t.prev=12,e(L()),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(e){return t.apply(this,arguments)}}()},addContactOperation:function(t){return function(){var e=Object(b.a)(l.a.mark((function e(n){var r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(L()),e.prev=1,e.next=4,S.a.post("https://phonebook-3ae5c-default-rtdb.firebaseio.com/contacts.json",t);case 4:r=e.sent,a=r.data,n(y(Object(N.a)(Object(N.a)({},t),{},{id:a.name}))),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(A(e.t0.response.data.error));case 12:return e.prev=12,n(L()),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(t){return e.apply(this,arguments)}}()},deleteContactsOperation:function(t){return function(){var e=Object(b.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(L()),e.prev=1,e.next=4,S.a.delete("https://phonebook-3ae5c-default-rtdb.firebaseio.com/contacts/".concat(t,".json"));case 4:n(k(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(A(e.t0.response.data.error));case 10:return e.prev=10,n(L()),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[1,7,10,13]])})));return function(t){return e.apply(this,arguments)}}()},filterContacts:F},M=Object(i.b)((function(t){return{contacts:E(t),filter:J(t),error:Z(t),filterContacts:q(t)}}),I)(B),P=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(M,{})})},$=n(6),G=n(20),K=Object(g.c)([],(r={},Object(h.a)(r,y,(function(t,e){var n=e.payload;return[].concat(Object(G.a)(t),[n])})),Object(h.a)(r,k,(function(t,e){var n=e.payload;return Object(G.a)(t.filter((function(t){return t.id!==n})))})),Object(h.a)(r,w,(function(t,e){return e.payload})),r)),Q=Object(g.c)("",Object(h.a)({},F,(function(t,e){return e.payload}))),R=Object(g.c)(!1,Object(h.a)({},L,(function(t){return!t}))),T=Object(g.c)("",(a={},Object(h.a)(a,A,(function(t,e){return e.payload})),Object(h.a)(a,D,(function(){return""})),a)),U=(Object($.b)({contacts:K,filter:Q,isLoadind:R,error:T}),Object($.b)({contacts:K,filter:Q})),V=Object(g.a)({reducer:U});s.a.render(Object(O.jsx)(i.a,{store:V,children:Object(O.jsx)(P,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.2892131f.chunk.js.map