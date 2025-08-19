"use client";
import Link from "next/link";

const Signup = () => {
  return (
    <div>
      <div className="flex mt-[90px] pb-15">
        <div>
          <img src="/images/Side Image.png" alt="phone-shop" className="ml-[-200px] w-[110vh] h-[715px] max-w-none object-cover" />
        </div>
        <div className="mt-[-20px] ml-35">
          <h1 className="mt-[90px] ml-[220px] font-bold text-[35px]" >
            Create an account
          </h1>
          <p className="mt-[25px] ml-[225px]">Enter your details below</p>
          <div>
            <input
              id="name"
              type="text"
              placeholder="Name"
              required
              className="px-5 py-2 border-0 w-100 border-b-2 border-gray-400 rounded-none mt-[50px] ml-[220px]" />

          </div>
          <div>
            <input
              id="email"
              type="email"
              placeholder="Email or Phone nuber"
              required
              className="px-5 py-2 border-0 w-100 border-b-2 border-gray-400 rounded-none mt-[50px] ml-[220px]"
            />

          </div>
          <div>
            <input
              id="email"
              type="email"
              placeholder="Password"
              required
              className="px-5 py-2 border-0 w-100 border-b-2 border-gray-400 rounded-none mt-[50px] ml-[220px]" />
          </div>
          <div className="flex gap-57 ml-[250px] mt-[50px] ">
            <Link href={"/"} className="bg-red-500 text-white ml-[-32px] mt-[-3px] border rounded-lg w-101 pl-32 pt-2 pb-5 h-13 text-[20px] font-bold"> Create Account</Link>
            <Link href={"/"} className=" text-black ml-[-630px] mt-[70px] border rounded-lg w-101 pl-32 pt-2 pb-5 h-13 text-[19px]"><img src="/images/next-google.png" className=" w-7 h-7 ml-[-45px] mt-[4px]" /><p className="mt-[-30px]"> Sign up with Google</p></Link>
          </div>
          <p className="w-40 mt-[30px] ml-[300px]">Aready have account?</p>
          <Link href="/login" className="text-decoration-line: underline"><p className="mt-[-24px] ml-[465px]">Log in</p></Link>
        </div>

      </div>


    </div>
  )
}
export default Signup;







