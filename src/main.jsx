import React from 'react'
import ReactDOM from 'react-dom/client' 
 import About from './Component/About/About.jsx'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import Header from './Component/Header.jsx';
import Contact from './Component/About/Contact.jsx'
import Details from './Component/Details/Details.jsx'
import Users from './Component/Users/Users.jsx'
import UserDetails from './Component/UsersDetails/UserDetails.jsx'
import ManyPeople from './Component/ManyPeople/ManyPeople.jsx'
import PeopleDetails from './Component/PeopleDetails/PeopleDetails.jsx'
import Post from './Component/Post/Post.jsx'
import ShowPost from './Component/ShowPostDetails/ShowPost.jsx'
import BarBar from './Component/BarBar/BarBar.jsx'
import ShowAll from './Component/showAll/ShowAll.jsx'
import Oopps from './Component/Oppos/Oopps.jsx'

 const router=createBrowserRouter([
  { 
    path:'/', 
     element:<Header></Header>,  
      errorElement:<Oopps></Oopps>,
     children:[
       { 
        path:'/about', 
         element:<About></About>
       }, 
       { 
        path:'/contact', 
        element:<Contact></Contact>
       }, 
       { 
        path:'/details', 
         element:<Details></Details>
       }, 
        {
          path:'/users',
          loader:()=>fetch('https://jsonplaceholder.typicode.com/users'), 
         element:<Users></Users>
        }, 
         { 
          path:'/user/:userId', 
          loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
          element:<UserDetails></UserDetails>
         },

         {
         path:'/morepeople',  
          loader:()=>fetch('https://jsonplaceholder.typicode.com/albums'),
          element:<ManyPeople></ManyPeople>

         }, 
        { 
          path:'/result/:peopleId', 
           loader:({params})=> 
            fetch(`https://jsonplaceholder.typicode.com/albums/${params.peopleId}`),
           element:<PeopleDetails></PeopleDetails> 

        }, 
        { 
          path:'/post', 
           loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'), 
           element:<Post></Post> 
        }, 
        { 
          path:'/click/:clickId',  
          loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.clickId}`),
          element:<ShowPost></ShowPost>
        }, 
         { 
           path:'/barbar', 
           loader:()=>fetch('https://jsonplaceholder.typicode.com/comments'),
           element:<BarBar></BarBar> 
        },
        { 
          path:'/show/:useId', 
          loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/comments/${params.useId}`), 
          element:<ShowAll></ShowAll>
        }  
     ]
  }, 
  
 ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
