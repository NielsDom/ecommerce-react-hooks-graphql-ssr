const SubCategoryProducts = ({ openMenu }) => {
  return (
    <div
      style={{
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        height: "100%"
      }}
    >
      Sub category products for {openMenu}
    </div>
  )
}

export default SubCategoryProducts
