type LinkProps = {
  href: string;
  text: string;
  rel?: string;
};

type SetupInfoProps = {
  text: string;
};

const SetupLinks = ({ href, text, rel }: LinkProps) => {
  return (
    <li className="my-2">
      <a
        href={href}
        rel={rel}
        target="_blank"
        className="decoration-wavy decoration-2 underline-offset-4 transition-all hover:underline text-jefferson-main hover:text-jefferson-light active:text-jefferson-maindark"
      >
        {text}
      </a>
    </li>
  );
};
const Setup = ({ text }: SetupInfoProps) => {
  return (
    <li className="my-2 ">
      <span className="decoration-wavy decoration-2 underline-offset-4 transition-all hover:underline text-jefferson-main hover:text-jefferson-light active:text-jefferson-maindark">
        {text}
      </span>
    </li>
  );
};

const SetupInformation = () => {
  return (
    <main className="rounded-xl max-w-3xl m-auto w-full px-4 flex flex-col justify-between bg-jefferson-dark drop-shadow-2xl shadow-2xl">
      <h1 className="font-header text-4xl font-bold tracking-tight text-center md:text-left">
        My Setup
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-6 mb-8 mt-10">
        <div className="flex flex-col col-span-2 mb-4 md:mb-0">
          <h5 className="text-xl md:text-2xl font-bold">Desk Setup</h5>
        </div>
        <div className="flex flex-col col-span-4 text-xl">
          <div>
            <span className="font-semibold text-jefferson-light">
              Laptop Model:
            </span>
            <SetupLinks
              href="https://www.msi.com/Laptop/GF63-Thin-9SCSR/Overview"
              text="MSI GF63 Thin 9SCSR"
            />
          </div>
          <div>
            <span className="font-semibold text-jefferson-light">OS:</span>
            <Setup text="Windows 10" />
          </div>
          <div>
            <span className="font-semibold text-jefferson-light">
              Screen Size:
            </span>
            <Setup text="1920 x 1080" />
          </div>
          <div>
            <span className="font-semibold text-jefferson-light">CPU:</span>
            <Setup text="Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz" />
          </div>
          <div>
            <span className="font-semibold text-jefferson-light">GPU:</span>
            <Setup text="NVIDIA GeForce GTX 1650 Ti with Max-Q Design" />
          </div>
          <div>
            <span className="font-semibold text-jefferson-light">RAM:</span>
            <Setup text="16 GB" />
          </div>
          <div>
            <span className="font-semibold text-jefferson-light">Browser:</span>
            <SetupLinks href="https://brave.com/" text="Brave" />
            <SetupLinks href="https://www.google.com/chrome/" text="Chrome" />
          </div>
          <div>
            <span className="font-semibold text-jefferson-light">
              Code Editor
            </span>
            <SetupLinks
              href="https://code.visualstudio.com/"
              text="Visual Studio Code"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SetupInformation;
