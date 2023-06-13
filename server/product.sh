#!/bin/bash

TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0N2FiM2JhYzllZjUzYzAxMWM1NGViMCIsImlhdCI6MTY4NTc3OTAwMn0.IaKpr5qCKneVVm5pxMNa6OWFCkr04uQ-HEo9VbyTiKo"
CATEGORIES=("HIKING" "BASKETBALL" "BOXING" "RUNNING" "TENNIS" "CAMPING" "SWIMMING")

create_product() {
    curl -X POST "localhost:3001/api/products" \
        -H "Authorization: Bearer $TOKEN" \
        -H "Content-Type: application/json" \
        -d '{
            "name": "'"$1"'",
            "description": "'"$2"'",
            "price": '"$3"',
            "imageUrl": "'"$4"'",
            "category": "'"$5"'",
            "quantityInStock": 100
        }'
}

# Hiking products
create_product "Alpine Trekker Hiking Boots" "Experience peak comfort with Alpine Trekker Hiking Boots. Crafted for tough trails, excellent foot support & grip." 110.99 "https://example.com/hiking1.jpg" "HIKING"
create_product "Mountaineer's Hiking Backpack" "Mountaineer's Hiking Backpack offers superior storage, durability and comfort. Ideal for long hikes & expeditions." 79.99 "https://example.com/hiking2.jpg" "HIKING"
create_product "Trek Support Hiking Poles" "Stay stable on any terrain with Trek Support Hiking Poles. Lightweight design, adjustable height, ergonomic grips." 49.99 "https://example.com/hiking3.jpg" "HIKING"
create_product "Outdoor Explorer's Camping Tent" "Outdoor Explorer's Camping Tent provides excellent weather protection, space for 4 people, quick setup." 200.99 "https://example.com/hiking4.jpg" "HIKING"
create_product "Rugged Trail Hiking Socks" "Rugged Trail Hiking Socks ensure comfort and dryness during long hikes. Reinforced for durability, padded for comfort." 15.99 "https://example.com/hiking5.jpg" "HIKING"
create_product "Hiker's Hydration Pack" "Stay hydrated with the Hiker's Hydration Pack. Features a 2L water reservoir, lightweight design, adjustable straps." 39.99 "https://example.com/hiking6.jpg" "HIKING"
create_product "PeakComfort Sleeping Bag" "Sleep comfortably outdoors with the PeakComfort Sleeping Bag. Warm, spacious and lightweight, ideal for hiking trips." 70.99 "https://example.com/hiking7.jpg" "HIKING"
create_product "ProTrek Hiking Shorts" "ProTrek Hiking Shorts offer comfort, flexibility, and durability for all your hiking adventures. Quick-dry fabric." 45.99 "https://example.com/hiking8.jpg" "HIKING"
create_product "SunShield Hiker's Hat" "Protect yourself from sun with the SunShield Hiker's Hat. Breathable fabric, wide brim for superior coverage." 25.99 "https://example.com/hiking9.jpg" "HIKING"
create_product "TrailBlazer GPS Tracker" "Never get lost with the TrailBlazer GPS Tracker. Reliable satellite connection, features topographical maps." 130.99 "https://example.com/hiking10.jpg" "HIKING"

