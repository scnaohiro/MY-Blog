export default function Loading() {
  return (
    <div>
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex border rounded-lg p-4 m-4 animate-pulse">
          <div className="w-80 h-40 bg-gray-200 rounded" />
          <div className="mt-5 ml-4 flex-1">
            <div className="h-6 bg-gray-200 rounded w-1/2 mb-3" />
            <div className="h-4 bg-gray-200 rounded w-3/4" />
          </div>
        </div>
      ))}
    </div>
  )
}