#!/bin/bash

# Array of products with their categories
products=(
"Alpine Trekker Hiking Boots HIKING"
"Mountaineer's Hiking Backpack HIKING"
"Trek Support Hiking Poles HIKING"
"Outdoor Explorer's Camping Tent HIKING"
"Rugged Trail Hiking Socks HIKING"
"Hiker's Hydration Pack HIKING"
"PeakComfort Sleeping Bag HIKING"
"ProTrek Hiking Shorts HIKING"
"SunShield Hiker's Hat HIKING"
"TrailBlazer GPS Tracker HIKING"
"CourtMaster Basketball Shoes BASKETBALL"
"HoopShot Basketball BASKETBALL"
"SlamDunk Basketball Jersey BASKETBALL"
"BasketPro Ankle Support BASKETBALL"
"ScoreKing Basketball Shorts BASKETBALL"
"QuickDribble Basketball Gloves BASKETBALL"
"NetMaster Basketball Net BASKETBALL"
"JumpBoost Knee Pads BASKETBALL"
"SwishMaster Shooting Sleeves BASKETBALL"
"CourtVision Sports Glasses BASKETBALL"
"PunchKing Boxing Gloves BOXING"
"RingMaster Boxing Shoes BOXING"
"KnockOut Boxing Headgear BOXING"
"ChampGuard Mouthguard BOXING"
"StrikeForce Punching Bag BOXING"
"PowerPunch Boxing Pads BOXING"
"RingStar Boxing Shorts BOXING"
"FightFast Speed Bag BOXING"
"JabMaster Boxing Robe BOXING"
"GuardPro Boxing Hand Wraps BOXING"
"RunFast Pro Running Shoes RUNNING"
"Marathon Master Running Shorts RUNNING"
"TrackStar Running T-Shirt RUNNING"
"StridePro Running Socks RUNNING"
"HydraPack Running Water Bottle RUNNING"
"SpeedTrack Running Watch RUNNING"
"WindShield Running Jacket RUNNING"
"Energize Energy Gel Packs RUNNING"
"ComfortFit Running Headband RUNNING"
"NightVision Reflective Vest RUNNING"
"MatchPoint Pro Tennis Racket TENNIS"
"CourtMaster Tennis Shoes TENNIS"
"SwingPro Tennis Balls TENNIS"
"AceServe Tennis Shorts TENNIS"
"NetMaster Tennis Net TENNIS"
"TennisPro Elbow Brace TENNIS"
"GrandSlam Tennis Bag TENNIS"
"VolleyMaster Tennis Visor TENNIS"
"GripMax Racket Grips TENNIS"
"TennisPro Training Cones TENNIS"
"CampKing 2-Person Tent CAMPING"
"OutdoorChef Camping Stove CAMPING"
"StarGaze Sleeping Bag CAMPING"
"TravelLight Camping Backpack CAMPING"
"CampFire Portable Grill CAMPING"
"MountainSpring Camping Water Filter CAMPING"
"NightGuide Headlamp CAMPING"
"ComfyRest Camping Pillow CAMPING"
"OutdoorFirst Aid Kit CAMPING"
"NatureView Binoculars CAMPING"
"WaveRider Swimming Goggles SWIMMING"
"AquaSpeed Swim Cap SWIMMING"
"WaterPro Swim Fins SWIMMING"
"TideMaster Swimming Trunks SWIMMING"
"SplashFun Water Noodles SWIMMING"
"SeaView Snorkel Set SWIMMING"
"Guardian Life Vest SWIMMING"
"HydroBoost Swimming Gloves SWIMMING"
"SunGuard Swim Shirt SWIMMING"
"AquaTone Swimming Earplugs SWIMMING"
"TrekMaster Binoculars HIKING"
"MountainShield Sunscreen HIKING"
"EcoTrail Portable Water Filter HIKING"
"Wilderness Multi-tool HIKING"
"FireSpark Magnesium Fire Starter HIKING"
"TrailComfort Insect Repellent HIKING"
"AllWeather Hiking Pants HIKING"
"CampBuddy Portable Cookware Set HIKING"
"StarGaze Portable Tent HIKING"
"EcoHike Recyclable Waste Bags HIKING"
"HoopsKing Basketball Hoop BASKETBALL"
"CoachMaster Whistle BASKETBALL"
"SportFlex Ankle Support BASKETBALL"
"TeamStar Basketball Jersey BASKETBALL"
"SlamDunk Basketball Net BASKETBALL"
"HydraQuench Water Bottle BASKETBALL"
"PlayMaker Basketball Shorts BASKETBALL"
"WristMaster Sweatbands BASKETBALL"
"ProCoach Clipboard BASKETBALL"
"BallPump Portable Air Pump BASKETBALL"
"ProPunch Boxing Gloves BOXING"
"RingMaster Boxing Ring BOXING"
"EverFit Mouth Guard BOXING"
"SpeedKing Jump Rope BOXING"
"BoxerPro Training Bag BOXING"
"SweatShield Boxing Headgear BOXING"
"FightMaster Boxing Shoes BOXING"
"IronFist Hand Wraps BOXING"
"KnockOut Boxing Shorts BOXING"
"Endurance Speed Bag BOXING"
"LightStep Running Shoes RUNNING"
"HydraQuench Running Water Bottle RUNNING"
"SpeedTrack Fitness Tracker RUNNING"
"RunSafe Reflective Vest RUNNING"
"StrideComfort Running Socks RUNNING"
"BreezeFit Running Shorts RUNNING"
"SunShield Running Cap RUNNING"
"EasyCarry Running Belt RUNNING"
"GlideSmooth Anti-Chafe Balm RUNNING"
"EnduraMax Energy Gels RUNNING"
"ServeAce Tennis Racket TENNIS"
"MatchPoint Tennis Balls TENNIS"
"NetMaster Portable Tennis Net TENNIS"
"QuickDry Tennis Headband TENNIS"
"GripSure Racket Overgrip TENNIS"
"CourtKing Tennis Shoes TENNIS"
"SwingTrain Tennis Trainer TENNIS"
"ProVolley Tennis Shorts TENNIS"
"ArmGuard Elbow Support TENNIS"
"HydraSport Sports Drink TENNIS"
"CampMaster Tent CAMPING"
"SleepComfort Camping Mattress CAMPING"
"OutdoorChef Portable Grill CAMPING"
"NightGuide Headlamp CAMPING"
"FireSpark Fire Starter Kit CAMPING"
"TrailBlazer Camping Backpack CAMPING"
"HydraQuench Water Filter CAMPING"
"NatureGuide Binoculars CAMPING"
"InsectShield Bug Spray CAMPING"
"CampComfort Camping Chair CAMPING"
"AquaSpeed Swimming Goggles SWIMMING"
"WaterPro Swim Cap SWIMMING"
"SwimMaster Swimsuit SWIMMING"
"WaveRider Kickboard SWIMMING"
"DeepDive Ear Plugs SWIMMING"
"AquaFit Swimming Fins SWIMMING"
"HydroTrack Water Bottle SWIMMING"
"TideTurner Swimming Trunks SWIMMING"
"OceanView Snorkel Set SWIMMING"
"LapPro Swim Stopwatch SWIMMING"
)

# Loop through the products and fetch the corresponding image
for product in "${products[@]}"; do
  # Split the product string into name and category
  product_name="${product% *}"
  category="${product##* }"

  # Convert product name to lowercase and replace spaces with dashes
  product_slug=$(echo "$product_name" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')

  # Fetch the image using wget and save with the product name
  wget -O "$product_name.jpg" "https://image.pollinations.ai/prompt/$product_slug,$category,%20hyper-realistic,%20ecommerce,%20presentation,%20object"
done