# Basketball products
create_product "CourtMaster Basketball Shoes" "Dominate the court with CourtMaster Basketball Shoes. Designed for explosive speed, control and comfort." 115.99 "https://example.com/basketball1.jpg" "BASKETBALL"
create_product "HoopShot Basketball" "Up your game with the HoopShot Basketball. Designed for optimal roundness, excellent grip and durability." 30.99 "https://example.com/basketball2.jpg" "BASKETBALL"
create_product "SlamDunk Basketball Jersey" "Stay cool with the SlamDunk Basketball Jersey. Designed for comfort, durability and style on the court." 50.99 "https://example.com/basketball3.jpg" "BASKETBALL"
create_product "BasketPro Ankle Support" "Protect your ankles with BasketPro Ankle Support. Comfortable fit, provides excellent support and flexibility." 30.99 "https://example.com/basketball4.jpg" "BASKETBALL"
create_product "ScoreKing Basketball Shorts" "Score in comfort with ScoreKing Basketball Shorts. Lightweight, breathable fabric for optimal performance." 45.99 "https://example.com/basketball5.jpg" "BASKETBALL"
create_product "QuickDribble Basketball Gloves" "Enhance your ball handling with QuickDribble Basketball Gloves. Improves grip, protects hands, supports proper technique." 20.99 "https://example.com/basketball6.jpg" "BASKETBALL"
create_product "NetMaster Basketball Net" "Experience professional-level play with the NetMaster Basketball Net. Weather-resistant, suitable for indoor and outdoor courts." 20.99 "https://example.com/basketball7.jpg" "BASKETBALL"
create_product "JumpBoost Knee Pads" "Protect your knees with JumpBoost Knee Pads. Superior cushioning, flexible design, essential for high-impact games." 25.99 "https://example.com/basketball8.jpg" "BASKETBALL"
create_product "SwishMaster Shooting Sleeves" "Improve your shot with SwishMaster Shooting Sleeves. Promotes blood flow, improves shooting accuracy." 19.99 "https://example.com/basketball9.jpg" "BASKETBALL"
create_product "CourtVision Sports Glasses" "Keep your vision clear with CourtVision Sports Glasses. Anti-glare, impact-resistant, designed for high-performance play." 70.99 "https://example.com/basketball10.jpg" "BASKETBALL"

# Boxing products
create_product "PunchKing Boxing Gloves" "Dominate the ring with PunchKing Boxing Gloves. Superior protection, comfort and wrist support. Ideal for sparring and training." 65.99 "https://example.com/boxing1.jpg" "BOXING"
create_product "RingMaster Boxing Shoes" "Move swiftly with RingMaster Boxing Shoes. Lightweight, secure fit, designed for agility and power." 80.99 "https://example.com/boxing2.jpg" "BOXING"
create_product "KnockOut Boxing Headgear" "Protect yourself with KnockOut Boxing Headgear. Designed for optimal visibility and protection." 50.99 "https://example.com/boxing3.jpg" "BOXING"
create_product "ChampGuard Mouthguard" "Protect your teeth with the ChampGuard Mouthguard. Custom fit, durable protection for professional and amateur boxers." 15.99 "https://example.com/boxing4.jpg" "BOXING"
create_product "StrikeForce Punching Bag" "Train hard with the StrikeForce Punching Bag. Designed for heavy hits, long-lasting durability." 105.99 "https://example.com/boxing5.jpg" "BOXING"
create_product "PowerPunch Boxing Pads" "Improve your strikes with PowerPunch Boxing Pads. Excellent for precision training, shock-absorbent design." 40.99 "https://example.com/boxing6.jpg" "BOXING"
create_product "RingStar Boxing Shorts" "Stay flexible with RingStar Boxing Shorts. Designed for mobility, comfort and style in the ring." 30.99 "https://example.com/boxing7.jpg" "BOXING"
create_product "FightFast Speed Bag" "Improve your speed and coordination with the FightFast Speed Bag. Durable leather, reliable rebound." 65.99 "https://example.com/boxing8.jpg" "BOXING"
create_product "JabMaster Boxing Robe" "Stay warm and stylish with the JabMaster Boxing Robe. Soft material, hooded design, ideal for pre-fight preparation." 50.99 "https://example.com/boxing9.jpg" "BOXING"
create_product "GuardPro Boxing Hand Wraps" "Protect your hands with GuardPro Boxing Hand Wraps. Strong support, comfortable fit, essential for all boxers." 15.99 "https://example.com/boxing10.jpg" "BOXING"

