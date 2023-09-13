import devInfo from "../devInfo.json";

export default function Footer() {
  const social = devInfo.contacts.social;
  console.log(social);
  return (
    <>
      <footer class="rounded-lg shadow m-4 text-slate-500 dark:bg-gray-800">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm sm:text-center dark:text-gray-400">
            find me in:
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-gray-400 sm:mt-0">
            {Object.values(social).map((item, index) => (
              <li key={index}>
                <a href={item.url} className="hover:underline">
                  {item.title}
                </a>
              </li>
            ))}
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
