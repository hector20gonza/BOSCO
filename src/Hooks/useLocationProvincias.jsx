import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { getAllLocation } from "../Redux/boscoSlice";
import axios from "axios";


export const useLocationProvincias = () => {
    const dispatch = useDispatch();

    useEffect(() => {  
        const peticionBack = async () => {
            try {
                const responseBack = await axios.get("https://backbosco.up.railway.app/location/provinces");
                dispatch(getAllLocation(responseBack.data));
            } 
            catch (error) {
              console.error("Algo falló en la petición a mi Backend", error);
            }
          };
        
          peticionBack();
    }, [dispatch])

}
