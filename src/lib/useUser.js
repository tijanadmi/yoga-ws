"use client";

import { useEffect, useState } from "react";
import { supabase } from "./supabase";

export function useUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error("Greška pri dohvatanju sesije:", error.message);
      }
      setUser(data?.session?.user || null);
      setLoading(false);
    };

    getSession();

    // Optional: Realtime session listener
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return { user, loading };
}
