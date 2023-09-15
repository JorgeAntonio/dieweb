import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/supabase.client";

const EventContext = createContext({});

export const useEvents = () => useContext(EventContext);

const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [msg, setMsg] = useState("");

  const addEvent = async (event) => {
    const { data, error } = await supabase
      .from("events")
      .insert(event)
      .select();
    if (data) {
      setEvents((prevEvents) => [...prevEvents, data[0]]);
      setMsg("Event Added Successfully");
    }
    if (error) {
      setErrorMsg(error.message);
    }
  };

  const fetchAll = async () => {
    const { data, error } = await supabase.from("events").select();
    if (data) setEvents(data);
    if (error) setErrorMsg("Error in Fetching Events");
  };

  const editEvent = async (event, id) => {
    const { data, error } = await supabase
      .from("events")
      .update(event)
      .eq("id", id)
      .select();
    if (error) {
      setErrorMsg(error.message);
      console.error(error);
    }
    if (data) {
      setMsg("Event Updated");
      const updatedEvents = events.map((event) => {
        if (id === event.id) {
          return { ...event, ...data[0] };
        }
        return event;
      });
      setEvents(updatedEvents);
    }
  };

  const fetchEvent = async (id) => {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .eq("id", id)
      .single();
    if (error) {
      setErrorMsg(error.message);
    }
    if (data) {
      setMsg("Event Updated");
      const updatedEvents = events.map((event) => {
        if (id === event.id) {
          return { ...event, ...data[0] };
        }
        return event;
      });
      setEvents(updatedEvents);
    }
  };

  const deleteEvent = async (id) => {
    const { error } = await supabase.from("events").delete().eq("id", id);
    if (error) {
      setErrorMsg(error.message);
    } else {
      setMsg("Event Deleted Successfully");
      const updatedEvents = events.filter((event) => event.id !== id);
      setEvents(updatedEvents);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <EventContext.Provider
      value={{
        events,
        msg,
        setMsg,
        errorMsg,
        setErrorMsg,
        addEvent,
        fetchEvent,
        fetchAll,
        editEvent,
        deleteEvent,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;
