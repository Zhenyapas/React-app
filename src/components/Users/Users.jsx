import React, { useState, useEffect } from 'react';
import User from './user';
import './users.css';



function Users(props) {

    let [editMode, setEditMode] = useState(false);



    return ( 

     <>
            <div className='Dialogs_container'>
                <section className='Section_Dialogs'>
                    <div className='Content_dialogs'>
                        <UserSearch {...props} />
                        <UsersPaginator {...props} />
                    </div>
                </section>
            </div>
     </>
    )
}


function UserSearch (props) {

    let [value, setValue] = useState(props.searchingValue)

    useEffect(() => {
        setValue(props.searchingValue)
    }, [props.searchingValue])

    const updateValue = (e) => {

        props.updateSearchText(e.currentTarget.value);
        props.searchingUserByName(e.currentTarget.value);

    }

    const clearValue = () => {
        
        setValue('');
        props.updateSearchText('');

    }


    return (
            
      <>
   
            <div id='userTitle'>Users</div>
            
            <input className='search' type='textarea' autoFocus value={value} onChange={updateValue} onBlur={clearValue} ></input>
    </>
        
       
    )
}



function UsersPaginator(props) {

    let usersList = props.users.map( (obj) => <User  u={obj}
    unfollow={props.unfollow} follow={props.follow}   />);


    let pageCount = Math.round(props.totalUsersCount / props.pageSize);
    console.log(pageCount);
    console.log(props.isFetching);

    
   
    let [arrPages,setArrPages]=useState([1,2,3,4,'...']);
    

    
    useEffect(() => {
        console.log('RERENDER');
        setArrPages([1,2,3, '....', pageCount]);
    }, [pageCount]);
   
    let onCklickPage = (p) => {
        
       
        props.setCurrentPage(p);

        let arr=[];
        for(let i=0;i<4;i++){
           
            arr.push(p-2+i);
        }


        if(p>3 && p<pageCount - 1 ){
           let  arrPages = [1,'...',...arr,'...',pageCount];
           setArrPages(arrPages);
        } else if( p === pageCount || p > pageCount - 2) {
            setArrPages([1,'...',pageCount - 2 , pageCount - 1 , pageCount]);
        } else {
            setArrPages([1,2,3,4,'...',pageCount]);
        }
      
            
    };


    let selectedPage = 'selectedPage';




    let pages2 = arrPages.map((p) => (p !== '...') ? <li  onClick={() => onCklickPage(p) } className={props.currentPage === p ?  selectedPage : ''}>{p}</li> : <li>{p}</li>)
    
    return(
         
           
        <>

            <ul className={`ulPages`}>
                   
                {(!props.isFetching) ? pages2 : 'Download pages wait '}
             
             </ul>


             <div>

                {usersList}

             </div>

                        
             <ul className={`ulPages`}>
                   
                {(!props.isFetching) ? pages2 : 'Download pages wait '}
                      
            </ul>

         </>

     )
     
     
     
    
}    




export default Users;