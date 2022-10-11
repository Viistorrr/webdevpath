import {
  doc,
  getDoc,
  setDoc,
  query,
  where,
  collection,
} from "firebase/firestore";

import Layout from "@components/Layout";
import { db } from "@config/firebase";
import Steps from "@components/Steps";
import Sessions from "@components/Sessions";

/*TODO: Form to Add modules and activities by user*/

const Index = ({ mentoring }: any): JSX.Element => {
  const addMentoring = async () => {
    const cityRef = doc(db, "mentorship", "documentMentor");
    setDoc(
      cityRef,
      {
        modules: {
          name: "modulo 1",
          completed: false,
          order: 1,
          activities: {
            name: "actividad 1",
            link: "http://www.viistorrr.com/webdevpath",
            completed: false,
            order: 1,
          },
        },
      },
      { merge: true }
    );
    const docRef = await setDoc(doc(db, "cities", "SF"), {
      name: "test add",
      email: "test@email.com",
    });
  };
  return (
    <div>
      <Layout pageTitle="Info">
        {mentoring && (
          <>
            <div className="overflow-hidden bg-white shadow sm:rounded-lg">
              <div className="flex">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Applicant Information
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Personal details and application.
                  </p>
                </div>
                <div className="flex px-4 py-5 sm:px-6 gap-6">
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full h-full rounded-md border-sky-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <button
                      onClick={() => addMentoring()}
                      type="button"
                      className="inline-flex items-center rounded-md border border-sky-700 bg-sky-100 px-6 py-3 text-base font-medium text-sky-700 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                    >
                      Agregar Módulo
                    </button>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                      Full name
                    </dt>
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
            <div className="flex m-8">
              <Steps mentoring={mentoring} />
              <Sessions />
            </div>
          </>
        )}
      </Layout>
    </div>
  );
};

export async function getServerSideProps(useMentorshipContext: any) {
  const { user } = useMentorshipContext.query;
  const docRef = doc(db, "mentorship", `${user}`);

  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return {
      props: {
        mentoring: JSON.parse(JSON.stringify(docSnap.data())),
      },
    };
  }
}

export default Index;
