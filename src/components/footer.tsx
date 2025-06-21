export default function Footer() {
  return (
    <div className="flex flex-col mx-3 bg-white rounded-lg">
      <div className="w-full draggable">
        <div className="container flex flex-col mx-auto">
          <div className="flex flex-col items-center w-full my-8">
            <span className="mb-2">
              {/* Coloque aqui o SVG grande do logo */}
              {/* Mantenha o seu SVG original */}
            </span>

            <div className="flex flex-col items-center gap-4 mb-4"> 
              <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-12 gap-y-3 lg:flex-nowrap text-dark-grey-900">
                <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Resources</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Partners</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Help</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Terms</a>
              </div>

              <div className="flex items-center gap-4">
                {/* Redes sociais */}
                <a href="#" className="text-grey-700 hover:text-grey-900">
                  {/* SVG do Facebook */}
                </a>
                <a href="#" className="text-grey-700 hover:text-grey-900">
                  {/* SVG do Twitter */}
                </a>
                <a href="#" className="text-grey-700 hover:text-grey-900">
                  {/* SVG do GitHub */}
                </a>
                <a href="#" className="text-grey-700 hover:text-grey-900">
                  {/* SVG do LinkedIn */}
                </a>
                <a href="#" className="text-grey-700 hover:text-grey-900">
                  {/* SVG do Instagram */}
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <p className="text-base font-normal leading-7 text-center text-grey-700">
                2023 Motion Tailwind CSS Library. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 my-3">
        <div className="w-full max-w-full sm:w-3/4 mx-auto text-center">
          <p className="text-sm text-slate-500 py-1">
            Tailwind CSS Component from{" "}
            <a
              href="https://www.loopple.com/theme/motion-landing-library?ref=tailwindcomponents"
              className="text-slate-700 hover:text-slate-900"
              target="_blank"
              rel="noreferrer"
            >
              Motion Landing Library
            </a>{" "}
            by{" "}
            <a
              href="https://www.loopple.com"
              className="text-slate-700 hover:text-slate-900"
              target="_blank"
              rel="noreferrer"
            >
              Loopple Builder
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
