import { Link } from "@inertiajs/react";
import React from "react";
import model1 from "../../public/assets/imgs/model1.jpg"
const UserDropdown = () => {
  return (
    <>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={model1} />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <Link href="/logout" method="post" as="button" type="submit">Logout</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserDropdown;
