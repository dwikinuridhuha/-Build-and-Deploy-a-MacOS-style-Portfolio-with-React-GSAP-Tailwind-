import dayjs from "dayjs";
import { navLinks, navIcons } from "#constants";

const NavBar = () => {
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="Logo" />
        <p className="font-bold">Dwiki's Portofolio</p>

        <ul>
          {navLinks.map(({ id, name }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

        <div>
            <ul>
                {navIcons.map(({ id, img }) => (
                    <li key={id}>
                        <img src={img} className="icon-hover" alt={`${id} icon`} />
                    </li>
                ))}
            </ul>

            <time>{dayjs().format("ddd MMM D h:mm A")}</time>
        </div>
    </nav>
  );
};

export default NavBar;