import supabase from './supabase.js'

const getCabins = async () => {
  let { data, error } = await supabase.from('cabins').select('*')

  if (error) {
    console.error('Cabins not loaded')
    throw new Error(error)
  }

  return data
}

/////////////////////////////////////////

const deleteCabin = async (id) => {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id)
  console.log(data)
  if (error) {
    console.error('Cabins not deleted')
    throw new Error(error)
  }

  return data
}

/////////////////////////////////////////////////

const createCabin = async (data) => {
  const { cabin, error } = await supabase.from('cabins').insert([data]).select()
}

export { getCabins, deleteCabin, createCabin }
