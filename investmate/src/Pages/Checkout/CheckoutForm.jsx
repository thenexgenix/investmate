function CheckoutForm() {
  return (
    <div className="py-6 md:py-10 lg:py-12 min-h-screen">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-[500] mb-8 md:mb-10 lg:mb-12">
        Checkout
      </h1>
      <h2 className="text-2xl font-[500] mb-6 text-black/70">
        Billing Address
      </h2>
      <form className="space-y-4">
        {/* First Name and Last Name */}
        <div className="flex space-x-6">
          <div className="form-control w-full">
            <label className="label mb-3">
              <span className=" text-black/70 md:text-xl font-[500]">
                First Name <span className="text-[#00B67A]">*</span>
              </span>
            </label>
            <input
              type="text"
              className="input input-bordered md:text-xl w-full"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label mb-3">
              <span className=" text-black/70 md:text-xl font-[500]">
                Last Name <span className="text-[#00B67A]">*</span>
              </span>
            </label>
            <input
              type="text"
              className="input input-bordered md:text-xl w-full"
              required
            />
          </div>
        </div>

        {/* Country/Region */}
        <div className="form-control">
          <label className="label mb-3">
            <span className=" text-black/70 md:text-xl font-[500]">
              Country/Region <span className="text-[#00B67A]">*</span>
            </span>
          </label>
          <select
            className="select select-bordered md:text-xl w-full"
            defaultValue="Bangladesh"
          >
            <option>Bangladesh</option>
            <option>India</option>
            <option>USA</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Street Address */}
        <div className="form-control">
          <label className="label mb-3">
            <span className=" text-black/70 md:text-xl font-[500]">
              Street Address <span className="text-[#00B67A]">*</span>
            </span>
          </label>
          <input
            type="text"
            placeholder="House number and street name"
            className="input input-bordered md:text-xl w-full"
            required
          />
          <input
            type="text"
            placeholder="Apartment, suite, unit, etc. (optional)"
            className="input input-bordered md:text-xl w-full mt-2"
          />
        </div>

        {/* Town/City */}
        <div className="form-control">
          <label className="label mb-3">
            <span className=" text-black/70 md:text-xl font-[500]">
              Town/City <span className="text-[#00B67A]">*</span>
            </span>
          </label>
          <input
            type="text"
            className="input input-bordered md:text-xl w-full"
            required
          />
        </div>

        {/* District */}
        <div className="form-control">
          <label className="label mb-3">
            <span className=" text-black/70 md:text-xl font-[500]">
              District <span className="text-[#00B67A]">*</span>
            </span>
          </label>
          <select
            className="select select-bordered md:text-xl w-full"
            defaultValue="Chittagong"
          >
            <option>Dhaka</option>
            <option>Chittagong</option>
            <option>Sylhet</option>
            <option>Barishal</option>
            <option>Khulna</option>
            <option>Rajshahi</option>
            <option>Rangpur</option>
            <option>Mymensingh </option>
          </select>
        </div>

        {/* Postcode/ZIP */}
        <div className="form-control">
          <label className="label mb-3">
            <span className=" text-black/70 md:text-xl font-[500]">
              Postcode/ZIP (optional)
            </span>
          </label>
          <input
            type="text"
            className="input input-bordered md:text-xl w-full"
          />
        </div>

        {/* Phone */}
        <div className="form-control">
          <label className="label mb-3">
            <span className=" text-black/70 md:text-xl font-[500]">
              Phone <span className="text-[#00B67A]">*</span>
            </span>
          </label>
          <input
            type="tel"
            className="input input-bordered md:text-xl w-full"
            required
          />
        </div>

        {/* Email */}
        <div className="form-control">
          <label className="label mb-3">
            <span className=" text-black/70 md:text-xl font-[500]">
              Email <span className="text-[#00B67A]">*</span>
            </span>
          </label>
          <input
            type="email"
            className="input input-bordered md:text-xl w-full"
            required
          />
        </div>

        {/* Amount Selection */}
        <div className="form-control">
          <label className="label mb-3">
            <span className=" text-black/70 md:text-xl font-[500]">
              Select Amount
            </span>
          </label>
          <div className="flex space-x-2">
            <button type="button" className="btn btn-outline text-black/70">
              5000
            </button>
            <button type="button" className="btn btn-outline text-black/70">
              10,000
            </button>
            <button type="button" className="btn btn-outline text-black/70">
              25,000
            </button>
            <button type="button" className="btn btn-outline text-black/70">
              100,000
            </button>
          </div>
        </div>

        {/* Custom Amount Input */}
        <div className="form-control">
          <label className="label mb-3">
            <span className=" text-black/70 md:text-xl font-[500]">
              Amount <span className="text-[#00B67A]">*</span>
            </span>
          </label>
          <div className="flex relative">
            <input
              type="number"
              defaultValue="5000"
              className="input input-bordered md:text-xl w-sm block text-center mt-2"
            />
            {/* <span className="px-[6px] absolute border border-black/60 top-4 left-[353px] cursor-pointer">+</span> */}
          </div>
        </div>

        {/* button */}
        <div className="flex justify-center">
        <button className="relative cursor-pointer px-6 py-2 text-white font-semibold rounded-lg bg-transparent border-[4px] border-transparent overflow-hidden group">
          <span
            className="absolute inset-0 border-[3px] border-transparent rounded-lg animate-gradient-border"
            style={{
              borderImage:
                "linear-gradient(to right, #00B67A, #2E74EC, #00B67A, #2E74EC) 1",
              borderImageSlice: 1,
            }}
          ></span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#00B67A] to-[#2E74EC] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          <span className="relative text-[#00B67A]">Next</span>
        </button>
        </div>
      </form>
    </div>
  );
}

export default CheckoutForm;
