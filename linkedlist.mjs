import Node from "./node.mjs";

class LinkedList {
    constructor(){
        this.listHead = null;
    }

    prepend(key, value){
        this.listHead = new Node(key, value, this.listHead);
    }

    append(key, value){

        if(this.listHead == null){
            this.listHead = new Node(key, value);
            return;
        }else{
            let current = this.listHead;

            while(current.nextNode){
                current = current.nextNode;
            }
    
            current.nextNode = new Node(key, value);
        }

    }

    getItem(key){
        let current = this.listHead;

        while(current){
            if(current.key == key){
                return current.value;
            }else{
                current = current.nextNode;
            }
        }

        return null;
    }

    setItem(key, value){
        let current = this.listHead;

        while(current){
            if(current.key == key){
                current.value = value;
                return;
            }else{
                current = current.nextNode;
            }
        }

        return null;
    }

    hasItem(key){
        let current = this.listHead;

        while(current){
            if(current.key = key){
                return true;
            } else{
                current = current.nextNode;
            }
        }

        return false;
    }

    remove(key){
        let prev = null;
        let current = this.listHead;

        if(current.key == key){
            this.listHead = null;
        }

        while(current){
            if(current.key = key){
                prev.nextNode = current.nextNode;
                return true;
            }else{
                prev = current;
                current = current.nextNode;
            }
        }

        return false;
    }

    length(){
        let keys = 0;
        let current = this.listHead;

        while(current){
            keys++;
            current = current.nextNode;
        }

        return keys;
    }

    allKeys(arr){
        let current = this.listHead;

        while(current){
            arr.push(current.key);
            current = current.nextNode;
        }
    }

    values(arr){
        let current = this.listHead;

        while(current){
            arr.push(current.value);
            current = current.nextNode;
        }
    }

    entries(arr){
        let current = this.listHead;

        while(current){
            arr.push([current.key, current.value]);
            current = current.nextNode;
        }
    }
}

export default LinkedList;