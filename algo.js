// 146. LRU Cache



// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.







class LRUCache {
    constructor(capacity) {
        this.map = new Map(); // A new map initialized
        this.capacity = capacity; // Capacity initialized
    }

    get(key) {
        if (!this.map.has(key)) return -1; // If we don't see the key in the map, return -1
        const val = this.map.get(key); // The value we use is the key we got from the map, because if we don't have it, we already returned -1
        this.map.delete(key); // If it is in the map, then delete it
        this.map.set(key, val); // Reset the key so it's at the top
        return val; // Return that value
    }

    put(key, value) {
        this.map.delete(key);
        this.map.set(key, value);
        if (this.map.size > this.capacity) { // When the size of the map is greater than capacity, then
            const firstItem = this.map.keys().next().value; // We get the first key
            this.map.delete(firstItem); // Actually deleting it
        }
    }
}