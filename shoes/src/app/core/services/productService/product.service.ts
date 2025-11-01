import { inject, Injectable } from '@angular/core';
import { Product } from '../../models/products.model';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProductService  {
  private route=inject(ActivatedRoute);
  private toaster = inject(ToastrService)
  private products$:BehaviorSubject<Product[]>
  constructor() {
      const stored = this.getStoredProducts();

  if (!stored || stored.length === 0) {
    console.warn('No stored products found — using default product list');
    this.saveProducts(this.products);
    this.products$ = new BehaviorSubject<Product[]>(this.products);
  } else {
    this.products$ = new BehaviorSubject<Product[]>(stored);
  }
   }
  private productsKey = 'products';
products :Product[]=
[
  {
    "id": 1,
    "name": "Field & Co Loafer 134",
    "category": "men",
    "brand": "Field & Co",
    "price": 113.76,
    "image": "https://i.ibb.co/xSTpz2RJ/31-Gwr7-Jv-JDL-SY695.jpg",
    "description": "The Field & Co Loafer 134 by Field & Co is crafted for everyday use. It combines premium materials with thoughtful design to deliver lasting comfort and reliable support. Featuring breathable uppers, resilient midsoles, and a refined outsole pattern, these shoes balance style and function. Ideal for consumers seeking a versatile option that performs well across multiple settings while maintaining a polished look. Backed by quality construction and attention to detail, they are an excellent addition to any footwear collection.",
    "stock": 136,
    "rating": 4.1
  },
  {
    "id": 2,
    "name": "Harrington Runner 247",
    "category": "men",
    "brand": "Harrington",
    "price": 149.44,
    "image": "https://m.media-amazon.com/images/I/71WDGNNrTYL._SY625_.jpg",
    "description": "The Harrington Runner 247 by Harrington is crafted for high-performance daily wear with a clean, modern silhouette. Employing a breathable engineered mesh upper and a responsive foam midsole, it provides a cushioned ride without sacrificing stability. The outsole features multi-surface tread for reliable traction on city streets and light trails. With elegant finishing details and durable stitching, this model pairs well with casual and semi-formal looks while offering the comfort needed for long days on your feet.",
    "stock": 68,
    "rating": 3.9
  },
  {
    "id": 3,
    "name": "LunaStep Wedge 803",
    "category": "women",
    "brand": "LunaStep",
    "price": 96.77,
    "image": "https://i.ibb.co/60WrK5jQ/51-U-tt-Rj5-YL-SY695.jpg",
    "description": "The LunaStep Wedge 803 by LunaStep is designed for women who want elevated comfort with a refined look. The design pairs lightweight cushioning and a supportive arch to reduce fatigue during all-day wear. A soft microfiber lining prevents irritation, while the wedge sole provides subtle lift without compromising stability. Fashion-forward detailing and a versatile color palette make these wedges suitable for work, weekend brunch, or evening events. The durable construction ensures these become a reliable staple in a modern wardrobe.",
    "stock": 204,
    "rating": 4.8
  },
  {
    "id": 4,
    "name": "TinyTreads Velcro Trainer 233",
    "category": "kids",
    "brand": "TinyTreads",
    "price": 29.5,
    "image": "https://i.ibb.co/qLvLk4vz/71u-POA-KXNL-SY625.jpg",
    "description": "The TinyTreads Velcro Trainer 233 by TinyTreads is built for energetic kids who need dependable footwear for everyday play. Featuring an easy-to-use hook-and-loop closure system and a cushioned insole, this trainer offers quick on/off convenience and comfortable support. The flexible rubber outsole allows natural foot movement while providing durable traction on playground surfaces. Breathable linings and reinforced toe protection keep little feet comfortable and safe. Its cheerful colorways and kid-friendly design make it a favorite for school and weekend activities.",
    "stock": 88,
    "rating": 4.4
  },
  {
    "id": 5,
    "name": "ProRun Running Shoe 917",
    "category": "sports",
    "brand": "ProRun",
    "price": 128.3,
    "image": "https://i.ibb.co/MkVCTm5S/71mrj33-S1l-L-SY695.jpg",
    "description": "The ProRun Running Shoe 917 by ProRun is engineered for runners seeking responsive cushioning and forward momentum. A lightweight knit upper hugs the foot for secure fit while strategic ventilation zones improve airflow. A dual-density midsole balances energy return with stability, helping maintain form over long distances. The outsole uses a high-abrasion rubber compound to withstand heavy mileage. Whether training for a race or logging daily miles, this shoe provides consistent performance and a sleek silhouette that transitions well to casual wear.",
    "stock": 42,
    "rating": 4.6
  },
  {
    "id": 6,
    "name": "Veloria Pump 491",
    "category": "women",
    "brand": "Veloria",
    "price": 74.6,
    "image": "https://i.ibb.co/bRYTT1Hw/61m-TPx-Axhn-L-SX679.jpg",
    "description": "The Veloria Pump 491 by Veloria is a modern take on a classic pump, designed for comfort without compromising elegance. Soft lining and a lightly padded footbed make it suitable for extended wear, while the precisely cut toe box ensures a flattering fit. The outsole incorporates a modest heel with rubber grip for secure footing. These pumps are finished with subtle detailing and quality materials, so they pair effortlessly with office attire as well as evening outfits, offering a dependable go-to for refined dressing.",
    "stock": 157,
    "rating": 4.0
  },
  {
    "id": 7,
    "name": "PlayPace High-Top 502",
    "category": "kids",
    "brand": "PlayPace",
    "price": 34.75,
    "image": "https://i.ibb.co/Jj9Vmkxb/71r-BZ-2v3-NL-SY575.jpg",
    "description": "The PlayPace High-Top 502 by PlayPace is crafted to provide ankle support during active play while keeping a playful aesthetic children love. Durable canvas uppers and reinforced stitching help resist the wear-and-tear of everyday use. A cushioned collar and soft lining enhance comfort, and the flexible rubber outsole encourages natural motion with reliable grip. These high-tops are easy to clean and maintain, making them a practical choice for parents who want a long-lasting, stylish shoe for school and weekend adventures.",
    "stock": 130,
    "rating": 4.5
  },
  {
    "id": 8,
    "name": "Claire & Co Slingback 348",
    "category": "women",
    "brand": "Claire & Co",
    "price": 89.2,
    "image": "https://i.ibb.co/MytX2rbj/617x9tj-B30-L-SY695.jpg",
    "description": "The Claire & Co Slingback 348 by Claire & Co is designed for refined versatility, combining a soft leather upper with a supportive sole to create a comfortable yet elegant shoe. The slingback strap is adjustable for a secure fit, and the moderate heel height maintains wearability across long periods. Interior cushioning and a breathable lining improve comfort, while the exterior finish adds a touch of sophistication. Ideal for paired dresses or tailored trousers, this slingback strikes a balance between function and feminine style.",
    "stock": 63,
    "rating": 4.3
  },
  {
    "id": 9,
    "name": "VelocityX Trail Runner 112",
    "category": "sports",
    "brand": "VelocityX",
    "price": 142.9,
    "image": "https://i.ibb.co/r2y28JHY/71b-Wk-Vt-ZBBL-SY575.jpg",
    "description": "The VelocityX Trail Runner 112 by VelocityX is purpose-built for off-road training and trail adventures. It features an aggressive lug pattern on the outsole for confident traction across mud, gravel, and rock. The upper uses water-resistant materials with reinforced overlays to protect against debris, and the midsole adds stability for technical terrain. Shock-absorbing cushioning and a secure lacing system ensure a locked-in fit while preserving comfort on long treks. Rugged yet lightweight, these trail runners are ideal for outdoor enthusiasts seeking reliability.",
    "stock": 95,
    "rating": 4.7
  },
  {
    "id": 10,
    "name": "Evelyne Ankle Boot 690",
    "category": "women",
    "brand": "Evelyne",
    "price": 132.45,
    "image": "https://i.ibb.co/vCNCFMDY/m-wp-68974fd0b944917fbfcb432a.webp",
    "description": "The Evelyne Ankle Boot 690 by Evelyne blends contemporary design with sturdy construction for a seasonal favorite. Premium leather construction provides long-term durability while an inside zipper allows easy on-off access. The cushioned footbed and supportive sole make these boots comfortable for walking and commuting, and the refined silhouette works with slim jeans or dresses. Thoughtful finishing and weather-resistant treatments ensure they handle transitional weather with ease, making them a go-to option for consumers seeking a blend of style and utility.",
    "stock": 93,
    "rating": 4.2
  },
  {
    "id": 11,
    "name": "Maverick Classic 801",
    "category": "men",
    "brand": "Maverick",
    "price": 164.99,
    "image": "https://i.ibb.co/fgRznjR/51-Wj-RVldj-OL-SY575.jpg",
    "description": "The Maverick Classic 801 by Maverick is a refined dress shoe formed with attention to traditional craftsmanship. Using full-grain leather and a stitched welt construction, this shoe offers durability and the potential to be resoled for extended life. The contoured insole provides arch support while retaining a sleek profile suited to formal occasions. Polished detailing and a balanced heel height make it a reliable choice for professionals who prioritize both aesthetics and comfort in their daily wear.",
    "stock": 77,
    "rating": 4.5
  },
  {
    "id": 12,
    "name": "Aurabelle Ankle Boot 375",
    "category": "women",
    "brand": "Aurabelle",
    "price": 121.4,
    "image": "https://www.lloyd.com/im/content-raster-1920/25-236-00_side_1.jpg",
    "description": "The Aurabelle Ankle Boot 375 by Aurabelle offers a chic, versatile look with practical comfort features. The block heel provides steady support for extended wear, and the plush lining ensures all-day comfort. Premium faux-leather options replicate the feel of genuine leather while remaining budget-friendly. The outsole delivers dependable traction over varied surfaces, and the boot’s streamlined profile pairs well with both casual and dressier outfits. Built to be a reliable seasonal staple, these boots prioritize polished style and functionality.",
    "stock": 120,
    "rating": 4.1
  },
  {
    "id": 13,
    "name": "ChampionEdge Court Trainer 708",
    "category": "sports",
    "brand": "ChampionEdge",
    "price": 99.99,
    "image": "https://i.ibb.co/hJXM3FcK/51959s-Re-XAL-AC-SY695.jpg",
    "description": "The ChampionEdge Court Trainer 708 by ChampionEdge focuses on lateral stability and responsive cushioning for court sports such as tennis and badminton. Reinforced sidewalls and a supportive shank deliver controlled movements during quick direction changes. A durable gum rubber outsole enhances grip on indoor surfaces, and breathable uppers reduce heat buildup during intense rallies. These trainers offer a balanced combination of support and mobility, making them an excellent option for players wanting dependable performance on court.",
    "stock": 46,
    "rating": 4.4
  },
  {
    "id": 14,
    "name": "SproutSteps Slip-On 550",
    "category": "kids",
    "brand": "SproutSteps",
    "price": 26.2,
    "image": "https://i.ibb.co/bRDFsJBs/81-Mq5-Dlq-YPL-SY575.jpg",
    "description": "The SproutSteps Slip-On 550 by SproutSteps is a practical, comfortable shoe for active children. Elastic goring allows a snug but forgiving fit without laces, and a cushioned footbed adds comfort during long school days. The lightweight, flexible sole encourages natural foot development while offering traction for playground surfaces. Reinforced toe caps increase durability in high-wear areas, and fun colorways make them appealing to kids. Easy to clean and maintain, these slip-ons are a pragmatic and stylish everyday option.",
    "stock": 213,
    "rating": 4.6
  },
  {
    "id": 15,
    "name": "Stonecrest Chelsea 402",
    "category": "men",
    "brand": "Stonecrest",
    "price": 129.0,
    "image": "https://i.ibb.co/zH2j2118/Lg3a7qw5-Z9a-I-WS-MS-117-GREY-1.jpg",
    "description": "The Stonecrest Chelsea 402 by Stonecrest merges classic Chelsea styling with contemporary comfort updates. Elastic side panels ensure easy entry while delivering a clean, streamlined look. The footbed includes moderate cushioning for daily wear, and the outsole is designed to be durable for both city streets and light office use. High-quality finishing and subtle stitching details contribute to an upscale appearance. These boots are a strong choice for individuals who appreciate heritage silhouettes updated for modern lifestyles.",
    "stock": 54,
    "rating": 4.0
  },
  {
    "id": 16,
    "name": "HappyFeet Slip-On 776",
    "category": "kids",
    "brand": "HappyFeet",
    "price": 21.0,
    "image": "https://i.ibb.co/3mHn40p8/original-imahfevtftq7hfjy.jpg",
    "description": "The HappyFeet Slip-On 776 by HappyFeet offers a fuss-free fit with comfortable padding and a flexible sole. Easy to put on and take off, these shoes are ideal for young children gaining independence with footwear. The upper is breathable to help regulate temperature during active play, and the outsole material provides traction for running and climbing. Durable construction and reinforced stitching support frequent wear, while the cheerful designs make these a favorite for daily activities and casual outings.",
    "stock": 188,
    "rating": 4.2
  },
  {
    "id": 17,
    "name": "NobleWalk Derby 591",
    "category": "men",
    "brand": "NobleWalk",
    "price": 149.75,
    "image": "https://i.ibb.co/JwHVSYJS/61-GWq-HKCOOL-SY575.jpg",
    "description": "The NobleWalk Derby 591 by NobleWalk offers refined dress styling with practical comfort features for long business days. The shoe is built using soft calf leather and includes a padded collar for added comfort. A supportive insole and slight cushioning in the heel reduce impact when walking between meetings. The classic derby lacing system ensures a tailored fit suitable for broader foot shapes. These shoes balance formal design with modern comfort tech to serve as a dependable go-to for professional wardrobes.",
    "stock": 96,
    "rating": 4.3
  },
  {
    "id": 18,
    "name": "UrbanStride Classic 333",
    "category": "men",
    "brand": "UrbanStride",
    "price": 85.2,
    "image": "https://i.ibb.co/RGcSCDst/pair-of-new-sneakers-isolated-on-white-background-2023-11-27-04-50-03-utc-scaled-600x456.jpg",
    "description": "The UrbanStride Classic 333 by UrbanStride is a versatile sneaker that merges minimalist design with daily comfort. The breathable knit upper adapts to foot shape while the compression-molded midsole provides consistent cushioning throughout the day. An abrasion-resistant rubber outsole extends life, and simple accents keep the design clean and contemporary. This sneaker is ideal for casual office environments, commuting, and weekend wear—offering a polished yet relaxed approach to everyday footwear.",
    "stock": 140,
    "rating": 4.1
  },
  {
    "id": 19,
    "name": "Seraphine Ballet 267",
    "category": "women",
    "brand": "Seraphine",
    "price": 59.95,
    "image": "https://i.ibb.co/fdhLFd1J/312-Yls-Lbeo-L.jpg",
    "description": "The Seraphine Ballet 267 by Seraphine is crafted to be a comfortable, go-anywhere flat with an elegant profile. A lightly padded insole and soft lining provide all-day comfort while maintaining a delicate silhouette. The outsole is designed for flexibility and everyday traction, and subtle details such as a low-profile bow or metallic trim add a refined touch. These ballet flats are suitable for both office and social settings, offering a reliable blend of comfort and understated style.",
    "stock": 178,
    "rating": 4.0
  },
  {
    "id": 20,
    "name": "AeroFit Cross-Trainer 420",
    "category": "sports",
    "brand": "AeroFit",
    "price": 109.5,
    "image": "https://i.ibb.co/FChc6qV/616-Lnx-AZSL-SY695.jpg",
    "description": "The AeroFit Cross-Trainer 420 by AeroFit is engineered to handle a variety of training modalities, from HIIT to weightlifting. Its stable midsole and reinforced heel counter provide a secure base for lifts, while the flexible forefoot accommodates sprints and agility drills. Breathable upper panels and a secure lacing system keep feet comfortable during intense sessions. Durable outsole materials offer grip in gym settings and outdoors for varied routines. A reliable option for cross-training enthusiasts who need a versatile, well-built trainer.",
    "stock": 51,
    "rating": 4.6
  },
  {
    "id": 21,
    "name": "Claire & Co Loafer 298",
    "category": "women",
    "brand": "Claire & Co",
    "price": 82.3,
    "image": "https://i.ibb.co/fVZB7Yb1/61gg-I3xfu-BL-AC-SY575.jpg",
    "description": "The Claire & Co Loafer 298 by Claire & Co combines polish and comfort in a smart loafer style. The shoe includes a lightly padded footbed and flexible sole for ease of movement, while refined stitching and a modest heel add professional flair. The leather-like upper and subtle hardware detailing make it appropriate for business casual attire. Durable construction ensures consistent wear, and the understated look pairs well with trousers, skirts, and dresses for a versatile wardrobe staple.",
    "stock": 149,
    "rating": 4.4
  },
  {
    "id": 22,
    "name": "MiniStride School Shoe 444",
    "category": "kids",
    "brand": "MiniStride",
    "price": 31.95,
    "image": "https://i.ibb.co/tT4SrTRT/d-444-black-school-shoe-1000x1000.jpg",
    "description": "The MiniStride School Shoe 444 by MiniStride is designed to meet the demands of daily school activities with comfort and durability. A supportive insole and reinforced heel counter provide stability for long days, while the robust outsole delivers steady traction. Easy-to-clean materials and strong construction reduce the need for frequent replacements, and reinforced toe boxes withstand play. The shoe’s classic design meets uniform requirements while providing children with the comfort and protection they need for active school routines.",
    "stock": 162,
    "rating": 4.2
  },
  {
    "id": 23,
    "name": "Harrington Casual 119",
    "category": "men",
    "brand": "Harrington",
    "price": 69.5,
    "image": "https://i.ibb.co/sJWNyGxW/810m-Irwk-JCL-SX575.jpg",
    "description": "The Harrington Casual 119 by Harrington is a relaxed everyday sneaker that focuses on comfort and clean aesthetics. A low-profile silhouette works well with jeans or chinos, while soft linings and a cushioned footbed help reduce fatigue during casual outings. The outsole provides dependable grip for urban environments, and breathable materials keep feet comfortable during warmer months. Subtle branding and a neutral color scheme make it an easy pairing for a wide range of wardrobes looking for effortless style.",
    "stock": 200,
    "rating": 4.1
  },
  {
    "id": 24,
    "name": "Veloria Pump 881",
    "category": "women",
    "brand": "Veloria",
    "price": 95.5,
    "image": "https://i.ibb.co/hxgsksrX/ghjfgj.png",
    "description": "The Veloria Pump 881 by Veloria is tailored for professional wardrobes that demand both comfort and elegance. A supportive inner sole and mid-height heel are engineered to provide balance and reduce strain during long wear. The upper is treated to resist scuffs and maintain a polished look, while the lining is soft to minimize rubbing. Subtle design elements and a classic shape make these pumps a dependable choice for meetings, events, and formal occasions where a poised appearance matters.",
    "stock": 112,
    "rating": 4.2
  },
  {
    "id": 25,
    "name": "ProRun Sprint Spike 309",
    "category": "sports",
    "brand": "ProRun",
    "price": 169.99,
    "image": "https://i.ibb.co/rR30hjw7/61-Qeb7fd-ZHL-SX569.jpg",
    "description": "The ProRun Sprint Spike 309 by ProRun is crafted for sprinters and track athletes seeking maximum traction and efficient energy transfer. A stiff, responsive plate in the sole enhances propulsion out of the blocks while strategically placed spikes deliver exceptional grip on track surfaces. The lightweight upper combines structure with breathability to maintain a secure fit during explosive efforts. Designed for short-distance speed work and competition, these spikes are built to deliver race-day performance for competitive runners.",
    "stock": 18,
    "rating": 4.9
  },
  {
    "id": 26,
    "name": "Maverick Derby 258",
    "category": "men",
    "brand": "Maverick",
    "price": 159.25,
    "image": "https://i.ibb.co/27Q2JCDP/51yjeny3-W7-L-SX575.jpg",
    "description": "The Maverick Derby 258 by Maverick blends elegant styling with supportive features for professional settings. The shoe is built on a comfortable last with moderate arch support and a cushioned midsole to ease long periods of standing. Premium leather uppers and a refined welt create an upscale appearance, and the outsole is designed for reliable traction in urban environments. These derbies work well across formal and business-casual looks while providing the comfort expected in a modern dress shoe.",
    "stock": 64,
    "rating": 4.3
  },
  {
    "id": 27,
    "name": "TinyTreads High-Top 222",
    "category": "kids",
    "brand": "TinyTreads",
    "price": 35.0,
    "image": "https://i.ibb.co/Cp7fhGfh/61go-Ar-YP7d-L-SX575.jpg",
    "description": "The TinyTreads High-Top 222 by TinyTreads offers extra ankle support for active youngsters and features a rugged outsole to withstand playground use. The easy-fit design includes cushioned linings for enhanced comfort and durable uppers that resist scuffs. Reinforced toe caps protect against early wear, and playful color combinations make these high-tops appealing to kids. Designed with both safety and fun in mind, they are ideal for daily school wear and weekend activity.",
    "stock": 142,
    "rating": 4.5
  },
  {
    "id": 28,
    "name": "Stonecrest Casual 487",
    "category": "men",
    "brand": "Stonecrest",
    "price": 78.45,
    "image": "https://i.ibb.co/hhtj3Zq/81-Dxq-K6-Re-LL-SY575.jpg",
    "description": "The Stonecrest Casual 487 by Stonecrest is an easygoing sneaker built for everyday comfort and understated style. A soft midsole cushions daily steps while the low-profile design complements a wide range of casual outfits. Breathable uppers keep feet comfortable during warmer weather, and a robust outsole ensures dependable traction over city surfaces. Reliable construction and simple styling make this sneaker an accessible go-to for those seeking fuss-free footwear that performs well under everyday use.",
    "stock": 193,
    "rating": 4.0
  },
  {
    "id": 29,
    "name": "LunaStep Loafer 155",
    "category": "women",
    "brand": "LunaStep",
    "price": 101.99,
    "image": "https://i.ibb.co/60WrK5jQ/51-U-tt-Rj5-YL-SY695.jpg",
    "description": "The LunaStep Loafer 155 by LunaStep delivers a contemporary approach to classic loafer design. The shoe includes a padded insole and a slightly elevated sole to improve comfort without sacrificing style. Durable construction and neat stitching provide a polished aesthetic suitable for office wear. Breathable inner linings help maintain foot comfort throughout the day. These loafers are versatile across wardrobe choices and provide a refined finish to business-casual ensembles.",
    "stock": 88,
    "rating": 4.2
  },
  {
    "id": 30,
    "name": "VelocityX Allrounder 603",
    "category": "sports",
    "brand": "VelocityX",
    "price": 129.99,
    "image": "https://i.ibb.co/FkVgrqBq/51-Ja-WRww-Qe-L-SY575.jpg",
    "description": "The VelocityX Allrounder 603 by VelocityX is designed for athletes needing a versatile training shoe that handles running, gym work, and cross-training. The midsole delivers balanced cushioning with responsive rebound while the outsole’s tread is configured for multi-surface traction. An engineered upper reduces weight while preserving support in key zones. Breathable panels and a supportive heel counter promote comfort and stability during multidirectional movement. A dependable, multi-use trainer for athletes with varying workout needs.",
    "stock": 79,
    "rating": 4.5
  },
  {
    "id": 31,
    "name": "Evelyne Wedge 223",
    "category": "women",
    "brand": "Evelyne",
    "price": 88.6,
    "image": "https://i.ibb.co/Sw8TVtH8/71yyjb-Bz18-L.jpg",
    "description": "The Evelyne Wedge 223 by Evelyne is a fashionable wedge designed to offer comfort and subtle height. A supportive midsole and padded footbed reduce strain on the foot while the wedge profile delivers stable elevation. Materials are selected for long-lasting wear and easy maintenance, and the aesthetic balances casual and dressy elements for multipurpose use. The shoe pairs well with skirts and wide-leg pants, making it a versatile option for transitional-season wardrobes.",
    "stock": 74,
    "rating": 4.1
  },
  {
    "id": 32,
    "name": "MiniStride Play Shoe 349",
    "category": "kids",
    "brand": "MiniStride",
    "price": 28.99,
    "image": "https://i.ibb.co/ZpdpvNMD/combo-349-navy-349-red-1197-red-8-play-rabbits-multicolor-original-imafvnfhzryrhdmh.jpg",
    "description": "The MiniStride Play Shoe 349 by MiniStride focuses on durability and comfort necessary for children’s active days. Cushioned insoles and breathable linings reduce irritation while flexible soles encourage natural movement. Reinforced stitching and a protective toe area extend the shoe’s lifespan despite heavy use. The slip-resistant outsole provides safety for running and climbing. Bright color options and character-friendly styling help these shoes appeal to kids while offering parents a practical, long-wearing option for daily activities.",
    "stock": 167,
    "rating": 4.3
  },
  {
    "id": 33,
    "name": "UrbanStride Sneaker 911",
    "category": "men",
    "brand": "UrbanStride",
    "price": 99.0,
    "image": "https://i.ibb.co/bRbpV6gx/51-Stqsn-XISL-SY695.jpg",
    "description": "The UrbanStride Sneaker 911 by UrbanStride is built for daytime comfort and modern looks. A responsive midsole provides an energetic feel while a breathable upper keeps feet comfortable. The outsole is engineered for traction on urban surfaces, and reinforced stitching increases durability for regular use. This sneaker balances performance and casual style, making it suitable for commuting, walking, and casual social outings. Durable materials and clean finishing details deliver a refined everyday sneaker option.",
    "stock": 121,
    "rating": 4.2
  },
  {
    "id": 34,
    "name": "Aurabelle Wedge 202",
    "category": "women",
    "brand": "Aurabelle",
    "price": 110.0,
    "image": "https://i.ibb.co/27qD73v9/5144k-TSqop-L-SY575.jpg",
    "description": "The Aurabelle Wedge 202 by Aurabelle combines refined styling with an emphasis on comfort. The wedge sole provides stable elevation and distributes pressure more evenly across the foot. Soft linings and a cushioned insole make these suitable for extended wear. Attractive materials and finishing touches give them a fashion-forward look that pairs well with dresses or tailored pants. Ideal for consumers who seek a polished appearance and reliable comfort at the same time.",
    "stock": 139,
    "rating": 4.4
  },
  {
    "id": 35,
    "name": "PlayPace Velcro Trainer 405",
    "category": "kids",
    "brand": "PlayPace",
    "price": 27.99,
    "image": "https://i.ibb.co/gM0h96Fk/SNEAKERS-WHT-VELCRO-1-1.jpg",
    "description": "The PlayPace Velcro Trainer 405 by PlayPace is designed with an adjustable closure for secure fit and quick adjustments. Soft, breathable materials keep little feet comfortable throughout active play, and the cushioned sole provides shock absorption for running and jumping. Durable construction stands up to frequent wear, and the outsole offers traction across many playground surfaces. Attractive accents and kid-friendly colorways make these trainers a practical and enjoyable everyday shoe for children.",
    "stock": 156,
    "rating": 4.5
  },
  {
    "id": 36,
    "name": "ChampionEdge Court Trainer 876",
    "category": "sports",
    "brand": "ChampionEdge",
    "price": 104.25,
    "image": "https://i.ibb.co/84X4Qz5Q/61-W3c-UAa9-GL-SY695.jpg",
    "description": "The ChampionEdge Court Trainer 876 by ChampionEdge is optimized for rapid lateral movements and sudden direction changes. Reinforced sidewalls and stable midsoles protect against rollover while maintaining agility. Breathable uppers help control heat, and the outsole compound is chosen for grip on indoor courts. Supportive heel structures and responsive cushioning make these trainers a dependable choice for racquet sports and court-based training sessions where stability and durability are essential.",
    "stock": 60,
    "rating": 4.3
  },
  {
    "id": 37,
    "name": "Harrington Oxford 430",
    "category": "men",
    "brand": "Harrington",
    "price": 139.99,
    "image": "https://i.ibb.co/k2qZcss6/41-OD3gosy0-L-SX342-SY445-QL70-FMwebp.webp",
    "description": "The Harrington Oxford 430 by Harrington brings traditional oxford styling into the modern professional wardrobe. The shoe includes a supportive footbed and subtle cushioning to promote comfort throughout the workday. High-quality materials and neat finishing allow for refined appearances in formal settings, and a versatile sole design gives solid traction on typical urban surfaces. Built for longevity and style, it’s a reliable choice for those who value classic design coupled with modern comfort technologies.",
    "stock": 101,
    "rating": 4.1
  },
  {
    "id": 38,
    "name": "Seraphine Slingback 696",
    "category": "women",
    "brand": "Seraphine",
    "price": 79.99,
    "image": "https://m.media-amazon.com/images/I/51SSJHzkL8L._SY695_.jpg",
    "description": "The Seraphine Slingback 696 by Seraphine is crafted to combine lightweight comfort with feminine detailing. A cushioned insole and gentle arch support make these slingbacks wearable for extended periods, while the adjustable strap secures the foot. Elegant finishes and a moderate heel height make them suitable for both everyday workwear and special occasions. Designed for those who appreciate delicate design elements and practical comfort, these shoes are a polished addition to any wardrobe.",
    "stock": 146,
    "rating": 4.0
  },
  {
    "id": 39,
    "name": "AeroFit Running Shoe 224",
    "category": "sports",
    "brand": "AeroFit",
    "price": 119.0,
    "image": "https://i.ibb.co/1JRt0McG/10-01284-stanfield-white-original-imag8pgzmfs9zaat.jpg",
    "description": "The AeroFit Running Shoe 224 by AeroFit focuses on a responsive ride and breathable comfort for long-distance training. The engineered knit upper secures the foot with targeted support zones, while the midsole uses foam designed to return energy efficiently. A durable outsole resists wear during higher-mileage runs. The shoe’s balanced stack height and anatomical fit help maintain efficient stride mechanics. Reliable and well-cushioned, it’s a solid option for runners working on endurance and regular mileage.",
    "stock": 58,
    "rating": 4.5
  },
  {
    "id": 40,
    "name": "HappyFeet Trainer 511",
    "category": "kids",
    "brand": "HappyFeet",
    "price": 24.5,
    "image": "https://m.media-amazon.com/images/I/71UwdvgWJFL._SY575_.jpg",
    "description": "The HappyFeet Trainer 511 by HappyFeet is a practical training shoe for children that offers comfort and durability. The shoe features a breathable lining to reduce heat buildup and a cushioned midsole to soften impact. A flexible outsole supports natural motion while providing durable grip. Reinforced areas at the toe and sides extend life for active play. The practical, easy-care materials and cheerful styling make these trainers a dependable daily option for school and play.",
    "stock": 200,
    "rating": 4.2
  },
  {
    "id": 41,
    "name": "AirFlex Runner",
    "category": "men",
    "brand": "AirFlex",
    "price": 180.0,
    "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSbnfMI4mzqvTc130dbnbLtx4jpcLuhyjIYOzEFtSERvkrtJhnstz2hKU31iTw1AjelYGr0VzmvpAKInIKOgmN95qjW5I3d_AUFb-krDSuv0HU7IqeXNFOeJw",
    "description": "The AirFlex Runner by AirFlex is a premium dress shoe crafted for formal settings. Full-grain leather and a supportive footbed provide comfort during long wear. The leather-lined interior minimizes friction while a well-constructed outsole ensures steady traction. Elegant stitching and a classic silhouette make it suitable for corporate environments and formal events. Those looking for a combination of traditional craftsmanship and modern comfort will find this Oxford a worthy addition to their wardrobe.",
    "stock": 37,
    "rating": 4.7
  },
  {
    "id": 42,
    "name": "Veloria Ankle Boot 504",
    "category": "women",
    "brand": "Veloria",
    "price": 99.0,
    "image": "https://i.ibb.co/35MM0jSN/DSC-7629.jpg",
    "description": "The Veloria Ankle Boot 504 by Veloria offers a refined look with practical comfort elements. A cushioned footbed and durable outsole provide support for daily activities, while the sleek upper design lends a fashionable edge. Side zipper access simplifies wear, and the boot’s construction is geared toward seasonal versatility. These boots are suitable for pairing with jeans or dresses for an elevated but wearable ensemble, making them a versatile addition to everyday wardrobes.",
    "stock": 129,
    "rating": 4.3
  },
  {
    "id": 43,
    "name": "ProRun Road Runner 331",
    "category": "sports",
    "brand": "ProRun",
    "price": 139.5,
    "image": "https://i.ibb.co/hxc88ngN/61-Lr-Nqh4v-HS-SX575.jpg",
    "description": "The ProRun Road Runner 331 by ProRun is engineered for steady road training with an emphasis on cushioning and durability. A responsive foam midsole reduces impact over long runs, and the upper’s supportive mesh keeps the foot secure while allowing airflow. The outsole blends wear-resistant rubber with a tread pattern optimized for road traction. These shoes are a dependable option for runners who log consistent miles and need a balanced shoe that supports recovery and training runs alike.",
    "stock": 84,
    "rating": 4.4
  },
  {
    "id": 44,
    "name": "Claire & Co Pump 121",
    "category": "women",
    "brand": "Claire & Co",
    "price": 72.0,
    "image": "https://i.ibb.co/4ZNGdztZ/71s69tw-MOAL-SX575.jpg",
    "description": "The Claire & Co Pump 121 by Claire & Co is a sleek, classic pump designed to support long periods of wear. With a lightly cushioned footbed and a moderate heel height, this pump provides a polished look without sacrificing comfort. The refined upper and quality finishing details make it well-suited for work and event wear. Reliable construction and timeless styling ensure these pumps remain a wardrobe staple season after season.",
    "stock": 156,
    "rating": 4.1
  },
  {
    "id": 45,
    "name": "PlayPace School Shoe 410",
    "category": "kids",
    "brand": "PlayPace",
    "price": 33.5,
    "image": "https://i.ibb.co/wZWqB89Y/71a79-PBg0u-L-SY575.jpg",
    "description": "The PlayPace School Shoe 410 by PlayPace emphasizes comfort and resilience for school days. A supportive insole and reinforced toe area help the shoe stand up to daily wear and play. The outsole is designed to be slip-resistant and durable across playground surfaces. Breathable materials increase comfort while construction techniques prioritize a long service life. These shoes meet functional needs for school while providing a neutral aesthetic appropriate for uniform requirements.",
    "stock": 171,
    "rating": 4.2
  },
  {
    "id": 46,
    "name": "Maverick Runner 304",
    "category": "men",
    "brand": "Maverick",
    "price": 79.99,
    "image": "https://i.ibb.co/zW1jjQfF/MMVKV1-114-main02.png",
    "description": "The Maverick Runner 304 by Maverick is constructed for everyday training and casual runs. The breathable upper and cushioned midsole offer a comfortable feel through mileage while an outsole designed for city and light trail surfaces delivers versatile traction. The shoe’s modest weight helps reduce fatigue, and the refined styling allows easy pairing with casual apparel. Reliable durability and consistent comfort make this a solid choice for daily runners and active commuters.",
    "stock": 115,
    "rating": 4.2
  },
  {
    "id": 47,
    "name": "Seraphine Ankle Boot 302",
    "category": "women",
    "brand": "Seraphine",
    "price": 118.0,
    "image": "https://i.ibb.co/N2C2Gw49/CEC1778-F-E4-F8-4-C62-A3-CB-CCCB5639-EB18-540x.jpg",
    "description": "The Seraphine Ankle Boot 302 by Seraphine offers a contemporary look with functional comfort attributes. A padded insole provides shock absorption and comfort during extended wear, while the exterior finish provides resilience to daily conditions. The boot’s silhouette pairs well with both tailored and casual outfits, and the reliable sole offers traction for city walking. These ankle boots are thoughtfully constructed to combine style with practical performance for everyday wardrobes.",
    "stock": 101,
    "rating": 4.3
  },
  {
    "id": 48,
    "name": "ChampionEdge Sprint 124",
    "category": "sports",
    "brand": "ChampionEdge",
    "price": 129.0,
    "image": "https://i.ibb.co/ksDy1mj6/71-Ri-FU3-Kv-LL-SY575.jpg",
    "description": "The ChampionEdge Sprint 124 by ChampionEdge is a lightweight trainer tailored for speed work and intervals. The upper combines structure with breathability to support fast, aggressive strides, and the midsole returns energy efficiently on each footstrike. A low-profile outsole enhances ground feel while still offering enough grip for track and road sessions. Built for athletes who prioritize tempo runs and speed sessions, these trainers offer responsive performance with a race-oriented design.",
    "stock": 39,
    "rating": 4.6
  },
  {
    "id": 49,
    "name": "TinyTreads School Shoe 668",
    "category": "kids",
    "brand": "TinyTreads",
    "price": 30.0,
    "image": "https://i.ibb.co/21md5W7V/71c0-Av5-Hj8-L-SX575.jpg",
    "description": "The TinyTreads School Shoe 668 by TinyTreads is designed for everyday school wear, offering supportive insoles and a durable outsole suited to the demands of active children. A reinforced toe cap and sturdy upper construction increase longevity, while breathable linings help maintain comfort during long days. The design meets common uniform requirements and provides a practical solution for parents seeking durable, reliable footwear for school.",
    "stock": 144,
    "rating": 4.2
  },
  {
    "id": 50,
    "name": "Stonecrest Oxford 536",
    "category": "men",
    "brand": "Stonecrest",
    "price": 142.2,
    "image": "https://i.ibb.co/bRBrWwKC/Lg3a7qw5-Z9a-I-WS-MS-117-GREY-1.jpg",
    "description": "The Stonecrest Oxford 536 by Stonecrest brings a traditional aesthetic to modern comfort standards. With premium leather uppers and a supportive insole, these oxfords are built for consistent professional wear. The outsole provides steady traction while the refined construction keeps the silhouette classic. These shoes are ideal for anyone wanting a dependable dress shoe that balances timeless design with contemporary comfort technology.",
    "stock": 109
  },
  {
    "id": 51,
    "name": "Maverick Chelsea 428",
    "category": "men",
    "brand": "Maverick",
    "price": 105.5,
    "image": "https://i.ibb.co/zhx6SzGW/61-B66-Vlua-GL-SY695.jpg",
    "description": "The Maverick Chelsea 428 by Maverick is a straightforward, stylish Chelsea boot intended for everyday and semi-formal wear. Elastic side gussets and a comfortable insole make it easy to wear and walk in for extended periods. A resilient outsole offers grip on city surfaces while the clean lines and moderate heel height maintain a polished appearance. The boot’s versatile profile means it pairs well with both casual and dressier pieces, making it a versatile addition to any wardrobe.",
    "stock": 98,
    "rating": 4.1
  },
  {
    "id": 52,
    "name": "LunaStep Ankle Boot 509",
    "category": "women",
    "brand": "LunaStep",
    "price": 115.2,
    "image": "https://i.ibb.co/C3T01b2W/71-OOOkx5-Rd-L-SY575.jpg",
    "description": "The LunaStep Ankle Boot 509 by LunaStep is crafted for seasonal wear with an emphasis on versatile style and comfort. A cushioned footbed and supportive heel pad reduce fatigue while a durable outsole handles varied surfaces. The upper showcases refined stitching and an elegant silhouette that pairs well with dresses or trousers. Practical features such as a side zipper make it easy to wear, while premium materials keep the look elevated and long-lasting.",
    "stock": 132,
    "rating": 4.3
  },
  {
    "id": 53,
    "name": "VelocityX Trail Runner 790",
    "category": "sports",
    "brand": "VelocityX",
    "price": 154.9,
    "image": "https://i.ibb.co/FL8cFR3M/p2653993.jpg",
    "description": "The VelocityX Trail Runner 790 by VelocityX is developed for technical terrain and longer trail outings. A protective toe cap and reinforced overlays guard against debris while a sticky outsole compound ensures grip on wet and uneven surfaces. The midsole provides a stable platform with energy return optimized for trail conditions. Breathable but durable materials strike a balance between ventilation and protection. A dependable option for trail runners who require durability and stability on challenging routes.",
    "stock": 48,
    "rating": 4.7
  },
  {
    "id": 54,
    "name": "Claire & Co Ballet 633",
    "category": "women",
    "brand": "Claire & Co",
    "price": 67.5,
    "image": "https://i.ibb.co/Z6tLQwdK/81-Rv-Np-EENVL-SX575.jpg",
    "description": "The Claire & Co Ballet 633 by Claire & Co is a refined ballet flat engineered for comfort and versatility. A supple lining and padded footbed minimize friction and add cushioning while a flexible outsole provides easy movement. The classic silhouette includes a subtle embellishment for a feminine touch. Practical construction and cushioned comfort make this flat suitable for extended wear, bridging both workplace and weekend wardrobes with ease.",
    "stock": 161,
    "rating": 4.2
  },
  {
    "id": 55,
    "name": "ProRun Marathon 214",
    "category": "sports",
    "brand": "ProRun",
    "price": 158.6,
    "image": "https://i.ibb.co/v6sR0Bw9/p2417858.jpg",
    "description": "The ProRun Marathon 214 by ProRun is engineered for long-distance runners who demand consistent cushioning and reliable durability. The midsole employs a responsive foam to help cushion repetitive impacts while preserving energy return, and the upper is designed for a secure fit that minimizes slippage. The outsole compound resists wear from high mileage, and the overall construction is tuned for comfort over extended runs. A trusted training companion for serious endurance athletes.",
    "stock": 109
  },
  {
    "id": 56,
    "name": "Maverick Oxford 965",
    "category": "men",
    "brand": "Maverick",
    "price": 195.99,
    "image": "https://i.ibb.co/Xx0KFwqt/51-Qdad-Uv-QFL-SY575.jpg",
    "description": "The Maverick Oxford 965 by Maverick is crafted with refined materials and updated comfort features to suit professional wardrobes. Full-grain leather uppers, a supportive insole, and a durable outsole make this a resilient dress option. The balanced heel height and a classic profile allow it to pair nicely with formal attire, and meticulous stitching and finishing enhance longevity. These oxfords are a dependable, stylish choice for individuals seeking traditional aesthetics combined with modern comfort.",
    "stock": 85,
    "rating": 4.8
  },
  {
    "id": 57,
    "name": "TinyTreads Trainer 701",
    "category": "kids",
    "brand": "TinyTreads",
    "price": 23.99,
    "image": "https://i.ibb.co/qLc8NqfR/71-Jxizw-BHz-L-SY575.jpg",
    "description": "The TinyTreads Trainer 701 by TinyTreads is ideal for young adventurers who need dependable, comfortable footwear. The shoe features a cushioned footbed and flexible sole for natural movement. Reinforced areas help the shoe resist scuffs and heavy wear common in children’s play. Breathable linings and secure closures add to the ease of daily wear. Practical for school or weekend play, these trainers are designed to be a durable and comfortable companion.",
    "stock": 110
  },
  {
    "id": 58,
    "name": "Stonecrest Derby 263",
    "category": "men",
    "brand": "Stonecrest",
    "price": 109.95,
    "image": "https://i.ibb.co/nW8WPbT/UV-Vo-Cu-UAme-SFM009-BLACK-1.jpg",
    "description": "The Stonecrest Derby 263 by Stonecrest is a casual derby with thoughtful comfort elements built in. Soft leather uppers and a padded insole deliver a reliable baseline of comfort for everyday activities. The outsole is designed to provide traction on varied urban surfaces, and a classic shape keeps styling versatile. With sturdy construction and an understated look, this derby works well across casual and business-casual occasions.",
    "stock": 54
  },
  {
    "id": 59,
    "name": "LunaStep Pump 704",
    "category": "women",
    "brand": "LunaStep",
    "price": 90.0,
    "image": "https://i.ibb.co/b5fpy4jc/71fh3-O1b-V2-L-SY575.jpg",
    "description": "The LunaStep Pump 704 by LunaStep merges elegance with practicality for day-to-night wear. The shoe includes interior cushioning to reduce pressure points and a modest heel designed for stability. The upper finish resists scuffing, and the silhouette remains timeless for various wardrobe combinations. These pumps are a go-to for consumers wanting polished footwear that still prioritizes comfort during extended engagements.",
    "stock": 104,
    "rating": 4.4
  },
  {
    "id": 60,
    "name": "VelocityX Cross-Trainer 533",
    "category": "sports",
    "brand": "VelocityX",
    "price": 119.0,
    "image": "https://i.ibb.co/MxZVWxY5/p2199781.jpg",
    "description": "The VelocityX Cross-Trainer 533 by VelocityX offers stable support for varied gym routines. A secure lacing system and reinforced midfoot combine to provide dependable fit and control during lateral movements. The midsole cushions impact while still maintaining ground feel for strength exercises, and the outsole pattern is tuned for traction on gym floors. With breathable uppers and durable construction, these trainers are built to handle multi-discipline workouts and frequent use.",
    "stock": 109,
    "rating": 4.5
  },
  {
    "id": 61,
    "name": "UrbanStride Derby 658",
    "category": "men",
    "brand": "UrbanStride",
    "price": 77.49,
    "image": "https://example.com/images/men_61.jpg",
    "description": "The UrbanStride Derby 658 by UrbanStride is a casual derby crafted for day-to-day wear with a comfortable fit. The shoe includes a cushioned insole and breathable linings to help keep feet comfortable through busy days. The outsole offers reliable traction for urban environments, and subtle design details ensure a versatile look. A great option for individuals seeking an unobtrusive, functional shoe that complements casual and semi-casual outfits.",
    "stock": 129,
    "rating": 4.0
  },
  {
    "id": 62,
    "name": "Aurabelle Slingback 288",
    "category": "women",
    "brand": "Aurabelle",
    "price": 85.0,
    "image": "https://example.com/images/women_62.jpg",
    "description": "The Aurabelle Slingback 288 by Aurabelle balances a feminine silhouette with practical comfort elements. A cushioned footbed reduces strain while the adjustable slingback ensures a secure fit. The outsole provides traction for mixed surfaces, and refined materials preserve an elegant look. These slingbacks suit both office and event settings where a polished appearance is desired without sacrificing comfort.",
    "stock": 121,
    "rating": 4.2
  },
  {
    "id": 63,
    "name": "ChampionEdge Court Trainer 990",
    "category": "sports",
    "brand": "ChampionEdge",
    "price": 94.5,
    "image": "https://example.com/images/sports_63.jpg",
    "description": "The ChampionEdge Court Trainer 990 by ChampionEdge focuses on stability and cushioning for court sports. With reinforced lateral support and a grippy outsole compound, the trainer helps athletes make quick cuts while maintaining comfort. Breathable materials reduce overheating during high-intensity play, and a well-padded collar enhances fit and feel. Durable construction makes these trainers suited for regular training sessions on indoor surfaces.",
    "stock": 67,
    "rating": 4.4
  },
  {
    "id": 64,
    "name": "MiniStride Velcro 127",
    "category": "kids",
    "brand": "MiniStride",
    "price": 25.0,
    "image": "https://example.com/images/kids_64.jpg",
    "description": "The MiniStride Velcro 127 by MiniStride is designed for young children to provide a secure fit with easy fastening. The shoe includes a soft, padded lining and a flexible sole for natural movement. Reinforced areas at the toe and heel improve longevity, and the outsole provides traction on playground surfaces. Practical and comfortable, these shoes are well-suited to busy school routines and active play.",
    "stock": 112,
    "rating": 4.3
  },
  {
    "id": 65,
    "name": "AirFlex Runner",
    "category": "men",
    "brand": "AirFlex",
    "price": 120,
    "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSbnfMI4mzqvTc130dbnbLtx4jpcLuhyjIYOzEFtSERvkrtJhnstz2hKU31iTw1AjelYGr0VzmvpAKInIKOgmN95qjW5I3d_AUFb-krDSuv0HU7IqeXNFOeJw",
    "description": "The Stonecrest Slip-On 221 by Stonecrest is a casual slip-on built for convenience and everyday comfort. Elastic side panels and a cushioned footbed make these easy to wear for errands, travel, and casual outings. The outsole provides reliable traction for light urban use, and the understated design blends easily with relaxed wardrobe choices. A dependable, easy-going option for those who prefer a fuss-free footwear solution.",
    "stock": 121,
    "rating": 4.0
  },
  {
    "id": 66,
    "name": "Veloria Wedge 812",
    "category": "women",
    "brand": "Veloria",
    "price": 102.0,
    "image": "https://example.com/images/women_66.jpg",
    "description": "The Veloria Wedge 812 by Veloria emphasizes comfortable elevation with a supportive sole. Padded footbeds and stable wedge design allow for longer wear while maintaining an elevated look. The materials are chosen for both comfort and a polished appearance, making the wedge a versatile option for day-to-night wear. Perfect for those who want a comfortable heel without sacrificing a refined aesthetic.",
    "stock": 89,
    "rating": 4.3
  },
  {
    "id": 67,
    "name": "PlayPace High-Top 328",
    "category": "kids",
    "brand": "PlayPace",
    "price": 32.99,
    "image": "https://example.com/images/kids_67.jpg",
    "description": "The PlayPace High-Top 328 by PlayPace is an energetic design offering ankle support and durable materials for active play. Cushioned linings and secure closures help kids stay comfortable while running and climbing. Reinforced construction offers added longevity and the outsole gives traction for both indoor and outdoor activities. Bright, kid-friendly designs make them appealing to children while parents appreciate the durability and comfort features.",
    "stock": 109,
    "rating": 4.4
  },
  {
    "id": 68,
    "name": "Urban Sneaker",
    "category": "men",
    "brand": "UrbanStride",
    "price": 95,
    "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTH9amlXmiNFzhMu_O_3WbXkMVIOBtlr1qessBIng1naf88xweQO_s_e3utXhApkpXX-1JUh0WQZwSvGYHpNgS-DxCGtnfwKDPnvmVIfiEhxz6KLuYxX3oW",
    "description": "The UrbanStride Oxford 774 by UrbanStride pairs timeless styling with modern-day comfort updates. A supportive insole, breathable lining, and a durable outsole make it practical for long hours. Clean lines and refined finishing details make it appropriate for professional settings, and the construction emphasizes long-term wearability. A solid option for someone seeking a dress shoe with contemporary comfort features.",
    "stock": 143,
    "rating": 4.2
  },
  {
    "id": 69,
    "name": "Aurabelle Ballet 210",
    "category": "women",
    "brand": "Aurabelle",
    "price": 58.99,
    "image": "https://example.com/images/women_69.jpg",
    "description": "The Aurabelle Ballet 210 by Aurabelle focuses on simple elegance with comfortable construction. A plush insole and flexible outsole make it appropriate for daily wear, while subtle detailing enhances its visual appeal. Breathable lining helps maintain comfort during warm days, and the shoe’s streamlined shape pairs well with varied outfits. An easy-care, stylish flat for everyday dressing and travel.",
    "stock": 160,
    "rating": 4.1
  },
  {
    "id": 70,
    "name": "VelocityX Running Shoe 448",
    "category": "sports",
    "brand": "VelocityX",
    "price": 132.0,
    "image": "https://example.com/images/sports_70.jpg",
    "description": "The VelocityX Running Shoe 448 by VelocityX offers a stable and responsive platform for regular road runners. The midsole focuses on cushioning and energy return while the breathable upper keeps feet cool. The outsole combines durability with traction patterns optimized for asphalt and light pavement. Designed for daily training, this shoe supports consistent mileage and long-distance comfort, appealing to runners who log frequent miles and demand reliable cushioning.",
    "stock": 117,
    "rating": 4.6
  },
  {
    "id": 71,
    "name": "SproutSteps Play Shoe 452",
    "category": "kids",
    "brand": "SproutSteps",
    "price": 27.5,
    "image": "https://example.com/images/kids_71.jpg",
    "description": "The SproutSteps Play Shoe 452 by SproutSteps is an everyday kid shoe with comfort-focused design. A lightweight sole and cushioned interior help absorb impact during play, while reinforced uppers and stitched seams extend durability. The outsole provides slip-resistant performance on playground and indoor surfaces, and bright design elements appeal to young users. Easy to care for and built to last through active routines, these shoes are a practical pick for parents and kids alike.",
    "stock": 133,
    "rating": 4.3
  },
  {
    "id": 72,
    "name": "Trail Pro",
    "category": "men",
    "brand": "Trail",
    "price": 140,
    "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQSlh5fbZVdxcqrahzaXSCD0pM2EFou44-qJ8CAb6fKQIJujQnNdmCAd-R2M8coYNG3Bz6-XSbU4YaTbQ9M7fPCmMwBJYRWPERxxyiJ3orXmERGxCCCq8FLPA",
    "description": "The NobleWalk Loafer 081 by NobleWalk is a polished loafer built with premium materials and a refined profile. A supportive footbed and moderate heel provide all-day comfort, while the sleek upper details suit professional and dressy looks. The outsole offers steady traction and durability for regular wear. These loafers serve as a reliable choice for occasions where a more formal appearance is required without sacrificing comfort.",
    "stock": 96,
    "rating": 4.5
  },
  {
    "id": 73,
    "name": "Veloria Slingback 417",
    "category": "women",
    "brand": "Veloria",
    "price": 84.5,
    "image": "https://example.com/images/women_73.jpg",
    "description": "The Veloria Slingback 417 by Veloria blends femininity with comfort. Soft inner linings and a cushioned footbed deliver wearability for extended occasions, while the adjustable strap ensures a tailored fit. The moderate heel height provides lift with stability, and the refined upper maintains a polished look. These slingbacks are suitable for both professional and semi-formal events, delivering a combination of style and sensible comfort.",
    "stock": 87,
    "rating": 4.2
  },
  {
    "id": 74,
    "name": "ChampionEdge Allrounder 331",
    "category": "sports",
    "brand": "ChampionEdge",
    "price": 111.0,
    "image": "https://example.com/images/sports_74.jpg",
    "description": "The ChampionEdge Allrounder 331 by ChampionEdge is a versatile training shoe designed for multi-purpose workouts. The midsole provides balanced cushioning while the outsole pattern addresses traction for gym floors and outdoor training. The upper offers breathable support and a secure fit for dynamic movement. These trainers suit athletes who prefer a single shoe solution for a mix of cardio, strength, and agility training.",
    "stock": 102,
    "rating": 4.4
  },
  {
    "id": 75,
    "name": "TinyTreads Velcro 894",
    "category": "kids",
    "brand": "TinyTreads",
    "price": 22.99,
    "image": "https://example.com/images/kids_75.jpg",
    "description": "The TinyTreads Velcro 894 by TinyTreads is designed for convenience and comfort for younger children. Quick fastening, cushioned insoles, and flexible soles make them perfect for early steps and active play. Reinforced uppers extend life while bright colorways make them kid-friendly. Durable and easy to maintain, these shoes meet the practical needs of busy families.",
    "stock": 175,
    "rating": 4.2
  },
  {
    "id": 76,
    "name": "Stonecrest Brogue 712",
    "category": "men",
    "brand": "Stonecrest",
    "price": 156.75,
    "image": "https://example.com/images/men_76.jpg",
    "description": "The Stonecrest Brogue 712 by Stonecrest is a detailed brogue that emphasizes classic character with modern comfort. The shoe uses quality leather and decorative perforations to create a distinguished appearance. The midsole adds cushioning suitable for daily wear, and the outsole delivers traction for urban settings. These brogues are well-suited to those who appreciate sartorial detailing paired with sensible comfort for prolonged use.",
    "stock": 81,
    "rating": 4.5
  },
  {
    "id": 77,
    "name": "LunaStep Wedge 501",
    "category": "women",
    "brand": "LunaStep",
    "price": 98.9,
    "image": "https://example.com/images/women_77.jpg",
    "description": "The LunaStep Wedge 501 by LunaStep combines an elegant design with practical comfort. A supportive footbed and stable wedge construction allow for extended wear with reduced foot strain. The shoe’s refined materials and finishing make it appropriate for many occasions, and the balanced silhouette works well with varied outfits. Durable build quality ensures these wedges provide long-lasting wear throughout seasons.",
    "stock": 109,
    "rating": 4.2
  },
  {
    "id": 78,
    "name": "PlayPace Lightweigth Sneaker 133",
    "category": "kids",
    "brand": "PlayPace",
    "price": 29.5,
    "image": "https://example.com/images/kids_78.jpg",
    "description": "The PlayPace Lightweight Sneaker 133 by PlayPace focuses on lightness and comfort to support kids’ active days. The soft insole and flexible outsole promote natural motion while protective uppers resist daily wear. Breathable linings help maintain foot comfort and a variety of playful colorways appeal to younger wearers. Practical and comfortable, these sneakers suit school, play, and weekend outings.",
    "stock": 162,
    "rating": 4.3
  },
  {
    "id": 79,
    "name": "UrbanStride Derby 658",
    "category": "men",
    "brand": "UrbanStride",
    "price": 89.6,
    "image": "https://example.com/images/men_79.jpg",
    "description": "The UrbanStride Derby 658 by UrbanStride is crafted for those seeking a comfortable, casual derby with modern styling. The shoe includes cushioning in the midsole and breathable linings for all-day comfort. Durable construction and a versatile look make this derby suitable for everyday wear and semi-casual occasions. Clean lines and subtle details ensure adaptability in many wardrobe scenarios.",
    "stock": 144,
    "rating": 4.5
  },
  {
    "id": 80,
    "name": "Maverick Runner 585",
    "category": "men",
    "brand": "Maverick",
    "price": 79.36,
    "image": "https://example.com/images/men_80.jpg",
    "description": "The Maverick Runner 585 by Maverick is crafted for comfortable daily runs and active lifestyles. A breathable mesh upper promotes airflow while the cushioned midsole absorbs impact for a smooth ride. The versatile outsole provides traction for city runs and gym sessions. Its lightweight construction and attractive styling make it an easy pick for both workouts and casual wear. Thoughtful construction and durable materials ensure reliable performance across various activities.",
    "stock": 154
  }
]
 getProductsStream() {
    return this.products$.asObservable();
  }

getProducts():Product[]{
  return this.products$.value;
}
 private saveProducts(products: Product[]) {
    localStorage.setItem(this.productsKey, JSON.stringify(products));
    this.products$.next(products);
  }
getProductsById(id:number):Product{
  return this.products.find(p=>p.id===id)!;
}

  private getStoredProducts(): Product[] {
    const data = localStorage.getItem(this.productsKey);
    return data ? JSON.parse(data) : [];
  }

 addProduct(product: Product) {
    const products = this.getProducts();
    const newId = products.length ? Math.max(...products.map(p => p.id!)) + 1 : 1;
    product.id = newId;
    products.push(product);
    this.saveProducts(products);
  }
  deleteProduct(id: number) {
    const products = this.getProducts().filter(p => p.id !== id);
    this.saveProducts(products);
  }
  updateProduct(product: Product) {
    const products = this.getProducts().map(p => p.id === product.id ? product : p);
    this.saveProducts(products);
  }




}