# Running products
create_product "RunFast Pro Running Shoes" "Achieve your best time with RunFast Pro Running Shoes. Lightweight design, excellent cushioning and breathability." 90.99 "https://example.com/running1.jpg" "RUNNING"
create_product "Marathon Master Running Shorts" "Stay cool with Marathon Master Running Shorts. Designed for comfort and freedom of movement during long runs." 45.99 "https://example.com/running2.jpg" "RUNNING"
create_product "TrackStar Running T-Shirt" "Experience comfort with TrackStar Running T-Shirt. Breathable material, sweat-wicking design for optimal performance." 35.99 "https://example.com/running3.jpg" "RUNNING"
create_product "StridePro Running Socks" "StridePro Running Socks provide excellent foot support and moisture control. Ideal for distance runners." 15.99 "https://example.com/running4.jpg" "RUNNING"
create_product "HydraPack Running Water Bottle" "Stay hydrated with HydraPack Running Water Bottle. Lightweight design, easy grip, ideal for runners." 19.99 "https://example.com/running5.jpg" "RUNNING"
create_product "SpeedTrack Running Watch" "Monitor your progress with SpeedTrack Running Watch. Tracks distance, pace, heart rate. Essential for runners." 125.99 "https://example.com/running6.jpg" "RUNNING"
create_product "WindShield Running Jacket" "Protect yourself from the elements with WindShield Running Jacket. Lightweight, windproof and waterproof, ideal for outdoor running." 85.99 "https://example.com/running7.jpg" "RUNNING"
create_product "Energize Energy Gel Packs" "Boost your stamina with Energize Energy Gel Packs. Quick and efficient energy source for long runs." 20.99 "https://example.com/running8.jpg" "RUNNING"
create_product "ComfortFit Running Headband" "Keep sweat out of your eyes with ComfortFit Running Headband. Absorbent material, comfortable fit." 10.99 "https://example.com/running9.jpg" "RUNNING"
create_product "NightVision Reflective Vest" "Stay visible during night runs with NightVision Reflective Vest. High visibility, lightweight design." 25.99 "https://example.com/running10.jpg" "RUNNING"

# Tennis products
create_product "MatchPoint Pro Tennis Racket" "Score a win with the MatchPoint Pro Tennis Racket. Lightweight, powerful swing, ideal for competitive play." 150.99 "https://example.com/tennis1.jpg" "TENNIS"
create_product "CourtMaster Tennis Shoes" "Experience comfort and stability with CourtMaster Tennis Shoes. Designed for agility and optimal grip on court." 85.99 "https://example.com/tennis2.jpg" "TENNIS"
create_product "SwingPro Tennis Balls" "Play like a pro with SwingPro Tennis Balls. Designed for optimal bounce, durability and performance on all court types." 25.99 "https://example.com/tennis3.jpg" "TENNIS"
create_product "AceServe Tennis Shorts" "Stay cool and comfortable with AceServe Tennis Shorts. Breathable material, allows optimal movement." 40.99 "https://example.com/tennis4.jpg" "TENNIS"
create_product "NetMaster Tennis Net" "Experience professional play with NetMaster Tennis Net. High durability, suitable for indoor and outdoor courts." 80.99 "https://example.com/tennis5.jpg" "TENNIS"
create_product "TennisPro Elbow Brace" "Protect your arm with TennisPro Elbow Brace. Provides support and relief from tennis elbow." 25.99 "https://example.com/tennis6.jpg" "TENNIS"
create_product "GrandSlam Tennis Bag" "Carry your gear with GrandSlam Tennis Bag. Spacious, multiple compartments, designed for pro players." 60.99 "https://example.com/tennis7.jpg" "TENNIS"
create_product "VolleyMaster Tennis Visor" "Keep the sun out of your eyes with VolleyMaster Tennis Visor. Comfortable fit, shields from UV rays." 20.99 "https://example.com/tennis8.jpg" "TENNIS"
create_product "GripMax Racket Grips" "Hold your racket comfortably with GripMax Racket Grips. Improves racket handling, absorbs sweat." 15.99 "https://example.com/tennis9.jpg" "TENNIS"
create_product "TennisPro Training Cones" "Improve your agility with TennisPro Training Cones. Ideal for drills and skill development on court." 20.99 "https://example.com/tennis10.jpg" "TENNIS"

