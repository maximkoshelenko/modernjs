const Singleton = (function () {
    let instance;

    let number = 1;
    function createInstance() {
        const object = new Object({ name: 'Brad', number });
        number++;
        console.log(number);
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);
console.log(instanceA);
console.log(instanceB);