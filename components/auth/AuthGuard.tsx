"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { useRouter } from "next/navigation";

type Props = {
  role: "student" | "recruiter";
  children: React.ReactNode;
};

export default function AuthGuard({
  role,
  children,
}: Props) {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        console.log("Current User:", user);

        if (!user) {
          router.replace(`/${role}/login`);
          return;
        }

        const userRef = doc(db, "users", user.uid);
        const snapshot = await getDoc(userRef);

        // Agar Firestore document nahi mila to bhi login mat todna
        if (!snapshot.exists()) {
          console.warn("Firestore document not found.");

          setLoading(false);
          return;
        }

        const data = snapshot.data();

        console.log("Firestore Data:", data);
        console.log("Expected Role:", role);

        if (data.role !== role) {
          alert("Unauthorized Access");

          router.replace(`/${data.role}/dashboard`);

          return;
        }

        setLoading(false);

      } catch (error) {
        console.error("AuthGuard Error:", error);

        setLoading(false);
      }
    });

    return () => unsubscribe();

  }, [role, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return <>{children}</>;
}