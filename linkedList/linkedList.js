class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }
  append(value) {
    const newNode = { value, next: null }
    if (!this.head) {
      this.head = newNode
    } else {
      this.tail.next = newNode
    }
    this.tail = newNode
  }
  toArray() {
    const arr = []
    if (!this.head) {
      return null
    }
    let curNode = this.head
    while (curNode) {
      arr.push(curNode)
      curNode = curNode.next
    }
    return arr
  }
  prepend(value) {
    const newNode = { value, next: this.head }
    this.heade = newNode
    if(!this.tail) {
      this.tail = newNode
    }
  }
  delete(value) {
    if (!this.head) {
      return false
    }
    let curNode = this.head
    while (curNode && curNode.value === value) {
      this.head = curNode.next
      curNode = this.head
    }
    while (curNode.next) {
      if (curNode.next.value === value) {
        curNode.next = curNode.next.next
      } else {
        curNode = curNode.next
      }
    }
    this.tail = curNode
  }
  find(value) {
    if (!this.head) {
      return null
    } else {
      let arr = []
      let curNode = this.head
      while (curNode) {
        if (curNode.value === value) {
          // console.log('search', curNode.value);
          arr.push(curNode)
        }
        curNode = curNode.next
      }
      return arr
    }
  }
  insertAfter(target,value, bool = false) { // bool默认为false。false代表只插入到所匹配第一个的后面；true代表插入到全部匹配值的后面
    if(!this.head) {
      return false
    }
    // 判断当前的目标值是否存在
    if(!this.find(target).length) {
      return false
    }
    let curNode = this.head
    if(bool) {
      while(curNode) {
        let newNode = { value, next: null }
        if(curNode.value === target) {
          newNode.next = curNode.next
          curNode.next = newNode
        }
        curNode = curNode.next
      }
    } else {
      let newNode = { value, next: null }
      let targetNode = this.find(target)[0]
      newNode.next = targetNode.next
      targetNode.next = newNode
    }
  }
}

const list1 = new LinkedList()
list1.append(1)
list1.append(2)
list1.append(3)
list1.append(4)
list1.append(5)
list1.append(6)
list1.append(8)
list1.append(8)
list1.append(8)
list1.append(8)
// list1.delete(8)
console.log(list1.toArray())