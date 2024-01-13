'use client'
import { GlobalContext } from "@/context/global"
import { useContext } from "react"


export const TitleFeatured = () => {
    const {themeLight} = useContext(GlobalContext);

    return <h2 style={{color: !themeLight ? "#F8F8F2" : ''}}>Featured Products</h2>
}