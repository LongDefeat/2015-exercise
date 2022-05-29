import React from 'react';
// // choice(items): returns a randomly selected item from array of items

function choice(items){
    const randomIdx = Math.floor(Math.random() * items.length);

    const item = items[randomIdx];
    return item;
}

// remove(items, item): removes the first matching item from items, 
// if item exists, and returns it. Otherwise returns undefined.

function remove(items, item){
    const itemIdx = items.indexOf(item);
    for (let i = 0; i < items.length; i++){
        if (items[i] === item){
            return [...items.slice(0, i), ...items.slice(i + 1)]
        }
    }
}

export {choice, remove};
