//Ke takeaway fomr this lesson is that you must use pointers, variable that represent values at certain postions in the linked list. previous values current values and post current values all need updated on every loop that the current while loop iteration is inside of so to speak.

class Node{

    constructor(value){

        this.value = value
        this.next = null

    }
}


class LinkedList{

    constructor(head = null){
        this.head = head
        
    }

    Append(element){//Add new node to end of list

        let newNode = new Node(element)
        let currentNode = this.head
        if  (currentNode === null){
            this.head = newNode
            return
        }
           
            while(currentNode.next!==null){
                currentNode = currentNode.next}

    
  currentNode.next = newNode
    
}

    Prepend(element){ //Add new node to front of list

        let newNode = new Node(element)

        newNode.next = this.head

        this.head = newNode


    }

    InsertAt(index,element){

        let newNode = new Node(element)

        let currentNode = this.head
        if(index === 0){

           
            newNode.next = this.head
            this.head = newNode
        }

        while(--index) {

            if(currentNode.next !== null) {

                currentNode = currentNode.next
            }
            else {

            throw Error("Index Out of Bound");}
        }
       let oldValue = currentNode.next
        currentNode.next = newNode
        newNode.next = oldValue

    }

    

    Size(){

        let currentNode = this.head
        let count = 0
        while(currentNode!==null){
         currentNode = currentNode.next   
        console.log(count); 
        count++}
        
        return count
    }

    RemoveFirst(){
        
        if(this.head === null){return}
        
        let valuePopped = structuredClone(this.head.value)
        
       
        let secondNode = this.head.next
        this.head = secondNode
        console.log(valuePopped)
        return valuePopped

        
    }

    RemoveLast(){
        
        if(this.head === null){return}
        if(this.head.next === null){
            let poppedValue = structuredClone(this.head)
            this.head = null
            return console.log(poppedValue)
        }

        let firstNode = this.head
        let secondNode = firstNode.next

        while(secondNode.next !== null){

            firstNode = firstNode.next
            secondNode = firstNode.next


        }
        let removedValue = structuredClone(secondNode.value)
        firstNode.next = null
        return removedValue
       


    }



    
    
    PrintNodes(){

        let currentNode = this.head
        let index = 0
        while(currentNode !== null){
            index++
            console.log("Index is: " + index + ' Value is: ' + currentNode.value)
            currentNode = currentNode.next
        
            
        }

        
    }


     PrintHead(){
        console.log('Head is: ' + this.head.value)
return 'Head is: ' +  this.head.value
    }

    PrintTail(){

        let currentNode= this.head
        while(currentNode.next !== null){
            currentNode = currentNode.next
        }
        console.log('Tail is: ' + currentNode.value)
        return 'Tail is: ' + currentNode.value
        
    }




    Contains(element) {

    let currentNode = this.head
    let found 
    let notFound 
    while(currentNode){
       
        
        if(currentNode.value === element){
            found = true
        }else{notFound = false}
        

        currentNode = currentNode.next
        
        }
    
        if(found){return `Element ${element} is in list`}else{return 'Not found'}
    }


Find(element) {

    let currentNode = this.head
    let count = 0
    let notFound
    while(currentNode){
        if(currentNode.value === element){return `Element ${element} is at index ${count} .`}
        
        count++
        currentNode = currentNode.next

    }
    if(notFound = true){return `Element ${element} was not found in linked list.`}
}

DeleteNode(element){

    let firstNode = this.head
    
    let currentNode = this.head.next
    let deletedNode
    if(firstNode.value === element){
       deletedNode = firstNode.value
        
        this.head = currentNode
    
        return `First node value ${deletedNode} was deleted.`
}
    while(currentNode !== null ){
        currentNode = currentNode.next
        firstNode = firstNode.next
        
        if(currentNode.value === element){
            
            deletedNode = currentNode.value
            firstNode.next = currentNode.next
            
            
            return `Node of value ${deletedNode} was deleted.`
        }
    }

    
}


}

const linked = new LinkedList()

linked.Append(24)

linked.Append(45)
linked.Append(48)
linked.Append(55)
linked.Append(22)
linked.PrintNodes()



para = document.querySelector('.para')
para.textContent = linked.DeleteNode(55)
linked.PrintNodes()

//para.textContent = linked.PrintNodes()
/*

class ClassName {s
  constructor() {this.name = name ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}
*/