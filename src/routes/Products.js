import ProductItem from "../components/ProductItem";
// import db from '../db'
import { useState, useEffect, useContext } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase.config'
import Spinner from "../components/Spinner";
import StateManager from "../context/StateManager";

function Products() {
    const {setItem} = useContext(StateManager)
    const [listings, setListings] = useState([])
    const [loading, setLoading] = useState(true)
    const list = []

    useEffect(()=>{
        const fetchDocs = async () => {
            try {
                const snapshot = await getDocs(collection(db, 'product-list'))
                snapshot.forEach(doc=>{
                    return list.push(doc.data())
                })
    
                setListings(list)
                setItem(list)
                setLoading(false)
                console.log(list)
            } catch (error) {
                console.log(error)
            }
        }

        fetchDocs()
    },[]) //eslint-disable-line

    return loading ? <Spinner/> : ( 
        <div className="grid 3xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-2 my-5">
            {listings.map((product) => {
                return <ProductItem key={product.model} {...product}/>
            })}
        </div>
     );
}

export default Products;