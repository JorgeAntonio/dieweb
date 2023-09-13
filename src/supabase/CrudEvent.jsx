import { supabase } from "./supabase.client";

export async function createEvent(
  title,
  description,
  date,
  time,
  place,
  image,
  link
) {
  try {
    const { data, error } = await supabase
      .from("events")
      .insert({
        title: title,
        description: description,
        date: date,
        time: time,
        place: place,
        image: image,
        link: link,
      })
      .single();

    if (error) {
      throw new Error("Error al crear el evento: " + error.message);
    } else {
      Error(data);
    }
  } catch (error) {
    console.log("Error al crear el evento: " + error.message);
    Error("Error al crear el evento: " + error.message);
  }
}

export async function readEvent(id) {
  try {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      throw new Error("Error al leer el evento: " + error.message);
    } else {
      return data;
    }
  } catch (error) {
    console.log("Error al leer el evento: " + error.message);
    throw new Error("Error al leer el evento: " + error.message);
  }
}

export async function readEvents() {
  try {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .order("date", { ascending: true });

    if (error) {
      throw new Error("Error al leer los eventos: " + error.message);
    } else {
      return data;
    }
  } catch (error) {
    console.log("Error al leer los eventos: " + error.message);
    throw new Error("Error al leer los eventos: " + error.message);
  }
}

export async function updateEvent(
  id,
  title,
  description,
  date,
  time,
  place,
  image,
  link
) {
  try {
    const { data, error } = await supabase
      .from("events")
      .update({
        title: title,
        description: description,
        date: date,
        time: time,
        place: place,
        image: image,
        link: link,
      })
      .eq("id", id)
      .single();

    if (error) {
      throw new Error("Error al actualizar el evento: " + error.message);
    } else {
      Error(data);
    }
  } catch (error) {
    console.log("Error al actualizar el evento: " + error.message);
    Error("Error al actualizar el evento: " + error.message);
  }
}

export async function deleteEvent(id) {
  try {
    const { error } = await supabase.from("events").delete().eq("id", id);

    if (error) {
      throw new Error("Error al eliminar el evento: " + error.message);
    }
  } catch (error) {
    console.log("Error al eliminar el evento: " + error.message);
    throw new Error("Error al eliminar el evento: " + error.message);
  }
}
