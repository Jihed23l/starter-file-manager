import FILES from "../../constants/files"
import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import { CardFileProps } from "../../components/Files/CardFile"
import {toast} from 'react-toastify'

const initialState={
    filesData:FILES
}

const slice = createSlice({
    name:'files',
    initialState:initialState,
    reducers:{
        handleFavoriteFile(state,action:PayloadAction<{fileId:string}>){
            const {fileId}=action.payload
            state.filesData?.map((file:CardFileProps)=>{
                if (fileId === file?.id){
                    file.isStarred=!file.isStarred
                    toast.success(`File ${file.isStarred ? 'favorite' :'unfavorite'} successfully `)
                }
            })
        },
        handleArchivedFile(state,action:PayloadAction<{fileId:string}>){
            const {fileId}=action.payload
            state.filesData?.map((file:CardFileProps)=>{
                if (fileId === file?.id){
                    file.isArchived=!file.isArchived
                    toast.success(`File ${file.isArchived ? 'archived' :'unarchived'} successfully `)
                }
            })
        }
    },
})

export const {handleFavoriteFile,handleArchivedFile}=slice.actions
export const reducer=slice.reducer
export default slice