import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import BoxIcon from '../../assets/icons/Box.svg';
import { CardFileProps } from '../../components/Files/CardFile';
import Files from '../../components/Files/File';
import FILES from '../../constants/files';
import { RootState } from '../../data/store';
import './index.css'

const Archived = () => {
  const {filesData}=useSelector((state:RootState)=>state.files)
  const [data,setData]=useState<CardFileProps[]>([])

  useEffect(()=>{
    setData(filesData?.filter((file:CardFileProps)=>file.isArchived))
  },[filesData])

  return (
    <div className="archived">
      <nav>
        <div className="logo-container">
          <div className="logo">
            <img src={BoxIcon} alt="" />
          </div>
          <h2>Achived Files</h2>
        </div>
      </nav>
      <Files data={data} />
    </div>
  );
};

export default Archived;
