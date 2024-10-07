import config from "@config/config.json";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ src }) => {
  // Destructuring items from config object
  const { base_url, logo, logo_width, logo_height, logo_text, title } =
    config.site;

  return (
    <Link href={base_url} className="navbar-brand block py-1">
      {src || logo ? (
        <div style={{ position: "relative", width: "100%", maxWidth: `${logo_width}px`, height: "auto" }}>
          <Image
            src={src ? src : logo}
            alt={title}
            layout="responsive"
            width={logo_width.replace("px", "")}
            height={logo_height.replace("px", "")}
            priority
          />
        </div>
      ) : logo_text ? (
        <span className="logo-text">{logo_text}</span>
      ) : (
        <span className="logo-title">{title}</span>
      )}
    </Link>
  );
};

export default Logo;
