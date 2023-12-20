import { Button } from "@components/ui/Button";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/Avatar";

const Header = () => {
  return (
    <header className="bg-white min-h-[64px] px-8 flex items-center">
      {/* Profile */}
      <Button className="p-0 w-auto h-auto bg-transparent hover:bg-transparent ml-auto">
        <Avatar className="w-9 h-9">
          <AvatarImage src="/images/code.png" alt="Avatar" />
          <AvatarFallback>Wait</AvatarFallback>
        </Avatar>
      </Button>
    </header>
  );
};

export default Header;
