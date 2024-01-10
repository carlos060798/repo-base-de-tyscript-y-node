import Image from "next/image"; // para usar imagenes en next
import { IoBrowsersOutline, IoLogoReact, IoCalculator } from "react-icons/io5";
import SidebarMenuItem from "./SibarMenu.item";

const menuItem = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={40} />,
    title: "Dashboard",
    subtitle: "Visualize your data",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={40} />,
    title: "Counters",
    subtitle: " contador Client Side ",
  },
];

function Sibar() {
  return (
    <>
      <div
        id="menu"
        style={{ width: 400 }}
        className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64  left-0 h-screen overflow-y-scroll"
      >
        <div id="logo" className="my-4 px-6">
          <h1 className="text-lg md:text-2xl font-bold text-white">
            <IoLogoReact className="mr-2"></IoLogoReact>
            <span>Dash</span>
            <span className="text-blue-500">8</span>.
          </h1>
          <p className="text-slate-500 text-sm">
            Manage your actions and activities
          </p>
        </div>
        <div id="profile" className="px-6 py-10">
          <p className="text-slate-500">Welcome back,</p>
          <a href="#" className="inline-flex space-x-2 items-center">
            <span>
              <Image
                className="rounded-full w-8 h-8"
                src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
                alt="una imagen"
                width={128}
                height={48}
              />
            </span>
            <span className="text-sm md:text-base font-bold">
              Edward Tompson
            </span>
          </a>
        </div>
        <div id="nav" className="w-full px-6">
          {menuItem.map((item) => (
            <SidebarMenuItem key={item.path} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Sibar;
