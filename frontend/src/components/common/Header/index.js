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

  let headers = ["Home", "Profile", "Categories"];
  return (
    <>
      <div
        className="common-header"
        style={{
          background:
            scrollY !== 0
              ? "rgba(255, 255, 255, 0.4)"
              : "rgba(255, 255, 255, 0.8)",
        }}
      >
        <div className="header-logo">RecipeApp</div>
        <div className="header-nav-container">
          {headers.map((header, index) => {
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

                {index !== headers.length - 1 && <>&nbsp;|&nbsp;</>}
              </>
            );
          })}
        </div>
        <div class="header-menu-container">
          <Menu class="header-menu-icon" />
        </div>
      </div>
    </>
  );
};

export default Header;
