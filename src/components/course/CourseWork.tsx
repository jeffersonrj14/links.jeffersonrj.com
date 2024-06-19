type LinkProps = {
  href: string;
  text: string;
  rel?: string;
};

const CourseList = ({ href, text, rel }: LinkProps) => {
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

const CourseWork = () => {
  return (
    <main className="rounded-xl max-w-3xl m-auto w-full px-4 flex flex-col justify-between bg-jefferson-dark drop-shadow-2xl shadow-2xl">
      <section className="space-y-4 text-white/80">
        <h1 className="font-header text-4xl font-bold tracking-tighttext-left">
          Coursework
        </h1>

        <div className="grid grid-cols-1 mb-8 ">
          <div className="flex flex-col col-span-4 text-xl">
            <div>
              <span className="font-semibold text-white/80">HarvardX edX</span>
              <CourseList
                href="https://cs50.harvard.edu/python/2022/"
                text="CS50's Introduction to Programming with Python
"
              />
              <CourseList
                href="https://cs50.harvard.edu/x/2024/"
                text="CS50's Introduction to Computer Science
"
              />
            </div>
          </div>
          <div className="flex flex-col col-span-4 text-xl">
            <div>
              <span className="font-semibold text-white/80">
                FreeCodeCamp (Youtube)
              </span>
              <CourseList
                href="https://www.youtube.com/watch?v=2ZLl8GAk1X4&t=3s&pp=ygUoZGF0YSBzdHJ1Y3R1cmUgYW5kIGFsZ29yaXRobSBmcmVlY29kZWNhcA%3D%3D"
                text="Data Structures and Algorithm
"
              />
            </div>
          </div>
          <div className="flex flex-col col-span-4 text-xl">
            <div>
              <span className="font-semibold text-white/80">
                Zero To Mastery Academy
              </span>
              <CourseList
                href="https://zerotomastery.io"
                text="Web Development
"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CourseWork;
