import { createSlice } from "@reduxjs/toolkit";

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
//action:
//1. Crear la ccion en el slice
//2. Exportar la accion
//3. importarla en el componente donde se usara
export const userSlice = createSlice({
  name: "user",
  initialState: "",
  reducers: {
    changeUser: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeUser } = userSlice.actions;

export default userSlice.reducer;
