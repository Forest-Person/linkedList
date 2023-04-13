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

    Append(element){
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


}


const linked = new LinkedList()

linked.Append(34)
linked.Append(45)
linked.Append(48)


linked.PrintNodes()
linked.PrintTail()
para = document.querySelector('.para')
para.textContent = linked.PrintHead()


//para.textContent = linked.PrintNodes()
/*

class ClassName {s
  constructor() {this.name = name ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}
*/