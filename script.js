// ========================================
// KBeautySeol - Korean Skincare Website
// JavaScript
// ========================================

// Products Data - 1000+ Korean Skincare Products
const products = [
    {id:1,name:"Hydrating Face Mask",price:10,image:"https://images.pexels.com/photos/3764645/pexels-photo-3764645.jpeg"},
    {id:2,name:"Snail Repair Cream",price:18,image:"https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg"},
    {id:3,name:"Glass Skin Serum",price:22,image:"https://images.pexels.com/photos/3785706/pexels-photo-3785706.jpeg"},
    {id:4,name:"Korean Hydrating Toner",price:15,image:"https://images.pexels.com/photos/39351/cosmetics-cosmetology-face-cream-macro-39351.jpeg"},
    {id:5,name:"Collagen Sheet Mask",price:8,image:"https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg"},
    {id:6,name:"Aloe Vera Gel",price:12,image:"https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg"},
    {id:7,name:"Green Tea Cream",price:16,image:"https://images.pexels.com/photos/3759662/pexels-photo-3759662.jpeg"},
    {id:8,name:"Vitamin C Serum",price:24,image:"https://images.pexels.com/photos/4046319/pexels-photo-4046319.jpeg"},
    {id:9,name:"Hyaluronic Acid",price:20,image:"https://images.pexels.com/photos/4057269/pexels-photo-4057269.jpeg"},
    {id:10,name:"Niacinamide Serum",price:18,image:"https://images.pexels.com/photos/2688991/pexels-photo-2688991.jpeg"},
    {id:11,name:"Retinol Cream",price:28,image:"https://images.pexels.com/photos/3337437/pexels-photo-3337437.jpeg"},
    {id:12,name:"Peptide Moisturizer",price:25,image:"https://images.pexels.com/photos/2253835/pexels-photo-2253835.jpeg"},
    {id:13,name:"Ceramides Complex",price:22,image:"https://images.pexels.com/photos/2253798/pexels-photo-2253798.jpeg"},
    {id:14,name:"Snail Mucin Essence",price:19,image:"https://images.pexels.com/photos/1978082/pexels-photo-1978082.jpeg"},
    {id:15,name:"Propolis Serum",price:21,image:"https://images.pexels.com/photos/2253794/pexels-photo-2253794.jpeg"},
    {id:16,name:"Rice Water Cleanser",price:14,image:"https://images.pexels.com/photos/3337437/pexels-photo-3337437.jpeg"},
    {id:17,name:"Centella Asiatica",price:16,image:"https://images.pexels.com/photos/2253835/pexels-photo-2253835.jpeg"},
    {id:18,name:"Bee Propolis Cream",price:20,image:"https://images.pexels.com/photos/2253798/pexels-photo-2253798.jpeg"},
    {id:19,name:"Ginseng Extract",price:26,image:"https://images.pexels.com/photos/1978082/pexels-photo-1978082.jpeg"},
    {id:20,name:"Turmeric Brightening",price:17,image:"https://images.pexels.com/photos/2253794/pexels-photo-2253794.jpeg"},
    {id:21,name:"Pearl Powder Mask",price:15,image:"https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg"},
    {id:22,name:"Charcoal Clay Mask",price:12,image:"https://images.pexels.com/photos/3759662/pexels-photo-3759662.jpeg"},
    {id:23,name:"Honey Moisturizing Mask",price:14,image:"https://images.pexels.com/photos/4046319/pexels-photo-4046319.jpeg"},
    {id:24,name:"Rose Petal Toner",price:11,image:"https://images.pexels.com/photos/4057269/pexels-photo-4057269.jpeg"},
    {id:25,name:"Blueberry Antioxidant",price:19,image:"https://images.pexels.com/photos/2688991/pexels-photo-2688991.jpeg"},
    {id:26,name:"Cucumber Cooling Gel",price:10,image:"https://images.pexels.com/photos/3337437/pexels-photo-3337437.jpeg"},
    {id:27,name:"Strawberry Exfoliator",price:13,image:"https://images.pexels.com/photos/2253835/pexels-photo-2253835.jpeg"},
    {id:28,name:"Grape Resveratrol",price:23,image:"https://images.pexels.com/photos/2253798/pexels-photo-2253798.jpeg"},
    {id:29,name:"Tea Tree Oil",price:14,image:"https://images.pexels.com/photos/1978082/pexels-photo-1978082.jpeg"},
    {id:30,name:"Pimple Patch",price:8,image:"https://images.pexels.com/photos/2253794/pexels-photo-2253794.jpeg"},
    {id:31,name:"Acne Spot Treatment",price:12,image:"https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg"},
    {id:32,name:"Pore Minimizing Serum",price:18,image:"https://images.pexels.com/photos/3759662/pexels-photo-3759662.jpeg"},
    {id:33,name:"Oil Control Toner",price:14,image:"https://images.pexels.com/photos/4046319/pexels-photo-4046319.jpeg"},
    {id:34,name:"Sebum Control Cream",price:16,image:"https://images.pexels.com/photos/4057269/pexels-photo-4057269.jpeg"},
    {id:35,name:"Deep Pore Cleanser",price:15,image:"https://images.pexels.com/photos/2688991/pexels-photo-2688991.jpeg"},
    {id:36,name:"Blackhead Remover",price:11,image:"https://images.pexels.com/photos/3337437/pexels-photo-3337437.jpeg"},
    {id:37,name:"Whitehead Solution",price:13,image:"https://images.pexels.com/photos/2253835/pexels-photo-2253835.jpeg"},
    {id:38,name:"Dullness Treatment",price:20,image:"https://images.pexels.com/photos/2253798/pexels-photo-2253798.jpeg"},
    {id:39,name:"Skin Brightening Kit",price:35,image:"https://images.pexels.com/photos/1978082/pexels-photo-1978082.jpeg"},
    {id:40,name:"Whitening Cream",price:18,image:"https://images.pexels.com/photos/2253794/pexels-photo-2253794.jpeg"},
    {id:41,name:"Even Skin Tone",price:22,image:"https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg"},
    {id:42,name:"Dark Circle Eye Cream",price:24,image:"https://images.pexels.com/photos/3759662/pexels-photo-3759662.jpeg"},
    {id:43,name:"Anti-Puffiness Eye Gel",price:16,image:"https://images.pexels.com/photos/4046319/pexels-photo-4046319.jpeg"},
    {id:44,name:"Firming Eye Cream",price:28,image:"https://images.pexels.com/photos/4057269/pexels-photo-4057269.jpeg"},
    {id:45,name:"Eye Serum",price:21,image:"https://images.pexels.com/photos/2688991/pexels-photo-2688991.jpeg"},
    {id:46,name:"Caffeine Eye Patch",price:14,image:"https://images.pexels.com/photos/3337437/pexels-photo-3337437.jpeg"},
    {id:47,name:"Wrinkle Cream",price:30,image:"https://images.pexels.com/photos/2253835/pexels-photo-2253835.jpeg"},
    {id:48,name:"Anti-Aging Serum",price:32,image:"https://images.pexels.com/photos/2253798/pexels-photo-2253798.jpeg"},
    {id:49,name:"Firming Moisturizer",price:26,image:"https://images.pexels.com/photos/1978082/pexels-photo-1978082.jpeg"},
    {id:50,name:"Lifting Cream",price:28,image:"https://images.pexels.com/photos/2253794/pexels-photo-2253794.jpeg"},
    {id:51,name:"SPF50 Sunscreen",price:16,image:"https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg"},
    {id:52,name:"SPF30 Sunscreen",price:14,image:"https://images.pexels.com/photos/3759662/pexels-photo-3759662.jpeg"},
    {id:53,name:"Invisible Sunscreen",price:18,image:"https://images.pexels.com/photos/4046319/pexels-photo-4046319.jpeg"},
    {id:54,name:"Tinted SPF",price:20,image:"https://images.pexels.com/photos/4057269/pexels-photo-4057269.jpeg"},
    {id:55,name:"Mist Sunscreen",price:12,image:"https://images.pexels.com/photos/2688991/pexels-photo-2688991.jpeg"},
    {id:56,name:"Gel Sunscreen",price:15,image:"https://images.pexels.com/photos/3337437/pexels-photo-3337437.jpeg"},
    {id:57,name:"Water Essence Sunscreen",price:17,image:"https://images.pexels.com/photos/2253835/pexels-photo-2253835.jpeg"},
    {id:58,name:"Cushion Compact SPF",price:22,image:"https://images.pexels.com/photos/2253798/pexels-photo-2253798.jpeg"},
    {id:59,name:"Stick Sunscreen",price:14,image:"https://images.pexels.com/photos/1978082/pexels-photo-1978082.jpeg"},
    {id:60,name:"Powder Sunscreen",price:16,image:"https://images.pexels.com/photos/2253794/pexels-photo-2253794.jpeg"},
    {id:61,name:"Lip Balm",price:6,image:"https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg"},
    {id:62,name:"Lip Mask",price:10,image:"https://images.pexels.com/photos/3759662/pexels-photo-3759662.jpeg"},
    {id:63,name:"Lip Serum",price:12,image:"https://images.pexels.com/photos/4046319/pexels-photo-4046319.jpeg"},
    {id:64,name:"Lip Cream",price:9,image:"https://images.pexels.com/photos/4057269/pexels-photo-4057269.jpeg"},
    {id:65,name:"Lip Tint",price:11,image:"https://images.pexels.com/photos/2688991/pexels-photo-2688991.jpeg"},
    {id:66,name:"Lip Oil",price:8,image:"https://images.pexels.com/photos/3337437/pexels-photo-3337437.jpeg"},
    {id:67,name:"Lip Scrub",price:7,image:"https://images.pexels.com/photos/2253835/pexels-photo-2253835.jpeg"},
    {id:68,name:"Lip Plumper",price:13,image:"https://images.pexels.com/photos/2253798/pexels-photo-2253798.jpeg"},
    {id:69,name:"Night Lip Care",price:10,image:"https://images.pexels.com/photos/1978082/pexels-photo-1978082.jpeg"},
    {id:70,name:"Lip Primer",price:9,image:"https://images.pexels.com/photos/2253794/pexels-photo-2253794.jpeg"},
    {id:71,name:"Foaming Cleanser",price:12,image:"https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg"},
    {id:72,name:"Gel Cleanser",price:14,image:"https://images.pexels.com/photos/3759662/pexels-photo-3759662.jpeg"},
    {id:73,name:"Oil Cleanser",price:15,image:"https://images.pexels.com/photos/4046319/pexels-photo-4046319.jpeg"},
    {id:74,name:"Cream Cleanser",price:13,image:"https://images.pexels.com/photos/4057269/pexels-photo-4057269.jpeg"},
    {id:75,name:"Milk Cleanser",price:11,image:"https://images.pexels.com/photos/2688991/pexels-photo-2688991.jpeg"},
    {id:76,name:"Powder Cleanser",price:14,image:"https://images.pexels.com/photos/3337437/pexels-photo-3337437.jpeg"},
    {id:77,name:"Bar Cleanser",price:8,image:"https://images.pexels.com/photos/2253835/pexels-photo-2253835.jpeg"},
    {id:78,name:"Clay Cleanser",price:13,image:"https://images.pexels.com/photos/2253798/pexels-photo-2253798.jpeg"},
    {id:79,name:"Enzyme Cleanser",price:16,image:"https://images.pexels.com/photos/1978082/pexels-photo-1978082.jpeg"},
    {id:80,name:"Micellar Water",price:10,image:"https://images.pexels.com/photos/2253794/pexels-photo-2253794.jpeg"},
    {id:81,name:"Daily Moisturizer",price:16,image:"https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg"},
    {id:82,name:"Night Cream",price:22,image:"https://images.pexels.com/photos/3759662/pexels-photo-3759662.jpeg"},
    {id:83,name:"Day Cream",price:18,image:"https://images.pexels.com/photos/4046319/pexels-photo-4046319.jpeg"},
    {id:84,name:"Gel Cream",price:15,image:"https://images.pexels.com/photos/4057269/pexels-photo-4057269.jpeg"},
    {id:85,name:"Water Cream",price:17,image:"https://images.pexels.com/photos/2688991/pexels-photo-2688991.jpeg"},
    {id:86,name:"Barrier Cream",price:20,image:"https://images.pexels.com/photos/3337437/pexels-photo-3337437.jpeg"},
    {id:87,name:"Recovery Cream",price:24,image:"https://images.pexels.com/photos/2253835/pexels-photo-2253835.jpeg"},
    {id:88,name:"Firming Cream",price:26,image:"https://images.pexels.com/photos/2253798/pexels-photo-2253798.jpeg"},
    {id:89,name:"Acne Cream",price:14,image:"https://images.pexels.com/photos/1978082/pexels-photo-1978082.jpeg"},
    {id:90,name:"Sensitive Cream",price:18,image:"https://images.pexels.com/photos/2253794/pexels-photo-2253794.jpeg"},
    {id:91,name:"First Essence",price:28,image:"https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg"},
    {id:92,name:"Treatment Essence",price:24,image:"https://images.pexels.com/photos/3759662/pexels-photo-3759662.jpeg"},
    {id:93,name:"Emulsion",price:18,image:"https://images.pexels.com/photos/4046319/pexels-photo-4046319.jpeg"},
    {id:94,name:"Mist Essence",price:12,image:"https://images.pexels.com/photos/4057269/pexels-photo-4057269.jpeg"},
    {id:95,name:"Sleeping Pack",price:20,image:"https://images.pexels.com/photos/2688991/pexels-photo-2688991.jpeg"},
    {id:96,name:"Fermented Essence",price:30,image:"https://images.pexels.com/photos/3337437/pexels-photo-3337437.jpeg"},
    {id:97,name:"Galactomyces",price:32,image:"https://images.pexels.com/photos/2253835/pexels-photo-2253835.jpeg"},
    {id:98,name:"Bifida Serum",price:28,image:"https://images.pexels.com/photos/2253798/pexels-photo-2253798.jpeg"},
    {id:99,name:"Yeast Extract",price:25,image:"https://images.pexels.com/photos/1978082/pexels-photo-1978082.jpeg"},
    {id:100,name:"Rice Bran Essence",price:22,image:"https://images.pexels.com/photos/2253794/pexels-photo-2253794.jpeg"},
    {id:101,name:"Intensive Ampoule",price:35,image:"https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg"},
    {id:102,name:"Hydrating Ampoule",price:28,image:"https://images.pexels.com/photos/3759662/pexels-photo-3759662.jpeg"},
    {id:103,name:"Brightening Ampoule",price:30,image:"https://images.pexels.com/photos/4046319/pexels-photo-4046319.jpeg"},
    {id:104,name:"Troubleshooting Ampoule",price:32,image:"https://images.pexels.com/photos/4057269/pexels-photo-4057269.jpeg"},
    {id:105,name:"Spot Correcting Ampoule",price:26,image:"https://images.pexels.com/photos/2688991/pexels-photo-2688991.jpeg"},
    {id:106,name:"Pore Ampoule",price:24,image:"https://images.pexels.com/photos/3337437/pexels-photo-3337437.jpeg"},
    {id:107,name:"Acne Ampoule",price:22,image:"https://images.pexels.com/photos/2253835/pexels-photo-2253835.jpeg"},
    {id:108,name:"Scar Ampoule",price:28,image:"https://images.pexels.com/photos/2253798/pexels-photo-2253798.jpeg"},
    {id:109,name:"Wrinkle Ampoule",price:34,image:"https://images.pexels.com/photos/1978082/pexels-photo-1978082.jpeg"},
    {id:110,name:"Lifting Ampoule",price:36,image:"https://images.pexels.com/photos/2253794/pexels-photo-2253794.jpeg"},
    {id:111,name:"Hair Serum",price:14,image:"https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg"},
    {id:112,name:"Hair Mask",price:18,image:"https://images.pexels.com/photos/3759662/pexels-photo-3759662.jpeg"},
    {id:113,name:"Hair Essence",price:16,image:"https://images.pexels.com/photos/4046319/pexels-photo-4046319.jpeg"},
    {id:114,name:"Hair Spray",price:12,image:"https://images.pexels.com/photos/4057269/pexels-photo-4057269.jpeg"},
    {id:115,name:"Hair Tonic",price:14,image:"https://images.pexels.com/photos/2688991/pexels-photo-2688991.jpeg"},
    {id:116,name:"Scalp Serum",price:20,image:"https://images.pexels.com/photos/3337437/pexels-photo-3337437.jpeg"},
    {id:117,name:"Scalp Mask",price:16,image:"https://images.pexels.com/photos/2253835/pexels-photo-2253835.jpeg"},
    {id:118,name:"Scalp Toner",price:14,image:"https://images.pexels.com/photos/2253798/pexels-photo-2253798.jpeg"},
    {id:119,name:"Hair Oil",price:15,image:"https://images.pexels.com/photos/1978082/pexels-photo-1978082.jpeg"},
    {id:120,name:"Scalp Scrub",price:13,image:"https://images.pexels.com/photos/2253794/pexels-photo-2253794.jpeg"},
    {id:121,name:"Body Lotion",price:12,image:"https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg"},
    {id:122,name:"Body Cream",price:16,image:"https://images.pexels.com/photos/3759662/pexels-photo-3759662.jpeg"},
    {id:123,name:"Body Butter",price:18,image:"https://images.pexels.com/photos/4046319/pexels-photo-4046319.jpeg"},
    {id:124,name:"Body Oil",price:14,image:"https://images.pexels.com/photos/4057269/pexels-photo-4057269.jpeg"},
    {id:125,name:"Body Mist",price:10,image:"https://images.pexels.com/photos/2688991/pexels-photo-2688991.jpeg"},
    {id:126,name:"Body Scrub",price:14,image:"https://images.pexels.com/photos/3337437/pexels-photo-3337437.jpeg"},
    {id:127,name:"Body Serum",price:20,image:"https://images.pexels.com/photos/2253835/pexels-photo-2253835.jpeg"},
    {id:128,name:"Hand Cream",price:10,image:"https://images.pexels.com/photos/2253798/pexels-photo-2253798.jpeg"},
    {id:129,name:"Foot Cream",price:12,image:"https://images.pexels.com/photos/1978082/pexels-photo-1978082.jpeg"},
    {id:130,name:"Neck Cream",price:18,image:"https://images.pexels.com/photos/2253794/pexels-photo-2253794.jpeg"},
    {id:131,name:"Hand Mask",price:8,image:"https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg"},
    {id:132,name:"Foot Mask",price:9,image:"https://images.pexels.com/photos/3759662/pexels-photo-3759662.jpeg"},
    {id:133,name:"Body Firming Gel",price:22,image:"https://images.pexels.com/photos/4046319/pexels-photo-4046319.jpeg"},
    {id:134,name:"Stretch Mark Cream",price:24,image:"https://images.pexels.com/photos/4057269/pexels-photo-4057269.jpeg"},
    {id:135,name:"Cellulite Cream",price:20,image:"https://images.pexels.com/photos/2688991/pexels-photo-2688991.jpeg"},
    {id:136,name:"Whipping Cream Mask",price:15,image:"https://images.pexels.com/photos/3337437/pexels-photo-3337437.jpeg"},
    {id:137,name:"Jelly Pack",price:18,image:"https://images.pexels.com/photos/2253835/pexels-photo-2253835.jpeg"},
    {id:138,name:"Sleeping Mask",price:20,image:"https://images.pexels.com/photos/2253798/pexels-photo-2253798.jpeg"},
    {id:139,name:"Wash Off Pack",price:14,image:"https://images.pexels.com/photos/1978082/pexels-photo-1978082.jpeg"},
    {id:140,name:"Peeling Gel",price:16,image:"https://images.pexels.com/photos/2253794/pexels-photo-2253794.jpeg"},
    {id:141,name:"AHA BHA Toner",price:18,image:"https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg"},
    {id:142,name:"PHA Toner",price:20,image:"https://images.pexels.com/photos/3759662/pexels-photo-3759662.jpeg"},
    {id:143,name:"BHA Liquid",price:16,image:"https://images.pexels.com/photos/4046319/pexels-photo-4046319.jpeg"},
    {id:144,name:"AHA Serum",price:22,image:"https://images.pexels.com/photos/4057269/pexels-photo-4057269.jpeg"},
    {id:145,name:"BHA Serum",price:20,image:"https://images.pexels.com/photos/2688991/pexels-photo-2688991.jpeg"},
    {id:146,name:"Tranexamic Acid",price:24,image:"https://images.pexels.com/photos/3337437/pexels-photo-3337437.jpeg"},
    {id:147,name:"Alpha Arbutin",price:22,image:"https://images.pexels.com/photos/2253835/pexels-photo-2253835.jpeg"},
    {id:148,name:"Azelaic Acid",price:18,image:"https://images.pexels.com/photos/2253798/pexels-photo-2253798.jpeg"},
    {id:149,name:"Bakuchiol",price:26,image:"https://images.pexels.com/photos/1978082/pexels-photo-1978082.jpeg"},
    {id:150,name:"Madecassoside",price:20,image:"https://images.pexels.com/photos/2253794/pexels-photo-2253794.jpeg"},
    {id:151,name:"Asiaticoside",price:22,image:"https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg"},
    {id:152,name:"Panthenol Cream",price:14,image:"https://images.pexels.com/photos/3759662/pexels-photo-3759662.jpeg"},
    {id:153,name:"Allantoin Gel",price:12,image:"https://images.pexels.com/photos/4046319/pexels-photo-4046319.jpeg"},
    {id:154,name:"Squalane Oil",price:18,image:"https://images.pexels.com/photos/4057269/pexels-photo-4057269.jpeg"},
    {id:155,name:"Rosehip Oil",price:20,image:"https://images.pexels.com/photos/2688991/pexels-photo-2688991.jpeg"},
    {id:156,name:"Jojoba Oil",price:16,image:"https://images.pexels.com/photos/3337437/pexels-photo-3337437.jpeg"},
    {id:157,name:"Tea Tree Oil",price:14,image:"https://images.pexels.com/photos/2253835/pexels-photo-2253835.jpeg"},
    {id:158,name:"Licorice Root",price:18,image:"https://images.pexels.com/photos/2253798/pexels-photo-2253798.jpeg"},
    {id:159,name:"Mulberry Extract",price:22,image:"https://images.pexels.com/photos/1978082/pexels-photo-1978082.jpeg"},
    {id:160,name:"Kojic Acid",price:20,image:"https://images.pexels.com/photos/2253794/pexels-photo-2253794.jpeg"},
    {id:161,name:"Hydroquinone Cream",price:24,image:"https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg"},
    {id:162,name:"Arbutin Serum",price:22,image:"https://images.pexels.com/photos/3759662/pexels-photo-3759662.jpeg"},
    {id:163,name:"Glycerin Toner",price:10,image:"https://images.pexels.com/photos/4046319/pexels-photo-4046319.jpeg"},
    {id:164,name:"Butylene Glycol",price:12,image:"https://images.pexels.com/photos/4057269/pexels-photo-4057269.jpeg"},
    {id:165,name:"Propylene Glycol",price:10,image:"https://images.pexels.com/photos/2688991/pexels-photo-2688991.jpeg"},
    {id:166,name:"Betaine",price:14,image:"https://images.pexels.com/photos/3337437/pexels-photo-3337437.jpeg"},
    {id:167,name:"Trehalose",price:12,image:"https://images.pexels.com/photos/2253835/pexels-photo-2253835.jpeg"},
    {id:168,name:"Sorbitol",price:10,image:"https://images.pexels.com/photos/2253798/pexels-photo-2253798.jpeg"},
    {id:169,name:"Urea Cream",price:16,image:"https://images.pexels.com/photos/1978082/pexels-photo-1978082.jpeg"},
    {id:170,name:"Beta Glucan",price:18,image:"https://images.pexels.com/photos/2253794/pexels-photo-2253794.jpeg"},
    {id:171,name:"Chitin",price:20,image:"https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg"},
    {id:172,name:"Chitosan",price:18,image:"https://images.pexels.com/photos/3759662/pexels-photo-3759662.jpeg"},
    {id:173,name:"Collagen Drink",price:24,image:"https://images.pexels.com/photos/4046319/pexels-photo-4046319.jpeg"},
    {id:174,name:"Vitamin Drink",price:20,image:"https://images.pexels.com/photos/4057269/pexels-photo-4057269.jpeg"},
    {id:175,name:"Supplement Capsule",price:22,image:"https://images.pexels.com/photos/2688991/pexels-photo-2688991.jpeg"},
    {id:176,name:"Fiber Supplement",price:18,image:"https://images.pexels.com/photos/3337437/pexels-photo-3337437.jpeg"},
    {id:177,name:"Probiotic Drink",price:16,image:"https://images.pexels.com/photos/2253835/pexels-photo-2253835.jpeg"},
    {id:178,name:"Enzyme Drink",price:18,image:"https://images.pexels.com/photos/2253798/pexels-photo-2253798.jpeg"},
    {id:179,name:"Chlorophyll Drink",price:20,image:"https://images.pexels.com/photos/1978082/pexels-photo-1978082.jpeg"},
    {id:180,name:"Detox Tea",price:14,image:"https://images.pexels.com/photos/2253794/pexels-photo-2253794.jpeg"},
    {id:181,name:"Facial Roller",price:12,image:"https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg"},
    {id:182,name:"Gua Sha Tool",price:16,image:"https://images.pexels.com/photos/3759662/pexels-photo-3759662.jpeg"},
    {id:183,name:"Jade Roller",price:14,image:"https://images.pexels.com/photos/4046319/pexels-photo-4046319.jpeg"},
    {id:184,name:"Face Massage Tool",price:18,image:"https://images.pexels.com/photos/4057269/pexels-photo-4057269.jpeg"},
    {id:185,name:"Derma Roller",price:20,image:"https://images.pexels.com/photos/2688991/pexels-photo-2688991.jpeg"},
    {id:186,name:"Face Brush",price:10,image:"https://images.pexels.com/photos/3337437/pexels-photo-3337437.jpeg"},
    {id:187,name:"Silicone Brush",price:8,image:"https://images.pexels.com/photos/2253835/pexels-photo-2253835.jpeg"},
    {id:188,name:"Cleansing Device",price:35,image:"https://images.pexels.com/photos/2253798/pexels-photo-2253798.jpeg"},
    {id:189,name:"Face Steamer",price:45,image:"https://images.pexels.com/photos/1978082/pexels-photo-1978082.jpeg"},
    {id:190,name:"LED Mask",price:55,image:"https://images.pexels.com/photos/2253794/pexels-photo-2253794.jpeg"},
    {id:191,name:"Eye Mask Patch",price:12,image:"https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg"},
    {id:192,name:"Lip Patch",price:10,image:"https://images.pexels.com/photos/3759662/pexels-photo-3759662.jpeg"},
    {id:193,name:"Nose Strip",price:8,image:"https://images.pexels.com/photos/4046319/pexels-photo-4046319.jpeg"},
    {id:194,name:"Cotton Pad",price:5,image:"https://images.pexels.com/photos/4057269/pexels-photo-4057269.jpeg"},
    {id:195,name:"Cotton Swab",price:4,image:"https://images.pexels.com/photos/2688991/pexels-photo-2688991.jpeg"},
    {id:196,name:"Makeup Remover",price:12,image:"https://images.pexels.com/photos/3337437/pexels-photo-3337437.jpeg"},
    {id:197,name:"Tissue Paper",price:3,image:"https://images.pexels.com/photos/2253835/pexels-photo-2253835.jpeg"},
    {id:198,name:"Face Towel",price:6,image:"https://images.pexels.com/photos/2253798/pexels-photo-2253798.jpeg"},
    {id:199,name:"Hair Towel",price:8,image:"https://images.pexels.com/photos/1978082/pexels-photo-1978082.jpeg"},
    {id:200,name:"Bath Towel",price:12,image:"https://images.pexels.com/photos/2253794/pexels-photo-2253794.jpeg"}
];

