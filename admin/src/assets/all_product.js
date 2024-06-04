import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

let all_product = [
  {
    id: 1,
    name: "Jordan Women's Knit Cropped Top",
    category: "women",
    is_discount: true,
    image: p1_img,
    type: "clothing",
    new_price:'$50.00',
    old_price:'$78.00',
    description: "This relaxed top oozes Jordan DNA with its subtle diamond detailing and tried-and-true Jumpman branding. Made from a soft cotton blend, it makes a comfortable style statement without saying a word. The cropped hem is designed to hit above the waist and features a drawcord with side ties for a distinct look you can personalize.",
    color: "Jade Smoke/Seafoam",
  },
  {
    id: 2,
    name: "Jordan Women's Diamond Short-Sleeve Top",
    category: "women",
    is_discount: true,
    image: p2_img,
    type: "clothing",
    new_price:'$30.00',
    old_price:'$42.00',
    description: "Full length, loose fit: This sporty tee is made to move with you. Diamond power mesh on the back not only looks cool, but literally helps you cool down, and the design lines add a hint of Jordan heritage.",
    color: "Night Maroon",

  },
  {
    id: 3,
    name: "Jordan Women's Brooklyn Fleece Pants",
    category: "women",
    is_discount: true,
    image: p3_img,
    type: "clothing",
    new_price:'$60.00',
    old_price:'$80.00',
    description: "Jordan style, top to bottom. These pants feature luxe, plush fleece for a cozy feel. A repeating print lets everyone know whose team you're on.",
    color: "Black/Red/Gold",
  },
  {
    id: 4,
    name: "Jordan Women's Varsity Jacket",
    category: "women",
    is_discount: false,
    image: p22_img,
    type: "clothing",
    new_price: "$109.00",
    description: "Taking inspiration from vintage coaches' jackets, this roomy layer nods to an era when striped tube socks and terry cloth sweatbands reigned supreme. Made from durable woven cotton, it features an elastic hem with ribbed collar and cuffs. Embroidered legacy-inspired graphics help graduate your look to the next level.",
    color: "Sail/Black",
  },
  {
    id: 5,
    name: "Jordan Women's Brooklyn Fleece Hoodie",
    category: "women",
    is_discount: true,
    image: p23_img,
    type: "clothing",
    new_price: "$79.00",
    old_price: "$110.00",
    description: "Take soft mid-weight fleece, add a relaxed fit, and multiply that by the embroidered Jumpman on the chest. We'll do the math—it's your new favorite hoodie. Drop shoulder seams create visual distinction and give you more room to move, cementing this cozy layer as the perfect solution for any 'fit.",
    color: "Dune Red",
  },
  {
    id: 6,
    name: "Jordan Women's Brooklyn Fleece Pants",
    category: "women",
    is_discount: true,
    image: p24_img,
    type: "clothing",
    new_price: "$60.00",
    old_price: "$80.00",
    description: "Rep MJ's rookie year on premium midweight fleece. With a slightly faded graphic and a classic silhouette, these vintage-inspired sweats look straight out of '84.",
    color: "Black/Sail",
  },
  {
    id: 7,
    name: "Air Jordan 3 Retro",
    category: "women",
    is_discount: false,
    image: p16_img,
    type: "shoe",
    new_price: "$210.00",
    description: "Set the gold standard with the Air Jordan 3. An all-time favorite, this fresh colorway adds to the legacy. Of course, a hangtag certifies your place on the team—and the elephant print detailing delivers a classic finish.",
    color: "White/Sail/Cement Grey/Cosmic Clay",
  },
  {
    id: 8,
    name: "Air Jordan 1 Retro High OG White and Gold",
    category: "women",
    is_discount: true,
    image: p17_img,
    type: "shoe",
    new_price: "$145.00",
    old_price: "$190.00",
    description: "Put some shine on your shoe game. This AJ1 elevates MJ's first signature model with glossy hits of gold against a clean leather backdrop. Premium materials, modern cushioning and a padded ankle collar refresh the iconic shoe that started it all. Retro Nike Air branding throws it back, and a golden keychain is included to immortalize the legacy.",
    color: "White/Gum Light Brown/Metallic Gold",
  },
  {
    id: 9,
    name: "Air Jordan XXXVIII Low",
    category: "women",
    is_discount: false,
    image: p18_img,
    type: "shoe",
    new_price: "$175.00",
    description: "Get grounded, stay grounded. The AJ XXXVIII is all about groundwork—we're talking about your running, your cutting, your turn-around jumpers—with low-to-the-court cushioning and a secure upper that helps support every move. It's also designed with sustainability in mind, with at least 20% recycled content by weight. So you can hit 'em with that windshield-wiper fake and feel good about more than just sinking a bucket for your team.",
    color: "Crimson Tint/Orange Pulse/Black",
  },
  {
    id: 10,
    name: "Jordan Jumpman MVP",
    category: "women",
    is_discount: true,
    image: p19_img,
    type: "shoe",
    new_price: "$130.00",
    old_price: "$165.00",
    description: "We didn't invent the remix—but considering the material we get to sample, this one's a no-brainer. We took elements from the AJ6, 7 and 8, making them into a completely new shoe that celebrates MJ's first 3-peat championship run. With leather, textile and nubuck details, these sneakers honor one legacy while encouraging you to cement your own.",
    color: "Off White/Gym Red/White/Black",
  },
  {
    id: 11,
    name: "Air Jordan 11 CMFT Low",
    category: "women",
    is_discount: false,
    image: p20_img,
    type: "shoe",
    new_price: "$140.00",
    description: "Inspired by classic Jordan sneakers, these low-tops up your comfort with an extra-soft leather toe. Underfoot is soft, smooth foam with rubber pods in just the right spots for traction while webbing loops make lacing quick and easy.",
    color: "White/Black/Blue Tint/University Red",
  },
  {
    id: 12,
    name: "Jordan Jumpman Two Trey Gold/White",
    category: "women",
    is_discount: true,
    image: p21_img,
    type: "shoe",
    new_price: "$125.00",
    old_price: "$175.00",
    description: "Ride high in kicks created to honor MJ's time in Chicago. Genuine leather and classic Air cushioning combine for a premium look and feel. Who are you reppin'? Two Trey, baby.",
    color: "White/Metallic Gold/Ice Blue/Black",
  },
  {
    id: 13,
    name: "Jordan Flight MVP Men's Fleece Hoodie",
    category: "men",
    is_discount: true,
    image: p4_img,
    type: "clothing",
    new_price: "$70.00",
    old_price: "$110.00",
    description: "Get you a hoodie that can do it all. Made from fleece that's smooth on the outside and plush on the inside, this relaxed sweatshirt pays homage to that other sport MJ played.",
    color: "Black",
  },
  {
    id: 14,
    name: "Jordan Essentials Men's Fleece Hoodie",
    category: "men",
    is_discount: true,
    image: p5_img,
    type: "clothing",
    new_price: "$72.00",
    old_price: "$115.00",
    description: "Meet your new go-to hoodie. Heavyweight fleece feels super-soft, and the comfy, relaxed fit will have you reaching for it again and again. An oversized Jumpman label is sewn on front-and-centre, making this wardrobe staple anything but basic.",
    color: "Carbon Heather/Sail",
  },
  {
    id: 15,
    name: "Jordan Flight Essentials Men's T-shirt",
    category: "men",
    is_discount: false,
    image: p6_img,
    type: "clothing",
    new_price: "$55.00",
    description: "Designed with an intentionally oversized fit, this tee is ready for whatever the day brings. With a Jumpman woven patch on the chest, no one will question what you're about.",
    color: "Carbon Heather",
  },
  {
    id: 16,
    name: "Jordan Dri-Fit PSG Men's Football Shirt",
    category: "men",
    is_discount: false,
    image: p7_img,
    type: "clothing",
    new_price: "$105.00",
    description: "Icons collide with the 2023/24 PSG Third jersey. One of the most iconic clubs in the world meets one of the most recognizable patterns in streetwear—Jordan elephant print—to create a jersey that transcends the game. On the inside you'll find a hidden Paris logo with the Jumpman design included in the middle. Our Stadium collection pairs replica design details with sweat-wicking technology to give you a game-ready look inspired by Les Parisiens.",
    color: "Anthracite/Black/Stone",
  },
  {
    id: 17,
    name: "Jordan Essentials Men's Gilet",
    category: "men",
    is_discount: false,
    image: p8_img,
    type: "clothing",
    new_price: "$89.00",
    description: "No winter chill is gonna keep you down. Ready for layering, this gilet is lightweight, water-repellent and insulated so you stay cosy and dry through damp days.",
    color: "Sky J Light Olive/Sail",
  },
  {
    id: 18,
    name: "Jordan Jumpman Men's Diamond Shorts",
    category: "men",
    is_discount: true,
    image: p9_img,
    type: "clothing",
    new_price: "$55.00",
    old_price: "$79.00",
    description: "The Jordan Jumpman Diamond Shorts are inspired by a classic pro kit worn by Michael Jordan. Remade for easy, everyday wear, they're made from lightweight fabric with taped overlays and premium Jumpman graphics.",
    color: "Gym Red/Black/White/Gym",
  },
  {
    id: 19,
    name: "Air Jordan 4 Retro Military Blue",
    category: "men",
    is_discount: false,
    image: p10_img,
    type: "shoe",
    new_price: "$260.00",
    description: "Since its debut in '89, the AJ4 keeps finding new ways to reinvent itself. This time, it's all about the splashes of deep blue on the upper. But don't worry—the tried-and-true features remain, like premium materials and lightweight Nike Air cushioning.",
    color: "Off White/Neutral Grey/Military Blue",
  },
  {
    id: 20,
    name: "Air Jordan 11 Retro Low Black/Varsity Royal",
    category: "men",
    is_discount: false,
    image: p11_img,
    type: "shoe",
    new_price: "$150.00",
    description: "Walk the path of greatness in the Air Jordan 11 Retro. These eternally popular kicks bring you sleek style with premium leather and a classic design that keeps the look as desirable as ever.",
    color: "Black/White/Varsity Royal",
  },
  {
    id: 21,
    name: "Air Jordan 5 Retro SE",
    category: "men",
    is_discount: false,
    image: p12_img,
    type: "shoe",
    new_price: "$265.00",
    description: "There's a reason MJ's 5th shoe remains a fan favourite. Its fierce zig-zag midsole details, iconic lace locks and mesh-inspired shoe cage are instantly recognisable, giving you standout style you can rock any day of the week.",
    color: "Sail/Light Orewood",
  },
  {
    id: 22,
    name: "Air Jordan I High G",
    category: "men",
    is_discount: true,
    image: p13_img,
    type: "shoe",
    new_price: "$135.00",
    old_price: "$180.00",
    description: "Feel unbeatable, from the tee box to the final putt. Inspired by one of the most iconic sneakers of all time, the Air Jordan 1 G is an instant classic on the course. With Air cushioning underfoot, a Wings logo on the heel and an integrated traction pattern to help you power through your swing, it delivers all the clubhouse cool of the original AJ1—plus everything you need to play 18 holes in comfort.",
    color: "University Blue/White/Black",
  },
  {
    id: 23,
    name: "Air Jordan 3 Retro Green Glow",
    category: "men",
    is_discount: true,
    image: p14_img,
    type: "shoe",
    new_price: "$220.00",
    old_price: "$260.00",
    description: "Clean and supreme, the AJ3 returns with all of its classic style and grace. Quality leather in the upper—with that luxurious elephant print texture—combines with visible Nike Air in the sole to make a comfortable, everyday icon.",
    color: "Black/Wolf Grey/White/Green Glow",
  },
  {
    id: 24,
    name: "Air Jordan 1 Retro High OG",
    category: "men",
    is_discount: true,
    image: p15_img,
    type: "shoe",
    new_price: "$155.00",
    old_price: "$210.00",
    description: "The Air Jordan 1 Retro High remakes the classic sneaker, giving you a fresh look with a familiar feel. Premium materials with new colors and textures give modern expression to an all-time favorite.",
    color: "White/Team Red",
  },
  {
    id: 25,
    name: "Jordan PSG Dri-FIT Knit Pants",
    category: "kid",
    is_discount: false,
    image: p31_img,
    type: "clothing",
    new_price: "$87.00",
    description: "With design details specifically tailored for football's rising stars, a slim, streamlined fit ensures that nothing comes between you and the ball. Sweat-wicking technology helps keep you cool and composed while you fine-tune your skills.",
    color: "Black/Black/Stone",
  },
  {
    id: 26,
    name: "Jordan PSG Dri-FIT Football Jersey",
    category: "kid",
    is_discount: false,
    image: p32_img,
    type: "clothing",
    new_price: "$90.00",
    description: "Icons collide with the 2023/24 PSG Third Shirt. One of the most iconic clubs in the world meets one of the most recognisable patterns in streetwear—Jordan elephant print—to create a shirt that transcends the game. On the inside, you'll find a hidden Paris logo with the Jumpman design included in the middle. Our Stadium collection pairs replica design details with sweat-wicking technology to give you a game-ready look inspired by Les Parisiens.",
    color: "Anthracite/Black/Stone",
  },
  {
    id: 27,
    name: "Jordan PSG Dri-Fit Football Shorts",
    category: "kid",
    is_discount: true,
    image: p35_img,
    type: "clothing",
    new_price: "$56.00",
    old_price: "$80.00",
    description: "Take your team pride to the pitch with these Paris Saint-Germain shorts. Our Stadium collection pairs replica design details with sweat-wicking technology to give you a game-ready look inspired by the Parisians.",
    color: "Black/Stone",
  },
  {
    id: 28,
    name: "Air Jordan Legacy 312 Low",
    category: "kid",
    is_discount: true,
    image: p25_img,
    type: "shoe",
    new_price: "$105.00",
    old_price: "$145.00",
    description: "The Air Jordan Legacy 312 celebrates MJ's legacy with this shout-out to Chicago's 312 area code.The design creates a modern mash-up of iconic Jordan elements.",
    color: "Black/Wolf Grey/Safety",
  },
  {
    id: 29,
    name: "Jordan 6 Rings",
    category: "kid",
    is_discount: true,
    image: p26_img,
    type: "shoe",
    new_price: "$115.00",
    old_price: "$155.00",
    description: "Celebrate the legendary career of His Airness with the Jordan 6 Rings. Incorporating key features of each shoe worn during the championship series, it has premium details and lightweight, low-profile Zoom Air cushioning that delivers a responsive feel underfoot.",
    color: "White/Team Red",
  },
  {
    id: 30,
    name: "Air Jordan 3 Retro",
    category: "kid",
    is_discount: false,
    image: p27_img,
    type: "shoe",
    new_price: "$159.00",
    description: "Bold colours and classic details give the AJ3 a fun, throwback look. It's modelled after Mike's game shoe from the '80s, so you'll be walking in the footsteps of a legend.",
    color: "White/Red Stardust/Sail/Anthracite",

  },
  {
    id: 31,
    name: "Jordan Spizike Low",
    category: "kid",
    is_discount: false,
    image: p28_img,
    type: "shoe",
    new_price: "$149.00",
    description: "The Spizike takes elements of five classic Jordans, combines them and gives you one iconic sneaker. It's an homage to Spike Lee formally introducing Hollywood and hoops in a culture moment. You get a great-looking pair of kicks with some history. What more can you ask for? Ya dig?",
    color: "White/Wolf",
  },
  {
    id: 32,
    name: "Jordan Jumpman MVP",
    category: "kid",
    is_discount: true,
    image: p29_img,
    type: "shoe",
    new_price: "$100.00",
    old_price: "$145.00",
    description: "We didn't invent the remix—but considering the material we get to sample, this one's a no-brainer. We took elements from the AJ6, 7 and 8, making them into a completely new shoe that celebrates MJ's first 3-peat championship run. With leather, textile and nubuck details, these sneakers honor one legacy while encouraging you to cement your own.",
    color: "Black/White/University Red",
  },
  {
    id: 33,
    name: "Air Jordan 1 High OG Yellow Ochre",
    category: "kid",
    is_discount: true,
    image: p30_img,
    type: "shoe",
    new_price: "$105.00",
    old_price: "$140.00",
    description: "Building on the legacy that goes back to 1985, the Jordan 1 Retro High OG “Yellow Ochre” arrives with its bold aesthetic. While retaining its iconic silhouette, this edition amps up the game with premium materials and updated colours, giving a fresh yet classic vibe to an enduring favorite.",
    color: "Yellow Ochre/Black/Sail",
  },
  {
    id: 34,
    name: "Air Jordan 1 Low Black/Purple",
    category: "kid",
    is_discount: false,
    image: p33_img,
    type: "shoe",
    new_price: "$100.00",
    description: "An iconic look that lasts. This AJ1 pairs the classic design of the original with premium materials that will keep you going all day.",
    color: "Purple Venom/White/Black",
  },
  {
    id: 35,
    name: "Air Jordan 1 Mid SE",
    category: "kid",
    is_discount: true,
    image: p34_img,
    type: "shoe",
    new_price: "$95.00",
    old_price: "$125.00",
    description: "Pick pink for the win! This pair pops to life with a bright mix of rosy hues. All your classic Jordan comforts are there too: Nike Air in the sole for a cushioned step and that rubber cupsole for everyday comfort.",
    color: "Pink Wash/White/Violet Frost",
  },
  {
    id: 36,
    name: "Air Jordan 1 Low SE",
    category: "kid",
    is_discount: true,
    image: p36_img,
    type: "shoe",
    new_price: "$85.00",
    old_price: "$105.00",
    description: "Adults may have a lot of rules, but they can also inspire some amazing swag. Take this AJ1 for example: the canvas upper is decked out in pastels and floral details, just like the wallpaper in MJ's mum's house. Who knew parents could be so cool?",
    color: "Platinum Violet/Anthracite/Red",
  },
];

export default all_product;
