import { useContext, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import ApplyCountContext from "../Context/ApplyCountContext";
import { FaBars, FaTimes } from "react-icons/fa";
import useAuthValue from "../hooks/useAuthValue";
const Navbar = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { applyCount } = useContext(ApplyCountContext);
  const { user, logOutUser } = useAuthValue();
  const [showModal, setShowModal] = useState(false);
  const nav = useNavigate();
  const links = (
    <>
      <li>
        <NavLink className={pathname.includes("Creative") && "active"} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/appliedJobs">Applied Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/allJobs">All Jobs</NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    setShowModal(true);
  };

  return (
    <nav className="w-full z-50">
      <div className="navbar w-11/12 mx-auto max-w-7xl">
        <div className="navbar-start">
          <Link to="/" className="text-2xl font-bold text-primary">
            Job<span className="text-secondary">Bazaar</span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4">{links}</ul>
        </div>

        <div className="navbar-end ">
          <Link to="/appliedJobs" className="relative btn btn-outline btn-sm">
            Applied
            {applyCount > 0 && (
              <span className="badge badge-secondary absolute -top-3 -right-3 text-xs">
                {applyCount}
              </span>
            )}
          </Link>

          {user && user.email && (
            <div className="hidden btn ml-2 lg:flex">
              <button onClick={handleLogOut}>Log Out</button>
            </div>
          )}

          {/* Modal */}
          {showModal && (
            <dialog id="my_modal_5" className="modal modal-open modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Thanks For Visiting Us!</h3>
                <p className="py-4">Are You Sure You Want to Log Out ?</p>
                <div className="modal-action">
                  <form method="dialog">
                    <button
                      onClick={() => {
                        logOutUser()
                          .then(() => {
                            setShowModal(false);
                            nav("/");
                          })
                          .catch((err) => {
                            alert(err);
                          });
                      }}
                      className="btn mr-3 px-9 bg-green-200"
                    >
                      Yes
                    </button>
                    <button
                      className="btn bg-red-200"
                      onClick={() => setShowModal(false)}
                    >
                      Not Now
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          )}

          <div
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden btn !cursor-pointer ml-3"
          >
            <button className="text-2xl cursor-pointer text-gray-700">
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute top-0 transition ease-in-out duration-700 right-0 bg-base-100 w-64 h-full shadow-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Menu</h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-xl cursor-pointer text-error"
              >
                <FaTimes />
              </button>
            </div>

            {user && user?.email ? (
              <button
                onClick={handleLogOut}
                className="text-center btn text-red-600"
              >
                Log Out
              </button>
            ) : (
              <Link to="/auth/login">
                <button className="text-center btn text-green-600">
                  Login Now!
                </button>
              </Link>
            )}

            <ul className="menu space-y-2">{links}</ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
