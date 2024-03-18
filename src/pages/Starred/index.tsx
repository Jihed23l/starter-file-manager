import StarIcon from '../../assets/icons/Star.svg';
import Files from '../../components/Files/File';
import '../../pages/Starred'
import FILES from '../../constants/files';
import './index.css'
import { RootState } from '../../data/store';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { CardFileProps } from '../../components/Files/CardFile';

const Starred = () => {
  const {filesData}=useSelector((state:RootState)=>state.files)
  const [data,setData]=useState<CardFileProps[]>([])

  useEffect(()=>{
    setData(filesData?.filter((file:CardFileProps)=>file.isStarred))
  },[filesData])

  return (
    <div className="starred">
      <nav>
        <div className="logo-container">
          <div className="logo">
            <img src={StarIcon} alt="" />
          </div>
          <h2> Starred Files</h2>
        </div>
      </nav>
      <Files data={data} />
    </div>
  );
};

export default Starred;
