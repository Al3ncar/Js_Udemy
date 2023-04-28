let p = document.querySelector('p');
let classes = p.classList;

classes.add("d");
p.textContent = classes;

classes.add("e", "f", "g")
p.textContent = classes;

let p2 = document.createElement('div')
p.appendChild(p2)

let classes2 = p2.classList;

classes2.add('H', 'I', 'J')
p2.textContent = classes2