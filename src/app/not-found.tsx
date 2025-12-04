function NotFound() {
  return (
    <div className='bg-black h-screen w-screen flex justify-center items-center gap-5 text-white font-[system ui]'>
      <div className='font-bold text-2xl'>404</div>
      <div className='h-[40px] border border-white'></div>
      <div>This page could not be found</div>
    </div>
  );
}

export default NotFound;
