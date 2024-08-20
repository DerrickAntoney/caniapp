

const Watch = () => {
  return (
    <div className='w-[80%] flex justify-between mt-12'>
        <div className="sidebar w-[20%]">
          <div>Recent Lectures</div>
          <div>
            <h1>Categories</h1>
            <div>
              <div className="p-1 bg-amber-200 text-black">Tag 1</div>
              <div className="p-1 bg-amber-200 text-black">Tag 1</div>
              <div className="p-1 bg-amber-200 text-black">Tag 1</div>
            </div>
          </div>
        </div>
        <div className="w-[78%]">
        <div className="text-4xl font-bold">My awesome title come on the top giving more details</div>
        <video className='video' width="640" height="480" controls src="../sampleVideos/sample001.mp4"/>
        </div>
    </div>
  )
}

export default Watch