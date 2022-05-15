import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pagination from './Pagination';
import ResidentInfo from './ResidentInfo';
import Loader from '../assests/images/loader.gif'


const Location = () => {

    const [location,setLocation]=useState({})
    const [id,setId]=useState("")
    const [loading,setLoading]=useState(true)
    
    const [currentPage,setCurrentPage]=useState(1)
    
    const [postPerPage]=useState(10)

    

    useEffect(()=>{
        const random = Math.floor(Math.random()*126)+1
        axios.get(`https://rickandmortyapi.com/api/location/${random}
        `).then(res=>{
            setLocation(res.data)
            setLoading(false)
            })

        
    },[])

    
    

    const searchId = () => {
        
        if(id <= 126){
            axios.get(`https://rickandmortyapi.com/api/location/${id}`)
                .then(res=>
                    setLocation(res.data),
                    setLoading(false)
                )
            }else{
            alert("We only have 126 locations to show")
        }
    }  



      



  //get current posts
  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPost = location.residents?.slice(indexOfFirstPost,indexOfLastPost)

  //change page
  const paginate = (pageNumber)=>{
      setCurrentPage(pageNumber)
  }

    
   

    

    return (
        <div>
            {
            loading?(
                <div className='loader-container'>
                    <img className='loader' src={Loader} alt="" />
                    <h1 className='loader-h1'>Loading...</h1>
                </div>
            ):(
            <div className='container'>
                
                <header className='container-header'>
                    <div className='container-header-background'>

                    
                        <div className='search-bar'>
                            <input type="text"  placeholder='Type ID (1 - 126)' onChange={e => setId(e.target.value)} value={id}/>
                            <button onClick={searchId}><i className="fa-solid fa-magnifying-glass"></i></button>
                            
                        </div>
                    </div>
                </header>

                    <section className='container-location-info'>

                        <div className='location-info'>
                            <div className='location-info-name'>
                                <h1><b>{location.name}</b></h1>
                            </div>

                            <div className='location-info-general'>

                                <h3><b>Type:</b> {location.type}</h3>
                                <h3>Dimension: {location.dimension}</h3>
                                <h3>Population: {location.residents?.length}</h3>
                            
                            </div>
                            
                            
                        </div>
                    </section>
                    <div className='container-residentInfo'>
                        <h3>Residents</h3>
                    </div>
                    <section className='card-section'>
                            
                            {currentPost?.map(resident => (
                                <ResidentInfo resident={resident} key={resident} array={location.residents}/>
                            ))}
                    </section>
                    <section>
                    <Pagination postPerPage={postPerPage} totalPost={location.residents?.length} paginate={paginate}/>
                    </section>
            </div>
            )}
        </div>
    );
};

export default Location;