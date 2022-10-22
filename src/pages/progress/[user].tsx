import { Fragment, useRef, useState } from "react";
import { NextPage } from "next";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { Dialog, Transition } from "@headlessui/react";
import Layout from "@components/Layout";
import { db } from "@config/firebase";
import Steps from "@components/Steps";
import { useMentorshipContext } from "@context/MentorshipContext";

const ModuleOneSteps = [
  {
    name: "Tecnica Pomodoro",
    module: "Gestión Efectiva del Tiempo",
    link: "https://protecciondatos-lopd.com/empresas/tecnica-pomodoro/",
    completed: "no",
  },
  {
    name: "Que son las Metodologías Ágiles",
    module: "Gestión Efectiva del Tiempo",
    link: "https://www.iebschool.com/blog/que-son-metodologias-agiles-agile-scrum/",
    completed: "no",
  },
  {
    name: "Qué es SCRUM",
    module: "Gestión Efectiva del Tiempo",
    link: "https://www.atlassian.com/es/agile/scrum",
    completed: "no",
  },
  {
    name: "Metodología Kanban",
    module: "Gestión Efectiva del Tiempo",
    link: "https://kanbanize.com/es/recursos-de-kanban/primeros-pasos/que-es-kanban",
    completed: "no",
  },
  {
    name: "Crear un Board en Trello",
    module: "Gestión Efectiva del Tiempo",
    link: "https://trello.com/",
    completed: "no",
  },
  {
    name: "Fijar Objetivos a corto, mediano y largo plazo",
    module: "Gestión Efectiva del Tiempo",
    link: "https://www.notion.so/",
    completed: "no",
  },
];

const html5Steps = [
  {
    name: "Qué es HTML5",
    module: "HTML5",
    link: "https://www.xataka.com/basics/que-html5-que-novedades-ofrece",
    completed: "no",
  },
  {
    name: "Etiquetas Básicas de HTML5",
    module: "HTML5",
    link: "https://www.iebschool.com/blog/que-es-etiqueta-html-analitica-usabilidad/",
    completed: "no",
  },
  {
    name: "Estructura Básica de una Página Web",
    module: "HTML5",
    link: "https://blog.hubspot.es/website/estructura-html#:~:text=La%20estructura%20HTML%20de%20una%20p%C3%A1gina%20web%20se%20compone%20de,elementos%20visibles%20de%20la%20p%C3%A1gina",
    completed: "no",
  },
  {
    name: "RETO: Crear Primera Página Web con tu información personal",
    module: "HTML5",
    link: "https://www.notion.so/1-HTML5-c2d6467726024f2d9ecd8c275d84da5a",
    completed: "no",
    reto: "si",
  },
];

const css3Steps = [
  {
    name: "Qué es CSS3",
    module: "CSS3",
    link: "https://www.notion.so/2-CSS-2b84a1a5d670452a94892f8893b8ee0a",
  },
  {
    name: "Qué es un Framework CSS",
    module: "CSS3",
    link: "RETO: Agregar Estilos a tu página web",
    completed: "no",
    reto: "si",
  },
];

const Index: NextPage = ({ mentoring, mentoringId }: any): JSX.Element => {
  const [open, setOpen] = useState(false);
  const userRef = doc(db, "mentorship", mentoringId);

  const { modules } = useMentorshipContext();
  const tempSteps: any[] = [];
  mentoring?.steps?.forEach((step: any) => {
    tempSteps.push(step);
  });

  const cancelButtonRef = useRef(null);

  const handleAddModuleOneSteps = () => {
    setDoc(
      userRef,
      {
        steps: ModuleOneSteps,
      },
      { merge: true }
    );
  };

  const AddStepModal = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
      tempSteps.push(data);
      setDoc(
        userRef,
        {
          steps: tempSteps,
        },
        { merge: true }
      );
    };

    return (
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium text-secondary"
                            >
                              Step
                            </label>
                            <div className="mt-4">
                              <input
                                {...register("name")}
                                type="text"
                                name="name"
                                id="name"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border focus:ring-indigo-500 sm:text-sm"
                                placeholder="Tailwind CSS"
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-secondary"
                            >
                              Link
                            </label>
                            <div className="mt-4">
                              <input
                                {...register("link")}
                                type="text"
                                name="link"
                                id="link"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border focus:ring-indigo-500 sm:text-sm"
                                placeholder="https://www.atlassian.com/es/agile/scrum"
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="location"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Módulo
                            </label>
                            <select
                              {...register("module")}
                              id="module"
                              name="module"
                              className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              defaultValue="CSS3"
                            >
                              {modules?.map((module: any) => (
                                <option
                                  key={module.id}
                                  value={module.data().name}
                                >
                                  {module.data().name}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label
                              htmlFor="completed"
                              className="block text-sm font-medium text-primary"
                            >
                              Completed
                            </label>
                            <select
                              {...register("completed")}
                              id="completed"
                              name="completed"
                              className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              defaultValue="Canada"
                            >
                              <option key="si" value="si">
                                Si
                              </option>
                              <option key="no" value="no">
                                No
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                      >
                        Agregar
                      </button>
                      <button
                        type="submit"
                        className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Cancelar
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    );
  };
  return (
    <div>
      <AddStepModal />
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
                  <button
                    onClick={() => setOpen(!open)}
                    type="button"
                    className="inline-flex items-center rounded-md border border-sky-700 bg-sky-100 px-6 py-3 text-base font-medium text-sky-700 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                  >
                    Agregar Step
                  </button>
                </div>
                <div className="flex px-4 py-5 sm:px-6 gap-6">
                  <button
                    onClick={() => handleAddModuleOneSteps()}
                    type="button"
                    className="inline-flex items-center rounded-md border border-sky-700 bg-sky-100 px-6 py-3 text-base font-medium text-sky-700 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                  >
                    Add ModuleOneSteps
                  </button>
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
              {/* <Sessions /> */}
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
        mentoringId: user,
        mentoring: JSON.parse(JSON.stringify(docSnap.data())),
      },
    };
  }
}

export default Index;
