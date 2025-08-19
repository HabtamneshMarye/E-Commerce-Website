"use client";
import Link from "next/link";

const Login = () => {
  return (
    <div>
      <div className="flex mt-[90px]">
        <div>
          <img src="/images/Side Image.png" alt="phone-shop" className="ml-[-200px] w-[110vh] h-[760px] max-w-none object-cover" />
        </div>
        <div>
          <h1 className="mt-[140px] ml-[225px] font-bold text-[35px]" > Log in to Exclusive </h1>
          <p className="mt-[20px] ml-[225px]">Enter Your details below</p>
          <div>
            <input
              id="email"
              type="email"
              placeholder="Email or Phone nuber"
              className="px-5 py-2 border-0 w-100 border-b-2 border-gray-400 rounded-none ml-[225px] mt-[45px]"
            />

          </div>
          <div>
            <input
              id="email"
              type="email"
              placeholder="Password"
              required
              className="px-5 py-2 border-0 w-100 border-b-2 border-gray-400 rounded-none ml-[225px] mt-[45px]" />
          </div>
          <div className="flex gap-57 ml-[250px] mt-[50px] ">
            <Link href="/home" className="bg-red-500 text-white ml-[-25px] mt-[3px] border rounded-lg w-35 pl-11 pt-1 pb-5 h-11 text-[20px] font-bold"> Login</Link>
            <Link href="/signup" className="text-red-500 mt-[15px] ml-[-90px]"> Forget Password</Link>
          </div>


        </div>

      </div>


    </div>
  )
}
export default Login;







