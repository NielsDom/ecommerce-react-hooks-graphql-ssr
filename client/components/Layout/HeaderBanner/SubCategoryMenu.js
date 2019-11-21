import { removeArgumentsFromDocument } from "apollo-utilities"

const SubCategoryMenu = () => {
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
      <div className="item">Subcategory 1</div>
      <div className="item">Subcategory 2</div>
      <div className="item">Subcategory 3</div>
      <div className="item">Subcategory 4</div>
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
