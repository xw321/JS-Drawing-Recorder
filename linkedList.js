"use strict";

function Node(data) {
    this.data = data;
    this.next = null;
}

function LinkedList(compare) {
    this.head = null;
    this.length = 0;
    this.compare = compare;
}

LinkedList.prototype = {
    constructor: LinkedList,
    
    getLength: () => { return this.length; },

    addFirst: function(data) {
        let node = new Node(data);
        let curr = this.head;

        this.head = node;
        node.next = curr;
        this.length++;

        return node;
    },

    addLast: function(data) {
        let node = new Node(data);
        let curr = this.head;

        if (!curr) {
            this.head = node;
            this.length++;

            return node;
        }

        while (curr.next) {
            curr = curr.next;
        }

        curr.next = node;
        this.length++;

        return node;
    },

    search: function(data) {
        let curr = this.head;

        while (curr) {
            if (this.compare(curr.data, data)) {
                return curr;
            }
            curr = curr.next;
        }

        return null;
    }
}