# Camping products
create_product "CampKing 2-Person Tent" "Enjoy the outdoors with CampKing 2-Person Tent. Easy to set up, waterproof, and wind-resistant. Great for all camping adventures." 120.99 "https://example.com/camping1.jpg" "CAMPING"
create_product "OutdoorChef Camping Stove" "Cook with ease using OutdoorChef Camping Stove. Compact, efficient, and perfect for all your camping meals." 70.99 "https://example.com/camping2.jpg" "CAMPING"
create_product "StarGaze Sleeping Bag" "Sleep comfortably under the stars with StarGaze Sleeping Bag. Lightweight, warm and easy to pack. Ideal for camping trips." 55.99 "https://example.com/camping3.jpg" "CAMPING"
create_product "TravelLight Camping Backpack" "Carry all your gear with ease in the TravelLight Camping Backpack. High-capacity, durable, and designed for comfort." 85.99 "https://example.com/camping4.jpg" "CAMPING"
create_product "CampFire Portable Grill" "Enjoy a campfire cookout with the CampFire Portable Grill. Compact, easy to use, perfect for grilling your favorite foods." 60.99 "https://example.com/camping5.jpg" "CAMPING"
create_product "MountainSpring Camping Water Filter" "Ensure safe drinking water with MountainSpring Camping Water Filter. Removes bacteria and parasites, ideal for backpacking and camping." 45.99 "https://example.com/camping6.jpg" "CAMPING"
create_product "NightGuide Headlamp" "Light your way in the dark with NightGuide Headlamp. Bright, hands-free lighting, perfect for camping and hiking." 25.99 "https://example.com/camping7.jpg" "CAMPING"
create_product "ComfyRest Camping Pillow" "Sleep comfortably with ComfyRest Camping Pillow. Compact, inflatable and comfortable. A must-have for any camping trip." 15.99 "https://example.com/camping8.jpg" "CAMPING"
create_product "OutdoorFirst Aid Kit" "Be prepared for emergencies with the OutdoorFirst Aid Kit. Compact, lightweight, filled with essential first aid supplies." 30.99 "https://example.com/camping9.jpg" "CAMPING"
create_product "NatureView Binoculars" "Enjoy the beauty of nature with NatureView Binoculars. High-resolution, durable, great for bird watching and sightseeing." 75.99 "https://example.com/camping10.jpg" "CAMPING"

# Swimming products
create_product "WaveRider Swimming Goggles" "See clearly underwater with WaveRider Swimming Goggles. Anti-fog, UV protection, and a comfortable fit." 20.99 "https://example.com/swimming1.jpg" "SWIMMING"
create_product "AquaSpeed Swim Cap" "Reduce drag and protect your hair with AquaSpeed Swim Cap. Durable, lightweight, and suitable for all swimmers." 10.99 "https://example.com/swimming2.jpg" "SWIMMING"
create_product "WaterPro Swim Fins" "Improve your kick strength and ankle flexibility with WaterPro Swim Fins. Ideal for training and improving swimming techniques." 35.99 "https://example.com/swimming3.jpg" "SWIMMING"
create_product "TideMaster Swimming Trunks" "Swim comfortably with TideMaster Swimming Trunks. Quick-drying, comfortable fit, perfect for all swimming activities." 25.99 "https://example.com/swimming4.jpg" "SWIMMING"
create_product "SplashFun Water Noodles" "Have fun in the water with SplashFun Water Noodles. Great for swimming lessons, pool parties, and water aerobics." 15.99 "https://example.com/swimming5.jpg" "SWIMMING"
create_product "SeaView Snorkel Set" "Explore underwater life with SeaView Snorkel Set. Includes high-quality snorkel, mask, and fins. Ideal for snorkeling and recreational swimming." 55.99 "https://example.com/swimming6.jpg" "SWIMMING"
create_product "Guardian Life Vest" "Stay safe in the water with Guardian Life Vest. Comfortable, adjustable fit. Essential for water sports and boating." 40.99 "https://example.com/swimming7.jpg" "SWIMMING"
create_product "HydroBoost Swimming Gloves" "Increase your arm strength and speed with HydroBoost Swimming Gloves. Ideal for swimmers of all levels." 25.99 "https://example.com/swimming8.jpg" "SWIMMING"
create_product "SunGuard Swim Shirt" "Protect your skin from the sun with SunGuard Swim Shirt. UV protection, quick-drying, perfect for swimming and beach days." 30.99 "https://example.com/swimming9.jpg" "SWIMMING"
create_product "AquaTone Swimming Earplugs" "Prevent swimmer's ear with AquaTone Swimming Earplugs. Comfortable, waterproof, and perfect for all water activities." 10.99 "https://example.com/swimming10.jpg" "SWIMMING"

