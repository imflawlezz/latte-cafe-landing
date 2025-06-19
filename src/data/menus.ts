import { Menu } from '@/types/menu';

export const foodMenu: Menu = {
    title: "LATTE CAFE",
    categories: [
        {
            name: "Entres",
            dishes: [
                {
                    name: "Avocado Pear Soup",
                    description: "Avocado, Saratoga Chips, Szechuan Button",
                    price: 24
                },
                {
                    name: "Rocket Raisin Salad",
                    description: "Smoked Olive Oil, Fennel, Parmigiano di Reggiano",
                    price: 18
                },
                {
                    name: "Pepe alla Chitarra",
                    description: "Spaghetti, Pancetta, Pecorino Romano",
                    price: 23
                },
                {
                    name: "Chilli Lobster",
                    description: "Served With Texas Toast",
                    price: 42
                }
            ]
        },
        {
            name: "Mains",
            dishes: [
                {
                    name: "New York Red Steak",
                    description: "Fiddleheads, Day Lily, Arugula, Fingerling Potatoes",
                    price: 63
                },
                {
                    name: "Fig and Rosemary Salad",
                    description: "Sauce Proposal, Cauliflower, Hazelnuts, Golden Rasins",
                    price: 46
                },
                {
                    name: "Everything From The Sea",
                    description: "White & Green Asparagus, Spring Onion, Sugar Snaps, Meyer Lemon",
                    price: 48
                },
                {
                    name: "Roasted Chicken & Duck Claypot",
                    description: "Yukon Gold Potatoes, Broccoli Rabe, Pan Drippings",
                    price: 59
                },
                {
                    name: "2-Month Slow Beef in Wine",
                    description: "Charred Green Beans, Romesco, Beef Fat Balsamic Onion",
                    price: 43
                }
            ]
        }
    ]
};

export const drinksMenu: Menu = {
    title: "LATTE CAFE DRINKS",
    categories: [
        {
            name: "Coffee & Espresso",
            dishes: [
                {
                    name: "Latte",
                    description: "Double shot of espresso with steamed milk",
                    price: 4.5
                },
                {
                    name: "Cappuccino",
                    description: "Espresso with equal parts steamed milk and foam",
                    price: 4.5
                },
                {
                    name: "Flat White",
                    description: "Ristretto shots with velvety microfoam",
                    price: 5
                },
                {
                    name: "Cold Brew",
                    description: "16-hour steeped cold brew coffee",
                    price: 5.5
                }
            ]
        },
        {
            name: "Specialty Drinks",
            dishes: [
                {
                    name: "Matcha Latte",
                    description: "Ceremonial grade matcha with oat milk",
                    price: 6
                },
                {
                    name: "Chai Latte",
                    description: "Spiced chai tea with steamed milk",
                    price: 5
                },
                {
                    name: "Golden Milk",
                    description: "Turmeric, cinnamon, ginger with coconut milk",
                    price: 5.5
                }
            ]
        },
        {
            name: "Refreshments",
            dishes: [
                {
                    name: "Fresh Orange Juice",
                    description: "Cold-pressed daily",
                    price: 5
                },
                {
                    name: "Iced Tea",
                    description: "House-blend black tea with lemon",
                    price: 3.5
                },
                {
                    name: "Sparkling Water",
                    description: "San Pellegrino with lemon wedge",
                    price: 3
                }
            ]
        }
    ]
};

export const takeawayMenu: Menu = {
    title: "LATTE CAFE TAKEAWAY",
    categories: [
        {
            name: "Breakfast To Go",
            dishes: [
                {
                    name: "Avocado Toast Box",
                    description: "Sourdough, smashed avocado, cherry tomatoes, feta",
                    price: 9.5
                },
                {
                    name: "Breakfast Burrito",
                    description: "Scrambled eggs, black beans, cheese, salsa",
                    price: 8.5
                },
                {
                    name: "Granola Parfait",
                    description: "House-made granola, Greek yogurt, seasonal fruit",
                    price: 7
                }
            ]
        },
        {
            name: "Lunch Boxes",
            dishes: [
                {
                    name: "Mediterranean Box",
                    description: "Hummus, tabbouleh, falafel, pita bread",
                    price: 12
                },
                {
                    name: "Protein Box",
                    description: "Grilled chicken, quinoa, roasted vegetables",
                    price: 11.5
                },
                {
                    name: "Vegan Delight",
                    description: "Lentil salad, roasted sweet potatoes, tahini dressing",
                    price: 10.5
                }
            ]
        },
        {
            name: "Sandwiches",
            dishes: [
                {
                    name: "Turkey & Brie",
                    description: "On cranberry walnut bread with arugula",
                    price: 9
                },
                {
                    name: "Caprese",
                    description: "Fresh mozzarella, tomato, basil on ciabatta",
                    price: 8.5
                },
                {
                    name: "Veggie Club",
                    description: "Avocado, cucumber, sprouts, hummus on multigrain",
                    price: 8
                }
            ]
        },
        {
            name: "Sweet Treats",
            dishes: [
                {
                    name: "Almond Croissant",
                    description: "Freshly baked daily",
                    price: 4.5
                },
                {
                    name: "Chocolate Chip Cookie",
                    description: "Warm and gooey",
                    price: 3.5
                },
                {
                    name: "Seasonal Muffin",
                    description: "Ask about today's selection",
                    price: 3.5
                }
            ]
        }
    ]
};