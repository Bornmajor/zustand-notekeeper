import { create } from "zustand";

// Create a custom store hook using Zustand
const useStore = create((set,get) => ({
  // 🔹 Initial State: an empty list of notes
  listNotes: [],
  IdsToBeDeleted: [],
  allowDeleteNote:false,

  enableDeleteNote:() => {

    set({ allowDeleteNote: true });

  },
   
  disableDeleteNote:() =>{
   set(
    { 
      allowDeleteNote: false ,
      IdsToBeDeleted: []
    }
   
  );

 


  },

  // 🔹 Action: Add a new note to the list
  addNote: (note) => {
    //state is used to accessing previous state
  //  console.log("Adding note:", note); // ✅ debug line
    set((state) => ({
      listNotes: [...state.listNotes, note],
    }));
  },

  addNotesToBeDeleted: (id) => {

  //return {} tells Zustand: "no update needed".
      set((state) => {
      if(state.IdsToBeDeleted.includes(id)){
        return {} //do nothing
      }

      return {
        IdsToBeDeleted: [...state.IdsToBeDeleted, id]
      }  
    });
 
 
  
  },

  //add item to delete list notes
  deleteNotes: (note) => {
    set((state) => {

      const filteredNotes = state.listNotes.filter((note) => !state.IdsToBeDeleted.includes(note.id))
      return {
        listNotes: filteredNotes,
        IdsToBeDeleted: [],
        allowDeleteNote:false,

      }


    });

  },

  checkNoteInDeletedList: (id) => {

    //getter
    const state =  get();
      //check id is in the list
     return state.IdsToBeDeleted.includes(id);


  }
}));

export default useStore;