# Additional HIKING products
create_product "TrekMaster Binoculars" "High magnification binoculars for birdwatching or landscape viewing during hikes." 59.99 "https://example.com/hiking11.jpg" "HIKING"
create_product "MountainShield Sunscreen" "Water-resistant sunscreen with SPF 50 protection. Essential for all your hiking adventures." 14.99 "https://example.com/hiking12.jpg" "HIKING"
create_product "EcoTrail Portable Water Filter" "Compact and lightweight water filter for safe, drinkable water anywhere on your hikes." 24.99 "https://example.com/hiking13.jpg" "HIKING"
create_product "Wilderness Multi-tool" "Versatile multi-tool for various needs during hiking or camping. Includes knife, bottle opener, screwdriver, and more." 19.99 "https://example.com/hiking14.jpg" "HIKING"
create_product "FireSpark Magnesium Fire Starter" "Dependable fire starter for your hiking or camping trips. Works under any weather condition." 9.99 "https://example.com/hiking15.jpg" "HIKING"
create_product "TrailComfort Insect Repellent" "Long-lasting insect repellent to protect you from bug bites on your hikes." 12.99 "https://example.com/hiking16.jpg" "HIKING"
create_product "AllWeather Hiking Pants" "Durable, waterproof hiking pants with adjustable waist. Ideal for any weather conditions." 39.99 "https://example.com/hiking17.jpg" "HIKING"
create_product "CampBuddy Portable Cookware Set" "Compact, lightweight cookware set for your hiking or camping meals. Easy to carry and clean." 44.99 "https://example.com/hiking18.jpg" "HIKING"
create_product "StarGaze Portable Tent" "Easy-to-set-up tent for your hiking or camping overnight stays. Fits two people." 89.99 "https://example.com/hiking19.jpg" "HIKING"
create_product "EcoHike Recyclable Waste Bags" "Pack of 20 sturdy, recyclable waste bags. Leave no trace on your hikes." 6.99 "https://example.com/hiking20.jpg" "HIKING"

# Additional BASKETBALL products
create_product "HoopsKing Basketball Hoop" "Durable, professional-grade basketball hoop for your home court. Easy to install." 129.99 "https://example.com/basketball11.jpg" "BASKETBALL"
create_product "CoachMaster Whistle" "Loud, clear whistle for basketball coaches and referees. Includes lanyard." 4.99 "https://example.com/basketball12.jpg" "BASKETBALL"
create_product "SportFlex Ankle Support" "Adjustable, comfortable ankle support for injury prevention during basketball games." 24.99 "https://example.com/basketball13.jpg" "BASKETBALL"
create_product "TeamStar Basketball Jersey" "High-quality, breathable basketball jersey. Personalize with your team colors and logo." 34.99 "https://example.com/basketball14.jpg" "BASKETBALL"
create_product "SlamDunk Basketball Net" "Replacement basketball net made from durable, weather-resistant material." 14.99 "https://example.com/basketball15.jpg" "BASKETBALL"
create_product "HydraQuench Water Bottle" "Non-spill sports water bottle for staying hydrated during basketball games." 11.99 "https://example.com/basketball16.jpg" "BASKETBALL"
create_product "PlayMaker Basketball Shorts" "Comfortable, breathable basketball shorts for optimal performance during games." 29.99 "https://example.com/basketball17.jpg" "BASKETBALL"
create_product "WristMaster Sweatbands" "Pack of 4 sweat-absorbing wristbands. Ideal for basketball players." 8.99 "https://example.com/basketball18.jpg" "BASKETBALL"
create_product "ProCoach Clipboard" "Magnetic basketball coaching clipboard for strategic planning during games." 19.99 "https://example.com/basketball19.jpg" "BASKETBALL"
create_product "BallPump Portable Air Pump" "Compact, portable air pump for inflating basketballs. Includes needle." 9.99 "https://example.com/basketball20.jpg" "BASKETBALL"