// Generate more products to reach 1000+
const productNames = ["Hydrating Face Mask","Snail Repair Cream","Glass Skin Serum","Korean Hydrating Toner","Collagen Sheet Mask","Aloe Vera Sheet Mask","Green Tea Clay Mask","Honey Moisturizing Mask","Rose Petal Mask","Pearl Brightening Mask","Vitamin C Clay Mask","Charcoal Purifying Mask","Centella Soothing Mask","Propolis Healing Mask","Rice Water Brightening Mask","Blueberry Anti-Aging Mask","Cucumber Cooling Mask","Strawberry Exfoliating Mask","Grape Resveratrol Mask","Tea Tree Oil Mask","Hyaluronic Acid Mask","Collagen Plumping Mask","Snail Mucin Mask","Bee Venom Mask","Gold Firming Mask","Silk Protein Mask","Lotus Seed Mask","Mugwort Calming Mask","Bamboo Water Mask","Chrysanthemum Mask","Ginseng Revitalizing Mask","White Truffle Mask","Black Pearl Mask","Diamond Dust Mask","Ruby Regeneration Mask","Emerald Hydration Mask","Sapphire Oil Control Mask","Amethyst Soothing Mask","Opal Glow Mask","Aquamarine Fresh Mask","Niacinamide Serum","Hyaluronic Acid Serum","Vitamin C Serum","Retinol Serum","Peptide Serum","Snail Mucin Essence","Propolis Serum","Green Tea Serum","Rice Bran Serum","Ginseng Serum","Bee Propolis Serum","Galaxy Serum","Placenta Serum","EGF Serum","B5 Serum","Alpha Arbutin Serum","Tranexamic Acid Serum","Azelaic Acid Serum","Centella Serum","Bakuchiol Serum","Glycerin Serum","Squalane Serum","Rosehip Serum","Tea Tree Serum","Licorice Serum","Madecassoside Serum","Asiaticoside Serum","Panthenol Serum","Allantoin Serum","Ceramides Serum","Balancing Toner","Exfoliating Toner","Hydrating Toner","Soothing Toner","Brightening Toner","Pore Minimizing Toner","Oil Control Toner","pH Balancing Toner","Milky Toner","Essence Toner","Rose Water Toner","Witch Hazel Toner","Green Tea Toner","Aloe Toner","Cucumber Toner","Rice Water Toner","Ginseng Toner","Chamomile Toner","Lavender Toner","Jojoba Toner","Daily Moisturizer","Night Cream","Day Cream","Gel Cream","Water Cream","Barrier Cream","Recovery Cream","Firming Cream","Whitening Cream","Acne Cream","Sensitive Cream","Dry Skin Cream","Oily Skin Cream","Combination Cream","Normal Skin Cream","Anti-Aging Cream","Filler Cream","Volumizing Cream","Lifting Cream","Contouring Cream","Foaming Cleanser","Gel Cleanser","Oil Cleanser","Cream Cleanser","Milk Cleanser","Powder Cleanser","Bar Cleanser","Clay Cleanser","Charcoal Cleanser","Salt Cleanser","Enzyme Cleanser","Micellar Cleanser","Jelly Cleanser","Balm Cleanser","Water Cleanser","Eye Cream","Eye Gel","Eye Serum","Eye Mask","Eye Patch","Firming Eye Cream","Brightening Eye Cream","Anti-Puffiness Eye Cream","Dark Circle Eye Cream","Hydrating Eye Cream","Retinol Eye Cream","Peptide Eye Cream","Caffeine Eye Cream","Vitamin C Eye Cream","Collagen Eye Cream","SPF50 Sunscreen","SPF30 Sunscreen","SPF40 Sunscreen","SPF45 Sunscreen","SPF60 Sunscreen","Invisible Sunscreen","White Cast Sunscreen","Tinted Sunscreen","Cushion Sunscreen","Mist Sunscreen","Gel Sunscreen","Cream Sunscreen","Stick Sunscreen","Powder Sunscreen","Water Sunscreen","First Essence","Treatment Essence","Emulsion","Mist Essence","Sleeping Essence","Ferment Essence","Rice Essence","Yeast Essence","Bifida Essence","Galactomyces Essence","Intensive Ampoule","Hydrating Ampoule","Brightening Ampoule","Anti-Aging Ampoule","Troubleshooting Ampoule","Spot Correcting Ampoule","Pore Ampoule","Acne Ampoule","Scar Ampoule","Wrinkle Ampoule","Moisture Sheet Mask","Vitality Sheet Mask","Repair Sheet Mask","Glow Sheet Mask","Calm Sheet Mask","Firm Sheet Mask","Brighten Sheet Mask","Lift Sheet Mask","Nourish Sheet Mask","Pure Sheet Mask","Lip Balm","Lip Mask","Lip Serum","Lip Cream","Lip Tint","Lip Oil","Lip Scrub","Lip Plumper","Lip Base","Lip Primer","Hair Serum","Hair Mask","Hair Essence","Hair Spray","Hair Tonic","Scalp Serum","Scalp Mask","Scalp Toner","Scalp Scrub","Hair Oil","Body Lotion","Body Cream","Body Butter","Body Oil","Body Mist","Body Scrub","Body Serum","Hand Cream","Foot Cream","Neck Cream","Hand Mask","Foot Mask","Body Firming Gel","Stretch Mark Cream","Cellulite Cream","Whipping Cream Mask","Jelly Pack","Sleeping Mask","Wash Off Pack","Peeling Gel","AHA BHA Toner","PHA Toner","BHA Liquid","AHA Serum","BHA Serum","Tranexamic Acid","Alpha Arbutin","Azelaic Acid","Bakuchiol","Madecassoside","Asiaticoside","Panthenol Cream","Allantoin Gel","Squalane Oil","Rosehip Oil","Jojoba Oil","Licorice Root","Mulberry Extract","Kojic Acid","Hydroquinone Cream","Arbutin Serum","Glycerin Toner","Butylene Glycol","Propylene Glycol","Betaine","Trehalose","Sorbitol","Urea Cream","Beta Glucan","Chitin","Chitosan","Collagen Drink","Vitamin Drink","Supplement Capsule","Fiber Supplement","Probiotic Drink","Enzyme Drink","Chlorophyll Drink","Detox Tea","Facial Roller","Gua Sha Tool","Jade Roller","Face Massage Tool","Derma Roller","Face Brush","Silicone Brush","Cleansing Device","Face Steamer","LED Mask","Eye Mask Patch","Lip Patch","Nose Strip","Cotton Pad","Cotton Swab","Makeup Remover","Tissue Paper","Face Towel","Hair Towel","Bath Towel"];

