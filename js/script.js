function crateArrayRandomObjects(size = 10) {
    const arr = [];

    for (let i = 0; i < size; i++) {
        const obj = {
            a: Math.floor(Math.random() * 101),
            b: Math.floor(Math.random() * 101),
        };

        arr.push(obj);
    }

    return arr;
}

function AppViewModel() {
    const self = this;

    self.array = ko.observableArray(crateArrayRandomObjects());
}

ko.applyBindings(new AppViewModel());
