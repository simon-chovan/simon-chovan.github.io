import image_1 from "./images/1.jpg"
import image_2 from "./images/2.jpg"
import image_3 from "./images/3.jpg"
import image_4 from "./images/4.jpg"
import image_5 from "./images/5.jpg"
import image_6 from "./images/6.jpg"
import image_7 from "./images/7.jpg"
import image_8 from "./images/8.jpg"
import image_9 from "./images/9.jpg"
import image_10 from "./images/10.jpg"
import image_11 from "./images/11.jpg"
import image_12 from "./images/12.jpg"
import image_13 from "./images/13.jpg"
import image_14 from "./images/14.jpg"
import image_15 from "./images/15.jpg"
import image_16 from "./images/16.jpg"
import image_17 from "./images/17.jpg"
import image_18 from "./images/18.jpg"
import image_19 from "./images/19.jpg"
import image_20 from "./images/20.jpg"
import image_21 from "./images/21.jpg"
import image_22 from "./images/22.jpg"
import image_23 from "./images/23.jpg"
import image_24 from "./images/24.jpg"
import image_25 from "./images/25.jpg"
import image_26 from "./images/26.jpg"
import image_27 from "./images/27.jpg"
import image_28 from "./images/28.jpg"
import image_29 from "./images/29.jpg"
import image_30 from "./images/30.jpg"
import image_31 from "./images/31.jpg"
import image_32 from "./images/32.jpg"
import image_33 from "./images/33.jpg"
import image_34 from "./images/34.jpg"
import image_35 from "./images/35.jpg"
import image_36 from "./images/36.jpg"
import image_37 from "./images/37.jpg"
import image_38 from "./images/38.jpg"
import image_39 from "./images/39.jpg"
import image_40 from "./images/40.jpg"
import image_41 from "./images/41.jpg"
import image_42 from "./images/42.jpg"
import image_43 from "./images/43.jpg"
import image_44 from "./images/44.jpg"
import image_45 from "./images/45.jpg"

import stavovce from "./images/hover/stavovce.jpg"
import co2_1800 from "./images/hover/c02-1800.jpg"
import co2_1960 from "./images/hover/c02-1960.jpg"
import co2_1990 from "./images/hover/c02-1990.jpg"
import plasty from "./images/hover/plasty.jpg"
import teploty from "./images/hover/teplota.jpg"

let hover = [
    stavovce, co2_1800, co2_1960, co2_1990, plasty, teploty
]

let images = [
    image_1, image_2, image_3, image_4, image_5, image_6, image_7, image_8, image_9, image_10,
    image_11, image_12, image_13, image_14, image_15, image_16, image_17, image_18, image_19, image_20,
    image_21, image_22, image_23, image_24, image_25, image_26, image_27, image_28, image_29, image_30,
    image_31, image_32, image_33, image_34, image_35, image_36, image_37, image_38, image_39, image_40,
    image_41, image_42, image_43, image_44, image_45
];

let videos = [];

