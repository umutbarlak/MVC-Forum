import { Link, NavLink } from "react-router-dom";

const HeaderView = () => {
  return (
    <header
      className="p-4 bg-black
     flex justify-between"
    >
      <h1>
        <Link to={"/"} className=" text-yellow-500 font-bold text-3xl">
          Forum
        </Link>
      </h1>

      <nav className=" text-white flex gap-4 items-center border p-2 rounded-md transition hover:bg-yellow-500">
        <NavLink to={"/"}>Gönderiler</NavLink>
        <NavLink to={"/create"}>Gönderi Ekle</NavLink>
      </nav>
    </header>
  );
};

export default HeaderView;
