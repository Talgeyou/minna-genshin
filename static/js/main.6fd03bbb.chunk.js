(this["webpackJsonpminna-genshin"]=this["webpackJsonpminna-genshin"]||[]).push([[0],{100:function(e,t,a){},124:function(e,t,a){e.exports={main:"Home_main__154KV",content:"Home_content__X6WSx",title:"Home_title__3MnUa",title__text:"Home_title__text__3hRt7",paragraph:"Home_paragraph__3MfW2"}},126:function(e,t,a){e.exports={page:"PageLayout_page__wwTwy",content:"PageLayout_content__7Z1zn",main:"PageLayout_main__Tlcqj"}},137:function(e,t,a){e.exports={logo:"SideBar_logo__3ORr9",logo__text:"SideBar_logo__text__3rjJo"}},161:function(e,t,a){e.exports={steps:"DamageValueCalculatorUsage_steps__29-pc"}},173:function(e,t,a){},265:function(e,t,a){"use strict";a.r(t);var c,r=a(0),n=a.n(r),i=a(29),s=a.n(i),l=(a(173),a(31)),o=a(270),u=a(124),j=a.n(u),d=a(5),m=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(o.a.Title,{className:j.a.title,children:Object(d.jsx)("span",{className:j.a.title__text,children:"Minna Genshin"})}),Object(d.jsx)(o.a.Paragraph,{className:j.a.paragraph,children:"This web app is a collection of tools for calculating staff for Genshin Impact"})]})},h=a(96),b=a.n(h),f=a(165),p=a(57),x=a.n(p),O=a(269),_=a(274),v=a(271),g=a(25),y=a(55),C=Object(y.b)({name:"character",initialState:{baseAttack:800,bonusAttack:0,critRate:5,critDamage:50,elementalBonus:0,physicalBonus:0,elementalDamageProportion:50},reducers:{setCharacterBaseAttack:function(e,t){e.baseAttack=t.payload},setCharacterBonusAttack:function(e,t){e.bonusAttack=t.payload},setCharacterCritRate:function(e,t){e.critRate=t.payload},setCharacterCritDamage:function(e,t){e.critDamage=t.payload},setCharacterElementalBonus:function(e,t){e.elementalBonus=t.payload},setCharacterPhysicalBonus:function(e,t){e.physicalBonus=t.payload},setCharacterElementalDamageProportion:function(e,t){e.elementalDamageProportion=t.payload}}}),k=C.actions,A=k.setCharacterBaseAttack,B=k.setCharacterBonusAttack,N=k.setCharacterCritRate,w=k.setCharacterCritDamage,P=k.setCharacterElementalBonus,D=k.setCharacterPhysicalBonus,S=k.setCharacterElementalDamageProportion,I=C.reducer,R=function(e,t){return T(e.baseAttack,e.bonusAttack,t.rawAttack)+E(e.baseAttack,e.bonusAttack,t.attackPercentage)+M(e.critRate,e.critDamage,t.critRate,t.critDamage)+V(e.elementalBonus,t.elementalBonus,e.elementalDamageProportion)+V(e.physicalBonus,t.physicalBonus,100-e.elementalDamageProportion)},T=function(e,t,a){return a/(e+t)},E=function(e,t,a){return e*(a/100)/(e+t)},M=function(e,t,a,c){return e+a>100&&(a=100-e),(e*t/1e4+e*c/1e4+t*a/1e4+a*c/1e4+1)/(e*t/1e4+1)-1},V=function(e,t,a){return 0===e?t/100*a/100:(e/100+t/100)/(e/100)*(a/100)},U=a(65),H={items:[{rawAttack:0,attackPercentage:0,critRate:0,critDamage:0,elementalBonus:0,physicalBonus:0,damageValue:0}]},G=Object(y.b)({name:"artifacts",initialState:H,reducers:{setDamageValue:function(e,t){e.items[t.payload.id].damageValue=t.payload.damageValue},addArtifact:function(e){e.items.push(Object(U.a)({},H.items[0]))},deleteArtifact:function(e,t){e.items.splice(t.payload,1)},resetArtifacts:function(e){e.items=H.items},setArtifactRawAttack:function(e,t){e.items[t.payload.id].rawAttack=t.payload.rawAttack},setArtifactAttackPercentage:function(e,t){e.items[t.payload.id].attackPercentage=t.payload.attackPercentage},setArtifactCritRate:function(e,t){e.items[t.payload.id].critRate=t.payload.critRate},setArtifactCritDamage:function(e,t){e.items[t.payload.id].critDamage=t.payload.critDamage},setArtifactElementalBonus:function(e,t){e.items[t.payload.id].elementalBonus=t.payload.elementalBonus},setArtifactPhysicalBonus:function(e,t){e.items[t.payload.id].physicalBonus=t.payload.physicalBonus}}}),L=G.actions,F=L.setDamageValue,W=L.addArtifact,z=L.deleteArtifact,K=L.resetArtifacts,X=L.setArtifactRawAttack,Q=L.setArtifactAttackPercentage,J=L.setArtifactCritRate,Y=L.setArtifactCritDamage,q=L.setArtifactElementalBonus,Z=L.setArtifactPhysicalBonus,$=G.reducer,ee=function(){var e=Object(g.b)(),t=Object(g.c)((function(e){return e.artifacts.items})),a=Object(g.c)((function(e){return e.character})),c=a.baseAttack,n=a.bonusAttack,i=a.critRate,s=a.critDamage,l=a.elementalBonus,u=a.physicalBonus,j=a.elementalDamageProportion;Object(r.useEffect)((function(){console.log("Effect");for(var c=0;c<t.length;c++)e(F({id:c,damageValue:R(a,t[c])}))}),[a]);return Object(d.jsx)("div",{className:x.a.character,children:Object(d.jsxs)(O.a,{className:x.a.form,layout:"vertical",children:[Object(d.jsx)(o.a.Title,{className:x.a.form__title,level:2,children:"Character"}),Object(d.jsx)(O.a.Item,{children:Object(d.jsx)(_.a,{type:"number",prefix:Object(d.jsx)("div",{className:x.a.field__prefix,children:"Base Attack"}),placeholder:"Character's Base Attack",value:c,onChange:function(t){e(A(+t.currentTarget.value))}})}),Object(d.jsx)(O.a.Item,{children:Object(d.jsx)(_.a,{type:"number",prefix:Object(d.jsx)("div",{className:x.a.field__prefix,children:"Bonus Attack"}),placeholder:"Character's Bonus Attack",value:n,onChange:function(t){e(B(+t.currentTarget.value))}})}),Object(d.jsx)(O.a.Item,{children:Object(d.jsx)(_.a,{type:"number",prefix:Object(d.jsx)("div",{className:x.a.field__prefix,children:"Crit Rate"}),placeholder:"Character's Crit Rate",min:5,value:i,onChange:function(t){e(N(+t.currentTarget.value))}})}),Object(d.jsx)(O.a.Item,{children:Object(d.jsx)(_.a,{type:"number",prefix:Object(d.jsx)("div",{className:x.a.field__prefix,children:"Crit Damage"}),placeholder:"Character's Crit Damage",min:50,value:s,onChange:function(t){e(w(+t.currentTarget.value))}})}),Object(d.jsx)(O.a.Item,{children:Object(d.jsx)(_.a,{type:"number",prefix:Object(d.jsx)("div",{className:x.a.field__prefix,children:"Elemental Bonus"}),placeholder:"Character's Elemental Bonus",value:l,onChange:function(t){e(P(+t.currentTarget.value))}})}),Object(d.jsx)(O.a.Item,{children:Object(d.jsx)(_.a,{type:"number",prefix:Object(d.jsx)("div",{className:x.a.field__prefix,children:"Physical Bonus"}),placeholder:"Character's Physical Bonus",value:u,onChange:function(t){e(D(+t.currentTarget.value))}})}),Object(d.jsx)(O.a.Item,{label:"Elemental Damage Proportion (%)",children:Object(d.jsx)(v.a,{marks:{0:"Physical",25:"25%",50:"50%",75:"75%",100:"Elemental"},value:j,onChange:function(t){e(S(t))}})})]})})},te=n.a.memo(ee),ae=a(95),ce=a(161),re=a.n(ce),ne=a(272),ie=function(){var e=Object(r.useState)(0),t=Object(ae.a)(e,2),a=t[0],c=t[1];return Object(d.jsx)("div",{className:re.a.steps,children:Object(d.jsxs)(ne.a,{current:a,onChange:function(e){return c(e)},direction:"vertical",children:[Object(d.jsx)(ne.a.Step,{title:"Step 1",description:"Unequip artifact from it's slot to compare it with another artifact"}),Object(d.jsx)(ne.a.Step,{title:"Step 2",description:"Input your character's stats in Character form"}),Object(d.jsx)(ne.a.Step,{title:"Step 3",description:"Input artifacts' stats in Artifacts' forms"})]})})},se=a(49),le=a.n(se),oe=a(273),ue=a(63),je=function(e){var t=e.id,a=Object(g.b)(),c=Object(g.c)((function(e){return e.character})),r=Object(g.c)((function(e){return e.artifacts.items[t].rawAttack})),n=Object(g.c)((function(e){return e.artifacts.items[t].attackPercentage})),i=Object(g.c)((function(e){return e.artifacts.items[t].critRate})),s=Object(g.c)((function(e){return e.artifacts.items[t].critDamage})),l=Object(g.c)((function(e){return e.artifacts.items[t].elementalBonus})),u=Object(g.c)((function(e){return e.artifacts.items[t].physicalBonus})),j=Object(g.c)((function(e){return e.artifacts.items[t].damageValue}));return Object(d.jsx)("div",{className:le.a.artifact,children:Object(d.jsxs)(O.a,{className:le.a.form,layout:"vertical",children:[Object(d.jsxs)("div",{className:le.a.form__header,children:[Object(d.jsxs)(o.a.Title,{className:le.a.form__title,level:2,children:["Artifact ",t+1]}),Object(d.jsx)(f.a,{className:le.a.close,type:"primary",danger:!0,onClick:function(){a(z(t))},children:Object(d.jsx)(ue.a,{})})]}),Object(d.jsx)(O.a.Item,{children:Object(d.jsx)(_.a,{type:"number",prefix:Object(d.jsx)("div",{className:le.a.field__prefix,children:"Attack"}),placeholder:"Artifact's Raw Attack",value:r,onChange:function(e){a(X({id:t,rawAttack:+e.currentTarget.value})),a(F({id:t,damageValue:R(c,{rawAttack:+e.currentTarget.value,attackPercentage:n,critRate:i,critDamage:s,elementalBonus:l,physicalBonus:u})}))}})}),Object(d.jsx)(O.a.Item,{children:Object(d.jsx)(_.a,{type:"number",prefix:Object(d.jsx)("div",{className:le.a.field__prefix,children:"Attack (%)"}),placeholder:"Artifact's Attack Percentage",value:n,onChange:function(e){a(Q({id:t,attackPercentage:+e.currentTarget.value})),a(F({id:t,damageValue:R(c,{rawAttack:r,attackPercentage:+e.currentTarget.value,critRate:i,critDamage:s,elementalBonus:l,physicalBonus:u})}))}})}),Object(d.jsx)(O.a.Item,{children:Object(d.jsx)(_.a,{type:"number",prefix:Object(d.jsx)("div",{className:le.a.field__prefix,children:"Crit Rate"}),placeholder:"Artifact's Crit Rate",value:i,onChange:function(e){a(J({id:t,critRate:+e.currentTarget.value})),a(F({id:t,damageValue:R(c,{rawAttack:r,attackPercentage:n,critRate:+e.currentTarget.value,critDamage:s,elementalBonus:l,physicalBonus:u})}))}})}),Object(d.jsx)(O.a.Item,{children:Object(d.jsx)(_.a,{type:"number",prefix:Object(d.jsx)("div",{className:le.a.field__prefix,children:"Crit Damage"}),placeholder:"Artifact's Crit Damage",value:s,onChange:function(e){a(Y({id:t,critDamage:+e.currentTarget.value})),a(F({id:t,damageValue:R(c,{rawAttack:r,attackPercentage:n,critRate:i,critDamage:+e.currentTarget.value,elementalBonus:l,physicalBonus:u})}))}})}),Object(d.jsx)(O.a.Item,{children:Object(d.jsx)(_.a,{type:"number",prefix:Object(d.jsx)("div",{className:le.a.field__prefix,children:"Elemental Bonus"}),placeholder:"Artifact's Elemental Bonus",value:l,onChange:function(e){a(q({id:t,elementalBonus:+e.currentTarget.value})),a(F({id:t,damageValue:R(c,{rawAttack:r,attackPercentage:n,critRate:i,critDamage:s,elementalBonus:+e.currentTarget.value,physicalBonus:u})}))}})}),Object(d.jsx)(O.a.Item,{children:Object(d.jsx)(_.a,{type:"number",prefix:Object(d.jsx)("div",{className:le.a.field__prefix,children:"Physical Bonus"}),placeholder:"Artifact's Physical Bonus",value:u,onChange:function(e){a(Z({id:t,physicalBonus:+e.currentTarget.value})),a(F({id:t,damageValue:R(c,{rawAttack:r,attackPercentage:n,critRate:i,critDamage:s,elementalBonus:l,physicalBonus:+e.currentTarget.value})}))}})}),Object(d.jsx)(O.a.Item,{children:Object(d.jsx)(oe.a,{title:"Damage Value",value:"".concat((100*j).toFixed(2),"%")})})]})})},de=n.a.memo(je),me=function(){for(var e=Object(g.b)(),t=Object(g.c)((function(e){return e.artifacts.items})),a=[],c=0;c<t.length;c++)a.push(Object(d.jsx)(de,{id:c}));return Object(d.jsxs)("div",{className:b.a.forms,children:[Object(d.jsxs)("div",{className:b.a.character,children:[Object(d.jsx)(ie,{}),Object(d.jsx)(te,{})]}),Object(d.jsxs)("div",{className:b.a.control,children:[Object(d.jsx)(f.a,{type:"primary",onClick:function(){e(W())},children:"Add Artifact"}),Object(d.jsx)(f.a,{type:"primary",danger:!0,onClick:function(){e(K())},children:"Reset Artifacts"})]}),Object(d.jsx)("div",{className:b.a.artifacts,children:a})]})},he=a(97),be=a.n(he),fe=a(267),pe=a(98),xe=a.n(pe),Oe=a(51),_e=a(74),ve=a.n(_e),ge=a(125),ye=a(164),Ce={apiKey:"AIzaSyDR7ROLrsG2sOSboEd2L7AbCChivi8K1m8",authDomain:"minna-genshin.firebaseapp.com",projectId:"minna-genshin",storageBucket:"minna-genshin.appspot.com",messagingSenderId:"278636824183",appId:"1:278636824183:web:46fbb69afa9dd190712872"};function ke(){return"undefined"!==typeof window?c||(c=ye.a.initializeApp(Ce)):null}ke();var Ae=function(){var e=Object(ge.a)(ve.a.mark((function e(){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!c){e.next=4;break}return e.next=4,c.auth().signOut();case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),Be=function(){var e=Object(ge.a)(ve.a.mark((function e(t,a){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!c){e.next=4;break}return e.next=4,c.auth().signInWithEmailAndPassword(t,a);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),Ne=function(){var e=Object(ge.a)(ve.a.mark((function e(t,a){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!c){e.next=4;break}return e.next=4,c.auth().createUserWithEmailAndPassword(t,a);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),we=Object(y.b)({name:"auth",initialState:{user:null},reducers:{setUser:function(e,t){e.user=t.payload}}}),Pe=we.actions.setUser,De=function(e){return e.auth.user},Se=we.reducer,Ie=function(e){var t=e.title,a=Object(g.c)(De);return Object(d.jsxs)(fe.a.Header,{className:xe.a.header,children:[Object(d.jsx)("div",{className:xe.a.title,children:Object(d.jsx)("span",{children:t})}),Object(d.jsx)("div",{className:xe.a.account,children:a?Object(d.jsx)(f.a,{danger:!0,type:"primary",onClick:function(){Ae()},children:"Sign Out"}):Object(d.jsxs)("div",{className:xe.a.buttons,children:[Object(d.jsx)(Oe.c,{to:"/sign-in",children:Object(d.jsx)(f.a,{children:"Sign In"})}),Object(d.jsx)(Oe.c,{to:"/sign-up",children:Object(d.jsx)(f.a,{type:"primary",children:"Sign Up"})})]})})]})},Re=a(276),Te=a(277),Ee=(g.c,function(e){var t=Object(r.useState)(e),a=Object(ae.a)(t,2),c=a[0],n=a[1];return{value:c,onChange:function(e){n(e.target.value)}}}),Me=function(e){var t=Object(r.useState)(e),a=Object(ae.a)(t,2),c=a[0],n=a[1];return Object(r.useEffect)((function(){var e=ke();e&&e.auth().onAuthStateChanged((function(e){n(e||null)}))}),[]),{currentUser:c,setCurrentUser:n}},Ve=function(e){var t=Me(null).currentUser,a=Ee(""),c=Ee("");return t?Object(d.jsx)(l.a,{to:"/"}):Object(d.jsxs)("div",{children:[Object(d.jsx)(Ie,{title:"Sign Up"}),Object(d.jsx)(fe.a.Content,{className:be.a.content,children:Object(d.jsx)("div",{className:be.a.main,children:Object(d.jsxs)(O.a,{children:[Object(d.jsx)(o.a.Title,{className:be.a.title,children:"Sign Up"}),Object(d.jsx)(O.a.Item,{children:Object(d.jsx)(_.a,Object(U.a)({type:"email",placeholder:"Email",prefix:Object(d.jsx)(Re.a,{})},a))}),Object(d.jsx)(O.a.Item,{children:Object(d.jsx)(_.a,Object(U.a)({type:"password",placeholder:"Password",prefix:Object(d.jsx)(Te.a,{})},c))}),Object(d.jsx)(O.a.Item,{className:be.a.button,children:Object(d.jsx)(f.a,{type:"primary",onClick:function(){Ne(a.value,c.value)},children:"Sign Up"})})]})})})]})},Ue=a(99),He=a.n(Ue),Ge=function(e){var t=Me(null).currentUser,a=Ee(""),c=Ee("");return t?Object(d.jsx)(l.a,{to:"/"}):Object(d.jsxs)("div",{children:[Object(d.jsx)(Ie,{title:"Sign In"}),Object(d.jsx)(fe.a.Content,{className:He.a.content,children:Object(d.jsx)("div",{className:He.a.main,children:Object(d.jsxs)(O.a,{children:[Object(d.jsx)(o.a.Title,{className:He.a.title,children:"Sign In"}),Object(d.jsx)(O.a.Item,{children:Object(d.jsx)(_.a,Object(U.a)({type:"email",placeholder:"Email",prefix:Object(d.jsx)(Re.a,{})},a))}),Object(d.jsx)(O.a.Item,{children:Object(d.jsx)(_.a,Object(U.a)({type:"password",placeholder:"Password",prefix:Object(d.jsx)(Te.a,{})},c))}),Object(d.jsx)(O.a.Item,{className:He.a.button,children:Object(d.jsx)(f.a,{type:"primary",onClick:function(){Be(a.value,c.value)},children:"Sign In"})})]})})})]})},Le=a(75),Fe=a.n(Le),We=Object(y.b)({name:"myCharacters",initialState:{items:[]},reducers:{addMyCharacter:function(e,t){e.items.push(t.payload)},deleteMyCharacter:function(e,t){e.items=e.items.filter((function(e){return e.id!==t.payload.id}))},changeMyCharacterName:function(e,t){e.items[t.payload.id].name=t.payload.name},changeMyCharacterLevel:function(e,t){e.items[t.payload.id].level=t.payload.level}}}),ze=We.actions,Ke=ze.addMyCharacter,Xe=(ze.deleteMyCharacter,ze.changeMyCharacterName,ze.changeMyCharacterLevel,function(e){return e.myCharacters.items}),Qe=We.reducer,Je=a(100),Ye=a.n(Je),qe=a(268),Ze=function(e){var t,a,c,r,n,i,s,l,o=e.character;Object(g.b)();return Object(d.jsxs)(qe.a,{title:"Character",type:"inner",children:[Object(d.jsxs)(qe.a,{className:Ye.a.myCharacter,style:{width:"50vh"},title:Object(d.jsx)(_.a,{defaultValue:o.name}),type:"inner",children:[Object(d.jsx)(qe.a.Grid,{children:Object(d.jsx)(oe.a,{title:"Level",value:o.level})}),Object(d.jsx)(qe.a.Grid,{children:Object(d.jsx)(oe.a,{title:"Constellation",value:o.level})})]}),Object(d.jsxs)(qe.a,{className:Ye.a.myCharacter,style:{width:"50vh"},title:"Talents",type:"inner",children:[Object(d.jsx)(qe.a.Grid,{children:Object(d.jsx)(oe.a,{title:"Normal Attack",value:o.talents.normalAttack})}),Object(d.jsx)(qe.a.Grid,{children:Object(d.jsx)(oe.a,{title:"Elemental Skill",value:o.talents.elementalSkill})}),Object(d.jsx)(qe.a.Grid,{children:Object(d.jsx)(oe.a,{title:"Elemental Burst",value:o.talents.elementalBurst})})]}),Object(d.jsxs)(qe.a,{className:Ye.a.myCharacter,style:{width:"50vh"},title:"Weapon",type:"inner",children:[Object(d.jsx)(qe.a.Grid,{children:Object(d.jsx)(oe.a,{title:"Name",value:(null===(t=o.weapon)||void 0===t?void 0:t.name)||""})}),Object(d.jsx)(qe.a.Grid,{children:Object(d.jsx)(oe.a,{title:"Rarity",value:null===(a=o.weapon)||void 0===a?void 0:a.rarity})}),Object(d.jsx)(qe.a.Grid,{children:Object(d.jsx)(oe.a,{title:"Level",value:null===(c=o.weapon)||void 0===c?void 0:c.level})})]}),Object(d.jsxs)(qe.a,{className:Ye.a.myCharacter,style:{width:"50vh"},title:"Artifacts",type:"inner",children:[Object(d.jsx)(qe.a.Grid,{children:Object(d.jsx)(oe.a,{title:"Rarity",value:null===(r=o.weapon)||void 0===r?void 0:r.rarity})}),Object(d.jsx)(qe.a.Grid,{children:Object(d.jsx)(oe.a,{title:"Rarity",value:null===(n=o.weapon)||void 0===n?void 0:n.rarity})}),Object(d.jsx)(qe.a.Grid,{children:Object(d.jsx)(oe.a,{title:"Level",value:null===(i=o.weapon)||void 0===i?void 0:i.level})}),Object(d.jsx)(qe.a.Grid,{children:Object(d.jsx)(oe.a,{title:"Level",value:null===(s=o.weapon)||void 0===s?void 0:s.level})}),Object(d.jsx)(qe.a.Grid,{children:Object(d.jsx)(oe.a,{title:"Level",value:null===(l=o.weapon)||void 0===l?void 0:l.level})})]})]})},$e=function(e){var t=Object(g.c)(De),a=Object(g.c)(Xe),c=Object(g.b)();return t?Object(d.jsxs)("div",{children:[Object(d.jsx)(o.a.Title,{className:Fe.a.title,children:Object(d.jsx)("span",{className:Fe.a.title__text,children:"My Characters"})}),Object(d.jsxs)("div",{className:Fe.a.characters,children:[Object(d.jsx)("div",{className:Fe.a.characters__button,children:Object(d.jsx)(f.a,{type:"primary",onClick:function(){var e={id:a&&a.length>0?a[a.length-1].id+1:0,name:"",level:0,weapon:{name:"",rarity:5,level:0,stats:{main:{type:"",value:0},sub:{type:"",value:0}}},artifacts:{flower:{name:"",set:"",stats:{main:{type:"HP",value:0},sub:{type:"",value:0}}},plume:{name:"",set:"",stats:{main:{type:"ATK",value:0},sub:{type:"",value:0}}},sands:{name:"",set:"",stats:{main:{type:"HP%",value:0},sub:{type:"HP%",value:0}}},goblet:{name:"",set:"",stats:{main:{type:"HP%",value:0},sub:{type:"HP%",value:0}}},circlet:{name:"",set:"",stats:{main:{type:"HP%",value:0},sub:{type:"HP%",value:0}}}},constellation:0,talents:{normalAttack:0,elementalSkill:0,elementalBurst:0}};c(Ke(e))},children:"Add Character"})}),Object(d.jsx)("div",{className:Fe.a.charactersList,children:a.length>0?a.map((function(e){return Object(d.jsx)(Ze,{character:e})})):""})]})]}):Object(d.jsxs)("div",{children:[Object(d.jsx)(o.a.Title,{children:"My Characters"}),Object(d.jsx)(o.a.Paragraph,{className:Fe.a.text,children:"You should sign in to store your characters"})]})},et=a(126),tt=a.n(et),at=a(137),ct=a.n(at),rt=a(275),nt=a(278),it=function(e){var t=e.items;return Object(d.jsxs)(fe.a.Sider,{theme:"dark",children:[Object(d.jsx)(Oe.b,{to:"/",children:Object(d.jsx)("div",{className:ct.a.logo,children:Object(d.jsx)("div",{className:ct.a.logo__text,children:"Minna Genshin"})})}),Object(d.jsx)(rt.a,{defaultSelectedKeys:["0"],theme:"dark",children:null===t||void 0===t?void 0:t.map((function(e){return Object(d.jsxs)(rt.a.Item,{children:[Object(d.jsx)(nt.a,{})," ",e.link?Object(d.jsx)(Oe.b,{to:e.link,children:e.name}):e.name]},e.name)}))})]})},st=function(e){var t=e.children,a=e.pages;return Object(d.jsxs)(fe.a,{className:tt.a.page,children:[Object(d.jsx)(it,{items:a}),Object(d.jsxs)(fe.a,{children:[Object(d.jsx)(Ie,{title:"My Characters"}),Object(d.jsx)(fe.a.Content,{className:tt.a.content,children:Object(d.jsx)("div",{className:tt.a.main,children:t})})]})]})};var lt=function(){var e=Me(null).currentUser,t=Object(g.b)();return Object(r.useEffect)((function(){t(Pe(e))}),[e,t]),Object(d.jsx)(st,{pages:[{id:0,name:"Home",link:"/"},{id:1,name:"DV Calculator",link:"/dv"},{id:2,name:"My Characters",link:"/my-characters"}],children:Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{path:"/my-characters",component:$e}),Object(d.jsx)(l.b,{exact:!0,path:"/dv",children:Object(d.jsx)(me,{})}),Object(d.jsx)(l.b,{exact:!0,path:"/",children:Object(d.jsx)(m,{})}),Object(d.jsx)(l.b,{exact:!0,path:"/sign-in",children:Object(d.jsx)(Ge,{})}),Object(d.jsx)(l.b,{exact:!0,path:"/sign-up",children:Object(d.jsx)(Ve,{})})]})})},ot=Object(y.a)({reducer:{character:I,artifacts:$,auth:Se,myCharacters:Qe}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(Oe.a,{children:Object(d.jsx)(g.a,{store:ot,children:Object(d.jsx)(lt,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},49:function(e,t,a){e.exports={artifact:"ArtifactForm_artifact__1ZGSX",form:"ArtifactForm_form__3lcEP",form__header:"ArtifactForm_form__header__2-oFi",form__title:"ArtifactForm_form__title__y9AMV",form__close:"ArtifactForm_form__close__P10Wa",field__prefix:"ArtifactForm_field__prefix__y9aOm"}},57:function(e,t,a){e.exports={character:"CharacterForm_character__2ehc7",form:"CharacterForm_form__2KknU",form__title:"CharacterForm_form__title__3SNh2",field__prefix:"CharacterForm_field__prefix__1MTN-"}},75:function(e,t,a){e.exports={title:"MyCharacters_title__zg7rl",text:"MyCharacters_text__2XS5t",characters:"MyCharacters_characters__3lmou",characters__button:"MyCharacters_characters__button__3Fpp8",charactersList:"MyCharacters_charactersList__hXi2F"}},96:function(e,t,a){e.exports={content:"DamageValueCalculator_content__2B8s4",main:"DamageValueCalculator_main__1b-tk",control:"DamageValueCalculator_control__2mQBW",forms:"DamageValueCalculator_forms__ja4mo",character:"DamageValueCalculator_character__2PYzK",artifacts:"DamageValueCalculator_artifacts__1DeyP"}},97:function(e,t,a){e.exports={content:"SignUp_content__1kd5Q",main:"SignUp_main__3PLXE",title:"SignUp_title__xQARc",button:"SignUp_button__1z7u1"}},98:function(e,t,a){e.exports={header:"Header_header__YfN4U",title:"Header_title__2smQ8",account:"Header_account__2HCzg",buttons:"Header_buttons__3C7Ew"}},99:function(e,t,a){e.exports={content:"SignIn_content__2kkc0",main:"SignIn_main__1pfyI",title:"SignIn_title__27TM8",button:"SignIn_button__3skBN"}}},[[265,1,2]]]);
//# sourceMappingURL=main.6fd03bbb.chunk.js.map