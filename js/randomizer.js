/* ==================================================
   RANDOMIZER.JS

   File chịu trách nhiệm:

   1. Lấy danh sách món ăn
   2. Random món
   3. Không cho món đã xuất hiện lặp lại
   4. Quản lý danh sách món đã sử dụng

   File này KHÔNG chịu trách nhiệm:
   - Hiển thị giao diện
   - Xử lý button
   - Animation
   - Filter UI

   Những phần đó sẽ do file khác xử lý.
================================================== */


/* ==================================================
   GET AVAILABLE FOODS

   Trả về những món chưa từng xuất hiện
   trong lượt chơi hiện tại.
================================================== */

function getAvailableFoods() {
    return foods.filter(function (food) {

        const notUsed =
            !appState.usedFoodIds.includes(food.id);

        const matchesFilter =
            foodMatchesAppStateFilters(food);

        return notUsed && matchesFilter;
    });
}

function foodMatchesAppStateFilters(food) {

    for (const filterKey in appState.selectedFilters) {

        const selectedValue =
            appState.selectedFilters[filterKey];


        if (selectedValue === "all") {
            continue;
        }


        if (
            food.filters[filterKey]
            !== selectedValue
        ) {
            return false;
        }

    }


    return true;
}

/* ==================================================
   RANDOM FOOD

   Chọn ngẫu nhiên một món chưa xuất hiện.
================================================== */

function randomFood() {

    // Lấy những món chưa sử dụng
    const availableFoods = getAvailableFoods();


    /* ==================================================
       KIỂM TRA ĐÃ HẾT MÓN HAY CHƯA
    ================================================== */

    if (availableFoods.length === 0) {

        console.log("Đã hết món!");

        return null;

    }


    /* ==================================================
       RANDOM INDEX
    ================================================== */

    const randomIndex = Math.floor(
        Math.random() * availableFoods.length
    );


    /* ==================================================
       LẤY MÓN
    ================================================== */

    const selectedFood = availableFoods[randomIndex];


    /* ==================================================
       LƯU MÓN ĐÃ SỬ DỤNG
    ================================================== */

    appState.usedFoodIds.push(
        selectedFood.id
    );


    /* ==================================================
       LƯU MÓN HIỆN TẠI
    ================================================== */

    appState.currentFood = selectedFood;


    /* ==================================================
       DEBUG

       Tạm thời để chúng ta kiểm tra
       trong Console.
    ================================================== */

    console.log(
        "Món được chọn:",
        selectedFood.name
    );

    console.log(
        "Các món đã xuất hiện:",
        appState.usedFoodIds
    );


    return selectedFood;

}