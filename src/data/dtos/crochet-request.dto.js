import { nanoid } from "nanoid";
import slugify from "slugify";
import { emptyCrochet } from "../models";

class CrochetRequestDto {
  constructor(data) {
    if (!data || typeof data !== "object") {
      throw new Error("Invalid crochet data");
    }

    if (!data.name || typeof data.name !== "string") {
      throw new Error("Crochet name is required.");
    }

    if (!data.crochetTypeId || typeof data.crochetTypeId !== "string") {
      throw new Error("CrochetType ID is required.");
    }

    if (!data.price || typeof data.price !== "number") {
      throw new Error("Valid price is required.");
    }

    if (!Array.isArray(data.crochetImages) || data.crochetImages.length === 0) {
      throw new Error("At least one crochet image is required.");
    }

    this.crochetTypeId = data.crochetTypeId;
    this.name = data.name;
    this.brand = data.brand;
    this.species = data.species;
    this.price = data.price;
    this.shortDescription = data.shortDescription;
    this.description = data.description;
    this.stockQuantity = data.stockQuantity;
    this.crochetImages = data.crochetImages;
    this.tags = data.tags;
    this.isAvailable = data.isAvailable ?? true;
    this.expirationDate = data.expirationDate;
    this.rating = data.rating;
    this.discountPercentage = data.discountPercentage;
  }

  toData() {
    return {
      ...emptyCrochet,
      id: nanoid(20),
      crochetTypeId: this.crochetTypeId,
      name: this.name,
      brand: this.brand,
      species: this.species,
      price: this.price,
      slug: slugify(this.name, { lower: true, replacement: "-" }),
      shortDescription: this.shortDescription,
      description: this.description,
      stockQuantity: this.stockQuantity,
      crochetImages: this.crochetImages,
      tags: this.tags,
      isAvailable: this.isAvailable,
      expirationDate: this.expirationDate,
      rating: this.rating,
      discountPercentage: this.discountPercentage,
    };
  }

  toUpdateData(data) {
    if (!data.id || typeof data.id !== "string") {
      throw new Error("Valid ID is required for update.");
    }

    return {
      id: data.id,
      crochetTypeId: data.crochetTypeId,
      name: data.name,
      brand: data.brand,
      species: data.species,
      price: data.price,
      slug: data.slug,
      shortDescription: data.shortDescription,
      description: data.description,
      stockQuantity: data.stockQuantity,
      crochetImages: data.crochetImages,
      tags: data.tags,
      isAvailable: data.isAvailable,
      expirationDate: data.expirationDate,
      rating: data.rating,
      discountPercentage: data.discountPercentage,
    };
  }
}

export { CrochetRequestDto };
