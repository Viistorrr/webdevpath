import { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs, DocumentData, query } from "firebase/firestore";
import { db } from "@config/firebase";

const MentorshipContext = createContext({});

export const useMentorshipContext = () => useContext<any>(MentorshipContext);

export const MentorshipContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const q = collection(db, "mentorship");
  const [loading, setLoading] = useState<boolean>(true);
  const [mentoring, setMentoring] = useState<any>([]);
  const [totalMembers, setTotalMembers] = useState<number>(0);

  useEffect(() => {
    getMentoring();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const getMentoring = async () => {
    const querySnapshot = await getDocs(q);
    const result: DocumentData[] = [];
    querySnapshot.forEach((doc) => {
      result.push(doc); //set the data to the context
    });

    setMentoring(result);
    setTotalMembers(result.length);
  };

  return (
    <MentorshipContext.Provider value={{ mentoring, totalMembers }}>
      {loading ? null : children}
    </MentorshipContext.Provider>
  );
};
