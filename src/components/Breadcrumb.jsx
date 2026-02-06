import { Link } from "react-router-dom"

const Breadcrumb = ({ items }) => {
  return (
    <div className="text-sm text-gray-400 mb-8">
      {items.map((item, index) => (
        <span key={index}>
          {item.path ? (
            <Link
              to={item.path}
              className="hover:text-white transition"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-white">{item.label}</span>
          )}

          {index < items.length - 1 && (
            <span className="mx-2 text-gray-600">›</span>
          )}
        </span>
      ))}
    </div>
  )
}

export default Breadcrumb
