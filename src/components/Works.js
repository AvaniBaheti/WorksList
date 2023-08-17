import React, { useState } from 'react'
import './style.css'

import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

import AddIcon from '@mui/icons-material/Add';



import List from './List'
function Works() {
  const [val,seVal]= useState("");
  const [add,seAdd] =  useState  ([])    ;

  const seValue  =(e)=>{


    seVal(e.target.value)




  }
  const dltitems = (id)=>{

    const dltdata = add.filter((el,ind)=>{
        return ind !== id
    });
    seAdd(dltdata)
}
  const additeams  =()=>{
seAdd(()=>{
  return [...add,val] ;
});   
seVal("");
  }
  return (
    <div>
        <div className='main-container'>
          <div className='todo-box'>
            <img src = "" alt=""/>
            <h1 className='heading'>Write Your All Work Here</h1>
            <div className="input-container">
                        <input type="text" name="todo"
                            onChange={seValue}
                            value={val}
                            placeholder='Enter Your Task' id="" />

                        <Tooltip title="Add">

                            <Button className='addbtn' onClick={additeams   } >
                                <AddIcon />
                            </Button>
                        </Tooltip>

                    </div>
                    <div className='store-container' >
                      <ul>
                        
                      {
                                add.map((ele, index) => {
                                    return (
                                        <>
                                            <List id={index} text={ele} dltitems={dltitems} />
                                        </>
                                    )
                                })
                            }


                      </ul>
                    </div>
          </div>
        </div>
    </div>
  )
}


export default Works