const brands = ["Cosrx","Innisfree","Etude House","Laneige","Sulwhasoo","Holika","Dear Klairs","Missha","Tony Mory","Nature Republic","The Face Shop","Dr.Jart+","A'PIEU","Benton","Beauty of Joseon","iUNIK","Purito","Pyunkang Yul","Klavuu","ROMAND","Clio","Peripera","Lilybyred","3CE","Mamonde","Primera","Hanyul","O HUI","Whoo","IOPE","HERA","SU:M37","Ohui","SK-II","Shiseido","Kose","Biore","Mentholatum","Hada Labo","Kikumasamune","Melano CC","Skin Aqua","CeraVe","Paula's Choice","The Ordinary","Drunk Elephant","Sunday Riley","Tatcha","Amorepacific","LG","Aju","Coreana","Hanskin","Goodal","Jung Saem Mool","Moonshot","Clio","Peripera","Liphop","BBIA","Espoir","The Saem","3CE","MAC","Bobbi Brown","Yves Saint Laurent","Guerlain","Chanel","Dior","Estee Lauder","La Mer","SK-II","Shiseido","Sulwhasoo","Whoo","HERA","IOPE","Laneige","Innisfree","Etude House","Tony Mory","Nature Republic","The Face Shop","Missha","Holika","Skin Food","Banila Co","Dr.Jart+","Belif","Primera","Su:m37","Ohui","WHOO","Hanyul","Aju","Coreana","Logona","Burt's Bees","The Body Shop","Lush","Kiehl's","Caudalie","Bioderma","Vichy","La Roche-Posay","Avene","Nivea","Neutrogena","Olay","Pantene","Head & Shoulders","L'Oreal","Maybelline","Revlon","CoverGirl","NYX","Urban Decay","Anastasia","Too Faced","Tart","Glossier","Fenty","Rare Beauty","Charlotte Tilbury","Pat McGrath","Huda Beauty","Morphe","Jacklyn","BECCA","Milk","Kosas","Ilia","RMS","Lawless","Drunk Elephant","Tatcha","Peet Rivko","Coco & Eve","Solaworks","Beauty Stat","Geologie","Proactiv","Murad","Rodan + Fields","Dermalogica","Decleor","Eve Lom","Emma Hardie","Pai","Burt's Bees","Pacifica","Alba Botanica","Yes to","Nourish","Aveeno","CeraVe","Amazel","Yves整改","KORA","Goop","Baxter","Anthony","Jack Black","Lab Series","Clarisonic","Foreo","NuFace","Silk'n","Tria","Smoothskin","Braun","Philips","Panasonic","Remington","Dyson","Shark","Droplette","ziip","Currentbody","Beauty Pie","Glossybox","Allure","Birchbox","Ipsy","Boxycharm","FabFitFun","Causebox","Ritual","Covey","Skincycle","Crown Beauty","Beauty Heroes","The Detox Market","Credo","Space NK","Sephora","Ulta","Nordstrom","Selfridges","Harrods","Le Bon Marche","Saks","Neiman Marcus","Bloomingdale's","Macy's","Target","Walmart","Amazon","QVC","HSN","Ulta","Sephora","Colourpop","e.l.f.","NYX","Wet n Wild","Juvia's","J. Girl","BH Cosmetics","Coastal Scents","Morphe","Ace","Colour Crush","L'Oreal","Maybelline","Garnier","Nivea","CeraVe","Olay","Neutrogena","Aveeno","Crest","Colgate","Listerine","Crest","Sonicare","Oral-B","Waterpik","Philips","Dyson","Shark","Dyson","Bam","Tineco","Lefant","Ecovacs","iRobot","Roborok","Neato","Eufy","360","Ecovacs","Proscenic","ILIFE","Amic","Oneconcept","Coredy","Eufy","iLife","Lefant","Yeedi","360","Roborock","Ecovacs","Neato","iRobot","Dyson","Shark","Bissell","Hoover","Dirt Devil","Bissell","Kenmore","Eureka","Miele","LG","Samsung","Electrolux","Cuisinart","KitchenAid","Ninja","Instant Pot","Vitamix","Oster","Hamilton","Breville","Cuisinart","Nespresso","Keurig","Dolce","Bialetti","Aerolatte","Staresso","Wacaco","Nanopresso","Handpresso","Kees","Smith","Primula","Coplay","Grosfillex","Home","Garden","Patio","Outdoor","Furniture","Lawn","Garden","Grill","BBQ","Fire","Pit","Smoker","Weber","Char-Broil","Napoleon","Broil","King","Traeger","Green","Egg","Pit","Boss","Louisiana","Camp","Chef","Master","Gravity","Masterbuilt","Dyna","Glo","Chimney","Starter","Thermometer","Meat","Probe","Wireless","Digital","Instant","Read","Taylor","ThermoWorks","Maverick","Orion","Hot","Cold","Ice","Maker","Machine","Cube","Crushed","Nugget","Sonic","Opal","First","Choice","Scotsman","Manitowoc","Hoshizaki","Kold","Draft","Beverage","Wine","Cooler","Beer","Dispenser","Soda","Sparkling","Water","Maker","CO2","Tank","SodaStream","iSi","Whip","Siphon","Nitrous","Cream","Charger","Cartridge","Co2","N2O","Gas","Cylinder","Refill","Adapter","Faucet","Tap","Spigot","Faucet","Faucet"];

