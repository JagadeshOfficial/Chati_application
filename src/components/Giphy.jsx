import { useEffect, useRef, useState } from "react"
import { Grid } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";
import _ from "lodash";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useDispatch } from "react-redux";
import { ToggleGifModal } from "../redux/slices/app";

const gf = new GiphyFetch("qwMz4SJApmYOzegbYI95T3lxb1oHU9HV");


export default function Giphy() {
    const dispatch = useDispatch();
    const gridRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [value, setValue] = useState("");
    const [error, setError] = useState(false);
    const [gifs, setGifs] = useState([]);
    const fetchGifs = async (offset) => {
        return gf.search(value, { offset, limit: 10 });
    }
    const debouncedfetchedGifs = _.debounce(async() =>{
        setIsLoading(true);
        setError(null);

        try {
            const newGifs = await fetchGifs(0);
            setGifs(newGifs.data);
        } catch (error) {
            setError(error.message);
        }
        finally {
            setIsLoading(false);
        }
    }, 500);
    useEffect(() => {
        //fetch GIFs initialyy based on search term
        const fetchInitialGifs = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const intialGifs = await fetchGifs(0);
                setGifs(intialGifs.data);
            } catch (error) {
                setError(error.message);
            }
            finally {
                setIsLoading(false);
            }
        };

        fetchInitialGifs();
    }, []);

    const handleGifsClick = (gif, e) => {
        e.preventDefault();
        console.log(gif);
        const gifUrl = gif.image.original.url;
        console.log(gifUrl);

        dispatch(ToggleGifModal({
            value: true,
            url: gifUrl,
        }));

    }

    return (
        <div ref={gridRef} className="w-full mt-3">
            <input type="text" placeholder="Search for Gif....." className="border border-stroke dark:border-strokedark rounded-md p-2 w-full mb-2 outline-none bg-transparent"
                value={value} onChange={(e) => {
                    setValue(e.target.value);
                    debouncedfetchedGifs();
                }}
            />

            {isLoading && <p>Loading GIFs....</p>}
            {error && <p className="text-red">Error: {error}</p>}
            <div className="h-48 overflow-auto no-scrollbar">
                {gifs.length > 0 ?  <Grid width={gridRef.current?.offsetWidth} columns={8} gutter={6} fetchGifs={fetchGifs} key={value} onGifClick={handleGifsClick} data={gifs} /> : 
                    <div className="flex flex-col items-center justify-center h-full space-y-2">
                        <MagnifyingGlass size={48} weight="bold"/>
                        <span className="text-xl text-body font-semibold">
                            Please search for any GIFs... 
                        </span>
                    </div>} 
            </div>

        </div> 
    )
}
