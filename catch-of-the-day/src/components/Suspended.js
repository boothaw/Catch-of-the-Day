/**
 * In this short assessment, the following code tries to implement the React Suspense API,
 * but does so incorrectly. There are 3 core issues with how these components utilize Suspense and concurrent mode -- can you find them?
 * 
 * In your submission, be sure to:
 * 1) Clearly identify what the 3 core issues are, and how they violate the principles of React Suspense;
 * 2) Write and submit the code to fix the core issues you have identified in a gist of your own
 * 
 * If you aren't familiar with Suspense, the docs are a good starting place:
 * 
 * https://reactjs.org/docs/concurrent-mode-intro.html
 * 
 * We rate each answer by comparing the submitted answer to how we would write the same code in production at Contra.
 * You are guaranteed an interview if your code ticks all the boxes. Good luck!
 */

 import { Suspense, useState, useEffect } from 'react';

 const SuspensefulUserProfile = ({ userId }) => {
   const [data, setData] = useState({});
   useEffect(() => {
     fetchUserProfile(userId).then((profile) => setData(profile));
   }, [userId, setData]) 
   return (
     <Suspense fallback={<h3>Loading Profile...</h3>}>
       <UserProfile data={data} />
     </Suspense>
   );
 };



 const UserProfile = ({ data }) => {
   return (
     <>
       <h1>{data.name}</h1>
       <h2>{data.email}</h2>
     </>
   );
 };

//  This runs first and call first function

 const UserProfileList = () => (
   <>
     <SuspensefulUserProfile userId={1} />
     <SuspensefulUserProfile userId={2} />
     <SuspensefulUserProfile userId={3} />
   </>
 );


//  1. need fallback object for Suspense
// 2.
// 3. Call to 


// something with useEffect

// -needs resource? date={data}?
// -needs another susupense to update userprofilelist??

// -suspense only works for react.lazy componenets!!!

// import React, { useState, Suspense, useEffect } from "react";
// import ReactDOM from "react-dom";

// import "./styles.css";
// import { fetchProfileData } from "./fakeApi";

// function App() {
//   const SuspensefulUserProfile = ({ userId }) => {
//     const [resource, setResource] = useState({});
//     useState(() => {
//       fetchProfileData(userId);
//     }, [userId, setResource]);
//     console.log("fetchy", resource);
//     return (
//       // <Suspense fallback={<h3>Loading Profile...</h3>}>
//       <UserProfile data={resource} />
//       // </Suspense>
//     );
//   };

//   const UserProfile = ({ resource }) => {
//     return (
//       <>
//         <h1>userId {resource}</h1>
//       </>
//     );
//   };

//   return (
//     <>
//       <SuspensefulUserProfile userId={1} />
//       {/* <SuspensefulUserProfile userId={2} />
//       <SuspensefulUserProfile userId={3} /> */}
//     </>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.createRoot(rootElement).render(<App />);

