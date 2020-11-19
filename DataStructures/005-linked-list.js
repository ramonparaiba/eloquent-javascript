function SinglyLinkedListNode(data){
    this.data = data
    this.next = null
}

function SinglyLinkedList(){
    this.head = null
    this.size = 0
}

SinglyLinkedList.prototype.isEmpty = function(){
    return this.size == 0;
}

SinglyLinkedList.prototype.print = function(){
    let currentHead = this.head
    while(currentHead){   
        console.log(currentHead.data)
        currentHead = currentHead.next
    }
}

SinglyLinkedList.prototype.insert = function(value) {
    if (this.head === null) { //If first node
        this.head = new SinglyLinkedListNode(value)
    } else {
        let temp = this.head
        this.head = new SinglyLinkedListNode(value)
        this.head.next = temp
    }
    this.size++;
}

SinglyLinkedList.prototype.remove = function (value){
    let currentHead = this.head
    if(currentHead.data == value){
        this.head == currentHead.next
        this.size--
    }else{
        let prev = currentHead
        while(currentHead.next){
            if(currentHead.data == value){
                prev.next = currentHead.next;
                prev = currentHead
                currentHead = currentHead.next
                break
            }
            prev = currentHead
            currentHead = currentHead.next
        }
        //se não estiver no meio, ou na cabeça, estará na calda
        if(currentHead.data == value){
            prev.next = null
        }
        this.size--
    }

}

SinglyLinkedList.prototype.deleteAhead = function(){
    let toReturn = null
    if(this.head !== null){
        toReturn = this.head.data
        this.head = this.head.next
        this.size--
    }
    return toReturn
}

SinglyLinkedList.prototype.find = function(value){
    let currentHead = this.head

    while(currentHead.next){
        if(currentHead.data == value)
            return true
        currentHead = currentHead.next
    }
    return false
}

let lista = new SinglyLinkedList()

console.log(lista.isEmpty());

lista.insert(4)
lista.insert(8)
lista.insert(15)
lista.insert(3)
lista.insert(1)
lista.insert(13)

console.log(lista.print())

lista.remove(15)

console.log(lista.print())

lista.deleteAhead()

console.log(lista.print())
console.log(lista.find(3))
console.log(lista.find(114))