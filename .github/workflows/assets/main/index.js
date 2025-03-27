System.register("chunks:///_virtual/Background.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,r,i,o,s,a,c,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,r=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){o=e.cclegacy,s=e._decorator,a=e.CCFloat,c=e.Vec3,p=e.Component}],execute:function(){var u,d,l,h,f;o._RF.push({},"40198ep2qhCA7j2j5Muj5o8","Background",void 0);var y=s.ccclass,g=s.property;e("Background",(u=y("Background"),d=g({type:a}),u((f=t((h=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))||this).speed=void 0,r(t,"speedX",f,i(t)),t}n(t,e);var o=t.prototype;return o.start=function(){this.speed=new c(this.speedX,0,0)},o.update=function(e){this.speed.x=this.speedX*e,this.node.translate(this.speed),this.node.position.x<-288&&this.node.translate(new c(288,0,0))},t}(p)).prototype,"speedX",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return-288}}),l=h))||l));o._RF.pop()}}}));

System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var i,o,e,n,a,r,s,u,h,l,c,p;return{setters:[function(t){i=t.applyDecoratedDescriptor,o=t.inheritsLoose,e=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){a=t.cclegacy,r=t._decorator,s=t.Node,u=t.input,h=t.Input,l=t.Vec3,c=t.UITransform,p=t.Component}],execute:function(){var d,g,m,P,w;a._RF.push({},"842246KrP1G7abELi02BPOg","Bird",void 0);var y=r.ccclass,f=r.property;t("bird",(d=y("Bird"),g=f({type:s}),d((w=i((P=function(t){function i(){for(var i,o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(i=t.call.apply(t,[this].concat(a))||this).nodeImage=null,i.curRotation=0,i.isLagiTurun=!0,i.kecepatanBurung=50,i.defaultKecepatan=250,i.gravitasi=1e3,e(i,"nodeSekumpulanPipa",w,n(i)),i}o(i,t);var a=i.prototype;return a.start=function(){this.nodeImage=this.node.getChildByPath("Bird"),u.on(h.EventType.TOUCH_START,this.onTouchStart,this)},a.onTouchStart=function(t){this.isLagiTurun=!1,this.kecepatanBurung=this.defaultKecepatan},a.update=function(t){this.kecepatanBurung-=this.gravitasi*t,this.kecepatanBurung<0?(this.node.translate(new l(0,this.kecepatanBurung*t,0)),this.curRotation>-60&&(this.curRotation-=60*t),this.nodeImage.setRotationFromEuler(new l(0,0,this.curRotation)),console.log("rotasi:"+this.curRotation)):(this.node.translate(new l(0,this.kecepatanBurung*t,0)),this.curRotation<-60&&(this.curRotation+=60*t),this.nodeImage.setRotationFromEuler(new l(0,0,this.curRotation)),console.log("rotasi:"+this.curRotation)),this.isNabrakPipa(this.nodeSekumpulanPipa)&&alert("gameover")},a.isNabrakPipa=function(t){var i=t.getChildByPath("pipe1"),o=t.getChildByPath("pipe2"),e=this.nodeImage.getComponent(c).width,n=this.nodeImage.getComponent(c).height,a=this.nodeImage.worldPosition.x-e/2,r=this.nodeImage.worldPosition.x+e/2,s=this.nodeImage.worldPosition.y+n/2,u=this.nodeImage.worldPosition.y-n/2,h=i.getComponent(c).width,l=i.getComponent(c).height,p=i.worldPosition.x-h/2,d=i.worldPosition.x+h/2,g=i.worldPosition.y+l/2,m=i.worldPosition.y-l/2;if(a<=d&&r>=p&&s>m&&u<g)return!0;var P=o.getComponent(c).width,w=o.getComponent(c).height,y=o.worldPosition.x-P/2,f=o.worldPosition.x+P/2,B=o.worldPosition.y+w/2,R=o.worldPosition.y-w/2;return a<=f&&r>=y&&s>R&&u<B},i}(p)).prototype,"nodeSekumpulanPipa",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=P))||m));a._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./Background.ts","./Bird.ts","./Pipa.ts","./tanah.ts"],(function(){return{setters:[null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Pipa.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,e,i,s,o,r;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,i=t._decorator,s=t.Vec3,o=t.randomRangeInt,r=t.Component}],execute:function(){var a;e._RF.push({},"aa7d0G0iidA4LpuYXSuaSiI","Pipa",void 0);var p=i.ccclass;i.property,t("Pipa",p("Pipa")(a=function(t){function e(){for(var n,e=arguments.length,i=new Array(e),s=0;s<e;s++)i[s]=arguments[s];return(n=t.call.apply(t,[this].concat(i))||this).startX=100,n.resetX=-182,n.offsetX=185,n}n(e,t);var i=e.prototype;return i.start=function(){this.startX=this.node.position.x,this.resetX=-182,this.offsetX=185},i.update=function(t){this.node.translate(new s(100*t,0,0)),this.node.position.x<-182&&(this.node.translate(new s(367,0,0)),this.node.position.y<=0?this.node.translate(new s(367,o(100,150),0)):this.node.translate(new s(367,o(-50,0),0))),this.node.position.x<this.resetX&&this.node.setPosition(new s(this.startX+this.offsetX,this.node.position.y,this.node.position.z))},e}(r))||a);e._RF.pop()}}}));

System.register("chunks:///_virtual/tanah.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,i,r,a,s,o,p,c;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){a=e.cclegacy,s=e._decorator,o=e.CCFloat,p=e.Vec3,c=e.Component}],execute:function(){var l,u,h,d,f;a._RF.push({},"ea14ah8ZJNB2YKcSgd4f4S+","tanah",void 0);var y=s.ccclass,v=s.property;e("tanah",(l=y("tanah"),u=v({type:o}),l((f=t((d=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))||this).speed=void 0,i(t,"speedX",f,r(t)),t}n(t,e);var a=t.prototype;return a.start=function(){this.speed=new p(this.speedX,0,0)},a.update=function(e){this.speed.x=this.speedX*e,this.node.translate(this.speed),this.node.position.x<-50&&this.node.translate(new p(50,0,0))},t}(c)).prototype,"speedX",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return-50}}),h=d))||h));a._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});