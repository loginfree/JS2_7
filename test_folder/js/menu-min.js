function Container(t,e,n){["div","ul","li","a"].includes(n),this.id=t,this.class=e,this.tagName=n}function Menu(t,e,n){Container.call(this,t,e,"ul"),this.items=n}function MenuItem(t,e,n){Container.call(this,null,t,"li"),this.title=e,this.href=n}Container.prototype.render=function(){var t=document.createElement(this.tagName);return t.id=this.id,t.className=this.class,t},Menu.prototype=Object.create(Container.prototype),Menu.prototype.render=function(){var t=document.createElement("ul");return this.items.forEach(function(e){e instanceof Container&&t.appendChild(e.render())}),t},MenuItem.prototype=Object.create(Container.prototype),MenuItem.prototype.render=function(){var t=document.createElement("li"),e=document.createElement("a");return e.href=this.href,e.textContent=this.title,t.appendChild(e),t};