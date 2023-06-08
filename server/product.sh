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
create_product "Alpine Trek Boots" "Experience the ultimate comfort and durability with our Alpine Trek Boots. Perfect for long hikes and rough terrains." 120.99 "https://example.com/hiking1.jpg" "HIKING"
create_product "Mountain Explorer Backpack" "Our Mountain Explorer Backpack is your reliable companion for any hiking adventure. With spacious compartments and sturdy design." 89.99 "https://example.com/hiking2.jpg" "HIKING"
create_product "TrailBlazer Hiking Stick" "The TrailBlazer Hiking Stick provides exceptional support for all your hikes. Lightweight yet robust, it's a must-have for any hiking enthusiast." 45.99 "https://example.com/hiking3.jpg" "HIKING"

# Basketball products
create_product "HoopsMaster Basketball Shoes" "Step up your game with the HoopsMaster Basketball Shoes. They provide great ankle support and have excellent grip for those swift moves on the court." 110.99 "https://example.com/basketball1.jpg" "BASKETBALL"
create_product "DunkPro Basketball" "The DunkPro Basketball is all you need for a great game. Perfect grip and excellent bounce make it ideal for all your matches." 29.99 "https://example.com/basketball2.jpg" "BASKETBALL"
create_product "SlamDunk Basketball Jersey" "Our SlamDunk Basketball Jersey is made from breathable fabric, ensuring comfort and freedom of movement on the court." 49.99 "https://example.com/basketball3.jpg" "BASKETBALL"

# Boxing products
create_product "PunchLine Boxing Gloves" "The PunchLine Boxing Gloves offer superior hand protection without compromising on comfort. Ideal for both training and competitions." 59.99 "https://example.com/boxing1.jpg" "BOXING"
create_product "Knockout Boxing Shorts" "Stay comfortable during your boxing workout with Knockout Boxing Shorts. Made of lightweight, breathable fabric." 39.99 "https://example.com/boxing2.jpg" "BOXING"
create_product "RingMaster Punching Bag" "The RingMaster Punching Bag is designed to withstand heavy punches. It's the perfect training tool for enhancing your boxing skills." 79.99 "https://example.com/boxing3.jpg" "BOXING"

# Running products
create_product "SwiftStride Running Shoes" "Discover the joy of running with SwiftStride Running Shoes. Their cushioned soles reduce impact and provide excellent support for your feet." 85.99 "https://example.com/running1.jpg" "RUNNING"
create_product "TrackStar Running Tights" "Stay comfortable on your run with the TrackStar Running Tights. Their sweat-wicking fabric keeps you dry and comfortable." 55.99 "https://example.com/running2.jpg" "RUNNING"
create_product "Marathoner Hydration Pack" "Stay hydrated on the move with the Marathoner Hydration Pack. Its lightweight design makes it ideal for long-distance running." 69.99 "https://example.com/running3.jpg" "RUNNING"

# Tennis products
create_product "CourtKing Tennis Racket" "Take control of your game with the CourtKing Tennis Racket. Its lightweight design and large sweet spot make every shot count." 120.99 "https://example.com/tennis1.jpg" "TENNIS"
create_product "MatchPoint Tennis Balls" "The MatchPoint Tennis Balls offer consistent bounce and spin. Perfect for practice or competitive play." 19.99 "https://example.com/tennis2.jpg" "TENNIS"
create_product "GrandSlam Tennis Shoes" "Stay swift and agile on the court with GrandSlam Tennis Shoes. They offer excellent grip on all court surfaces." 89.99 "https://example.com/tennis3.jpg" "TENNIS"

# Camping products
create_product "CampMaster Tent" "The CampMaster Tent offers a comfortable shelter for your outdoor adventures. Easy to set up and resistant to weather." 130.99 "https://example.com/camping1.jpg" "CAMPING"
create_product "TrailChef Camping Stove" "Cook delicious meals on the go with the TrailChef Camping Stove. Compact, lightweight, and highly efficient." 65.99 "https://example.com/camping2.jpg" "CAMPING"
create_product "StarGazer Sleeping Bag" "Stay warm during your camping nights with the StarGazer Sleeping Bag. Lightweight and portable, yet cozy and warm." 75.99 "https://example.com/camping3.jpg" "CAMPING"

# Swimming products
create_product "AquaSpeed Swim Goggles" "Enhance your underwater vision with AquaSpeed Swim Goggles. Anti-fog and UV protection features for clear and safe swimming." 29.99 "https://example.com/swimming1.jpg" "SWIMMING"
create_product "WaveRider Swim Cap" "The WaveRider Swim Cap helps reduce drag and protect your hair from chlorine. Comfortable fit for all swimmers." 15.99 "https://example.com/swimming2.jpg" "SWIMMING"
create_product "MarineFlow Swimsuit" "The MarineFlow Swimsuit offers a comfortable fit and excellent freedom of movement. Made from durable, quick-dry fabric." 49.99 "https://example.com/swimming3.jpg" "SWIMMING"

