import { supabase } from "./supabase.client.jsx";

export async function createEntrepreneur(
  name,
  lastName,
  dni,
  email,
  phone,
  address,
  startup,
  status
) {
  try {
    const { data, error } = await supabase
      .from("entrepreneurs")
      .insert({
        name: name,
        lastname: lastName,
        dni: dni,
        email: email,
        phone: phone,
        address: address,
        startup: startup,
        status: status,
      })
      .single();

    if (error) {
      throw new Error("Error al crear el emprendedor: " + error.message);
    } else {
      Error(data);
    }
  } catch (error) {
    console.log("Error al crear el emprendedor: " + error.message);
    Error("Error al crear el emprendedor: " + error.message);
  }
}

async function readEntrepreneur(id) {
  try {
    const { data, error } = await supabase
      .from("entrepreneurs")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      throw new Error("Error al leer el emprendedor: " + error.message);
    } else {
      return data;
    }
  } catch (error) {
    console.log("Error al leer el emprendedor: " + error.message);
    throw new Error("Error al leer el emprendedor: " + error.message);
  }
}

export async function readEntrepreneurs() {
  try {
    const { data, error } = await supabase
      .from("entrepreneurs")
      .select("*")
      .order("id", { ascending: true });
    if (error) {
      throw new Error("Error al leer los emprendedores: " + error.message);
    }
    if (data !== null) {
      return data;
    }
  } catch (error) {
    console.log("Error al leer los emprendedores: " + error.message);
    throw new Error("Error al leer los emprendedores: " + error.message);
  }
}

export async function updateEntrepreneur(id, name, startup, status) {
  try {
    const { data, error } = await supabase
      .from("entrepreneurs")
      .update({
        name: name,
        startup: startup,
        status: status,
      })
      .eq("id", id)
      .single();

    if (error) {
      throw new Error("Error al actualizar el emprendedor: " + error.message);
    } else {
      return data;
    }
  } catch (error) {
    console.log("Error al actualizar el emprendedor: " + error.message);
    throw new Error("Error al actualizar el emprendedor: " + error.message);
  }
}

export async function deleteEntrepreneur(id) {
  try {
    const { data, error } = await supabase
      .from("entrepreneurs")
      .delete()
      .eq("id", id)
      .single();
    if (error) {
      console.log("Error al eliminar el emprendedor: " + error.message);
      throw new Error("Error al eliminar el emprendedor: " + error.message);
    }
    if (data) {
      return data;
    }
  } catch (error) {
    console.log("Error al eliminar el emprendedor: " + error.message);
    throw new Error("Error al eliminar el emprendedor: " + error.message);
  }
}