# Additional BOXING products
create_product "ProPunch Boxing Gloves" "High-quality boxing gloves providing maximum comfort and protection." 59.99 "https://example.com/boxing11.jpg" "BOXING"
create_product "RingMaster Boxing Ring" "Professional-grade boxing ring for training or competitions." 1299.99 "https://example.com/boxing12.jpg" "BOXING"
create_product "EverFit Mouth Guard" "Customizable mouth guard for superior protection during boxing." 19.99 "https://example.com/boxing13.jpg" "BOXING"
create_product "SpeedKing Jump Rope" "Lightweight, adjustable jump rope for cardio and agility training." 14.99 "https://example.com/boxing14.jpg" "BOXING"
create_product "BoxerPro Training Bag" "Durable, heavy training bag for boxing workouts." 79.99 "https://example.com/boxing15.jpg" "BOXING"
create_product "SweatShield Boxing Headgear" "Protective headgear for boxing, offering coverage and comfort." 49.99 "https://example.com/boxing16.jpg" "BOXING"
create_product "FightMaster Boxing Shoes" "Lightweight boxing shoes with strong grip for optimal performance." 79.99 "https://example.com/boxing17.jpg" "BOXING"
create_product "IronFist Hand Wraps" "Comfortable, protective hand wraps for boxing training and matches." 9.99 "https://example.com/boxing18.jpg" "BOXING"
create_product "KnockOut Boxing Shorts" "Breathable, loose fitting boxing shorts for comfort and mobility." 29.99 "https://example.com/boxing19.jpg" "BOXING"
create_product "Endurance Speed Bag" "Small, rapid rebound speed bag for enhancing boxing speed and accuracy." 39.99 "https://example.com/boxing20.jpg" "BOXING"

# Additional RUNNING products
create_product "LightStep Running Shoes" "Lightweight, cushioned running shoes for superior comfort and performance." 99.99 "https://example.com/running11.jpg" "RUNNING"
create_product "HydraQuench Running Water Bottle" "Easy-grip water bottle for staying hydrated during runs." 14.99 "https://example.com/running12.jpg" "RUNNING"
create_product "SpeedTrack Fitness Tracker" "Accurate fitness tracker to monitor your running distance, speed, heart rate, and more." 59.99 "https://example.com/running13.jpg" "RUNNING"
create_product "RunSafe Reflective Vest" "High-visibility reflective vest for safe running in low light conditions." 19.99 "https://example.com/running14.jpg" "RUNNING"
create_product "StrideComfort Running Socks" "Breathable, moisture-wicking running socks to keep your feet dry and comfortable." 14.99 "https://example.com/running15.jpg" "RUNNING"
create_product "BreezeFit Running Shorts" "Lightweight, quick-drying running shorts with built-in briefs for comfort." 29.99 "https://example.com/running16.jpg" "RUNNING"
create_product "SunShield Running Cap" "Protective running cap with UV protection and a sweatband for hot, sunny days." 14.99 "https://example.com/running17.jpg" "RUNNING"
create_product "EasyCarry Running Belt" "Adjustable running belt for carrying your phone, keys, and other essentials." 19.99 "https://example.com/running18.jpg" "RUNNING"
create_product "GlideSmooth Anti-Chafe Balm" "Skin protective balm to prevent chafing and blistering during long runs." 9.99 "https://example.com/running19.jpg" "RUNNING"
create_product "EnduraMax Energy Gels" "Pack of 20 energy gels for quick, easy energy during endurance runs." 24.99 "https://example.com/running20.jpg" "RUNNING"

# Additional TENNIS products
create_product "ServeAce Tennis Racket" "Lightweight, durable tennis racket for players of all levels." 79.99 "https://example.com/tennis11.jpg" "TENNIS"
create_product "MatchPoint Tennis Balls" "Pack of 3 professional-grade tennis balls for training or matches." 4.99 "https://example.com/tennis12.jpg" "TENNIS"
create_product "NetMaster Portable Tennis Net" "Portable, easy-to-assemble tennis net for practice anywhere." 59.99 "https://example.com/tennis13.jpg" "TENNIS"
create_product "QuickDry Tennis Headband" "Absorbent, quick-drying headband for managing sweat during tennis matches." 9.99 "https://example.com/tennis14.jpg" "TENNIS"
create_product "GripSure Racket Overgrip" "Pack of 3 overgrips for superior racket handle grip and comfort." 6.99 "https://example.com/tennis15.jpg" "TENNIS"
create_product "CourtKing Tennis Shoes" "Sturdy, breathable tennis shoes with strong grip for court performance." 79.99 "https://example.com/tennis16.jpg" "TENNIS"
create_product "SwingTrain Tennis Trainer" "Solo tennis training tool for practicing swing and accuracy." 29.99 "https://example.com/tennis17.jpg" "TENNIS"
create_product "ProVolley Tennis Shorts" "Comfortable, loose-fit tennis shorts with pockets for ball storage." 29.99 "https://example.com/tennis18.jpg" "TENNIS"
create_product "ArmGuard Elbow Support" "Supportive elbow brace for preventing tennis elbow injuries." 19.99 "https://example.com/tennis19.jpg" "TENNIS"
create_product "HydraSport Sports Drink" "Electrolyte-packed sports drink for hydration during intense tennis matches." 1.99 "https://example.com/tennis20.jpg" "TENNIS"

