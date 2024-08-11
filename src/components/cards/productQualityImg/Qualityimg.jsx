const Qualityimg = function () {

//  product description img

const breathable ='https://m.media-amazon.com/images/S/aplus-media-library-service-media/0868483d-6060-48fe-97b1-5f32c9dfdb94.__CR0,0,220,220_PT0_SX220_V1___.jpg'
const washable ='https://m.media-amazon.com/images/S/aplus-media-library-service-media/88481a96-b0f9-4ca9-8c3e-1500b867cad1.__CR0,0,220,220_PT0_SX220_V1___.jpg'
 const fabric= 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/c82ab700-06ee-4023-8129-bc339c6a7011.__CR0,0,220,220_PT0_SX220_V1___.jpg'
 const SkinFriendly ='https://m.media-amazon.com/images/S/aplus-media-library-service-media/fd1e35dd-82b8-4730-a9b6-736779b2c43c.__CR0,0,220,220_PT0_SX220_V1___.jpg'

 const productDesImg=[breathable, washable, fabric, SkinFriendly]

  return (
    <>
      <div className="flex justify-around w-[24rem] ">
        {productDesImg.map((img, index) => (
          <div className="h-[5rem] w-[5rem] rounded-lg">
            <img
              src={img}
              className="w-[100%] h-[100%] cursor-pointer "
              alt="img"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-around w-[24rem] py-1">
        <div className="w-[5rem] text-sm text-gray-500 text-center">
          Breathable
        </div>
        <div className="w-[5rem] text-sm text-gray-500 text-center">
          Washable
        </div>
        <div className="w-[5rem] text-sm text-gray-500 text-center">Soft Fabric</div>
        <div className="w-[5rem] text-sm text-gray-500 text-center">
          Skin Friendly
        </div>
      </div>
    </>
  );
};
export default Qualityimg;
