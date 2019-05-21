// Item Lister
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

  // Add Event
  form.addEventListener('submit', addItem);

  function addItem(e) {
    e.preventDefault();

    //Get input value
    var newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
    
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);

    itemList.appendChild(li);
  };

  // Delete an event
  itemList.addEventListener('click', removeItem);

  function removeItem(e) {
    if(e.target.classList.contains('delete')) {
      if(confirm('Are You Sure?')) {
        var li = e.target.parentElement;
        itemList.removeCå
      };
    };
  };

  // Filter Items
  let filter = document.getElementById('filter');

  filter.addEventListener('keyup', filterItems);

  function filterItems(e) {
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item) {
      var itemName = item.firstChild.textContent;
      if (itemName.toLowerCase().indexOf(text) !== -1) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      };
    });
  };

  



//This is for the input field, to have the text appear below

let typing = document.querySelector('#texting');
let textField = document.getElementById('showText');

typing.addEventListener('input', showText);

function showText() {
	let text = typing.value;
	textField.innerText = text;
}

// This checks if the second password matches the first password

let field1 = document.querySelector('#pass1');
let field2 = document.querySelector('#pass2');
let response = document.querySelector('#response');

field2.addEventListener('input', () => {
  (field1.value === field2.value) ?  response.innerText = "Correct!" : response.innerText = "Passwords do not match";
});