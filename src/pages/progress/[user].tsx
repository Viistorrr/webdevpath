import { doc, getDoc, query, where, collection } from "firebase/firestore";
import MainStats from "@components/Dashboard/Stats";
import Layout from "@components/Layout";
import { db } from "@config/firebase";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
/*TODO: Form to Add modules and activities by user*/

const Index = (): JSX.Element => {
  const router = useRouter();
  const { user } = router.query;
  const [mentoring, setMentoring] = useState<any>();

  const getMentoring = async () => {
    const docRef = doc(db, "mentorship", `${user}`);

    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setMentoring(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  mentoring ? console.log(mentoring.name) : console.log("no mentoring");

  useEffect(() => {
    getMentoring();
  }, []);

  return (
    <div>
      <Layout pageTitle="Info">
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Applicant Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Personal details and application.
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {mentoring?.name}
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Application for
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {mentoring?.profession}
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {mentoring?.email}
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Phone</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {mentoring?.phone}
                </dd>
              </div>
              <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">About</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {mentoring?.comment}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Index;