# Additional CAMPING products
create_product "CampMaster Tent" "Easy-to-set-up, durable tent for your camping adventures. Fits four people." 99.99 "https://example.com/camping11.jpg" "CAMPING"
create_product "SleepComfort Camping Mattress" "Inflatable, comfortable camping mattress for a good night's sleep in the outdoors." 39.99 "https://example.com/camping12.jpg" "CAMPING"
create_product "OutdoorChef Portable Grill" "Compact, easy-to-use portable grill for your camping cookouts." 49.99 "https://example.com/camping13.jpg" "CAMPING"
create_product "NightGuide Headlamp" "Bright, hands-free headlamp for nighttime camping activities." 19.99 "https://example.com/camping14.jpg" "CAMPING"
create_product "FireSpark Fire Starter Kit" "Reliable fire starter kit for camping. Includes flint and steel, tinder, and instructions." 14.99 "https://example.com/camping15.jpg" "CAMPING"
create_product "TrailBlazer Camping Backpack" "Spacious, durable camping backpack with multiple compartments." 69.99 "https://example.com/camping16.jpg" "CAMPING"
create_product "HydraQuench Water Filter" "Portable water filter for safe drinking water during camping trips." 29.99 "https://example.com/camping17.jpg" "CAMPING"
create_product "NatureGuide Binoculars" "High-definition binoculars for wildlife viewing during camping." 49.99 "https://example.com/camping18.jpg" "CAMPING"
create_product "InsectShield Bug Spray" "Effective bug spray to protect against mosquitoes and other insects during camping." 9.99 "https://example.com/camping19.jpg" "CAMPING"
create_product "CampComfort Camping Chair" "Foldable, comfortable camping chair with a cup holder." 29.99 "https://example.com/camping20.jpg" "CAMPING"

# Additional SWIMMING products
create_product "AquaSpeed Swimming Goggles" "Anti-fog, UV-protective swimming goggles for clear underwater vision." 19.99 "https://example.com/swimming11.jpg" "SWIMMING"
create_product "WaterPro Swim Cap" "High-quality silicone swim cap for protecting your hair in the water." 9.99 "https://example.com/swimming12.jpg" "SWIMMING"
create_product "SwimMaster Swimsuit" "Chlorine-resistant swimsuit with optimal stretch for competitive swimming." 39.99 "https://example.com/swimming13.jpg" "SWIMMING"
create_product "WaveRider Kickboard" "Lightweight, buoyant kickboard for swimming training and workouts." 14.99 "https://example.com/swimming14.jpg" "SWIMMING"
create_product "DeepDive Ear Plugs" "Comfortable, effective ear plugs for preventing water entry while swimming." 4.99 "https://example.com/swimming15.jpg" "SWIMMING"
create_product "AquaFit Swimming Fins" "Professional-grade swimming fins for power and speed training." 29.99 "https://example.com/swimming16.jpg" "SWIMMING"
create_product "HydroTrack Water Bottle" "Non-spill water bottle for staying hydrated during swimming workouts." 11.99 "https://example.com/swimming17.jpg" "SWIMMING"
create_product "TideTurner Swimming Trunks" "Comfortable, quick-drying swimming trunks for men." 19.99 "https://example.com/swimming18.jpg" "SWIMMING"
create_product "OceanView Snorkel Set" "Professional snorkel set with a clear-view mask and easy-breath tube." 49.99 "https://example.com/swimming19.jpg" "SWIMMING"
create_product "LapPro Swim Stopwatch" "Accurate, waterproof stopwatch for timing your swim laps." 24.99 "https://example.com/swimming20.jpg" "SWIMMING"

