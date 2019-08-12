(function(){var CallToActionDirective,locales,module,template;locales={en:{BEGIN_PROJECT:"Begin a project like this completely<br /><b>FREE</b>",REGISTER:"Register",DISMISS:"dismiss"},es:{BEGIN_PROJECT:"Comienza un proyecto como este completamente<br /><b>GRATIS</b>",REGISTER:"Registrate",DISMISS:"descartar"}},template='<call-to-action>\n    <div class="close">{{translate("DISMISS")}}</div>\n\n    <div class="center">\n        <p ng-bind-html=\'translate("BEGIN_PROJECT")\'></p>\n        <a class="register button-green">{{translate("REGISTER")}}</a>\n    </div>\n</call-to-action>',CallToActionDirective=function($compile,$config,$translate,$location,$analytics){var getCookie,link,setCookie,translate;return setCookie=function(cname,cvalue,exdays){var d,expires;return d=new Date,d.setTime(d.getTime()+24*exdays*60*60*1e3),expires="expires="+d.toUTCString(),document.cookie=cname+"="+cvalue+"; "+expires},getCookie=function(cname){var c,ca,i,len,name;for(name=cname+"=",ca=document.cookie.split(";"),i=0,len=ca.length;i<len;i++){for(c=ca[i];" "===c.charAt(0);)c=c.substring(1);if(c.indexOf(name)!==-1)return c.substring(name.length,c.length)}},translate=function(locale,text){var e;try{return locales[locale][text]}catch(error){return e=error,locales.en[text]}},link=function($scope,$el,$attrs){return $scope.$on("loader:end",function(){if(!$scope.user&&"1"!==getCookie("callToAction"))return $scope.$apply(function(){var callToActionBox,timelineEl;return $scope.translate=translate.bind(this,$translate.use()),callToActionBox=$compile($(template))($scope),timelineEl=$el.find(".project-data .timeline"),timelineEl.prepend(callToActionBox),timelineEl.find(".close").on("click",function(e){return e.preventDefault(),e.stopPropagation(),callToActionBox.fadeOut("fast"),setCookie("callToAction",1,730)}),timelineEl.find("call-to-action").on("click",function(e){return e.preventDefault(),$analytics.trackEvent("call-to-action","register-click","click the register button in the call to action",1),$location.url("/register")})})})},{restrict:"E",link:link}},module=angular.module("callToActionPlugin",[]),module.directive("body",["$compile","$tgConfig","$translate","$tgLocation","$tgAnalytics",CallToActionDirective])}).call(this);