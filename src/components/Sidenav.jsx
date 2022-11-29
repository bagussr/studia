import React from "react";
import { NavLink, useLocation } from "react-router-dom";
// import logo
import Logo from "../assets/images/logo.png";

const Sidenav = () => {
  // is nav active, console log to see the result
  const location = useLocation();

  // if nav active, change svg color to white
  const setActiveColor = (path) => {
    if (location.pathname === path) {
      return "fill-white";
    } else {
      return "fill-gray-300";
    }
  }



  return (
    <aside className=" h-screen  sticky top-0 bottom-0 bg-soft-gray">
      {/* sidenav wrapper */}
      <div className=" py-5 px-10 relative ">
        {/* logo */}
        <div className="flex justify-center items-center">
          <img src={Logo} alt="" className="w-28" />
        </div>

        <ul className="flex flex-col gap-7  my-5">
          <li className="">
            <NavLink
              to="/h/dashboard"
              className={({ isActive }) =>
                `flex items-center py-2 px-4 rounded-lg hover:bg-primary  hover:text-white ${
                  isActive ? "bg-primary text-white" : "text-gray-300"
                }`
              }
            >
              <svg
                className={`${setActiveColor("/h/dashboard")}`}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill=""
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.9166 9.08329V3.41663C17.9166 2.16663 17.3832 1.66663 16.0582 1.66663H12.6916C11.3666 1.66663 10.8333 2.16663 10.8333 3.41663V9.08329C10.8333 10.3333 11.3666 10.8333 12.6916 10.8333H16.0582C17.3832 10.8333 17.9166 10.3333 17.9166 9.08329Z"
                  fill=""
                />
                <path
                  d="M9.16659 10.9166V16.5833C9.16659 17.8333 8.63325 18.3333 7.30825 18.3333H3.94159C2.61659 18.3333 2.08325 17.8333 2.08325 16.5833V10.9166C2.08325 9.66663 2.61659 9.16663 3.94159 9.16663H7.30825C8.63325 9.16663 9.16659 9.66663 9.16659 10.9166Z"
                  fill=""
                />
                <path
                  d="M17.9166 16.5833V14.25C17.9166 13 17.3832 12.5 16.0582 12.5H12.6916C11.3666 12.5 10.8333 13 10.8333 14.25V16.5833C10.8333 17.8333 11.3666 18.3333 12.6916 18.3333H16.0582C17.3832 18.3333 17.9166 17.8333 17.9166 16.5833Z"
                  fill=""
                />
                <path
                  d="M9.16659 5.74996V3.41663C9.16659 2.16663 8.63325 1.66663 7.30825 1.66663H3.94159C2.61659 1.66663 2.08325 2.16663 2.08325 3.41663V5.74996C2.08325 6.99996 2.61659 7.49996 3.94159 7.49996H7.30825C8.63325 7.49996 9.16659 6.99996 9.16659 5.74996Z"
                  fill=""
                />
              </svg>
              <span className="ml-4">Dashboard</span>
            </NavLink>
          </li>

          <li className="">
            <NavLink
              to="/h/classes"
              className={({ isActive }) =>
                `flex items-center py-2 px-4 rounded-lg hover:bg-primary  hover:text-white ${
                  isActive ? "bg-primary text-white" : "text-gray-300"
                }`
              }
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${setActiveColor("/h/classes")}`}
              >
                <path
                  d="M13.9584 2.96669V1.66669C13.9584 1.32502 13.6751 1.04169 13.3334 1.04169C12.9918 1.04169 12.7084 1.32502 12.7084 1.66669V2.91669H7.29178V1.66669C7.29178 1.32502 7.00844 1.04169 6.66678 1.04169C6.32511 1.04169 6.04178 1.32502 6.04178 1.66669V2.96669C3.79178 3.17502 2.70011 4.51669 2.53344 6.50835C2.51678 6.75002 2.71678 6.95002 2.95011 6.95002H17.0501C17.2918 6.95002 17.4918 6.74169 17.4668 6.50835C17.3001 4.51669 16.2084 3.17502 13.9584 2.96669Z"
                  fill=""
                />
                <path
                  d="M16.6667 8.20001H3.33333C2.875 8.20001 2.5 8.57501 2.5 9.03335V14.1667C2.5 16.6667 3.75 18.3333 6.66667 18.3333H13.3333C16.25 18.3333 17.5 16.6667 17.5 14.1667V9.03335C17.5 8.57501 17.125 8.20001 16.6667 8.20001ZM7.675 15.175C7.63333 15.2083 7.59167 15.25 7.55 15.275C7.5 15.3083 7.45 15.3333 7.4 15.35C7.35 15.375 7.3 15.3917 7.25 15.4C7.19167 15.4083 7.14167 15.4167 7.08333 15.4167C6.975 15.4167 6.86667 15.3917 6.76667 15.35C6.65833 15.3083 6.575 15.25 6.49167 15.175C6.34167 15.0167 6.25 14.8 6.25 14.5833C6.25 14.3667 6.34167 14.15 6.49167 13.9917C6.575 13.9167 6.65833 13.8583 6.76667 13.8167C6.91667 13.75 7.08333 13.7333 7.25 13.7667C7.3 13.775 7.35 13.7917 7.4 13.8167C7.45 13.8333 7.5 13.8583 7.55 13.8917C7.59167 13.925 7.63333 13.9583 7.675 13.9917C7.825 14.15 7.91667 14.3667 7.91667 14.5833C7.91667 14.8 7.825 15.0167 7.675 15.175ZM7.675 12.2583C7.51667 12.4083 7.3 12.5 7.08333 12.5C6.86667 12.5 6.65 12.4083 6.49167 12.2583C6.34167 12.1 6.25 11.8833 6.25 11.6667C6.25 11.45 6.34167 11.2333 6.49167 11.075C6.725 10.8417 7.09167 10.7667 7.4 10.9C7.50833 10.9417 7.6 11 7.675 11.075C7.825 11.2333 7.91667 11.45 7.91667 11.6667C7.91667 11.8833 7.825 12.1 7.675 12.2583ZM10.5917 15.175C10.4333 15.325 10.2167 15.4167 10 15.4167C9.78333 15.4167 9.56667 15.325 9.40833 15.175C9.25833 15.0167 9.16667 14.8 9.16667 14.5833C9.16667 14.3667 9.25833 14.15 9.40833 13.9917C9.71667 13.6833 10.2833 13.6833 10.5917 13.9917C10.7417 14.15 10.8333 14.3667 10.8333 14.5833C10.8333 14.8 10.7417 15.0167 10.5917 15.175ZM10.5917 12.2583C10.55 12.2917 10.5083 12.325 10.4667 12.3583C10.4167 12.3917 10.3667 12.4167 10.3167 12.4333C10.2667 12.4583 10.2167 12.475 10.1667 12.4833C10.1083 12.4917 10.0583 12.5 10 12.5C9.78333 12.5 9.56667 12.4083 9.40833 12.2583C9.25833 12.1 9.16667 11.8833 9.16667 11.6667C9.16667 11.45 9.25833 11.2333 9.40833 11.075C9.48333 11 9.575 10.9417 9.68333 10.9C9.99167 10.7667 10.3583 10.8417 10.5917 11.075C10.7417 11.2333 10.8333 11.45 10.8333 11.6667C10.8333 11.8833 10.7417 12.1 10.5917 12.2583ZM13.5083 15.175C13.35 15.325 13.1333 15.4167 12.9167 15.4167C12.7 15.4167 12.4833 15.325 12.325 15.175C12.175 15.0167 12.0833 14.8 12.0833 14.5833C12.0833 14.3667 12.175 14.15 12.325 13.9917C12.6333 13.6833 13.2 13.6833 13.5083 13.9917C13.6583 14.15 13.75 14.3667 13.75 14.5833C13.75 14.8 13.6583 15.0167 13.5083 15.175ZM13.5083 12.2583C13.4667 12.2917 13.425 12.325 13.3833 12.3583C13.3333 12.3917 13.2833 12.4167 13.2333 12.4333C13.1833 12.4583 13.1333 12.475 13.0833 12.4833C13.025 12.4917 12.9667 12.5 12.9167 12.5C12.7 12.5 12.4833 12.4083 12.325 12.2583C12.175 12.1 12.0833 11.8833 12.0833 11.6667C12.0833 11.45 12.175 11.2333 12.325 11.075C12.4083 11 12.4917 10.9417 12.6 10.9C12.75 10.8333 12.9167 10.8167 13.0833 10.85C13.1333 10.8583 13.1833 10.875 13.2333 10.9C13.2833 10.9167 13.3333 10.9417 13.3833 10.975C13.425 11.0083 13.4667 11.0417 13.5083 11.075C13.6583 11.2333 13.75 11.45 13.75 11.6667C13.75 11.8833 13.6583 12.1 13.5083 12.2583Z"
                  fill=""
                />
              </svg>
              <span className="ml-4">Classes</span>
            </NavLink>
          </li>

          <li className="">
            <NavLink
              to="/h/hw"
              className={({ isActive }) =>
                `flex items-center py-2 px-4 rounded-lg hover:bg-primary  hover:text-white ${
                  isActive ? "bg-primary text-white" : "text-gray-300"
                }`
              }
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${setActiveColor("h/hw")}`}
              >
                <path d="M17.5751 5.81664C16.8668 5.03331 15.6834 4.64164 13.9668 4.64164H13.7668V4.60831C13.7668 3.20831 13.7668 1.47498 10.6334 1.47498H9.36678C6.23344 1.47498 6.23345 3.21664 6.23345 4.60831V4.64998H6.03344C4.30845 4.64998 3.13345 5.04164 2.42511 5.82498C1.60011 6.74164 1.62511 7.97498 1.70845 8.81664L1.71678 8.87497L1.77757 9.51326C1.79183 9.66303 1.87258 9.79841 1.99858 9.88063C2.20063 10.0125 2.51037 10.2112 2.70011 10.3166C2.81678 10.3916 2.94178 10.4583 3.06678 10.525C4.49178 11.3083 6.05845 11.8333 7.65011 12.0916C7.72511 12.875 8.06678 13.7916 9.89178 13.7916C11.7168 13.7916 12.0751 12.8833 12.1334 12.075C13.8334 11.8 15.4751 11.2083 16.9584 10.3416C17.0084 10.3166 17.0418 10.2916 17.0834 10.2666C17.4036 10.0857 17.7355 9.86397 18.0401 9.6453C18.1533 9.56403 18.2255 9.43789 18.2409 9.29938L18.2501 9.21664L18.2918 8.82498C18.3001 8.77498 18.3001 8.73331 18.3084 8.67497C18.3751 7.83331 18.3584 6.68331 17.5751 5.81664ZM10.9084 11.525C10.9084 12.4083 10.9084 12.5416 9.88344 12.5416C8.85844 12.5416 8.85844 12.3833 8.85844 11.5333V10.4833H10.9084V11.525ZM7.42511 4.64164V4.60831C7.42511 3.19164 7.42511 2.66664 9.36678 2.66664H10.6334C12.5751 2.66664 12.5751 3.19998 12.5751 4.60831V4.64998H7.42511V4.64164Z" />
                <path d="M17.2597 11.5091C17.6137 11.3418 18.0209 11.6223 17.9855 12.0123L17.7 15.1583C17.525 16.825 16.8416 18.525 13.175 18.525H6.82495C3.15828 18.525 2.47495 16.825 2.29995 15.1667L2.02924 12.1888C1.9942 11.8034 2.39252 11.5233 2.74555 11.682C3.70476 12.1131 5.31676 12.8064 6.35274 13.0854C6.51675 13.1296 6.6499 13.2476 6.7243 13.4003C7.23851 14.4556 8.32769 15.0167 9.89162 15.0167C11.4401 15.0167 12.5426 14.434 13.0588 13.3755C13.1333 13.2227 13.2664 13.1048 13.4304 13.0604C14.5322 12.7619 16.2536 11.9846 17.2597 11.5091Z" />
              </svg>
              <span className="ml-4">Homework</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/h/msg"
              className={({ isActive }) =>
                `flex items-center py-2 px-4 rounded-lg hover:bg-primary  hover:text-white ${
                  isActive ? "bg-primary text-white" : "text-gray-300"
                }`
              }
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${setActiveColor("/h/msg")}`}
              >
                <path d="M14.1667 2.91669H5.83342C3.33341 2.91669 1.66675 4.16669 1.66675 7.08335V12.9167C1.66675 15.8334 3.33341 17.0834 5.83342 17.0834H14.1667C16.6667 17.0834 18.3334 15.8334 18.3334 12.9167V7.08335C18.3334 4.16669 16.6667 2.91669 14.1667 2.91669ZM14.5584 7.99169L11.9501 10.075C11.4001 10.5167 10.7001 10.7334 10.0001 10.7334C9.30008 10.7334 8.59175 10.5167 8.05008 10.075L5.44175 7.99169C5.17508 7.77502 5.13341 7.37502 5.34175 7.10835C5.55841 6.84169 5.95008 6.79169 6.21675 7.00835L8.82508 9.09169C9.45842 9.60002 10.5334 9.60002 11.1667 9.09169L13.7751 7.00835C14.0417 6.79169 14.4417 6.83335 14.6501 7.10835C14.8667 7.37502 14.8251 7.77502 14.5584 7.99169Z" />
              </svg>
              <span className="ml-4">Message</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/h/group"
              className={({ isActive }) =>
                `flex items-center py-2 px-4 rounded-lg hover:bg-primary  hover:text-white ${
                  isActive ? "bg-primary text-white" : "text-gray-300"
                }`
              }
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${setActiveColor("/h/group")}`}
              >
                <path d="M7.50008 1.66669C5.31675 1.66669 3.54175 3.44169 3.54175 5.62502C3.54175 7.76669 5.21675 9.50002 7.40008 9.57502C7.46675 9.56669 7.53342 9.56669 7.58342 9.57502C7.60008 9.57502 7.60842 9.57502 7.62508 9.57502C7.63342 9.57502 7.63342 9.57502 7.64175 9.57502C9.77508 9.50002 11.4501 7.76669 11.4584 5.62502C11.4584 3.44169 9.68342 1.66669 7.50008 1.66669Z" />
                <path d="M11.7333 11.7917C9.4083 10.2417 5.61663 10.2417 3.27497 11.7917C2.21663 12.5 1.6333 13.4583 1.6333 14.4833C1.6333 15.5083 2.21663 16.4583 3.26663 17.1583C4.4333 17.9417 5.96663 18.3333 7.49997 18.3333C9.0333 18.3333 10.5666 17.9417 11.7333 17.1583C12.7833 16.45 13.3666 15.5 13.3666 14.4667C13.3583 13.4417 12.7833 12.4917 11.7333 11.7917Z" />
                <path d="M16.6583 6.11665C16.7916 7.73331 15.6416 9.14998 14.05 9.34165C14.0416 9.34165 14.0416 9.34165 14.0333 9.34165H14.0083C13.9583 9.34165 13.9083 9.34165 13.8666 9.35831C13.0583 9.39998 12.3166 9.14165 11.7583 8.66665C12.6166 7.89998 13.1083 6.74998 13.0083 5.49998C12.95 4.82498 12.7166 4.20831 12.3666 3.68331C12.6833 3.52498 13.05 3.42498 13.425 3.39165C15.0583 3.24998 16.5166 4.46665 16.6583 6.11665Z" />
                <path d="M18.3251 13.825C18.2584 14.6333 17.7418 15.3333 16.8751 15.8083C16.0418 16.2667 14.9918 16.4833 13.9501 16.4583C14.5501 15.9167 14.9001 15.2417 14.9668 14.525C15.0501 13.4917 14.5584 12.5 13.5751 11.7083C13.0168 11.2667 12.3668 10.9167 11.6584 10.6583C13.5001 10.125 15.8168 10.4833 17.2418 11.6333C18.0084 12.25 18.4001 13.025 18.3251 13.825Z" />
              </svg>
              <span className="ml-4">Group</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/h/settings"
              className={({ isActive }) =>
                `flex items-center py-2 px-4 rounded-lg hover:bg-primary  hover:text-white ${
                  isActive ? "bg-primary text-white" : "text-gray-300"
                }`
              }
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${setActiveColor("/h/settings")}`}
              >
                <path d="M16.7501 7.68336C15.2417 7.68336 14.6251 6.6167 15.3751 5.30836C15.8084 4.55003 15.5501 3.58336 14.7917 3.15003L13.3501 2.32503C12.6917 1.93336 11.8417 2.1667 11.4501 2.82503L11.3584 2.98336C10.6084 4.2917 9.37508 4.2917 8.61675 2.98336L8.52508 2.82503C8.15008 2.1667 7.30008 1.93336 6.64175 2.32503L5.20008 3.15003C4.44175 3.58336 4.18341 4.55836 4.61675 5.3167C5.37508 6.6167 4.75841 7.68336 3.25008 7.68336C2.38341 7.68336 1.66675 8.3917 1.66675 9.2667V10.7334C1.66675 11.6 2.37508 12.3167 3.25008 12.3167C4.75841 12.3167 5.37508 13.3834 4.61675 14.6917C4.18341 15.45 4.44175 16.4167 5.20008 16.85L6.64175 17.675C7.30008 18.0667 8.15008 17.8334 8.54175 17.175L8.63341 17.0167C9.38341 15.7084 10.6167 15.7084 11.3751 17.0167L11.4667 17.175C11.8584 17.8334 12.7084 18.0667 13.3667 17.675L14.8084 16.85C15.5667 16.4167 15.8251 15.4417 15.3917 14.6917C14.6334 13.3834 15.2501 12.3167 16.7584 12.3167C17.6251 12.3167 18.3417 11.6084 18.3417 10.7334V9.2667C18.3334 8.40003 17.6251 7.68336 16.7501 7.68336ZM10.0001 12.7084C8.50842 12.7084 7.29175 11.4917 7.29175 10C7.29175 8.50836 8.50842 7.2917 10.0001 7.2917C11.4917 7.2917 12.7084 8.50836 12.7084 10C12.7084 11.4917 11.4917 12.7084 10.0001 12.7084Z" />
              </svg>
              <span className="ml-4">Settings</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* logout */}
      <div className="absolute bottom-0  flex justify-center w-full">
        <NavLink to="/auth/login" className="flex py-2 px-4 text-gray-400 rounded-lg">
          <button className="flex items-center  hover:bg-primary hover:text-white">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill=""
              className="fill-gray-400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.8 2H14.2C11 2 9 4 9 7.2V11.25H15.25C15.66 11.25 16 11.59 16 12C16 12.41 15.66 12.75 15.25 12.75H9V16.8C9 20 11 22 14.2 22H16.79C19.99 22 21.99 20 21.99 16.8V7.2C22 4 20 2 16.8 2Z"
                fill=""
              />
              <path
                d="M4.55994 11.25L6.62994 9.18C6.77994 9.03 6.84994 8.84 6.84994 8.65C6.84994 8.46 6.77994 8.26 6.62994 8.12C6.33994 7.83 5.85994 7.83 5.56994 8.12L2.21994 11.47C1.92994 11.76 1.92994 12.24 2.21994 12.53L5.56994 15.88C5.85994 16.17 6.33994 16.17 6.62994 15.88C6.91994 15.59 6.91994 15.11 6.62994 14.82L4.55994 12.75H8.99994V11.25H4.55994Z"
              />
            </svg>
          </button>
          <span className="ml-4">Logout</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidenav;
