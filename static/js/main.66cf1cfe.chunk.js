(this["webpackJsonpap-student"]=this["webpackJsonpap-student"]||[]).push([[0],{206:function(e,t,a){},207:function(e,t,a){},213:function(e,t,a){},281:function(e,t,a){},298:function(e,t,a){},300:function(e,t,a){},301:function(e,t,a){},302:function(e,t,a){},303:function(e,t,a){},304:function(e,t,a){},305:function(e,t,a){},324:function(e,t,a){},325:function(e,t,a){},326:function(e,t,a){},327:function(e,t,a){},328:function(e,t,a){},329:function(e,t,a){},330:function(e,t,a){},331:function(e,t,a){},332:function(e,t,a){},333:function(e,t,a){},334:function(e,t,a){},335:function(e,t,a){},336:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(30),i=a.n(s),o=(a(206),a(207),a(44)),r=a(29),l=a(24),j=a(22),d=a(197),u=a(3),b=Object(n.createContext)(),p=function(e){var t=Object(n.useState)(),a=Object(j.a)(t,2),c=a[0],s=a[1];return Object(u.jsx)(b.Provider,{value:[c,s],children:e.children})},O=["component"],h=function(e){var t=e.component,a=Object(d.a)(e,O),c=Object(n.useContext)(b),s=Object(j.a)(c,1)[0];return Object(u.jsx)(r.b,Object(l.a)(Object(l.a)({},a),{},{render:function(e){return s?Object(u.jsx)(t,Object(l.a)({},e)):Object(u.jsx)(r.a,{to:"/"})}}))},m=a(340);a(213);var x=function(){var e=m.a.Header;return Object(u.jsx)(e,{className:"site-layout-background Header",children:Object(u.jsxs)("div",{className:"logout",children:[Object(u.jsx)("span",{children:" \ud83d\udc68\u200d\ud83c\udf93 ad"}),Object(u.jsx)("span",{children:"MISSION"})]})})},f=a(357),v=a(155),g=m.a.Sider,y=v.a.SubMenu;var S=function(e){var t=e.data,a=e.haveSubMenu,c=e.isCollapsible,s=Object(n.useState)(!1),i=Object(j.a)(s,2),r=i[0],l=i[1],d=1;return Object(u.jsx)(g,{width:210,className:"site-layout-background",collapsible:c,collapsed:r,onCollapse:function(){return function(e){console.log(e),l(e)}(!r)},children:Object(u.jsxs)(v.a,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%",borderRight:0},children:[!0===a?Object(u.jsxs)(y,{icon:Object(u.jsx)(f.a,{}),title:"Notifications",children:[Object(u.jsx)(v.a.Item,{children:"New in Queries !"},"9"),Object(u.jsx)(v.a.Item,{children:"Application Generated !"},"10"),Object(u.jsx)(v.a.Item,{children:"No. Of Students Increasing !"},"11"),Object(u.jsx)(v.a.Item,{children:"Notice Generated !"},"12")]},"sub3"):Object(u.jsx)(u.Fragment,{}),t.map((function(e){return Object(u.jsxs)(v.a.Item,{icon:e.icon,children:[Object(u.jsx)("span",{children:e.title}),Object(u.jsx)(o.b,{to:e.linkTo})]},d++)}))]})})},N=m.a.Footer;function D(){return Object(u.jsx)(N,{style:{textAlign:"center"},children:"Handle My Admissions @2021"})}a(349);var P=a(352),T=a(343);a(281);function C(){return Object(u.jsx)(T.a,{dateCellRender:function(e){var t=function(e){var t;switch(e.date()){case 8:t=[{type:"warning",content:"Due Date Passed!"},{type:"success",content:"Successfully Submitted the BTECH Application"}];break;case 10:t=[{type:"warning",content:"Payment Remaining"},{type:"success",content:"Mark sheet Uploaded in MBA application"}];break;case 15:t=[{type:"warning",content:"BSc Application is out now !"},{type:"warning",content:"Something New in Notices"}]}return t||[]}(e);return Object(u.jsx)("ul",{className:"events",children:t.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)(P.a,{status:e.type,text:e.content})},e.content)}))})},monthCellRender:function(e){var t=function(e){if(8===e.month())return 1}(e);return t?Object(u.jsxs)("div",{className:"notes-month",children:[Object(u.jsx)("section",{children:t}),Object(u.jsx)("span",{children:"Backlog number"})]}):null}})}a(298);var A=a(346),I=a(358);function _(e){var t=e.title,a=e.subSpan;return Object(u.jsxs)("div",{className:"SDashboard_Card",children:[Object(u.jsx)("div",{className:"SDashboard_Card_Title",children:Object(u.jsx)(A.a.Title,{level:4,children:t})}),Object(u.jsxs)("div",{className:"SDashboard_Card_Body",children:[Object(u.jsx)("div",{className:"SDashboard_Card_Bodytext",children:Object(u.jsx)(A.a.Text,{children:a.map((function(e){return Object(u.jsx)("span",{children:e+" | "})}))})}),Object(u.jsx)("div",{className:"SDashboard_Card_BodySymbol",children:Object(u.jsx)(I.a,{})})]})]})}var w=a(154),k=a(345),q=a(350),E=a(41),F=(a(300),w.a.Option);k.a.Item,w.a;function z(e){e.from;var t=e.data,a=e.apiFunc,c=e.formState,s=Object(n.useState)(c),i=Object(j.a)(s,2),o=i[0],r=i[1],d=function(e){r(Object(l.a)({},o))};return Object(u.jsxs)(k.a,{onFinish:a,id:"ProfileForm",children:[t.map((function(e){return Object(u.jsx)(k.a.Item,{name:e.name,label:e.label,rules:e.rules,children:e.haveOption?Object(u.jsx)(w.a,{placeholder:"select your gender",value:o.Gender,onChange:d,children:e.options.map((function(e){return Object(u.jsx)(F,{value:e,children:e})}))}):Object(u.jsx)(q.a.TextArea,{placeholder:e.label,value:o[(t=e.name,t.replace(/(?:^\w|[A-Z]|\b\w)/g,(function(e,t){return 0==t?e.toLowerCase():e.toUpperCase()})).replace(/\s+/g,""))],onChange:d,rows:e.isDescriptive?4:1})});var t})),Object(u.jsx)(k.a.Item,{children:Object(u.jsx)(E.a,{type:"primary",htmlType:"submit",children:"Save"})})]})}a(301);function M(e){var t=e.data;return Object(u.jsxs)("div",{className:"Subcard",children:[Object(u.jsx)("div",{children:Object(u.jsx)(A.a.Text,{type:"secondary",children:t.title})}),Object(u.jsx)("div",{children:Object(u.jsx)(A.a.Text,{children:t.subtitle})})]})}a(302);var B=a(199);function R(){return Object(u.jsx)("div",{className:"ApplicationDownloadPanel",children:[{text:"Application Print"},{text:"Payement Receipt"}].map((function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"ApplicationDownloadPanel_down",children:Object(u.jsx)(B.a,{style:{color:"blue"}})}),Object(u.jsx)("div",{className:"ApplicationDownloadPanel_text",children:Object(u.jsx)(A.a.Text,{children:e.text})})]})}))})}var L=a(354);function J(){return Object(u.jsxs)(L.a,{type:"navigation",current:1,onChange:function(){},size:"small",className:"ApplicationSteps",children:[Object(u.jsx)(L.a.Step,{status:"finish",icon:"",title:"Personal Details"}),Object(u.jsx)(L.a.Step,{status:"process",icon:"",title:"Contact Information"}),Object(u.jsx)(L.a.Step,{status:"wait",icon:"",title:"Documents"}),Object(u.jsx)(L.a.Step,{status:"wait",icon:Object(u.jsx)("div",{}),title:"Payment"})]})}var H=a(94),U=a(56);a(303);a(304);var G=a(351),Q=a(359);function Y(){return Object(u.jsxs)("div",{className:"ProfilePicCard",children:[Object(u.jsx)("div",{className:"ProfileImg",children:Object(u.jsx)(G.a,{shape:"square",size:200,icon:Object(u.jsx)(Q.a,{})})}),Object(u.jsxs)("div",{className:"ProfileFooter",children:[Object(u.jsx)("div",{style:{marginRight:"0.8em"},children:Object(u.jsx)(E.a,{type:"dashed",children:"Remove"})}),Object(u.jsx)("div",{children:Object(u.jsx)(E.a,{type:"dashed",children:"Upload"})})]})]})}var K=a(341),Z=a(342),X=a(356);a(305);function W(){var e=Object(n.useContext)(b),t=Object(j.a)(e,2),c=t[0],s=(t[1],Object(n.useState)()),i=Object(j.a)(s,2),o=i[0],r=i[1],l=Object(n.useState)(0),d=Object(j.a)(l,2),p=d[0],O=(d[1],JSON.parse(c));return Object(n.useEffect)((function(){a(47)({method:"get",url:"https://0icg981cjj.execute-api.us-east-1.amazonaws.com/d1/items?email=".concat(O.email),headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("id_token"))}}).then((function(e){var t=JSON.parse(e.data);r(t.body),console.log(t.body)})).catch((function(e){console.log(e)}))}),[p]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(H.a,{style:{marginTop:"1.2em"},children:Object(u.jsxs)(U.a,{span:24,children:[Object(u.jsx)(A.a.Title,{level:3,children:" Your Profile"}),Object(u.jsx)(K.a,{})]})}),Object(u.jsxs)(H.a,{children:[Object(u.jsx)(U.a,{span:10,children:Object(u.jsx)(G.a,{shape:"square",size:100,icon:Object(u.jsx)(Q.a,{})})}),Object(u.jsxs)(U.a,{span:14,children:[Object(u.jsx)("div",{className:"ProfileDataRender",children:Object(u.jsxs)(A.a.Title,{level:5,children:[" Name : ",void 0!=o?o.name:Object(u.jsx)(Z.a,{})]})}),Object(u.jsx)("div",{className:"ProfileDataRender",children:Object(u.jsxs)(A.a.Title,{level:5,children:["Date Of Birth : ",void 0!=o?o.dob:Object(u.jsx)(Z.a,{})]})}),Object(u.jsx)("div",{className:"ProfileDataRender",children:Object(u.jsxs)(A.a.Title,{level:5,children:["Email : ",void 0!=o?o.email:Object(u.jsx)(Z.a,{})]})}),Object(u.jsx)("div",{className:"ProfileDataRender",children:Object(u.jsxs)(A.a.Title,{level:5,children:["Gender : ",void 0!=o?o.gender:Object(u.jsx)(Z.a,{})]})}),Object(u.jsx)("div",{className:"ProfileDataRender",children:Object(u.jsxs)(A.a.Title,{level:5,children:["Nationality : ",void 0!=o?o.nationality:Object(u.jsx)(Z.a,{})]})}),Object(u.jsx)("div",{className:"ProfileDataRender",children:Object(u.jsxs)(A.a.Title,{level:5,children:["Phone Number  : ",void 0!=o?o.phone:Object(u.jsx)(Z.a,{})]})}),Object(u.jsxs)("div",{className:"ProfileDataRender",children:[Object(u.jsx)(X.a,{color:"magenta",children:"No. Of Application : 5"}),Object(u.jsx)(X.a,{color:"red",children:"Queries : 3"}),Object(u.jsx)(X.a,{color:"volcano",children:"Pending : 7"}),Object(u.jsx)(X.a,{color:"orange",children:"Solved Queries : 10"}),Object(u.jsx)(X.a,{color:"gold",children:"No. Of Documents uploaded : 3"}),Object(u.jsx)(X.a,{color:"lime",children:"No. Of Notices : 11"})]})]})]})]})}var V=A.a.Title;function $(){var e=Object(n.useContext)(b),t=Object(j.a)(e,2),a=t[0],c=(t[1],JSON.parse(a));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(H.a,{style:{marginTop:"1.2em"},children:Object(u.jsx)(V,{level:3,children:"Edit Profile"})}),Object(u.jsxs)(H.a,{style:{marginTop:"1.2em"},children:[Object(u.jsx)(U.a,{xl:7,xs:24,children:Object(u.jsx)(Y,{})}),Object(u.jsx)(U.a,{xl:1,xs:0,children:Object(u.jsx)("div",{})}),Object(u.jsx)(U.a,{xl:16,xs:24,children:Object(u.jsx)(z,{from:"profile",data:[{name:"firstname",label:"First Name",rules:[{type:"string",message:"Must not contain numbers and special characters"},{required:!0,message:"Please input your name!"}],haveOption:!1},{name:"lastname",label:"Last Name",rules:[{type:"string",message:"Must not contain numbers and special characters"},{required:!0,message:"Please input your name!"}],haveOption:!1},{name:"dateofbirth",label:"Date of Birth",rules:[{type:"date",message:"Enter the DOB"},{required:!1,message:"DOb is required!"}],haveOption:!1},{name:"gender",label:"Gender",rules:[{required:!1,message:"Please select gender!"}],haveOption:!0,options:["Male","Female","Other"]},{name:"phone",label:"Phone Number",rules:[{required:!0,message:"Please input your phone number!"}],haveOption:!1},{name:"Nationality",label:"Nationality",rules:[{type:"string",message:"Must not contain numbers and special characters"},{required:!0,message:"Please input your nationality!"}]}],apiFunc:function(e){if(null!=sessionStorage.getItem("id_token")){var t=sessionStorage.getItem("id_token"),a=new Headers;a.append("Authorization","Bearer ".concat(t)),a.append("Content-Type","application/json");var n=JSON.stringify({email:c.email,nationality:e.Nationality,dob:e.dateofbirth,gender:e.gender,name:e.firstname,lastname:e.lastname,phone:e.phone});fetch("https://0icg981cjj.execute-api.us-east-1.amazonaws.com/d1/items",{method:"PUT",headers:a,body:n,redirect:"follow"}).then((function(e){return e.text()})).then((function(e){return console.log(e)})).catch((function(e){return console.log("error",e)})),document.getElementById("ProfileForm").reset()}else alert("Token Not Present !")},formState:{FirstName:"",LastName:"",Phone:"",DOB:"",Gender:"",Nationality:"",Address:""}})})]})]})}function ee(){return Object(u.jsx)("div",{children:Object(u.jsx)(H.a,{style:{marginTop:"1.2em"},children:"Other Settings"})})}function te(){return Object(u.jsx)("div",{children:"Passwords and security."})}a(324);function ae(e){var t=e.title,a=e.subCardData;e.downloadPanelData,e.setpsData;return Object(u.jsx)("div",{className:"ApplicationCard",children:Object(u.jsxs)("div",{className:"ApplicationCard_inner",children:[Object(u.jsx)("div",{className:"ApplicationCard_Title",children:Object(u.jsx)(o.b,{to:"/s/myapplications/".concat(a[0].subtitle),children:Object(u.jsx)(A.a.Title,{level:4,children:t})})}),Object(u.jsx)("div",{className:"ApplicationCard_Details_SubCards_Container",children:a.map((function(e){return Object(u.jsx)(M,{data:e})}))}),Object(u.jsx)("div",{className:"ApplicationCard_Details_DownloadPanel",children:Object(u.jsx)(R,{})}),Object(u.jsx)("div",{className:"ApplicationCard_stepsContainer",children:Object(u.jsx)(J,{})})]})})}a(325);var ne=a(193),ce=a(47),se=a.n(ce),ie=a(151),oe=a.n(ie),re=a(188),le=(a(326),function(e){return new Promise((function(t){var a=document.createElement("script");a.src=e,a.onload=function(){t(!0)},a.onerror=function(){t(!1)},document.body.appendChild(a)}))}),je="localhost"===document.domain;function de(e){console.log(e);var t=Object(n.useState)(""),a=Object(j.a)(t,2),c=(a[0],a[1],JSON.parse(sessionStorage.getItem("u_decoded")));function s(e,t,a){var n=JSON.stringify({amount:100*e,id:t+"_"+a}),c={method:"post",url:"https://0icg981cjj.execute-api.us-east-1.amazonaws.com/d1/payment",headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("id_token")," "),"Content-Type":"application/json"},data:n};se()(c).then((function(e){return sessionStorage.setItem("order_id",e.data.id),e.data.id})).catch((function(e){console.log(e)}))}function i(){return(i=Object(re.a)(oe.a.mark((function t(){var a,n;return oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,le("https://checkout.razorpay.com/v1/checkout.js");case 2:if(t.sent){t.next=6;break}return alert("Razorpay SDK failed to load. Are you online?"),t.abrupt("return");case 6:a=sessionStorage.getItem("order_id"),n={key:je?"rzp_test_NRrhuDEU5IeRQx":"PRODUCTION_KEY",currency:"INR",amount:100*e.amount,order_id:s(e.amount,e.applicationId,c.email),description:"Thank you for paying the Fees.You will hear from us soon !",handler:function(t){console.log(t),e.setPaymentInfo({order_id:a,payment_id:t.razorpay_payment_id})},prefill:{email:null!==c?c.email:"",contact:null!==c?parseInt(c.phone_number.substring(3,13)):""},readonly:{email:!0,contact:!0}},new window.Razorpay(n).open();case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(u.jsx)("div",{children:Object(u.jsxs)(E.a,{type:"primary",onClick:function(){return i.apply(this,arguments)},children:["Pay ",e.amount]})})}var ue=L.a.Step,be=[{title:"Personal Details"},{title:"School Details"},{title:"Entrance Exam"},{title:"Ed Details"},{title:"Documents Upload"},{title:"Payment"}];function pe(e){var t=e.application,a=c.a.useState(0),s=Object(j.a)(a,2),i=s[0],o=s[1],r=Object(n.useState)(!1),d=Object(j.a)(r,2),b=d[0],p=(d[1],t.ApplicationID),O=t.GlobalLabels,h=O["Personal Details"],m=O["Education/School Details"],x=O["Entrance Exam"],f=O["Ed-Level Details"],v=O["Document Uploads"],g=Object(n.useState)({order_id:"",payment_id:""}),y=Object(j.a)(g,2),S=y[0],N=y[1],D=Object(n.useState)({ApplicationID:p,PersonalDetails:h,SchoolDetails:m,EntranceExam:x,EdDetails:f,DocumentUploads:v,PaymentInfo:S}),P=Object(j.a)(D,2),T=P[0],C=P[1],A=JSON.parse(sessionStorage.getItem("u_decoded"));Object(n.useEffect)((function(){I()}),[]);var I=function(){console.log(A.email," ",p);var e={method:"get",url:"https://0icg981cjj.execute-api.us-east-1.amazonaws.com/d1/Get_Submitted_Applications?id=".concat(p,"_").concat(A.email),headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("id_token")),"Content-Type":"application/json"}};se()(e).then((function(e){var t=e.data.body;C(t.Item.submission[0].submissiondata),console.log("\n",t.Item.submission[0].submissiondata,"\n"),console.log(T.PersonalDetails)})).catch((function(e){console.log(e)}))};return Object(u.jsxs)("div",{className:"FormWithSteps",children:[Object(u.jsx)(L.a,{current:i,children:be.map((function(e){return Object(u.jsx)(ue,{title:e.title},e.title)}))}),Object(u.jsx)("div",{className:"steps-content",children:Object(u.jsx)(H.a,{children:Object(u.jsx)(U.a,{span:24,children:Object(u.jsxs)("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault()},id:"DetailForm",children:[0===i&&h.map((function(e,t){return Object(u.jsxs)("div",{className:"personaldetails",children:[Object(u.jsx)("br",{})," ",Object(u.jsx)("label",{children:e.title}),Object(u.jsx)("br",{}),"option"!==e.type&&Object(u.jsx)("input",{type:e.type,value:void 0==T.PersonalDetails[0][t]?"":T.PersonalDetails[0][t].value,onChange:function(e){h[t].value=e.target.value,C(Object(l.a)(Object(l.a)({},T),{},{PersonalDetails:[Object(l.a)({},h)]}))},required:!0,disabled:b}),"option"===e.type&&"Gender"===e.title&&Object(u.jsxs)("select",{value:void 0==T.PersonalDetails[0][t]?"":T.PersonalDetails[0][t].value,onChange:function(e){h[t].value=e.target.value,C(Object(l.a)(Object(l.a)({},T),{},{PersonalDetails:[Object(l.a)({},h)]}))},required:!0,disabled:b,children:[Object(u.jsx)("option",{value:"Male",children:"Male"}),Object(u.jsx)("option",{value:"Female",children:"Female"}),Object(u.jsx)("option",{value:"Others",children:"Others"})]})]})})),1===i&&m.map((function(e,t){return Object(u.jsxs)("div",{className:"schooldetails",children:[Object(u.jsx)("br",{})," ",Object(u.jsx)("label",{children:e.title}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"text",value:void 0==T.SchoolDetails[0][t]?"":T.SchoolDetails[0][t].value,onChange:function(e){m[t].value=e.target.value,C(Object(l.a)(Object(l.a)({},T),{},{SchoolDetails:[Object(l.a)({},m)]}))},required:!0,disabled:b})]})})),2===i&&x.map((function(e,t){return Object(u.jsxs)("div",{className:"entaranceexamdetails",children:[Object(u.jsx)("br",{})," ",Object(u.jsx)("label",{children:e.title}),Object(u.jsx)("br",{}),"option"!==e.type&&Object(u.jsx)("input",{type:e.type,value:void 0==T.EntranceExam[0][t]?"":T.EntranceExam[0][t].value,onChange:function(e){x[t].value=e.target.value,C(Object(l.a)(Object(l.a)({},T),{},{EntranceExam:[Object(l.a)({},x)]}))},required:!0,disabled:b}),"option"===e.type&&"Status"===e.title&&Object(u.jsxs)("select",{value:void 0==T.PersonalDetails[0][t]?"":T.PersonalDetails[0][t].value,onChange:function(e){h[t].value=e.target.value,C(Object(l.a)(Object(l.a)({},T),{},{PersonalDetails:[Object(l.a)({},h)]}))},required:!0,disabled:b,children:[Object(u.jsx)("option",{value:"Pending",children:"Pending"}),Object(u.jsx)("option",{value:"Results Declared",children:"Results declared"})]})]})})),3===i&&f.map((function(e,t){return Object(u.jsxs)("div",{children:[Object(u.jsx)("br",{})," ",Object(u.jsx)("label",{children:e.title}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"text",value:void 0==T.EdDetails[0][t]?"":T.EdDetails[0][t].value,onChange:function(e){f[t].value=e.target.value,C(Object(l.a)(Object(l.a)({},T),{},{EdDetails:[Object(l.a)({},f)]}))},required:!0,disabled:b})]})})),4===i&&v.map((function(e,t){return Object(u.jsxs)("div",{children:[Object(u.jsx)("br",{})," ",Object(u.jsx)("label",{children:e.title}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"file",value:void 0==T.DocumentUploads[0][t]?"":T.DocumentUploads[0][t].value,onChange:function(e){v[t].value=e.target.value,C(Object(l.a)(Object(l.a)({},T),{},{DocumentUploads:[Object(l.a)({},v)]}))},required:!0,disabled:b})]})})),5===i&&Object(u.jsx)(de,{amount:t.fees,applicationId:p,PaymentInfo:S,setPaymentInfo:N})]})})})}),Object(u.jsxs)("div",{className:"steps-action",children:[i<be.length-1&&Object(u.jsx)(E.a,{type:"primary",onClick:function(){o(i+1),function(e){console.log("val",e);var t={applicationid:e.ApplicationID,email:A.email,submission:{submissiontimestamp:Date.now(),submissiondata:e}};console.log(t);var a={method:"put",url:"https://0icg981cjj.execute-api.us-east-1.amazonaws.com/d1/putapplication",headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("id_token")),"Content-Type":"application/json"},data:t};se()(a).then((function(e){console.log(JSON.stringify(e.data))})).catch((function(e){console.log(e)}))}(Object(l.a)(Object(l.a)({},T),{},{PaymentInfo:S}))},children:"Next"}),i===be.length-1&&Object(u.jsx)(E.a,{type:"primary",onClick:function(){ne.b.success("Processing complete!")},children:"Submit Application"}),i>0&&Object(u.jsx)(E.a,{style:{margin:"0 8px"},onClick:function(){o(i-1)},children:"Previous"})]})]})}var Oe=a(355);function he(e){var t=e.queryCarddata;return console.log("Hello"),console.log(t),Object(u.jsx)("div",{className:"querycard",children:Object(u.jsxs)(Oe.a,{size:"small",children:[Object(u.jsxs)(H.a,{children:[Object(u.jsx)(U.a,{span:12,children:Object(u.jsx)(A.a.Title,{level:4,children:t.subject})}),Object(u.jsxs)(U.a,{span:4,children:[Object(u.jsx)(A.a.Text,{children:"Status: "}),Object(u.jsx)(A.a.Text,{keyboard:!0,type:t.querystatus.keyboardtype,children:t.querystatus.tag})]}),Object(u.jsx)(U.a,{span:6,offset:2,children:Object(u.jsxs)(A.a.Title,{level:5,children:["Created On : ",t.querydate," ",t.querytime]})})]}),Object(u.jsx)("details",{children:Object(u.jsxs)(H.a,{children:[Object(u.jsx)(U.a,{span:24,children:Object(u.jsxs)(A.a.Text,{italic:!0,children:["Query ID: ",t.queryid]})}),Object(u.jsx)(U.a,{span:18,children:Object(u.jsxs)(A.a.Text,{children:["Description : ",t.querydesc]})})]})}),Object(u.jsx)("details",{children:Object(u.jsx)("summary",{children:"Responses"})})]})})}var me=a(347),xe=a(198),fe=a(200),ve=a(92),ge=(a(327),Oe.a.Meta);function ye(){var e=Object(n.useState)(),t=Object(j.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e={method:"get",url:"https://0icg981cjj.execute-api.us-east-1.amazonaws.com/d1/notices",headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("id_token"))}};se()(e).then((function(e){var t=JSON.parse(e.data);200==t.ResponseMetadata.HTTPStatusCode?c(t.Items):console.log("Error!"),console.log(t)})).catch((function(e){console.log(e)}))}),[]),Object(u.jsx)("div",{className:"ViewNotices",children:Object(u.jsx)(H.a,{sm:24,md:12,lg:6,xl:6,gutter:24,children:void 0==a?Object(u.jsx)(Z.a,{}):a.map((function(e,t){return Object(u.jsx)(U.a,{children:Object(u.jsx)(Oe.a,{style:{width:300,marginTop:16},actions:[Object(u.jsx)(xe.a,{},"edit"),Object(u.jsx)(fe.a,{},"delete"),Object(u.jsx)(ve.a,{},"ellipsis")],extra:e.NoticeID,children:Object(u.jsx)(me.a,{loading:!1,avatar:!0,active:!0,children:Object(u.jsx)(ge,{title:e.title,description:Object(u.jsx)(u.Fragment,{children:e.description})})})})},t)}))})})}a(328);function Se(){return Object(u.jsx)("div",{className:"SDashboard",style:{marginTop:"1.5em"},children:Object(u.jsxs)(m.a,{style:{minHeight:"85vh"},children:[Object(u.jsxs)(H.a,{children:[Object(u.jsx)(U.a,{xs:24,xl:24,children:Object(u.jsx)("div",{className:"SDashboard_TopTitle",children:Object(u.jsxs)(A.a.Title,{level:3,children:["Greetings ",JSON.parse(sessionStorage.getItem("u_decoded")).name.toUpperCase()," !"]})})}),Object(u.jsx)(U.a,{xs:24,xl:24,children:Object(u.jsx)("div",{className:"SDashboard_SubTitle",children:Object(u.jsx)(A.a.Text,{type:"secondary",children:"Welcome to Admission Portal of XYZ university.Choose form any of the below options, to continue your at XYZ university."})})})]}),Object(u.jsxs)(H.a,{gutter:[16,8],children:[Object(u.jsx)(U.a,{md:16,children:Object(u.jsxs)(H.a,{gutter:[8,8],children:[Object(u.jsx)(U.a,{md:12,className:"gutter-row",children:Object(u.jsx)(_,{title:"Last Active Form",subSpan:["Continue"]})}),Object(u.jsx)(U.a,{md:12,className:"gutter-row",children:Object(u.jsx)(_,{title:"My Applications",subSpan:["6 in progress","0 completed"]})}),Object(u.jsx)(U.a,{md:24,className:"gutter-row",children:Object(u.jsx)(_,{title:"My Queries",subSpan:["4 open","0 in progress","1 closed"]})}),Object(u.jsx)(U.a,{md:24,className:"gutter-row",children:Object(u.jsx)(_,{title:"Program Finder",subSpan:["22 programs available"]})})]})}),Object(u.jsx)(U.a,{md:8,children:Object(u.jsxs)("div",{className:"SDashboard_NotificationContainer",children:[Object(u.jsx)("div",{style:{paddingTop:"0.6em",paddingLeft:"0.6em"},children:Object(u.jsx)(A.a.Title,{level:4,children:"Latest Notifications"})}),Object(u.jsx)("div",{style:{paddingLeft:"1.5em"},className:"SDashboard_NotificationContainer_Body",children:Object(u.jsxs)(L.a,{direction:"vertical",progressDot:!0,current:101,children:[Object(u.jsx)(L.a.Step,{title:"Join our experts in an exclusive webinar on 'Careers after BTECH'",description:" 15 Oct 2021"}),Object(u.jsx)(L.a.Step,{title:"results of Aptitude Test phase 1 is out",description:"12 Oct 2021"}),Object(u.jsx)(L.a.Step,{title:"Last date to submit your Application form has been extended till 31st Oct 2021.",description:"12 Oct 2021"}),Object(u.jsx)(L.a.Step,{title:"Join our experts in an exclusive webinar on 'Careers after BTECH'",description:" 15 Oct 2021"}),Object(u.jsx)(L.a.Step,{title:"results of Aptitude Test phase 1 is out",description:"12 Oct 2021"})]})})]})})]})]})})}a(329);var Ne=a(344),De=a(360);function Pe(){var e=Ne.a.Dragger,t=Object(n.useState)(),a=Object(j.a)(t,2),c=(a[0],a[1]),s={name:"file",accept:".pdf",headers:{"content-type":"application/pdf"},multiple:!1,action:"https://0icg981cjj.execute-api.us-east-1.amazonaws.com/d1/studentupload",onChange:function(e){console.log(e)},onDrop:function(e){console.log("Dropped files",e.dataTransfer.files)}};return Object(u.jsxs)("div",{className:"Documents",style:{marginTop:"1.5em"},children:[Object(u.jsxs)(e,Object(l.a)(Object(l.a)({},s),{},{children:[Object(u.jsx)("p",{className:"ant-upload-drag-icon",children:Object(u.jsx)(De.a,{})}),Object(u.jsx)("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"}),Object(u.jsx)("p",{className:"ant-upload-hint",children:"Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files"})]})),Object(u.jsx)("input",{id:"fileinput",type:"file",accept:".gif,.jpg,.jpeg,.png",onChange:function(e){e.target.files[0]&&c(e.target.files[0])}})]})}function Te(){return Object(u.jsx)("div",{className:"site-layout-background",style:{marginTop:"3em"},children:Object(u.jsx)(C,{})})}a(330);var Ce=a(153),Ae=Object(n.createContext)(),Ie=function(e){var t=Object(n.useState)({}),a=Object(j.a)(t,2),c=a[0],s=a[1];return Object(u.jsx)(Ae.Provider,{value:[c,s],children:e.children})},_e=Ce.a.TabPane,we=[{title:"BTech Application Form",subCard:[{title:"Appication No.",subtitle:"..."},{title:"Applcation Fee",subtitle:"..."},{title:"Last Date",subtitle:"..."},{title:"Payment Mode",subtitle:"..."}],downloadPanelData:[],setpsData:[]}];function ke(){var e=Object(n.useState)(0),t=Object(j.a)(e,2),a=t[0],c=(t[1],Object(n.useState)(we)),s=Object(j.a)(c,2),i=s[0],o=s[1],r=Object(n.useContext)(Ae),l=Object(j.a)(r,2),d=l[0],b=l[1],p=[];return Object(n.useEffect)((function(){var e={method:"get",url:"https://0icg981cjj.execute-api.us-east-1.amazonaws.com/d1/applications",headers:{Authorization:sessionStorage.getItem("id_token")?sessionStorage.getItem("id_token"):""}};se()(e).then((function(e){p=e.data.Items,o(p),b(p),p.map((function(e){}))})).catch((function(e){console.log(e)}))}),[a]),console.log(d),Object(u.jsx)("div",{className:"myApplications",style:{marginTop:"1.5em"},children:Object(u.jsx)(m.a,{style:{minHeight:"85vh"},children:Object(u.jsxs)(H.a,{children:[Object(u.jsx)(U.a,{span:24,children:Object(u.jsx)("div",{className:"myApplications_TopTitle",children:Object(u.jsx)(A.a.Title,{level:2,children:"My Applications"})})}),Object(u.jsx)(U.a,{span:24,children:Object(u.jsx)("div",{className:"myApplications_SubTitle",children:Object(u.jsx)(A.a.Text,{type:"secondary",children:"Track all your applications for XYZ university from here."})})}),Object(u.jsx)(U.a,{span:24,children:Object(u.jsxs)(Ce.a,{defaultActiveKey:"1",onChange:function(){},children:[Object(u.jsx)(_e,{tab:"".concat(i.length," Applcations(s) open"),children:i.length<2?Object(u.jsx)(Z.a,{}):i.map((function(e){return Object(u.jsx)(ae,{title:e.title,subCardData:[{title:"Application No.",subtitle:e.ApplicationID},{title:"Application Fee",subtitle:e.fees},{title:"Last Date",subtitle:e.lastDate},{title:"Payment Mode",subtitle:"online"}],downloadPanelData:e.downloadPanelData,setpsData:e.setpsData},e.ApplicationID)}))},"1"),Object(u.jsx)(_e,{tab:"0 Application(s) completed",children:"Completed Applications"},"2")]})})]})})})}var qe=a(348),Ee=a(361),Fe=[{name:"subject",label:"Subject",rules:[{required:!0,message:"Please input the Subject !"}],haveOption:!1},{name:"description",label:"Description",rules:[{required:!0,message:"Please input the Description !"}],haveOption:!1,isDescriptive:!0}],ze=a(353),Me=(a(331),Ce.a.TabPane),Be=0,Re=function(){var e=new Date;return String(e.getDate()).padStart(2,"0")+"-"+String(e.getMonth()+1).padStart(2,"0")+"-"+e.getFullYear()};function Le(){var e=Object(n.useState)(),t=Object(j.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(0),i=Object(j.a)(s,2),o=i[0],r=i[1],l=Object(n.useState)(!1),d=Object(j.a)(l,2),b=d[0],p=d[1],O=function(){p(!1)},h=JSON.parse(sessionStorage.getItem("u_decoded"));Object(n.useEffect)((function(){var e={method:"get",url:"https://0icg981cjj.execute-api.us-east-1.amazonaws.com/d1/studentqueries?email=".concat(h.email),headers:{Authorization:sessionStorage.getItem("id_token")?sessionStorage.getItem("id_token"):""}};se()(e).then((function(e){c(e.data.response.queries)})).catch((function(e){console.log(e)}))}),[o]);var x=Object(u.jsx)(E.a,{id:"createquery",type:"primary",shape:"round",icon:Object(u.jsx)(Ee.a,{}),size:"medium",onClick:function(){p(!0)},children:"Create a Query"});return Object(u.jsxs)("div",{className:"myquery",children:[Object(u.jsx)(m.a,{children:Object(u.jsxs)(H.a,{children:[Object(u.jsx)(U.a,{span:20,children:Object(u.jsx)("div",{className:"myquery_TopTitle",children:Object(u.jsx)(A.a.Title,{level:2,children:"My Queries"})})}),Object(u.jsx)(U.a,{span:23,children:Object(u.jsxs)(Ce.a,{tabBarExtraContent:x,children:[Object(u.jsx)(Me,{tab:"All",children:Object(u.jsx)(H.a,{children:Object(u.jsx)(U.a,{span:24,children:void 0!==a?a.map((function(e){return Object(u.jsx)(he,{queryCarddata:e})})):Object(u.jsx)(Z.a,{})})})},Be++),Object(u.jsx)(Me,{tab:"Solved",children:Object(u.jsx)(H.a,{children:Object(u.jsx)(U.a,{span:24,children:void 0!==a?a.map((function(e){return e.querystatus.status?Object(u.jsx)(he,{queryCarddata:e}):Object(u.jsx)("div",{})})):Object(u.jsx)("div",{})})})},Be++),Object(u.jsx)(Me,{tab:"Pending",children:Object(u.jsx)(H.a,{children:Object(u.jsx)(U.a,{span:24,children:void 0!==a?a.map((function(e){return e.querystatus.status?null:Object(u.jsx)(he,{queryCarddata:e})})):Object(u.jsx)("div",{})})})},Be++)]})})]})}),Object(u.jsx)(qe.a,{title:"Create Your Query",visible:b,m:!0,footer:null,onOk:function(){p(!1)},onCancel:O,children:Object(u.jsx)(z,{from:"myQueries",data:Fe,apiFunc:function(e){var t=JSON.stringify({email:h.email,qObj:{querydate:Re(),querystatus:{keyboardtype:"danger",tag:"UnSolved",status:0},subject:e.subject,assignee:"Alex",querytimestamp:(new Date).toLocaleTimeString(),querydesc:e.description,queryid:Object(ze.a)()}}),a={method:"put",url:"https://0icg981cjj.execute-api.us-east-1.amazonaws.com/d1/studentqueries",headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("id_token")),"Content-Type":"application/json"},data:t};se()(a).then((function(e){document.getElementById("ProfileForm").reset(),r(o+1),O()})).catch((function(e){console.log(e)}))},formState:{Subject:"",Description:""}})})]})}a(332);function Je(){var e=Object(r.g)(),t=Object(n.useContext)(Ae),a=Object(j.a)(t,1)[0],c=Object(n.useState)(),s=Object(j.a)(c,2),i=s[0],o=s[1],l=e.location.pathname.split("/")[3];return Object(n.useEffect)((function(){a.map((function(e){e.ApplicationID==l&&void 0!=e.ApplicationID&&o(e)})),console.log(i)}),[]),Object(u.jsx)("div",{className:"Application",children:Object(u.jsxs)(m.a,{style:{padding:"2em"},children:[Object(u.jsx)(A.a.Title,{level:3,children:"Application"}),void 0!=i&&Object(u.jsx)(pe,{application:i})]})})}a(333),Ce.a.TabPane;function He(){return Object(u.jsxs)("div",{className:"Notices",children:[Object(u.jsx)(A.a.Title,{level:4,style:{paddingTop:"0.7em",marginLeft:"0.6em"},children:"Notices"}),Object(u.jsx)(K.a,{}),Object(u.jsx)(ye,{})]})}var Ue=a(362),Ge=a(363),Qe=a(364),Ye=(a(334),Ce.a.TabPane),Ke=[{title:"Profile",component:Object(u.jsx)(W,{}),icon:Object(u.jsx)(Q.a,{})},{title:"Edit Profile",component:Object(u.jsx)($,{}),icon:Object(u.jsx)(Ue.a,{})},{title:"Password & Security",component:Object(u.jsx)(te,{}),icon:Object(u.jsx)(Ge.a,{})},{title:"Other Settings",component:Object(u.jsx)(ee,{}),icon:Object(u.jsx)(Qe.a,{})}];function Ze(){return Object(u.jsx)("div",{className:"Profile",style:{marginTop:"2em"},children:Object(u.jsx)(o.a,{children:Object(u.jsx)(m.a,{children:Object(u.jsx)(Ce.a,{defaultActiveKey:"1",tabPosition:"left",style:{minHeight:"80vh"},type:"card",children:Ke.map((function(e){return Object(u.jsx)(Ye,{tab:Object(u.jsxs)("span",{children:[e.icon,e.title]}),children:e.component},e.title)}))})})})})}a(335);var Xe=a.p+"static/media/build.dad12638.jpg";function We(){Object(r.g)();return Object(u.jsx)("div",{className:"Landing",children:Object(u.jsxs)("section",{className:"showcase",children:[Object(u.jsx)("img",{src:Xe,alt:"..."}),Object(u.jsx)("div",{className:"overlay"}),Object(u.jsxs)("div",{className:"text",children:[Object(u.jsx)("h2",{children:"adMISSION Portal "}),Object(u.jsx)("h3",{children:"admit with ease"}),Object(u.jsx)("p",{children:"HANDLE MY ADMISSIONS is a platform that can help high school candidates to manage their college applications. The platform serves as the central hub for the applicants for their end-to-end application journey. It also serves as a central hub for institutions in order to manage the incoming applications."}),Object(u.jsx)("a",{href:"https://handleallmyadmissions.auth.us-east-1.amazoncognito.com/login?client_id=4rnkgoi7il6kdf8foo0o929bm8&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=http://localhost:3000/Interm/",children:"LETS GO!"})]})]})})}var Ve=a(365),$e=a(366),et=a(367),tt=a(368),at=a(369),nt=m.a.Content;function ct(){var e=[{title:"Dashboard",linkTo:"/s/",icon:Object(u.jsx)(Ve.a,{})},{title:"My Applications",linkTo:"/s/myapplications",icon:Object(u.jsx)($e.a,{})},{title:"Documents",linkTo:"/s/docs",icon:Object(u.jsx)(et.a,{})},{title:"Calendar",linkTo:"/s/calendar",icon:Object(u.jsx)(tt.a,{})},{title:"My Queries",linkTo:"/s/myqueries",icon:Object(u.jsx)(at.a,{})},{title:"Profile",linkTo:"/s/Profile",icon:Object(u.jsx)(Q.a,{})},{title:"Notices",linkTo:"/s/Notices",icon:Object(u.jsx)(at.a,{})}];return Object(u.jsx)(o.a,{children:Object(u.jsxs)(m.a,{style:{minHeight:"100vh"},children:[Object(u.jsx)(x,{}),Object(u.jsxs)(m.a,{className:"site-layout",children:[Object(u.jsx)(S,{data:e,haveSubMenu:!0,isCollapsible:!0}),Object(u.jsxs)(m.a,{style:{minHeight:"100vh"},children:[Object(u.jsx)(nt,{style:{margin:"0 16px"},children:Object(u.jsxs)(r.d,{children:[Object(u.jsx)(h,{path:"/s/myapplications",component:ke,exact:!0}),Object(u.jsx)(h,{path:"/s/docs",component:Pe,exact:!0}),Object(u.jsx)(h,{path:"/s/calendar",component:Te,exact:!0}),Object(u.jsx)(h,{path:"/s/myqueries",component:Le,exact:!0}),Object(u.jsx)(h,{path:"/s/Profile",component:Ze,exact:!0}),Object(u.jsx)(h,{path:"/s/Notices",component:He,exact:!0}),Object(u.jsx)(h,{path:"/s/myapplications/:ApplicationId",component:Je}),Object(u.jsx)(h,{path:"/s",component:Se,exact:!0}),Object(u.jsx)(r.a,{to:"/"})]})}),Object(u.jsx)(D,{})]})]})]})})}var st=a(189),it=a(152);function ot(){var e=Object(r.g)(),t=Object(n.useContext)(b),a=Object(j.a)(t,2)[1];try{var c,s,i=window.location.href.split("#")[1].split("&")[0],o=new URLSearchParams(i),l=Object(st.a)(o.entries());try{for(l.s();!(s=l.n()).done;){var d=s.value;"id_token"===d[0]&&(c=d[1])}}catch(p){l.e(p)}finally{l.f()}null!=c&&(sessionStorage.setItem("id_token",c),sessionStorage.setItem("u_decoded",JSON.stringify(Object(it.a)(c))),a(JSON.stringify(Object(it.a)(c))),e.push("/s"))}catch(O){console.log(O)}return Object(u.jsx)("div",{children:"Redirecting..."})}var rt=function(){return Object(u.jsx)(o.a,{children:Object(u.jsx)(p,{children:Object(u.jsx)(Ie,{children:Object(u.jsxs)(r.d,{children:[Object(u.jsx)(h,{path:"/s",component:ct,exact:!0}),Object(u.jsx)(r.b,{path:"/ap-student",component:We,exact:!0}),Object(u.jsx)(r.b,{path:"/interm",component:ot,exact:!0}),Object(u.jsx)(r.a,{to:"/ap-student"})]})})})})},lt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,370)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(rt,{})}),document.getElementById("root")),lt()}},[[336,1,2]]]);
//# sourceMappingURL=main.66cf1cfe.chunk.js.map