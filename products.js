const productsDisplay = document.getElementById('products-container');

const input = document.getElementById('search');
const form = document.getElementById('form');

const loader = document.getElementById('loader');

function load(){
    loader.style.display = 'none'
}

const products = [
        {image: 'https://ln.run/ZVOqX', name: 'Samsung 55-Inch 4K Smart TV', price: 420000, category:'Home Appliances, Electronics, Gadgets, Television, TV'},
        {image: 'https://shorturl.at/q6Zyp', name: 'Berrykey Men Trendy Zipper Turtleneck Long Sleeve Varsity Jackets Sport Coats - White', price: 7050, category:'Clothing, Fashion, Jackets, Sportswear'},
        {image: 'https://shorturl.at/qj3GY', name: 'itel S23+', price: 198000, category:'Mobile Phones, Gadgets, Smartphones'},
        {image: 'https://shorturl.at/1LQqa', name: 'Xiaomi Redmi Note 12', price: 210000, category:'Mobile Phones, Gadgets, Smartphones'},
        {image: 'https://shorturl.at/DlySN', name: 'HP Pavilion x360 Convertible Laptop', price: 550000, category:'Gadgets, Computers, Laptops, Electronics'},
        {image: 'https://ln.run/ywTVC', name: 'Hisense 198 Litres Chest Freezer (FC260SH) - Silver', price: 314135, category:'Home Appliances, Electronics, Gadgets, Fridge, Freezer, Kitchen Appliances'},
        {image: 'https://shorturl.at/CBgi8', name: 'Samsung Galaxy A05', price: 117000, category: 'Mobile Phones, Gadgets, Smartphones'},
        {image: 'https://ln.run/UGXPY', name: 'Queens Luxury Jewelries Sets Necklace', price: 28000, category:'Jewelries, Jewelry, Accessories, Fashion'},
        {image: 'https://shorturl.at/B1dMH', name: 'Sony WH-1000XM5 Wireless Noise-Canceling Headphones', price: 250000, category:'Electronics, Gadgets, Audio, Headphones'},
        {image: 'https://shorturl.at/AkkFi', name: 'Apple iPhone 13', price: 480000, category:'Mobile Phones, Gadgets, Smartphones, Apple'},
        {image: 'https://ln.run/ab2ls', name: 'Women Handbags Crossbody Bags Ladies Shoulder Bags Girl Bags', price: 9900, category:'Fashion, Accessories, Bags, Handbags'},
        {image: 'https://shorturl.at/iElzy', name: 'Dell XPS 15 Laptop', price: 850000, category:'Gadgets, Computers, Laptops, Electronics'},
        {image: 'https://ln.run/-kJig', name: 'Silver Crest German Silver Crest Heavy Duty Blender/Grinder Double Cup', price: 36500, category:'Home Appliances, Kitchen Appliances, Blenders, Electronics'},
        {image: 'https://shorturl.at/1E5Fb', name: 'Infinix Hot 50i', price: 138730, category:'Mobile Phones, Gadgets, Smartphones'},
        {image: 'https://ln.run/IBAeT', name: 'PlayStation 5 Console', price: 460000, category:'Gaming, Games, Gadgets, Electronics, Consoles'},
    ];


    const breakWord = (word) => {
        switch(word.length > 55){
            case true:
                return word.slice(0,55) + '...';
            case false:
                return word
        }
        
    }

    const displayProducts = (arr) => {
        productsDisplay.innerHTML = ``
        arr.map(
            (item) => {
                productsDisplay.innerHTML += `
                    <div id='product-card'>
                        <img src='${item.image}'>
                        <div id='product-description'>
                            <p id='product-name'>${breakWord(item.name)}</p>
                            <p id='product-price'>₦${item.price}</p>
                            <button id='add-to-cart'>ADD TO CART</button>
                        </div>
                    </div>
                `
            }
        )
    }

  
    displayProducts(products)

    
    
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let pattern = new RegExp(`${input.value.trim()}`, 'i')
        let filteredProducts = products.filter((item) => {return pattern.test(item.name) || pattern.test(item.category)})   
        
        
        displayProducts(filteredProducts)
    })
    
    
    const phones = document.getElementById('phones');
    const computers = document.getElementById('computers')
    const electronics = document.getElementById('electronics')
    const fashion = document.getElementById('fashion')
    const kitchen = document.getElementById('kitchen')
    const game = document.getElementById('games')
    
    phones.addEventListener('click', () => {
        let phonePattern  = new RegExp('phone', 'i')
        let phones = products.filter((el) => {return phonePattern.test(el.name) || phonePattern.test(el.category)})
    
        displayProducts(phones)
    
    })

    computers.addEventListener('click', () => {
        let pattern  = new RegExp('computer', 'i')
        let computers = products.filter((el) => {return pattern.test(el.name) || pattern.test(el.category)})
    
        displayProducts(computers)
    
    })

    electronics.addEventListener('click', () => {
        let pattern  = new RegExp('electronic', 'i')
        let electronics = products.filter((el) => {return pattern.test(el.name) || pattern.test(el.category)})
    
        displayProducts(electronics)
    
    })

    fashion.addEventListener('click', () => {
        let pattern  = new RegExp('fashion', 'i')
        let fashion = products.filter((el) => {return pattern.test(el.name) || pattern.test(el.category)})
    
        displayProducts(fashion)
    
    })

    kitchen.addEventListener('click', () => {
        let pattern  = new RegExp('kitchen', 'i')
        let kitchen = products.filter((el) => {return pattern.test(el.name) || pattern.test(el.category)})
    
        displayProducts(kitchen)
    
    })

    games.addEventListener('click', () => {
        let pattern  = new RegExp('game', 'i')
        let games = products.filter((el) => {return pattern.test(el.name) || pattern.test(el.category)})
    
        displayProducts(games)
    
    })
