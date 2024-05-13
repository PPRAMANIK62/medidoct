export const PRODUCT_CATEGORIES = [
  {
    label: "Healthcare",
    value: "health_care" as const,
    featured: [
      {
        label: "Elderly Care",
        href: "/products?category=elderly_care",
        value: "elderly_care" as const,
        imageUrl: "/categories/elderly-care.webp",
      },
      {
        label: "Personal Care",
        href: "/products?category=personal_care",
        value: "personal_care" as const,
        imageUrl: "/categories/personal-care.webp",
      },
      {
        label: "Skin Care",
        href: "/products?category=skin_care",
        value: "skin_care" as const,
        imageUrl: "/categories/skin-care.webp",
      },
      {
        label: "Mother and Baby Care",
        href: "/products?category=mother_and_baby_care",
        value: "mother_and_baby_care" as const,
        imageUrl: "/categories/mother-and-baby-care.webp",
      },
      {
        label: "Accesories and Wearables",
        href: "/products?category=accesories_and_wearables",
        value: "accesories_and_wearables" as const,
        imageUrl: "/categories/accesories-and-wearables.webp",
      },
      {
        label: "Fitness Supplements",
        href: "/products?category=fitness_supplements",
        value: "fitness_supplements" as const,
        imageUrl: "/categories/fitness-supplements.webp",
      },
      {
        label: "Sexual Wellness",
        href: "/products?category=sexual_wellness",
        value: "sexual_wellness" as const,
        imageUrl: "/categories/sexual-wellness.webp",
      },
      {
        label: "Diabetic Care",
        href: "/products?category=diabetic_care",
        value: "diabetic_care" as const,
        imageUrl: "/categories/diabetic-care.webp",
      },
      {
        label: "Home Care",
        href: "/products?category=home_care",
        value: "home_care" as const,
        imageUrl: "/categories/home-care.webp",
      },
    ],
  },
  {
    label: "Health Food and Drinks",
    value: "health_food_and_drinks" as const,
    featured: [],
  },
];

export const FEATURED_CATEGORIES = PRODUCT_CATEGORIES.map(
  (category) => category.featured
).filter((featured) => featured !== undefined)[0];