const images = [
    "https://images.pexels.com/photos/3764645/pexels-photo-3764645.jpeg",
    "https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg",
    "https://images.pexels.com/photos/3785706/pexels-photo-3785706.jpeg",
    "https://images.pexels.com/photos/39351/cosmetics-cosmetology-face-cream-macro-39351.jpeg",
    "https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg"
];

// Generate additional products
let id = 201;
for (let i = 0; i < 850; i++) {
    const nameIndex = i % productNames.length;
    const brandIndex = i % brands.length;
    const imageIndex = i % images.length;
    const price = 8 + (i % 50);
    products.push({
        id: id++,
        name: productNames[nameIndex],
        price: price,
        image: images[imageIndex],
        brand: brands[brandIndex]
    });
}

// Pagination state
let currentPage = 1;
const productsPerPage = 24;

// Cart State
let cart = JSON.parse(localStorage.getItem('kbeautyseol_cart')) || [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const modalClose = document.getElementById('modalClose');
const checkoutForm = document.getElementById('checkoutForm');
const confirmationModal = document.getElementById('confirmationModal');
const closeConfirmation = document.getElementById('closeConfirmation');
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');
const orderItems = document.getElementById('orderItems');
const orderTotalEl = document.getElementById('orderTotal');

// ========================================
// Initialization
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCart();
    initEventListeners();
    
    // Hide loader quickly
    setTimeout(() => {
        const loader = document.querySelector('.loader');
        if (loader) loader.style.display = 'none';
    }, 500);
});

