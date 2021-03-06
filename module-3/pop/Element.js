'use-strict';

class Element {
    constructor(name, locator) {
        this.locator = locator;
        this.name = name;
        this.parent = null;
        this.children = {};
    }

    setParent(parent) {
        this.parent = parent;
    }

    addChildren(child) {
        if (this.children.hasOwnProperty(child.name))
            throw new Error(`Child ${child.name} already added!`);

        this.children[child.name] = child;
    }
}

module.exports = Element;