export type Tool = {
  id: string;
  name: string;
  description: string;
  category: "Writing" | "Coding" | "Image" | "Video" | "Music" | "Productivity" | string;
  price: "Free" | "Paid" | "Premium" | string;
  link: string;
};
