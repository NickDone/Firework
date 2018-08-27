import {Dodo}  from './index.js';
class People{
    say(name:string,age:string):string{
        return `my name is ${name} ,and I am ${age} years old. And ${Dodo()}`;
    }
}

function component():any {
    let element = document.createElement('div');
    let p=new People();
    element.innerHTML = p.say("Lxd","27");
    return element;
  }

document.body.appendChild(component());