let atlas_items = [
    {
        "id": 1,
        "title": "Name of image 1",
        "type": "image",
        "src": image_1,
        "hover": stavovce
    },
    {
        "id": 2,
        "title": "Name of image 2",
        "type": "image",
        "src": image_2,
        "hover": stavovce
    },
    {
        "id": 3,
        "title": "Name of image 3",
        "type": "image",
        "src": image_3,
        "hover": stavovce
    },
    {
        "id": 4,
        "title": "Name of image 4",
        "type": "image",
        "src": image_4,
        "hover": stavovce
    },
    {
        "id": 5,
        "title": "Name of image 5",
        "type": "image",
        "src": image_5,
        "hover": stavovce
    },
    {
        "id": 6,
        "title": "Name of image 6",
        "type": "image",
        "src": image_6,
        "hover": stavovce
    },
    {
        "id": 7,
        "title": "Name of image 7",
        "type": "image",
        "src": image_7,
        "hover": stavovce
    },
    {
        "id": 8,
        "title": "Name of image 8",
        "type": "image",
        "src": image_8,
        "hover": co2_1960
    },
    {
        "id": 9,
        "title": "Name of image 9",
        "type": "image",
        "src": image_9,
        "hover": co2_1960
    },
    {
        "id": 10,
        "title": "Name of image 10",
        "type": "image",
        "src": image_10,
        "hover": co2_1960
    },
    {
        "id": 11,
        "title": "Name of image 11",
        "type": "image",
        "src": image_11,
        "hover": co2_1960
    },
    {
        "id": 12,
        "title": "Name of image 12",
        "type": "image",
        "src": image_12,
        "hover": co2_1960
    },
    {
        "id": 13,
        "title": "Name of image 13",
        "type": "image",
        "src": image_13,
        "hover": co2_1960
    },
    {
        "id": 14,
        "title": "Name of image 14",
        "type": "image",
        "src": image_14,
        "hover": co2_1800
    },
    {
        "id": 15,
        "title": "Name of image 15",
        "type": "image",
        "src": image_15,
        "hover": co2_1800
    },
    {
        "id": 16,
        "title": "Name of image 16",
        "type": "image",
        "src": image_16,
        "hover": co2_1990
    },
    {
        "id": 17,
        "title": "Name of image 17",
        "type": "image",
        "src": image_17,
        "hover": co2_1800
    },
    {
        "id": 18,
        "title": "Name of image 18",
        "type": "image",
        "src": image_18,
        "hover": co2_1800
    },
    {
        "id": 19,
        "title": "Name of image 19",
        "type": "image",
        "src": image_19,
        "hover": co2_1800
    },
    {
        "id": 20,
        "title": "Name of image 20",
        "type": "image",
        "src": image_20,
        "hover": co2_1800
    },
    {
        "id": 21,
        "title": "Name of image 21",
        "type": "image",
        "src": image_21,
        "hover": co2_1800
    },
    {
        "id": 22,
        "title": "Name of image 22",
        "type": "image",
        "src": image_22,
        "hover": co2_1800
    },
    {
        "id": 23,
        "title": "Name of image 23",
        "type": "image",
        "src": image_23,
        "hover": co2_1800
    },
    {
        "id": 24,
        "title": "Name of image 24",
        "type": "image",
        "src": image_24,
        "hover": co2_1800
    },
    {
        "id": 25,
        "title": "Name of image 25",
        "type": "image",
        "src": image_25,
        "hover": co2_1800
    },
    {
        "id": 26,
        "title": "Name of image 26",
        "type": "image",
        "src": image_26,
        "hover": co2_1960
    },
    {
        "id": 27,
        "title": "Name of image 27",
        "type": "image",
        "src": image_27,
        "hover": co2_1800
    },
    {
        "id": 28,
        "title": "Name of image 28",
        "type": "image",
        "src": image_28,
        "hover": plasty
    },
    {
        "id": 29,
        "title": "Name of image 29",
        "type": "image",
        "src": image_29,
        "hover": stavovce
    },
    {
        "id": 30,
        "title": "Name of image 30",
        "type": "image",
        "src": image_30,
        "hover": stavovce
    },
    {
        "id": 31,
        "title": "Name of image 31",
        "type": "image",
        "src": image_31,
        "hover": stavovce
    },
    {
        "id": 32,
        "title": "Name of image 32",
        "type": "image",
        "src": image_32,
        "hover": teploty
    },
    {
        "id": 33,
        "title": "Name of image 33",
        "type": "image",
        "src": image_33,
        "hover": teploty
    },
    {
        "id": 34,
        "title": "Name of image 34",
        "type": "image",
        "src": image_34,
        "hover": teploty
    },
    {
        "id": 35,
        "title": "Name of image 35",
        "type": "image",
        "src": image_35,
        "hover": co2_1800
    },
    {
        "id": 36,
        "title": "Name of image 36",
        "type": "image",
        "src": image_36,
        "hover": teploty
    },
    {
        "id": 37,
        "title": "Name of image 37",
        "type": "image",
        "src": image_37,
        "hover": teploty
    },
    {
        "id": 38,
        "title": "Name of image 38",
        "type": "image",
        "src": image_38,
        "hover": teploty
    },
    {
        "id": 39,
        "title": "Name of image 39",
        "type": "image",
        "src": image_39,
        "hover": teploty
    },
    {
        "id": 40,
        "title": "Name of image 40",
        "type": "image",
        "src": image_40,
        "hover": teploty
    },
    {
        "id": 41,
        "title": "Name of image 41",
        "type": "image",
        "src": image_41,
        "hover": teploty
    },
    {
        "id": 42,
        "title": "Name of image 42",
        "type": "image",
        "src": image_42,
        "hover": teploty
    },
    {
        "id": 43,
        "title": "Name of image 43",
        "type": "image",
        "src": image_43,
        "hover": teploty
    },
    {
        "id": 44,
        "title": "Name of image 44",
        "type": "image",
        "src": image_44,
        "hover": teploty
    },
    {
        "id": 45,
        "title": "Name of image 45",
        "type": "image",
        "src": image_45,
        "hover": teploty
    }
];

export { atlas_items, images, videos, hover };