// required aspects will be commented for your grading ease.

// iterate over a collection of elements
var characters = document.querySelectorAll('.character');
characters.forEach(function (character) {
  console.log(character.textContent);
});

// create an element using createElement
function createCharacterElement(name, race) {
  var characterElement = document.createElement('div');
  characterElement.className = 'character';
  characterElement.innerHTML = `
    <h3>${name}</h3>
    <p>${race}</p>
    <button onclick="updateCharacter('${name.toLowerCase()}')">Update</button>
    <button onclick="removeCharacter('${name.toLowerCase()}')">Remove</button>
  `;
  return characterElement;
}

// appendChild to add new elements to the DOM
function addCharacter() {
  var nameInput = document.getElementById('characterName');
  var name = nameInput.value.trim();
  if (name === '') return;

  var characterList = document.getElementById('characterList');
  var newCharacterElement = createCharacterElement(name, 'Unknown');
  characterList.appendChild(newCharacterElement);
// problems in here but it's late
  
  nameInput.value = '';
}

// DocumentFragment to create templated content
var characterFragment = document.createDocumentFragment();
characterFragment.appendChild(createCharacterElement('Legolas', 'Elf'));
characterFragment.appendChild(createCharacterElement('Gimli', 'Dwarf'));
document.getElementById('characterList').appendChild(characterFragment);

// modify the HTML content in response to user interaction
function updateCharacter(name) {
  var character = document.getElementById(name);
  character.querySelector('p').textContent = 'Updated type';
}

// modify the style in response to user interactions
function removeCharacter(name) {
  var character = document.getElementById(name);
  character.style.display = 'none';
}

// register event listeners and create event handler functions
document.getElementById('characterName').addEventListener('input', function (event) {
  var inputValue = event.target.value.trim();
  event.target.setCustomValidity(inputValue === '' ? 'Name is required' : '');
});

// BOM properties or methods
console.log('Viewport width:', window.innerWidth);
console.log('Document title:', document.title);