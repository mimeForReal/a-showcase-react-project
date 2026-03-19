import supabase, { supabaseUrl } from "./supabase";

export async function getCabin() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) throw new Error("Cabins could not be loaded");
  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    "",
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //Create/edit the cabin
  let query = supabase.from("cabins");
  //CREATE
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);
  //EDIT
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();
  if (error) throw new Error("Cabins could not be created");

  //Upload the image
  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (storageError) {
    console.error(storageError);
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error(
      "Cabin image could not be uploaded and the cabin could not be created.",
    );
  }

  return data;
}

export async function deleteCabinApi(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) throw new Error("Cabins could not be deleted");
  return data;
}
