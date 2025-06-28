import React from 'react';

const Logo = () => {
  const darkMode = localStorage.getItem('darkMode') === 'true';

  return (
    <a
      href="https://jmultiverse.com"
      target="_blank"
      rel="noopener noreferrer"
      className="tw-flex tw-items-center tw-gap-3 tw-no-underline tw-transition-transform hover:tw-scale-105 tw-cursor-pointer"
    >
      <div className="tw-relative tw-w-14 tw-h-14">
        <div className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center">
          <div className="tw-relative tw-w-full tw-h-full">
            <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-purple-400/30 tw-to-pink-400/30 tw-rounded-full tw-blur-xl tw-animate-pulse tw-shadow-2xl"></div>
            <div
              className="tw-absolute tw-inset-1 tw-bg-gradient-to-br tw-from-blue-400/25 tw-to-purple-400/25 tw-rounded-full tw-blur-lg tw-animate-pulse tw-shadow-xl"
              style={{
                animationDelay: '0.5s',
              }}
            ></div>
            <div
              className="tw-absolute tw-inset-2 tw-bg-gradient-to-br tw-from-cyan-400/20 tw-to-blue-400/20 tw-rounded-full tw-blur-md tw-animate-pulse tw-shadow-lg"
              style={{
                animationDelay: '1s',
              }}
            ></div>

            <div className="tw-relative tw-z-10 tw-w-full tw-h-full">
              <img
                alt="JMultiverse Logo"
                className="tw-w-full tw-h-full tw-object-contain tw-drop-shadow-2xl tw-filter tw-brightness-125 tw-contrast-110 tw-saturate-110"
                src="assets/images/968c8bf7-51f3-4f8f-9677-612ee3cb9d3b.png"
              />
              <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-white/10 tw-to-transparent tw-rounded-full tw-animate-pulse"></div>
            </div>
          </div>
        </div>

        <div
          className="tw-absolute tw-inset-0 tw-animate-spin"
          style={{
            animationDuration: '10s',
          }}
        >
          <div className="tw-absolute tw-inset-0 tw-border-2 tw-border-purple-400/40 tw-rounded-full tw-shadow-2xl"></div>
          <div className="tw-absolute tw-top-0 tw-left-1/2 tw-transform tw--translate-x-1/2 tw--translate-y-1/2">
            <div className="tw-w-3 tw-h-3 tw-md:w-3.5 tw-md:h-3.5 tw-bg-gradient-to-br tw-from-red-400 tw-via-red-500 tw-to-red-600 tw-rounded-full tw-shadow-xl tw-animate-pulse tw-border tw-border-red-300/50">
              <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-red-300 tw-to-red-700 tw-rounded-full tw-animate-ping tw-opacity-60"></div>
              <div className="tw-absolute tw-top-0.5 tw-left-0.5 tw-w-1.5 tw-h-1.5 tw-bg-white/80 tw-rounded-full tw-animate-pulse"></div>
            </div>
          </div>
        </div>

        <div
          className="tw-absolute tw-inset-1 tw-animate-spin tw-opacity-50"
          style={{
            animationDuration: '15s',
            animationDirection: 'reverse',
          }}
        >
          <div className="tw-absolute tw-inset-0 tw-border tw-border-blue-400/30 tw-rounded-full tw-shadow-lg"></div>
          <div className="tw-absolute tw-bottom-0 tw-right-1/2 tw-transform tw-translate-x-1/2 tw-translate-y-1/2">
            <div
              className="tw-w-2 tw-h-2 tw-bg-gradient-to-br tw-from-blue-400 tw-to-cyan-400 tw-rounded-full tw-shadow-lg tw-animate-pulse tw-border tw-border-blue-300/50"
              style={{
                animationDelay: '1s',
              }}
            >
              <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-blue-300 tw-to-cyan-500 tw-rounded-full tw-animate-ping tw-opacity-50"></div>
            </div>
          </div>
        </div>

        <div
          className="tw-absolute tw-inset-2 tw-animate-spin tw-opacity-35"
          style={{
            animationDuration: '20s',
          }}
        >
          <div className="tw-absolute tw-inset-0 tw-border tw-border-pink-400/20 tw-rounded-full tw-shadow-md"></div>
          <div className="tw-absolute tw-top-1/2 tw-right-0 tw-transform tw-translate-x-1/2 tw--translate-y-1/2">
            <div
              className="tw-w-1.5 tw-h-1.5 tw-bg-gradient-to-br tw-from-pink-400 tw-to-purple-400 tw-rounded-full tw-shadow-md tw-animate-pulse tw-border tw-border-pink-300/40"
              style={{
                animationDelay: '2s',
              }}
            >
              <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-pink-300 tw-to-purple-500 tw-rounded-full tw-animate-ping tw-opacity-40"></div>
            </div>
          </div>
        </div>

        <div
          className="tw-absolute tw-inset-3 tw-animate-spin tw-opacity-25"
          style={{
            animationDuration: '25s',
            animationDirection: 'reverse',
          }}
        >
          <div className="tw-absolute tw-inset-0 tw-border tw-border-cyan-400/15 tw-rounded-full"></div>
          <div className="tw-absolute tw-top-0 tw-right-1/2 tw-transform tw-translate-x-1/2 tw--translate-y-1/2">
            <div
              className="tw-w-1 tw-h-1 tw-bg-gradient-to-br tw-from-cyan-400 tw-to-blue-400 tw-rounded-full tw-animate-pulse"
              style={{
                animationDelay: '3s',
              }}
            ></div>
          </div>
        </div>

        <div
          className="tw-absolute tw-inset-0 tw-bg-gradient-radial tw-from-transparent tw-via-purple-500/15 tw-to-transparent tw-rounded-full tw-pointer-events-none tw-backdrop-blur-sm tw-animate-pulse"
          style={{
            animationDuration: '3s',
          }}
        ></div>

        <div
          className="tw-absolute tw-inset-0 tw-bg-gradient-radial tw-from-transparent tw-via-blue-500/10 tw-to-transparent tw-rounded-full tw-pointer-events-none tw-backdrop-blur-sm tw-animate-pulse"
          style={{
            animationDuration: '4s',
            animationDelay: '1s',
          }}
        ></div>
      </div>

      <span className="tw-text-2xl tw-font-bold tw-text-purple-600 tw-drop-shadow-sm">ToolSmart</span>
    </a>
  );
};

export default Logo;
