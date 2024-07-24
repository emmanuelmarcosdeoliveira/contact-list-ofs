import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contatos from "../../models/Contatos";
import * as enums from "../../utils/enums/contatos"

type ContatosState = {
  itens: Contatos[] 
}


const initialState: ContatosState = {
itens : [
  {
    tag: enums.Grupos.WORK, 
    titulo: 'EBAC',
    telefone: '11-968336094',
    email: 'ebac@gmail.com',
    id: 1
  },
  {
    tag: enums.Grupos.FAMILY, 
    titulo: 'João',
    telefone: '11-99999-9999',
    email: 'joaoc@gmail.com',
    id: 2
  }, 
  {
    tag: enums.Grupos.GUYS, 
    titulo: 'Vida',
    telefone: '11-99999-9999',
    email: 'vidac@gmail.com',
    id: 3
  }
]
}

const contactsSlice  = createSlice({
  name: 'contacts',
  initialState, 
    reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(contato => contato.id !== action.payload)
    }
  }
})


export  const {remover}  =   contactsSlice.actions
export default contactsSlice.reducer
