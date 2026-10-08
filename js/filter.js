
/* ================================
   FILTER CONFIGURATION
================================ */

const filterConfig = {
    type: {
        label: "Bình thường / Hẹn hò",
        defaultLabel: "Bình thường / Hẹn hò",
        options: [
            { value: "all", label: "Bình thường / Hẹn hò" },
            { value: "bình thường", label: "Bình thường" },
            { value: "hẹn hò", label: "Hẹn hò" }
        ]
    },

    texture: {
        label: "Khô / Nước",
        defaultLabel: "Khô / Nước",
        options: [
            { value: "all", label: "Khô / Nước" },
            { value: "khô", label: "Khô" },
            { value: "nước", label: "Nước" }
        ]
    },

    taste: {
        label: "Mặn / Chay",
        defaultLabel: "Mặn / Chay",
        options: [
            { value: "all", label: "Mặn / Chay" },
            { value: "mặn", label: "Mặn" },
            { value: "chay", label: "Chay" }
        ]
    },

    meal: {
        label: "Ăn vặt / Ăn no",
        defaultLabel: "Ăn vặt / Ăn no",
        options: [
            { value: "all", label: "Ăn vặt / Ăn no" },
            { value: "ăn vặt", label: "Ăn vặt" },
            { value: "ăn no", label: "Ăn no" }
        ]
    },

    country: {
        label: "Quốc gia",
        defaultLabel: "Quốc gia",
        options: [
            { value: "all", label: "Quốc gia" },
            { value: "Việt Nam", label: "Việt Nam" },
            { value: "Ý", label: "Ý" },
            { value: "Nhật Bản", label: "Nhật Bản" },
            { value: "Hàn Quốc", label: "Hàn Quốc" },
            { value: "Thái Lan", label: "Thái Lan" },
            { value: "Ấn Độ", label: "Ấn Độ" },
            { value: "Mỹ", label: "Mỹ" }
        ]
    }
};

/* ================================
   FILTER STATE
================================ */

let filterState = {
    type: "all",
    texture: "all",
    taste: "all",
    meal: "all",
    country: "all"
};


/* ================================
   FILTER ELEMENTS
================================ */

const filterOverlay = document.getElementById("filter-overlay");
const filterItems = document.querySelectorAll(".filter-item");
const filterOkButton = document.getElementById("filter-ok");


/* ================================
   OPEN FILTER
================================ */

function openFilter() {
    filterOverlay.classList.remove("hidden");

    updateFilterButtons();

    console.log("Mở Kén ăn");
}


/* ================================
   CLOSE FILTER
================================ */

function closeFilter() {
    filterOverlay.classList.add("hidden");

    closeAllDropdowns();

    console.log("Đóng Kén ăn");
}


/* ================================
   CLOSE ALL DROPDOWNS
================================ */

function closeAllDropdowns() {
    const dropdowns =
        document.querySelectorAll(".filter-dropdown");

    dropdowns.forEach(function (dropdown) {
        dropdown.classList.add("hidden");
    });

    const buttons =
        document.querySelectorAll(".filter-select-button");

    buttons.forEach(function (button) {
        button.classList.remove("filter-open");
    });
}


/* ================================
   OPEN ONE DROPDOWN
================================ */

function toggleDropdown(item) {
    const dropdown = item.querySelector(".filter-dropdown");
    const button = item.querySelector(".filter-select-button");

    const isCurrentlyOpen =
        !dropdown.classList.contains("hidden");

    closeAllDropdowns();

    if (!isCurrentlyOpen) {
        dropdown.classList.remove("hidden");
        button.classList.add("filter-open");
    }
}


/* ================================
   UPDATE BUTTON TEXT
================================ */

function updateFilterButtons() {
    Object.keys(filterConfig).forEach(function (filterKey) {

        const button = document.querySelector(
            `[data-filter="${filterKey}"] .filter-select-button`
        );

        if (!button) return;

        const selectedValue = filterState[filterKey];

        const selectedOption =
            filterConfig[filterKey].options.find(
                function (option) {
                    return option.value === selectedValue;
                }
            );

        if (selectedOption) {
            button.textContent = selectedOption.label;
        }

        /* ================================
           FILTER ICON STATE
        ================================= */

        if (selectedValue === "all") {
            button.classList.remove("filter-selected");
        } else {
            button.classList.add("filter-selected");
}
    });
}


/* ================================
   SELECT FILTER OPTION
================================ */

function selectFilterOption(filterKey, value) {
    filterState[filterKey] = value;

    updateFilterButtons();

    closeAllDropdowns();

    console.log(
        "Filter:",
        filterKey,
        "=",
        value
    );
}


/* ================================
   CHECK FOOD AGAINST FILTERS
================================ */

function foodMatchesFilters(food) {
    for (const filterKey in filterState) {
        const selectedValue = filterState[filterKey];

        if (selectedValue === "all") {
            continue;
        }

        if (food.filters[filterKey] !== selectedValue) {
            return false;
        }
    }

    return true;
}


/* ================================
   GET FILTERED FOODS
================================ */

function getFilteredFoods() {
    return foods.filter(function (food) {
        return foodMatchesFilters(food);
    });
}


/* ================================
   APPLY FILTERS TO APP STATE
================================ */

function applyFilters() {
    appState.selectedFilters = {
        ...filterState
    };

    console.log(
        "Các filter hiện tại:",
        appState.selectedFilters
    );

    console.log(
        "Số món phù hợp:",
        getFilteredFoods().length
    );

    closeFilter();
}


/* ================================
   RESET FILTERS
================================ */

function resetFilters() {
    filterState = {
        type: "all",
        texture: "all",
        taste: "all",
        meal: "all",
        country: "all"
    };

    appState.selectedFilters = {
        type: "all",
        texture: "all",
        taste: "all",
        meal: "all",
        country: "all"
    };

    updateFilterButtons();

    console.log("Đã reset filter");
}


/* ================================
   EVENT: FILTER ITEMS
================================ */

filterItems.forEach(function (item) {

    const button = item.querySelector(
        ".filter-select-button"
    );

    button.addEventListener("click", function () {
        toggleDropdown(item);
    });


    const options = item.querySelectorAll(
        ".filter-option"
    );

    options.forEach(function (option) {

        option.addEventListener("click", function () {

            const filterKey = item.dataset.filter;
            const value = option.dataset.value;

            selectFilterOption(
                filterKey,
                value
            );
        });

    });

});


/* ================================
   EVENT: OK
================================ */

filterOkButton.addEventListener(
    "click",
    function () {
        applyFilters();
    }
);