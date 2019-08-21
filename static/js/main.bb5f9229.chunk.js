(window["webpackJsonpcoat-check-app"]=window["webpackJsonpcoat-check-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),o=(a(15),a(6)),s=a.n(o),u=a(9),l=a(1),p=a(2),h=a(4),m=a(3),d=a(5),b=(a(17),function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",{className:"maintTitle"},"NYC Coat Check"),r.a.createElement("p",{className:"authorTitle"}," Created by David Buchholz"))}}]),t}(r.a.Component)),f=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{className:"button",onClick:this.props.getTheWeather},"Do I Need My Coat?"))}}]),t}(r.a.Component),j=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.imageID,t="https://openweathermap.org/img/wn/".concat(e,"@2x.png");return r.a.createElement("div",{className:"displayWeather"},r.a.createElement("p",null,"Your location is: ",this.props.city),r.a.createElement("p",null,"The temperature is currently: ",this.props.temperature),r.a.createElement("div",{className:"description-container"},r.a.createElement("p",null,"Right now you can expect: ",this.props.description),r.a.createElement("img",{className:"weather-image",src:t,alt:"weather-icon"})))}}]),t}(r.a.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"coat-check"},"You don't need a coat. Go forth and enjoy your day!")}}]),t}(r.a.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"coat-check"},"Temperature is out of range!..Hope you're safe")}}]),t}(r.a.Component),y=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"coat-check"},"Grab the thickest coat you can find and hunker down")}}]),t}(r.a.Component),E=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"coat-check"},"Light coat will suffice for your needs")}}]),t}(r.a.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"coat-check"},"Wear a long sleeve...and if that is too much just roll them up, okay?")}}]),t}(r.a.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"coat-check"},"It's SO hot! Where are we?..Abu Dhabi??")}}]),t}(r.a.Component),g=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"decide",value:function(e){return this.props.temperature>-20&&this.props.temperature<=55?r.a.createElement(y,null):this.props.temperature>55&&this.props.temperature<=65?r.a.createElement(E,null):this.props.temperature>65&&this.props.temperature<=70?r.a.createElement(w,null):this.props.temperature>70&&this.props.temperature<=90?r.a.createElement(O,null):this.props.temperature>90?r.a.createElement(k,null):r.a.createElement(v,null)}},{key:"render",value:function(){return r.a.createElement("div",null,this.decide())}}]),t}(r.a.Component),N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={weatherData:[],city:void 0,temperature:void 0,imageID:void 0,lat:"",lon:"",loading:!0,isHidden:!0},a.getTheWeather=function(){var e=Object(u.a)(s.a.mark(function e(t){var n,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),"https://api.openweathermap.org/data/2.5/weather?id=5128638&units=imperial&appid=78c8954cfc788e1248bcd83dc32befc8",e.next=4,fetch("https://api.openweathermap.org/data/2.5/weather?id=5128638&units=imperial&appid=78c8954cfc788e1248bcd83dc32befc8");case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,console.log(r),a.setState({weatherData:r,city:r.name,temperature:r.main.temp,imageID:r.weather[0].icon,description:r.weather[0].description,loading:!1,isHidden:!1});case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"titles-container"},r.a.createElement(b,null)),r.a.createElement("div",{className:"button-container"},r.a.createElement(f,{getTheWeather:this.getTheWeather})),r.a.createElement("div",{className:"dialogue-container"},!this.state.isHidden&&r.a.createElement("div",null,r.a.createElement(g,{temperature:this.state.temperature}),r.a.createElement(j,{city:this.state.city,temperature:this.state.temperature,imageID:this.state.imageID,description:this.state.description}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.bb5f9229.chunk.js.map