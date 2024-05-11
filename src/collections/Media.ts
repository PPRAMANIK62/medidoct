import { User } from "../payloadTypes";
import { Access, CollectionConfig } from "payload/types";

const isAdmin =
  (): Access =>
  async ({ req }) => {
    const user = req.user as User | undefined;

    if (!user) return false;
    return user.role === "admin";
  };

export const Media: CollectionConfig = {
  slug: "media",
  hooks: {
    beforeChange: [
      ({ req, data }) => {
        return { ...data, user: req.user.id };
      },
    ],
  },
  access: {
    read: async ({ req }) => {
      if (!req.user) return true;
      return await isAdmin()({ req });
    },
    delete: isAdmin(),
    update: isAdmin(),
  },
  admin: {
    hidden: ({ user }) => user.role !== "admin",
  },
  upload: {
    staticURL: "/media",
    staticDir: "media",
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
      {
        name: "card",
        width: 768,
        height: 1024,
        position: "centre",
      },
      {
        name: "tablet",
        width: 1024,
        height: undefined,
        position: "center",
      },
    ],
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      required: true,
      hasMany: false,
      admin: {
        condition: () => false,
      },
    },
  ],
};
