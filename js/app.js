/* ==================================================
   APP.JS

   File điều khiển chính của website.

   Nhiệm vụ:

   - Quản lý trạng thái website
   - Điều khiển chuyển màn hình
   - Xử lý button
   - Hiển thị món ăn lên giao diện

   Logic random được tách sang:
   randomizer.js
================================================== */


/* ==================================================
   APP STATE
================================================== */

const appState = {

    // Màn hình hiện tại
    currentScreen: "HOME",

    // Filter người dùng đang chọn
    selectedFilters: {
        type: "all",
        texture: "all",
        taste: "all",
        meal: "all",
        country: "all"
    },

    // Những món đã xuất hiện
    usedFoodIds: [],

    // Món hiện tại
    currentFood: null,

    isSpinning: false

};


/* ==================================================
   SCREEN ELEMENTS
================================================== */


/* HOME */

const screenHome = document.getElementById(
    "screen-home"
);


/* RESULT */

const screenResult = document.getElementById(
    "screen-result"
);


/* ==================================================
   BUTTON ELEMENTS
================================================== */


/* HOME → QUAY NGAY */

const buttonSpin = document.getElementById(
    "btn-spin"
);


/* RESULT → TUI ĐỔI Ý */

const buttonChangeFood = document.getElementById(
    "btn-change-food"
);


/* RESULT → HOME */

const buttonBackHome = document.getElementById(
    "btn-back-home"
);

/* HOME → FILTER */

const buttonFilter = document.getElementById(
    "btn-filter"
);


/* ==================================================
   RESULT ELEMENTS
================================================== */


/* Food Image */

const resultFoodImage = document.getElementById(
    "result-food-image"
);


/* Food Name */

const resultFoodName = document.getElementById(
    "result-food-name"
);

/* No Food Popup */

const noFoodPopup =
    document.getElementById("no-food-popup");

const noFoodBackButton =
    document.getElementById("no-food-back");


/* ==================================================
   SCREEN MANAGEMENT
================================================== */


/**
 * Hiển thị HOME
 */

function showHomeScreen() {

    screenHome.classList.remove("hidden");

    screenResult.classList.add("hidden");

    appState.currentScreen = "HOME";

}


/**
 * Hiển thị RESULT
 */

function showResultScreen() {

    screenHome.classList.add("hidden");

    screenResult.classList.remove("hidden");

    appState.currentScreen = "RESULT";

}

/**
 * Hiển thị NO FOOD POPUP
 */

function showNoFoodPopup() {

    noFoodPopup.classList.remove("hidden");

}

/**
 * Ẩn NO FOOD POPUP
 */

function hideNoFoodPopup() {

    noFoodPopup.classList.add("hidden");

}


/* ==================================================
   DISPLAY FOOD
================================================== */


/**
 * Hiển thị món ăn lên Result Card
 *
 * @param {Object} food
 */

function displayFood(food) {
    if (!food) {
        console.log("Không có món ăn để hiển thị.");
        return;
    }

    // Xóa animation cũ
    resultFoodImage.classList.remove("reveal-from-center");

    // Ép trình duyệt reset animation
    void resultFoodImage.offsetWidth;

    resultFoodImage.src = `assets/foods/${food.id}.jpg`;
    resultFoodImage.alt = food.name;
    resultFoodName.textContent = food.name;

    // Chạy hiệu ứng ảnh xuất hiện từ tâm
    resultFoodImage.classList.add("reveal-from-center");

    console.log("Hiển thị món:", food.name);
}


/* ==================================================
   START RANDOM
================================================== */


/**
 * Random món đầu tiên
 */

function startRandom() {

    // Nếu đang quay thì không cho chạy thêm
    if (appState.isSpinning) {
        return;
    }

    appState.isSpinning = true;

    const homePlaceholder =
        document.getElementById("home-result-placeholder");

    // Bắt đầu hiệu ứng dấu ?
    homePlaceholder.classList.add("fast-spin");

    // Khóa 2 nút
    buttonSpin.disabled = true;
    buttonFilter.disabled = true;

    setTimeout(function () {

        // Kết thúc hiệu ứng dấu ?
        homePlaceholder.classList.remove("fast-spin");

        const selectedFood = randomFood();

        if (!selectedFood) {
            console.log("Không còn món nào.");

            appState.isSpinning = false;

            buttonSpin.disabled = false;
            buttonFilter.disabled = false;

            showResultScreen();
            showNoFoodPopup();

            return;
        }

        displayFood(selectedFood);
        showResultScreen();

        // Mở khóa
        appState.isSpinning = false;

        buttonSpin.disabled = false;
        buttonFilter.disabled = false;

    }, 1500);
}


/* ==================================================
   BUTTON: QUAY NGAY
================================================== */

buttonSpin.addEventListener(
    "click",
    function () {

        console.log(
            "Quay ngay được bấm!"
        );

        startRandom();

    }
);

/* ==================================================
   BUTTON: KÉN ĂN
================================================== */

buttonFilter.addEventListener(
    "click",
    function () {

        console.log(
            "Kén ăn được bấm!"
        );

        openFilter();

    }
);

/* ==================================================
   BUTTON: TUI ĐỔI Ý
================================================== */

buttonChangeFood.addEventListener("click", function () {

    console.log("Tui đổi ý được bấm!");


    const selectedFood = randomFood();


    if (!selectedFood) {

        console.log("Đã hết món để đổi.");

        showNoFoodPopup();

        return;

    }


    displayFood(selectedFood);

});


/* ==================================================
   BUTTON: VỀ LẠI
================================================== */

buttonBackHome.addEventListener(
    "click",
    function () {

        console.log(
            "Về lại được bấm!"
        );

        hideNoFoodPopup();


        /* ==================================================
           RESET LƯỢT CHƠI
        ================================================== */

        appState.usedFoodIds = [];

        appState.currentFood = null;


        /* ==================================================
           RESET FILTER

           Filter thật sự sẽ được xây ở bước sau.
        ================================================== */

        appState.selectedFilters = {};


         /* ==================================================
           RESET FILTER STATE
        ================================================== */
        resetFilters();


        /* ==================================================
           VỀ HOME
        ================================================== */

        showHomeScreen();

    }
);


/* ==================================================
   APP INITIALIZATION
================================================== */

function initApp() {

    console.log(
        "================================="
    );

    console.log(
        "Food Randomizer started!"
    );

    console.log(
        "Total foods:",
        foods.length
    );

    console.log(
        "Current screen:",
        appState.currentScreen
    );

    console.log(
        "================================="
    );

}

noFoodBackButton.addEventListener(
    "click",
    function () {

        hideNoFoodPopup();

        appState.usedFoodIds = [];
        appState.currentFood = null;
        appState.selectedFilters = {};

        resetFilters();

        showHomeScreen();

    }
);

/* ==================================================
   START APP
================================================== */

initApp();