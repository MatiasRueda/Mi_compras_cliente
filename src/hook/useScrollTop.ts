import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollTop(): void {
    const path = useLocation();
    useEffect(() => {
        window.scrollTo({top:0});
    }, [path.pathname])
}