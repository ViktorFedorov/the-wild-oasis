import supabase from './supabase.js'

const getCabins = async () => {
  let { data, error } = await supabase.from('cabins').select('*')

  if (error) {
    console.error('Cabins not loaded')
    throw new Error(error)
  }

  return data
}

export { getCabins }
