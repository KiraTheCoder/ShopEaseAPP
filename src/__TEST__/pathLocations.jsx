import { useLocation, useMatch } from 'react-router-dom';

function MyComponent() {
    const location = useLocation();
    // const match = useMatch('/about');
    // console.log(location.pathname); // Current path
    return <>
        <div className=' font-sans absolute left-7 font-thin text-gray-900 '>Current Page: {location.pathname}</div>
        {/* <div className='bg-green-600 text-red-900'>
              {match ? "you are right" : "you are wrong"}   
          </div> */}
    </>
}
export default MyComponent