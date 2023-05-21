import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Menu from './components/layout/Menu/Menu';

const App = () => {
   const [openMenu, setOpenMenu] = useState(false);

   return (
      <>
         <Outlet />
         
         {openMenu && (
            <Menu open={openMenu} setOpen={setOpenMenu} />
         )}
      </>
   );
}

export default App;
