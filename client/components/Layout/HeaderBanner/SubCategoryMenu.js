import { removeArgumentsFromDocument } from "apollo-utilities"

// {GET_CATEGORIES.productcategories
//   .filter(cat => cat.id === openMenu)[0]
//   .subcategories.map(subcat => (
//     <div className="item" key={subcat.id}>
//       {subcat.title}
//     </div>
//   ))}

const SubCategoryMenu = ({ openMenu, GET_CATEGORIES }) => {
  console.log("hehehe", GET_CATEGORIES)
  return (
    <div
      style={{
        fontSize: 20,
        fontWeight: "bold",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        width: 140
      }}
    >
      {GET_CATEGORIES.filter(
        cat => cat.id === openMenu.toString()
      )[0].subcategories.map(subcat => (
        <div className="item" id={subcat.id}>
          {subcat.title}
        </div>
      ))}
      <style jsx>{`
        .item {
          margin: 10px 0px 10px 0px;
          transition: background 0.3s;
          cursor: pointer;
          background: white;
        }
        .item:hover {
          background: #0271b1;
          box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
        }
      `}</style>
    </div>
  )
}

export default SubCategoryMenu
