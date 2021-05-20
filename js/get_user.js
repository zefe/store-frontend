function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}


const url = 'https://rickandmortyapi.com/api/character/2';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let person = data;
  const firstFive = person.episode.slice(0, 5);
  
  const div = document.getElementById('avatar');
  const div_person = document.getElementById('person__info');

  let img = createNode('img');    
  img.src = person.image;
  
  let p_name = createNode('p');
  let p_gender = createNode('p');
  
  p_name.innerHTML = `Nombre: ${person.name} `;
  p_gender.innerHTML = `Género: ${person.gender} `;
  
  append(div, img);
  append(div_person, p_name);
  append(p_name, p_gender);

  
  let p_episode = createNode('p');
  p_episode.innerHTML = 'Primeros 5 episodios:';
  append(div_person, p_episode);  
  
  
  firstFive.map(function(episode_url, index) {    

    let a = createNode('a');
    let linkText = document.createTextNode(`Episodio ${index+1}`);

    a.appendChild(linkText);
    a.title = `Episodio ${index+1}`;
    a.href = `${episode_url}`;
    append(div_person, a);
    
  })
  

})
.catch(function(error) {
  console.log(error);
});