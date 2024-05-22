"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURED_CATEGORIES = exports.PRODUCT_CATEGORIES = void 0;
exports.PRODUCT_CATEGORIES = [
    {
        label: "Healthcare",
        value: "health_care",
        featured: [
            {
                label: "Elderly Care",
                href: "/products?category=elderly_care",
                value: "elderly_care",
                imageUrl: "/categories/elderly-care.webp",
            },
            {
                label: "Personal Care",
                href: "/products?category=personal_care",
                value: "personal_care",
                imageUrl: "/categories/personal-care.webp",
            },
            {
                label: "Skin Care",
                href: "/products?category=skin_care",
                value: "skin_care",
                imageUrl: "/categories/skin-care.webp",
            },
            {
                label: "Mother and Baby Care",
                href: "/products?category=mother_and_baby_care",
                value: "mother_and_baby_care",
                imageUrl: "/categories/mother-and-baby-care.webp",
            },
            {
                label: "Accesories and Wearables",
                href: "/products?category=accesories_and_wearables",
                value: "accesories_and_wearables",
                imageUrl: "/categories/accesories-and-wearables.webp",
            },
            {
                label: "Fitness Supplements",
                href: "/products?category=fitness_supplements",
                value: "fitness_supplements",
                imageUrl: "/categories/fitness-supplements.webp",
            },
            {
                label: "Sexual Wellness",
                href: "/products?category=sexual_wellness",
                value: "sexual_wellness",
                imageUrl: "/categories/sexual-wellness.webp",
            },
            {
                label: "Diabetic Care",
                href: "/products?category=diabetic_care",
                value: "diabetic_care",
                imageUrl: "/categories/diabetic-care.webp",
            },
            {
                label: "Home Care",
                href: "/products?category=home_care",
                value: "home_care",
                imageUrl: "/categories/home-care.webp",
            },
        ],
    },
    {
        label: "Health Food and Drinks",
        value: "health_food_and_drinks",
        featured: [],
    },
];
exports.FEATURED_CATEGORIES = exports.PRODUCT_CATEGORIES.map(function (category) { return category.featured; }).filter(function (featured) { return featured !== undefined; })[0];
