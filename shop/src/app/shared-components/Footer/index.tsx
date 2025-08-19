export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-4 md:px-0">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Exclusive</h2>
          <p className="text-lg mb-4">Subscribe</p>
          <p className="text-base">Get 10% off your first order</p>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-md bg-gray-800 pl-2 text-white border-none focus:outline-none"
            />
            <button className="p-3 text-black rounded-r-md"></button>
            <img src="/images/icon-send.png" className="mt-[-30px] ml-[190px]"></img>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Support</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</a></li>
            <li><a href="#" className="hover:underline">exclusive@gmail.com</a></li>
            <li><a href="#" className="hover:underline">+88015-88888-9999</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Account</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">My Account</a></li>
            <li><a href="#" className="hover:underline">Login / Register</a></li>
            <li><a href="#" className="hover:underline">Cart</a></li>
            <li><a href="#" className="hover:underline">Wishlist</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Link</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms Of Use</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Download App</h2>
          <p className="pb-5">Save $3 with App New User Only</p>
          <div className="space-y-4">
            <img src="/images/Qr Code.png" alt="QR Code" className="w-24 h-24" />
            <div className="ml-35 mt-[-115px] space-y-2">
              <img src="/images/GooglePlay.png" alt="Google Play" className="w-32" />
              <img src="/images/AppStore.png" alt="App Store" className="w-32" />
            </div>

            <div className="flex gap-4 mt-4">
              <img src="/images/Icon-Facebook.png" alt="Facebook" className="w-6 h-6 hover:opacity-80" />
              <img src="/images/Group.png" alt="Twitter" className="w-6 h-6 hover:opacity-80" />
              <img src="/images/icon-instagram.png" alt="Instagram" className="w-6 h-6 hover:opacity-80" />
              <img src="/images/Icon-Linkedin.png" alt="LinkedIn" className="w-6 h-6 hover:opacity-80" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-6 text-center">
        <p className="text-sm">&copy; Copyright Rimel 2022. All rights reserved.</p>
      </div>
    </footer>
  );
}