import React,{useEffect} from 'react';
import {useParams} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAsyncSeriesOrShowDetails, getSelectedMovieOrShow} from '../../Features/movies/movieSlice'

export default function MovieDetails(){

    const { imbbID} = useParams();
    const dispatch = useDispatch();

    console.log(imbbID)

    const data = useSelector(getSelectedMovieOrShow);
    console.log(data)

    useEffect(() =>{
        dispatch(fetchAsyncSeriesOrShowDetails(imbbID))
    },[dispatch,imbbID])


    return (
        <>
        MovieDetails
        </>
    )
}