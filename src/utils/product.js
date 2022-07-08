class Producto {
    constructor(title, thumbnail, price) {
        this.id = 0;
        this.timestamp = new Date(Date.now());
        this.title = title;
        this.price = price;
        this.thumbnail = thumbnail;
    }
}

module.exports = {
    Producto: Producto,
};