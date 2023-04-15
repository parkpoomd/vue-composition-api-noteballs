import { defineStore } from 'pinia';

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [
        { id: '1', content: 'This is content one' },
        { id: '2', content: 'This is content two' },
      ],
    };
  },
  getters: {
    getNoteContent: (state) => (id) =>
      state.notes.filter((note) => note.id === id)[0].content,
    totalNotesCount: (state) => {
      return state.notes.length;
    },
    totalCharactersCount: (state) => {
      let count = 0;
      state.notes.forEach((note) => {
        count += note.content.length;
      });
      return count;
    },
  },
  actions: {
    addNote(newNoteContent) {
      let currentDate = new Date().getTime(),
        id = currentDate.toString();

      let note = {
        id,
        content: newNoteContent,
      };

      this.notes.unshift(note);
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter((note) => note.id !== idToDelete);
    },
    updateNote(id, content) {
      let index = this.notes.findIndex((note) => note.id === id);
      this.notes[index].content = content;
    },
  },
});
