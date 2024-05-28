import LinkedList from './linkedlist.mjs'

class HashMap {
    static INITIAL_CAPACITY =  16;
    static LOAD_FACTOR = 0.75;

    constructor(){
        this.arraySize = HashMap.INITIAL_CAPACITY;

        this.map = Array.from({length: this.arraySize}, () => new LinkedList());
    }

    hash(key){
        let hashCode = 0;

        const primeNumber = 31;
        for(let i = 0; i < key.length; i++){
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        hashCode %= this.arraySize;

        return hashCode;
    }

    set(key, value){
        const hashCode = this.hash(key);

        if(this.map[hashCode].getItem(key)){
            this.map[hashCode].setItem(key, value);
        }else{
            this.map[hashCode].append(key, value);
            
            //checks the current size and see if the hash map needs to be grown
            const size = this.length();

            if(size / this.arraySize > HashMap.LOAD_FACTOR){
                this.growSize();
            }
        }

    }

    get(key){
        const hashCode = this.hash(key);

        if(this.map[hashCode].listHead){
            return this.map[hashCode].getItem(key);
        }else{
            return null;
        }

    }

    has(key){
        const hashCode = this.hash(key);

        if(this.map[hashCode].listHead){
            return this.map[hashCode].hasItem(key);
        }else{
            return false;
        }
    }

    remove(key){
        const hashCode = this.hash(key);

        if(this.map[hashCode].listHead){
            return this.map[hashCode].remove(key);
        }else{
            return false;
        }
    }

    length(){
        let keys = 0;

        for(let i = 0;i < this.map.length;i++){
            if(this.map[i].listHead){
                keys += this.map[i].length();
            }
        }

        return keys;
    }

    clear(){
        this.map = Array.from({length: this.arraySize}, () => new LinkedList());
    }

    allkeys(){
        const arr = [];

        for(let i = 0; i < this.map.length; i++){
            if(this.map[i].listHead){
                this.map[i].allKeys(arr);
            }
        }

        return arr;
    }

    allvalues(){
        const arr = [];

        for(let i = 0;i < this.map.length;i++){
            if(this.map[i].listHead){
                this.map[i].values(arr);
            }
        }

        return arr;
    }

    entries(){
        const arr = [];

        for(let i = 0;i < this.map.length;i++){
            if(this.map[i].listHead){
                this.map[i].entries(arr);
            }
        }

        return arr;
    }

    growSize(){
        const old = this.map;

        this.arraySize = this.arraySize * 2;

        this.map = Array.from({length: this.arraySize * 2}, () => new LinkedList());

        for(let i = 0;i < old.length;i++){
            if(old[i].listHead){
                let current = old[i].listHead;

                while(current){
                    this.set(current.key, current.value);
                    current = current.nextNode;
                }
            }
        }
    }

}

export default HashMap;