
import { FaChevronRight, FaFacebook, FaInstagram, FaWhatsapp, FaUserCircle } from 'react-icons/fa';

const Hero: React.FC = () => {
  
const background = 'https://fabielone.s3.us-west-1.amazonaws.com/portfolio/Design3.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJHMEUCIE224rHkXVxcvY%2FMiaoveS27QafmhCEwa2x8EO8ADdBGAiEA7f0aOXx%2BA3AhjM08EnbHh2uX%2FAoVd9pb1FlyNEFalqcq5AIIMxAEGgw0Njg2MjI2MDQyMDIiDCQJSlnytWiofF4HxSrBArjj5VBhP3Wlo6PHixrI80PYj7zAgjbK%2Bx8UOwDweNku9ZUjl%2Fja9SkJ%2FXrV2a612NiSbLvj9Bk%2FJ8ysFILq25RlFus6AQkRgV%2Fh0nXaZrI7cTx5nXsiVaFqWkVolI6NCb9Ks9ZWKPo5Ru6Lua3Dh7KKBqv0OdqBx9NI7eG552XghroLEw%2FA2yc8g2LR%2BnY7F7GCvLrfp%2FQR%2B%2FoX7BB8u%2FnI4OXObcO4fg6FSr5Xg7F5dGu8K14PkSnt2cI6YHUAthJjAzaHFkW%2FUV4Md0Uup%2Bhx%2Be%2BOc9o0ZAVL%2ByBVPUytOXP3lwj03RfF8MKkeHaIkvedH0LJMuhxuxD2nqIz8MCMhh40maBVOi%2F%2F2qZMHEa%2FtRyt9bKrySbyRerx41D8aXrWpE%2FLZUiccSkepLj%2F%2Fu%2B4iTpaxTm%2FCpAqg6tXFSDD0jChwcyzBjqzAkWPyOjowGRI8T6bZw8CcL2yfE8U6XhFDMWdupm222xUWNxBkG94ClGrj%2FuSIPU7b73H3asPzLnYRxdtoVgxj%2F8JqIgugu1VNQyULCS0H8zC9R8HB42kx09yuuMWrxnje1oNIvDYupuSiJdmVBR%2Bw4%2B8dBnYhNQJKpBd9elqbrg7rawaMyabAgZNC80z0ePjV0wvjKoiwTzuCa7lGBciC0hfpZhuDL97Mih2ACZzQ9N9%2FcC9OBqzO6MYVU5naEMuruhr2urf6LHEnknRjLJRjW1lYiuF3h2GyLuSGauYYSe%2FqDjvHkq8J%2Bc7q5OI6A7X%2BDZiYltkxXE6H7%2B%2BdAieEcIA%2B5JBSVtC6sQnLXyzFO9KcBImWdr6vVsnnxEL%2FiRb1sI8uBbIHYaj0HFAB4D3nYYyBm8%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240619T183836Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAW2HAVO6VKTYQWATV%2F20240619%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=74fa6edefbb770cc5a0f9712ddcd857e5dc682c5fbc328eabfd395de71c238ab';
  return (
    <div className="w-full h-screen bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url('${background}')` }}>
  <div className="w-[90%] mx-auto h-full flex items-center justify-between py-10">
    <div className="lg:w-fit">
    <div className="sm:text-6xl xs:text-5xl text-left text-white font-serif font-extrabold uppercase">
        <h1>Your</h1>
        <h1>Digital</h1>
        <h1 className="bg-black/30 text-white rounded-sm px-1 shadow-sm shadow-white/50">Presence</h1>
        <h1>Is About to</h1>
        <h1>Take Off</h1>
      </div>
      <ul className="sm:text-xl xs:text-lg text-left text-white font-serif mt-4 list-disc ml-5">
        <li>Expert Web Development</li>
        <li>Online Marketing</li>
        <li>AI Consulting</li>
      </ul>
      <div className="w-auto flex items-center justify-between mt-6 py-1 px-4 uppercase bg-green-500 rounded-sm">
        <h3 className="text-white text-lg font-semibold">schedule a call</h3>
        <div className="w-[40%] flex items-center text-gray-700 text-4xl gap-0">
          <hr className="w-full border border-gray-700 relative -right-3" />
          <FaChevronRight />
        </div>
      </div>
      <p className="text-md text-white bg-black/30 font-semibold mt-1 capitalize rounded-lg p-2">Let&apos;s Connect and Discuss Your Project</p>
    </div>

    <div>
      <ul className="text-3xl text-white">
        <li className="flex justify-center items-center p-1 bg-black/40 rounded-full">
          <FaFacebook />
        </li>
        <li className="flex justify-center items-center p-1 bg-black/40 rounded-full mt-2">
          <FaInstagram />
        </li>
        <li className="flex justify-center items-center p-1 bg-black/40 rounded-full mt-2">
          <FaWhatsapp />
        </li>
        <li className="flex justify-center items-center p-1 bg-black/40 rounded-full mt-2">
          <FaUserCircle />
        </li>
      </ul>
    </div>
  </div>
</div>

  );
};

export default Hero;
