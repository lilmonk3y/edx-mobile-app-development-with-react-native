const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  // add elements to list
  console.log(list)
  var textOfItem = prompt("Enter your todo!")
  var listItem = document.createElement('li')
  var propertyTextOfItem = document.createTextNode(textOfItem)
  listItem.appendChild(propertyTextOfItem)
  list.appendChild(listItem)
  
  // increment item count
  let itemsSize = Number(itemCountSpan.innerHTML)
  let newSize = itemsSize + 1
  itemCountSpan.innerHTML = newSize.toString()

  // increment unchecked items count 
  uncheckedCountSpan.innerHTML = newSize.toString()
}
