import React from 'react';
import '../App.css';

const Pagination = ({postPerPage,totalPost ,paginate}) => {
    const pageNumbers=[];

    for(let i=1;i<=Math.ceil(totalPost/postPerPage);i++){
        pageNumbers.push(i);
    }

    const buttonsFunction =(number)=>{
        paginate(number);
        window.scrollTo( 0, 0 );
    }

   
    return (
        <nav className='pagination-container'>
            <ul className="pagination">
                {pageNumbers.map(number=>(
                    <li key={number} className="page-item">
                        <button onClick={()=>buttonsFunction(number)}  className='page-link'>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
            
        </nav>
    );
};

export default Pagination;