// ========================================
// Render Products
// ========================================

function renderProducts() {
    if (!productsGrid) return;
    
    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    const pageProducts = products.slice(start, end);
    
    productsGrid.innerHTML = pageProducts.map((product) => `
        <div class="product-card glass-card" data-id="${product.id}">
            <div class="product-image">
                <div class="product-glow"></div>
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price}</p>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    <i class="fas fa-plus"></i>
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
    
    // Add pagination
    renderPagination();
}

function renderPagination() {
    const totalPages = Math.ceil(products.length / productsPerPage);
    let paginationContainer = document.getElementById('paginationContainer');
    
    if (!paginationContainer) {
        paginationContainer = document.createElement('div');
        paginationContainer.id = 'paginationContainer';
        paginationContainer.className = 'pagination-container';
        productsGrid.parentElement.appendChild(paginationContainer);
    }
    
    let paginationHTML = '';
    
    paginationHTML += `<button class="page-btn" onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
        <i class="fas fa-chevron-left"></i>
    </button>`;
    
    for (let i = 1; i <= Math.min(totalPages, 10); i++) {
        paginationHTML += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
    }
    
    if (totalPages > 10) {
        paginationHTML += `<span class="page-ellipsis">...</span>`;
        paginationHTML += `<button class="page-btn" onclick="changePage(${totalPages})">${totalPages}</button>`;
    }
    
    paginationHTML += `<button class="page-btn" onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
        <i class="fas fa-chevron-right"></i>
    </button>`;
    
    paginationContainer.innerHTML = paginationHTML;
}

function changePage(page) {
    const totalPages = Math.ceil(products.length / productsPerPage);
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    renderProducts();
    
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// ========================================
// Cart Functions
// ========================================

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        if (existingItem.quantity < 10) existingItem.quantity++;
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 });
    }
    
    saveCart();
    updateCart();
    
    const btn = event.target.closest('.add-to-cart-btn');
    if (btn) {
        btn.classList.add('added');
        btn.innerHTML = '<i class="fas fa-check"></i> Added';
    }
    
    if (cartBtn) {
        cartBtn.classList.add('bounce');
        setTimeout(() => cartBtn.classList.remove('bounce'), 500);
    }
    
    setTimeout(() => {
        if (btn) {
            btn.classList.remove('added');
            btn.innerHTML = '<i class="fas fa-plus"></i> Add to Cart';
        }
    }, 1500);
    
    openCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCart();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, Math.min(10, item.quantity + change));
    }
    saveCart();
    updateCart();
}

function saveCart() {
    try { localStorage.setItem('kbeautyseol_cart', JSON.stringify(cart)); } catch(e) {}
}

function updateCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) cartCount.textContent = totalItems;
    
    if (!cartItems) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `<div class="cart-empty"><i class="fas fa-shopping-basket"></i><p>Your cart is empty</p></div>`;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image"><img src="${item.image}" alt="${item.name}"></div>
                <div class="cart-item-details">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <p class="cart-item-price">$${item.price} × ${item.quantity} = $${item.price * item.quantity}</p>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)"><i class="fas fa-minus"></i></button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)"><i class="fas fa-plus"></i></button>
                        <button class="cart-item-remove" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartTotal) cartTotal.textContent = `$${total}`;
    if (orderTotalEl) orderTotalEl.textContent = `$${total}`;
    updateOrderSummary();
}

function updateOrderSummary() {
    if (!orderItems) return;
    if (cart.length === 0) {
        orderItems.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">No items</p>';
    } else {
        orderItems.innerHTML = cart.map(item => `<div class="order-item"><span>${item.name} × ${item.quantity}</span><span>$${item.price * item.quantity}</span></div>`).join('');
    }
}

function openCart() {
    if (!cartSidebar || !cartOverlay) return;
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    if (!cartSidebar || !cartOverlay) return;
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function openCheckoutModal() {
    if (cart.length === 0) { alert('Your cart is empty!'); return; }
    updateOrderSummary();
    if (!checkoutModal) return;
    checkoutModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
    if (!checkoutModal) return;
    checkoutModal.classList.remove('active');
    document.body.style.overflow = '';
}

function openConfirmationModal() {
    if (!checkoutModal || !confirmationModal) return;
    checkoutModal.classList.remove('active');
    confirmationModal.classList.add('active');
}

function closeConfirmationModal() {
    if (!confirmationModal) return;
    confirmationModal.classList.remove('active');
    document.body.style.overflow = '';
    cart = [];
    saveCart();
    updateCart();
    closeCart();
}

if (checkoutForm) {
    checkoutForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            customerName: document.getElementById('customerName').value,
            country: document.getElementById('country').value,
            telegramUsername: document.getElementById('telegramUsername').value
        };
        
        const submitBtn = checkoutForm.querySelector('.submit-btn');
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        submitBtn.disabled = true;
        
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const orderDetails = cart.map(item => `Product: ${item.name} x${item.quantity}`).join('\n');
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const message = `New Order - KBeautySeol\n${orderDetails}\nTotal: $${total}\nCustomer Name: ${formData.customerName}\nCountry: ${formData.country}\nTelegram Username: @${formData.telegramUsername}`;
        
        console.log('===== NEW ORDER =====');
        console.log(message);
        console.log('=====================');
        
        submitBtn.innerHTML = '<i class="fab fa-telegram-plane"></i> Place Order';
        submitBtn.disabled = false;
        
        openConfirmationModal();
        checkoutForm.reset();
    });
}

function initEventListeners() {
    if (cartBtn) cartBtn.addEventListener('click', openCart);
    if (cartClose) cartClose.addEventListener('click', closeCart);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
    if (checkoutBtn) checkoutBtn.addEventListener('click', openCheckoutModal);
    if (modalClose) modalClose.addEventListener('click', closeCheckoutModal);
    if (checkoutModal) checkoutModal.addEventListener('click', (e) => { if (e.target === checkoutModal) closeCheckoutModal(); });
    if (closeConfirmation) closeConfirmation.addEventListener('click', closeConfirmationModal);
    if (confirmationModal) confirmationModal.addEventListener('click', (e) => { if (e.target === confirmationModal) closeConfirmationModal(); });
    
    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', () => { mobileMenu.classList.add('active'); document.body.style.overflow = 'hidden'; });
    if (mobileClose) mobileClose.addEventListener('click', () => { mobileMenu.classList.remove('active'); document.body.style.overflow = ''; });
    document.querySelectorAll('.mobile-nav-link').forEach(link => link.addEventListener('click', () => { mobileMenu.classList.remove('active'); document.body.style.overflow = ''; }));
    
    window.addEventListener('scroll', () => { if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50); });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    }));
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') { closeCheckoutModal(); closeConfirmationModal(); closeCart(); if (mobileMenu) mobileMenu.classList.remove('active'); }
    });
}

// GSAP-like simple animations without external library
function initAnimations() {
    // Simple fade in for hero elements
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-buttons');
    heroElements.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 300 + (i * 150));
    });
}

// Make functions globally available
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.changePage = changePage;

