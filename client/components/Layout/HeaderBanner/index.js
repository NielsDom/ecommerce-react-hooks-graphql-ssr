import SubCategoryMenu from "./SubCategoryMenu"
import SubCategoryProducts from "./SubCategoryProducts"

const HeaderBanner = ({ _openMenu, openMenu, data, GET_CATEGORIES }) => {
  console.log("---- oyo", data)
  return (
    <div
      onMouseEnter={() => _openMenu(openMenu)}
      onMouseLeave={() => _openMenu(null)}
      style={{
        height: 300,
        position: "absolute",
        width: "100%",
        top: 60,
        background: "white",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          width: "70vw",
          minWidth: 768,
          background: "white",
          padding: 25,
          display: "flex"
        }}
      >
        <SubCategoryMenu GET_CATEGORIES={GET_CATEGORIES} openMenu={openMenu} />
        <SubCategoryProducts openMenu={openMenu} />
      </div>
    </div>
  )
}

export default HeaderBanner
