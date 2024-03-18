import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FileStructureIcon from '../../assets/icons/FileStructure.svg';
import { CardFileProps } from '../../components/Files/CardFile';
import Files from '../../components/Files/File';
import { RootState } from '../../data/store';
import './index.css'

const AllFiles = () => {
  const {filesData}=useSelector((state:RootState)=>state.files)
  const [data,setData]=useState<CardFileProps[]>([])

  useEffect(()=>{
    setData(filesData)
  },[filesData])

  return (
    <div className="all-files">
      <nav>
        <div className="logo-container">
          <div className="logo">
            <img src={FileStructureIcon} alt="" />
          </div>
          <h2> All Files</h2>
        </div>
      </nav>
      <Files data={data} />
    </div>
  );
};
export default AllFiles;
