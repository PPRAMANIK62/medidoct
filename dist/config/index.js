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
                href: "#",
                value: "elderly_care",
                imageUrl: "/categories/elderly-care.webp",
            },
            {
                label: "Personal Care",
                href: "#",
                value: "personal_care",
                imageUrl: "/categories/personal-care.webp",
            },
            {
                label: "Skin Care",
                href: "#",
                value: "skin_care",
                imageUrl: "/categories/skin-care.webp",
            },
            {
                label: "Mother and Baby Care",
                href: "#",
                value: "mother_and_baby_care",
                imageUrl: "/categories/mother-and-baby-care.webp",
            },
            {
                label: "Accesories and Wearables",
                href: "#",
                value: "accesories_and_wearables",
                imageUrl: "/categories/accesories-and-wearables.webp",
            },
            {
                label: "Fitness Supplements",
                href: "#",
                value: "fitness_supplements",
                imageUrl: "/categories/fitness-supplements.webp",
            },
            {
                label: "Sexual Wellness",
                href: "#",
                value: "sexual_wellness",
                imageUrl: "/categories/sexual-wellness.webp",
            },
            {
                label: "Diabetic Care",
                href: "#",
                value: "diabetic_care",
                imageUrl: "/categories/diabetic-care.webp",
            },
            {
                label: "Home Care",
                href: "#",
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
