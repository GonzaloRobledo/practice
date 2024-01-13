export type ProductType = {
    _id: string;
    name: string;
    price: number;
    images: string[];
    free_shipping:boolean;
    category: string;
    description: string;
    company: string;
    short_description:string;
    colors: string[];
    isFeatured: boolean;
    createdAt: string;
    updatedAt: string;
}

export type PaginateProdType = {
    totalDocs:number;
    limit:number;
    totalPages:number;
    page:number;
}