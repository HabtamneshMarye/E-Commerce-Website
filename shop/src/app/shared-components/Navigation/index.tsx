import Link from 'next/link';

export default function Navigation() {
    return (
        <nav className="bg-black text-white p-4 h-13">
            <div className="container mx-auto flex justify-between items-center">
                <p className='ml-[420px]'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! </p>
                <Link href="/home" className="text-25 textDecoration: underline ml-[-450px]">ShopNow</Link>
                <p>English ⌄</p>
            </div>
            <h1 className='mt-[40px] ml-[290px] font-bold text-black text-3xl'>Exclusive</h1>
            <div className="text-black mt-[-65px] ml-160 p-10 flex gap-21 text-xl font-normal">
                <Link href="/home" className='hover:underline'> Home </Link>
                <Link href="/contact" className='hover:underline'> Contact </Link>
                <Link href="/about" className='hover:underline'> About </Link>
                <Link href="/signup" className='hover:underline'> SignUp </Link>
                <div className="ml-[10vh] mt-[-5px] border rounded-full w-70 h-11 pl-[15px] pt-[5px] bg-white">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full h-full text-sm text-gray-800 bg-transparent focus:outline-none"
                    />
                </div>
            </div>
        </nav>
    );
}