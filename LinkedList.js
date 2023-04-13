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

    Add(element){
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
        while(currentNode !== null){
            console.log(currentNode.value)
            currentNode = currentNode.next
        
            
        }

        
    }


     Head(){
        console.log(this.head.value)
return this.head.value
    }


}


const linked = new LinkedList()

linked.Add(34)
linked.Add(45)
linked.Add(48)


linked.PrintNodes()
para = document.querySelector('.para')
para.textContent = linked.Head()


//para.textContent = linked.PrintNodes()
/*

class ClassName {s
  constructor() {this.name = name ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}
*/