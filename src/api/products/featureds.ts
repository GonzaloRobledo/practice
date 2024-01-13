import { server } from "@/globals/baseUrl";

export const getFeaturedProducts = async () => {
    try{
        const res = await fetch(`${server.local}/api/products?isFeatured=true&limit=3`,{
            cache:'no-store'
        })

        if(!res.ok) throw res;

        const data = await res.json();

        return data
    }catch(e){
        console.log("Error in getFeaturedProducts: ", e);
    }
}