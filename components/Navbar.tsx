import { Button } from "@/components/ui/button";

import Mobilesidebar from "./mobile-sidebar";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <Mobilesidebar />
      <div className="w-full flex justify-end">
        <Button>click</Button>
      </div>
    </div>
  );
};

export default Navbar;
