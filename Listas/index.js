class Node {
    constructor(value, nextNode) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertNode(value) {
        const node = new Node(value, null)
        // Si no existe la cabeza, la asignamos.
        if(this.head === null) {
            this.head = node;
            return;
        }

        let currentNode = this.head;
        while(currentNode.nextNode) {
            currentNode = currentNode.nextNode
        }

        currentNode.nextNode = node;
    }

    findNode(value) {

        if(this.head.value === value){
            console.log("Encontrado !! " + this.head.value)            
            return
        }

        let currentNode = this.head
        while(currentNode.nextNode) {
            if(currentNode.nextNode.value == value) {
                console.log("Encontrado !! " + currentNode.nextNode.value)            
                return;
            }
        }
        
    }

    removeNode(value) {

        // Vamos a eliminar la cabeza (head)
        if(this.head.value === value){
            this.head = this.head.nextNode            
            return
        }

        let currentNode = this.head
        while(currentNode.nextNode) {
            if(currentNode.nextNode.value == value) {
                currentNode.nextNode = currentNode.nextNode.nextNode
                return;
            }
        }

    }

    listNodes() {
        let currentNode = this.head;
        while(currentNode) {
            console.log("Valor nodo " + currentNode.value)
            currentNode = currentNode.nextNode
        }

        console.log("__________")

    }

}


const list = new LinkedList()

list.insertNode(1)
list.insertNode(4)
list.insertNode(6)

list.listNodes()

list.removeNode(4)

list.listNodes()

list.findNode(1)