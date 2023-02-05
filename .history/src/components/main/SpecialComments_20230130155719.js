const SpecialComments = () => {
  return (
    <div class="w-full max-w-7xl px-4 mx-auto sm:px-8 my-20 ">
      <header class="space-y-4 text-center">
        <h2 class="text-3xl flex items-center justify-center font-bold tracking-tighter md:text-4xl font-display">
          <p>چند کلمه ای از مشتریان</p>
          <span className="text-yellow-400 mr-2">یاس</span>
        </h2>
      </header>
      <div class="grid gap-8 mt-16 md:grid-cols-3">
        <article class="backdrop-blur-xl bg-black/30 relative px-8 pt-8 pb-4 transform bg-opacity-50 shadow-xl md:translate-y-4 rounded-2xl">
          <svg
            class="text-yellow-600 absolute top-0 right-0 hidden w-24 h-24 -mt-12 -mr-12 md:block"
            width="256"
            height="256"
            viewBox="0 0 256 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M65.44 153.526V149.526H61.44H20.48C11.3675 149.526 4 142.163 4 133.105V51.4211C4 42.3628 11.3675 35 20.48 35H102.4C111.513 35 118.88 42.3628 118.88 51.4211V166.187C118.88 195.935 95.103 220.165 65.44 220.979V153.526ZM198.56 153.526V149.526H194.56H153.6C144.487 149.526 137.12 142.163 137.12 133.105V51.4211C137.12 42.3628 144.487 35 153.6 35H235.52C244.633 35 252 42.3628 252 51.4211V166.187C252 195.935 228.223 220.165 198.56 220.979V153.526Z"
              stroke="currentColor"
              stroke-width="8"
            ></path>
          </svg>
          <blockquote class="space-y-1 text-base text-right">
            <p>باسلام... من تجربه خرید حضوری واقساطی شما را دارم.</p>
            <p>بی نهایت هم از خریدم و کیفیت برخورد اعضا مجموعه راضی هستم</p>
            <footer class="flex items-center pt-2 mt-7 space-x-2 space-x-reverse border-t border-white/10 mt-1">
              <div class="relative w-10 h-10 overflow-hidden bg-neutral-700 rounded-full">
                <svg
                  class="absolute w-12 h-12 text-yellow-400 -left-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <p class="text-lg font-bold font-display">بهنام اکبری</p>
              </div>
            </footer>
          </blockquote>
        </article>
        <article class="backdrop-blur-xl bg-black/30 relative px-8 pt-8 pb-4 transform bg-opacity-50 shadow-xl md:translate-y-4 rounded-2xl -rotate-3">
          <blockquote class="space-y-1 text-base text-right">
            <p>باسلام... من تجربه خرید حضوری واقساطی شما را دارم.</p>
            <p>بی نهایت هم از خریدم و کیفیت برخورد اعضا مجموعه راضی هستم</p>
            <footer class="flex items-center pt-2 mt-7 space-x-2 space-x-reverse border-t border-white/10 mt-1">
              <div class="relative w-10 h-10 overflow-hidden bg-neutral-700 rounded-full">
                <svg
                  class="absolute w-12 h-12 text-yellow-400 -left-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <p class="text-lg font-bold font-display">بهنام اکبری</p>
              </div>
            </footer>
          </blockquote>
        </article>
        <article class="backdrop-blur-xl bg-black/30 relative px-8 pt-8 pb-4 transform bg-opacity-50 shadow-xl md:translate-y-4 rounded-2xl rotate-3">
          <blockquote class="space-y-1 text-base text-right">
            <p>باسلام... من تجربه خرید حضوری واقساطی شما را دارم.</p>
            <p>بی نهایت هم از خریدم و کیفیت برخورد اعضا مجموعه راضی هستم</p>
            <footer class="flex items-center pt-2 mt-7 space-x-2 space-x-reverse border-t border-white/10 mt-1">
              <div class="relative w-10 h-10 overflow-hidden bg-neutral-700 rounded-full">
                <svg
                  class="absolute w-12 h-12 text-yellow-400 -left-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <p class="text-lg font-bold font-display">بهنام اکبری</p>
              </div>
            </footer>
          </blockquote>
        </article>
      </div>
    </div>
  );
};

export default SpecialComments;
