import { Link } from 'react-router';
import { ModeToggle } from './mode-toggler';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarTrigger } from './ui/menubar';
import { AlignJustify } from 'lucide-react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center bg-gray-800 text-white p-4'>
            <Link to={"/"}>Library</Link>

            {/* <div className='flex space-x-4'>
                <Link to={"/all-books"}>All Books</Link>
                <Link to={"/borrow-books"}>Borrow Summary</Link>
                <Link to={"/manage-books"}>Manage Books</Link>
            </div> */}

            <Menubar className='bg-transparent'>

                <MenubarMenu>
                    <MenubarTrigger >
                        <AlignJustify />
                    </MenubarTrigger>
                    <MenubarContent>
                        <MenubarRadioGroup value="benoit">
                            <MenubarRadioItem value="andy"><ModeToggle /></MenubarRadioItem>
                            
                        </MenubarRadioGroup>
                        <MenubarSeparator />
                        <MenubarItem inset><Link to={"/all-books"}>All Books</Link></MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem inset><Link to={"/borrow-books"}>Borrow Summary</Link></MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem inset><Link to={"/manage-books"}>Manage Books</Link></MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
            
        </div>
    );
};

export default Navbar;