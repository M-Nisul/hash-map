class Node{
    constructor(key, value, nextNode){
        this.key = key || null;
        this.value = value || null;
        this.nextNode = nextNode || null;
    }
}

export default Node;