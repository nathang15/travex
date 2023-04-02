import React, {useState, useEffect, createRef} from 'react';
import Place from '../Place/Place';
import Grid from '@mui/material/Grid';
import useStyles from './styles.js';
import { CircularProgress } from '@mui/material';

function List({ places, childClicked, isLoading, type, setType, rating, setRating}) {
    const [elRefs, setElRefs] = useState([]);
    const classes = useStyles();
    useEffect(() => {
        setElRefs((refs) => Array(places?.length).fill().map((_, i) => refs[i] || createRef()));
      }, [places]);
    console.log({childClicked})

    return (
        <div className=''>
            <div className="shadow-lg rounded-lg bg-white p-3 mt-2 ml-5">
                <div className='font-semibold text-3xl flex justify-center'>
                    Category and Rating
                </div>
            </div>
            {isLoading ? (
                    <div className={classes.loading}>
                        <CircularProgress size="5rem"/>
                    </div>
                ) : (
                    <>
            <div className="flex justify-center mt-2 ml-5">
                <div className="relative shadow-lg">
                    <select
                        id="type" value={type} onChange={(e) => setType(e.target.value)}
                        className="block appearance-none w-full bg-white hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline cursor-pointer transition-all"
                    >
                        <option value="attractions">Tourists</option>
                        <option value="restaurants">Food</option>
                        <option value="hotels">Accomodations</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M10 12l-6-6 1.414-1.414L10 9.172l4.586-4.586L16 6l-6 6z"
                            />
                        </svg>
                    </div>
                </div>
                <div className="ml-2 relative shadow-lg">
                    <select
                        id="rating" value={rating} onChange={(e) => setRating(e.target.value)}
                        className="block appearance-none w-full bg-white hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none cursor-pointer"
                    >
                        <option value="">All</option>
                        <option value="4">Above 4 stars</option>
                        <option value="3">Above 3 stars</option>
                        <option value="2">Above 2 stars</option>
                        <option value="1">Above 1 star</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M10 12l-6-6 1.414-1.414L10 9.172l4.586-4.586L16 6l-6 6z"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='shadow-lg rounded-lg bg-white p-3 mt-2 ml-5'>
                <Grid className='font-semibold text-xl'>
                    <div className='overflow-y-auto scrollbar-hide' style={{ maxHeight: '75vh'}}>
                        {places?.map((places, i) => (
                            <Grid ref={elRefs[i]} item key={i} xs={12}>
                                <div className="mb-20">
                                    <Place places={places} selected={Number(childClicked) === i} refProp={elRefs[i]}/>
                                </div>
                            </Grid>
                        ))}
                    </div>
                </Grid>
            </div>
            </>
            )}
        </div>
    );
}

export default List;
