import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { useMentorshipContext } from "@context/MentorshipContext";

const List = () => {
  const { mentoring } = useMentorshipContext();

  return (
    <div>
      {/* Projects list (only on smallest breakpoint) */}
      <div className="mt-10 sm:hidden">
        <div className="px-4 sm:px-6">
          <h2 className="text-sm font-medium text-gray-900">Nombre</h2>
        </div>
        <ul
          role="list"
          className="mt-3 divide-y divide-gray-100 border-t border-gray-200"
        >
          {mentoring?.map((item: any) => (
            <li key={item?.data().name}>
              <Link href="/donate">
                <a className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6">
                  <span className="flex items-center space-x-3 truncate">
                    <span className="truncate text-sm font-medium leading-6">
                      {item?.data().name.toUpperCase()}{" "}
                    </span>
                  </span>

                  <ChevronRightIcon
                    className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Projects table (small breakpoint and up) */}
      <div className="mt-8 hidden sm:block">
        <div className="inline-block min-w-full border-b border-gray-200 align-middle">
          <table className="min-w-full">
            <thead>
              <tr className="border-t border-gray-200">
                <th
                  className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                  scope="col"
                >
                  <span className="lg:pl-2">Nombre</span>
                </th>
                <th
                  className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                  scope="col"
                >
                  Email
                </th>
                <th
                  className="hidden border-b border-gray-200 bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900 md:table-cell"
                  scope="col"
                >
                  Profesión
                </th>

                <th
                  className="border-b border-gray-200 bg-gray-50 py-3 pr-6 text-right text-sm font-semibold text-gray-900"
                  scope="col"
                />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {mentoring?.map((item: any) => (
                <tr key={item?.data().name}>
                  <td className="w-full max-w-0 whitespace-nowrap px-6 py-3 text-sm font-medium text-gray-900">
                    <div className="flex items-center space-x-3 lg:pl-2">
                      <a href="#" className="truncate hover:text-gray-600">
                        <span>{item?.data().name.toUpperCase()}</span>
                      </a>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <span>{item?.data().email}</span>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <span>{item?.data().profession}</span>
                    </div>
                  </td>

                  <td className="whitespace-nowrap px-6 py-3 text-center text-sm font-medium">
                    <Link href={`/progress/${item?.id}`}>
                      <a className="text-indigo-600 hover:text-indigo-900">
                        VER
                      </a>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default List;
