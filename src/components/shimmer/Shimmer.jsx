const Shimmer = () => {
  const shimmerItem = (
    <div className="w-[300px] h-[400px] bg-gray-100 m-2 rounded animate-pulse">
      <div className="h-[10rem] w-full rounded-t bg-slate-200"></div>
      <h3 className="h-6 bg-slate-200 w-[80%] my-2 mx-auto"></h3>
      <div className="h-24 bg-slate-200 mx-auto w-[90%] my-4"></div>
    </div>
  );

  return (
    <div className="flex flex-col items-center">
      <h2 className="h-10 bg-slate-100 w-[280px] my-4 animate-pulse"></h2>
      <div className="flex flex-wrap justify-center mt-4">
        {/* {Array(12).fill(shimmerItem)} */}
        {Array(12).fill().map((_, index) => (
  <div key={index}>{shimmerItem}</div>
))}

      </div>
    </div>
  );
};

export default Shimmer;
