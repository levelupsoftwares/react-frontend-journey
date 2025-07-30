// import React from "react";
   

 // 1st method of Accessing Props

// function Demo(props) {   
//   console.log(props.sms , props.color , props.user);
//   return (
//     <>
//       <div className="bg-gray-50 py-24 sm:py-32">
//         <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
//           <h2 className="text-center text-base/7 font-semibold text-indigo-600">
//             {props.sms}
//           </h2>
//           <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
//             Everything you need to {props.color} your app
//           </p>
//           <p className="text-amber-800">Object Name : {props.user.Name} , Objective : {props.user.Learning}</p>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Demo;

import React from "react";

// Second and preffer method off accessing props

function Demo({sms , color , user}) {    
  console.log(sms , color , user );
  return (
    <>
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-base/7 font-semibold text-indigo-600">
            {sms}
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
            Everything you need to {color} your app
          </p>
          <p className="text-amber-800">Object Name : {user.Name} , Objective : {user.Learning}</p>
        </div>
      </div>
    </>
  );
}
export default Demo;
