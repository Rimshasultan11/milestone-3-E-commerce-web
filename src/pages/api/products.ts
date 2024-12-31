import { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const allProducts = [

        {
            id: 1,
            name: " Cotton Printed 2 Piece Suit",
            description: " Stylish and comfortable  cotton printed",
            price:  2000,
            image: "/g1.jpg",
        },
        {
            id: 2,
            name: "Cotton Printed 2 Piece Suit ",
            description: " Stylish and comfortable  cotton printed Elevate your style with this elegant women's kurti, crafted for comfort and sophistication. Made from high-quality, breathable fabric, it features a flattering fit, intricate embroidery, and a modern yet traditional design..",
            price: 2000,
            image: "/g2.jpg",
        },
        {
            id: 3,
            name: " Cotton Printed 2 Piece Suit",
            description: " Stylish and comfortable  cotton printed Elevate your style with this elegant women's kurti, crafted for comfort and sophistication. Made from high-quality, breathable fabric, it features a flattering fit, intricate embroidery, and a modern yet traditional design..",
            price: 2000,
            image: "/g4.jpg",
        },
        {
            id: 4,
            name: "Cotton Printed 2 Piece Suit ",
            description: " Stylish and comfortable  cotton printed Elevate your style with this elegant women's kurti, crafted for comfort and sophistication. Made from high-quality, breathable fabric, it features a flattering fit, intricate embroidery, and a modern yet traditional design..",
            price: 2000,
            image: "/g5.jpg",
        },
        {
            id: 5,
            name: "Womens Kurti ",
            description: " Stylish and comfortable  cotton printed Elevate your style with this elegant women's kurti, crafted for comfort and sophistication. Made from high-quality, breathable fabric, it features a flattering fit, intricate embroidery, and a modern yet traditional design..",
            price: 1500,
            image: "/g6.jpg"
        },
        {
            id: 6,
            name: "Womens Kurti ",
            description: " Stylish and comfortable  cotton printed Elevate your style with this elegant women's kurti, crafted for comfort and sophistication. Made from high-quality, breathable fabric, it features a flattering fit, intricate embroidery, and a modern yet traditional design..",
            price:1500,
            image: "/g7.jpg"
        },
        {
            id:7,
            name: "Womens Kurti ",
            description: " Stylish and comfortable  cotton printed Elevate your style with this elegant women's kurti, crafted for comfort and sophistication. Made from high-quality, breathable fabric, it features a flattering fit, intricate embroidery, and a modern yet traditional design..",
            price: 1500,
            image: "/g8.jpg"
        },
        {
            id: 8,
            name: "Womens Kurti ",
            description: " Stylish and comfortable  cotton printed Elevate your style with this elegant women's kurti, crafted for comfort and sophistication. Made from high-quality, breathable fabric, it features a flattering fit, intricate embroidery, and a modern yet traditional design..",
            price: 1500,
            image: "/g9.jpg"
        },
        {
            id: 9,
            name: "Mens Kurta ",
            description: " This stylish men's kurta blends tradition with modern elegance. Made from premium quality cotton its lightweight, comfortable and perfect for any occasion—be it festivals, weddings, or casual wear. Featuring a sleek design with subtle embroidery full sleeves and a band collar it's a must-have for a timeless look.",
            price: 2500,
            image: "/b9.jpg",
        },
        {
            id: 10,
            name: "Men's Stylish Kurta",
            description: " This stylish men's kurta blends tradition with modern elegance. Made from premium quality cotton its lightweight, comfortable and perfect for any occasion—be it festivals, weddings, or casual wear. Featuring a sleek design with subtle embroidery full sleeves and a band collar it's a must-have for a timeless look.",
            price: 1500,
            image: "/b2.jpg",
        },
        {
            id: 11,
            name: "Men's Kurta",
            description: " This stylish men's kurta blends tradition with modern elegance. Made from premium quality cotton its lightweight, comfortable and perfect for any occasion—be it festivals, weddings, or casual wear. Featuring a sleek design with subtle embroidery full sleeves and a band collar it's a must-have for a timeless look.",
            price: 2500,
            image: "/b4.jpg",
        },
        {
            id: 12,
            name: "Men's Stylish Kurta",
            description: " This stylish men's kurta blends tradition with modern elegance. Made from premium quality cotton its lightweight, comfortable and perfect for any occasion—be it festivals, weddings, or casual wear. Featuring a sleek design with subtle embroidery full sleeves and a band collar it's a must-have for a timeless look.",
            price: 1500,
            image: "/b6.jpg",
        },
    
        {
            id:13,
            name: "Men's T-Shirt",
            description: "Upgrade your casual wardrobe with this versatile mens t-shirt. Made from premium, breathable fabric it ensures all-day comfort and a perfect fit. Featuring a classic crew neck and short sleeves its ideal for casual outings workouts or lounging. Available in a range of trendy colors, its a go-to essential for effortless style.",
            price: 1500,
            image: "/T1.jpg",
        },
        {
            id: 14,
            name: "Men's T-Shirt",
            description: "Upgrade your casual wardrobe with this versatile mens t-shirt. Made from premium, breathable fabric it ensures all-day comfort and a perfect fit. Featuring a classic crew neck and short sleeves its ideal for casual outings workouts or lounging. Available in a range of trendy colors, its a go-to essential for effortless style.",
            price: 1200,
            image: "/T2.jpg",
        },
        {
            id: 15,
            name: "Men's Printed T-Shirt",
            description: "Upgrade your casual wardrobe with this versatile mens t-shirt. Made from premium, breathable fabric it ensures all-day comfort and a perfect fit. Featuring a classic crew neck and short sleeves its ideal for casual outings workouts or lounging. Available in a range of trendy colors, its a go-to essential for effortless style.",
            price: 1200,
            image: "/T4.jpg",
        },
        {
            id: 16,
            name: "Men's T-Shirt",
            description: "Upgrade your casual wardrobe with this versatile mens t-shirt. Made from premium, breathable fabric it ensures all-day comfort and a perfect fit. Featuring a classic crew neck and short sleeves its ideal for casual outings workouts or lounging. Available in a range of trendy colors, its a go-to essential for effortless style.",
            price:  1200,
            image: "/T3.jpg",
        },
        {
            id: 17,
            name: " Kid's Boys 2 piece Suit",
            description: " Dress your little ones in style with this adorable 2-piece suit, designed for both comfort and charm. Made from soft, skin-friendly fabric, this outfit includes a trendy top and matching bottom, perfect for everyday wear or special occasions",
            price: 1800,
            image: "/k-boys1.jpg",
        },
        {
            id: 18,
            name: " Kid's Boys 2 piece Suit",
            description: " Dress your little ones in style with this adorable 2-piece suit, designed for both comfort and charm. Made from soft, skin-friendly fabric, this outfit includes a trendy top and matching bottom, perfect for everyday wear or special occasions",
            price: 3000,
            image: "/k-boys2.jpg",
        },
        {
            id: 19,
            name: " Kid's Boys 2 piece Suit",
            description: " Dress your little ones in style with this adorable 2-piece suit, designed for both comfort and charm. Made from soft, skin-friendly fabric, this outfit includes a trendy top and matching bottom, perfect for everyday wear or special occasions",
            price: 3000,
            image: "/k-boys3.jpg",
        },
        {
            id: 20,
            name: " Kid's Boys 2 piece Suit",
            description: " Dress your little ones in style with this adorable 2-piece suit, designed for both comfort and charm. Made from soft, skin-friendly fabric, this outfit includes a trendy top and matching bottom, perfect for everyday wear or special occasions",
            price:2000,
            image: "/k-boys4.jpg",
        },
        {
            id: 21,
            name: " Kid's Boys Kurta",
            description: " Dress your little ones in style with this adorable 2-piece suit, designed for both comfort and charm. Made from soft, skin-friendly fabric, this outfit includes a trendy top and matching bottom, perfect for everyday wear or special occasions",
            price: 2000,
            image: "/k-boys5.jpg",
        },
        {
            id: 22,
            name: " Kid's Boys Kurta ",
            description: " Dress your little ones in style with this adorable 2-piece suit, designed for both comfort and charm. Made from soft, skin-friendly fabric, this outfit includes a trendy top and matching bottom, perfect for everyday wear or special occasions",
            price: 2000,
            image: "/k-boys6.jpg",
        },
        {
            id:23,
            name: " Kid's Boys Kurta",
            description: " Dress your little ones in style with this adorable 2-piece suit, designed for both comfort and charm. Made from soft, skin-friendly fabric, this outfit includes a trendy top and matching bottom, perfect for everyday wear or special occasions",
            price: 2000,
            image: "/k-boys7.jpg",
        },
        {
            id: 24,
            name: " Kid's Boys Kurta",
            description: " Dress your little ones in style with this adorable 2-piece suit, designed for both comfort and charm. Made from soft, skin-friendly fabric, this outfit includes a trendy top and matching bottom, perfect for everyday wear or special occasions",
            price: 2000,
            image: "/k-boys8.jpg",
        },
        {
            id: 25,
            name: " Kid's Girls 2 piece Suit",
            description: " Let your little princess shine in this delightful 2-piece suit, crafted with soft and breathable fabric for ultimate comfort.",
            price: 2000,
            image: "/k-girls.jpg", 
        },
        {
            id:26,
            name: "Kid's Girls 2 piece Suit",
            description: " Let your little princess shine in this delightful 2-piece suit, crafted with soft and breathable fabric for ultimate comfort.",
            price: 2000,
            image: "/k-girls2.jpg", 
        },
        {
            id: 27,
            name: " Kid's Girls 2 piece Suit",
            description: "Let your little princess shine in this delightful 2-piece suit, crafted with soft and breathable fabric for ultimate comfort.",
            price: 2000,
            image: "/k-girls3.jpg", 
        },
        {
            id: 28,
            name: " Kid's Girls 2 piece Suit",
            description: "Let your little princess shine in this delightful 2-piece suit, crafted with soft and breathable fabric for ultimate comfort.",
            price: 2000,
            image: "/k-girls4.jpg", 
        },
        {
            id: 29,
            name: " Kid's Girls 2 piece Suit",
            description: "Let your little princess shine in this delightful 2-piece suit, crafted with soft and breathable fabric for ultimate comfort.",
            price: 2000,
            image: "/k-girls5.jpg", 
        },
        {
            id: 30,
            name: "Kid's Girls shirt",
            description: " Stylish and comfortable  pink t-shirt",
            price: 2000,
            image: "/kg3.jpg", 
        },
        {
            id: 31,
            name: " Kid's Girls shirt",
            description: "Let your little princess shine in this delightful 2-piece suit, crafted with soft and breathable fabric for ultimate comfort.",
            price: 2000,
            image: "/kids-girl.jpg", 
        },
        {
            id: 32,
            name: " Kid's Girls shirt",
            description: "Let your little princess shine in this delightful 2-piece suit, crafted with soft and breathable fabric for ultimate comfort.",
            price: 2000,
            image: "/kids-girls2.jpg", 
        },
        {
            id:33,
           name:"Casual Wear",
          description:"  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis sed voluptate inventore illo facere ",
          price: 2500,
          image:"/p6.png",
        },
          {
            id:34,
            name:"Printed shirt",
            description:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis sed voluptate inventore illo facere ",
            price: 2000,
            image:"/p7.png",
        },
            {
              id:35,
              name:"women Shirt",
              description:"  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis sed voluptate inventore illo facere ",
              price: 2500,
              image:"/p8.png",
            }, 
    
    
    ];

  res.status(200).json(allProducts);

}