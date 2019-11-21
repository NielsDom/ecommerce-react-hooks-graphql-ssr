import Link from "next/link"

const Header = ({ _openMenu }) => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#1976d2",
          height: 60,
          color: "white",
          boxShadow:
            "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
          display: "flex",
          width: "100%",
          fontSize: 22
        }}
      >
        <div
          style={{
            width: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Link href="/test" as="/test">
            <a style={{ textDecoration: "none", color: "white" }}>MY LOGO</a>
          </Link>
        </div>

        <div
          style={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Link href="/products" as="/products">
            <a
              className="headerMenu"
              onMouseEnter={() => _openMenu(1)}
              onMouseLeave={() => _openMenu(null)}
            >
              CATEGORY 1
            </a>
          </Link>
          <Link href="/products" as="/products">
            <a
              className="headerMenu"
              onMouseEnter={() => _openMenu(2)}
              onMouseLeave={() => _openMenu(null)}
            >
              CATEGORY 2
            </a>
          </Link>
          <Link href="/products" as="/products">
            <a
              className="headerMenu"
              onMouseEnter={() => _openMenu(3)}
              onMouseLeave={() => _openMenu(null)}
            >
              CATEGORY 3
            </a>
          </Link>
        </div>

        <div
          style={{
            width: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          right
        </div>
      </div>

      <style jsx>{`
        .headerMenu {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: white;
          fontsize: 22px;
          height: 100%;
          margin: 0px 30px 0px 30px;
        }
        .headerMenu:hover {
          background: #0271b1;
          box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  )
}

export default Header
