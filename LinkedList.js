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

    while(currentNode){

        currentNode = currentNode.next
        if(currentNode === element){
            return `Element ${element} exists in the list.`
        }
    }


    }

}







const linked = new LinkedList()

linked.Append(34)

linked.Append(45)
linked.Append(48)
linked.Append(55)
linked.Append(22)
linked.PrintNodes()



para = document.querySelector('.para')
para.textContent = linked.Contains(22)
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