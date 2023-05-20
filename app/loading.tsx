export default function Loading() {
  return (
    <div className="w-full h-[100vh] bg-red-500 flex flex-col items-center justify-center">
      <div
        className="w-[80px] h-[84px] bg-contain bg-center cursor-pointer"
        // style={{ backgroundImage: `url(${Logo})` }}
      />
      <p className="text-[18px] font-medium">Đang tải trang đợi xíu... 😘</p>
    </div>
  );
}
