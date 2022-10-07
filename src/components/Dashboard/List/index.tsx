import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import {
  collection,
  getDocs,
  QueryDocumentSnapshot,
  DocumentData,
  query,
  where,
  limit,
} from "firebase/firestore";
import { db } from "@config/firebase";
import { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Fundación Vivan los Niños",
    initials: "FV",
    team: "Hogar infantil",
    members: [
      {
        name: "Dries Vincent",
        handle: "driesvincent",
        imageUrl:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Lindsay Walton",
        handle: "lindsaywalton",
        imageUrl:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Courtney Henry",
        handle: "courtneyhenry",
        imageUrl:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Tom Cook",
        handle: "tomcook",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    totalMembers: 150,
    lastUpdated: "March 17, 2023",
    pinned: true,
    bgColorClass: "bg-blue-600",
  },
  {
    id: 1,
    title: "Comuna 13",
    initials: "C13",
    team: "Hogar infantil",
    members: [
      {
        name: "Dries Vincent",
        handle: "driesvincent",
        imageUrl:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Lindsay Walton",
        handle: "lindsaywalton",
        imageUrl:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Courtney Henry",
        handle: "courtneyhenry",
        imageUrl:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        name: "Tom Cook",
        handle: "tomcook",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    totalMembers: 28,
    lastUpdated: "March 17, 2023",
    pinned: true,
    bgColorClass: "bg-yellow-800",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const List = () => {
  const q = query(collection(db, "mentorship"));

  const [loading, setLoading] = useState<boolean>(true);
  const [mentoring, setMentoring] = useState<any>([]);

  useEffect(() => {
    getMentoring();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const getMentoring = async () => {
    const querySnapshot = await getDocs(q);
    const result: DocumentData[] = [];
    /* const result: QueryDocumentSnapshot<DocumentData>[] = [];
    querySnapshot.forEach((doc) => {
      result.push(doc);
    }); */
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      result.push(doc.data());
    });

    setMentoring(result);
  };

  mentoring?.map((item: any) => console.log(item));

  return (
    <div>
      {/* Projects list (only on smallest breakpoint) */}
      <div className="mt-10 sm:hidden">
        <div className="px-4 sm:px-6">
          <h2 className="text-sm font-medium text-gray-900">Oportunidades</h2>
        </div>
        <ul
          role="list"
          className="mt-3 divide-y divide-gray-100 border-t border-gray-200"
        >
          {mentoring?.map((project: any) => (
            <li key={project?.name}>
              <Link href="/donate">
                <a className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6">
                  <span className="flex items-center space-x-3 truncate">
                    <span className="truncate text-sm font-medium leading-6">
                      {project?.name.toUpperCase()}{" "}
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
              {mentoring?.map((project: any) => (
                <tr key={project?.name}>
                  <td className="w-full max-w-0 whitespace-nowrap px-6 py-3 text-sm font-medium text-gray-900">
                    <div className="flex items-center space-x-3 lg:pl-2">
                      <a href="#" className="truncate hover:text-gray-600">
                        <span>{project?.name.toUpperCase()}</span>
                      </a>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-sm font-medium text-gray-500">
                    <div className="flex items-center space-x-2">
                      <span>{project?.email}</span>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-sm font-medium text-gray-500">
                    <div className="flex items-center space-x-2">
                      <span>{project?.profession}</span>
                    </div>
                  </td>

                  <td className="whitespace-nowrap px-6 py-3 text-right text-sm font-medium">
                    <Link href={`/people/${project?.email}`}>
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
