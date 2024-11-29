import { Link, useLocation } from "react-router-dom";

const MenuItem = (props) => {
  const location = useLocation();

  return (
    <Link
      class="uppercase font-semibold tracking-wider text-lg md:text-sm"
      to={props.linkTo}
    >
      <div
        class={
          location.pathname === props.linkTo
            ? " md:py-1 md:px-3 p-4 bg-primary-light text-main-dark rounded-sm"
            : "md:py-1 md:px-3 p-4 text-slate-300  hover:text-primary-light rounded-sm"
        }
      >
        {props.children}
      </div>
    </Link>
  );
};

export default MenuItem;
