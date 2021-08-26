import { React, useEffect } from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { setScrollY } from "../../../redux/slices/scrollSlice";
import { setPage } from "../../../redux/slices/pageSlice";
import { useHistory } from "react-router-dom";
import { Menu } from "@material-ui/icons";

const Header = () => {
  const { scrollY } = useSelector((state) => state.scroll);
  const { currPage } = useSelector((state) => state.page);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      dispatch(setScrollY({ scrollY: window.scrollY }));
    });
  });

  const handleNavigate = (header) => {
    dispatch(setPage({ currPage: header.toLowerCase() }));
    history.push({ pathname: `/${header.toLowerCase()}` });
  };

  let headers = ["Home", "Recipes", "Profile"];
  return (
    <>
      <div
        className="common-header"
        style={{
          background: scrollY !== 0 ? "var(--primary-fade)" : "var(--primary)",
        }}
      >
        <div className="header-logo">
          <img
            className="header-logo-img"
            src="https://image.flaticon.com/icons/png/512/2729/2729063.png"
            alt=""
          />
          Ashen
        </div>
        <div className="header-nav-container">
          {headers.map((header, _) => {
            return (
              <>
                <div
                  className="header-nav-item"
                  onClick={() => {
                    handleNavigate(header);
                  }}
                >
                  {header}
                  <div
                    className="header-nav-underline"
                    style={{
                      width: currPage === header.toLowerCase() ? "100%" : 0,
                    }}
                  ></div>
                </div>
              </>
            );
          })}
        </div>
        <Menu class="header-menu-icon" />
      </div>
    </>
  );
};

export default Header;
