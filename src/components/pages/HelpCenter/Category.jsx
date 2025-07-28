import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom';

export default function Category() {
    const { id } = useParams();

    const { } = useQuery({
        queryKey: [`category${id}`],
        queryFn:()=>{
            return axios.get('')
        }
    })

    return <>
        {id}
    </>
}
