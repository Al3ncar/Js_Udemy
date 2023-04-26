let p = document.querySelector('p');
let classes = p.classList;

classes.add("d");
p.textContent = classes;

classes.add("e", "f", "g")
p.textContent = classes;
