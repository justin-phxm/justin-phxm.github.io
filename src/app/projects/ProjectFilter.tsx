import { languageMap } from "./LanguageMaps";

export default function ProjectFilter({
  filterLanguages: languages,
  setFilterLanguages,
}: {
  filterLanguages: Record<string, boolean>;
  setFilterLanguages: React.Dispatch<
    React.SetStateAction<Record<string, boolean>>
  >;
}) {
  const toggleLanguage = (language: string) => {
    setFilterLanguages((prevLanguages) => ({
      ...prevLanguages,
      [language]: !prevLanguages[language],
    }));
  };
  return (
    <details open>
      <summary className="cursor-pointer select-none flex-row items-center whitespace-nowrap bg-slate-800 p-2 text-sm text-white lg:text-base">
        Framework/Language
      </summary>
      <ul>
        {Object.entries(languages).map(([language, value]) => (
          <li
            key={language}
            className="flex cursor-pointer flex-row items-center gap-2 p-2 text-2xl hover:bg-gray-700"
          >
            <input
              id={language}
              type="checkbox"
              checked={value}
              onChange={() => toggleLanguage(language)}
            />
            {languageMap[language as keyof typeof languageMap].Icon}
            <label
              htmlFor={language}
              className="text-base text-slate-500 lg:text-lg"
            >
              {language}
            </label>
          </li>
        ))}
      </ul>
    </details>
  );
}
