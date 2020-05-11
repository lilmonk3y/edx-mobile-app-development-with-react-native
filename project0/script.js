const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')


/*
TODO: 
  - unchecked count span has a bug while unchecking and checking items.
  - refactor
  - pull request
*/

function newTodo() {
  // add elements to list
  var textOfItem = prompt("Enter your todo!")


  var listItem = document.createElement(classNames.TODO_ITEM)

  var propertyCheckBox = document.createElement(classNames.TODO_CHECKBOX)
  var checkbox = document.createElement('INPUT')
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = false
  checkbox.onclick = function(){
    if(this.checked){
      let itemsSize = Number(uncheckedCountSpan.innerHTML)
      let newSize = itemsSize - 1
      uncheckedCountSpan.innerHTML = newSize.toString()

      let item = this.parentElement.parentElement
      let originalText = item.childNodes[1].textContent
      let strike = document.createElement('strike')
      let strikeText = document.createTextNode(originalText)
      strike.appendChild(strikeText)
      var propertyTextOfItem = document.createElement(classNames.TODO_TEXT)
      propertyTextOfItem.appendChild(strike)

      item.replaceChild(propertyTextOfItem, item.childNodes[1])
    }else{
      let itemsSize = Number(uncheckedCountSpan.innerHTML)
      let newSize = itemsSize + 1
      uncheckedCountSpan.innerHTML = newSize.toString()

      let item = this.parentElement.parentElement
      let originalText = item.childNodes[1].childNodes[0].textContent
      let newText = document.createTextNode(originalText)
      var propertyTextOfItem = document.createElement(classNames.TODO_TEXT)
      propertyTextOfItem.appendChild(newText)

      item.replaceChild(propertyTextOfItem, item.childNodes[1])
    }
  }
  propertyCheckBox.appendChild(checkbox)
  listItem.appendChild(propertyCheckBox)

  var propertyTextOfItem = document.createElement(classNames.TODO_TEXT)
  var textProperty = document.createTextNode(textOfItem)
  propertyTextOfItem.appendChild(textProperty)
  listItem.appendChild(propertyTextOfItem)

  var row = document.createElement('li')
  row.appendChild(listItem)
  list.appendChild(row)
  
  // increment item count
  let itemsSize = Number(itemCountSpan.innerHTML)
  let newSize = itemsSize + 1
  itemCountSpan.innerHTML = newSize.toString()

  // increment unchecked items count 
  uncheckedCountSpan.innerHTML = newSize.toString()
}
