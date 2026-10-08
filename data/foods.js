const foods = [
    {
        id: 1,
        name: "Bánh xèo",
        filters: {
            type: "bình thường",
            texture: "khô",
            taste: "mặn",
            meal: "ăn no",
            country: "Việt Nam"
        }
    },
    {
        id: 2,
        name: "Bánh căn",
        filters: {
            type: "bình thường",
            texture: "khô",
            taste: "mặn",
            meal: "ăn no",
            country: "Việt Nam"
        }
    },
    {
        id: 3,
        name: "Bánh hỏi lòng heo",
        filters: {
            type: "bình thường",
            texture: "khô",
            taste: "mặn",
            meal: "ăn no",
            country: "Việt Nam"
        }
    },
    {
        id: 4,
        name: "Bánh cuốn",
        filters: {
            type: "bình thường",
            texture: "khô",
            taste: "mặn",
            meal: "ăn no",
            country: "Việt Nam"
        }
    },
    {
        id: 5,
        name: "Bánh ướt",
        filters: {
            type: "bình thường",
            texture: "khô",
            taste: "mặn",
            meal: "ăn no",
            country: "Việt Nam"
        }
    },
    {
        id: 6,
        name: "Bánh bèo",
        filters: {
            type: "bình thường",
            texture: "khô",
            taste: "mặn",
            meal: "ăn vặt",
            country: "Việt Nam"
        }
    },
    {
        id: 7,
        name: "Bánh bột lọc",
        filters: {
            type: "bình thường",
            texture: "khô",
            taste: "mặn",
            meal: "ăn vặt",
            country: "Việt Nam"
        }
    },
    {
        id: 8,
        name: "Bánh khọt",
        filters: {
            type: "bình thường",
            texture: "khô",
            taste: "mặn",
            meal: "ăn vặt",
            country: "Việt Nam"
        }
    },
    {
        id: 9,
        name: "Bún bò Huế",
        filters: {
            type: "bình thường",
            texture: "nước",
            taste: "mặn",
            meal: "ăn no",
            country: "Việt Nam"
        }
    },
    {
        id: 10,
        name: "Bún chả",
        filters: {
            type: "bình thường",
            texture: "khô",
            taste: "mặn",
            meal: "ăn no",
            country: "Việt Nam"
        }
    },
    {
        id: 11,
        name: "Bún thịt nướng",
        filters: {
            type: "bình thường",
            texture: "khô",
            taste: "mặn",
            meal: "ăn no",
            country: "Việt Nam"
        }
    },
    {
        id: 12,
        name: "Bún đậu mắm tôm",
        filters: {
            type: "bình thường",
            texture: "khô",
            taste: "mặn",
            meal: "ăn no",
            country: "Việt Nam"
        }
    },
    {
        id: 13,
        name: "Bún riêu",
        filters: {
            type: "bình thường",
            texture: "nước",
            taste: "mặn",
            meal: "ăn no",
            country: "Việt Nam"
        }
    },
    {
        id: 14,
        name: "Bún mắm",
        filters: {
            type: "bình thường",
            texture: "nước",
            taste: "mặn",
            meal: "ăn no",
            country: "Việt Nam"
        }
    },
    {
        id: 15,
        name: "Bún cá",
        filters: {
            type: "bình thường",
            texture: "nước",
            taste: "mặn",
            meal: "ăn no",
            country: "Việt Nam"
        }
    },
    {
        id: 16,
        name: "Phở bò",
        filters: {
            type: "bình thường",
            texture: "nước",
            taste: "mặn",
            meal: "ăn no",
            country: "Việt Nam"
        }
    },
    {
        id: 17,
        name: "Phở gà",
        filters: {
            type: "bình thường",
            texture: "nước",
            taste: "mặn",
            meal: "ăn no",
            country: "Việt Nam"
        }
    },
    {
        id: 18,
        name: "Hủ tiếu Nam Vang",
        filters: {
            type: "bình thường",
            texture: "nước",
            taste: "mặn",
            meal: "ăn no",
            country: "Việt Nam"
        }
    },
    {
        id: 19,
        name: "Mì Quảng",
        filters: {
            type: "bình thường",
            texture: "nước",
            taste: "mặn",
            meal: "ăn no",
            country: "Việt Nam"
        }
    },
    {
        id: 20,
        name: "Cơm tấm",
        filters: {
            type: "bình thường",
            texture: "khô",
            taste: "mặn",
            meal: "ăn no",
            country: "Việt Nam"
        }
    },
    {
        id: 21,
        name: "Cơm gà",
        filters: {
            type: "bình thường",
            texture: "khô",
            taste: "mặn",
            meal: "ăn no",
            country: "Việt Nam"
        }
    },
    {
        id: 22,
        name: "Cơm nhà",
        filters: {
            type: "bình thường",
            texture: "khô",
            taste: "mặn",
            meal: "ăn no",
            country: "Việt Nam"
        }
    },
    {
        id: 23,
        name: "Cơm gà xối mỡ",
        filters: {
            type: "bình thường",
            texture: "khô",
            taste: "mặn",
            meal: "ăn no",
            country: "Việt Nam"
        }
    },
    {
        id: 24,
        name: "Cháo lòng",
        filters: {
            type: "bình thường",
            texture: "nước",
            taste: "mặn",
            meal: "ăn no",
            country: "Việt Nam"
        }
    },
    {
        id: 25,
        name: "Nem nướng",
        filters: {
            type: "bình thường",
            texture: "khô",
            taste: "mặn",
            meal: "ăn no",
            country: "Việt Nam"
        }
    },
    {
        id: 26,
        name: "Bánh tráng cuốn",
        filters: {
            type: "bình thường",
            texture: "khô",
            taste: "mặn",
            meal: "ăn no",
            country: "Việt Nam"
        }
    },
    {
        id: 27,
        name: "Bánh mì",
        filters: {
            type: "bình thường",
            texture: "khô",
            taste: "mặn",
            meal: "ăn no",
            country: "Việt Nam"
        }
    },
    {
        id: 28,
        name: "Bánh tráng trộn",
        filters: {
            type: "bình thường",
            texture: "khô",
            taste: "mặn",
            meal: "ăn vặt",
            country: "Việt Nam"
        }
    },
    {
        id: 29,
        name: "Bánh tráng nướng",
        filters: {
            type: "bình thường",
            texture: "khô",
            taste: "mặn",
            meal: "ăn vặt",
            country: "Việt Nam"
        }
    },
    {
        id: 30,
        name: "Gỏi cuốn",
        filters: {
            type: "bình thường",
            texture: "khô",
            taste: "mặn",
            meal: "ăn vặt",
            country: "Việt Nam"
        }
    },
    {
        id: 31,
        name: "Xôi",
        filters: {
            type: "bình thường",
            texture: "khô",
            taste: "mặn",
            meal: "ăn no",
            country: "Việt Nam"
        }
    },
    {
        id: 32,
        name: "Bò né",
        filters: {
            type: "bình thường",
            texture: "khô",
            taste: "mặn",
            meal: "ăn no",
            country: "Việt Nam"
        }
    },
    {
        id: 33,
        name: "Pizza",
        filters: {
            type: "hẹn hò",
            texture: "khô",
            taste: "mặn",
            meal: "ăn no",
            country: "Ý"
        }
    },
    {
        id: 34,
        name: "Pasta",
        filters: {
            type: "hẹn hò",
            texture: "khô",
            taste: "mặn",
            meal: "ăn no",
            country: "Ý"
        }
    },
    {
        id: 35,
        name: "Cơm Nhật",
        filters: {
            type: "hẹn hò",
            texture: "khô",
            taste: "mặn",
            meal: "ăn no",
            country: "Nhật Bản"
        }
    },
    {
        id: 36,
        name: "Sushi",
        filters: {
            type: "hẹn hò",
            texture: "khô",
            taste: "mặn",
            meal: "ăn no",
            country: "Nhật Bản"
        }
    },
    {
        id: 37,
        name: "Ramen",
        filters: {
            type: "bình thường",
            texture: "nước",
            taste: "mặn",
            meal: "ăn no",
            country: "Nhật Bản"
        }
    },
    {
        id: 38,
        name: "Tokbokki",
        filters: {
            type: "bình thường",
            texture: "nước",
            taste: "mặn",
            meal: "ăn vặt",
            country: "Hàn Quốc"
        }
    },
    {
        id: 39,
        name: "Kimbap",
        filters: {
            type: "bình thường",
            texture: "khô",
            taste: "mặn",
            meal: "ăn no",
            country: "Hàn Quốc"
        }
    },
    {
        id: 40,
        name: "Gà rán",
        filters: {
            type: "bình thường",
            texture: "khô",
            taste: "mặn",
            meal: "ăn no",
            country: "Mỹ"
        }
    },
    {
        id: 41,
        name: "Mì cay",
        filters: {
            type: "bình thường",
            texture: "nước",
            taste: "mặn",
            meal: "ăn no",
            country: "Hàn Quốc"
        }
    },
    {
        id: 42,
        name: "Pad Thai",
        filters: {
            type: "bình thường",
            texture: "khô",
            taste: "mặn",
            meal: "ăn no",
            country: "Thái Lan"
        }
    },
    {
        id: 43,
        name: "Tom Yum",
        filters: {
            type: "hẹn hò",
            texture: "nước",
            taste: "mặn",
            meal: "ăn no",
            country: "Thái Lan"
        }
    },
    {
        id: 44,
        name: "Cà ri chay",
        filters: {
            type: "bình thường",
            texture: "nước",
            taste: "chay",
            meal: "ăn no",
            country: "Ấn Độ"
        }
    },
    {
        id: 45,
        name: "Hamburger",
        filters: {
            type: "bình thường",
            texture: "khô",
            taste: "mặn",
            meal: "ăn no",
            country: "Mỹ"
        }
    },
    {
        id: 46,
        name: "Xiên bẩn",
        filters: {
            type: "bình thường",
            texture: "khô",
            taste: "mặn",
            meal: "ăn vặt",
            country: "Việt Nam"
        }
    },
    {
        id: 47,
        name: "Đồ Hàn",
        filters: {
            type: "bình thường",
            texture: "khô",
            taste: "mặn",
            meal: "ăn no",
            country: "Việt Nam"
        }
    },
    {
        id: 48,
        name: "Lẩu",
        filters: {
            type: "bình thường",
            texture: "nước",
            taste: "mặn",
            meal: "ăn no",
            country: "Hàn Quốc"
        }
    },
    {
        id: 49,
        name: "Đồ nướng",
        filters: {
            type: "hẹn hò",
            texture: "khô",
            taste: "mặn",
            meal: "ăn no",
            country: "Hàn Quốc"
        }
    }
];