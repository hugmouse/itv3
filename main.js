const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'Some description I guess',
            imageURL: './assets/images/socks_green.jpg',
            imageDescription: 'Socks image',
            inStock: true,
            inventory: 8,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' }
            ],
            sizes: ['big', 'not so big', 'smol']
        }
    }
})
