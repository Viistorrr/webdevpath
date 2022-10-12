import {
  CheckIcon,
  HandThumbUpIcon,
  UserIcon,
  XMarkIcon,
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  ClockIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

const timeline = [
  {
    id: 1,
    content: "Applied to",
    target: "Front End Developer",
    href: "#",
    date: "Sep 20",
    datetime: "2020-09-20",
    icon: UserIcon,
    iconBackground: "bg-gray-400",
  },
  {
    id: 2,
    content: "Advanced to phone screening by",
    target: "Bethany Blake",
    href: "#",
    date: "Sep 22",
    datetime: "2020-09-22",
    icon: HandThumbUpIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 3,
    content: "Completed phone screening with",
    target: "Martha Gardner",
    href: "#",
    date: "Sep 28",
    datetime: "2020-09-28",
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
  {
    id: 4,
    content: "Advanced to interview by",
    target: "Bethany Blake",
    href: "#",
    date: "Sep 30",
    datetime: "2020-09-30",
    icon: HandThumbUpIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 5,
    content: "Completed interview with",
    target: "Katherine Snyder",
    href: "#",
    date: "Oct 4",
    datetime: "2020-10-04",
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

type StepsProps = {
  mentoring: any;
};

export default function Steps({ mentoring }: StepsProps) {
  return (
    <div className="flow-root mx-8">
      <ul role="list" className="-mb-8">
        {mentoring?.steps?.map((item: any, eventIdx: any) => (
          <li key={item.name}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  {item?.completed ? (
                    <span
                      className={classNames(
                        "bg-green-400",
                        "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                      )}
                    >
                      {item?.reto ? (
                        <CodeBracketIcon
                          className="h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      ) : (
                        <CheckIcon
                          className="h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      )}
                    </span>
                  ) : (
                    <span
                      className={classNames(
                        "bg-gray-400",
                        "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                      )}
                    >
                      {item?.reto ? (
                        <CodeBracketIcon
                          className="h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      ) : (
                        <ClockIcon
                          className="h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      )}
                    </span>
                  )}
                </div>
                <div className="flex space-x-3 w-full">
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium">{item.name}</h3>
                      <div className="w-4 h-4 mx-2">
                        <Link href={item.link}>
                          <a
                            target="_blank"
                            className="font-medium text-sky-600 hover:text-sky-500"
                          >
                            <ArrowTopRightOnSquareIcon />
                          </a>
                        </Link>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">{item.module}</p>
                  </div>

                  {/* <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    <time dateTime={item.name}> - {item.module}</time>
                  </div> */}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
