import { UserGroupIcon, RectangleGroupIcon } from "@heroicons/react/24/outline";
import { useMentorshipContext } from "@context/MentorshipContext";

const MainStats = () => {
  const { totalMembers, totalModules } = useMentorshipContext();
  return (
    <div>
      <dl className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div
          key="totalMembers"
          className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
        >
          <dt>
            <div className="absolute rounded-md bg-sky-700 p-3">
              <UserGroupIcon
                className="h-8 w-8 text-white"
                aria-hidden="true"
              />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">
              Total Mentorings
            </p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">
              {totalMembers}
            </p>
          </dd>
        </div>
        <div
          key="totalModules"
          className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
        >
          <dt>
            <div className="absolute rounded-md bg-sky-700 p-3">
              <RectangleGroupIcon
                className="h-8 w-8 text-white"
                aria-hidden="true"
              />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">
              Total Modules
            </p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">
              {totalModules}
            </p>
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default MainStats;
