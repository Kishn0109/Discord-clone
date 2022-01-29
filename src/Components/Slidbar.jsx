import React from 'react';
import { PlusIcon,ChevronRightIcon} from '@heroicons/react/solid'
// import { db } from '../firebase';
// import { collection, addDoc,setDoc,doc  } from "firebase/firestore"; 

import Rooms from './Rooms';
function Slidbar() {
  const addchannel=async()=>{
    // const name = prompt ('What the name of your chanel?'); 
    // let data={
    //   name:name,
    //   rollno:34
    // }
  }
  return <div className='flextwo'>
    <div className='flex'>
    <div className="flextwo bg-slate-200">
      <Rooms/>
    </div>
     <div className="flexteight h-full w-full flex justify-between items-center">
       <div className="h-screen w-full flex flex-col">
        <div className="flexOne">top</div>
        <div className='w-full  flexteight'>
        <div className='w-full flex bg-gray-500 justify-between items-center'>
         <div className='flex items-center'><ChevronRightIcon className='h-5 inline '/>#Text Channels</div>
          <button onClick={addchannel}><PlusIcon className='h-5'/></button></div>
        </div>
        <div className="flexOne">bottom</div>
       </div>
     </div>
    </div>

  </div>;
}

export default Slidbar;
